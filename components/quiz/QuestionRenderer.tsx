"use client";

import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion, AnswerValue } from "@/types/quiz";
import { TextQuestion, PhoneQuestion } from "@/components/quiz/question-types/TextQuestion";
import { NumberQuestion } from "@/components/quiz/question-types/NumberQuestion";
import { RadioQuestion } from "@/components/quiz/question-types/RadioQuestion";
import { CheckboxQuestion } from "@/components/quiz/question-types/CheckboxQuestion";
import { ImageSelectQuestion } from "@/components/quiz/question-types/ImageSelectQuestion";
import { ImageUploadQuestion } from "@/components/quiz/question-types/ImageUploadQuestion";

interface Props {
  question: QuizQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
  error: string | null;
}

/**
 * Renders the right input for any question in the bank purely based on
 * `question.type`. This is the only place that needs to know about every
 * question-type component — everything upstream (the quiz page, the
 * context, the JSON data) is agnostic to it. Adding a new question type
 * means adding one case here and one component file.
 */
export function QuestionRenderer({ question, value, onChange, error }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="h-section text-2xl md:text-3xl mb-2">{question.title}</h2>
        {question.subtitle && <p className="body-base mb-6">{question.subtitle}</p>}
        {!question.subtitle && <div className="mb-6" />}

        {question.type === "text" && (
          <TextQuestion question={question} value={(value as string) ?? ""} onChange={onChange} error={error} />
        )}
        {question.type === "phone" && (
          <PhoneQuestion question={question} value={(value as string) ?? ""} onChange={onChange} error={error} />
        )}
        {question.type === "number" && (
          <NumberQuestion question={question} value={(value as string) ?? ""} onChange={onChange} error={error} />
        )}
        {question.type === "radio" && (
          <RadioQuestion question={question} value={(value as string) ?? ""} onChange={onChange} />
        )}
        {question.type === "checkbox" && (
          <CheckboxQuestion question={question} value={(value as string[]) ?? []} onChange={onChange} />
        )}
        {question.type === "image-select" && (
          <ImageSelectQuestion question={question} value={(value as string) ?? ""} onChange={onChange} />
        )}
        {question.type === "image-upload" && (
          <ImageUploadQuestion value={(value as string) ?? ""} onChange={onChange} />
        )}

        {error && !["text", "phone", "number"].includes(question.type) && (
          <p className="input-error-text mt-3" role="alert">{error}</p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
