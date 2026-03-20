/**
 * @fileOverview Centralized SEO configuration for Serengeti Dreams.
 * Acts as the single source of truth for site-wide metadata and canonicals.
 */

export const siteConfig = {
  name: 'Serengeti Dreams',
  shortName: 'SerengetiDreams',
  description: 'Expert Egypt-based travel agency specializing in luxury Tanzania safaris, Serengeti expeditions, and Zanzibar beach escapes.',
  url: 'https://www.tansania-reiseabenteuer.de', // Replace with your production domain
  ogImage: 'https://www.tansania-reiseabenteuer.de/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/serengetidreams',
    facebook: 'https://facebook.com/serengetidreams',
    instagram: 'https://instagram.com/serengetidreams',
  },
  author: 'Serengeti Dreams SDL',
  locale: 'de_DE',
};

/**
 * Generates a consistent canonical URL for any path.
 */
export function getCanonicalUrl(path: string = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Ensure no trailing slash for consistency
  const finalPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  return `${siteConfig.url}${finalPath}`;
}
