
export type UserRole = 'USER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  createdAt: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  description: string;
  bestTimeToVisit: string;
  itinerarySummary: string;
  faqs: { question: string; answer: string }[];
  mediaRefs: string[];
}

export interface PackageTier {
  name: 'Standard' | 'Luxury' | 'Premium';
  price: number;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals?: string[];
}

export interface SafariPackage {
  id: string;
  title: string;
  slug: string;
  destinationRefs: string[];
  durationDays: number;
  tier: 'budget' | 'mid' | 'luxury';
  seasonTags: string[];
  categories: string[];
  startingPrice: number;
  rating: number;
  highlights: string[];
  itineraryDays: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  addOns: { name: string; price: number; description?: string }[];
  mediaRefs: string[];
  limitedSlots: boolean;
  isPublished: boolean;
  popularity: number;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Booking {
  id: string;
  userId: string;
  packageId: string;
  date: string;
  travelers: number;
  addOnsSelected: string[];
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  notes?: string;
}

export interface Inquiry {
  id: string;
  type: 'TRIP_PLANNER' | 'CONTACT';
  name: string;
  email: string;
  phone?: string;
  message?: string;
  preferences?: {
    dates?: string;
    budget?: string;
    travelers?: number;
    destinations?: string[];
  };
  status: 'new' | 'responded' | 'closed';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Tips' | 'Guides' | 'Planning' | 'Culture';
  coverMediaRef: string;
  isPublished: boolean;
  publishedAt: string;
  author: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  isPublished: boolean;
  createdAt: string;
  packageId?: string;
}
