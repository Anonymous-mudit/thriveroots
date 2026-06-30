"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui";

interface Props {
  score: number;
  label: string;
  delta: number;
}

const CIRCUMFERENCE = 2 * Math.PI * 70;

export function HairScoreCard({ score, label, delta }: Props) {
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;
  const tier = score >= 75 ? "Good" : score >= 50 ? "Moderate" : "Needs attention";
  const tierColor = score >= 75 ? "var(--color-success)" : score >= 50 ? "var(--color-warning)" : "var(--color-danger)";

  return (
    <Card className="p-8 flex flex-col sm:flex-row items-center gap-8">
      <div className="relative h-44 w-44 shrink-0">
        <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
          <circle cx="80" cy="80" r="70" fill="none" stroke="var(--color-ink-100)" strokeWidth="10" />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="var(--color-pine-500)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="h-display text-4xl text-[var(--color-ink-900)]">{score}</span>
          <span className="caption">out of 100</span>
        </div>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <span className="badge badge-outline mb-3" style={{ color: tierColor, borderColor: tierColor }}>
          {tier}
        </span>
        <h2 className="h-section text-2xl mb-2">Your Hair Score</h2>
        <p className="body-base">{label}</p>
        {delta !== 0 && (
          <p className="flex items-center justify-center sm:justify-start gap-1.5 mt-3 text-sm font-medium text-[var(--color-pine-700)]">
            <TrendingUp size={15} /> +{delta} points since your last check-in
          </p>
        )}
      </div>
    </Card>
  );
}
