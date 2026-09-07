export interface ServiceItem {
  id: string;
  tag: string;
  tagColor: string;
  borderAccentColor: string;
  title: string;
  duration: string;
  durationIcon: string;
  description: string;
  price: string;
  priceDetails?: string[];
  ctaText: string;
  idealFor: string;
  modality: string;
}

export interface CaseStudyItem {
  id: string;
  serviceUsed: string;
  title: string;
  story: string;
  resultPill: string;
  icon: string;
  category: string;
  challenges: string[];
  keyOutcomes: string[];
}

export interface FaqItem {
  id: string;
  number?: number;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingData {
  serviceId: string;
  serviceTitle: string;
  modality: 'remote' | 'in-person';
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  organizationType: string;
  projectSummary: string;
}
