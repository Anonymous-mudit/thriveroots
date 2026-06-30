import type { Metadata } from "next";
import "./globals.css";

/**
 * NOTE: This sandboxed environment cannot reach Google Fonts at build
 * time. We fall back to high-quality local font stacks that preserve the
 * intended pairing — a warm editorial serif for display type, a clean
 * grotesque for body/UI. Swap in next/font/google (Fraunces + Inter) once
 * deployed somewhere with outbound access to fonts.googleapis.com — the
 * CSS variable names below already match what globals.css expects.
 */

export const metadata: Metadata = {
  title: "ThriveRoots — Root-Cause Hair Therapy, Personalized to You",
  description:
    "A doctor-formulated, root-cause approach to hair fall. Take the free hair assessment and get a personalized therapy plan built from your hormones, nutrition, stress, and scalp health.",
  keywords: [
    "hair fall treatment",
    "hair therapy",
    "personalized hair care",
    "root cause hair loss",
    "ThriveRoots",
  ],
  openGraph: {
    title: "ThriveRoots — Root-Cause Hair Therapy",
    description:
      "Personalized hair therapy plans built from a free, doctor-designed assessment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-vars">
      <body>{children}</body>
    </html>
  );
}
