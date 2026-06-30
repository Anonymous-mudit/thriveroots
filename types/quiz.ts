/**
 * Quiz Engine type system.
 *
 * The entire quiz is data-driven: sections and questions are defined in
 * data/quiz-questions.json (or fetched from an API later) and conform to
 * these types. Adding a 501st question never requires touching UI code —
 * only the JSON file.
 */

export type QuestionType =
  | "text"
  | "number"
  | "phone"
  | "radio"
  | "checkbox"
  | "image-select"
  | "image-upload";

export interface QuestionOption {
  id: string;
  label: string;
  /** Optional sublabel/description shown under the option label */
  description?: string;
  /** Required for "image-select" — icon name from lucide-react or image path */
  image?: string;
}

/** A condition that determines whether a question should be shown. */
export interface ConditionalRule {
  /** id of the question this condition depends on */
  questionId: string;
  /** the dependency must equal one of these values to show this question */
  equalsAnyOf: string[];
}

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  patternMessage?: string;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  /** The question prompt */
  title: string;
  /** Optional supporting copy under the title */
  subtitle?: string;
  placeholder?: string;
  options?: QuestionOption[];
  /** For checkbox: max number of selectable options */
  maxSelect?: number;
  validation?: ValidationRules;
  /** Only rendered when the referenced answer matches */
  showIf?: ConditionalRule;
  /** Unit label shown next to a number input, e.g. "years" */
  unit?: string;
}

export interface QuizSection {
  id: string;
  title: string;
  /** lucide-react icon name, resolved by the stepper */
  icon: string;
  description?: string;
  questions: QuizQuestion[];
}

export interface QuizConfig {
  id: string;
  title: string;
  sections: QuizSection[];
}

/** A single answer value: string for most types, string[] for checkbox,
 *  and a data URL string for image-upload. */
export type AnswerValue = string | string[];

export type QuizAnswers = Record<string, AnswerValue>;
