import { BookOpen, Bookmark, StickyNote, Flame, Award, TrendingUp, Target, ChevronRight, Sparkles, BarChart3 } from 'lucide-react';
import { ProgressRing } from '../components/ProgressRing';
import { Badge } from '../components/Badge';
import { chapters } from '../data/gita';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';
import type { VerseTag } from '../data/types';

const tagLabels: Record<VerseTag, string> = {
  duty: 'Duty', courage: 'Courage', wisdom: 'Wisdom', devotion: 'Devotion',
  meditation: 'Meditation', peace: 'Peace', 'self-control': 'Self-Control',
  action: 'Action', knowledge: 'Knowledge', detachment: 'Detachment',
  faith: 'Faith', yoga: 'Yoga', discipline: 'Discipline',
  fearlessness: 'Fearlessness', compassion: 'Compassion',
  surrender: 'Surrender', soul: 'Soul', truth: 'Truth',
};

export function ProgressPage() {
  const progress = useProgress();
  const themeStats = progress.themeStats();
  const nextChapter = progress.recommendedNextChapter();
  const nextCh = chapters.find((c) => c.chapterNumber === nextChapter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-950/40 mb-3">
          <BarChart3 className="h-3.5 w-3.5 text-saffron-500" />
          <span className="text-xs font-medium text-saffron-700 dark:text-saffron-300">Your learning journey</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Progress Dashboard
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          Track your growth, celebrate your achievements, and discover what to learn next.
        </p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={BookOpen} label="Chapters completed" value={`${progress.completedChapters}/18`} color="from-peacock-400 to-peacock-600" />
        <StatCard icon={Sparkles} label="Verses read" value={`${progress.readCount}/${progress.totalVerses}`} color="from-saffron-400 to-saffron-600" />
        <StatCard icon={Award} label="Avg quiz score" value={`${progress.quizAverage()}%`} color="from-marigold-400 to-saffron-500" />
        <StatCard icon={Flame} label="Day streak" value={`${progress.state.streak}`} color="from-lotus-400 to-lotus-600" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Overall ring */}
        <div className="rounded-3xl bg-gradient-to-br from-saffron-50 to-marigold-50/50 dark:from-ink-900 dark:to-ink-800 border border-saffron-100 dark:border-saffron-900/30 p-6 flex flex-col items-center justify-center text-center">
          <ProgressRing value={progress.overallProgress} size={160} sublabel="Gita complete" />
          <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mt-4">Overall Progress</h3>
          <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">
            {progress.readCount} of {progress.totalVerses} verses read
          </p>
        </div>

        {/* Quick stats */}
        <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
          <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-4">At a glance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <MiniStat icon={Bookmark} label="Bookmarks" value={progress.bookmarkCount} color="text-lotus-500" />
            <MiniStat icon={StickyNote} label="Notes" value={progress.noteCount} color="text-saffron-500" />
            <MiniStat icon={Award} label="Badges" value={progress.earnedBadges.length} color="text-marigold-500" />
            <MiniStat icon={Target} label="Quizzes taken" value={progress.state.quizAttempts.length} color="text-peacock-500" />
            <MiniStat icon={BookOpen} label="Last chapter" value={progress.state.lastChapter ?? '—'} color="text-cosmic-500" />
            <MiniStat icon={Flame} label="Best streak" value={progress.state.streak} color="text-saffron-500" />
          </div>

          {/* Recommended next */}
          <div className="pt-4 border-t border-ink-100 dark:border-ink-800">
            <div className="text-xs uppercase tracking-widest font-semibold text-ink-500 dark:text-ink-400 mb-3">
              Recommended next step
            </div>
            <button
              onClick={() => navigate(`/chapter/${nextChapter}`)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-saffron-50 to-marigold-50/50 dark:from-ink-800 dark:to-ink-800 hover:from-saffron-100 hover:to-marigold-100 dark:hover:from-ink-700 dark:hover:to-ink-700 transition-all"
            >
              <div className="text-left">
                <div className="text-sm font-medium text-ink-800 dark:text-ink-100">
                  Chapter {nextChapter}: {nextCh?.englishTitle}
                </div>
                <div className="text-xs text-ink-500 dark:text-ink-400">{nextCh?.mainTheme}</div>
              </div>
              <div className="flex items-center gap-1 text-saffron-600 dark:text-saffron-400">
                <span className="text-sm font-medium">Continue</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Chapter-by-chapter progress */}
      <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6 mb-8">
        <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-4">Chapter progress</h3>
        <div className="space-y-2.5">
          {chapters.map((ch) => {
            const cp = progress.chapterProgress(ch.chapterNumber);
            const qs = progress.chapterQuizScore(ch.chapterNumber);
            return (
              <button
                key={ch.chapterNumber}
                onClick={() => navigate(`/chapter/${ch.chapterNumber}`)}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-ink-50 dark:hover:bg-ink-800/50 transition-colors text-left group"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {ch.chapterNumber}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-ink-800 dark:text-ink-100 truncate">
                      {ch.englishTitle}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
                      {qs !== null && <span className="text-peacock-600 dark:text-peacock-400">Quiz {qs}%</span>}
                      <span className="font-medium">{cp}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        cp === 100 ? 'bg-gradient-to-r from-peacock-400 to-peacock-600' : 'bg-gradient-to-r from-marigold-400 to-saffron-600'
                      }`}
                      style={{ width: `${cp}%` }}
                    />
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-ink-300 group-hover:text-saffron-500 transition-colors flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Theme analysis */}
      {themeStats.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-peacock-500" />
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">Strongest themes</h3>
            </div>
            <div className="space-y-3">
              {themeStats.slice(0, 5).map((t) => (
                <div key={t.tag}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-ink-700 dark:text-ink-200">{tagLabels[t.tag]}</span>
                    <span className="text-xs font-medium text-peacock-600 dark:text-peacock-400">{t.strength}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-peacock-400 to-peacock-600" style={{ width: `${t.strength}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-lotus-500" />
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">Themes to strengthen</h3>
            </div>
            <div className="space-y-3">
              {[...themeStats].reverse().slice(0, 5).map((t) => (
                <div key={t.tag}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-ink-700 dark:text-ink-200">{tagLabels[t.tag]}</span>
                    <span className="text-xs font-medium text-lotus-600 dark:text-lotus-400">{t.strength}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-lotus-400 to-lotus-600" style={{ width: `${t.strength}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Badges */}
      <div className="rounded-3xl bg-gradient-to-br from-saffron-50/50 to-marigold-50/30 dark:from-ink-900 dark:to-ink-800 border border-saffron-100 dark:border-saffron-900/30 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-marigold-500" />
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">Achievements</h3>
          </div>
          <span className="text-sm text-ink-500 dark:text-ink-400">
            {progress.earnedBadges.length} / {progress.allBadges.length} earned
          </span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {progress.allBadges.map((b) => (
            <Badge
              key={b.id}
              id={b.id}
              name={b.name}
              desc={b.desc}
              earned={progress.earnedBadges.includes(b.id)}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: { icon: typeof BookOpen; label: string; value: string; color: string }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5">
      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">{value}</div>
      <div className="text-xs text-ink-500 dark:text-ink-400">{label}</div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value, color }: { icon: typeof BookOpen; label: string; value: number | string; color: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className={`h-5 w-5 ${color}`} />
      <div>
        <div className="font-display text-lg font-bold text-ink-900 dark:text-ink-50">{value}</div>
        <div className="text-xs text-ink-500 dark:text-ink-400">{label}</div>
      </div>
    </div>
  );
}
