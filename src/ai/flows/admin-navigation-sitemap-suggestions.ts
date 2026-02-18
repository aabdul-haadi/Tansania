'use server';
/**
 * @fileOverview This file implements a Genkit flow for the AI Planner that recommends updates
 * for the site's navigation menu and sitemap based on newly added or updated pages and content.
 *
 * - adminNavigationSitemapSuggestions - A function that triggers the AI planner to suggest navigation and sitemap updates.
 * - AdminNavigationSitemapSuggestionsInput - The input type for the adminNavigationSitemapSuggestions function.
 * - AdminNavigationSitemapSuggestionsOutput - The return type for the adminNavigationSitemapSuggestions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AdminNavigationSitemapSuggestionsInputSchema = z.object({
  existingPages: z.array(
    z.object({
      path: z.string().describe('The URL path of the existing page (e.g., /safaris/luxury-serengeti).'),
      title: z.string().describe('The title of the existing page (e.g., Luxury Serengeti Safari).'),
      category: z.string().optional().describe('The category or section the page belongs to (e.g., safaris, destinations, blog).'),
      lastUpdated: z.string().optional().describe('Timestamp of last update in ISO string format.'),
      tags: z.array(z.string()).optional().describe('Keywords or tags associated with the page.'),
      isPublished: z.boolean().optional().describe('Whether the page is currently published and publicly visible.'),
    })
  ).describe('A list of currently existing pages and their metadata.'),
  newOrUpdatedPages: z.array(
    z.object({
      path: z.string().describe('The URL path of the new or updated page (e.g., /blog/packing-list).'),
      title: z.string().describe('The title of the new or updated page (e.g., Essential Safari Packing List).'),
      category: z.string().optional().describe('The category or section the page belongs to (e.g., safaris, destinations, blog).'),
      lastUpdated: z.string().optional().describe('Timestamp of last update in ISO string format.'),
      tags: z.array(z.string()).optional().describe('Keywords or tags associated with the page.'),
      isPublished: z.boolean().optional().describe('Whether the page is currently published and publicly visible.'),
    })
  ).describe('A list of newly added or recently updated pages and their metadata.'),
});
export type AdminNavigationSitemapSuggestionsInput = z.infer<typeof AdminNavigationSitemapSuggestionsInputSchema>;

const AdminNavigationSitemapSuggestionsOutputSchema = z.object({
  navigationSuggestions: z.array(
    z.object({
      action: z.enum(['add', 'update', 'remove']).describe('Action to perform: add, update, or remove a navigation item.'),
      path: z.string().describe('The URL path of the page associated with the navigation item.'),
      title: z.string().optional().describe('The suggested title for the navigation item.'),
      parent: z.string().optional().describe('The path of the parent navigation item, if it\'s a sub-menu item (e.g., /destinations for /destinations/serengeti).'),
      type: z.enum(['primary', 'footer', 'mega-menu', 'breadcrumb', 'internal-link']).optional().describe('The type of navigation (e.g., primary menu, footer, mega menu, breadcrumb, internal-link on a content page).'),
      reason: z.string().optional().describe('Explanation for the suggestion.'),
    })
  ).describe('Suggestions for updating the website navigation menu.'),
  sitemapSuggestions: z.array(
    z.object({
      action: z.enum(['add', 'remove']).describe('Action to perform: add or remove a sitemap entry.'),
      path: z.string().describe('The URL path for the sitemap entry.'),
      priority: z.number().min(0.0).max(1.0).optional().describe('Suggested sitemap priority (0.0 to 1.0, e.g., 0.8 for important pages).'),
      changefreq: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).optional().describe('Suggested change frequency for the sitemap entry.'),
      reason: z.string().optional().describe('Explanation for the suggestion.'),
    })
  ).describe('Suggestions for updating the website sitemap.'),
  reasoning: z.string().describe('A general explanation for the AI\'s overall suggestions.'),
});
export type AdminNavigationSitemapSuggestionsOutput = z.infer<typeof AdminNavigationSitemapSuggestionsOutputSchema>;

const prompt = ai.definePrompt({
  name: 'adminNavigationSitemapPrompt',
  input: { schema: AdminNavigationSitemapSuggestionsInputSchema },
  output: { schema: AdminNavigationSitemapSuggestionsOutputSchema },
  prompt: `You are an AI assistant specialized in website architecture, SEO, and user experience for luxury travel agencies. Your goal is to analyze existing and new/updated web pages for a Tanzania safari travel agency named "Serengeti Dreams" and provide comprehensive recommendations for updating the site's navigation menu and sitemap.

Consider the following:
-   **Logical Organization**: Group related pages together for intuitive user flow.
-   **User Discoverability**: Make it easy for users to find important information, especially popular safaris, destinations, and booking-related content.
-   **SEO Best Practices**: Ensure search engines can crawl and index new content effectively. Prioritize important pages.
-   **Luxury Travel Context**: Maintain a premium, elegant, and modern feel consistent with Serengeti Dreams' brand. Avoid clutter.
-   **Egypt-based agency**: Keep the core business of "Egypt-based experts for Tanzania Safaris" in mind when suggesting content and navigation.
-   **Specific Routes**: Consider typical routes like '/', '/destinations', '/safaris', '/trip-planner', '/about', '/contact', '/blog', '/reviews', '/policies/terms', '/policies/privacy', '/policies/cancellation', '/auth/login', '/auth/register', '/dashboard'. Admin routes are not for public navigation/sitemap.

**Existing Pages (for context)**:
{{{JSON.stringify existingPages}}}

**New or Updated Pages (focus your recommendations on these, and how they integrate with existing)**:
{{{JSON.stringify newOrUpdatedPages}}}

Based on this information, provide concrete suggestions for navigation and sitemap updates. For navigation, suggest 'add', 'update', or 'remove' actions, along with 'path', 'title', 'parent' (if applicable for sub-menus like mega menus), and 'type' (e.g., 'primary', 'footer', 'mega-menu', 'breadcrumb', or 'internal-link' for links within content). For the sitemap, suggest 'add' or 'remove' actions, along with 'path', 'priority', and 'changefreq'. Also, include a general 'reasoning' for your overall suggestions.

Ensure the output strictly adheres to the provided JSON schema. If no suggestions are needed, return empty arrays for 'navigationSuggestions' and 'sitemapSuggestions' and a reasoning stating so.`,
});

const adminNavigationSitemapSuggestionsFlow = ai.defineFlow(
  {
    name: 'adminNavigationSitemapSuggestionsFlow',
    inputSchema: AdminNavigationSitemapSuggestionsInputSchema,
    outputSchema: AdminNavigationSitemapSuggestionsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function adminNavigationSitemapSuggestions(
  input: AdminNavigationSitemapSuggestionsInput
): Promise<AdminNavigationSitemapSuggestionsOutput> {
  return adminNavigationSitemapSuggestionsFlow(input);
}
