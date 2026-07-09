import { Lock, Check } from 'lucide-react';

interface BadgeProps {
  id: string;
  name: string;
  desc: string;
  earned: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const badgeColors: Record<string, string> = {
  'first-verse': 'from-saffron-400 to-saffron-600',
  'first-chapter': 'from-marigold-400 to-saffron-600',
  '25-verses': 'from-peacock-400 to-peacock-600',
  '50-verses': 'from-cosmic-400 to-cosmic-600',
  '100-verses': 'from-lotus-400 to-lotus-600',
  'quiz-starter': 'from-saffron-400 to-lotus-500',
  'quiz-master': 'from-marigold-400 to-cosmic-600',
  consistent: 'from-peacock-400 to-cosmic-600',
  'wisdom-seeker': 'from-cosmic-500 to-saffron-600',
  'gita-explorer': 'from-saffron-400 via-lotus-500 to-cosmic-600',
};

export function Badge({ id, name, desc, earned, size = 'md' }: BadgeProps) {
  const colorClass = badgeColors[id] ?? 'from-saffron-400 to-saffron-600';
  const sizeClass = size === 'sm' ? 'h-12 w-12' : size === 'lg' ? 'h-20 w-20' : 'h-16 w-16';
  const iconSize = size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-9 w-9' : 'h-7 w-7';

  return (
    <div className="flex flex-col items-center text-center group">
      <div
        className={`${sizeClass} rounded-full flex items-center justify-center transition-all duration-300 ${
          earned
            ? `bg-gradient-to-br ${colorClass} shadow-glow-soft group-hover:scale-105`
            : 'bg-ink-200 dark:bg-ink-800'
        }`}
        title={desc}
      >
        {earned ? (
          <Check className={`${iconSize} text-white`} strokeWidth={2.5} />
        ) : (
          <Lock className={`${iconSize} text-ink-400 dark:text-ink-600`} />
        )}
      </div>
      <div className="mt-2">
        <div
          className={`text-xs font-semibold ${
            earned ? 'text-ink-800 dark:text-ink-100' : 'text-ink-400 dark:text-ink-600'
          }`}
        >
          {name}
        </div>
        {size !== 'sm' && (
          <div className="text-[10px] text-ink-400 dark:text-ink-500 mt-0.5 max-w-[120px] leading-tight">
            {desc}
          </div>
        )}
      </div>
    </div>
  );
}
