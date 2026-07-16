import { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import { navigate } from '../hooks/useRouter';

const slides = [
  {
    id: 1,
    emoji: '⚔️',
    title: 'The Greatest War',
    subtitle: 'Kurukshetra, 3000 BCE',
    body: `Imagine two armies — numbering millions — standing on opposite sides of a vast battlefield called Kurukshetra. The air is thick with the sound of war drums, trumpets, and the nervous breathing of warriors.

This is not just any war. It is a war between cousins — the Pandavas and the Kauravas — fighting for the throne of Hastinapura.`,
    bg: 'from-ink-900 via-ink-800 to-saffron-950',
    accent: 'text-saffron-300',
  },
  {
    id: 2,
    emoji: '🏹',
    title: 'Who is Arjuna?',
    subtitle: 'The world\'s greatest archer',
    body: `Arjuna is the third of the five Pandava brothers. He is considered the greatest archer in the world — a warrior so skilled that even the gods taught him.

He is brave, noble, and good-hearted. He has spent his entire life preparing for this moment.

But as his chariot rides to the centre of the battlefield...something breaks inside him.`,
    bg: 'from-peacock-950 via-ink-900 to-ink-800',
    accent: 'text-peacock-300',
  },
  {
    id: 3,
    emoji: '💔',
    title: 'Arjuna\'s Crisis',
    subtitle: 'The moment everything changes',
    body: `Standing opposite him are not just enemies — they are his grandfather Bhishma, his teacher Dronacharya, his cousins, his uncles, and his dear friends.

Arjuna\'s bow slips from his hands. His legs shake. Tears fall from his eyes.

"I cannot fight them," he tells his charioteer. "What is the point of a kingdom if it is won by killing everyone I love?"

This is where the Bhagavad Gita begins.`,
    bg: 'from-lotus-950 via-ink-900 to-ink-900',
    accent: 'text-lotus-300',
  },
  {
    id: 4,
    emoji: '🪷',
    title: 'Who is Krishna?',
    subtitle: 'The divine charioteer',
    body: `Arjuna\'s charioteer is no ordinary man — it is Krishna, the eighth avatar of Lord Vishnu.

Krishna has agreed to drive Arjuna\'s chariot, but not to fight. He is wisdom itself, clothed in human form.

When Arjuna collapses in despair, Krishna does something unexpected — he doesn\'t tell him to simply "be brave." He teaches him the deepest secrets of life, the soul, and the universe.`,
    bg: 'from-cosmic-950 via-ink-900 to-ink-800',
    accent: 'text-cosmic-300',
  },
  {
    id: 5,
    emoji: '📖',
    title: 'The Bhagavad Gita',
    subtitle: '700 verses · 18 chapters · Timeless wisdom',
    body: `The conversation between Arjuna and Krishna on that battlefield lasted only a short time — but the wisdom Krishna shared has guided humanity for over 5,000 years.

The Bhagavad Gita means "The Song of God."

It answers the deepest questions: What is the soul? What is duty? How should we act? What happens after death? How do we find peace?

You are about to read it.`,
    bg: 'from-marigold-950 via-saffron-950 to-ink-900',
    accent: 'text-marigold-300',
  },
  {
    id: 6,
    emoji: '✨',
    title: 'What Will You Learn?',
    subtitle: 'Ancient wisdom for your modern life',
    body: `The Gita is not just an old religious text — it is a guide for living.

In its 18 chapters, you will learn:
• How to act without fear of failure
• Why the soul is eternal and cannot be destroyed  
• How to stay calm in the middle of chaos
• What real courage, love, and wisdom look like
• Why doing your duty is its own reward

Every verse was written for you, right now, in your life.`,
    bg: 'from-saffron-950 via-ink-900 to-ink-950',
    accent: 'text-saffron-300',
  },
];

export function StoryPrimerPage() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const isLast = current === slides.length - 1;

  return (
    <div className={`min-h-[calc(100vh-64px)] bg-gradient-to-br ${slide.bg} flex flex-col transition-all duration-700`}>
      <div className="flex-1 flex flex-col max-w-2xl mx-auto px-4 py-10 w-full">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Slide content */}
        <div className="flex-1 flex flex-col justify-center animate-fade-in" key={current}>
          {/* Emoji */}
          <div className="text-7xl mb-6 text-center">{slide.emoji}</div>

          {/* Subtitle */}
          <p className={`text-xs uppercase tracking-widest font-semibold text-center mb-2 ${slide.accent}`}>
            {slide.subtitle}
          </p>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white text-center mb-8 leading-tight">
            {slide.title}
          </h1>

          {/* Body */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-white/90 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {slide.body}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {current > 0 ? (
            <button
              onClick={() => setCurrent(c => c - 1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
          ) : (
            <button
              onClick={() => navigate('/chapters')}
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Skip story
            </button>
          )}

          {isLast ? (
            <button
              onClick={() => navigate('/chapters')}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-marigold-400 to-saffron-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Begin reading
            </button>
          ) : (
            <button
              onClick={() => setCurrent(c => c + 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium text-sm transition-all"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Chapter count footer */}
        <p className="text-white/40 text-xs text-center mt-6">
          {current + 1} of {slides.length}
        </p>
      </div>
    </div>
  );
}
