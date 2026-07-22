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

// Names/lang tags known to be genuine Indian-accented voices across
// Windows, macOS/iOS, Android and Chrome/Edge voice packs.
const indianVoiceNames = ['india', 'neerja', 'prabhat', 'ravi', 'veena', 'heera', 'rishi', 'priya', 'lekha'];

function isIndianVoice(v: SpeechSynthesisVoice): boolean {
  const lang = v.lang.toLowerCase();
  const name = v.name.toLowerCase();
  return lang === 'en-in' || lang.startsWith('en-in-') || indianVoiceNames.some((n) => name.includes(n));
}

// Pick the best available browser voice for the requested language.
// NEVER falls back to English for non-English content.
// For English specifically, a genuine Indian-accented voice is always
// preferred over a "high quality" but wrong-accent voice (e.g. Google US
// English) — accent correctness outranks generic voice-quality hints.
function pickVoice(bcp47: string, altLang: string): SpeechSynthesisVoice | undefined {
  const all = window.speechSynthesis.getVoices();
  const primary = bcp47.split('-')[0];
  const nativeHints = ['google', 'microsoft', 'natural', 'premium', 'enhanced'];
  const byLang = (lang: string) =>
    all.filter(v => v.lang === lang || v.lang.startsWith(lang + '-'));

  const exact = byLang(bcp47);
  const exactIndian = exact.find(isIndianVoice);
  if (exactIndian) return exactIndian;
  for (const hint of nativeHints) {
    const v = exact.find(v => v.name.toLowerCase().includes(hint));
    if (v) return v;
  }
  if (exact.length) return exact[0];

  const family = byLang(primary);
  // Check the whole English family (en-US, en-GB, en-AU, en-IN, ...) for a
  // genuinely Indian voice BEFORE accepting any other English accent.
  const familyIndian = family.find(isIndianVoice);
  if (familyIndian) return familyIndian;
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

// Check specifically for a genuine Indian-accented local voice. Almost every
// browser ships SOME English voice (e.g. a generic en-US one), so checking
// "any English voice exists" is the wrong test for this app — it would keep
// picking a US/UK-accented local voice over the server's real Indian voice.
function hasIndianVoice(bcp47: string, altLang: string): boolean {
  const v = pickVoice(bcp47, altLang);
  return !!v && isIndianVoice(v);
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
      utt.onerror  = () => { setStatus('error'); uttRef.current = null; };
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
    // Set the target language immediately so an error state can still be
    // attributed to the right button, even if the request fails before any
    // audio event fires.
    setActiveLang(lang);
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
      audio.onplay = () => setStatus('speaking');
      audio.onpause = () => setStatus('paused');
      audio.onended = () => {
        setStatus('idle'); setActiveLang(null);
        URL.revokeObjectURL(url);
        audioRef.current = null;
      };
      audio.onerror = () => {
        setStatus('error');
        URL.revokeObjectURL(url);
        audioRef.current = null;
      };
      await audio.play();
    } catch (err) {
      // If the server TTS call fails entirely (e.g. offline), fall back to
      // any local browser voice as a last resort — better a wrong accent
      // than silence.
      if (supported && hasNativeVoice(cfg.bcp47, cfg.altLang)) {
        speakWithBrowser(text, lang);
      } else {
        setStatus('error');
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
    // For English, only use the local browser voice when it is a genuine
    // Indian-accented one (free, instant, no network). Otherwise prefer the
    // server TTS route, which (via OpenAI/Azure) can produce a real Indian
    // English voice — a generic local en-US/en-GB voice is not an acceptable
    // substitute for this app.
    if (lang === 'english') {
      if (supported && hasIndianVoice(cfg.bcp47, cfg.altLang)) {
        speakWithBrowser(text, lang);
      } else {
        speakWithGoogleTTS(text, lang);
      }
    }
  }, [activeLang, status, supported, speakWithGoogleTTS, speakWithBrowser]);

  return { speak, stop, status, activeLang, supported };
}
