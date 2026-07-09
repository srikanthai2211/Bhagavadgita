import { useEffect } from 'react';
import { useTheme } from '../hooks/useSettings';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative h-9 w-9 rounded-full bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 transition-colors flex items-center justify-center focus-ring"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-ink-700" />
      ) : (
        <Sun className="h-4 w-4 text-marigold-300" />
      )}
    </button>
  );
}
