"use client";

import { QuizQuestion } from "@/types/quiz";
import { Input } from "@/components/ui/Input";

interface Props {
  question: QuizQuestion;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

export function TextQuestion({ question, value, onChange, error }: Props) {
  return (
    <Input
      autoFocus
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={question.placeholder}
      error={error ?? undefined}
      maxLength={question.validation?.maxLength}
    />
  );
}

export function PhoneQuestion({ question, value, onChange, error }: Props) {
  return (
    <div className="flex gap-2">
      <span className="input-base w-20 flex items-center justify-center font-medium text-[var(--color-ink-500)] select-none">
        +91
      </span>
      <Input
        autoFocus
        type="tel"
        inputMode="numeric"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
        placeholder={question.placeholder}
        error={error ?? undefined}
        className="flex-1"
      />
    </div>
  );
}
