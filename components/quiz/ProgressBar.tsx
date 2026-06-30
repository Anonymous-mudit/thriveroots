"use client";

import { motion } from "framer-motion";

interface Props {
  percent: number;
  label?: string;
}

export function ProgressBar({ percent, label }: Props) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="caption font-medium">{label}</span>
          <span className="caption font-semibold text-[var(--color-pine-700)]">{percent}%</span>
        </div>
      )}
      <div
        className="h-1.5 w-full rounded-full bg-[var(--color-ink-100)] overflow-hidden"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--color-pine-500), var(--color-pine-300))" }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
