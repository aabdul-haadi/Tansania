'use server';
/**
 * @fileOverview A Genkit flow for generating a content checklist for new web pages.
 *
 * - generateAdminContentChecklist - A function that generates a content checklist based on page type and context.
 * - AdminContentChecklistInput - The input type for the generateAdminContentChecklist function.
 * - AdminContentChecklistOutput - The return type for the generateAdminContentChecklist function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AdminContentChecklistInputSchema = z.object({
  pageType: z.enum(['package', 'destination', 'blogPost']).describe('The type of page for which the checklist is being generated (e.g., package, destination, blogPost).'),
  pageTitle: z.string().optional().describe('The title of the new page, if available.'),
  additionalContext: z.string().optional().describe('Any additional context or details about the page content.'),
});
export type AdminContentChecklistInput = z.infer<typeof AdminContentChecklistInputSchema>;

const AdminContentChecklistOutputSchema = z.object({
  pageTitle: z.string().describe('The title of the page this checklist is for.'),
  suggestedSections: z.array(
    z.object({
      title: z.string().describe('Title of the suggested content section.'),
      description: z.string().describe('Brief description of what this section should cover.'),
      importance: z.enum(['essential', 'highly_recommended', 'recommended']).describe('The importance level of this section.'),
    })
  ).describe('A list of suggested content sections for the page.'),
  seoElements: z.array(
    z.object({
      element: z.string().describe('SEO element name (e.g., "Meta Title", "Meta Description", "Keywords").'),
      guideline: z.string().describe('Guideline or suggestion for this SEO element.'),
    })
  ).describe('A list of SEO elements and their guidelines.'),
  faqIdeas: z.array(z.string()).describe('List of potential FAQ questions for the page.'),
  generalTips: z.array(z.string()).describe('General content creation tips for the page type.'),
});
export type AdminContentChecklistOutput = z.infer<typeof AdminContentChecklistOutputSchema>;

export async function generateAdminContentChecklist(input: AdminContentChecklistInput): Promise<AdminContentChecklistOutput> {
  return adminContentChecklistGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adminContentChecklistPrompt',
  input: { schema: AdminContentChecklistInputSchema },
  output: { schema: AdminContentChecklistOutputSchema },
  prompt: `You are an expert content strategist and SEO specialist for a premium Egypt-based travel agency named "Serengeti Dreams", specializing in Tanzania safari packages (Serengeti + Zanzibar).
Your goal is to generate a detailed, structured content checklist for a new web page, ensuring it is comprehensive, well-structured, and optimized for SEO, reflecting a luxury, modern, and trustworthy feel.

The new page is a '{{{pageType}}}' page.
{{#if pageTitle}}
The title of the page is: "{{{pageTitle}}}".
{{/if}}
{{#if additionalContext}}
Here is some additional context about the page: "{{{additionalContext}}}".
{{/if}}

Please provide a content checklist that includes essential sections, SEO elements, FAQ ideas, and general content tips, formatted as a JSON object matching the following schema.
Be specific with section titles and descriptions, and tailor them to the given page type.

For 'package' and 'destination' pages, ensure to include suggestions for sections like 'Best Time to Visit', 'Sample Itineraries', 'Accommodation Details', 'Inclusions/Exclusions', and 'Pricing Tiers' where appropriate.
For 'blogPost' pages, focus on engaging content, clear structure, and strong SEO.

Output:`,
});

const adminContentChecklistGenerationFlow = ai.defineFlow(
  {
    name: 'adminContentChecklistGenerationFlow',
    inputSchema: AdminContentChecklistInputSchema,
    outputSchema: AdminContentChecklistOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate content checklist.');
    }
    return output;
  }
);
