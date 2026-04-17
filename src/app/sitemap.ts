import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo-config';
import { initializeFirebase } from '@/firebase/setup';
import { collection, getDocs, query, where } from 'firebase/firestore';

/**
 * Dynamically generates the sitemap by combining static routes 
 * with dynamic content from the Firestore registry (Packages, Blogs, Destinations, & CMS Pages).
 * Supports the 500+ page ecosystem scalability.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { firestore } = initializeFirebase();
  
  // 1. Define Static Core Routes
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
    '/fam-trip',
    '/neujahrsreisen-tansania-2026',
    '/sommerreisen-abenteuer-und-erholung-2026',
    '/weihnachten-reisen-tansania-2026',
    '/legal/imprint',
    '/legal/terms',
    '/legal/privacy',
    '/legal/directive',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  let packageRoutes: MetadataRoute.Sitemap = [];
  let blogRoutes: MetadataRoute.Sitemap = [];
  let destinationRoutes: MetadataRoute.Sitemap = [];
  let cmsPageRoutes: MetadataRoute.Sitemap = [];

  if (firestore) {
    try {
      // 2. Fetch All Published Safari Packages (100+ Slugs)
      const pkgsSnap = await getDocs(query(collection(firestore, 'packages'), where('isPublished', '==', true)));
      packageRoutes = pkgsSnap.docs.map((doc) => {
        const data = doc.data();
        return {
          url: `${siteConfig.url}/safaris/${data.slug}`,
          lastModified: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        };
      });

      // 3. Fetch All Published Blog Posts (100+ Stories)
      const blogsSnap = await getDocs(query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED')));
      blogRoutes = blogsSnap.docs.map((doc) => {
        const data = doc.data();
        return {
          url: `${siteConfig.url}/blog/${data.slug}`,
          lastModified: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        };
      });

      // 4. Fetch All Published Country Hubs (8 Countries + Regions)
      const destsSnap = await getDocs(query(collection(firestore, 'destinations'), where('isPublished', '==', true)));
      destinationRoutes = destsSnap.docs.map((doc) => {
        const data = doc.data();
        return {
          url: `${siteConfig.url}/destinations/${data.slug}`,
          lastModified: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        };
      });

      // 5. Fetch CMS Managed Pages
      const pagesSnap = await getDocs(query(collection(firestore, 'pages'), where('status', '==', 'PUBLISHED')));
      cmsPageRoutes = pagesSnap.docs
        .filter(doc => doc.data().path && doc.data().path !== '/') // Avoid duplicates of static routes
        .map((doc) => {
          const data = doc.data();
          return {
            url: `${siteConfig.url}${data.path.startsWith('/') ? data.path : '/' + data.path}`,
            lastModified: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          };
        });

    } catch (e) {
      console.warn("Sitemap generation had limited data access due to sync delays:", e);
    }
  }

  return [
    ...staticRoutes, 
    ...packageRoutes, 
    ...blogRoutes, 
    ...destinationRoutes, 
    ...cmsPageRoutes
  ];
}
