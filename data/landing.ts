import {
  NavLink,
  TrustStat,
  ProcessStep,
  Benefit,
  Doctor,
  Product,
  Testimonial,
  TimelineMonth,
  FaqItem,
} from "@/types/content";

export const NAV_LINKS: NavLink[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Therapy plans", href: "#products" },
  { label: "Our doctors", href: "#experts" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export const TRUST_STATS: TrustStat[] = [
  { value: "2.1M+", label: "Hair assessments completed" },
  { value: "87%", label: "Report visibly reduced hair fall by month 3" },
  { value: "120+", label: "In-house dermatologists & trichologists" },
  { value: "4.7/5", label: "Average rating across 38,000 reviews" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Take the hair assessment",
    description:
      "9 minutes, 40-odd questions on your hormones, diet, stress, and scalp — no blood draw required to start.",
  },
  {
    number: "02",
    title: "Get your root-cause report",
    description:
      "Our system cross-references your answers against clinical hair-loss patterns to flag what's actually driving the shedding.",
  },
  {
    number: "03",
    title: "Start your therapy plan",
    description:
      "A combination plan — topical, nutritional, and lifestyle — built around your specific root causes, not a generic bottle.",
  },
  {
    number: "04",
    title: "Track regrowth with your coach",
    description:
      "Monthly check-ins, photo progress tracking, and plan adjustments from a real hair coach assigned to you.",
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: "Dna",
    title: "Root-cause, not symptom care",
    description:
      "Most hair fall is internal — thyroid, PCOS, iron, stress. We test for cause before we prescribe anything topical.",
  },
  {
    icon: "Stethoscope",
    title: "Doctor-formulated plans",
    description: "Every plan is reviewed by a licensed dermatologist before it reaches you, not auto-generated.",
  },
  {
    icon: "LineChart",
    title: "Visible tracking, not guesswork",
    description: "Monthly photo comparisons and a hair score so you can see what's working before you commit further.",
  },
  {
    icon: "Leaf",
    title: "Minoxidil-free options",
    description: "If you want to start without minoxidil, we build plans around DHT-blocking actives and nutrition instead.",
  },
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Aanya Kapoor",
    title: "Lead Dermatologist",
    credentials: "MD Dermatology · 14 yrs clinical hair loss practice",
    image: "doctor-1",
  },
  {
    name: "Dr. Rohan Mehta",
    title: "Trichology Lead",
    credentials: "Fellowship in Trichology, AIIMS",
    image: "doctor-2",
  },
  {
    name: "Dr. Simran Bhalla",
    title: "Endocrinology Advisor",
    credentials: "MD Endocrinology · PCOS & thyroid-linked hair loss",
    image: "doctor-3",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "root-serum",
    name: "Root Activation Serum",
    category: "Topical",
    description: "DHT-blocking, follicle-stimulating serum for the crown and hairline.",
    price: 899,
    compareAtPrice: 1199,
    image: "product-serum",
    tag: "Bestseller",
  },
  {
    id: "internal-capsules",
    name: "Internal Balance Capsules",
    category: "Nutrition",
    description: "Biotin, iron, and adaptogen blend targeting nutrient-deficiency-led shedding.",
    price: 1099,
    image: "product-capsules",
  },
  {
    id: "scalp-tonic",
    name: "Scalp Recovery Tonic",
    category: "Topical",
    description: "Anti-inflammatory tonic for flaky, sensitive, or oily scalps.",
    price: 649,
    image: "product-tonic",
  },
  {
    id: "growth-shampoo",
    name: "Fortifying Growth Shampoo",
    category: "Daily care",
    description: "Sulfate-free base formulated to not strip topical actives.",
    price: 549,
    compareAtPrice: 699,
    image: "product-shampoo",
    tag: "New",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya N.",
    age: 29,
    location: "Pune",
    quote:
      "I'd tried four shampoos before this. Turns out my thyroid was the actual issue — the assessment caught it in the first questionnaire.",
    weeksIn: 16,
    rating: 5,
    image: "testimonial-1",
  },
  {
    name: "Karthik S.",
    age: 34,
    location: "Bengaluru",
    quote: "The monthly coach calls kept me consistent. That's the part most hair-care brands skip entirely.",
    weeksIn: 12,
    rating: 5,
    image: "testimonial-2",
  },
  {
    name: "Fatima A.",
    age: 26,
    location: "Hyderabad",
    quote: "Postpartum shedding was brutal. The plan adjusted twice as my hormones changed — it actually felt personalized.",
    weeksIn: 20,
    rating: 4,
    image: "testimonial-3",
  },
];

export const TIMELINE: TimelineMonth[] = [
  { month: 1, title: "Shedding stabilizes", description: "Reduced hair fall in the shower and on the pillow as actives build up." },
  { month: 2, title: "Scalp condition improves", description: "Less flaking, itching, or oiliness as the scalp barrier resets." },
  { month: 3, title: "Baby hairs appear", description: "Fine, short regrowth visible along the hairline and parting." },
  { month: 4, title: "Texture thickens", description: "Existing strands gain visible thickness and shine." },
  { month: 6, title: "Visible density", description: "Most users report a noticeably fuller parting and crown by month 6." },
];

export const FAQS: FaqItem[] = [
  {
    question: "How is this different from a regular hair-fall shampoo?",
    answer:
      "Shampoos only address the scalp surface. We start with an internal + external assessment to identify why hair is falling, then combine topical, nutritional, and lifestyle changes around that cause.",
  },
  {
    question: "Do I need a blood test to start?",
    answer:
      "No — the assessment alone gets you a starting plan. If your answers suggest a likely thyroid, PCOS, or deficiency link, your hair coach will recommend specific lab tests to confirm.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Hair growth cycles mean most users see reduced shedding by month 1-2 and visible regrowth by month 3-4. Full density changes are typically assessed at month 6.",
  },
  {
    question: "Is this safe during pregnancy or while breastfeeding?",
    answer:
      "Some actives aren't recommended during pregnancy or breastfeeding. Your assessment flags this, and your plan is adjusted by a doctor accordingly.",
  },
  {
    question: "Can I cancel or change my plan?",
    answer: "Yes, plans are reviewed monthly with your hair coach and can be paused, adjusted, or cancelled anytime.",
  },
];
