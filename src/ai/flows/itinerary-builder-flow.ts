'use server';
/**
 * @fileOverview AI Itinerary Builder for custom safari expeditions.
 * 
 * - buildCustomItinerary - Generates a bespoke day-by-day plan.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ItineraryInputSchema = z.object({
  regions: z.array(z.string()).describe('Selected regions like Serengeti, Zanzibar, etc.'),
  wildlife: z.array(z.string()).describe('Wildlife interests like Big Five, Birds, etc.'),
  tier: z.string().describe('Budget tier: Value, Premium, or Ultra-Luxury'),
  duration: z.number().describe('Number of days for the trip'),
  travelers: z.number().describe('Number of travelers'),
});

const ItineraryOutputSchema = z.object({
  title: z.string().describe('Catchy name for the custom itinerary'),
  summary: z.string().describe('Executive summary of the experience'),
  days: z.array(z.object({
    day: z.number(),
    location: z.string(),
    title: z.string(),
    activity: z.string(),
    accommodation: z.string(),
    highlights: z.array(z.string())
  })),
  estimatedPrice: z.number().describe('Total estimated price in EUR'),
  expertTip: z.string().describe('A specialized tip from our Cairo office'),
});

export async function buildCustomItinerary(input: z.infer<typeof ItineraryInputSchema>) {
  return itineraryBuilderFlow(input);
}

const itineraryBuilderFlow = ai.defineFlow(
  {
    name: 'itineraryBuilderFlow',
    inputSchema: ItineraryInputSchema,
    outputSchema: ItineraryOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      system: `You are the Tansania Reiseabenteuer Itinerary Architect. 
      Create a high-end, logical safari flow. 
      Budget context: Value (~€300/day), Premium (~€600/day), Ultra-Luxury (~€1200/day).
      Language: German (as it is an SDL Berlin based agency).`,
      prompt: `Build a ${input.duration} day itinerary for ${input.travelers} people visiting ${input.regions.join(', ')}. 
      Focus on wildlife: ${input.wildlife.join(', ')}. Tier: ${input.tier}.`,
      config: { temperature: 0.8 }
    });

    if (!output) throw new Error('Failed to generate itinerary');
    
    // Fallback if structured output fails (Genkit usually handles this well with the output schema)
    return output as any;
  }
);
