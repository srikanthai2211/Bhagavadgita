import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { ChatPanel } from './ChatPanel';
import { navigate, useRouter } from '../hooks/useRouter';

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const { route } = useRouter();

  // Don't show on the dedicated chat page
  const onChatPage = route.path === '/ask-gita';

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (onChatPage) return null;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 shadow-glow flex items-center justify-center hover:scale-105 transition-transform animate-pulse-glow focus-ring"
        aria-label="Open Ask Gita AI"
      >
        <Sparkles className="h-6 w-6 text-white" />
      </button>

      {/* Panel overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-end sm:p-5">
          <div
            className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm sm:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full sm:w-[400px] h-[80vh] sm:h-[600px] bg-white dark:bg-ink-900 rounded-t-3xl sm:rounded-3xl shadow-premium border border-ink-200 dark:border-ink-800 flex flex-col overflow-hidden animate-fade-in-up">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink-200 dark:border-ink-800 bg-gradient-to-r from-saffron-50 to-marigold-50 dark:from-ink-900 dark:to-ink-800">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold text-ink-800 dark:text-ink-100 text-sm">
                    Ask Gita AI
                  </div>
                  <div className="text-[10px] text-ink-500 dark:text-ink-400">Your learning companion</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate('/ask-gita');
                  }}
                  className="text-[11px] text-saffron-600 dark:text-saffron-400 hover:underline px-2"
                >
                  Open full page
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-ink-500" />
                </button>
              </div>
            </div>
            <ChatPanel compact />
          </div>
        </div>
      )}
    </>
  );
}
