import { Bookmark, BookmarkCheck, Copy, Share2, Sparkles } from 'lucide-react';
import { chapters } from '../data/gita';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';

// Deterministic verse of the day based on date
function getVerseOfTheDay() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const totalVerses = chapters.reduce((s, c) => s + c.verses.length, 0);
  const index = dayOfYear % totalVerses;
  let count = 0;
  for (const ch of chapters) {
    for (const v of ch.verses) {
      if (count === index) return { chapter: ch, verse: v };
      count++;
    }
  }
  return { chapter: chapters[0], verse: chapters[0].verses[0] };
}

export function VerseOfTheDay() {
  const { chapter, verse } = getVerseOfTheDay();
  const progress = useProgress();
  const key = `${chapter.chapterNumber}.${verse.verseNumber}`;
  const isBookmarked = !!progress.state.bookmarks[key];

  const handleCopy = () => {
    navigator.clipboard?.writeText(
      `Verse of the Day — Bhagavad Gita ${chapter.chapterNumber}.${verse.verseNumber}\n\n${verse.english}\n\n${verse.takeaway}`
    );
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-saffron-50 via-marigold-50 to-lotus-50 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800 border border-saffron-200/50 dark:border-saffron-900/30 shadow-premium">
      <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-marigold-300/30 to-saffron-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-lotus-300/20 to-peacock-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-saffron-600 dark:text-saffron-400">
              Verse of the Day
            </div>
            <div className="text-[11px] text-ink-500 dark:text-ink-400">
              Chapter {chapter.chapterNumber} · {chapter.englishTitle} · Verse {verse.verseNumber}
            </div>
          </div>
        </div>

        <p className="font-display text-lg sm:text-xl text-ink-800 dark:text-ink-100 leading-relaxed mb-3">
          {verse.english}
        </p>
        <p className="font-telugu text-base text-ink-600 dark:text-ink-300 leading-loose mb-4">
          {verse.telugu}
        </p>

        <div className="rounded-xl bg-white/60 dark:bg-ink-800/60 backdrop-blur p-3 mb-4">
          <div className="text-[10px] uppercase tracking-widest text-peacock-600 dark:text-peacock-400 font-semibold mb-1">
            Takeaway
          </div>
          <p className="text-sm font-medium text-ink-700 dark:text-ink-200">{verse.takeaway}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/chapter/${chapter.chapterNumber}`)}
            className="text-xs px-4 py-2 rounded-full bg-saffron-500 text-white hover:bg-saffron-600 transition-colors font-medium"
          >
            Read full chapter
          </button>
          <button
            onClick={() => progress.toggleBookmark(chapter.chapterNumber, verse.verseNumber)}
            className="h-8 w-8 rounded-full bg-white/70 dark:bg-ink-800/70 hover:bg-white dark:hover:bg-ink-700 flex items-center justify-center transition-colors"
            aria-label="Bookmark"
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-4 w-4 text-lotus-500" />
            ) : (
              <Bookmark className="h-4 w-4 text-ink-500" />
            )}
          </button>
          <button
            onClick={handleCopy}
            className="h-8 w-8 rounded-full bg-white/70 dark:bg-ink-800/70 hover:bg-white dark:hover:bg-ink-700 flex items-center justify-center transition-colors"
            aria-label="Copy"
          >
            <Copy className="h-4 w-4 text-ink-500" />
          </button>
          <button
            onClick={() => {
              if (navigator.share) navigator.share({ text: verse.english });
              else handleCopy();
            }}
            className="h-8 w-8 rounded-full bg-white/70 dark:bg-ink-800/70 hover:bg-white dark:hover:bg-ink-700 flex items-center justify-center transition-colors"
            aria-label="Share"
          >
            <Share2 className="h-4 w-4 text-ink-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
