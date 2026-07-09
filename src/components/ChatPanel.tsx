import { useEffect, useRef, useState } from 'react';
import { Send, Trash2, Loader2, Sparkles } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { tryApiChat, offlineReply, type ChatMessage, type ChatContext } from '../lib/chat';

interface ChatPanelProps {
  context?: ChatContext;
  compact?: boolean;
}

const suggestedPrompts = [
  'What is the Bhagavad Gita?',
  'Explain karma yoga simply',
  'Summarize Chapter 2 for kids',
  'What does Krishna say about fear?',
  'Explain verse 2.47',
  'Which chapter teaches meditation?',
  'How do I find peace?',
  'Explain 2.47 in Telugu',
];

export function ChatPanel({ context, compact }: ChatPanelProps) {
  const progress = useProgress();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const messages: ChatMessage[] = progress.state.chatHistory.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setInput('');
    setLoading(true);
    progress.addChatMessage({ role: 'user', content: text });

    // Try real API first (6 s timeout); fall back to smart offline engine
    const apiReply = await tryApiChat([...messages, { role: 'user', content: text }], context);
    const reply = apiReply ?? offlineReply(text, context);
    progress.addChatMessage({ role: 'assistant', content: reply });
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div
        ref={scrollRef}
        className={`flex-1 overflow-y-auto px-4 py-4 space-y-4 ${compact ? 'max-h-[45vh]' : ''}`}
      >
        {messages.length === 0 && (
          <div className="text-center py-6">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center mx-auto mb-3 shadow-glow-soft">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold text-ink-800 dark:text-ink-100 mb-1">
              Ask Gita AI
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400 max-w-sm mx-auto mb-4">
              Ask anything about the Bhagavad Gita — verses, chapters, themes, in Telugu or English.
            </p>
            <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
              {suggestedPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-xs px-3 py-1.5 rounded-full bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-900/40 hover:bg-saffron-100 dark:hover:bg-saffron-900/40 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'assistant' && (
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </div>
            )}
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line leading-relaxed ${
                m.role === 'user'
                  ? 'bg-saffron-500 text-white rounded-br-md'
                  : 'bg-ink-100 dark:bg-ink-800 text-ink-800 dark:text-ink-100 rounded-bl-md'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-2 justify-start items-end">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="bg-ink-100 dark:bg-ink-800 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-saffron-400 animate-typing" style={{ animationDelay: '0ms' }} />
              <span className="h-2 w-2 rounded-full bg-saffron-400 animate-typing" style={{ animationDelay: '200ms' }} />
              <span className="h-2 w-2 rounded-full bg-saffron-400 animate-typing" style={{ animationDelay: '400ms' }} />
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-ink-200 dark:border-ink-800 p-3 bg-white dark:bg-ink-900">
        {messages.length > 0 && (
          <div className="flex justify-end mb-2">
            <button
              onClick={progress.clearChat}
              className="flex items-center gap-1 text-[11px] text-ink-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="h-3 w-3" /> Clear chat
            </button>
          </div>
        )}
        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the Gita..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-sm text-ink-800 dark:text-ink-100 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-saffron-400"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="h-10 w-10 rounded-xl bg-gradient-to-br from-marigold-400 to-saffron-600 text-white flex items-center justify-center disabled:opacity-50 hover:shadow-glow-soft transition-all focus-ring flex-shrink-0"
            aria-label="Send"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </form>
        <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-2 text-center">
          Powered by embedded Gita knowledge · Connect OpenAI API key for extended AI responses
        </p>
      </div>
    </div>
  );
}
