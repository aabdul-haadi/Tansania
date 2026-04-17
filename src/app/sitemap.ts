import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo-config';
import { initializeFirebase } from '@/firebase/setup';
import { collection, getDocs, query, where } from 'firebase/firestore';

/**
 * Dynamically generates the sitemap by combining static routes 
 * with dynamic content from the Firestore registry.
 * Supports the 500+ page ecosystem scalability.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { firestore } = initializeFirebase();
  
  // 1. Define All Static & Semi-Static Core Routes
  const staticRoutes = [
    '',
    '/about',
    '/safaris',
    '/blog',
    '/national-parks',
    '/national-parks/serengeti',
    '/national-parks/ngorongoro',
    '/national-parks/kilimanjaro',
    '/national-parks/tarangire',
    '/national-parks/manyara',
    '/national-parks/arusha',
    '/national-parks/saadani',
    '/destinations',
    '/destinations/tanzania',
    '/destinations/zanzibar',
    '/destinations/kenya',
    '/destinations/egypt',
    '/destinations/egypt/12-tage-luxus-aegypten',
    '/destinations/egypt/klassisches-aegypten-8-tage-7-naechte',
    '/trip-planner',
    '/trip-advisor',
    '/activities',
    '/unterkuenfte',
    '/reise-shop',
    '/partner',
    '/karriere',
    '/fam-trip',
    '/migration',
    '/neujahrsreisen-tansania-2026',
    '/sommerreisen-abenteuer-und-erholung-2026',
    '/weihnachten-reisen-tansania-2026',
    '/ostern-safari-urlaub-2026',
    '/angebot/14-tage-kenia-safari',
    '/legal/imprint',
    '/legal/terms',
    '/legal/privacy',
    '/legal/directive',
  ].map((route) => {
    // Higher priority for campaign and core hub pages
    let priority = 0.8;
    if (route === '') priority = 1.0;
    if (route.includes('reisen-tansania') || route.includes('safari-urlaub')) priority = 0.9;
    if (route.startsWith('/national-parks/')) priority = 0.85;

    return {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' || route.includes('2026')) ? 'daily' as const : 'weekly' as const,
      priority,
    };
  });

  let packageRoutes: MetadataRoute.Sitemap = [];
  let blogRoutes: MetadataRoute.Sitemap = [];
  let destinationRoutes: MetadataRoute.Sitemap = [];
  let cmsPageRoutes: MetadataRoute.Sitemap = [];

  if (firestore) {
    try {
      // 2. Fetch All Published Safari Packages (Dynamic)
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

      // 3. Fetch All Published Blog Posts (Dynamic)
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

      // 4. Fetch All Published Destinations (Dynamic)
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

      // 5. Fetch CMS Managed Pages (Dynamic)
      const pagesSnap = await getDocs(query(collection(firestore, 'pages'), where('status', '==', 'PUBLISHED')));
      cmsPageRoutes = pagesSnap.docs
        .filter(doc => {
          const data = doc.data();
          // Filter out pages already covered by static list or those without valid paths
          return data.path && data.path !== '/' && !staticRoutes.some(sr => sr.url.endsWith(data.path));
        })
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
      console.warn("Sitemap generation sync delayed:", e);
    }
  }

  // Combine and de-duplicate by URL
  const allRoutes = [...staticRoutes, ...packageRoutes, ...blogRoutes, ...destinationRoutes, ...cmsPageRoutes];
  const uniqueRoutes = Array.from(new Map(allRoutes.map(item => [item.url, item])).values());

  return uniqueRoutes;
}
