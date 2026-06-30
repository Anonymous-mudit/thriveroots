"use client";

import { motion } from "framer-motion";
import { Check, User, Sparkles, HeartPulse, ScanFace, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuiz } from "@/context/QuizContext";

const SECTION_ICONS: Record<string, LucideIcon> = { User, Sparkles, HeartPulse, ScanFace };

export function QuizStepper() {
  const { config, currentSectionIndex, completedSections, progressPercent } = useQuiz();

  return (
    <>
      {/* Desktop stepper */}
      <ol className="hidden md:flex items-center w-full" aria-label="Assessment progress">
        {config.sections.map((section, i) => {
          const Icon = SECTION_ICONS[section.icon] ?? User;
          const isComplete = completedSections[i];
          const isActive = i === currentSectionIndex;
          const isLast = i === config.sections.length - 1;

          return (
            <li key={section.id} className={cn("flex items-center", !isLast && "flex-1")}>
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{
                    scale: isActive ? 1.08 : 1,
                    backgroundColor: isComplete || isActive ? "var(--color-pine-900)" : "var(--color-surface)",
                    borderColor: isComplete || isActive ? "var(--color-pine-900)" : "var(--color-ink-100)",
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-11 w-11 rounded-full border-2 flex items-center justify-center relative"
                >
                  {isComplete ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.25, ease: "backOut" }}>
                      <Check size={18} className="text-[var(--color-paper)]" strokeWidth={3} />
                    </motion.span>
                  ) : (
                    <Icon size={18} className={isActive ? "text-[var(--color-paper)]" : "text-[var(--color-ink-300)]"} />
                  )}
                  {isActive && (
                    <motion.span
                      className="absolute -inset-1.5 rounded-full border border-[var(--color-pine-300)]"
                      animate={{ opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
                <span className={cn("text-xs font-medium text-center max-w-[90px]", isActive ? "text-[var(--color-ink-900)]" : "text-[var(--color-ink-500)]")}>
                  {section.title}
                </span>
              </div>

              {!isLast && (
                <div className="flex-1 h-0.5 mx-3 -mt-6 rounded-full bg-[var(--color-ink-100)] overflow-hidden">
                  <motion.div
                    className="h-full bg-[var(--color-pine-500)]"
                    initial={false}
                    animate={{ width: isComplete ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile: condensed label + progress bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-[var(--color-ink-900)]">
            {config.sections[currentSectionIndex]?.title}
          </span>
          <span className="caption">
            Section {currentSectionIndex + 1} of {config.sections.length}
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[var(--color-ink-100)] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, var(--color-pine-500), var(--color-pine-300))" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </>
  );
}
