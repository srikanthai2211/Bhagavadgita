import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';
import { getChapter, chapters } from '../data/gita';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';
import type { QuizQuestion } from '../data/types';

export function QuizPage({ chapterNumber }: { chapterNumber: number }) {
  const progress = useProgress();
  const chapter = getChapter(chapterNumber);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!chapter) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-ink-500">Quiz not found.</p>
        <button onClick={() => navigate('/chapters')} className="mt-4 text-saffron-600 hover:underline">
          Back to chapters
        </button>
      </div>
    );
  }

  const questions = chapter.quiz;
  const q: QuizQuestion = questions[current];

  const handleSelect = (i: number) => {
    if (showResult) return;
    setSelected(i);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setShowResult(true);
    setAnswers((a) => [...a, selected]);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      // Finish
      const finalAnswers = [...answers];
      const score = finalAnswers.reduce((s, ans, idx) => (ans === questions[idx].correctAnswer ? s + 1 : s), 0);
      const weakTopics: string[] = [];
      for (let i = 0; i < finalAnswers.length; i++) {
        if (finalAnswers[i] !== questions[i].correctAnswer) {
          weakTopics.push(...questions[i].linkedVerses.map((v) => `${chapterNumber}.${v}`));
        }
      }
      progress.recordQuiz({
        chapterNumber,
        score,
        total: questions.length,
        date: new Date().toISOString(),
        weakTopics,
      });
      setFinished(true);
    }
  };

  const score = answers.reduce((s, ans, idx) => (ans === questions[idx].correctAnswer ? s + 1 : s), 0);
  const scorePercent = Math.round((score / questions.length) * 100);

  // Quiz selection screen (when no chapter specified, show list)
  if (!chapterNumber) {
    return <QuizListPage />;
  }

  if (finished) {
    const feedback =
      scorePercent === 100 ? 'Perfect! You have mastered this chapter.' :
      scorePercent >= 70 ? 'Great work! You understand this chapter well.' :
      scorePercent >= 50 ? 'Good effort! Review a few verses and try again.' :
      'Keep going! Revisit the chapter and you will improve.';

    const wrongQuestions = questions.filter((_, i) => answers[i] !== questions[i].correctAnswer);
    const versesToReview = Array.from(new Set(wrongQuestions.flatMap((q) => q.linkedVerses))).slice(0, 5);
    const nextChapter = chapters.find((c) => c.chapterNumber === chapterNumber + 1);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <div className={`h-20 w-20 rounded-full mx-auto flex items-center justify-center mb-4 ${
            scorePercent >= 70 ? 'bg-gradient-to-br from-peacock-400 to-peacock-600' :
            scorePercent >= 50 ? 'bg-gradient-to-br from-marigold-400 to-saffron-500' :
            'bg-gradient-to-br from-lotus-400 to-lotus-600'
          } shadow-glow-soft`}>
            <Award className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-2">
            Quiz Complete!
          </h1>
          <p className="text-ink-500 dark:text-ink-400">Chapter {chapterNumber}: {chapter.englishTitle}</p>
        </div>

        <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-premium p-6 sm:p-8 mb-6">
          <div className="text-center mb-6">
            <div className="font-display text-5xl font-bold text-gradient-saffron mb-1">
              {score}/{questions.length}
            </div>
            <div className="text-sm text-ink-500 dark:text-ink-400">{scorePercent}% · {feedback}</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl bg-peacock-50 dark:bg-peacock-950/30 p-4 text-center">
              <CheckCircle2 className="h-5 w-5 text-peacock-500 mx-auto mb-1" />
              <div className="font-display text-2xl font-bold text-peacock-600 dark:text-peacock-400">{score}</div>
              <div className="text-xs text-ink-500 dark:text-ink-400">Correct</div>
            </div>
            <div className="rounded-xl bg-lotus-50 dark:bg-lotus-950/30 p-4 text-center">
              <XCircle className="h-5 w-5 text-lotus-500 mx-auto mb-1" />
              <div className="font-display text-2xl font-bold text-lotus-600 dark:text-lotus-400">{questions.length - score}</div>
              <div className="text-xs text-ink-500 dark:text-ink-400">Need review</div>
            </div>
          </div>

          {wrongQuestions.length > 0 && (
            <div className="rounded-xl bg-saffron-50 dark:bg-saffron-950/20 border border-saffron-100 dark:border-saffron-900/40 p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-saffron-600 dark:text-saffron-400" />
                <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">Topics to revisit</span>
              </div>
              <p className="text-xs text-ink-600 dark:text-ink-300 mb-3">
                Review these verses to strengthen your understanding:
              </p>
              <div className="flex flex-wrap gap-2">
                {versesToReview.map((v) => (
                  <button
                    key={v}
                    onClick={() => navigate(`/chapter/${chapterNumber}?verse=${v}`)}
                    className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-ink-800 border border-saffron-200 dark:border-saffron-900/40 text-saffron-700 dark:text-saffron-300 hover:bg-saffron-50 dark:hover:bg-saffron-950/40 transition-colors"
                  >
                    Verse {chapterNumber}.{v}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setCurrent(0);
                setAnswers([]);
                setSelected(null);
                setShowResult(false);
                setFinished(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 font-medium hover:bg-ink-200 dark:hover:bg-ink-700 transition-colors"
            >
              <RotateCcw className="h-4 w-4" /> Retry quiz
            </button>
            {nextChapter ? (
              <button
                onClick={() => navigate(`/chapter/${nextChapter.chapterNumber}`)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium hover:shadow-glow-soft transition-all"
              >
                Next chapter <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/progress')}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium hover:shadow-glow-soft transition-all"
              >
                View progress <TrendingUp className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Review answers */}
        <div className="space-y-3">
          <h3 className="font-display text-lg font-semibold text-ink-800 dark:text-ink-100">Review your answers</h3>
          {questions.map((qq, i) => {
            const correct = answers[i] === qq.correctAnswer;
            return (
              <div key={i} className={`rounded-xl p-4 border ${correct ? 'border-peacock-200 dark:border-peacock-900/40 bg-peacock-50/30 dark:bg-peacock-950/10' : 'border-lotus-200 dark:border-lotus-900/40 bg-lotus-50/30 dark:bg-lotus-950/10'}`}>
                <div className="flex items-start gap-2 mb-2">
                  {correct ? <CheckCircle2 className="h-4 w-4 text-peacock-500 mt-0.5 flex-shrink-0" /> : <XCircle className="h-4 w-4 text-lotus-500 mt-0.5 flex-shrink-0" />}
                  <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{qq.question}</p>
                </div>
                {!correct && (
                  <p className="text-xs text-ink-600 dark:text-ink-300 ml-6 mb-1">
                    <span className="font-medium text-lotus-600 dark:text-lotus-400">Your answer:</span> {qq.options[answers[i]]}
                  </p>
                )}
                <p className="text-xs text-ink-600 dark:text-ink-300 ml-6 mb-1">
                  <span className="font-medium text-peacock-600 dark:text-peacock-400">Correct:</span> {qq.options[qq.correctAnswer]}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400 ml-6 italic">{qq.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => navigate(`/chapter/${chapterNumber}`)}
        className="flex items-center gap-1 text-xs text-ink-500 hover:text-saffron-600 mb-4 transition-colors"
      >
        <ChevronRight className="h-3.5 w-3.5 rotate-180" /> Back to chapter
      </button>

      <div className="text-center mb-6">
        <div className="text-xs uppercase tracking-widest font-semibold text-saffron-600 dark:text-saffron-400 mb-1">
          Chapter {chapterNumber} Quiz
        </div>
        <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-ink-50">{chapter.englishTitle}</h1>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current ? 'bg-peacock-500' : i === current ? 'bg-saffron-500' : 'bg-ink-200 dark:bg-ink-800'
            }`}
          />
        ))}
      </div>

      <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-premium p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400">
            Question {current + 1} of {questions.length}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            q.difficulty === 'easy' ? 'bg-peacock-50 dark:bg-peacock-950/40 text-peacock-700 dark:text-peacock-300' :
            q.difficulty === 'medium' ? 'bg-saffron-50 dark:bg-saffron-950/40 text-saffron-700 dark:text-saffron-300' :
            'bg-lotus-50 dark:bg-lotus-950/40 text-lotus-700 dark:text-lotus-300'
          }`}>
            {q.difficulty}
          </span>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-snug">
          {q.question}
        </h2>

        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === q.correctAnswer;
            let style = 'border-ink-200 dark:border-ink-700 bg-ink-50/50 dark:bg-ink-800/50 hover:border-saffron-300 dark:hover:border-saffron-700';
            if (showResult) {
              if (isCorrect) style = 'border-peacock-400 dark:border-peacock-500 bg-peacock-50 dark:bg-peacock-950/30';
              else if (isSelected) style = 'border-lotus-400 dark:border-lotus-500 bg-lotus-50 dark:bg-lotus-950/30';
              else style = 'border-ink-200 dark:border-ink-700 opacity-60';
            } else if (isSelected) {
              style = 'border-saffron-400 dark:border-saffron-500 bg-saffron-50 dark:bg-saffron-950/30';
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${style}`}
              >
                <span className="text-sm text-ink-800 dark:text-ink-100">{opt}</span>
                {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-peacock-500 flex-shrink-0" />}
                {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-lotus-500 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="rounded-xl bg-saffron-50 dark:bg-saffron-950/20 border border-saffron-100 dark:border-saffron-900/40 p-4 mb-4 animate-fade-in">
            <p className="text-sm text-ink-700 dark:text-ink-200">
              <span className="font-semibold">{selected === q.correctAnswer ? 'Correct! ' : 'Not quite. '}</span>
              {q.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-end">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium disabled:opacity-50 hover:shadow-glow-soft transition-all"
            >
              Submit answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium hover:shadow-glow-soft transition-all flex items-center gap-2"
            >
              {current + 1 < questions.length ? 'Next question' : 'See results'} <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizListPage() {
  const progress = useProgress();
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-peacock-100 dark:bg-peacock-950/40 mb-3">
          <BookOpen className="h-3.5 w-3.5 text-peacock-500" />
          <span className="text-xs font-medium text-peacock-700 dark:text-peacock-300">Test your understanding</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-3">
          Chapter Quizzes
        </h1>
        <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          Each chapter has a short quiz. Answer questions, see explanations, and discover which verses to revisit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((ch) => {
          const score = progress.chapterQuizScore(ch.chapterNumber);
          const hasQuiz = progress.hasQuiz(ch.chapterNumber);
          return (
            <button
              key={ch.chapterNumber}
              onClick={() => navigate(`/quiz/${ch.chapterNumber}`)}
              className="group text-left p-5 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 hover:border-peacock-300 dark:hover:border-peacock-700 hover:shadow-premium transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-ink-500 dark:text-ink-400">Chapter {ch.chapterNumber}</span>
                {hasQuiz && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-peacock-50 dark:bg-peacock-950/40 text-peacock-700 dark:text-peacock-300 font-medium">
                    {score}%
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 mb-1">{ch.englishTitle}</h3>
              <p className="text-xs text-ink-500 dark:text-ink-400 line-clamp-2 mb-3">{ch.summary}</p>
              <div className="flex items-center gap-1 text-xs font-medium text-peacock-600 dark:text-peacock-400">
                {hasQuiz ? 'Retake quiz' : 'Start quiz'} <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
