"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RootLine } from "@/components/shared/RootLine";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid lg:grid-cols-2 gap-12 items-center pt-12 pb-20 md:pt-16 md:pb-28">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="flex -space-x-1">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-[var(--color-pine-300)]"
                />
              ))}
            </span>

            <span className="caption flex items-center gap-1">
              <Star
                size={13}
                className="fill-[var(--color-terracotta-500)] text-[var(--color-terracotta-500)]"
              />
              4.7/5 from 38,000+ assessments
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="h-display text-5xl md:text-6xl"
          >
            Your hair fall has a{" "}
            <em className="italic text-[var(--color-pine-700)]">
              root cause.
            </em>
            <br />
            We find it before we treat it.
          </motion.h1>

          <motion.p variants={fadeUp} className="body-lead mt-6 max-w-lg">
            Hormones, nutrition, stress, and scalp health — most hair-care
            brands guess. ThriveRoots starts with a clinical-grade assessment,
            then builds a therapy plan around what&apos;s actually causing your
            shedding.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link href="/quiz">
              <Button size="lg" className="group cursor-pointer">
                Start free hair assessment
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>

            <a href="#process">
              <Button
                variant="secondary"
                size="lg"
                className="cursor-pointer"
              >
                See how it works
              </Button>
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="caption mt-5">
            9-minute assessment · No payment required · Reviewed by
            dermatologists
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[var(--radius-xl)] bg-[var(--color-pine-50)] border border-[var(--color-pine-100)] overflow-hidden">
            <RootLine className="absolute inset-0 w-full h-full p-10" />

            <div className="absolute bottom-6 left-6 right-6 card p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--color-pine-900)] flex items-center justify-center text-[var(--color-paper)] font-display font-semibold">
                82
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                  Hair Score: Improving
                </p>

                <p className="caption">+14 points since month 1</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}