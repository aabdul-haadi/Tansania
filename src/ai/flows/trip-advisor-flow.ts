
'use server';
/**
 * @fileOverview Tansania Reiseabenteuer AI Trip Advisor - RAG-Enhanced Prestige Edition.
 * 
 * This flow provides a personalized consultation experience using live context.
 * - RAG Architecture: Fetches up to 30 packages, 15 blogs, and 15 destinations for 100% accuracy.
 * - Strictness: Answers strictly from web registry data.
 * - Resilience: Implements a global error boundary to prevent "Systemausfall" crashes.
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
  // Global Resilience Boundary: Never throw, always return a prestige fallback
  try {
    return await tripAdvisorFlow(input);
  } catch (error) {
    console.error("Critical AI Advisor Failure:", error);
    return {
      response: "Jambo! In der Savanne herrscht gerade Funkstille. Wir synchronisieren unsere Daten mit dem Berliner Büro (+49 30 22608080). Wie kann ich Ihnen direkt behilflich sein?",
      suggestedAction: "Experten kontaktieren",
      suggestedRoute: "/contact"
    };
  }
}

const systemPrompt = `You are the Tansania Reiseabenteuer AI Advisor, an elite senior concierge for a luxury Egypt-based agency specializing in Tanzania.

### STRICT OPERATIONAL GUIDELINES:

1. **ANSWERS FROM WEB DATA ONLY**: You MUST rely strictly on the provided LIVE SITE REGISTRY CONTEXT. If a package, destination, or price is not in the context, state that you don't have that specific data and suggest contacting the Berlin office.
2. **BE EXTREMELY CONCISE**: No fluff. Deliver expert facts immediately.
3. **MANDATORY LINKING**: If a user asks about a safari or destination, you MUST mention the matching package from the registry and provide its link exactly as found in the context: "Empfehlung: [Package Title](URL)".
4. **TONE**: Professional, authoritative, and prestigious. Montserrat Bold brand voice (High Density).
5. **ACCURACY**: Do not guess prices. Use the "ab €..." values from the registry context only.

GOAL: Provide 100% accurate, catalog-based advice to convert queries into bookings.`;

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
        // Increased limits to ensure AI knows all published catalog items
        const [pkgsSnap, blogsSnap, destsSnap] = await Promise.allSettled([
          getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(30))),
          getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(15))),
          getDocs(query(collection(firestore, 'destinations'), where('isPublished', '==', true), limit(15)))
        ]);
        
        const pkgList = pkgsSnap.status === 'fulfilled' ? pkgsSnap.value.docs.map(d => {
          const data = d.data();
          return `- [PACKAGE] ${data.title}: ${data.durationDays} Tage, ab €${data.startingPrice}. URL: /safaris/${data.slug}`;
        }).join('\n') : '';

        const blogList = blogsSnap.status === 'fulfilled' ? blogsSnap.value.docs.map(d => {
          const data = d.data();
          return `- [JOURNAL] ${data.title}: URL: /blog/${data.slug}`;
        }).join('\n') : '';

        const destList = destsSnap.status === 'fulfilled' ? destsSnap.value.docs.map(d => {
          const data = d.data();
          return `- [HUB] ${data.name}: URL: /destinations/${data.slug}`;
        }).join('\n') : '';

        if (pkgList || blogList || destList) {
          liveContext = `### LIVE SITE REGISTRY (FACTS):\nPACKAGES:\n${pkgList}\n\nDESTINATIONS:\n${destList}\n\nARTICLES:\n${blogList}`;
        }
      }
    } catch (e) {
      console.warn("RAG Handshake Bypassed:", e);
    }

    const { output } = await advisorPrompt({
      ...input,
      liveContext
    }, {
      messages: input.history?.map(h => ({ 
        role: h.role === 'model' ? 'model' : 'user', 
        content: [{ text: h.content }] 
      })) || []
    });

    if (!output) throw new Error('AI Generation Failed');
    return output;
  }
);
