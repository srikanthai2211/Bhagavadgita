import { useState } from 'react';
import { Bookmark, BookmarkCheck, CheckCircle2, Circle, Copy, StickyNote, ChevronDown, ChevronUp } from 'lucide-react';
import type { Verse, LanguageMode } from '../data/types';
import { useProgress } from '../hooks/useProgress';
import { VoicePlayer } from './VoicePlayer';
import { ShareSloka } from './ShareSloka';
import { AskKrishna } from './AskKrishna';

interface VerseCardProps {
  verse: Verse;
  chapterNumber: number;
  langMode: LanguageMode;
  showExplanation: boolean;
  onToggleExplanation: () => void;
}

export function VerseCard({ verse, chapterNumber, langMode, showExplanation, onToggleExplanation }: VerseCardProps) {
  const progress = useProgress();
  const [showNotes, setShowNotes] = useState(false);
  const [noteText, setNoteText] = useState(
    progress.state.notes[progress.verseKey(chapterNumber, verse.verseNumber)] ?? ''
  );
  const [copied, setCopied] = useState(false);

  const key      = progress.verseKey(chapterNumber, verse.verseNumber);
  const isRead   = !!progress.state.readVerses[key];
  const isBookmarked = !!progress.state.bookmarks[key];

  const handleCopy = () => {
    navigator.clipboard?.writeText(
      `Bhagavad Gita ${chapterNumber}.${verse.verseNumber}\n\n${verse.sanskrit}\n\n${verse.telugu}\n\n${verse.english}\n\nTakeaway: ${verse.takeaway}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleShare = async () => {
    const text = `Bhagavad Gita ${chapterNumber}.${verse.verseNumber}: ${verse.english}`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Bhagavad Gita', text }); } catch { /* cancelled */ }
    } else {
      handleCopy();
    }
  };

  const saveNote = () => {
    progress.setNote(chapterNumber, verse.verseNumber, noteText);
    setShowNotes(false);
  };

  return (
    <article
      id={`verse-${chapterNumber}-${verse.verseNumber}`}
      className={`rounded-2xl border transition-all duration-300 scroll-mt-20 ${
        isRead
          ? 'border-peacock-200 dark:border-peacock-900/50 bg-peacock-50/30 dark:bg-peacock-950/10'
          : 'border-ink-200/60 dark:border-ink-800/60 bg-white dark:bg-ink-900'
      } shadow-sm hover:shadow-premium`}
    >
      <div className="p-5 sm:p-6">
        {/* ── Header row ── */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-marigold-400 to-saffron-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-sm flex-shrink-0">
              {verse.verseNumber}
            </div>
            <div>
              <div className="text-xs font-medium text-ink-500 dark:text-ink-400">
                Verse {chapterNumber}.{verse.verseNumber}
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {verse.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={() => progress.toggleBookmark(chapterNumber, verse.verseNumber)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              className="h-8 w-8 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 flex items-center justify-center focus-ring transition-colors"
            >
              {isBookmarked
                ? <BookmarkCheck className="h-4 w-4 text-lotus-500" />
                : <Bookmark className="h-4 w-4 text-ink-400" />}
            </button>
            <button
              onClick={() => progress.markRead(chapterNumber, verse.verseNumber)}
              aria-label={isRead ? 'Marked as read' : 'Mark as read'}
              className="h-8 w-8 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 flex items-center justify-center focus-ring transition-colors"
            >
              {isRead
                ? <CheckCircle2 className="h-4 w-4 text-peacock-500" />
                : <Circle className="h-4 w-4 text-ink-400" />}
            </button>
          </div>
        </div>

        {/* ── Sanskrit ── */}
        <div className="mb-4 pb-4 border-b border-ink-100 dark:border-ink-800">
          <div className="text-[10px] uppercase tracking-widest text-saffron-600 dark:text-saffron-400 font-semibold mb-1.5">
            Sanskrit
          </div>
          <p className="font-display text-base sm:text-lg text-ink-800 dark:text-ink-100 leading-relaxed whitespace-pre-line">
            {verse.sanskrit}
          </p>
        </div>

        {/* ── Telugu ── */}
        {(langMode === 'telugu' || langMode === 'both') && (
          <div className="mb-4">
            <div className="text-[10px] uppercase tracking-widest text-peacock-600 dark:text-peacock-400 font-semibold mb-1.5">
              తెలుగు
            </div>
            <p className="font-telugu text-base sm:text-lg text-ink-700 dark:text-ink-200 leading-loose">
              {verse.telugu}
            </p>
          </div>
        )}

        {/* ── English ── */}
        {(langMode === 'english' || langMode === 'both') && (
          <div className="mb-4">
            <div className="text-[10px] uppercase tracking-widest text-saffron-600 dark:text-saffron-400 font-semibold mb-1.5">
              English
            </div>
            <p className="text-base text-ink-700 dark:text-ink-200 leading-relaxed">
              {verse.english}
            </p>
          </div>
        )}

        {/* ── Voice player ── */}
        <div className="pt-3 pb-3 border-t border-b border-ink-100 dark:border-ink-800 mb-3">
          <VoicePlayer
            sanskrit={verse.sanskrit}
            telugu={verse.telugu}
            english={verse.english}
            explanation={verse.explanation}
          />
        </div>

        {/* ── Explanation toggle ── */}
        <button
          onClick={onToggleExplanation}
          className="flex items-center gap-1.5 text-sm font-medium text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 transition-colors mb-3 focus-ring rounded-lg"
        >
          {showExplanation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {showExplanation ? 'Hide' : 'Show'} explanation & takeaway
        </button>

        {showExplanation && (
          <div className="animate-fade-in space-y-3 mb-4">
            <div className="rounded-xl bg-saffron-50/60 dark:bg-saffron-950/20 border border-saffron-100 dark:border-saffron-900/40 p-4">
              <div className="text-[10px] uppercase tracking-widest text-saffron-700 dark:text-saffron-300 font-semibold mb-1.5">
                Simple Explanation
              </div>
              <p className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed">{verse.explanation}</p>
            </div>
            <div className="rounded-xl bg-peacock-50/60 dark:bg-peacock-950/20 border border-peacock-100 dark:border-peacock-900/40 p-4">
              <div className="text-[10px] uppercase tracking-widest text-peacock-700 dark:text-peacock-300 font-semibold mb-1.5">
                Takeaway
              </div>
              <p className="text-sm font-medium text-ink-800 dark:text-ink-100 leading-relaxed">{verse.takeaway}</p>
            </div>
          </div>
        )}

        {/* ── Footer actions ── */}
        <div className="flex items-center gap-1 pt-3 border-t border-ink-100 dark:border-ink-800 flex-wrap">
          <button
            onClick={() => setShowNotes(s => !s)}
            className="flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400 hover:text-saffron-600 dark:hover:text-saffron-400 px-2 py-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors focus-ring"
          >
            <StickyNote className="h-3.5 w-3.5" />
            {noteText ? 'Edit note' : 'Add note'}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400 hover:text-saffron-600 dark:hover:text-saffron-400 px-2 py-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors focus-ring"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <ShareSloka verse={verse} chapterNumber={chapterNumber} />
          <AskKrishna verse={verse} chapterNumber={chapterNumber} />
        </div>

        {showNotes && (
          <div className="mt-3 animate-fade-in">
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write your personal reflection here..."
              className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50/50 dark:bg-ink-800/50 p-3 text-sm text-ink-800 dark:text-ink-100 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 resize-y min-h-[80px]"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => setShowNotes(false)} className="text-xs px-3 py-1.5 rounded-lg text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors">
                Cancel
              </button>
              <button onClick={saveNote} className="text-xs px-3 py-1.5 rounded-lg bg-saffron-500 text-white hover:bg-saffron-600 transition-colors font-medium">
                Save note
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
