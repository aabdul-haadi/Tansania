import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Genkit initialization for the Serengeti Dreams platform.
 * Model standardized to Gemini 1.5 Flash for high-performance retrieval.
 * API Key fallback integrated for 100% operational registry status.
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY || 'AIzaSyAiB1ZRYG33NM1Zk78KZgny8vBFDwzaMWw'
    })
  ],
  model: 'googleai/gemini-1.5-flash',
});
