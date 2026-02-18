'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating SEO and internal linking suggestions
 * based on the website's content, intended for an Admin user.
 *
 * - adminSeoAndLinkingSuggestions - A function that triggers the AI Planner for SEO suggestions.
 * - AdminSeoAndLinkingSuggestionsInput - The input type for the flow.
 * - AdminSeoAndLinkingSuggestionsOutput - The return type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BlogPostSchema = z.object({
  slug: z.string().describe('Unique identifier for the blog post.'),
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The main content of the blog post (can be truncated for brevity).'),
  excerpt: z.string().describe('A short summary of the blog post.'),
  keywords: z.array(z.string()).describe('Keywords associated with the blog post.'),
});

const PackageSchema = z.object({
  slug: z.string().describe('Unique identifier for the safari package.'),
  title: z.string().describe('The title of the safari package.'),
  description: z.string().describe('A brief description of the package.'),
  highlights: z.array(z.string()).describe('Key features or selling points of the package.'),
  destinationRefs: z.array(z.string()).describe('References to destinations included in the package.'),
  categories: z.array(z.string()).describe('Categories this package belongs to (e.g., honeymoon, family).'),
});

const AdminSeoAndLinkingSuggestionsInputSchema = z.object({
  blogPosts: z.array(BlogPostSchema).describe('A list of existing blog posts on the site.'),
  packages: z.array(PackageSchema).describe('A list of existing safari packages on the site.'),
});
export type AdminSeoAndLinkingSuggestionsInput = z.infer<typeof AdminSeoAndLinkingSuggestionsInputSchema>;

const InternalLinkSuggestionSchema = z.object({
  sourcePageSlug: z.string().describe('The slug of the page where the link should be added.'),
  targetPageSlug: z.string().describe('The slug of the page to which the link should point.'),
  suggestion: z.string().describe('A detailed suggestion for where and how to add the link.'),
  reason: z.string().describe('The SEO reason for this internal link suggestion.'),
  anchorText: z.string().describe('Suggested anchor text for the internal link.'),
});

const MetadataSuggestionSchema = z.object({
  pageSlug: z.string().describe('The slug of the page for which metadata is suggested.'),
  metadataType: z.enum(['title', 'description', 'og:title', 'og:description', 'og:image', 'twitter:title', 'twitter:description', 'twitter:image']).describe('The type of metadata being suggested (e.g., title, meta description, OpenGraph).'),
  suggestedValue: z.string().describe('The suggested value for the metadata field.'),
  reason: z.string().describe('The SEO reason for this metadata suggestion.'),
});

const AdminSeoAndLinkingSuggestionsOutputSchema = z.object({
  internalLinkSuggestions: z.array(InternalLinkSuggestionSchema).describe('A list of suggested internal links to improve site navigation and SEO.'),
  metadataSuggestions: z.array(MetadataSuggestionSchema).describe('A list of suggested metadata improvements for various pages.'),
});
export type AdminSeoAndLinkingSuggestionsOutput = z.infer<typeof AdminSeoAndLinkingSuggestionsOutputSchema>;

export async function adminSeoAndLinkingSuggestions(input: AdminSeoAndLinkingSuggestionsInput): Promise<AdminSeoAndLinkingSuggestionsOutput> {
  return adminSeoAndLinkingSuggestionsFlow(input);
}

const seoPrompt = ai.definePrompt({
  name: 'adminSeoAndLinkingSuggestionsPrompt',
  input: { schema: AdminSeoAndLinkingSuggestionsInputSchema },
  output: { schema: AdminSeoAndLinkingSuggestionsOutputSchema },
  prompt: `You are an expert SEO specialist for a luxury travel agency. Your task is to analyze the provided website content (blog posts and safari packages) and generate actionable suggestions for internal linking and metadata improvements.

### Instructions:
1.  **Analyze Content**: Carefully review the titles, contents, excerpts, keywords, descriptions, highlights, and categories of all provided blog posts and safari packages.
2.  **Internal Linking Suggestions**: Identify logical connections between different pieces of content (e.g., a blog post discussing "Best Time to Visit Serengeti" and a "Serengeti Safari Package"). Suggest where an internal link could be added, what the target page should be, the anchor text, and a brief SEO reason.
3.  **Metadata Suggestions**: For each blog post and package, suggest improvements or creations for their SEO metadata. Focus on title tags, meta descriptions, and OpenGraph tags (title, description, image if relevant). Ensure suggestions are compelling, keyword-rich where appropriate, and within typical character limits (e.g., titles ~60 chars, descriptions ~160 chars).

### Provided Website Content:

**Blog Posts:**
{{{json blogPosts}}}

**Safari Packages:**
{{{json packages}}}

---

Generate the suggestions strictly in the following JSON format:
`,
});

const adminSeoAndLinkingSuggestionsFlow = ai.defineFlow(
  {
    name: 'adminSeoAndLinkingSuggestionsFlow',
    inputSchema: AdminSeoAndLinkingSuggestionsInputSchema,
    outputSchema: AdminSeoAndLinkingSuggestionsOutputSchema,
  },
  async (input) => {
    const { output } = await seoPrompt(input);
    if (!output) {
      throw new Error('Failed to generate SEO and linking suggestions.');
    }
    return output;
  },
);
