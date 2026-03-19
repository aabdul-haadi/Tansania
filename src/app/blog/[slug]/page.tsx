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
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  CheckCircle2,
  Zap,
  Bookmark
} from 'lucide-react';
import { useFirestore, useMemoFirebase, useCollection } from '@/firebase';
import { collection, query, where, limit, orderBy } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { BlogContactForm } from '@/components/blog/BlogContactForm';

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

  const postQuery = useMemoFirebase(() => (
    firestore && slug ? query(collection(firestore, 'blogPosts'), where('slug', '==', slug as string), limit(1)) : null
  ), [firestore, slug]);
  
  const { data: posts, isLoading } = useCollection(postQuery);
  const post = posts?.[0];

  const recentQuery = useMemoFirebase(() => (
    firestore ? query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), orderBy('createdAt', 'desc'), limit(4)) : null
  ), [firestore]);
  const { data: recentPosts } = useCollection(recentQuery);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#fdfcfb]">
        <div className="w-12 h-12 rounded-xl border-4 border-primary border-t-transparent animate-spin shadow-xl" />
        <p className="text-[10px] uppercase font-black tracking-[0.4em] text-secondary">Synchronisiere Journal...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#fdfcfb]">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tighter">Story Nicht Gefunden</h2>
        <p className="text-muted-foreground mb-8 font-bold uppercase tracking-widest text-xs">Dieser Teil der Savanne scheint noch unerforscht zu sein.</p>
        <Button asChild className="rounded-full px-10 h-14 font-black uppercase tracking-widest shadow-xl">
          <Link href="/blog">Zurück zum Journal</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left" style={{ scaleX }} />

      {/* Modern Cinematic Header */}
      <header className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden flex items-end pb-12 md:pb-24 bg-secondary">
        <Image
          src={post.coverImage || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'}
          alt={post.title}
          fill
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcfb] via-black/20 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary border border-white/10 transition-all">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Badge className="bg-primary text-white border-none px-5 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white mb-4 leading-[1] drop-shadow-2xl uppercase tracking-tighter">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
              <span className="flex items-center gap-2.5"><User className="w-4 h-4 text-primary" /> {post.authorName}</span>
              <span className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary" /> 
                {isMounted && post.createdAt ? new Date(post.createdAt).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }) : '...'}
              </span>
              <div className="hidden md:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
                <span>Premium Insight</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Article Content */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <main className="lg:col-span-8">
            <article className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <Sparkles className="w-64 h-64 text-secondary" />
              </div>

              <div className="relative mb-12 md:mb-20">
                <p className="text-xl md:text-3xl font-bold text-secondary leading-tight uppercase tracking-tighter border-l-4 border-primary pl-8">
                  {post.excerpt}
                </p>
              </div>

              <div className="prose prose-xl max-w-none space-y-10">
                <div className="whitespace-pre-wrap leading-[1.8] text-sm md:text-lg font-bold text-muted-foreground uppercase tracking-tight">
                  {post.contentMarkdown || "Kein Inhalt für diesen Artikel verfügbar."}
                </div>
              </div>

              {/* Expert Tips Box */}
              <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden border-none shadow-2xl">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">Safari Experten-Tipps</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { t: "Beste Lichtverhältnisse", d: "Nutzen Sie die 'Golden Hour' direkt nach Sonnenaufgang für die spektakulärsten Fotos der Herden." },
                      { t: "Nachhaltiges Reisen", d: "Wir empfehlen die Nutzung von wiederverwendbaren Wasserflaschen – die meisten Camps bieten Filtersysteme." },
                      { t: "Lokale Etikette", d: "Ein 'Jambo' (Hallo) öffnet Türen. Lernen Sie einfache Swahili-Begrüßungen vorab." },
                      { t: "Ausrüstung", d: "Ein hochwertiges Fernglas ist der wichtigste Begleiter für Flussüberquerungen." }
                    ].map((tip, i) => (
                      <div key={i} className="flex gap-4 group">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-black text-[10px] md:text-xs mb-1 uppercase tracking-widest text-white">{tip.t}</p>
                          <p className="text-[9px] md:text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-widest">{tip.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-16 pt-10 border-t border-muted flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center font-headline font-black text-2xl text-primary shadow-inner">
                    {post.authorName?.[0] || 'S'}
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">Expeditions-Spezialist</p>
                    <p className="font-headline font-bold text-lg md:text-xl text-secondary uppercase tracking-tight">{post.authorName}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted/30 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Dynamic Recent Posts Component */}
            <div className="mt-20">
              <div className="flex items-end justify-between mb-10 md:mb-12">
                <div className="space-y-2">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Weiterlesen</span>
                  <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tighter">Mehr aus der Wildnis</h3>
                </div>
                <Link href="/blog" className="hidden md:flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-primary hover:translate-x-2 transition-transform">
                  Gesamtes Journal <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts?.filter(p => p.id !== post.id).slice(0, 2).map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 bg-muted relative shadow-lg">
                      <Image 
                        src={rp.coverImage || 'https://picsum.photos/seed/rel/600/400'} 
                        alt={rp.title} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest">{rp.category}</Badge>
                      </div>
                    </div>
                    <h4 className="font-headline text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors uppercase tracking-tight line-clamp-2">{rp.title}</h4>
                    <p className="mt-3 text-[9px] md:text-xs text-muted-foreground line-clamp-2 font-bold leading-relaxed uppercase tracking-widest">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          <aside className="lg:col-span-4 relative">
            <BlogSidebar recentPosts={recentPosts?.slice(0, 5) || []} />
          </aside>
        </div>
      </div>

      {/* Specific Requested Contact Form Integration */}
      <BlogContactForm />
    </div>
  );
}
