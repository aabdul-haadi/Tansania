import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo-config';

/**
 * Configures the robots.txt file to manage search engine crawling.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/auth/',
          '/api/',
          '/*?*', // Block search/filter result strings if they create thin content
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
