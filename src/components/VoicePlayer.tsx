import { Play, Pause, Square, Volume2 } from 'lucide-react';
import { useSpeech, type SpeechLang } from '../hooks/useSpeech';

interface VoicePlayerProps {
  sanskrit: string;
  telugu: string;
  english: string;
  explanation: string;
}

function buildText(lang: SpeechLang, sanskrit: string, telugu: string, english: string, explanation: string) {
  if (lang === 'sanskrit') return sanskrit;
  if (lang === 'telugu')   return telugu;
  return `${english}. ${explanation}`;
}

const BTNS: { lang: SpeechLang; label: string; short: string; active: string; idle: string }[] = [
  {
    lang:   'sanskrit',
    label:  'Sanskrit',
    short:  'सं',
    active: 'bg-saffron-100 dark:bg-saffron-900/50 text-saffron-700 dark:text-saffron-200 border-saffron-400 dark:border-saffron-500 ring-2 ring-saffron-300 dark:ring-saffron-700',
    idle:   'bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-300 border-saffron-200 dark:border-saffron-900/50 hover:bg-saffron-100 dark:hover:bg-saffron-900/40',
  },
  {
    lang:   'telugu',
    label:  'తెలుగు',
    short:  'తె',
    active: 'bg-peacock-100 dark:bg-peacock-900/50 text-peacock-700 dark:text-peacock-200 border-peacock-400 dark:border-peacock-500 ring-2 ring-peacock-300 dark:ring-peacock-700',
    idle:   'bg-peacock-50 dark:bg-peacock-950/40 text-peacock-700 dark:text-peacock-300 border-peacock-200 dark:border-peacock-900/50 hover:bg-peacock-100 dark:hover:bg-peacock-900/40',
  },
  {
    lang:   'english',
    label:  'English',
    short:  'En',
    active: 'bg-marigold-100 dark:bg-marigold-900/50 text-marigold-700 dark:text-marigold-200 border-marigold-400 dark:border-marigold-500 ring-2 ring-marigold-300 dark:ring-marigold-700',
    idle:   'bg-marigold-50 dark:bg-marigold-950/40 text-marigold-700 dark:text-marigold-300 border-marigold-200 dark:border-marigold-900/50 hover:bg-marigold-100 dark:hover:bg-marigold-900/40',
  },
];

export function VoicePlayer({ sanskrit, telugu, english, explanation }: VoicePlayerProps) {
  const { speak, stop, status, activeLang, supported } = useSpeech();

  if (!supported) return null;

  const isActive = status === 'speaking' || status === 'paused';

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <Volume2 className="h-3.5 w-3.5 text-ink-400 flex-shrink-0" />
      <span className="text-[11px] text-ink-500 dark:text-ink-400 font-medium mr-0.5">Listen:</span>

      {BTNS.map(({ lang, label, short, active, idle }) => {
        const isThis   = activeLang === lang;
        const isSpeaking = isThis && status === 'speaking';
        const isPaused   = isThis && status === 'paused';
        return (
          <button
            key={lang}
            onClick={() => speak(buildText(lang, sanskrit, telugu, english, explanation), lang)}
            aria-label={`${isSpeaking ? 'Pause' : isPaused ? 'Resume' : 'Play'} ${label}`}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all ${isThis ? active : idle}`}
          >
            {isSpeaking ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3" />
            )}
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{short}</span>
          </button>
        );
      })}

      {isActive && (
        <button
          onClick={stop}
          aria-label="Stop"
          className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800 text-ink-500 dark:text-ink-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-500 text-[11px] transition-colors"
        >
          <Square className="h-3 w-3" />
          <span className="hidden sm:inline">Stop</span>
        </button>
      )}
    </div>
  );
}
