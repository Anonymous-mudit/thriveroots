"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { RiskIndicator } from "@/types/report";

const LEVEL_CONFIG = {
  low: { width: "33%", color: "var(--color-success)", label: "Low" },
  moderate: { width: "66%", color: "var(--color-warning)", label: "Moderate" },
  high: { width: "100%", color: "var(--color-danger)", label: "High" },
};

export function RiskIndicators({ indicators }: { indicators: RiskIndicator[] }) {
  return (
    <Card className="p-7">
      <h3 className="font-semibold text-lg text-[var(--color-ink-900)] mb-1">Risk Indicators</h3>
      <p className="caption mb-6">Based on your assessment answers, not a lab diagnosis.</p>
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="flex flex-col gap-5"
      >
        {indicators.map((risk) => {
          const cfg = LEVEL_CONFIG[risk.level];
          return (
            <motion.div key={risk.id} variants={fadeUp}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-[var(--color-ink-900)]">{risk.label}</span>
                <span className="text-xs font-semibold" style={{ color: cfg.color }}>{cfg.label}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[var(--color-ink-100)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: cfg.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: cfg.width }}
                  viewport={revealViewport}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className="caption mt-1.5">{risk.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Card>
  );
}
