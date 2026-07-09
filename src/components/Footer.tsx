import { BookOpen, Heart, Sparkles } from 'lucide-react';
import { navigate } from '../hooks/useRouter';

const footerNav = [
  {
    title: 'Learn',
    links: [
      { label: 'Chapters', path: '/chapters' },
      { label: 'Verse of the Day', path: '/?votd=1' },
      { label: 'Quiz', path: '/quiz' },
      { label: 'Ask Gita AI', path: '/ask-gita' },
    ],
  },
  {
    title: 'Track',
    links: [
      { label: 'Progress', path: '/progress' },
      { label: 'Bookmarks', path: '/bookmarks' },
      { label: 'Parent / Mentor View', path: '/mentor' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About the Gita', path: '/about' },
      { label: 'How to Use', path: '/about#how-to-use' },
      { label: 'Privacy Note', path: '/about#privacy' },
      { label: 'Contact', path: '/about#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-200/60 dark:border-ink-800/60 bg-ink-50/50 dark:bg-ink-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                Bhagavad Gita
              </div>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
              A premium learning platform helping young minds read, understand, and live the wisdom of the Gita.
            </p>
            <div className="flex items-center gap-3 mt-4 text-xs text-ink-400 dark:text-ink-500">
              <span className="flex items-center gap-1">
                <Heart className="h-3.5 w-3.5 text-lotus-500" /> Made with care
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-marigold-500" /> For young learners
              </span>
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-ink-500 dark:text-ink-400 mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-ink-600 dark:text-ink-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-ink-200/60 dark:border-ink-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            Content based on the Bhagavad Gita. For learning and reflection. All progress is stored locally on your device.
          </p>
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {new Date().getFullYear()} Bhagavad Gita for Young Minds
          </p>
        </div>
      </div>
    </footer>
  );
}
