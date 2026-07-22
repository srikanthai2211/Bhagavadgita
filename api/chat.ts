// Serverless API route for the Ask Gita AI chatbot.
//
// This file is written to work as a Vercel/Netlify-style serverless function
// (default export of a fetch-style handler) AND as a simple Node/Express
// endpoint during local development.
//
// SECURITY: The OpenAI API key is read ONLY from environment variables
// (OPENAI_API_KEY) and is never exposed to the frontend. The frontend calls
// /api/chat, and this route proxies the request to the OpenAI-compatible API.
//
// To enable AI responses, set these environment variables:
//   OPENAI_API_KEY   - your OpenAI (or compatible) API key
//   OPENAI_MODEL      - model name (default: gpt-4o-mini)
//   OPENAI_BASE_URL   - optional, for OpenAI-compatible endpoints (default: https://api.openai.com/v1)
//
// If no API key is configured, the route returns a 503 so the frontend can
// fall back to its built-in offline reply generator.

// This handler uses the Web-standard Request/Response API, so on Vercel it
// must run as an Edge Function rather than the default Node.js runtime.
export const config = { runtime: 'edge' };

const DEFAULT_MODEL = 'gpt-4o-mini';
const DEFAULT_BASE_URL = 'https://api.openai.com/v1';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatContext {
  chapter?: number;
  verse?: number;
  language?: string;
  level?: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
  context?: ChatContext;
}

const SYSTEM_PROMPT = `You are "Ask Gita AI", a warm, friendly, and knowledgeable companion that helps children, teens, students, and young adults (up to age 25) understand the Bhagavad Gita.

Guidelines:
- Use simple, clear, respectful, and inspiring language suitable for young learners.
- Explain verses, chapters, and themes in a way that connects to real life (school, choices, emotions, courage, friendship, stress, discipline, focus, kindness, peace).
- Support both Telugu and English. When the user asks in Telugu or requests Telugu, respond in Telugu using the Telugu script.
- Preserve the spiritual meaning while making it easy to understand. Avoid overly academic or difficult philosophical jargon.
- Keep answers concise and focused. Use short paragraphs or bullet points when helpful.
- When referencing a verse, include the chapter and verse number (e.g., 2.47).
- Encourage the learner to also read the verses directly for the most authentic understanding.
- If asked about something outside the Bhagavad Gita or Hindu wisdom traditions, gently guide back to the Gita's teachings.
- Be encouraging, never judgmental. Celebrate the learner's curiosity.`;

function buildContextString(context?: ChatContext): string {
  if (!context) return '';
  const parts: string[] = [];
  if (context.chapter) parts.push(`The learner is currently reading Chapter ${context.chapter}.`);
  if (context.verse) parts.push(`The learner is currently on verse ${context.chapter}.${context.verse}.`);
  if (context.language) parts.push(`Preferred language: ${context.language}.`);
  if (context.level) parts.push(`Learner level: ${context.level}.`);
  return parts.length > 0 ? `\n\nContext: ${parts.join(' ')}` : '';
}

// Build a compact knowledge-base snippet from the app's curated verse data
// so the AI grounds its answers in the same content shown to the learner.
// This reduces hallucination and keeps AI answers consistent with the app.
async function buildKnowledgeBase(context?: ChatContext): Promise<string> {
  try {
    const { chapters } = await import('../src/data/gita');
    const focusChapter = context?.chapter;

    // If context specifies a chapter, include all its verses
    if (focusChapter) {
      const ch = chapters.find((c) => c.chapterNumber === focusChapter);
      if (!ch) return '';
      const verseTexts = ch.verses.map((v) =>
        `${ch.chapterNumber}.${v.verseNumber}: ${v.english} (Takeaway: ${v.takeaway})`
      );
      return `\n\nKnowledge base for Chapter ${focusChapter} "${ch.englishTitle}" (${ch.mainTheme}):\n${ch.summary}\n${verseTexts.join('\n')}`;
    }

    // No chapter context: include a compact overview of all chapters
    const overview = chapters.map((ch) =>
      `Ch${ch.chapterNumber} "${ch.englishTitle}" (${ch.mainTheme}): ${ch.summary}`
    ).join('\n');
    return `\n\nKnowledge base (use these for accurate references):\n${overview}`;
  } catch {
    // If the data module can't be loaded, skip the knowledge base.
    return '';
  }
}

async function handleChat(req: Request): Promise<Response> {
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

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: 'AI is not configured. The site owner needs to set OPENAI_API_KEY. Using offline mode.',
        offline: true,
      }),
      { status: 503, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const { messages, context } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'Messages array is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const model = process.env.OPENAI_MODEL || DEFAULT_MODEL;
  const baseUrl = process.env.OPENAI_BASE_URL || DEFAULT_BASE_URL;

  const systemContent = SYSTEM_PROMPT + await buildKnowledgeBase(context) + buildContextString(context);

  try {
    const apiRes = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemContent }, ...messages],
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      return new Response(
        JSON.stringify({ error: `AI service error: ${apiRes.status}` }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const data = await apiRes.json();
    const reply = data?.choices?.[0]?.message?.content ?? 'I could not generate a response. Please try again.';

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to reach AI service' }),
      { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

// Default export for serverless platforms (Vercel, Netlify, Cloudflare, Deno Deploy)
export default async function handler(req: Request): Promise<Response> {
  return handleChat(req);
}
