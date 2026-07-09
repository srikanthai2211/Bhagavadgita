import { Users, BookOpen, Award, TrendingUp, Target, Heart, Lightbulb, ChevronRight } from 'lucide-react';
import { ProgressRing } from '../components/ProgressRing';
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

const encouragementNotes = [
  'Wonderful progress! Encourage them to keep their daily streak going.',
  'They are doing well with reading. Suggest taking a quiz to test understanding.',
  'Great consistency. Ask them to share a favorite verse with you.',
  'They have earned new badges — celebrate this together!',
  'Suggest revisiting bookmarked verses to reinforce learning.',
];

export function MentorPage() {
  const progress = useProgress();
  const themeStats = progress.themeStats();
  const strong = themeStats.slice(0, 3);
  const weak = [...themeStats].reverse().slice(0, 3);

  // Find chapters that need review (low quiz score or incomplete)
  const chaptersToReview = chapters
    .map((ch) => ({
      chapter: ch,
      cp: progress.chapterProgress(ch.chapterNumber),
      qs: progress.chapterQuizScore(ch.chapterNumber),
    }))
    .filter((c) => c.cp > 0 && (c.cp < 100 || (c.qs !== null && c.qs < 70)))
    .sort((a, b) => a.cp - b.cp)
    .slice(0, 5);

  const noteIndex = (progress.readCount + progress.state.streak) % encouragementNotes.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-peacock-100 dark:bg-peacock-950/40 mb-3">
          <Users className="h-3.5 w-3.5 text-peacock-500" />
          <span className="text-xs font-medium text-peacock-700 dark:text-peacock-300">Parent & Mentor View</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Learner Overview
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          A gentle summary of your young learner's journey through the Bhagavad Gita. All data stays on this device.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 text-center">
          <ProgressRing value={progress.overallProgress} size={90} strokeWidth={8} />
          <div className="text-xs text-ink-500 dark:text-ink-400 mt-2">Overall progress</div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 flex flex-col items-center justify-center">
          <BookOpen className="h-7 w-7 text-peacock-500 mb-2" />
          <div className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">{progress.completedChapters}/18</div>
          <div className="text-xs text-ink-500 dark:text-ink-400">Chapters done</div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 flex flex-col items-center justify-center">
          <Award className="h-7 w-7 text-marigold-500 mb-2" />
          <div className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">{progress.quizAverage()}%</div>
          <div className="text-xs text-ink-500 dark:text-ink-400">Avg quiz score</div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 flex flex-col items-center justify-center">
          <Heart className="h-7 w-7 text-lotus-500 mb-2" />
          <div className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">{progress.bookmarkCount}</div>
          <div className="text-xs text-ink-500 dark:text-ink-400">Saved verses</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Strong themes */}
        <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-peacock-500" />
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">Strong themes</h3>
          </div>
          {strong.length === 0 ? (
            <p className="text-sm text-ink-500 dark:text-ink-400">Take a quiz to see theme analysis.</p>
          ) : (
            <div className="space-y-3">
              {strong.map((t) => (
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
          )}
        </div>

        {/* Weak themes */}
        <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-lotus-500" />
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">Themes to support</h3>
          </div>
          {weak.length === 0 ? (
            <p className="text-sm text-ink-500 dark:text-ink-400">Take a quiz to see theme analysis.</p>
          ) : (
            <div className="space-y-3">
              {weak.map((t) => (
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
          )}
        </div>
      </div>

      {/* Encouragement note */}
      <div className="rounded-3xl bg-gradient-to-br from-saffron-50 to-marigold-50/50 dark:from-ink-900 dark:to-ink-800 border border-saffron-100 dark:border-saffron-900/30 p-6 mb-8">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 mb-1">Encouragement note</h3>
            <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">{encouragementNotes[noteIndex]}</p>
          </div>
        </div>
      </div>

      {/* Chapters to review */}
      {chaptersToReview.length > 0 && (
        <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-6">
          <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-4">Recommended chapters to review</h3>
          <div className="space-y-2">
            {chaptersToReview.map(({ chapter, cp, qs }) => (
              <button
                key={chapter.chapterNumber}
                onClick={() => navigate(`/chapter/${chapter.chapterNumber}`)}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-ink-50 dark:hover:bg-ink-800/50 transition-colors text-left group"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {chapter.chapterNumber}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-ink-800 dark:text-ink-100 truncate">{chapter.englishTitle}</div>
                  <div className="text-xs text-ink-500 dark:text-ink-400">
                    {cp}% read{qs !== null && ` · quiz ${qs}%`}
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-ink-300 group-hover:text-saffron-500 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-center text-xs text-ink-400 dark:text-ink-500 mt-8">
        This view uses the same local data as the learner's dashboard. No account or sharing required.
      </p>
    </div>
  );
}
