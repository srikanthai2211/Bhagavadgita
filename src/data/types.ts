export type VerseTag =
  | 'duty'
  | 'courage'
  | 'wisdom'
  | 'devotion'
  | 'meditation'
  | 'peace'
  | 'self-control'
  | 'action'
  | 'knowledge'
  | 'detachment'
  | 'faith'
  | 'yoga'
  | 'discipline'
  | 'fearlessness'
  | 'compassion'
  | 'surrender'
  | 'soul'
  | 'truth';

export interface Verse {
  verseNumber: number;
  sanskrit: string;
  telugu: string;
  english: string;
  explanation: string;
  takeaway: string;
  tags: VerseTag[];
}

export type Difficulty = 'easy' | 'medium' | 'reflective';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  linkedVerses: number[];
  difficulty: Difficulty;
}

export interface Chapter {
  id: number;
  chapterNumber: number;
  sanskritTitle: string;
  englishTitle: string;
  teluguTitle: string;
  verseCount: number;
  summary: string;
  mainTheme: string;
  artworkPrompt: string;
  verses: Verse[];
  quiz: QuizQuestion[];
}

export type LanguageMode = 'telugu' | 'english' | 'both';
export type ThemeMode = 'light' | 'dark';
