import { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, Clock, ListChecks, Sparkles, ChevronDown, ChevronUp, ListOrdered } from 'lucide-react';
import { getChapter, chapters } from '../data/gita';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';
import { VerseCard } from '../components/VerseCard';
import { InlineQuiz } from '../components/InlineQuiz';
import { ChapterArtwork } from '../components/ChapterArtwork';
import type { LanguageMode } from '../data/types';

export function ChapterDetailPage({ chapterNumber }: { chapterNumber: number }) {
  const progress = useProgress();
  const chapter = getChapter(chapterNumber);
  const [langMode, setLangMode] = useState<LanguageMode>('both');
  const [expandedVerses, setExpandedVerses] = useState<Set<number>>(new Set());
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    progress.visitChapter(chapterNumber);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterNumber]);

  if (!chapter) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-ink-500">Chapter not found.</p>
        <button onClick={() => navigate('/chapters')} className="mt-4 text-saffron-600 hover:underline">
          Back to chapters
        </button>
      </div>
    );
  }

  const cp = progress.chapterProgress(chapterNumber);
  const quizScore = progress.chapterQuizScore(chapterNumber);
  const hasQuiz = progress.hasQuiz(chapterNumber);
  // Estimate from actual bilingual content (English + explanation) at a
  // realistic verse-by-verse reading pace, not a flat per-verse constant —
  // that previously produced absurd results like "72 verses · 2 min read".
  const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
  const totalWords = chapter.verses.reduce(
    (sum, v) => sum + wordCount(v.english) + wordCount(v.explanation),
    0
  );
  const readingTime = Math.max(1, Math.round(totalWords / 160));
  const prevChapter = chapters.find((c) => c.chapterNumber === chapterNumber - 1);
  const nextChapter = chapters.find((c) => c.chapterNumber === chapterNumber + 1);

  const toggleExplanation = (vn: number) => {
    setExpandedVerses((prev) => {
      const next = new Set(prev);
      if (next.has(vn)) next.delete(vn);
      else next.add(vn);
      return next;
    });
  };

  const expandAll = () => setExpandedVerses(new Set(chapter.verses.map((v) => v.verseNumber)));
  const collapseAll = () => setExpandedVerses(new Set());

  const jumpToVerse = (verseNumber: number) => {
    const el = document.getElementById(`verse-${chapterNumber}-${verseNumber}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <button
        onClick={() => navigate('/chapters')}
        className="flex items-center gap-1 text-xs text-ink-500 hover:text-saffron-600 mb-4 transition-colors"
      >
        <ChevronRight className="h-3.5 w-3.5 rotate-180" /> All chapters
      </button>

      {/* Hero header */}
      <div className="relative rounded-3xl overflow-hidden mb-6 shadow-premium">
        <ChapterArtwork chapterNumber={chapterNumber} className="w-full h-48 sm:h-64" variant="banner" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
              Chapter {chapterNumber}
            </span>
            <span className="text-xs font-medium text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {chapter.mainTheme}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-1 drop-shadow-lg">
            {chapter.englishTitle}
          </h1>
          <p className="font-telugu text-base text-white/90 drop-shadow">{chapter.teluguTitle}</p>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ink-500 dark:text-ink-400">
        <span className="flex items-center gap-1.5">
          <BookOpen className="h-4 w-4" /> {chapter.verseCount} verses
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {readingTime} min read
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-saffron-500" /> {cp}% read
        </span>
        {hasQuiz && (
          <span className="flex items-center gap-1.5 text-peacock-600 dark:text-peacock-400 font-medium">
            <ListChecks className="h-4 w-4" /> Quiz best: {quizScore}%
          </span>
        )}
      </div>

      {/* Summary */}
      <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 p-5 sm:p-6 mb-6 shadow-sm">
        <p className="text-ink-700 dark:text-ink-200 leading-relaxed">{chapter.summary}</p>
      </div>

      {/* Quiz CTA banner */}
      <div className="rounded-2xl bg-gradient-to-br from-peacock-50 to-saffron-50/40 dark:from-ink-900 dark:to-ink-800 border border-peacock-200 dark:border-peacock-900/40 p-5 mb-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-peacock-400 to-peacock-600 flex items-center justify-center flex-shrink-0 shadow-glow-soft">
              <ListChecks className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink-900 dark:text-ink-50">
                Test your understanding
              </h3>
              <p className="text-xs text-ink-500 dark:text-ink-400">
                {hasQuiz ? `Best score: ${quizScore}% · Retake the quiz anytime` : `${chapter.quiz.length} questions · See explanations and verses to revisit`}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setShowQuiz(true);
              setTimeout(() => {
                document.getElementById('inline-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 50);
            }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-peacock-500 to-peacock-600 text-white font-semibold text-sm shadow-glow-soft hover:scale-105 transition-transform flex-shrink-0"
          >
            {hasQuiz ? 'Retake quiz' : 'Take quiz'}
          </button>
        </div>
      </div>

      {/* Inline quiz */}
      {showQuiz && (
        <div id="inline-quiz" className="mb-8 scroll-mt-20">
          <InlineQuiz chapterNumber={chapterNumber} questions={chapter.quiz} />
        </div>
      )}

      {/* Verses section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
          Verses
        </h2>
        <div className="flex items-center gap-2">
          {/* Jump to verse */}
          {chapter.verses.length > 8 && (
            <div className="relative flex items-center gap-1 bg-ink-100 dark:bg-ink-800 rounded-lg px-2 py-1">
              <ListOrdered className="h-3.5 w-3.5 text-ink-400 flex-shrink-0" />
              <select
                aria-label="Jump to verse"
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) jumpToVerse(Number(e.target.value));
                  e.target.value = '';
                }}
                className="bg-transparent text-xs font-medium text-ink-600 dark:text-ink-300 focus:outline-none cursor-pointer pr-1"
              >
                <option value="" disabled>
                  Jump to verse…
                </option>
                {chapter.verses.map((v) => (
                  <option key={v.verseNumber} value={v.verseNumber}>
                    Verse {v.verseNumber}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Language toggle */}
          <div className="flex items-center bg-ink-100 dark:bg-ink-800 rounded-lg p-0.5">
            {(['both', 'english', 'telugu'] as LanguageMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setLangMode(m)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors capitalize ${
                  langMode === m
                    ? 'bg-white dark:bg-ink-700 text-saffron-600 dark:text-saffron-400 shadow-sm'
                    : 'text-ink-500 dark:text-ink-400'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          {/* Expand/collapse all */}
          <button
            onClick={() => expandedVerses.size === chapter.verses.length ? collapseAll() : expandAll()}
            className="flex items-center gap-1 text-xs text-ink-500 dark:text-ink-400 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors"
          >
            {expandedVerses.size === chapter.verses.length ? (
              <><ChevronUp className="h-3.5 w-3.5" /> Collapse all</>
            ) : (
              <><ChevronDown className="h-3.5 w-3.5" /> Expand all</>
            )}
          </button>
        </div>
      </div>

      {/* Verse list */}
      <div className="space-y-4">
        {chapter.verses.map((verse) => (
          <VerseCard
            key={verse.verseNumber}
            verse={verse}
            chapterNumber={chapterNumber}
            langMode={langMode}
            showExplanation={expandedVerses.has(verse.verseNumber)}
            onToggleExplanation={() => toggleExplanation(verse.verseNumber)}
          />
        ))}
      </div>

      {/* Chapter nav */}
      <div className="flex items-center justify-between gap-3 mt-10 pt-6 border-t border-ink-100 dark:border-ink-800">
        {prevChapter ? (
          <button
            onClick={() => navigate(`/chapter/${prevChapter.chapterNumber}`)}
            className="flex items-center gap-2 text-left group flex-1 max-w-[45%]"
          >
            <ChevronRight className="h-4 w-4 text-ink-400 rotate-180 group-hover:text-saffron-500 transition-colors flex-shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-ink-400">Previous</div>
              <div className="text-sm font-medium text-ink-700 dark:text-ink-200 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors truncate">
                Ch {prevChapter.chapterNumber}: {prevChapter.englishTitle}
              </div>
            </div>
          </button>
        ) : <div className="flex-1" />}
        {nextChapter ? (
          <button
            onClick={() => navigate(`/chapter/${nextChapter.chapterNumber}`)}
            className="flex items-center gap-2 text-right group flex-1 max-w-[45%] justify-end"
          >
            <div>
              <div className="text-[10px] uppercase tracking-wider text-ink-400">Next</div>
              <div className="text-sm font-medium text-ink-700 dark:text-ink-200 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors truncate">
                Ch {nextChapter.chapterNumber}: {nextChapter.englishTitle}
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-ink-400 group-hover:text-saffron-500 transition-colors flex-shrink-0" />
          </button>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
