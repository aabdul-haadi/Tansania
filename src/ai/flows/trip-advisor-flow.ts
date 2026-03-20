'use server';
/**
 * @fileOverview Serengeti Dreams AI Trip Advisor - RAG-Enhanced Prestige Edition.
 * 
 * This flow provides a personalized consultation experience using live context.
 * - RAG Architecture: Fetches live packages and blogs to provide factual data.
 * - Fault-Tolerance: Handles Firestore sync failures gracefully.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { initializeFirebase } from '@/firebase/setup';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';

const TripAdvisorInputSchema = z.object({
  message: z.string().describe('The user\'s question or request.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string()
  })).optional().describe('Chat history for context.'),
  // Added optional context fields to prevent validation errors from frontend-passed data
  packagesContext: z.array(z.any()).optional(),
  liveContext: z.string().optional(),
});

const TripAdvisorOutputSchema = z.object({
  response: z.string().describe('The AI\'s helpful, expert response.'),
  suggestedAction: z.string().optional().describe('A recommended next step.'),
  suggestedRoute: z.string().optional().describe('A link to a relevant page.'),
});

export async function askTripAdvisor(input: z.infer<typeof TripAdvisorInputSchema>) {
  return tripAdvisorFlow(input);
}

const systemPrompt = `You are the Serengeti Dreams AI Advisor, an elite digital concierge for an Egypt-based luxury travel agency specializing in Tanzania. 
Your tone is sophisticated, expert, and deeply welcoming—reflecting the "Montserrat Bold" prestige brand.

### YOUR CORE ARCHITECTURE (THE NILE-SAVANNAH BRIDGE):

1. **DESTINATION EXPERTISE (RAG-DRIVEN):**
   - **Serengeti**: Focus on the Great Migration. Dec-Mar: Calving; Jul-Oct: River Crossings.
   - **Ngorongoro**: Highlight the 25,000+ large mammals in the crater.
   - **Zanzibar**: Emphasize the Swahili-Arab fusion and luxury beach villas.
   - **Use the provided LIVE CATALOG data** to recommend specific packages and blog stories.

2. **LOGISTICS & TRUST:**
   - **Cairo Presence**: We have a physical office in Cairo for localized payment and visa guidance.
   - **Flight Links**: Efficient connections from Cairo via EgyptAir or Ethiopian Airlines.
   - **Security**: Every guest is covered by DRSF (German Travel Security Fund).

3. **CONSTRAINTS:**
   - **LANGUAGE**: Reply in the language used by the user (German or English).
   - **PRICING**: Use "Starting from €XXXX" based on the provided live context.
   - **ACTION**: Guide the user towards "Trip Planner" or "Contact Form" for bespoke planning.

GOAL: Transform queries into cinematic previews of their journey based on actual live data.`;

const advisorPrompt = ai.definePrompt({
  name: 'tripAdvisorPrompt',
  input: { 
    schema: TripAdvisorInputSchema
  },
  output: { schema: TripAdvisorOutputSchema },
  prompt: `
LIVE SITE REGISTRY CONTEXT (RAG DATA):
{{{liveContext}}}

User Query: {{{message}}}

Provide an expert, prestige response based on the above catalog and your expertise.
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
    // 1. RAG Handshake: Fetch Live Context
    const { firestore } = initializeFirebase();
    let liveContext = "### NO LIVE DATA FOUND. USE GENERAL EXPERT KNOWLEDGE.";
    
    if (firestore) {
      try {
        const [pkgsSnap, blogsSnap] = await Promise.all([
          getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(8))),
          getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(4)))
        ]);
        
        const pkgList = pkgsSnap.docs.map(d => {
          const data = d.data();
          return `- [PACKAGE] ${data.title}: ${data.durationDays} Days, from €${data.startingPrice}. [Path: /safaris/${data.slug}]`;
        }).join('\n');

        const blogList = blogsSnap.docs.map(d => {
          const data = d.data();
          return `- [JOURNAL] ${data.title}: ${data.excerpt?.slice(0, 60)}... [Path: /blog/${data.slug}]`;
        }).join('\n');

        liveContext = `
### CURRENT LIVE CATALOG:
SAFARI EXPEDITIONS:
${pkgList || 'None listed yet.'}

LATEST EXPERT JOURNAL ENTRIES:
${blogList || 'None listed yet.'}
`;
      } catch (e) {
        console.warn("AI Context Handshake Bypassed (resilience mode):", e);
      }
    }

    try {
      const { output } = await advisorPrompt({
        ...input,
        liveContext
      }, {
        messages: input.history?.map(h => ({ role: h.role, content: [{ text: h.content }] }))
      });

      if (!output) throw new Error('Empty AI response');
      return output;
    } catch (err) {
      console.error("Genkit Generation Failed:", err);
      return {
        response: "Entschuldigung, in der Savanne herrscht gerade Funkstille. Wie kann ich Ihnen sonst bei der Planung Ihrer Safari behilflich sein?",
        suggestedAction: "Experten kontaktieren",
        suggestedRoute: "/contact"
      };
    }
  }
);
