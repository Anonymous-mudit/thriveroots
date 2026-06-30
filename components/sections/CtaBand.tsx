"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, revealViewport } from "@/lib/motion";

export function CtaBand() {
  return (
    <section className="section-sm">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="rounded-[var(--radius-xl)] bg-[var(--color-pine-900)] px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden"
        >
          <p className="eyebrow !text-[var(--color-pine-300)] mb-4">
            Start today
          </p>

          <h2 className="h-display text-3xl md:text-4xl text-[var(--color-paper)] max-w-xl mx-auto">
            Your hair score starts with one nine-minute assessment.
          </h2>

          <p className="body-lead !text-[var(--color-pine-100)] mt-4 max-w-md mx-auto">
            Free to take, reviewed by a real dermatologist, no commitment
            required.
          </p>

          <Link href="/quiz" className="inline-block mt-8">
            <Button
              size="lg"
              className="!bg-[var(--color-paper)] !text-[var(--color-pine-900)] hover:!bg-[var(--color-pine-50)] group cursor-pointer"
            >
              Take the free assessment
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
