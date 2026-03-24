import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Genkit initialization for the Serengeti Dreams platform.
 * Model standardized to Gemini 1.5 Flash for high-performance retrieval.
 * API Key synchronized with the provided SDL master key for 100% operational status.
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: 'AIzaSyAiB1ZRYG33NM1Zk78KZgny8vBFDwzaMWw'
    })
  ],
  model: 'googleai/gemini-1.5-flash',
});
