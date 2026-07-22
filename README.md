# Bhagavadgita

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-kqdwk8m2)

A bilingual (Telugu/English) Bhagavad Gita learning platform for young learners —
reading, quizzes, progress tracking, and an "Ask Gita AI" companion.

## Running locally

```
npm install
npm run dev
```

## Deploying

The project deploys as-is to Vercel (or any static host + Edge Functions
provider): `npm run build` produces `dist/`, and `api/chat.ts` / `api/tts.ts`
run as Edge Functions. Routing is hash-based, so no server rewrite rules are
needed.

### Optional environment variables

None of these are required — the app works fully offline without them.

| Variable | Purpose |
|---|---|
| `OPENAI_API_KEY` | Enables real GPT responses in "Ask Gita AI" (falls back to the built-in offline knowledge engine if unset), **and** enables a genuine Indian-English voice for verse read-aloud via `gpt-4o-mini-tts` (same key, both features). |
| `OPENAI_MODEL` | Chat model name, default `gpt-4o-mini`. |
| `OPENAI_BASE_URL` | For OpenAI-compatible chat endpoints, default `https://api.openai.com/v1`. |
| `OPENAI_TTS_VOICE` | Override the OpenAI TTS voice, default `onyx`. |
| `AZURE_SPEECH_KEY` + `AZURE_SPEECH_REGION` | Alternative Indian-English voice source (`en-IN-NeerjaNeural`) if you'd rather use Azure instead of OpenAI for TTS. |
| `AZURE_SPEECH_VOICE` | Override the Azure voice, default `en-IN-NeerjaNeural` (e.g. `en-IN-PrabhatNeural`). |

Without any of these, English audio falls back to the browser's local voice
(preferring any installed Indian-English voice) or a generic Google Translate
voice.

**Local dev:** create a `.env` file at the repo root with `OPENAI_API_KEY=...`
(already in `.gitignore` — never commit this file).

