import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navigate, useRouter } from '../hooks/useRouter';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Chapters', path: '/chapters' },
  { label: 'The Story', path: '/story' },
  { label: 'Glossary', path: '/glossary' },
  { label: 'Progress', path: '/progress' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'Ask Gita AI', path: '/ask-gita' },
  { label: 'About', path: '/about' },
];

export function Navbar() {
  const { route } = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return route.path === '/';
    return route.path.startsWith(path);
  };

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass border-b border-ink-200/50 dark:border-ink-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => go('/')}
          className="flex items-center gap-2.5 focus-ring rounded-lg"
          aria-label="Home"
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center shadow-glow-soft">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div className="hidden sm:block text-left leading-tight">
            <div className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
              Bhagavad Gita
            </div>
            <div className="text-[10px] uppercase tracking-widest text-saffron-600 dark:text-saffron-400 font-medium">
              for Young Minds
            </div>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                isActive(item.path)
                  ? 'text-saffron-600 dark:text-saffron-400 bg-saffron-50 dark:bg-saffron-950/40'
                  : 'text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 hover:bg-ink-100 dark:hover:bg-ink-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-11 w-11 rounded-full bg-ink-100 dark:bg-ink-800 flex items-center justify-center focus-ring"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-ink-200/50 dark:border-ink-800/50 bg-white/95 dark:bg-ink-950/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => go(item.path)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-saffron-600 dark:text-saffron-400 bg-saffron-50 dark:bg-saffron-950/40'
                    : 'text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
