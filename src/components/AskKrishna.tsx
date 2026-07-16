import { useState } from 'react';
import { Sparkles, Send, X, Loader2, User, MessageCircle } from 'lucide-react';
import type { Verse } from '../data/types';

interface AskKrishnaProps {
  verse: Verse;
  chapterNumber: number;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const suggestions = [
  'Explain this in simple words',
  'How does this apply to my life?',
  'What does this mean for students?',
  'Give me a real-life example',
];

export function AskKrishna({ verse, chapterNumber }: AskKrishnaProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [ageMode, setAgeMode] = useState<'child' | 'teen'>('teen');

  const systemContext = `You are Krishna, the divine teacher from the Bhagavad Gita. A ${ageMode === 'child' ? 'young child (age 8-12)' : 'teenager (age 13-18)'} is asking you about verse ${chapterNumber}.${verse.verseNumber}.

The verse says: "${verse.english}"

The explanation is: "${verse.explanation}"

Respond in a warm, wise, and age-appropriate way. For children, use simple words and stories. For teens, be direct and relatable. Keep responses to 3-4 sentences. Never break character. End with an encouraging question back to the student.`;

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemContext },
            ...messages.map(m => ({ role: m.role, content: m.text })),
            { role: 'user', content: text },
          ],
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const reply = data.content?.[0]?.text ?? data.reply ?? 'I am here with you, dear student. Please ask again.';
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      // Fallback response when API not available
      const fallback = ageMode === 'child'
        ? `This verse is teaching you something very important! ${verse.takeaway} Think about a time when you had to do something hard — that's exactly what this verse is about. Can you think of an example from your day?`
        : `This is one of the Gita's core teachings: "${verse.takeaway}". It's not about giving up — it's about acting with full dedication but without being attached to the outcome. How do you think this applies to something in your life right now?`;
      setMessages(prev => [...prev, { role: 'assistant', text: fallback }]);
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-xs font-medium text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 px-2 py-1.5 rounded-lg hover:bg-cosmic-50 dark:hover:bg-cosmic-950/30 transition-colors"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Ask Krishna
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ink-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-ink-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md flex flex-col max-h-[85vh] animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100 dark:border-ink-800">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cosmic-400 to-cosmic-600 flex items-center justify-center shadow-sm">
                  <Sparkles className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900 dark:text-ink-50">Ask Krishna</h3>
                  <p className="text-[10px] text-ink-400">About verse {chapterNumber}.{verse.verseNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Age mode toggle */}
                <div className="flex items-center bg-ink-100 dark:bg-ink-800 rounded-lg p-0.5">
                  {(['child', 'teen'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setAgeMode(mode)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors capitalize ${
                        ageMode === mode
                          ? 'bg-white dark:bg-ink-700 text-cosmic-600 dark:text-cosmic-400 shadow-sm'
                          : 'text-ink-500 dark:text-ink-400'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                <button onClick={() => setOpen(false)} className="h-8 w-8 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 flex items-center justify-center transition-colors">
                  <X className="h-4 w-4 text-ink-400" />
                </button>
              </div>
            </div>

            {/* Verse context */}
            <div className="px-5 py-3 bg-cosmic-50/50 dark:bg-cosmic-950/20 border-b border-cosmic-100 dark:border-cosmic-900/30">
              <p className="text-xs text-cosmic-700 dark:text-cosmic-300 italic line-clamp-2">
                "{verse.english}"
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">🪷</div>
                  <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">
                    {ageMode === 'child'
                      ? "Hi friend! Ask me anything about this verse and I'll explain it in a simple way!"
                      : "Ask me anything about this verse — I'll share what it means for your life today."}
                  </p>
                  {/* Suggestions */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestions.map(s => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs px-3 py-1.5 rounded-full bg-cosmic-50 dark:bg-cosmic-950/40 border border-cosmic-200 dark:border-cosmic-800 text-cosmic-700 dark:text-cosmic-300 hover:bg-cosmic-100 dark:hover:bg-cosmic-900/40 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cosmic-400 to-cosmic-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-saffron-500 text-white rounded-tr-sm'
                        : 'bg-ink-100 dark:bg-ink-800 text-ink-800 dark:text-ink-100 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                    {msg.role === 'user' && (
                      <div className="h-7 w-7 rounded-full bg-saffron-100 dark:bg-saffron-950/40 flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3.5 w-3.5 text-saffron-600" />
                      </div>
                    )}
                  </div>
                ))
              )}
              {loading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cosmic-400 to-cosmic-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="bg-ink-100 dark:bg-ink-800 rounded-2xl rounded-tl-sm px-4 py-3">
                    <Loader2 className="h-4 w-4 text-ink-400 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-4 border-t border-ink-100 dark:border-ink-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                  placeholder="Ask about this verse..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50/50 dark:bg-ink-800/50 text-sm text-ink-800 dark:text-ink-100 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-cosmic-400"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="h-10 w-10 rounded-xl bg-gradient-to-br from-cosmic-500 to-cosmic-600 text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
