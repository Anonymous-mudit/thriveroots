"use client";

import { useEffect, useState } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui";
import { HairScoreCard } from "@/components/dashboard/HairScoreCard";
import { RiskIndicators } from "@/components/dashboard/RiskIndicators";
import { RootCauses } from "@/components/dashboard/RootCauses";
import { HairCoachCard } from "@/components/dashboard/HairCoachCard";
import { TreatmentPlan } from "@/components/dashboard/TreatmentPlan";
import { Timeline } from "@/components/sections/Timeline";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { REPORT_DATA } from "@/data/report";

export default function ReportPage() {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const storedAnswers = localStorage.getItem("quizAnswers");

    if (storedAnswers) {
      const answers = JSON.parse(storedAnswers);

      // Reads the name entered in the quiz
      setUserName(answers.full_name || "Guest");
    }
  }, []);

  const {
    hairScore,
    hairScoreLabel,
    scoreDelta,
    riskIndicators,
    rootCauses,
    coach,
    summary,
  } = REPORT_DATA;

  return (
    <>
      <Navbar />

      <main>
        <section className="section-sm">
          <Container>
            <p className="eyebrow mb-2">
              Your assessment report
            </p>

            <h1 className="h-display text-3xl md:text-4xl mb-8">
              {userName}, here&apos;s what&apos;s driving your hair fall
            </h1>

            <Alert
              variant="info"
              title="A quick read on your report"
              className="mb-8"
            >
              {summary}
            </Alert>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <HairScoreCard
                  score={hairScore}
                  label={hairScoreLabel}
                  delta={scoreDelta}
                />

                <RootCauses causes={rootCauses} />
              </div>

              <div className="flex flex-col gap-6">
                <HairCoachCard coach={coach} />

                <RiskIndicators indicators={riskIndicators} />
              </div>
            </div>

            <TreatmentPlan />
          </Container>
        </section>

        <Timeline />

        <SuccessStories />

        <Faq />

        <CtaBand />
      </main>

      <Footer />
    </>
  );
}