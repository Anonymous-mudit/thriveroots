"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container, SectionHeading } from "@/components/layout/Container";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { TESTIMONIALS } from "@/data/landing";

export function SuccessStories() {
  return (
    <section id="results" className="section">
      <Container>
        <SectionHeading
          eyebrow="Real users, real timelines"
          title="What changed, and by when"
          description="No before/after retouching — just self-reported timelines from people who stuck with their plan."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="card p-6 flex flex-col">
              <Quote size={20} className="text-[var(--color-pine-300)] mb-4" aria-hidden="true" />
              <p className="body-base text-[15px] flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-0.5 mt-5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-[var(--color-terracotta-500)] text-[var(--color-terracotta-500)]" : "text-[var(--color-ink-100)]"}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-[var(--color-ink-900)]">{t.name}, {t.age}</p>
                  <p className="caption">{t.location}</p>
                </div>
                <span className="badge badge-pine">Week {t.weeksIn}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
