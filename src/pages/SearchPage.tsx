import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { chapters } from '../data/gita';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';
import type { VerseTag } from '../data/types';

const allTags: VerseTag[] = [
  'duty', 'courage', 'wisdom', 'devotion', 'meditation', 'peace',
  'self-control', 'action', 'knowledge', 'detachment', 'faith',
  'yoga', 'discipline', 'fearlessness', 'compassion', 'surrender', 'soul', 'truth',
];

export function SearchPage() {
  const progress = useProgress();
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<VerseTag | null>(null);
  const [filter, setFilter] = useState<'all' | 'bookmarked' | 'read' | 'unread'>('all');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    const all: { chapter: typeof chapters[0]; verse: typeof chapters[0]['verses'][0] }[] = [];
    for (const ch of chapters) {
      for (const v of ch.verses) {
        const key = `${ch.chapterNumber}.${v.verseNumber}`;
        const matchesQuery =
          !q ||
          v.english.toLowerCase().includes(q) ||
          v.telugu.includes(query) ||
          v.sanskrit.includes(query) ||
          v.explanation.toLowerCase().includes(q) ||
          v.takeaway.toLowerCase().includes(q) ||
          ch.englishTitle.toLowerCase().includes(q) ||
          ch.teluguTitle.includes(query) ||
          String(ch.chapterNumber) === q ||
          key === q;
        const matchesTag = !activeTag || v.tags.includes(activeTag);
        const matchesFilter =
          filter === 'all' ||
          (filter === 'bookmarked' && progress.state.bookmarks[key]) ||
          (filter === 'read' && progress.state.readVerses[key]) ||
          (filter === 'unread' && !progress.state.readVerses[key]);
        if (matchesQuery && matchesTag && matchesFilter) {
          all.push({ chapter: ch, verse: v });
        }
      }
    }
    return all.slice(0, 100);
  }, [query, activeTag, filter, progress.state.bookmarks, progress.state.readVerses]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Search the Gita
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          Search across all 700 verses by keyword, chapter, theme, or verse number. In Telugu and English.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-6">
        <SearchBar value={query} onChange={setQuery} placeholder="Search verses, keywords, chapter names..." autoFocus />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter className="h-4 w-4 text-ink-400 flex-shrink-0" />
          {(['all', 'bookmarked', 'read', 'unread'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize whitespace-nowrap transition-colors ${
                filter === f ? 'bg-saffron-500 text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
              !activeTag ? 'bg-saffron-500 text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400 hover:bg-ink-200 dark:hover:bg-ink-700'
            }`}
          >
            All themes
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                activeTag === tag ? 'bg-saffron-500 text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400 hover:bg-ink-200 dark:hover:bg-ink-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-ink-500 dark:text-ink-400 mb-4">
        {results.length} {results.length === 1 ? 'result' : 'results'}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20">
          <Search className="h-12 w-12 text-ink-300 dark:text-ink-700 mx-auto mb-4" />
          <p className="text-ink-500 dark:text-ink-400">No verses found. Try a different search or filter.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {results.map(({ chapter, verse }) => {
            const key = `${chapter.chapterNumber}.${verse.verseNumber}`;
            const isRead = !!progress.state.readVerses[key];
            const isBookmarked = !!progress.state.bookmarks[key];
            return (
              <button
                key={key}
                onClick={() => navigate(`/chapter/${chapter.chapterNumber}?verse=${verse.verseNumber}`)}
                className="group w-full text-left rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-4 hover:border-saffron-300 dark:hover:border-saffron-700 hover:shadow-premium transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-saffron-600 dark:text-saffron-400">
                    {chapter.chapterNumber}.{verse.verseNumber} · {chapter.englishTitle}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {isBookmarked && <span className="h-2 w-2 rounded-full bg-lotus-500" title="Bookmarked" />}
                    {isRead && <span className="h-2 w-2 rounded-full bg-peacock-500" title="Read" />}
                  </div>
                </div>
                <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed line-clamp-2 mb-1">{verse.english}</p>
                <p className="font-telugu text-sm text-ink-600 dark:text-ink-300 line-clamp-1">{verse.telugu}</p>
                <div className="flex items-center gap-1.5 mt-2">
                  {verse.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-full bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-300">
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
