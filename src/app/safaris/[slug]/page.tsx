import React from 'react';
import { notFound } from 'next/navigation';
import { initializeFirebase } from '@/firebase/setup';
import { doc, getDoc } from 'firebase/firestore';
import { getCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { JsonLd } from '@/components/seo/JsonLd';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const { firestore } = initializeFirebase();
  
  if (!firestore) return { title: 'Registry Offline' };

  const docRef = doc(firestore, 'packages', slug);
  const snap = await getDoc(docRef);
  const pkg = snap.data();

  if (!pkg) return { title: 'Package Not Found' };

  return {
    title: `${pkg.title} | Tanzania Safari`,
    description: pkg.description?.slice(0, 160),
    alternates: {
      canonical: `/safaris/${slug}`,
    },
    openGraph: {
      title: pkg.title,
      description: pkg.description?.slice(0, 160),
      url: getCanonicalUrl(`/safaris/${slug}`),
      images: [{ url: pkg.imageUrl || siteConfig.ogImage }],
    },
  };
}

export default async function PackageDetailPage({ params }: any) {
  const { slug } = await params;
  const { firestore } = initializeFirebase();
  
  if (!firestore) return <div className="p-20 text-center uppercase font-bold">Connecting to Safari Catalog...</div>;

  const docRef = doc(firestore, 'packages', slug);
  const snap = await getDoc(docRef);
  
  if (!snap.exists()) {
    notFound();
  }

  const data = snap.data();
  
  // CRITICAL: Ensure object is plain and serializable for client component transition.
  // Firestore Timestamps must be converted to strings.
  const pkg = {
    ...data,
    id: snap.id,
    updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : data.updatedAt,
    createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt,
  };

  return (
    <>
      <JsonLd 
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: pkg.title,
          description: pkg.description,
          image: pkg.imageUrl,
          brand: { '@type': 'Brand', name: siteConfig.name },
          offers: {
            '@type': 'Offer',
            price: pkg.startingPrice,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: getCanonicalUrl(`/safaris/${pkg.slug}`),
          },
        }}
      />
      <PackageDetailClient pkg={pkg} />
    </>
  );
}
