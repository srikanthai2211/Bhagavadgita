import { useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { chapters } from '../data/gita';
import type { VerseTag } from '../data/types';

export interface QuizAttempt {
  chapterNumber: number;
  score: number;
  total: number;
  date: string;
  weakTopics: string[];
}

export interface ProgressState {
  readVerses: Record<string, boolean>; // key: "chapter.verse"
  bookmarks: Record<string, boolean>;
  notes: Record<string, string>;
  quizAttempts: QuizAttempt[];
  lastChapter: number | null;
  lastVerse: number | null;
  lastVisitDate: string | null;
  streak: number;
  badges: string[];
  chatHistory: { role: 'user' | 'assistant'; content: string; ts: number }[];
}

const defaultState: ProgressState = {
  readVerses: {},
  bookmarks: {},
  notes: {},
  quizAttempts: [],
  lastChapter: null,
  lastVerse: null,
  lastVisitDate: null,
  streak: 0,
  badges: [],
  chatHistory: [],
};

const STORAGE_KEY = 'bgym_progress_v1';

export function useProgress() {
  const [state, setState] = useLocalStorage<ProgressState>(STORAGE_KEY, defaultState);

  const verseKey = (chapter: number, verse: number) => `${chapter}.${verse}`;

  const markRead = useCallback(
    (chapter: number, verse: number) => {
      setState((prev) => {
        const key = `${chapter}.${verse}`;
        if (prev.readVerses[key]) return prev;
        const readVerses = { ...prev.readVerses, [key]: true };
        return { ...prev, readVerses };
      });
    },
    [setState]
  );

  const toggleBookmark = useCallback(
    (chapter: number, verse: number) => {
      setState((prev) => {
        const key = `${chapter}.${verse}`;
        const bookmarks = { ...prev.bookmarks };
        if (bookmarks[key]) delete bookmarks[key];
        else bookmarks[key] = true;
        return { ...prev, bookmarks };
      });
    },
    [setState]
  );

  const setNote = useCallback(
    (chapter: number, verse: number, note: string) => {
      setState((prev) => {
        const key = `${chapter}.${verse}`;
        const notes = { ...prev.notes };
        if (note.trim()) notes[key] = note;
        else delete notes[key];
        return { ...prev, notes };
      });
    },
    [setState]
  );

  const recordQuiz = useCallback(
    (attempt: QuizAttempt) => {
      setState((prev) => ({
        ...prev,
        quizAttempts: [...prev.quizAttempts, attempt],
      }));
    },
    [setState]
  );

  const visitChapter = useCallback(
    (chapter: number, verse?: number) => {
      setState((prev) => {
        const today = new Date().toDateString();
        let streak = prev.streak;
        if (prev.lastVisitDate !== today) {
          const yesterday = new Date(Date.now() - 86400000).toDateString();
          if (prev.lastVisitDate === yesterday) streak = prev.streak + 1;
          else streak = 1;
        }
        return {
          ...prev,
          lastChapter: chapter,
          lastVerse: verse ?? prev.lastVerse,
          lastVisitDate: today,
          streak: Math.max(streak, 1),
        };
      });
    },
    [setState]
  );

  const addChatMessage = useCallback(
    (msg: { role: 'user' | 'assistant'; content: string }) => {
      setState((prev) => ({
        ...prev,
        chatHistory: [...prev.chatHistory, { ...msg, ts: Date.now() }].slice(-50),
      }));
    },
    [setState]
  );

  const clearChat = useCallback(() => {
    setState((prev) => ({ ...prev, chatHistory: [] }));
  }, [setState]);

  // Derived stats
  const totalVerses = chapters.reduce((s, c) => s + c.verses.length, 0);
  const readCount = Object.values(state.readVerses).filter(Boolean).length;
  const bookmarkCount = Object.keys(state.bookmarks).length;
  const noteCount = Object.keys(state.notes).length;
  const overallProgress = totalVerses > 0 ? Math.round((readCount / totalVerses) * 100) : 0;

  const chapterProgress = (chapterNum: number): number => {
    const ch = chapters.find((c) => c.chapterNumber === chapterNum);
    if (!ch) return 0;
    const read = ch.verses.filter((v) => state.readVerses[`${chapterNum}.${v.verseNumber}`]).length;
    return ch.verses.length > 0 ? Math.round((read / ch.verses.length) * 100) : 0;
  };

  const isChapterComplete = (chapterNum: number): boolean => chapterProgress(chapterNum) === 100;

  const completedChapters = chapters.filter((c) => isChapterComplete(c.chapterNumber)).length;

  const quizAverage = (): number => {
    if (state.quizAttempts.length === 0) return 0;
    const total = state.quizAttempts.reduce((s, a) => s + a.score / a.total, 0);
    return Math.round((total / state.quizAttempts.length) * 100);
  };

  const chapterQuizScore = (chapterNum: number): number | null => {
    const attempts = state.quizAttempts.filter((a) => a.chapterNumber === chapterNum);
    if (attempts.length === 0) return null;
    const best = attempts.reduce((max, a) => Math.max(max, a.score / a.total), 0);
    return Math.round(best * 100);
  };

  const hasQuiz = (chapterNum: number): boolean =>
    state.quizAttempts.some((a) => a.chapterNumber === chapterNum);

  // Theme analysis from quiz attempts
  const themeStats = (): { tag: VerseTag; strength: number; count: number }[] => {
    const tagCounts: Record<string, { correct: number; total: number }> = {};
    for (const attempt of state.quizAttempts) {
      const ch = chapters.find((c) => c.chapterNumber === attempt.chapterNumber);
      if (!ch) continue;
      const ratio = attempt.score / attempt.total;
      for (const tag of ch.verses.flatMap((v) => v.tags)) {
        if (!tagCounts[tag]) tagCounts[tag] = { correct: 0, total: 0 };
        tagCounts[tag].total += 1;
        tagCounts[tag].correct += ratio;
      }
    }
    return Object.entries(tagCounts)
      .map(([tag, { correct, total }]) => ({
        tag: tag as VerseTag,
        strength: total > 0 ? Math.round((correct / total) * 100) : 0,
        count: total,
      }))
      .sort((a, b) => b.strength - a.strength);
  };

  const strongestThemes = (): VerseTag[] => themeStats().slice(0, 3).map((t) => t.tag);
  const weakestThemes = (): VerseTag[] => themeStats().slice(-3).map((t) => t.tag);

  // Badge logic
  const allBadges = [
    { id: 'first-verse', name: 'First Verse Read', desc: 'Read your first verse', check: () => readCount >= 1 },
    { id: 'first-chapter', name: 'First Chapter Completed', desc: 'Complete a full chapter', check: () => completedChapters >= 1 },
    { id: '25-verses', name: '25 Verses Read', desc: 'Read 25 verses', check: () => readCount >= 25 },
    { id: '50-verses', name: '50 Verses Read', desc: 'Read 50 verses', check: () => readCount >= 50 },
    { id: '100-verses', name: '100 Verses Read', desc: 'Read 100 verses', check: () => readCount >= 100 },
    { id: 'quiz-starter', name: 'Quiz Starter', desc: 'Complete your first quiz', check: () => state.quizAttempts.length >= 1 },
    { id: 'quiz-master', name: 'Quiz Master', desc: 'Score 100% on any quiz', check: () => state.quizAttempts.some((a) => a.score === a.total) },
    { id: 'consistent', name: 'Consistent Learner', desc: 'Maintain a 3-day streak', check: () => state.streak >= 3 },
    { id: 'wisdom-seeker', name: 'Wisdom Seeker', desc: 'Read 200 verses', check: () => readCount >= 200 },
    { id: 'gita-explorer', name: 'Gita Explorer', desc: 'Visit 5 different chapters', check: () => {
      const visited = new Set(state.quizAttempts.map((a) => a.chapterNumber));
      // also count chapters with any read verse
      for (const key of Object.keys(state.readVerses)) {
        visited.add(Number(key.split('.')[0]));
      }
      return visited.size >= 5;
    } },
  ];

  const earnedBadges = allBadges.filter((b) => b.check()).map((b) => b.id);

  // Auto-award badges
  useEffect(() => {
    const newBadges = earnedBadges.filter((b) => !state.badges.includes(b));
    if (newBadges.length > 0) {
      setState((prev) => ({ ...prev, badges: [...prev.badges, ...newBadges] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readCount, completedChapters, state.quizAttempts.length, state.streak]);

  const recommendedNextChapter = (): number => {
    // Find first incomplete chapter
    for (const c of chapters) {
      if (chapterProgress(c.chapterNumber) < 100) return c.chapterNumber;
    }
    return 1;
  };

  return {
    state,
    verseKey,
    markRead,
    toggleBookmark,
    setNote,
    recordQuiz,
    visitChapter,
    addChatMessage,
    clearChat,
    // derived
    totalVerses,
    readCount,
    bookmarkCount,
    noteCount,
    overallProgress,
    chapterProgress,
    isChapterComplete,
    completedChapters,
    quizAverage,
    chapterQuizScore,
    hasQuiz,
    themeStats,
    strongestThemes,
    weakestThemes,
    allBadges,
    earnedBadges,
    recommendedNextChapter,
  };
}

export type Progress = ReturnType<typeof useProgress>;
