import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
<<<<<<< HEAD
 * Genkit initialization for the Serengeti Dreams platform.
 * Model standardized to Gemini 1.5 Flash for high-performance retrieval.
 * API Key synchronized with the provided SDL master key for 100% operational status.
=======
 * Genkit initialization for the application.
 * It uses the GOOGLE_GENAI_API_KEY environment variable by default.
>>>>>>> e402125 (Fix the Firebase initialization and environment variable configuration i)
 */
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: 'AIzaSyAiB1ZRYG33NM1Zk78KZgny8vBFDwzaMWw'
    })
  ],
  model: 'googleai/gemini-1.5-flash',
});
