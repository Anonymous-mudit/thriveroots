"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sprout } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/data/landing";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-paper)]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-pine-900)]">
          <Sprout size={22} className="text-[var(--color-pine-500)]" aria-hidden="true" />
          ThriveRoots
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[var(--color-ink-700)] hover:text-[var(--color-pine-900)] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Link href="/quiz">
  <Button variant="primary" size="sm">
    Take the assessment
  </Button>
</Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[var(--color-ink-900)]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-[var(--color-ink-100)] bg-[var(--color-paper)]"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-[var(--color-ink-700)] border-b border-[var(--color-ink-100)] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" className="mt-4 w-full">Take the assessment</Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
