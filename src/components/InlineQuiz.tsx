import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award, ListChecks, Lightbulb } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { navigate } from '../hooks/useRouter';
import type { QuizQuestion } from '../data/types';

interface InlineQuizProps {
  chapterNumber: number;
  questions: QuizQuestion[];
}

export function InlineQuiz({ chapterNumber, questions }: InlineQuizProps) {
  const progress = useProgress();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const q = questions[current];
  const score = answers.reduce((s, ans, idx) => (ans === questions[idx].correctAnswer ? s + 1 : s), 0);
  const scorePercent = Math.round((score / questions.length) * 100);
  const hasQuiz = progress.hasQuiz(chapterNumber);
  const prevScore = progress.chapterQuizScore(chapterNumber);

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
      const finalAnswers = [...answers];
      const sc = finalAnswers.reduce((s, ans, idx) => (ans === questions[idx].correctAnswer ? s + 1 : s), 0);
      const weakTopics: string[] = [];
      for (let i = 0; i < finalAnswers.length; i++) {
        if (finalAnswers[i] !== questions[i].correctAnswer) {
          weakTopics.push(...questions[i].linkedVerses.map((v) => `${chapterNumber}.${v}`));
        }
      }
      progress.recordQuiz({
        chapterNumber,
        score: sc,
        total: questions.length,
        date: new Date().toISOString(),
        weakTopics,
      });
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
    setStarted(true);
  };

  // Start screen
  if (!started && !finished) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-peacock-50 to-saffron-50/40 dark:from-ink-900 dark:to-ink-800 border border-peacock-200 dark:border-peacock-900/40 p-6 sm:p-8 text-center">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-peacock-400 to-peacock-600 flex items-center justify-center mx-auto mb-4 shadow-glow-soft">
          <ListChecks className="h-7 w-7 text-white" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-ink-50 mb-2">
          Test your understanding
        </h3>
        <p className="text-ink-600 dark:text-ink-300 max-w-xl mx-auto mb-5">
          Take a quick {questions.length}-question quiz on Chapter {chapterNumber}. See correct answers, explanations, and which verses to revisit.
        </p>
        {hasQuiz && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-peacock-100 dark:bg-peacock-950/40 text-peacock-700 dark:text-peacock-300 text-xs font-medium mb-4">
            <Award className="h-3.5 w-3.5" /> Last score: {prevScore}%
          </div>
        )}
        <div>
          <button
            onClick={() => setStarted(true)}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-peacock-500 to-peacock-600 text-white font-semibold shadow-glow-soft hover:scale-105 transition-transform"
          >
            {hasQuiz ? 'Retake quiz' : 'Start quiz'}
          </button>
        </div>
      </div>
    );
  }

  // Finished screen
  if (finished) {
    const feedback =
      scorePercent === 100 ? 'Perfect! You have mastered this chapter.' :
      scorePercent >= 70 ? 'Great work! You understand this chapter well.' :
      scorePercent >= 50 ? 'Good effort! Review a few verses and try again.' :
      'Keep going! Revisit the chapter and you will improve.';

    const wrongQuestions = questions.filter((_, i) => answers[i] !== questions[i].correctAnswer);
    const versesToReview = Array.from(new Set(wrongQuestions.flatMap((q) => q.linkedVerses))).slice(0, 5);

    return (
      <div className="rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-premium p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className={`h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-3 ${
            scorePercent >= 70 ? 'bg-gradient-to-br from-peacock-400 to-peacock-600' :
            scorePercent >= 50 ? 'bg-gradient-to-br from-marigold-400 to-saffron-500' :
            'bg-gradient-to-br from-lotus-400 to-lotus-600'
          } shadow-glow-soft`}>
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-ink-50 mb-1">
            Quiz Complete!
          </h3>
          <div className="font-display text-4xl font-bold text-gradient-saffron mb-1">
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

        {wrongQuestions.length > 0 && versesToReview.length > 0 && (
          <div className="rounded-xl bg-saffron-50 dark:bg-saffron-950/20 border border-saffron-100 dark:border-saffron-900/40 p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-saffron-600 dark:text-saffron-400" />
              <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">Verses to revisit</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {versesToReview.map((v) => (
                <button
                  key={v}
                  onClick={() => {
                    const el = document.getElementById(`verse-${chapterNumber}-${v}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-ink-800 border border-saffron-200 dark:border-saffron-900/40 text-saffron-700 dark:text-saffron-300 hover:bg-saffron-50 dark:hover:bg-saffron-950/40 transition-colors"
                >
                  Verse {chapterNumber}.{v}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={reset}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 font-medium hover:bg-ink-200 dark:hover:bg-ink-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" /> Retry quiz
          </button>
          <button
            onClick={() => navigate(`/quiz/${chapterNumber}`)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-marigold-400 to-saffron-600 text-white font-medium hover:shadow-glow-soft transition-all"
          >
            Full quiz page <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Review answers */}
        <div className="space-y-3">
          <h4 className="font-display text-lg font-semibold text-ink-800 dark:text-ink-100">Review your answers</h4>
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

  // Question screen
  return (
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

      {/* Progress dots */}
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

      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink-900 dark:text-ink-50 mb-6 leading-snug">
        {q.question}
      </h3>

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
  );
}
