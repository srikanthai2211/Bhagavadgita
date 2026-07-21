import { useState, useEffect, useCallback, useRef } from 'react';

export type SpeechLang = 'sanskrit' | 'telugu' | 'english';
export type SpeechStatus = 'idle' | 'speaking' | 'paused' | 'error' | 'unsupported';

const langCfg: Record<SpeechLang, { bcp47: string; altLang: string; rate: number; googleLang: string }> = {
  sanskrit: { bcp47: 'hi-IN', altLang: 'hi',    rate: 0.78, googleLang: 'hi' },
  telugu:   { bcp47: 'te-IN', altLang: 'te',    rate: 0.82, googleLang: 'te' },
  // Prefer a native Indian-English voice (e.g. Microsoft Neerja/Prabhat,
  // Google en-IN, Apple Rishi) over generic en-US/en-GB voices.
  english:  { bcp47: 'en-IN', altLang: 'en-GB', rate: 0.92, googleLang: 'en' },
};

// Pick the best available browser voice for the requested language.
// NEVER falls back to English for non-English content.
function pickVoice(bcp47: string, altLang: string): SpeechSynthesisVoice | undefined {
  const all = window.speechSynthesis.getVoices();
  const primary = bcp47.split('-')[0];
  const nativeHints = ['google', 'microsoft', 'natural', 'premium', 'enhanced'];
  const byLang = (lang: string) =>
    all.filter(v => v.lang === lang || v.lang.startsWith(lang + '-'));

  const exact = byLang(bcp47);
  for (const hint of nativeHints) {
    const v = exact.find(v => v.name.toLowerCase().includes(hint));
    if (v) return v;
  }
  if (exact.length) return exact[0];

  const family = byLang(primary);
  for (const hint of nativeHints) {
    const v = family.find(v => v.name.toLowerCase().includes(hint));
    if (v) return v;
  }
  if (family.length) return family[0];

  const alt = byLang(altLang);
  if (alt.length) return alt[0];

  return undefined;
}

// Check if a native browser voice exists for the given language.
function hasNativeVoice(bcp47: string, altLang: string): boolean {
  return pickVoice(bcp47, altLang) !== undefined;
}

export function useSpeech() {
  const [status, setStatus] = useState<SpeechStatus>('idle');
  const [activeLang, setActiveLang] = useState<SpeechLang | null>(null);
  const [voicesReady, setVoicesReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    if (!supported) return;
    const check = () => {
      if (window.speechSynthesis.getVoices().length > 0) setVoicesReady(true);
    };
    check();
    const onVoices = () => setVoicesReady(true);
    window.speechSynthesis.addEventListener('voiceschanged', onVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
  }, [supported]);

  useEffect(() => () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    if (supported) window.speechSynthesis.cancel();
  }, [supported]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    if (supported) window.speechSynthesis.cancel();
    setStatus('idle');
    setActiveLang(null);
    uttRef.current = null;
  }, [supported]);

  const speakWithBrowser = useCallback((text: string, lang: SpeechLang) => {
    if (!supported) { setStatus('unsupported'); return; }
    const cfg = langCfg[lang];
    const utt = new SpeechSynthesisUtterance(text.replace(/\n/g, ' '));
    utt.lang = cfg.bcp47;
    utt.rate = cfg.rate;
    utt.pitch = 1.0;

    const launch = () => {
      const v = pickVoice(cfg.bcp47, cfg.altLang);
      if (v) utt.voice = v;
      utt.onstart  = () => { setStatus('speaking'); setActiveLang(lang); };
      utt.onpause  = () => setStatus('paused');
      utt.onresume = () => setStatus('speaking');
      utt.onend    = () => { setStatus('idle'); setActiveLang(null); uttRef.current = null; };
      utt.onerror  = () => { setStatus('error');  setActiveLang(null); uttRef.current = null; };
      uttRef.current = utt;
      setStatus('speaking');
      setActiveLang(lang);
      window.speechSynthesis.speak(utt);
    };

    if (!voicesReady && window.speechSynthesis.getVoices().length === 0) {
      setTimeout(launch, 120);
    } else {
      launch();
    }
  }, [supported, voicesReady]);

  const speakWithGoogleTTS = useCallback(async (text: string, lang: SpeechLang) => {
    const cfg = langCfg[lang];
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, lang: cfg.bcp47 }),
      });
      if (!res.ok) throw new Error('TTS fetch failed');
      // Verify we got audio, not an HTML fallback page.
      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('audio')) throw new Error('Not audio response');
      const blob = await res.blob();
      if (blob.size === 0) throw new Error('Empty audio');
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onplay = () => { setStatus('speaking'); setActiveLang(lang); };
      audio.onpause = () => setStatus('paused');
      audio.onended = () => {
        setStatus('idle'); setActiveLang(null);
        URL.revokeObjectURL(url);
        audioRef.current = null;
      };
      audio.onerror = () => {
        setStatus('error'); setActiveLang(null);
        URL.revokeObjectURL(url);
        audioRef.current = null;
      };
      await audio.play();
    } catch (err) {
      // If Google TTS fails, try browser speech as a last resort.
      if (supported && hasNativeVoice(cfg.bcp47, cfg.altLang)) {
        speakWithBrowser(text, lang);
      } else {
        setStatus('error');
        setActiveLang(null);
      }
    }
  }, [supported, speakWithBrowser]);

  const speak = useCallback((text: string, lang: SpeechLang) => {
    // Pause/resume logic for the same language.
    if (activeLang === lang) {
      if (status === 'speaking') {
        if (audioRef.current) { audioRef.current.pause(); setStatus('paused'); return; }
        if (supported) { window.speechSynthesis.pause(); setStatus('paused'); return; }
      }
      if (status === 'paused') {
        if (audioRef.current) { audioRef.current.play(); setStatus('speaking'); return; }
        if (supported) { window.speechSynthesis.resume(); setStatus('speaking'); return; }
      }
    }

    // Stop anything currently playing.
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; audioRef.current = null; }
    if (supported) window.speechSynthesis.cancel();

    const cfg = langCfg[lang];
    // For Telugu and Sanskrit, always use Google TTS — browsers rarely have
    // native voices for these languages and fall back to English.
    if (lang === 'telugu' || lang === 'sanskrit') {
      speakWithGoogleTTS(text, lang);
      return;
    }
    // For English, use the browser's Web Speech API (reliable, no network).
    // Fall back to Google TTS only if no browser voice is available.
    if (lang === 'english') {
      if (supported && hasNativeVoice(cfg.bcp47, cfg.altLang)) {
        speakWithBrowser(text, lang);
      } else {
        speakWithGoogleTTS(text, lang);
      }
    }
  }, [activeLang, status, supported, speakWithGoogleTTS, speakWithBrowser]);

  return { speak, stop, status, activeLang, supported };
}
