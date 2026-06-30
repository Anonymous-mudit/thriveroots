import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, revealViewport } from "@/lib/motion";

export function Container({ className, narrow, ...props }: HTMLAttributes<HTMLDivElement> & { narrow?: boolean }) {
  return <div className={cn(narrow ? "container-narrow" : "container-base", className)} {...props} />;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Standard section header used across the landing page: eyebrow label +
 * display heading + optional supporting copy, with a consistent reveal
 * animation on scroll.
 */
export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="h-section text-3xl md:text-4xl">{title}</h2>
      {description && <p className="body-lead mt-4">{description}</p>}
    </motion.div>
  );
}
