// Serverless API route for text-to-speech.
//
// All three languages (Sanskrit, Telugu, English) are routed through OpenAI's
// gpt-4o-mini-tts FIRST when OPENAI_API_KEY is set — it's an authenticated,
// reliable API that reads Devanagari and Telugu script natively and can be
// steered to a genuine Indian-English accent for the English voice.
//
// This replaces relying on Google Translate's public translate_tts endpoint
// as the primary voice: that endpoint is unauthenticated, undocumented, rate
// limited, and was the actual cause of "voice not working" for Sanskrit/
// Telugu in production use (it silently throttles/fails under repeated
// requests, with no SLA). It also has NO regional English accents — `tl=en`
// and `tl=en-IN` return byte-identical audio (verified directly), so it could
// never produce a genuine Indian-English voice on its own.
//
// Fallback order per language:
//   English:          OpenAI gpt-4o-mini-tts -> Azure en-IN neural -> Google Translate
//   Sanskrit/Telugu:  OpenAI gpt-4o-mini-tts -> Google Translate
// The frontend (useSpeech.ts) additionally always prefers a local Indian
// browser voice over any server fallback when one is available on-device
// (English only — Sanskrit/Telugu browser voices essentially don't exist).
//
// SECURITY: All keys are read only from environment variables and never
// exposed to the frontend. Google's TTS endpoint is public but rate-limited;
// it is now only a last-resort fallback.
//
// Environment variables:
//   OPENAI_API_KEY        - enables OpenAI TTS for all three languages
//                           (shared with the Ask Gita AI chat feature)
//   OPENAI_TTS_VOICE      - optional, default "onyx"
//   AZURE_SPEECH_KEY      - alternative English voice source
//   AZURE_SPEECH_REGION   - its region, e.g. "centralindia" or "eastus"
//   AZURE_SPEECH_VOICE    - optional, default "en-IN-NeerjaNeural"
//
// Usage: POST /api/tts { text, lang } -> audio/mpeg

// This handler uses the Web-standard Request/Response API, so on Vercel it
// must run as an Edge Function rather than the default Node.js runtime.
export const config = { runtime: 'edge' };

const LANG_MAP: Record<string, string> = {
  'te-IN': 'te',
  'hi-IN': 'hi',
  'en-US': 'en',
  'en-GB': 'en',
  'en-IN': 'en',
};

