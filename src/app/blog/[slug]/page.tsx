import React from 'react';
import { notFound } from 'next/navigation';
import { initializeFirebase } from '@/firebase/setup';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { getCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { JsonLd } from '@/components/seo/JsonLd';
import { BlogPostClient } from '@/components/blog/BlogPostClient';

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const { firestore } = initializeFirebase();
  
  if (!firestore) return { title: 'Registry Offline' };

  // CRITICAL: Include security filter to satisfy Firestore rules
  const q = query(
    collection(firestore, 'blogPosts'), 
    where('slug', '==', slug), 
    where('status', '==', 'PUBLISHED'),
    limit(1)
  );
  const snap = await getDocs(q);
  const post = snap.docs[0]?.data();

  if (!post) return { title: 'Story Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: getCanonicalUrl(`/blog/${slug}`),
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.authorName],
      images: [
        {
          url: post.coverImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;
  const { firestore } = initializeFirebase();
  
  if (!firestore) return <div className="p-20 text-center uppercase font-bold">Registry Connection Pending...</div>;

  // CRITICAL: Explicitly filter for PUBLISHED status to satisfy security rules
  const q = query(
    collection(firestore, 'blogPosts'), 
    where('slug', '==', slug), 
    where('status', '==', 'PUBLISHED'),
    limit(1)
  );
  const snap = await getDocs(q);
  
  if (snap.empty) {
    notFound();
  }

  const postData = snap.docs[0].data();
  const post = {
    ...postData,
    id: snap.docs[0].id,
    createdAt: postData.createdAt?.toDate ? postData.createdAt.toDate().toISOString() : postData.createdAt
  };

  return (
    <>
      <JsonLd 
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage || siteConfig.ogImage,
          datePublished: post.createdAt,
          author: {
            '@type': 'Person',
            name: post.authorName,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/logo.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': getCanonicalUrl(`/blog/${post.slug}`),
          },
        }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
