export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  image?: string;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  industry: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  metrics?: { label: string; value: string }[];
  image?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface CareerResource {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Services & Pricing" | "Resume & CV" | "LinkedIn Optimization" | "Coaching & Consultations";
}
