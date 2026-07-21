import { Clock, BookOpen, CheckCircle2, Circle, ChevronRight, ListChecks } from 'lucide-react';
import { ChapterArtwork } from './ChapterArtwork';
import { navigate } from '../hooks/useRouter';
import type { Chapter } from '../data/types';

interface ChapterCardProps {
  chapter: Chapter;
  progress: number; // 0-100
  quizScore: number | null;
  hasQuiz: boolean;
}

export function ChapterCard({ chapter, progress, quizScore, hasQuiz }: ChapterCardProps) {
  const isComplete = progress === 100;
  const readingTime = Math.ceil((chapter.verseCount * 1.5) / 60);

  return (
    <div className="group relative w-full rounded-2xl overflow-hidden bg-white dark:bg-ink-900 border border-ink-200/60 dark:border-ink-800/60 shadow-premium hover:shadow-glow-soft transition-all duration-300 hover:-translate-y-1">
      <button
        onClick={() => navigate(`/chapter/${chapter.chapterNumber}`)}
        className="w-full text-left focus-ring"
        aria-label={`Open Chapter ${chapter.chapterNumber}: ${chapter.englishTitle}`}
      >
        <div className="relative h-36 overflow-hidden">
          <ChapterArtwork chapterNumber={chapter.chapterNumber} className="w-full h-full" variant="card" />
          <div className="absolute top-3 left-3 h-9 w-9 rounded-full bg-white/90 dark:bg-ink-900/90 backdrop-blur flex items-center justify-center font-display font-bold text-saffron-600 dark:text-saffron-400 text-sm shadow-md">
            {chapter.chapterNumber}
          </div>
          {isComplete && (
            <div className="absolute bottom-3 right-3 h-7 w-7 rounded-full bg-peacock-500 flex items-center justify-center shadow-md">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-display text-lg font-semibold text-white drop-shadow-md leading-tight">
              {chapter.englishTitle}
            </div>
            <div className="font-telugu text-xs text-white/90 drop-shadow mt-0.5">
              {chapter.teluguTitle}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 text-[11px] text-ink-500 dark:text-ink-400 mb-2">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" /> {chapter.verseCount} verses
            </span>
            <span className="text-ink-300 dark:text-ink-700">•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {readingTime} min
            </span>
            {hasQuiz && (
              <>
                <span className="text-ink-300 dark:text-ink-700">•</span>
                <span className="flex items-center gap-1 text-peacock-600 dark:text-peacock-400 font-medium">
                  Quiz {quizScore !== null ? `${quizScore}%` : 'done'}
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed line-clamp-2 mb-3">
            {chapter.summary}
          </p>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-wider font-medium text-saffron-600 dark:text-saffron-400">
              {chapter.mainTheme}
            </span>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between text-[11px] text-ink-500 dark:text-ink-400 mb-1">
              <span>Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-marigold-400 to-saffron-600 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-ink-700 dark:text-ink-200 flex items-center gap-1">
              {isComplete ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-peacock-500" /> Completed
                </>
              ) : progress > 0 ? (
                <>
                  <Circle className="h-3.5 w-3.5 text-saffron-500 fill-saffron-500/30" /> Continue
                </>
              ) : (
                <>
                  <Circle className="h-3.5 w-3.5 text-ink-400" /> Start
                </>
              )}
            </span>
            <ChevronRight className="h-4 w-4 text-ink-400 group-hover:text-saffron-500 group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </button>

      {/* Quiz quick-access button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/quiz/${chapter.chapterNumber}`);
        }}
        className="absolute top-3 right-3 h-8 px-2.5 rounded-full bg-white/90 dark:bg-ink-900/90 backdrop-blur flex items-center gap-1 text-[11px] font-medium text-peacock-600 dark:text-peacock-400 shadow-md hover:bg-peacock-50 dark:hover:bg-peacock-950/60 transition-colors z-10 focus-ring"
        aria-label={`Take quiz for Chapter ${chapter.chapterNumber}`}
      >
        <ListChecks className="h-3.5 w-3.5" />
        {hasQuiz ? `${quizScore}%` : 'Quiz'}
      </button>
    </div>
  );
}
