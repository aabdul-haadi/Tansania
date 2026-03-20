"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Share2, 
  ChevronRight,
  Zap,
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  CheckCircle2,
  Bookmark,
  Loader2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { BlogContactForm } from '@/components/blog/BlogContactForm';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { getCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { JsonLd } from '@/components/seo/JsonLd';

/**
 * GENERATE METADATA (SERVER-SIDE SEO)
 * Note: While this is a 'use client' file, Next.js allows generateMetadata 
 * in the same file if exported. For best results in complex apps, 
 * metadata is often moved to a server-side layout or separate page file.
 */
export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const { firestore } = (await import('@/firebase/setup')).initializeFirebase();
  
  if (!firestore) return {};

  const q = query(collection(firestore, 'blogPosts'), where('slug', '==', slug), limit(1));
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

export default function BlogPostDetail() {
  const { slug } = useParams();
  const firestore = useFirestore();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [mounted, setMounted] = useState(false);

  const postQuery = useMemoFirebase(() => {
    if (!firestore || !slug) return null;
    return query(collection(firestore, 'blogPosts'), where('slug', '==', slug), limit(1));
  }, [firestore, slug]);

  const { data: posts, isLoading } = useCollection(postQuery);
  const post = posts?.[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!post && mounted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#fdfcfb]">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tighter text-secondary">Story Offline</h2>
        <p className="text-muted-foreground mb-8 font-bold uppercase tracking-widest text-[10px]">Dieser Teil der Savanne scheint noch unerforscht zu sein.</p>
        <Button asChild className="rounded-full px-10 h-14 font-black uppercase tracking-widest shadow-xl border-none">
          <Link href="/blog">Zurück zum Journal</Link>
        </Button>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
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
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left" style={{ scaleX }} />

      {/* Cinematic Header */}
      <header className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden flex items-end pb-12 md:pb-24 bg-secondary">
        <Image
          src={post.coverImage || 'https://picsum.photos/seed/safari/1920/1080'}
          alt={post.title}
          fill
          priority
          className="object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/20 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10"
          >
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary border border-white/10 transition-all">
                <Link href="/blog"><ArrowLeft className="w-5 h-5" /></Link>
              </Button>
              <Badge className="bg-primary text-white border-none px-6 py-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.9] drop-shadow-2xl uppercase tracking-tighter max-w-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/90">
              <span className="flex items-center gap-3"><User className="w-4 h-4 text-primary" /> {post.authorName}</span>
              <span className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" /> 
                {new Date(post.createdAt).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
              <div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Zap className="w-4 h-4 text-primary fill-primary" />
                <span>Signature Insight</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article Body */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 md:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <main className="lg:col-span-8">
            <article className="bg-white rounded-[3rem] p-8 md:p-20 shadow-sm border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none">
                <Sparkles className="w-80 h-80 text-secondary" />
              </div>

              <div className="relative mb-16 md:mb-24">
                <p className="text-xl md:text-4xl font-bold text-secondary leading-tight uppercase tracking-tighter border-l-8 border-primary pl-10">
                  {post.excerpt}
                </p>
              </div>

              <div className="prose prose-xl max-w-none space-y-12">
                <div className="whitespace-pre-wrap leading-[1.8] text-sm md:text-xl font-bold text-muted-foreground uppercase tracking-tight text-justify">
                  {post.contentMarkdown}
                </div>
              </div>

              {/* Author & Share */}
              <div className="mt-20 pt-12 border-t border-muted flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-primary/10 flex items-center justify-center font-headline font-black text-3xl text-primary shadow-inner">
                    {post.authorName?.[0]}
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-1">Lead Strategist</p>
                    <p className="font-headline font-bold text-xl md:text-3xl text-secondary uppercase tracking-tighter">{post.authorName}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-muted/30 flex items-center justify-center hover:bg-primary transition-all group">
                      <Icon className="w-5 h-5 text-secondary group-hover:text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </main>

          <aside className="lg:col-span-4 relative">
            <BlogSidebar />
          </aside>
        </div>
      </div>

      {/* Standard Inquiry Form */}
      <BlogContactForm />
    </div>
  );
}
