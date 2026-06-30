"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/Container";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { PROCESS_STEPS } from "@/data/landing";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <Container>
        <SectionHeading
          eyebrow="The process"
          title="Four steps from confused to in-control"
          description="No guesswork, no 90-day bottle roulette. Every step exists to narrow down what's actually causing your hair fall."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} className="relative">
              <div className="card p-6 h-full flex flex-col">
                <span className="font-display text-2xl text-[var(--color-pine-300)] mb-4">{step.number}</span>
                <h3 className="font-semibold text-lg text-[var(--color-ink-900)] mb-2">{step.title}</h3>
                <p className="body-base text-sm">{step.description}</p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--color-ink-100)]" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
