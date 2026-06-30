import { ReportData } from "@/types/report";

export const REPORT_DATA: ReportData = {
  userName: "Aditi",
  hairScore: 58,
  hairScoreLabel: "Moderate hair fall, early intervention window",
  scoreDelta: 0,
  summary:
    "Your answers point to two likely drivers: elevated stress over the past year and a thyroid marker that hasn't been re-checked since diagnosis. Neither is rare, and both respond well to a combined topical + internal plan within 3–4 months.",
  riskIndicators: [
    { id: "hormonal", label: "Hormonal", level: "high", description: "Thyroid history flagged in your assessment" },
    { id: "nutritional", label: "Nutritional", level: "moderate", description: "Diet pattern suggests possible iron gaps" },
    { id: "stress", label: "Stress-linked", level: "high", description: "Self-reported high stress, common shedding trigger" },
    { id: "genetic", label: "Genetic", level: "low", description: "No strong family history reported" },
    { id: "scalp", label: "Scalp condition", level: "moderate", description: "Oily scalp can worsen follicle clogging" },
  ],
  rootCauses: [
    {
      id: "thyroid",
      title: "Unmonitored thyroid fluctuation",
      severity: "primary",
      icon: "Activity",
      description: "Thyroid hormones directly regulate the hair growth cycle — an unstable reading is consistent with diffuse shedding.",
    },
    {
      id: "stress",
      title: "Chronic stress response",
      severity: "primary",
      icon: "Zap",
      description: "Prolonged high cortisol can push follicles into the shedding phase prematurely (telogen effluvium).",
    },
    {
      id: "nutrition",
      title: "Possible iron / biotin gap",
      severity: "contributing",
      icon: "Apple",
      description: "Your diet pattern and sleep responses suggest a secondary nutritional contributor worth testing for.",
    },
  ],
  coach: {
    name: "Dr. Aanya Kapoor",
    title: "Your assigned Hair Coach",
    credentials: "MD Dermatology · 14 yrs clinical hair loss practice",
  },
};
