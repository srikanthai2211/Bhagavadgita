import { useState } from 'react';
import { Bookmark, StickyNote, BookOpen } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { chapters, getVerse } from '../data/gita';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';

export function BookmarksPage() {
  const progress = useProgress();
  const [tab, setTab] = useState<'bookmarks' | 'notes'>('bookmarks');
  const [search, setSearch] = useState('');

  const bookmarkKeys = Object.keys(progress.state.bookmarks).filter(Boolean);
  const noteKeys = Object.keys(progress.state.notes).filter(Boolean);

  const bookmarkedVerses = bookmarkKeys
    .map((key) => {
      const [ch, v] = key.split('.').map(Number);
      const verse = getVerse(ch, v);
      const chapter = chapters.find((c) => c.chapterNumber === ch);
      return verse && chapter ? { key, chapter, verse } : null;
    })
    .filter(Boolean) as { key: string; chapter: typeof chapters[0]; verse: NonNullable<ReturnType<typeof getVerse>> }[];

  const notedVerses = noteKeys
    .map((key) => {
      const [ch, v] = key.split('.').map(Number);
      const verse = getVerse(ch, v);
      const chapter = chapters.find((c) => c.chapterNumber === ch);
      const note = progress.state.notes[key];
      return verse && chapter ? { key, chapter, verse, note } : null;
    })
    .filter(Boolean) as { key: string; chapter: typeof chapters[0]; verse: NonNullable<ReturnType<typeof getVerse>>; note: string }[];

  const filteredBookmarks = bookmarkedVerses.filter(({ chapter, verse }) => {
    const q = search.toLowerCase();
    return !q || verse.english.toLowerCase().includes(q) || verse.telugu.includes(search) || chapter.englishTitle.toLowerCase().includes(q);
  });

  const filteredNotes = notedVerses.filter(({ chapter, verse, note }) => {
    const q = search.toLowerCase();
    return !q || verse.english.toLowerCase().includes(q) || note.toLowerCase().includes(q) || chapter.englishTitle.toLowerCase().includes(q);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Bookmarks & Notes
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          Your saved verses and personal reflections, all in one place.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setTab('bookmarks')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            tab === 'bookmarks' ? 'bg-saffron-500 text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700'
          }`}
        >
          <Bookmark className="h-4 w-4" /> Bookmarks ({bookmarkedVerses.length})
        </button>
        <button
          onClick={() => setTab('notes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            tab === 'notes' ? 'bg-saffron-500 text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700'
          }`}
        >
          <StickyNote className="h-4 w-4" /> Notes ({notedVerses.length})
        </button>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <SearchBar value={search} onChange={setSearch} placeholder={`Search your ${tab}...`} />
      </div>

      {/* Content */}
      {tab === 'bookmarks' ? (
        filteredBookmarks.length === 0 ? (
          <EmptyState icon={Bookmark} title={bookmarkedVerses.length === 0 ? 'No bookmarks yet' : 'No matches found'} desc={bookmarkedVerses.length === 0 ? 'Tap the bookmark icon on any verse to save it here.' : 'Try a different search.'} />
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredBookmarks.map(({ key, chapter, verse }) => (
              <div key={key} className="group rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 hover:shadow-premium transition-all">
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={() => navigate(`/chapter/${chapter.chapterNumber}?verse=${verse.verseNumber}`)}
                    className="text-xs font-medium text-saffron-600 dark:text-saffron-400 hover:underline"
                  >
                    {chapter.chapterNumber}.{verse.verseNumber} · {chapter.englishTitle}
                  </button>
                  <button
                    onClick={() => progress.toggleBookmark(chapter.chapterNumber, verse.verseNumber)}
                    className="text-lotus-500 hover:scale-110 transition-transform"
                    aria-label="Remove bookmark"
                  >
                    <Bookmark className="h-4 w-4 fill-lotus-500" />
                  </button>
                </div>
                <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed line-clamp-3 mb-2">{verse.english}</p>
                <p className="font-telugu text-sm text-ink-600 dark:text-ink-300 line-clamp-2">{verse.telugu}</p>
                <div className="mt-3 pt-3 border-t border-ink-100 dark:border-ink-800">
                  <p className="text-xs text-peacock-700 dark:text-peacock-300 font-medium">{verse.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : filteredNotes.length === 0 ? (
        <EmptyState icon={StickyNote} title={notedVerses.length === 0 ? 'No notes yet' : 'No matches found'} desc={notedVerses.length === 0 ? 'Add a personal reflection on any verse using the note button.' : 'Try a different search.'} />
      ) : (
        <div className="space-y-4">
          {filteredNotes.map(({ key, chapter, verse, note }) => (
            <div key={key} className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => navigate(`/chapter/${chapter.chapterNumber}?verse=${verse.verseNumber}`)}
                  className="text-xs font-medium text-saffron-600 dark:text-saffron-400 hover:underline"
                >
                  {chapter.chapterNumber}.{verse.verseNumber} · {chapter.englishTitle}
                </button>
              </div>
              <p className="text-sm text-ink-600 dark:text-ink-300 italic mb-3 line-clamp-1">"{verse.english}"</p>
              <div className="rounded-xl bg-saffron-50/60 dark:bg-saffron-950/20 border border-saffron-100 dark:border-saffron-900/40 p-3">
                <div className="text-[10px] uppercase tracking-widest text-saffron-700 dark:text-saffron-300 font-semibold mb-1">Your note</div>
                <p className="text-sm text-ink-700 dark:text-ink-200 whitespace-pre-line">{note}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ icon: Icon, title, desc }: { icon: typeof BookOpen; title: string; desc: string }) {
  return (
    <div className="text-center py-20">
      <div className="h-16 w-16 rounded-full bg-ink-100 dark:bg-ink-800 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-ink-300 dark:text-ink-600" />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-700 dark:text-ink-200 mb-1">{title}</h3>
      <p className="text-sm text-ink-500 dark:text-ink-400 max-w-sm mx-auto">{desc}</p>
      <button
        onClick={() => navigate('/chapters')}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-saffron-600 dark:text-saffron-400 hover:underline"
      >
        <BookOpen className="h-4 w-4" /> Browse chapters
      </button>
    </div>
  );
}
