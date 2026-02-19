
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
  Bookmark, 
  MessageCircle, 
  ChevronRight,
  Sparkles,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import { useDoc, useFirestore, useMemoFirebase, useCollection } from '@/firebase';
import { doc, collection, query, where, limit } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BlogSidebar } from '@/components/blog/BlogSidebar';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const docRef = useMemoFirebase(() => (firestore && slug ? doc(firestore, 'blogPosts', slug as string) : null), [firestore, slug]);
  const { data: post, isLoading } = useDoc(docRef);

  // Fetch recent posts for the sidebar
  const recentQuery = useMemoFirebase(() => (firestore ? query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(3)) : null), [firestore]);
  const { data: recentPosts } = useCollection(recentQuery);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Opening the Journal...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl font-headline font-bold mb-4">Story Not Found</h2>
        <p className="text-muted-foreground mb-8">This part of the savannah seems to be unexplored.</p>
        <Button asChild rounded-full px-8 h-12>
          <Link href="/blog">Back to Journal</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />

      {/* Immersive Header */}
      <header className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-end pb-20">
        <Image
          src={post.coverImage || 'https://picsum.photos/seed/safari/1920/1080'}
          alt={post.title}
          fill
          priority
          className="object-cover"
          data-ai-hint="safari landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/20" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Badge className="bg-primary text-secondary border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {post.authorName}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              <span className="hidden md:flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> 0 Comments</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Article Content */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-border/50 relative">
              {/* Sticky Social Share (Desktop) */}
              <div className="hidden xl:flex flex-col gap-4 absolute -left-20 top-16">
                {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Real Content Mockup */}
              <div className="prose prose-xl max-w-none prose-headings:font-headline prose-headings:font-bold prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-secondary prose-a:text-primary hover:prose-a:underline">
                <p className="text-2xl md:text-3xl font-light text-secondary italic mb-12 border-l-4 border-primary pl-8 py-2 leading-relaxed">
                  "{post.excerpt}"
                </p>

                {/* This is where post.contentMarkdown would be rendered */}
                <div className="whitespace-pre-wrap leading-relaxed space-y-8">
                  {post.contentMarkdown || "No content available for this post."}
                </div>

                <div className="mt-16 pt-8 border-t border-muted flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {post.authorName?.[0] || 'A'}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Written By</p>
                      <p className="font-headline font-bold text-lg">{post.authorName}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="rounded-xl h-11 px-6 gap-2">
                      <Bookmark className="w-4 h-4" /> Save Article
                    </Button>
                    <Button className="rounded-xl h-11 px-6 gap-2 bg-secondary text-white">
                      <Share2 className="w-4 h-4" /> Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline text-3xl font-bold">Related Stories</h3>
                <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
                  View Journal <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts?.slice(0, 2).map((rp) => (
                  <div key={rp.id} className="group cursor-pointer">
                    <div className="aspect-video rounded-3xl overflow-hidden mb-4 bg-muted relative">
                      <img src={rp.coverImage || 'https://picsum.photos/seed/rel/600/400'} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{rp.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <BlogSidebar recentPosts={recentPosts || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
