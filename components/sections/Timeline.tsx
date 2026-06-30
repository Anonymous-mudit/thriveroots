"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/layout/Container";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { TIMELINE } from "@/data/landing";

export function Timeline() {
  return (
    <section className="section bg-[var(--color-pine-50)]">
      <Container>
        <SectionHeading
          eyebrow="What to expect"
          title="A realistic six-month timeline"
          description="Hair growth is a cycle, not a switch. Here's the typical progression our users report, month by month."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="relative max-w-2xl mx-auto"
        >
          {/* connector line — echo of the hero's signature root line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--color-pine-100)]" aria-hidden="true" />

          {TIMELINE.map((item) => (
            <motion.div key={item.month} variants={fadeUp} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-pine-500)] flex items-center justify-center font-display font-semibold text-sm text-[var(--color-pine-900)]">
                {item.month}
              </div>
              <div className="card flex-1 p-5">
                <h3 className="font-semibold text-[var(--color-ink-900)] mb-1.5">
                  Month {item.month} — {item.title}
                </h3>
                <p className="body-base text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
