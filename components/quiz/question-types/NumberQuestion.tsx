"use client";

import { QuizQuestion } from "@/types/quiz";
import { Input } from "@/components/ui/Input";

interface Props {
  question: QuizQuestion;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

export function NumberQuestion({ question, value, onChange, error }: Props) {
  return (
    <div className="flex items-center gap-3 max-w-xs">
      <Input
        autoFocus
        type="number"
        inputMode="numeric"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        min={question.validation?.min}
        max={question.validation?.max}
        error={error ?? undefined}
      />
      {question.unit && <span className="caption whitespace-nowrap">{question.unit}</span>}
    </div>
  );
}
