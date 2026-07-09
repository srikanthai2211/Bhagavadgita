import { Sparkles, Info } from 'lucide-react';
import { ChatPanel } from '../components/ChatPanel';

export function AskGitaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-6">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center mx-auto mb-4 shadow-glow-soft animate-float">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Ask Gita AI
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          Your personal guide to the Bhagavad Gita. Ask about any verse, chapter, or theme — in Telugu or English.
        </p>
      </div>

      <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-premium overflow-hidden h-[70vh] flex flex-col">
        <ChatPanel />
      </div>

      <div className="mt-4 flex items-start gap-2 text-xs text-ink-500 dark:text-ink-400 bg-saffron-50/50 dark:bg-saffron-950/20 rounded-xl p-3">
        <Info className="h-4 w-4 text-saffron-500 flex-shrink-0 mt-0.5" />
        <p>
          AI answers are generated to support your learning and may sometimes be imperfect. Please also read the verses directly for the most authentic understanding. Your chat history is stored locally on your device.
        </p>
      </div>
    </div>
  );
}
