import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Experts } from "@/components/sections/Experts";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Timeline } from "@/components/sections/Timeline";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <HowItWorks />
        <Benefits />
        <Experts />
        <ProductShowcase />
        <SuccessStories />
        <Timeline />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
