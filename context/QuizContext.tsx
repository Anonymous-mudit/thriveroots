"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { QuizConfig, QuizQuestion, QuizAnswers, AnswerValue } from "@/types/quiz";
import { validateAnswer } from "@/lib/quiz-validation";

interface FlatQuestion extends QuizQuestion {
  sectionId: string;
  sectionIndex: number;
}

interface QuizContextValue {
  config: QuizConfig;
  answers: QuizAnswers;
  setAnswer: (questionId: string, value: AnswerValue) => void;
  currentQuestion: FlatQuestion;
  currentIndex: number;
  totalVisible: number;
  progressPercent: number;
  currentSectionIndex: number;
  error: string | null;
  goNext: () => void;
  goBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  isSectionComplete: (sectionIndex: number) => boolean;
  completedSections: boolean[];
}

const QuizContext = createContext<QuizContextValue | null>(null);

/** Determine whether a question should be visible given current answers. */
function isQuestionVisible(question: QuizQuestion, answers: QuizAnswers): boolean {
  if (!question.showIf) return true;
  const dependencyValue = answers[question.showIf.questionId];
  if (!dependencyValue) return false;
  const values = Array.isArray(dependencyValue) ? dependencyValue : [dependencyValue];
  return values.some((v) => question.showIf!.equalsAnyOf.includes(v));
}

export function QuizProvider({ config, children }: { config: QuizConfig; children: ReactNode }) {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Flatten all questions across sections, tagged with their section context.
  // This is what allows the engine to scale to hundreds of questions:
  // navigation only ever deals with a flat, filtered array.
  const allQuestions: FlatQuestion[] = useMemo(
    () =>
      config.sections.flatMap((section, sectionIndex) =>
        section.questions.map((q) => ({ ...q, sectionId: section.id, sectionIndex }))
      ),
    [config]
  );

  const visibleQuestions = useMemo(
    () => allQuestions.filter((q) => isQuestionVisible(q, answers)),
    [allQuestions, answers]
  );

  const currentQuestion = visibleQuestions[currentIndex] ?? visibleQuestions[visibleQuestions.length - 1];

  const setAnswer = (questionId: string, value: AnswerValue) => {
    setAnswers((prev) => {
      const updatedAnswers = {
        ...prev,
        [questionId]: value,
      };
  
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "quizAnswers",
          JSON.stringify(updatedAnswers)
        );
      }
  
      return updatedAnswers;
    });
  
    setError(null);
  };

  const goNext = () => {
    const err = validateAnswer(currentQuestion, answers[currentQuestion.id]);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setCurrentIndex((i) => Math.min(i + 1, visibleQuestions.length - 1));
  };

  const goBack = () => {
    setError(null);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  const isSectionComplete = (sectionIndex: number) => {
    const questionsInSection = visibleQuestions.filter((q) => q.sectionIndex === sectionIndex);
    const lastQuestionGlobalIndex = visibleQuestions.findIndex(
      (q) => q.id === questionsInSection[questionsInSection.length - 1]?.id
    );
    return currentIndex > lastQuestionGlobalIndex;
  };

  const completedSections = config.sections.map((_, i) => isSectionComplete(i));

  return (
    <QuizContext.Provider
      value={{
        config,
        answers,
        setAnswer,
        currentQuestion,
        currentIndex,
        totalVisible: visibleQuestions.length,
        progressPercent: Math.round(((currentIndex + 1) / visibleQuestions.length) * 100),
        currentSectionIndex: currentQuestion?.sectionIndex ?? 0,
        error,
        goNext,
        goBack,
        isFirst: currentIndex === 0,
        isLast: currentIndex === visibleQuestions.length - 1,
        isSectionComplete,
        completedSections,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within a QuizProvider");
  return ctx;
}
