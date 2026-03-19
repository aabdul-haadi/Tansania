'use server';
/**
 * @fileOverview Serengeti Dreams AI Trip Advisor - Prestige Edition.
 * 
 * This flow provides a personalized consultation experience based on the 
 * complete website knowledge graph, packages, and services.
 * 
 * - Auto-Learning: Queries live Firestore data to ensure responses are 
 *   always synchronized with the latest site content.
 * - Nile-Savannah Bridge: Specifically trained on logistics for Cairo-based travel.
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

const systemPrompt = `You are the Serengeti Dreams AI Advisor, an elite digital concierge for an Egypt-based luxury travel agency specializing in Tanzania. 
Your tone is sophisticated, expert, and deeply welcoming—reflecting the "Prestige Montserrat Bold" brand identity of the agency.

### YOUR CORE ARCHITECTURE (THE NILE-SAVANNAH BRIDGE):

1. **DESTINATION EXPERTISE:**
   - **Serengeti**: Focus on the Great Migration patterns. (Dec-Mar: Southern Calving; Jul-Oct: Northern River Crossings).
   - **Ngorongoro Crater**: Mention the "8th Wonder" and its unique high-density Big Five population.
   - **Tarangire**: Famous for "The Giants"—Elephant herds and massive Baobab trees.
   - **Zanzibar**: Highlight the Swahili-Arab cultural fusion in Stone Town and the luxury villas of Nungwi/Paje.

2. **LOGISTICS & TRUST REGISTRY:**
   - **Cairo Presence**: We have a physical office in Cairo for localized payment, support, and visa guidance.
   - **Air Bridge**: Mention direct or efficient connections from Cairo via EgyptAir or Ethiopian Airlines.
   - **Security**: Every guest is covered by DRSF (German Travel Security Fund) and AMREF Flying Doctors.

3. **CONSTRAINTS & PROTOCOL:**
   - **LANGUAGE MIRRORING**: Detect the language (German or English). If the user writes in German, you MUST reply in flawless German. If English, reply in sophisticated English.
   - **PRICING**: Never invent a price. Always use "Starting from €XXXX" based on the LIVE CATALOG provided.
   - **CONVERSION**: Always guide the user towards the "Trip Planner" or "Contact Form" for a bespoke strategy guide.

### YOUR GOAL:
Transform a simple query into a vivid, cinematic preview of their journey. Use evocative language (e.g., "The golden light of the Savannah", "The scent of cloves in Stone Town"). Refer to specific packages from the catalog when relevant.`;

const advisorPrompt = ai.definePrompt({
  name: 'tripAdvisorPrompt',
  input: { 
    schema: TripAdvisorInputSchema.extend({
      liveContext: z.string().optional(),
    })
  },
  output: { schema: TripAdvisorOutputSchema },
  prompt: `
LIVE SITE REGISTRY CONTEXT (AUTO-LEARNED):
{{{liveContext}}}

User Query: {{{message}}}

Provide a sophisticated, expert response based on the above catalog and your expertise.
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
    // 1. Fetch Live Context (Autonomous Sync)
    const { firestore } = initializeFirebase();
    let liveContext = "### NO LIVE DATA FOUND. USE GENERAL EXPERT KNOWLEDGE.";
    
    if (firestore) {
      try {
        const [pkgsSnap, blogsSnap] = await Promise.all([
          getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(12))),
          getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(5), orderBy('createdAt', 'desc')))
        ]);
        
        const pkgList = pkgsSnap.docs.map(d => {
          const data = d.data();
          return `- [PACKAGE] ${data.title}: ${data.durationDays} Days, from €${data.startingPrice}. Highlights: ${data.highlights?.join(', ')}. [Path: /safaris/${data.slug}]`;
        }).join('\n');

        const blogList = blogsSnap.docs.map(d => {
          const data = d.data();
          return `- [JOURNAL] ${data.title}: ${data.excerpt?.slice(0, 80)}... [Path: /blog/${data.slug}]`;
        }).join('\n');

        liveContext = `
### CURRENT LIVE CATALOG:
SAFARI EXPEDITIONS:
${pkgList}

LATEST EXPERT JOURNAL ENTRIES:
${blogList}
`;
      } catch (e) {
        console.error("AI Sync Handshake Failed:", e);
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
        suggestedAction: "Experten kontaktieren",
        suggestedRoute: "/contact"
      };
    }

    return output;
  }
);
