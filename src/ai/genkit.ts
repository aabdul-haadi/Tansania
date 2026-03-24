import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Genkit initialization for the Serengeti Dreams platform.
 * Synchronized with the provided Registry Key for 100% operational status.
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY
    })
  ],
  model: 'googleai/gemini-2.5-flash',
});
