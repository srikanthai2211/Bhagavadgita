import { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { ChapterCard } from '../components/ChapterCard';
import { SearchBar } from '../components/SearchBar';
import { chapters } from '../data/gita';
import { useProgress } from '../hooks/useProgress';

export function ChaptersPage() {
  const progress = useProgress();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'incomplete' | 'complete' | 'quiz'>('all');

  const filtered = chapters.filter((ch) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      ch.englishTitle.toLowerCase().includes(q) ||
      ch.teluguTitle.includes(search) ||
      ch.sanskritTitle.includes(search) ||
      ch.mainTheme.toLowerCase().includes(q) ||
      ch.summary.toLowerCase().includes(q);

    const cp = progress.chapterProgress(ch.chapterNumber);
    const matchesFilter =
      filter === 'all' ||
      (filter === 'complete' && cp === 100) ||
      (filter === 'incomplete' && cp < 100) ||
      (filter === 'quiz' && progress.hasQuiz(ch.chapterNumber));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-950/40 mb-3">
          <BookOpen className="h-3.5 w-3.5 text-saffron-500" />
          <span className="text-xs font-medium text-saffron-700 dark:text-saffron-300">18 Chapters · 700 Verses</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Explore the Chapters
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          Each chapter is a step on the journey. Start from the beginning or jump to any chapter that calls to you.
        </p>
      </div>

      {/* Overall progress bar */}
      <div className="rounded-2xl bg-gradient-to-r from-saffron-50 to-marigold-50/50 dark:from-ink-900 dark:to-ink-800 border border-saffron-100 dark:border-saffron-900/30 p-5 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Overall Gita progress</span>
          <span className="text-sm font-bold text-saffron-600 dark:text-saffron-400">{progress.overallProgress}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-marigold-400 via-saffron-500 to-saffron-600 transition-all duration-700"
            style={{ width: `${progress.overallProgress}%` }}
          />
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs text-ink-500 dark:text-ink-400">
          <span>{progress.readCount} / {progress.totalVerses} verses read</span>
          <span>{progress.completedChapters} / 18 chapters complete</span>
        </div>
      </div>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search by title, theme, or summary..." />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-ink-400" />
          {(['all', 'incomplete', 'complete', 'quiz'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${
                filter === f
                  ? 'bg-saffron-500 text-white'
                  : 'bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700'
              }`}
            >
              {f === 'all' ? 'All' : f === 'quiz' ? 'Quiz done' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <Search className="h-12 w-12 text-ink-300 dark:text-ink-700 mx-auto mb-4" />
          <p className="text-ink-500 dark:text-ink-400">No chapters match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((ch) => (
            <ChapterCard
              key={ch.chapterNumber}
              chapter={ch}
              progress={progress.chapterProgress(ch.chapterNumber)}
              quizScore={progress.chapterQuizScore(ch.chapterNumber)}
              hasQuiz={progress.hasQuiz(ch.chapterNumber)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
