import { QuizProvider } from "@/context/QuizContext";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import quizData from "@/data/quiz-questions.json";
import { QuizConfig } from "@/types/quiz";

export default function QuizPage() {
  return (
    <QuizProvider config={quizData as QuizConfig}>
      <QuizEngine />
    </QuizProvider>
  );
}
