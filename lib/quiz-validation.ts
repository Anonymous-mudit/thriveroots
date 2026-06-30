import { z } from "zod";
import { QuizQuestion } from "@/types/quiz";

/**
 * Builds a Zod schema for a single question at runtime, from its
 * `validation` rules in JSON. This is what lets the quiz engine support
 * an arbitrary number of questions without per-question code: every
 * question type maps to one schema-building branch here.
 */
export function buildQuestionSchema(question: QuizQuestion) {
  const v = question.validation ?? {};

  switch (question.type) {
    case "checkbox": {
      let schema = z.array(z.string());
      if (v.required) {
        schema = schema.min(1, "Select at least one option");
      }
      if (question.maxSelect) {
        schema = schema.max(question.maxSelect, `Select up to ${question.maxSelect} options`);
      }
      return schema;
    }

    case "number": {
      let schema = z
        .string()
        .refine((val) => val === "" || !isNaN(Number(val)), "Enter a valid number");
      if (v.required) {
        schema = schema.refine((val) => val.trim().length > 0, "This field is required");
      }
      if (v.min !== undefined) {
        schema = schema.refine((val) => val === "" || Number(val) >= v.min!, `Must be at least ${v.min}`);
      }
      if (v.max !== undefined) {
        schema = schema.refine((val) => val === "" || Number(val) <= v.max!, `Must be at most ${v.max}`);
      }
      return schema;
    }

    case "phone": {
      let schema = z.string();
      if (v.required) schema = schema.min(1, "Phone number is required");
      if (v.pattern) {
        const re = new RegExp(v.pattern);
        schema = schema.refine((val) => val === "" || re.test(val), v.patternMessage ?? "Invalid phone number");
      }
      return schema;
    }

    case "image-upload": {
      // stored as a data URL string, or "" if not provided
      let schema = z.string();
      if (v.required) schema = schema.min(1, "Please upload a photo to continue");
      return schema;
    }

    case "text":
    case "radio":
    case "image-select":
    default: {
      let schema = z.string();
      if (v.required) schema = schema.min(1, "This field is required");
      if (v.minLength) schema = schema.min(v.minLength, `Must be at least ${v.minLength} characters`);
      if (v.maxLength) schema = schema.max(v.maxLength, `Must be at most ${v.maxLength} characters`);
      if (v.pattern) {
        const re = new RegExp(v.pattern);
        schema = schema.refine((val) => val === "" || re.test(val), v.patternMessage ?? "Invalid value");
      }
      return schema;
    }
  }
}

/** Validate a single answer against its question's rules. Returns an error message or null. */
export function validateAnswer(question: QuizQuestion, value: unknown): string | null {
  const schema = buildQuestionSchema(question);
  const result = schema.safeParse(value ?? (question.type === "checkbox" ? [] : ""));
  if (!result.success) {
    return result.error.issues[0]?.message ?? "Invalid answer";
  }
  return null;
}
