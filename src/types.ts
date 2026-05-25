export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Used to dynamically map Lucide icons
  pricingModel: string;
  estimatedPrice: string;
  symptoms: string[];
  features: string[];
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  serviceReceived: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'emergency' | 'coverage' | 'general';
}

export interface ServiceCity {
  name: string;
  state: 'PA' | 'MD';
  zipCode: string;
  isEmergencyAvailable: boolean;
  estTravelTimeMin: number;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  serviceType: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  details: string;
}
