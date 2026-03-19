"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, LayoutGrid, Search, Loader2 } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { cn } from '@/lib/utils';

const categories = ['Alle', 'Planung', 'Guides', 'Tipps', 'Kultur'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);
  const firestore = useFirestore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const blogQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'blogPosts'),
      where('status', '==', 'PUBLISHED'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore]);

  const { data: blogPosts, isLoading } = useCollection(blogQuery);

  const filteredPosts = (blogPosts || []).filter(p => {
    const matchesCat = activeCategory === 'Alle' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Cinematic Header */}
      <section className="bg-secondary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-6"
              >
                <Compass className="w-3.5 h-3.5" /> Expeditions-Journal
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold leading-none text-white uppercase tracking-tighter"
              >
                Geschichten vom <br /><span className="text-primary">Nil zur Savanne</span>
              </motion.h1>
            </div>
            
            <div className="w-full md:w-auto space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Thema suchen..." 
                  className="h-12 pl-11 pr-6 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 font-bold text-[10px] uppercase tracking-widest w-full md:w-80 focus:ring-primary/30"
                  suppressHydrationWarning
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    suppressHydrationWarning
                    className={cn(
                      "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
                      activeCategory === cat 
                        ? "bg-primary text-white border-primary shadow-lg" 
                        : "bg-white/5 text-white/40 border-white/10 hover:border-primary/30"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-32">
        {!mounted || isLoading ? (
          <div className="py-40 text-center"><Loader2 className="w-10 h-10 animate-spin mx-auto text-primary opacity-20" /></div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-40 text-center border-2 border-dashed rounded-[3rem] bg-muted/20">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <h3 className="text-2xl font-headline font-bold text-secondary uppercase tracking-tight">Das Journal ist bereit.</h3>
            <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2">Warten auf den ersten Bericht aus der Savanne.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-8 space-y-16">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} featured={idx === 0 && !search && activeCategory === 'Alle'} />
              ))}
            </div>
            <aside className="lg:col-span-4">
              <BlogSidebar />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}