"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { QuizQuestion } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface Props {
  question: QuizQuestion;
  value: string[];
  onChange: (value: string[]) => void;
}

export function CheckboxQuestion({ question, value = [], onChange }: Props) {
  const toggle = (optionId: string) => {
    if (value.includes(optionId)) {
      onChange(value.filter((v) => v !== optionId));
      return;
    }
    if (question.maxSelect && value.length >= question.maxSelect) return;
    onChange([...value, optionId]);
  };

  return (
    <div className="flex flex-col gap-3">
      {question.options?.map((option) => {
        const selected = value.includes(option.id);
        return (
          <button
            key={option.id}
            type="button"
            role="checkbox"
            aria-checked={selected}
            onClick={() => toggle(option.id)}
            className={cn(
              "w-full text-left flex items-center justify-between gap-4 rounded-[var(--radius-md)] border-1.5 px-5 py-4 transition-colors duration-200",
              selected
                ? "border-[var(--color-pine-500)] bg-[var(--color-pine-50)]"
                : "border-[var(--color-ink-100)] bg-[var(--color-surface)] hover:border-[var(--color-pine-300)]"
            )}
            style={{ borderWidth: "1.5px" }}
          >
            <span className="font-medium text-[var(--color-ink-900)]">{option.label}</span>
            <span
              className={cn(
                "h-5 w-5 shrink-0 rounded-[6px] border-1.5 flex items-center justify-center",
                selected ? "border-[var(--color-pine-500)] bg-[var(--color-pine-500)]" : "border-[var(--color-ink-300)]"
              )}
              style={{ borderWidth: "1.5px" }}
            >
              {selected && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.18 }}>
                  <Check size={12} className="text-[var(--color-paper)]" strokeWidth={3} />
                </motion.span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
