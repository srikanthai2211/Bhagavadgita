import { Sparkles, BookOpen, Brain, Heart, Shield, Compass, Eye, Target, Flame, Award, Users, ChevronRight, Sun, ListChecks, BookMarked } from 'lucide-react';
import { VerseOfTheDay } from '../components/VerseOfTheDay';
import { ChapterArtwork } from '../components/ChapterArtwork';
import { ProgressRing } from '../components/ProgressRing';
import { Badge } from '../components/Badge';
import { StreakWidget } from '../components/StreakWidget';
import { chapters } from '../data/gita';
import { heroImages } from '../data/chapterImages';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';

const benefits = [
  { icon: Brain, title: 'Wisdom', desc: 'Understand life\'s big questions with clarity.', color: 'from-saffron-400 to-saffron-600' },
  { icon: Shield, title: 'Courage', desc: 'Face challenges without fear.', color: 'from-peacock-400 to-peacock-600' },
  { icon: Target, title: 'Discipline', desc: 'Build focus and steady habits.', color: 'from-marigold-400 to-saffron-500' },
  { icon: Heart, title: 'Peace', desc: 'Stay calm in success and failure.', color: 'from-lotus-400 to-lotus-600' },
  { icon: Compass, title: 'Self-Control', desc: 'Master your mind and senses.', color: 'from-cosmic-400 to-cosmic-600' },
  { icon: Flame, title: 'Devotion', desc: 'Love what is good and true.', color: 'from-saffron-400 to-lotus-500' },
  { icon: Eye, title: 'Clarity', desc: 'See right from wrong clearly.', color: 'from-peacock-400 to-cosmic-500' },
  { icon: Award, title: 'Right Action', desc: 'Do your duty with awareness.', color: 'from-marigold-400 to-saffron-600' },
];

