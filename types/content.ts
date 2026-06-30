export interface NavLink {
  label: string;
  href: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Doctor {
  name: string;
  title: string;
  credentials: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  tag?: string;
}

export interface Testimonial {
  name: string;
  age: number;
  location: string;
  quote: string;
  weeksIn: number;
  rating: number;
  image: string;
}

export interface TimelineMonth {
  month: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
