"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { PRODUCTS } from "@/data/landing";

export function TreatmentPlan() {
  const planProducts = PRODUCTS.slice(0, 3);
  const total = planProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <Card className="p-7">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-lg text-[var(--color-ink-900)]">Your Recommended Plan</h3>
        <span className="badge badge-pine">Month 1</span>
      </div>
      <p className="caption mb-6">Built specifically around your thyroid and stress findings.</p>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="flex flex-col divide-y divide-[var(--color-ink-100)]"
      >
        {planProducts.map((product) => (
          <motion.div key={product.id} variants={fadeUp} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
            <div className="h-12 w-12 rounded-[var(--radius-md)] bg-[var(--color-pine-100)] flex items-center justify-center shrink-0">
              <ShoppingBag size={18} className="text-[var(--color-pine-500)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-[var(--color-ink-900)] truncate">{product.name}</p>
              <p className="caption">{product.category}</p>
            </div>
            <span className="text-sm font-semibold text-[var(--color-ink-900)]">₹{product.price}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="hairline my-5" />
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-semibold text-[var(--color-ink-900)]">Plan total</span>
        <span className="font-semibold text-[var(--color-ink-900)]">₹{total}/month</span>
      </div>
      <Button variant="primary" className="w-full">
        <Check size={16} /> Start my plan
      </Button>
    </Card>
  );
}
