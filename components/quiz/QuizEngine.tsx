"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { QuizStepper } from "@/components/quiz/QuizStepper";
import { QuestionRenderer } from "@/components/quiz/QuestionRenderer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function QuizEngine() {
  const router = useRouter();
  const { currentQuestion, answers, setAnswer, error, goNext, goBack, isFirst, isLast, currentIndex, totalVisible } =
    useQuiz();

  const handleNext = () => {
    if (isLast) {
      router.push("/quiz/loading");
      return;
    }
    goNext();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-paper)]">
      <header className="border-b border-[var(--color-ink-100)] bg-[var(--color-surface)]/80 backdrop-blur-sm sticky top-0 z-10">
        <Container className="py-5">
          <QuizStepper />
        </Container>
      </header>

      <main className="flex-1 flex items-center">
        <Container narrow className="py-12">
          <p className="caption mb-4">
            Question {currentIndex + 1} of {totalVisible}
          </p>
          <QuestionRenderer
            question={currentQuestion}
            value={answers[currentQuestion.id]}
            onChange={(value) => setAnswer(currentQuestion.id, value)}
            error={error}
          />
        </Container>
      </main>

      <motion.footer
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="border-t border-[var(--color-ink-100)] bg-[var(--color-surface)] sticky bottom-0"
      >
        <Container className="py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={goBack} disabled={isFirst}>
            <ArrowLeft size={16} /> Back
          </Button>
          <Button variant="primary" onClick={handleNext}>
            {isLast ? "Get my report" : "Continue"}
            <ArrowRight size={16} />
          </Button>
        </Container>
      </motion.footer>
    </div>
  );
}
