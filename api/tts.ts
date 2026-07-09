// Serverless API route for text-to-speech using Google Translate's TTS endpoint.
//
// Browsers rarely ship Telugu/Sanskrit TTS voices, so the Web Speech API falls
// back to English. This route proxies Google Translate's TTS endpoint, which
// has native, natural-sounding Telugu (te-IN), Hindi (hi-IN), and English
// (en-US) voices.
//
// SECURITY: No API key required. Google's TTS endpoint is public but
// rate-limited; this route is intended for low-volume educational use.
//
// Usage: POST /api/tts { text, lang } -> audio/mpeg

const LANG_MAP: Record<string, string> = {
  'te-IN': 'te',
  'hi-IN': 'hi',
  'en-US': 'en',
  'en-GB': 'en',
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
