import { Sprout } from "lucide-react";
import { Container } from "@/components/layout/Container";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: ["Hair assessment", "Therapy plans", "Hair coach", "Track progress"],
  },
  {
    title: "Company",
    links: ["About us", "Our doctors", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["Help center", "Shipping & returns", "Contact us", "Track order"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of service", "Clinical disclosures"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-ink-100)] bg-[var(--color-surface)]">
      <Container className="py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-pine-900)] mb-4">
              <Sprout size={20} className="text-[var(--color-pine-500)]" aria-hidden="true" />
              ThriveRoots
            </div>
            <p className="body-base text-sm max-w-xs">
              Root-cause hair therapy, personalized from a clinical assessment and reviewed by licensed dermatologists.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-[var(--color-ink-900)] mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[var(--color-ink-500)] hover:text-[var(--color-pine-700)] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hairline my-10" />
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
          <p className="caption">© {new Date().getFullYear()} ThriveRoots. All rights reserved.</p>
          <p className="caption max-w-md text-center sm:text-right">
            Results vary by individual. Not a substitute for professional medical advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
