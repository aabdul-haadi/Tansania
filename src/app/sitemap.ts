import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo-config';
import { initializeFirebase } from '@/firebase/setup';
import { collection, getDocs, query, where } from 'firebase/firestore';

/**
 * Dynamically generates the sitemap by combining static routes 
 * with dynamic content from the Firestore registry (Packages & Blogs).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { firestore } = initializeFirebase();
  
  // 1. Define Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/safaris',
    '/blog',
    '/national-parks',
    '/destinations',
    '/trip-planner',
    '/trip-advisor',
    '/reise-shop',
    '/partner',
    '/karriere',
    '/legal/imprint',
    '/legal/terms',
    '/legal/privacy',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  let packageRoutes: any[] = [];
  let blogRoutes: any[] = [];

  if (firestore) {
    try {
      // 2. Fetch All Published Packages
      const pkgsSnap = await getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true)));
      packageRoutes = pkgsSnap.docs.map((doc) => ({
        url: `${siteConfig.url}/safaris/${doc.data().slug}`,
        lastModified: new Date(doc.data().updatedAt?.seconds * 1000 || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }));

      // 3. Fetch All Published Blog Posts
      const blogsSnap = await getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED')));
      blogRoutes = blogsSnap.docs.map((doc) => ({
        url: `${siteConfig.url}/blog/${doc.data().slug}`,
        lastModified: new Date(doc.data().updatedAt?.seconds * 1000 || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
    } catch (e) {
      console.warn("Sitemap generation had limited data access:", e);
    }
  }

  return [...staticRoutes, ...packageRoutes, ...blogRoutes];
}