export default async function handler(req: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  let body: { text?: string; lang?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const { text, lang } = body;
  if (!text || typeof text !== 'string') {
    return new Response(JSON.stringify({ error: 'text is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const bcp47 = lang || 'en-US';

  // Try OpenAI TTS first for ALL languages — authenticated and reliable,
  // unlike the Google Translate fallback below.
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      const audio = await fetchOpenAiTTS(text, openaiKey, process.env.OPENAI_TTS_VOICE || 'onyx', bcp47);
      return new Response(audio, {
        status: 200,
        headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-store', ...corsHeaders },
      });
    } catch {
      // Fall through to Azure (English only), then Google Translate below.
    }
  }

  if (bcp47.startsWith('en')) {
    const azureKey = process.env.AZURE_SPEECH_KEY;
    const azureRegion = process.env.AZURE_SPEECH_REGION;
    if (azureKey && azureRegion) {
      try {
        const audio = await fetchAzureTTS(text, azureKey, azureRegion, process.env.AZURE_SPEECH_VOICE || 'en-IN-NeerjaNeural');
        return new Response(audio, {
          status: 200,
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-store', ...corsHeaders },
        });
      } catch {
        // Fall through to the Google Translate fallback below.
      }
    }
  }

  const googleLang = LANG_MAP[bcp47] || bcp47.split('-')[0] || 'en';

  // Google Translate TTS has a ~200 char limit per request. Chunk longer text.
  const chunks = chunkText(text, 190);
  if (chunks.length === 0) {
    return new Response(JSON.stringify({ error: 'No text to speak' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    // For a single chunk, stream the audio directly.
    if (chunks.length === 1) {
      const audio = await fetchGoogleTTS(chunks[0], googleLang);
      return new Response(audio, {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'no-store',
          ...corsHeaders,
        },
      });
    }

    // For multiple chunks, concatenate the MP3 bytes.
    const buffers = await Promise.all(chunks.map((c) => fetchGoogleTTS(c, googleLang)));
    const total = buffers.reduce((sum, b) => sum + b.byteLength, 0);
    const merged = new Uint8Array(total);
    let offset = 0;
    for (const b of buffers) {
      merged.set(new Uint8Array(b), offset);
      offset += b.byteLength;
    }
    return new Response(merged, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
        ...corsHeaders,
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'TTS service unavailable' }),
      { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

function chunkText(text: string, maxLen: number): string[] {
  // Split on sentence boundaries where possible, then hard-wrap.
  const sentences = text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?।])\s+/);
  const chunks: string[] = [];
  let current = '';
  for (const s of sentences) {
    if (s.length > maxLen) {
      if (current) { chunks.push(current); current = ''; }
      for (let i = 0; i < s.length; i += maxLen) {
        chunks.push(s.slice(i, i + maxLen));
      }
      continue;
    }
    if ((current + ' ' + s).trim().length > maxLen) {
      if (current) chunks.push(current);
      current = s;
    } else {
      current = (current ? current + ' ' : '') + s;
    }
  }
  if (current) chunks.push(current);
  return chunks.filter(Boolean);
}

const OPENAI_TTS_INSTRUCTIONS: Record<'sanskrit' | 'telugu' | 'english', string> = {
  sanskrit:
    'This text is a Sanskrit shloka written in Devanagari script. Speak it clearly and reverently, with correct traditional Sanskrit pronunciation, a slow deliberate pace, and natural pauses between phrases — the way it would be chanted or recited in an Indian classroom.',
  telugu:
    'This text is written in Telugu script. Speak it fluently and naturally in Telugu, as a native Telugu speaker would, with clear pronunciation suitable for young learners.',
  english:
    'Speak as a warm, articulate native Indian English speaker, with a natural Indian English accent and cadence (as commonly heard from an educated speaker from India) — not American or British. Gentle, clear pace suitable for young learners.',
};

function ttsLangKind(bcp47: string): 'sanskrit' | 'telugu' | 'english' {
  if (bcp47 === 'hi-IN') return 'sanskrit';
  if (bcp47 === 'te-IN') return 'telugu';
  return 'english';
}

async function fetchOpenAiTTS(text: string, key: string, voice: string, bcp47: string): Promise<ArrayBuffer> {
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice,
      input: text,
      instructions: OPENAI_TTS_INSTRUCTIONS[ttsLangKind(bcp47)],
      response_format: 'mp3',
    }),
  });

  if (!res.ok) {
    throw new Error(`OpenAI TTS returned ${res.status}`);
  }
  return await res.arrayBuffer();
}

async function fetchAzureTTS(text: string, key: string, region: string, voice: string): Promise<ArrayBuffer> {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  const ssml = `<speak version="1.0" xml:lang="en-IN"><voice name="${voice}">${escaped}</voice></speak>`;

  const res = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
      'User-Agent': 'BhagavadGitaForYoungMinds',
    },
    body: ssml,
  });

  if (!res.ok) {
    throw new Error(`Azure TTS returned ${res.status}`);
  }
  return await res.arrayBuffer();
}

async function fetchGoogleTTS(text: string, lang: string): Promise<ArrayBuffer> {
  const url =
    'https://translate.google.com/translate_tts?' +
    new URLSearchParams({
      ie: 'UTF-8',
      q: text,
      tl: lang,
      total: '1',
      idx: '0',
      textlen: String(text.length),
      client: 'tw-ob',
      prev: 'input',
    });

  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://translate.google.com/',
      'Accept': 'audio/mpeg, audio/*; q=0.9',
    },
  });

  if (!res.ok) {
    throw new Error(`Google TTS returned ${res.status}`);
  }
  return await res.arrayBuffer();
}
