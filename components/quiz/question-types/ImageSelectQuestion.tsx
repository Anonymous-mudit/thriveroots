"use client";

import {
  TrendingDown,
  ArrowUpRight,
  CircleDashed,
  Wind,
  Droplets,
  Snowflake,
  AlertCircle,
  CheckCircle2,
  ImageIcon,
  LucideIcon,
} from "lucide-react";
import { QuizQuestion } from "@/types/quiz";
import { cn } from "@/lib/utils";

/** Registry mapping JSON `option.image` strings to lucide icons. Extend
 *  freely as new question options are added to the JSON bank — no other
 *  code needs to change. */
const ICON_REGISTRY: Record<string, LucideIcon> = {
  TrendingDown,
  ArrowUpRight,
  CircleDashed,
  Wind,
  Droplets,
  Snowflake,
  AlertCircle,
  CheckCircle2,
};

interface Props {
  question: QuizQuestion;
  value: string;
  onChange: (value: string) => void;
}

export function ImageSelectQuestion({ question, value, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label={question.title} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {question.options?.map((option) => {
        const selected = value === option.id;
        const Icon = (option.image && ICON_REGISTRY[option.image]) || ImageIcon;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.id)}
            className={cn(
              "flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border-1.5 px-4 py-6 transition-all duration-200",
              selected
                ? "border-[var(--color-pine-500)] bg-[var(--color-pine-50)] shadow-sm"
                : "border-[var(--color-ink-100)] bg-[var(--color-surface)] hover:border-[var(--color-pine-300)] hover:-translate-y-0.5"
            )}
            style={{ borderWidth: "1.5px" }}
          >
            <span
              className={cn(
                "h-12 w-12 rounded-full flex items-center justify-center transition-colors",
                selected ? "bg-[var(--color-pine-900)]" : "bg-[var(--color-pine-100)]"
              )}
            >
              <Icon size={20} className={selected ? "text-[var(--color-paper)]" : "text-[var(--color-pine-700)]"} />
            </span>
            <span className="text-sm font-medium text-center text-[var(--color-ink-900)]">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
