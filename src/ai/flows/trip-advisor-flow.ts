'use server';
/**
 * @fileOverview Serengeti Dreams AI Trip Advisor.
 * 
 * This flow provides a personalized consultation experience based on the 
 * complete website knowledge graph, packages, and services.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TripAdvisorInputSchema = z.object({
  message: z.string().describe('The user\'s question or request.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string()
  })).optional().describe('Chat history for context.'),
});

const TripAdvisorOutputSchema = z.object({
  response: z.string().describe('The AI\'s helpful, expert response.'),
  suggestedAction: z.string().optional().describe('A recommended next step (e.g., "Check the 15-day itinerary").'),
  suggestedRoute: z.string().optional().describe('A link to a relevant page on the site.'),
});

export async function askTripAdvisor(input: z.infer<typeof TripAdvisorInputSchema>) {
  return tripAdvisorFlow(input);
}

const systemPrompt = `You are the Serengeti Dreams AI Advisor, a premium digital concierge for an Egypt-based luxury travel agency specializing in Tanzania.
Your tone is sophisticated, expert, and deeply welcoming. You bridge the gap between the Nile and the Savannah.

### YOUR KNOWLEDGE BASE:
1. **Core Flagship**: The "15-Day Safari & Zanzibar" package. You know every day of it—from Arusha city life to Tarangire elephants, Maasai culture, Serengeti migration, Ngorongoro rhinos, and the Zanzibar finale (Blue Safari, Spice Tours).
2. **Other Packages**: 13-day Luxury (Honeymoon), 12-day Family Safari, 11-day Kurztrip, and 13-day Kili Combo.
3. **Destinations**: Serengeti (Migration), Ngorongoro Crater (Big Five), Tarangire (Baobabs/Elephants), Kilimanjaro (Roof of Africa), Zanzibar (Nungwi, Paje, Stone Town).
4. **Logistics**: We have a local office in Cairo for support. We handle EgyptAir/Ethiopian flights. 
5. **Services**: Adventure App (offline maps), Guest Protection (AMREF Flying Doctors), Visa assistance for Egyptian residents.
6. **Best Times**: June-Oct (Dry season/Migration), Dec-Mar (Calving season/Birding).

### YOUR GOAL:
Answer questions with rich detail. If a user asks about a trip, suggest the most relevant package. Always remain helpful and guide them towards the "Trip Planner" or "Contact Form" for a bespoke quote.

### CONSTRAINTS:
- Answer in the language the user uses (German or English).
- Be specific. Mention lodges or specific experiences (e.g., "The Ashura Planet Hotel in Arusha").
- Keep responses concise but "decent" and luxurious.`;

const tripAdvisorFlow = ai.defineFlow(
  {
    name: 'tripAdvisorFlow',
    inputSchema: TripAdvisorInputSchema,
    outputSchema: TripAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      system: systemPrompt,
      prompt: input.message,
      messages: input.history?.map(h => ({ role: h.role, content: [{ text: h.content }] })),
      config: {
        temperature: 0.7,
      }
    });

    return {
      response: output?.text || "I'm sorry, I couldn't process that request. How else can I help you plan your safari?",
      suggestedAction: "Speak with an expert",
      suggestedRoute: "/trip-planner"
    };
  }
);
