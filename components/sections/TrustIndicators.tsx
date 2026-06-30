"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { TRUST_STATS } from "@/data/landing";

export function TrustIndicators() {
  return (
    <section className="border-y border-[var(--color-ink-100)] bg-[var(--color-surface)]">
      <Container>
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10"
        >
          {TRUST_STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center md:text-left">
              <p className="h-display text-3xl md:text-4xl text-[var(--color-pine-900)]">{stat.value}</p>
              <p className="caption mt-1.5 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
