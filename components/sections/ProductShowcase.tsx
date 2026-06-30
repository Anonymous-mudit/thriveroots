"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Container, SectionHeading } from "@/components/layout/Container";
import { Badge } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { PRODUCTS } from "@/data/landing";

export function ProductShowcase() {
  return (
    <section id="products" className="section bg-[var(--color-pine-50)]">
      <Container>
        <SectionHeading
          eyebrow="What's in a plan"
          title="Therapy plans built from real actives"
          description="No single product fixes hair fall. Plans combine topical, nutritional, and daily-care formulas based on your assessment."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={fadeUp} className="card card-interactive bg-[var(--color-surface)] overflow-hidden flex flex-col">
              <div className="aspect-square bg-[var(--color-pine-100)] relative flex items-center justify-center">
                {product.tag && (
                  <Badge variant={product.tag === "New" ? "terracotta" : "pine"} className="absolute top-3 left-3">
                    {product.tag}
                  </Badge>
                )}
                <ShoppingBag size={32} className="text-[var(--color-pine-500)]" aria-hidden="true" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="caption mb-1">{product.category}</p>
                <h3 className="font-semibold text-[var(--color-ink-900)] mb-2">{product.name}</h3>
                <p className="body-base text-sm flex-1">{product.description}</p>
                <div className="flex items-center gap-2 mt-4 mb-4">
                  <span className="font-semibold text-[var(--color-ink-900)]">₹{product.price}</span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-[var(--color-ink-300)] line-through">₹{product.compareAtPrice}</span>
                  )}
                </div>
                <Button variant="secondary" size="sm" className="w-full">Add to plan</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
