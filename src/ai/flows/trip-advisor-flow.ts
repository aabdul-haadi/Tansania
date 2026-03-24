
'use server';
/**
 * @fileOverview Serengeti Dreams AI Trip Advisor - RAG-Enhanced Prestige Edition.
 * 
 * This flow provides a personalized consultation experience using live context.
 * - RAG Architecture: Fetches live packages, blogs, and destinations to provide factual data.
 * - Resilience: Handles Firestore sync failures and prompt complexity gracefully.
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

const systemPrompt = `You are the Serengeti Dreams AI Advisor, an elite senior concierge for an Egypt-based luxury travel agency specializing in Tanzania.

### STRICT OPERATIONAL GUIDELINES:

1. **BE EXTREMELY CONCISE**: Deliver expert answers in the fewest words possible. No fluff or generic travel filler.
2. **STRICT DATA ADHERENCE**: Use ONLY the provided LIVE SITE REGISTRY CONTEXT below. If the information isn't there, state that you don't have that specific detail and suggest contacting the Berlin office.
3. **MANDATORY LINKING**: If a user asks about a safari or shows interest in a destination, you MUST mention the matching package title and provide its link from the catalog data in the format: "Check out our [Package Title](URL)".
4. **TONE**: Professional, authoritative, and welcoming. Reflect the "Montserrat Bold" prestige brand.
5. **GEOGRAPHY**: Remember we are Cairo-based experts for Tanzania. Use this to build trust regarding flights (EgyptAir/Ethiopian) and local support.

GOAL: Convert queries into bookings by providing factual, link-rich, and high-speed expert advice.`;

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

Provide a detailed but concise expert prestige response. If any package matches the query, you MUST provide its name and link.
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
    const { firestore } = initializeFirebase();
    let liveContext = "### NO LIVE DATA FOUND. USE GENERAL EXPERT KNOWLEDGE.";
    
    if (firestore) {
      try {
        // RESILIENT RAG: Index-independent queries to prevent "Funkstille"
        const [pkgsSnap, blogsSnap, destsSnap] = await Promise.all([
          getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(10))),
          getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(5))),
          getDocs(query(collection(firestore, 'destinations'), where('isPublished', '==', true), limit(5)))
        ]);
        
        const pkgList = pkgsSnap.docs.map(d => {
          const data = d.data();
          return `- [PACKAGE] ${data.title}: ${data.durationDays} Days, from €${data.startingPrice}. URL: /safaris/${data.slug}`;
        }).join('\n');

        const blogList = blogsSnap.docs.map(d => {
          const data = d.data();
          return `- [JOURNAL] ${data.title}: ${data.excerpt?.slice(0, 60)}... URL: /blog/${data.slug}`;
        }).join('\n');

        const destList = destsSnap.docs.map(d => {
          const data = d.data();
          return `- [HUB] ${data.name}: ${data.description?.slice(0, 100)}... URL: /destinations/${data.slug}`;
        }).join('\n');

        liveContext = `
### CURRENT LIVE CATALOG REGISTRY:
SAFARI EXPEDITIONS:
${pkgList || 'None listed yet.'}

COUNTRY HUB GUIDES:
${destList || 'None listed yet.'}

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
        liveContext: liveContext || ""
      }, {
        messages: input.history?.map(h => ({ 
          role: h.role === 'model' ? 'model' : 'user', 
          content: [{ text: h.content }] 
        })) || []
      });

      if (!output) throw new Error('Empty AI response');
      return output;
    } catch (err) {
      console.error("Genkit Generation Failed:", err);
      return {
        response: "Entschuldigung, in der Savanne herrscht gerade Funkstille. Wir prüfen die Verbindung zu unseren Experten in Berlin. Wie kann ich Ihnen sonst behilflich sein?",
        suggestedAction: "Experten kontaktieren",
        suggestedRoute: "/contact"
      };
    }
  }
);
