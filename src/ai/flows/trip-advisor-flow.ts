'use server';
/**
 * @fileOverview Serengeti Dreams AI Trip Advisor.
 * 
 * This flow provides a personalized consultation experience based on the 
 * complete website knowledge graph, packages, and services.
 * 
 * - Auto-Learning: Queries live Firestore data to ensure responses are 
 *   always synchronized with the latest site content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { initializeFirebase } from '@/firebase/setup';
import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';

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

### YOUR CORE KNOWLEDGE BASE:

1. **DESTINATION EXPERTISE:**
   - **Serengeti**: Best for Migration (June-Oct) and Big Cats.
   - **Ngorongoro Crater**: Highest density of wildlife; "The 8th Wonder".
   - **Tarangire**: Famous for massive Baobabs and huge elephant herds.
   - **Kilimanjaro**: Routes include Machame (scenic), Lemosho (quiet), and Marangu (huts).
   - **Zanzibar**: Highlights include Stone Town (UNESCO), Nungwi/Kendwa (swimmable beaches), and Paje (Kitesurfing).

2. **LOGISTICS & SUPPORT:**
   - **Local Office**: We have a physical presence in Cairo for localized payment and support.
   - **Flights**: We handle connections via EgyptAir or Ethiopian Airlines from Cairo.
   - **Visa**: We provide specific guidance for Egyptian passport holders and residents.
   - **Safety**: Every guest is covered by AMREF Flying Doctors (emergency air rescue).

### YOUR GOAL:
Answer questions with rich, vivid detail. Use luxurious and evocative language. If a user asks about a trip, suggest the most relevant package from the provided LIVE CATALOG. Always guide them towards the "Trip Planner" or "Contact Form" for a bespoke quote.

### CONSTRAINTS:
- LANGUAGE MIRRORING: Detect the language used by the user (typically German or English) and respond in that EXACT same language.
- If the user writes in German, you MUST reply in German.
- If the user writes in English, you MUST reply in English.
- Keep responses relatively concise but "warm" and sophisticated.
- Do NOT make up pricing; refer to the "starting price from €XXXX" logic found in the catalog context.`;

const advisorPrompt = ai.definePrompt({
  name: 'tripAdvisorPrompt',
  input: { 
    schema: TripAdvisorInputSchema.extend({
      liveContext: z.string().optional(),
    })
  },
  output: { schema: TripAdvisorOutputSchema },
  prompt: `
{{{liveContext}}}

User Message: {{{message}}}
`,
  system: systemPrompt,
});

const tripAdvisorFlow = ai.defineFlow(
  {
    name: 'tripAdvisorFlow',
    inputSchema: TripAdvisorInputSchema,
    outputSchema: TripAdvisorOutputSchema,
  },
  async (input) => {
    // 1. Fetch Live Context (Auto-learning from Registry)
    const { firestore } = initializeFirebase();
    let liveContext = "### NO LIVE DATA FOUND. USE GENERAL KNOWLEDGE.";
    
    if (firestore) {
      try {
        const [pkgsSnap, blogsSnap] = await Promise.all([
          getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(10))),
          getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(5), orderBy('createdAt', 'desc')))
        ]);
        
        const pkgList = pkgsSnap.docs.map(d => {
          const data = d.data();
          return `- **${data.title}**: ${data.description?.slice(0, 100)}... (${data.durationDays} Tage, ab €${data.startingPrice}) [Pfad: /safaris/${data.slug}]`;
        }).join('\n');

        const blogList = blogsSnap.docs.map(d => {
          const data = d.data();
          return `- **${data.title}**: ${data.excerpt?.slice(0, 100)}... [Pfad: /blog/${data.slug}]`;
        }).join('\n');

        liveContext = `
### CURRENT LIVE CATALOG (AUTO-LEARNED):
SAFARI PACKAGES:
${pkgList}

LATEST EXPERT JOURNAL ENTRIES:
${blogList}
`;
      } catch (e) {
        console.error("AI Learning Handshake Failed:", e);
      }
    }

    const { output } = await advisorPrompt({
      ...input,
      liveContext
    }, {
      messages: input.history?.map(h => ({ role: h.role, content: [{ text: h.content }] }))
    });

    if (!output) {
      return {
        response: "Entschuldigung, in der Savanne herrscht gerade Funkstille. Wie kann ich Ihnen sonst bei der Planung Ihrer Safari behilflich sein?",
        suggestedAction: "Experten sprechen",
        suggestedRoute: "/trip-planner"
      };
    }

    return output;
  }
);
