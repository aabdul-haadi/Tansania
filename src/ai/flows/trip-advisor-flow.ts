'use server';
/**
 * @fileOverview Serengeti Dreams AI Trip Advisor - RAG-Enhanced Prestige Edition.
 * 
 * This flow provides a personalized consultation experience using live context.
 * - RAG Architecture: Fetches live packages, blogs, and destinations to provide factual data.
 * - Strictness: Answers strictly from web registry data.
 * - Conciseness: Minimalistic, expert tone.
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

const systemPrompt = `You are the Serengeti Dreams AI Advisor, an elite senior concierge for a luxury Egypt-based agency specializing in Tanzania.

### STRICT OPERATIONAL GUIDELINES:

1. **ANSWERS FROM WEB DATA ONLY**: You must rely strictly on the provided LIVE SITE REGISTRY CONTEXT. Do not hallucinate details not found in the context. If data is missing, suggest contacting the Berlin office (+49 30 22608080).
2. **BE EXTREMELY CONCISE**: No fluff. No "I'd be happy to help". Deliver the expert facts immediately.
3. **MANDATORY LINKING**: If a user asks about a safari or destination, you MUST mention the matching package from the registry and provide its link: "Empfehlung: [Package Title](URL)".
4. **TONE**: Professional, authoritative, and prestigious. Montserrat Bold brand voice.
5. **GEOGRAPHY**: You are based in Cairo/Berlin. We are the bridge between the Nile and the Savannah.

GOAL: Convert queries into bookings via factual, surgical advice.`;

const advisorPrompt = ai.definePrompt({
  name: 'tripAdvisorPrompt',
  input: { 
    schema: TripAdvisorInputSchema
  },
  output: { schema: TripAdvisorOutputSchema },
  prompt: `
LIVE SITE REGISTRY CONTEXT (RAG):
{{{liveContext}}}

User Query: {{{message}}}

Provide a concise prestige response using ONLY the data above. Mandatory links for matching packages.
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
    let liveContext = "### NO LIVE DATA FOUND. USE GENERAL EXPERT KNOWLEDGE & SUGGEST CONTACTING OFFICE.";
    
    try {
      const { firestore } = initializeFirebase();
      if (firestore) {
        // Attempt to fetch live data but ensure failure doesn't crash the entire flow
        const [pkgsSnap, blogsSnap, destsSnap] = await Promise.allSettled([
          getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(10))),
          getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(5))),
          getDocs(query(collection(firestore, 'destinations'), where('isPublished', '==', true), limit(5)))
        ]);
        
        const pkgList = pkgsSnap.status === 'fulfilled' ? pkgsSnap.value.docs.map(d => {
          const data = d.data();
          return `- [PACKAGE] ${data.title}: ${data.durationDays} Tage, ab €${data.startingPrice}. URL: /safaris/${data.slug}`;
        }).join('\n') : '';

        const blogList = blogsSnap.status === 'fulfilled' ? blogsSnap.value.docs.map(d => {
          const data = d.data();
          return `- [JOURNAL] ${data.title}: ${data.excerpt?.slice(0, 80)}... URL: /blog/${data.slug}`;
        }).join('\n') : '';

        const destList = destsSnap.status === 'fulfilled' ? destsSnap.value.docs.map(d => {
          const data = d.data();
          return `- [HUB] ${data.name}: ${data.description?.slice(0, 120)}... URL: /destinations/${data.slug}`;
        }).join('\n') : '';

        if (pkgList || blogList || destList) {
          liveContext = `
### LIVE SITE REGISTRY (FACTS):
PACKAGES:
${pkgList || 'None.'}

DESTINATIONS:
${destList || 'None.'}

ARTICLES:
${blogList || 'None.'}
`;
        }
      }
    } catch (e) {
      console.warn("RAG Handshake Bypassed or Initialization Failed:", e);
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

      if (!output) throw new Error('AI Generation Failed');
      return output;
    } catch (err) {
      console.error("Genkit Flow Error:", err);
      return {
        response: "Entschuldigung, in der Savanne herrscht gerade Funkstille. Wir synchronisieren unsere Daten mit Berlin. Wie kann ich Ihnen direkt behilflich sein?",
        suggestedAction: "Kontakt aufnehmen",
        suggestedRoute: "/contact"
      };
    }
  }
);
