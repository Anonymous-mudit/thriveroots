"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/layout/Container";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { DOCTORS } from "@/data/landing";

export function Experts() {
  return (
    <section id="experts" className="section">
      <Container>
        <SectionHeading
          eyebrow="The team behind your plan"
          title="Real clinicians review every therapy plan"
          description="Algorithms narrow down the likely causes. A licensed doctor signs off on every plan before it reaches you."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {DOCTORS.map((doc) => (
            <motion.div key={doc.name} variants={fadeUp} className="card p-6 text-center">
              <div className="h-20 w-20 rounded-full bg-[var(--color-pine-100)] mx-auto mb-4 flex items-center justify-center font-display text-xl text-[var(--color-pine-900)]">
                {doc.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <h3 className="font-semibold text-[var(--color-ink-900)]">{doc.name}</h3>
              <p className="text-sm text-[var(--color-pine-700)] font-medium mt-0.5">{doc.title}</p>
              <p className="caption mt-2">{doc.credentials}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
