import { Flame, Calendar, Trophy } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

export function StreakWidget() {
  const { state } = useProgress();
  const streak = state.streak ?? 0;
  const totalRead = Object.keys(state.readVerses).length;
  const totalQuizzes = state.quizAttempts.length;

  const getStreakColor = () => {
    if (streak >= 30) return 'text-cosmic-400';
    if (streak >= 14) return 'text-saffron-400';
    if (streak >= 7) return 'text-marigold-400';
    if (streak >= 3) return 'text-peacock-400';
    return 'text-ink-400';
  };

  const getStreakLabel = () => {
    if (streak >= 30) return '🏆 Legendary';
    if (streak >= 14) return '🔥 On Fire';
    if (streak >= 7) return '⚡ Week Warrior';
    if (streak >= 3) return '🌱 Growing';
    return streak === 1 ? '✨ Started!' : 'Begin today';
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-saffron-50 to-marigold-50/50 dark:from-saffron-950/30 dark:to-marigold-950/20 border border-saffron-200/60 dark:border-saffron-800/40 p-4">
      <div className="flex items-center gap-4">
        {/* Streak flame */}
        <div className="relative flex-shrink-0">
          <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br from-saffron-400 to-marigold-500 dark:from-saffron-600 dark:to-marigold-600 flex items-center justify-center shadow-glow`}>
            <Flame className={`h-7 w-7 text-white ${streak > 0 ? 'animate-pulse-glow' : ''}`} />
          </div>
          {streak >= 7 && (
            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-marigold-400 border-2 border-white dark:border-ink-900 flex items-center justify-center">
              <Trophy className="h-2.5 w-2.5 text-white" />
            </div>
          )}
        </div>

        {/* Streak info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-display text-3xl font-bold ${getStreakColor()}`}>
              {streak}
            </span>
            <span className="text-sm text-ink-500 dark:text-ink-400">day streak</span>
          </div>
          <p className="text-xs font-medium text-saffron-700 dark:text-saffron-300 mt-0.5">
            {getStreakLabel()}
          </p>
        </div>

        {/* Mini stats */}
        <div className="text-right flex-shrink-0">
          <div className="text-sm font-bold text-ink-700 dark:text-ink-200">{totalRead}</div>
          <div className="text-[10px] text-ink-400">verses read</div>
          <div className="text-sm font-bold text-ink-700 dark:text-ink-200 mt-1">{totalQuizzes}</div>
          <div className="text-[10px] text-ink-400">quizzes done</div>
        </div>
      </div>

      {/* Streak encouragement */}
      {streak === 0 && (
        <p className="text-xs text-ink-400 dark:text-ink-500 mt-3 text-center">
          Read one verse today to start your streak! 🌟
        </p>
      )}
      {streak > 0 && streak < 7 && (
        <div className="mt-3">
          <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-1.5 rounded-full ${i < streak ? 'bg-saffron-400' : 'bg-ink-200 dark:bg-ink-700'}`}
              />
            ))}
          </div>
          <p className="text-[10px] text-ink-400 text-center">{7 - streak} more days to unlock ⚡ Week Warrior</p>
        </div>
      )}
    </div>
  );
}
