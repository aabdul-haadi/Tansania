
'use server';

import { z } from 'zod';
import { Booking, Inquiry } from '@/types';

const BookingSchema = z.object({
  packageId: z.string(),
  userId: z.string(),
  date: z.string(),
  travelers: z.number().min(1),
  addOnsSelected: z.array(z.string()),
  totalPrice: z.number(),
});

const InquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(['TRIP_PLANNER', 'CONTACT']),
  preferences: z.object({
    dates: z.string().optional(),
    budget: z.string().optional(),
    travelers: z.number().optional(),
    destinations: z.array(z.string()).optional(),
  }).optional(),
});

export async function createBooking(data: z.infer<typeof BookingSchema>) {
  // Mocking database write
  console.log('Creating booking:', data);
  
  // In a real app, use Firebase Admin SDK here
  return { success: true, bookingId: 'mock-id-' + Math.random().toString(36).substr(2, 9) };
}

export async function submitInquiry(data: z.infer<typeof InquirySchema>) {
  // Mocking database write
  console.log('Submitting inquiry:', data);
  
  // In a real app, use Firebase Admin SDK here
  return { success: true };
}