export function LandingPage() {
  const progress = useProgress();
  const featuredChapters = [1, 2, 3, 6, 11, 18].map((n) => chapters.find((c) => c.chapterNumber === n)!).filter(Boolean);

  return (
    <div className="overflow-hidden">
      {/* Hero — full-bleed spiritual image with overlay */}
      <section className="relative min-h-[88vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImages.main}
            alt="Krishna and Arjuna chariot sculpture at sunrise"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Multi-layer overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-ink-950/40" />
          {/* Warm saffron tint for spiritual mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/40 via-transparent to-marigold-900/30 mix-blend-overlay" />
        </div>

        {/* Soft glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-marigold-300/20 via-saffron-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
              <Sun className="h-3.5 w-3.5 text-marigold-300" />
              <span className="text-xs font-medium text-white/90">
                Learn the Gita in Telugu & English
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up drop-shadow-2xl">
              Bhagavad Gita
              <span className="block mt-2 bg-gradient-to-r from-marigold-200 via-saffron-100 to-marigold-200 bg-clip-text text-transparent">
                for Young Minds
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '100ms' }}>
              A premium learning platform helping children, teens, and young adults read, understand, and live the wisdom of the Bhagavad Gita — through reading, quizzes, progress tracking, and an AI companion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <button
                onClick={() => navigate('/chapters')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-semibold shadow-2xl shadow-saffron-900/40 hover:shadow-saffron-700/60 hover:scale-105 transition-all focus-ring"
              >
                Start Learning
              </button>
              <button
                onClick={() => navigate('/story')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/20 transition-all focus-ring flex items-center justify-center gap-2"
              >
                <BookMarked className="h-4 w-4" />
                New? Read the story first
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12 text-sm text-white/80 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-marigold-300" /> 18 Chapters</span>
              <span className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-saffron-300" /> 700 Verses</span>
              <span className="flex items-center gap-1.5"><Brain className="h-4 w-4 text-peacock-300" /> Bilingual</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Intro to the Gita */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-saffron-600 dark:text-saffron-400 mb-2">
              What is the Bhagavad Gita?
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-4 leading-tight">
              A timeless conversation about life, duty, and the self
            </h2>
            <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
              The Bhagavad Gita is a sacred dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra. When Arjuna is confused and overwhelmed, Krishna guides him with timeless wisdom about the soul, duty, action, devotion, and peace.
            </p>
            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Though thousands of years old, its teachings speak directly to young people today — about facing exams, making choices, handling stress, finding purpose, and staying calm in a busy world.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-premium">
              <ChapterArtwork chapterNumber={11} className="w-full h-full" variant="banner" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-ink-900 rounded-2xl shadow-premium p-4 border border-ink-100 dark:border-ink-800 max-w-[200px]">
              <div className="font-display text-2xl font-bold text-gradient-saffron">700</div>
              <div className="text-xs text-ink-500 dark:text-ink-400">verses of timeless wisdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium quote banner with background image */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages.ganges}
            alt="Sunrise over the Ganges river"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/70 to-ink-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-ink-950/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-marigold-300" />
            <span className="text-xs font-medium text-white/90">A verse that lights the path</span>
          </div>
          <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
            "You have a right to action alone, never to its fruits."
          </blockquote>
          <p className="font-telugu text-lg sm:text-xl text-marigold-200 mb-2">
            "నీకు కర్మ చేయడంలో మాత్రమే అధికారం ఉంది, ఫలితంలో ఎప్పుడూ లేదు."
          </p>
          <cite className="text-sm text-white/70 not-italic">— Bhagavad Gita 2.47</cite>
        </div>
      </section>

      {/* Why young people should learn it */}
      <section className="bg-gradient-to-b from-transparent via-saffron-50/30 to-transparent dark:via-ink-900/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-saffron-600 dark:text-saffron-400 mb-2">
              Why learn the Gita?
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
              Eight gifts the Gita gives young minds
            </h2>
            <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
              Each verse is a small light. Together, they help you grow into a wise, calm, and courageous person.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="group rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <b.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 mb-1">{b.title}</h3>
                <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-saffron-600 dark:text-saffron-400 mb-2">
              Chapter Highlights
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50">
              Begin with these chapters
            </h2>
          </div>
          <button
            onClick={() => navigate('/chapters')}
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-saffron-600 dark:text-saffron-400 hover:gap-2 transition-all"
          >
            View all 18 <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredChapters.map((ch) => (
            <button
              key={ch.chapterNumber}
              onClick={() => navigate(`/chapter/${ch.chapterNumber}`)}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] hover:-translate-y-1 transition-all duration-300 focus-ring"
            >
              <ChapterArtwork chapterNumber={ch.chapterNumber} className="w-full h-full" variant="card" />
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <div className="text-[10px] font-medium text-white/80">Chapter {ch.chapterNumber}</div>
                <div className="font-display text-sm font-semibold text-white leading-tight">{ch.englishTitle}</div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate('/chapters')}
          className="sm:hidden mt-4 w-full py-2.5 rounded-full bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-300 font-medium text-sm"
        >
          View all 18 chapters
        </button>
      </section>

      {/* Verse of the Day */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <VerseOfTheDay />
      </section>

      {/* Streak + Quick Links */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StreakWidget />
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/story')}
              className="rounded-2xl bg-gradient-to-br from-cosmic-50 to-peacock-50/50 dark:from-cosmic-950/30 dark:to-peacock-950/20 border border-cosmic-200/60 dark:border-cosmic-800/40 p-4 text-left hover:shadow-premium transition-shadow group"
            >
              <div className="text-2xl mb-2">📖</div>
              <div className="font-display text-sm font-semibold text-ink-900 dark:text-ink-50 group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors">
                The Story
              </div>
              <div className="text-xs text-ink-400 mt-0.5">Who is Arjuna?</div>
            </button>
            <button
              onClick={() => navigate('/glossary')}
              className="rounded-2xl bg-gradient-to-br from-marigold-50 to-saffron-50/50 dark:from-marigold-950/30 dark:to-saffron-950/20 border border-marigold-200/60 dark:border-marigold-800/40 p-4 text-left hover:shadow-premium transition-shadow group"
            >
              <div className="text-2xl mb-2">🪷</div>
              <div className="font-display text-sm font-semibold text-ink-900 dark:text-ink-50 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors">
                Glossary
              </div>
              <div className="text-xs text-ink-400 mt-0.5">Key Sanskrit terms</div>
            </button>
            <button
              onClick={() => navigate('/quiz')}
              className="rounded-2xl bg-gradient-to-br from-peacock-50 to-cosmic-50/50 dark:from-peacock-950/30 dark:to-cosmic-950/20 border border-peacock-200/60 dark:border-peacock-800/40 p-4 text-left hover:shadow-premium transition-shadow group"
            >
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-display text-sm font-semibold text-ink-900 dark:text-ink-50 group-hover:text-peacock-600 dark:group-hover:text-peacock-400 transition-colors">
                Quiz
              </div>
              <div className="text-xs text-ink-400 mt-0.5">Test yourself</div>
            </button>
            <button
              onClick={() => navigate('/progress')}
              className="rounded-2xl bg-gradient-to-br from-lotus-50 to-peacock-50/50 dark:from-lotus-950/30 dark:to-peacock-950/20 border border-lotus-200/60 dark:border-lotus-800/40 p-4 text-left hover:shadow-premium transition-shadow group"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-display text-sm font-semibold text-ink-900 dark:text-ink-50 group-hover:text-lotus-600 dark:group-hover:text-lotus-400 transition-colors">
                Progress
              </div>
              <div className="text-xs text-ink-400 mt-0.5">Your journey</div>
            </button>
          </div>
        </div>
      </section>

      {/* Quiz teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-peacock-100 dark:bg-peacock-950/40 mb-3">
            <ListChecks className="h-3.5 w-3.5 text-peacock-500" />
            <span className="text-xs font-medium text-peacock-700 dark:text-peacock-300">Test your understanding</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
            Chapter quizzes
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
            Every chapter has a short quiz. Answer questions, see explanations, and discover which verses to revisit.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {chapters.slice(0, 6).map((ch) => {
            const score = progress.chapterQuizScore(ch.chapterNumber);
            const hasQ = progress.hasQuiz(ch.chapterNumber);
            return (
              <button
                key={ch.chapterNumber}
                onClick={() => navigate(`/quiz/${ch.chapterNumber}`)}
                className="group rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-4 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-center focus-ring"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-peacock-400 to-peacock-600 flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <span className="font-display font-bold text-white text-sm">{ch.chapterNumber}</span>
                </div>
                <div className="font-display text-sm font-semibold text-ink-900 dark:text-ink-50 leading-tight mb-1 line-clamp-2 min-h-[2.5rem]">
                  {ch.englishTitle}
                </div>
                {hasQ ? (
                  <div className="text-xs font-medium text-peacock-600 dark:text-peacock-400">
                    {score}% · Retake
                  </div>
                ) : (
                  <div className="text-xs text-ink-400 dark:text-ink-500">
                    {ch.quiz.length} questions
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/quiz')}
            className="inline-flex items-center gap-1 text-sm font-medium text-peacock-600 dark:text-peacock-400 hover:gap-2 transition-all"
          >
            Browse all 18 quizzes <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Progress preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-3xl bg-gradient-to-br from-ink-50 to-saffron-50/50 dark:from-ink-900 dark:to-ink-800 border border-ink-100 dark:border-ink-800 p-6 flex flex-col items-center justify-center text-center">
            <ProgressRing value={progress.overallProgress} size={140} sublabel="Overall" />
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mt-4 mb-1">Your Progress</h3>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">
              {progress.readCount} of {progress.totalVerses} verses read
            </p>
            <button
              onClick={() => navigate('/progress')}
              className="text-sm font-medium text-saffron-600 dark:text-saffron-400 hover:underline"
            >
              View dashboard →
            </button>
          </div>

          <div className="md:col-span-2 rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-4">Quick stats</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Chapters done" value={progress.completedChapters} icon={BookOpen} color="text-peacock-500" />
              <Stat label="Verses read" value={progress.readCount} icon={Sparkles} color="text-saffron-500" />
              <Stat label="Bookmarks" value={progress.bookmarkCount} icon={Heart} color="text-lotus-500" />
              <Stat label="Day streak" value={progress.state.streak} icon={Flame} color="text-marigold-500" />
            </div>
            <div className="mt-6 pt-6 border-t border-ink-100 dark:border-ink-800">
              <div className="text-xs uppercase tracking-widest font-semibold text-ink-500 dark:text-ink-400 mb-3">
                Recommended next
              </div>
              <button
                onClick={() => navigate(`/chapter/${progress.recommendedNextChapter()}`)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-saffron-50 dark:bg-saffron-950/30 hover:bg-saffron-100 dark:hover:bg-saffron-950/50 transition-colors"
              >
                <div className="text-left">
                  <div className="text-sm font-medium text-ink-800 dark:text-ink-100">
                    Chapter {progress.recommendedNextChapter()} — {chapters.find((c) => c.chapterNumber === progress.recommendedNextChapter())?.englishTitle}
                  </div>
                  <div className="text-xs text-ink-500 dark:text-ink-400">Continue your journey</div>
                </div>
                <ChevronRight className="h-5 w-5 text-saffron-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Badge preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-saffron-600 dark:text-saffron-400 mb-2">
            Achievements
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50">
            Earn badges as you learn
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {progress.allBadges.slice(0, 6).map((b) => (
            <Badge key={b.id} id={b.id} name={b.name} desc={b.desc} earned={progress.earnedBadges.includes(b.id)} />
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/progress')}
            className="text-sm font-medium text-saffron-600 dark:text-saffron-400 hover:underline"
          >
            See all badges →
          </button>
        </div>
      </section>

      {/* AI chatbot teaser */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cosmic-600 via-cosmic-700 to-ink-900 p-8 sm:p-12 text-center">
          <div className="absolute top-0 right-0 h-60 w-60 bg-marigold-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 h-60 w-60 bg-lotus-400/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center mx-auto mb-5 shadow-glow animate-float">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Meet Ask Gita AI
            </h2>
            <p className="text-cosmic-100 max-w-2xl mx-auto mb-6 leading-relaxed">
              Your personal learning companion. Ask about any verse, chapter, or theme — get simple explanations in Telugu and English, anytime.
            </p>
            <button
              onClick={() => navigate('/ask-gita')}
              className="px-7 py-3 rounded-full bg-white text-cosmic-700 font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Try Ask Gita AI
            </button>
          </div>
        </div>
      </section>

      {/* Parent/Mentor teaser */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-peacock-50 to-saffron-50/50 dark:from-ink-900 dark:to-ink-800 border border-ink-100 dark:border-ink-800 p-8 sm:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-peacock-400 to-peacock-600 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-ink-50 mb-3">
                For parents & mentors
              </h2>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
                Support your young learner with a clear view of their progress — chapters completed, quiz performance, strong and weak themes, and gentle encouragement notes.
              </p>
              <button
                onClick={() => navigate('/mentor')}
                className="inline-flex items-center gap-1 text-sm font-medium text-peacock-600 dark:text-peacock-400 hover:gap-2 transition-all"
              >
                Open mentor view <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white dark:bg-ink-900 p-4 border border-ink-100 dark:border-ink-800">
                <div className="text-2xl font-display font-bold text-peacock-600 dark:text-peacock-400">{progress.completedChapters}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400">Chapters completed</div>
              </div>
              <div className="rounded-xl bg-white dark:bg-ink-900 p-4 border border-ink-100 dark:border-ink-800">
                <div className="text-2xl font-display font-bold text-saffron-600 dark:text-saffron-400">{progress.quizAverage()}%</div>
                <div className="text-xs text-ink-500 dark:text-ink-400">Avg quiz score</div>
              </div>
              <div className="rounded-xl bg-white dark:bg-ink-900 p-4 border border-ink-100 dark:border-ink-800">
                <div className="text-2xl font-display font-bold text-lotus-600 dark:text-lotus-400">{progress.bookmarkCount}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400">Bookmarks</div>
              </div>
              <div className="rounded-xl bg-white dark:bg-ink-900 p-4 border border-ink-100 dark:border-ink-800">
                <div className="text-2xl font-display font-bold text-marigold-600 dark:text-marigold-400">{progress.state.streak}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400">Day streak</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, icon: Icon, color }: { label: string; value: number; icon: typeof BookOpen; color: string }) {
  return (
    <div className="text-center">
      <Icon className={`h-5 w-5 ${color} mx-auto mb-1.5`} />
      <div className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">{value}</div>
      <div className="text-xs text-ink-500 dark:text-ink-400">{label}</div>
    </div>
  );
}
