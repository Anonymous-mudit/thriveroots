"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Apple, LucideIcon } from "lucide-react";
import { Card, Badge } from "@/components/ui";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { RootCause } from "@/types/report";

const ICONS: Record<string, LucideIcon> = { Activity, Zap, Apple };

export function RootCauses({ causes }: { causes: RootCause[] }) {
  return (
    <div>
      <h3 className="font-semibold text-lg text-[var(--color-ink-900)] mb-1">Root Causes Identified</h3>
      <p className="caption mb-6">Ranked by how strongly your answers point to each one.</p>
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid sm:grid-cols-3 gap-5"
      >
        {causes.map((cause) => {
          const Icon = ICONS[cause.icon] ?? Activity;
          return (
            <motion.div key={cause.id} variants={fadeUp}>
              <Card variant="interactive" className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="h-10 w-10 rounded-[var(--radius-md)] bg-[var(--color-pine-900)] flex items-center justify-center">
                    <Icon size={18} className="text-[var(--color-paper)]" />
                  </span>
                  <Badge variant={cause.severity === "primary" ? "terracotta" : "neutral"}>
                    {cause.severity === "primary" ? "Primary" : "Contributing"}
                  </Badge>
                </div>
                <h4 className="font-semibold text-[var(--color-ink-900)] mb-2">{cause.title}</h4>
                <p className="body-base text-sm">{cause.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
