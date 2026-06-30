"use client";

import { motion } from "framer-motion";
import { Dna, Stethoscope, LineChart, Leaf, LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/Container";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { BENEFITS } from "@/data/landing";

const ICONS: Record<string, LucideIcon> = { Dna, Stethoscope, LineChart, Leaf };

export function Benefits() {
  return (
    <section className="section-sm bg-[var(--color-pine-50)]">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Why ThriveRoots"
          title="Built like a clinic, not a cosmetics shelf"
          className="mx-0"
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((benefit) => {
            const Icon = ICONS[benefit.icon];
            return (
              <motion.div key={benefit.title} variants={fadeUp} className="card-interactive card bg-[var(--color-surface)] p-6">
                <div className="h-11 w-11 rounded-[var(--radius-md)] bg-[var(--color-pine-900)] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[var(--color-paper)]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-base text-[var(--color-ink-900)] mb-2">{benefit.title}</h3>
                <p className="body-base text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
