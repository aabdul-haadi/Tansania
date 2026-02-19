
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
  ChevronRight,
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  CheckCircle2,
  Zap
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const docRef = useMemoFirebase(() => (firestore && slug ? doc(firestore, 'blogPosts', slug as string) : null), [firestore, slug]);
  const { data: post, isLoading } = useDoc(docRef);

  // Automated Discovery: Fetch recent posts for the sidebar
  const recentQuery = useMemoFirebase(() => (firestore ? query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), limit(4)) : null), [firestore]);
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
        <p className="text-muted-foreground mb-8 italic">This part of the savannah seems to be unexplored.</p>
        <Button asChild className="rounded-full px-8 h-12">
          <Link href="/blog">Back to Journal</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Immersive Cinematic Header */}
      <header className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-end pb-12 md:pb-24">
        <Image
          src={post.coverImage || 'https://picsum.photos/seed/safari/1920/1080'}
          alt={post.title}
          fill
          priority
          className="object-cover"
          data-ai-hint="safari landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcfb] via-black/20 to-black/40" />
        
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
              <Badge className="bg-primary text-secondary border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
              <span className="flex items-center gap-2.5"><User className="w-4 h-4 text-primary" /> {post.authorName}</span>
              <span className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary" /> 
                {isMounted ? new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '...'}
              </span>
              <div className="hidden md:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
                <span>6 Min Read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Article Layout */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Content Column */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-[3rem] p-8 md:p-20 shadow-sm border border-border/50 relative overflow-hidden">
              {/* Subtle visual motif */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <Sparkles className="w-48 h-48 text-secondary" />
              </div>

              {/* Excerpt Block */}
              <div className="relative mb-16">
                <p className="text-2xl md:text-4xl font-light text-secondary italic leading-relaxed md:leading-[1.4]">
                  "{post.excerpt}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-grow bg-muted" />
                  <MapPin className="w-5 h-5 text-primary animate-pulse" />
                  <div className="h-px flex-grow bg-muted" />
                </div>
              </div>

              {/* Dynamic Body Content */}
              <div className="prose prose-xl max-w-none prose-headings:font-headline prose-headings:font-bold prose-headings:text-secondary prose-p:font-light prose-p:leading-[1.8] prose-p:text-muted-foreground prose-strong:text-secondary prose-a:text-primary hover:prose-a:underline">
                <div className="whitespace-pre-wrap leading-relaxed space-y-10 text-lg md:text-xl">
                  {post.contentMarkdown || "No content available for this post."}
                </div>
              </div>

              {/* Signature Best Practices / Expert Tips Section */}
              <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="font-headline text-2xl font-bold">Signature Safari Tips</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { t: "Sustainable Gear", d: "Pack reusable water bottles; most high-end camps provide filtered water stations." },
                      { t: "Digital Detox", d: "Download offline maps. Signal in the Serengeti is poetic but sparse." },
                      { t: "Local Connection", d: "Learn simple Swahili greetings. 'Jambo' goes a long way." },
                      { t: "Best Light", d: "Photography is best during the 'Golden Hour' (first hour after sunrise)." }
                    ].map((tip, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-sm mb-1">{tip.t}</p>
                          <p className="text-xs text-white/60 leading-relaxed font-light">{tip.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Meta */}
              <div className="mt-20 pt-10 border-t border-muted flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center font-headline font-bold text-2xl text-primary">
                    {post.authorName?.[0] || 'A'}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Expert Contributor</p>
                    <p className="font-headline font-bold text-xl text-secondary">{post.authorName}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Related Journeys (Automatic) */}
            <div className="mt-24">
              <div className="flex items-end justify-between mb-12">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Keep Exploring</span>
                  <h3 className="font-headline text-4xl font-bold text-secondary">More from the savannah</h3>
                </div>
                <Link href="/blog" className="hidden md:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:translate-x-2 transition-transform">
                  View All Journal <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts?.filter(p => p.id !== post.id).slice(0, 2).map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 bg-muted relative shadow-lg">
                      <img src={rp.coverImage || 'https://picsum.photos/seed/rel/600/400'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold uppercase tracking-widest">{rp.category}</Badge>
                      </div>
                    </div>
                    <h4 className="font-headline text-2xl font-bold leading-tight group-hover:text-primary transition-colors pr-8">{rp.title}</h4>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2 font-light leading-relaxed">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4">
            <BlogSidebar recentPosts={recentPosts || []} />
          </aside>
        </div>
      </div>
    </div>
  );
}
