"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";

const STEPS = [
  "Reading your assessment answers",
  "Cross-checking hormonal & nutritional markers",
  "Comparing against clinical hair-loss patterns",
  "Building your root-cause report",
];

const CIRCUMFERENCE = 2 * Math.PI * 54;

/**
 * Architecture note: this component is structured to support a real API
 * call. Replace the simulated `progress` interval below with a single
 * `await fetch("/api/assessment/analyze", { ... })` call, and drive
 * `progress` from upload/response events instead — the UI (circular
 * ring, status list, follicle animation) needs no changes either way.
 */
export default function LoadingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setTimeout(() => router.push("/report"), 500);
          return 100;
        }
        return p + 1.4;
      });
    }, 60);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [router]);

  const activeStepIndex = Math.min(Math.floor((progress / 100) * STEPS.length), STEPS.length - 1);
  const offset = CIRCUMFERENCE - (Math.min(progress, 100) / 100) * CIRCUMFERENCE;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-pine-50)]">
      <Container narrow className="text-center">
        <div className="relative mx-auto mb-10 h-36 w-36">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-pine-100)" strokeWidth="6" />
            <motion.circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="var(--color-pine-500)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </svg>
          {/* animated hair follicle motif, centered in the ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <motion.path
                d="M20 4 C 20 4, 14 14, 14 22 C 14 28, 17 32, 20 36 C 23 32, 26 28, 26 22 C 26 14, 20 4, 20 4 Z"
                stroke="var(--color-pine-700)"
                strokeWidth="2"
                fill="var(--color-pine-100)"
                animate={{ scaleY: [1, 1.06, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "20px 36px" }}
              />
            </svg>
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[var(--color-pine-900)] text-[var(--color-paper)] text-xs font-semibold px-2.5 py-1 rounded-full">
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>

        <h1 className="h-section text-2xl md:text-3xl mb-2">Building your hair report</h1>
        <p className="body-base mb-8">This takes about 10 seconds — worth the wait.</p>

        <div className="flex flex-col gap-3 max-w-sm mx-auto text-left">
          {STEPS.map((step, i) => {
            const isDone = i < activeStepIndex || progress >= 100;
            const isActive = i === activeStepIndex && progress < 100;
            return (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="h-5 w-5 shrink-0 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: isDone || isActive ? "var(--color-pine-500)" : "var(--color-ink-100)",
                    background: isDone ? "var(--color-pine-500)" : "transparent",
                  }}
                >
                  <AnimatePresence>
                    {isDone && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check size={11} className="text-[var(--color-paper)]" strokeWidth={3} />
                      </motion.span>
                    )}
                    {isActive && !isDone && (
                      <motion.span
                        className="h-2 w-2 rounded-full bg-[var(--color-pine-500)]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </AnimatePresence>
                </span>
                <span className={`text-sm ${isDone || isActive ? "text-[var(--color-ink-900)] font-medium" : "text-[var(--color-ink-300)]"}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
