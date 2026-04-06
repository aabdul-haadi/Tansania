/**
 * @fileOverview Centralized SEO configuration for Tansania Reiseabenteuer.
 * Acts as the single source of truth for site-wide metadata and canonicals.
 */

export const siteConfig = {
  name: 'Tansania Reiseabenteuer',
  shortName: 'TansaniaReise',
  description: 'Ihr Experte für exklusive Safari-Erlebnisse und Traumurlaube in Tansania und Sansibar. Persönlich geplant, individuell gestaltet.',
  url: 'https://www.tansania-reiseabenteuer.de', // Replace with your production domain
  ogImage: 'https://www.tansania-reiseabenteuer.de/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/tansaniareisen',
    facebook: 'https://facebook.com/tansaniareisen',
    instagram: 'https://instagram.com/tansaniareisen',
  },
  author: 'Tansania Reiseabenteuer SDL',
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
