import { BookOpen, Heart, Sparkles, Users, Shield, Lightbulb, Mail } from 'lucide-react';
import { ChapterArtwork } from '../components/ChapterArtwork';
import { navigate } from '../hooks/useRouter';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <ChapterArtwork chapterNumber={2} className="w-full h-full rounded-full" variant="card" />
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-4">
          About the Bhagavad Gita
        </h1>
        <p className="text-ink-600 dark:text-ink-300 leading-relaxed max-w-2xl mx-auto">
          The Bhagavad Gita, meaning "The Song of the Divine," is a 700-verse sacred dialogue between Prince Arjuna and Lord Krishna. Set on the battlefield of Kurukshetra, it addresses life's deepest questions — duty, action, devotion, knowledge, and the nature of the self — with wisdom that remains profoundly relevant today.
        </p>
      </div>

      {/* What is the Gita */}
      <section className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-saffron-500" />
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">What is the Gita?</h2>
        </div>
        <div className="space-y-3 text-ink-600 dark:text-ink-300 leading-relaxed">
          <p>
            The Gita is part of the great Indian epic, the Mahabharata. When the warrior Arjuna faces the prospect of fighting his own family, he is paralyzed by grief and confusion. His charioteer, Krishna, guides him through a profound teaching that covers the nature of the soul, the meaning of duty, the paths of action, knowledge, and devotion, and the way to live with wisdom and peace.
          </p>
          <p>
            Though set on a battlefield, the Gita is not really about war. It is about the inner battle every person faces — between what is right and what is easy, between duty and fear, between wisdom and confusion. Its 18 chapters and 700 verses offer timeless guidance for living a meaningful life.
          </p>
        </div>
      </section>

      {/* Why for young minds */}
      <section className="rounded-3xl bg-gradient-to-br from-saffron-50 to-marigold-50/50 dark:from-ink-900 dark:to-ink-800 border border-saffron-100 dark:border-saffron-900/30 p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-marigold-500" />
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">Why for young minds?</h2>
        </div>
        <div className="space-y-3 text-ink-600 dark:text-ink-300 leading-relaxed">
          <p>
            The Gita speaks directly to the questions young people face today: How do I handle stress? How do I make good choices? What is my purpose? How do I stay calm when things go wrong? How do I do my best without worrying about results?
          </p>
          <p>
            This platform presents the Gita in simple, friendly language — with Telugu and English translations, easy explanations, short takeaways, quizzes, and progress tracking — so that children, teens, and young adults can learn at their own pace, in a way that feels relevant to their lives.
          </p>
        </div>
      </section>

      {/* How to use */}
      <section id="how-to-use" className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6 sm:p-8 mb-6 scroll-mt-20">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-peacock-500" />
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">How to use this platform</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: BookOpen, title: 'Read chapters', desc: 'Start with Chapter 1 and go in order, or jump to any chapter that interests you.' },
            { icon: Sparkles, title: 'Understand verses', desc: 'Each verse has Telugu, English, a simple explanation, and a short takeaway.' },
            { icon: Heart, title: 'Bookmark & note', desc: 'Save your favorite verses and add personal reflections to deepen your learning.' },
            { icon: Lightbulb, title: 'Take quizzes', desc: 'Test your understanding after each chapter and see which verses to revisit.' },
            { icon: Users, title: 'Track progress', desc: 'Watch your growth with progress rings, badges, and theme analysis.' },
            { icon: Sparkles, title: 'Ask Gita AI', desc: 'Have a question? Ask the AI companion for simple explanations anytime.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-ink-50/50 dark:bg-ink-800/30">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-800 dark:text-ink-100">{item.title}</h3>
                <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6 sm:p-8 mb-6 scroll-mt-20">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-peacock-500" />
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">Privacy note</h2>
        </div>
        <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
          Your privacy matters. All your progress — read verses, bookmarks, notes, quiz results, badges, and chat history — is stored locally in your browser. No account is required, and no personal data is sent to any server. The AI chatbot feature, when connected, sends your questions to an AI service for responses, but your learning data stays on your device.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="rounded-3xl bg-gradient-to-br from-peacock-50 to-saffron-50/30 dark:from-ink-900 dark:to-ink-800 border border-ink-100 dark:border-ink-800 p-6 sm:p-8 scroll-mt-20">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5 text-saffron-500" />
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">Contact</h2>
        </div>
        <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
          This is a learning platform created with care for young minds. For questions, feedback, or suggestions, please reach out to the site owner.
        </p>
        <button
          onClick={() => navigate('/chapters')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium hover:shadow-glow-soft transition-all"
        >
          Start learning <BookOpen className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
