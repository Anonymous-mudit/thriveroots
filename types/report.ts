export interface RiskIndicator {
  id: string;
  label: string;
  level: "low" | "moderate" | "high";
  description: string;
}

export interface RootCause {
  id: string;
  title: string;
  severity: "primary" | "contributing";
  description: string;
  icon: string;
}

export interface CoachInfo {
  name: string;
  title: string;
  credentials: string;
}

export interface ReportData {
  userName: string;
  hairScore: number;
  hairScoreLabel: string;
  scoreDelta: number;
  riskIndicators: RiskIndicator[];
  rootCauses: RootCause[];
  coach: CoachInfo;
  summary: string;
}
