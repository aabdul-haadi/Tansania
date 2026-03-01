
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, LayoutGrid } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, where } from 'firebase/firestore';
import { Button } from '@/components/ui/button';

const categories = ['Alle', 'Planung', 'Guides', 'Tipps', 'Kultur'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const firestore = useFirestore();

  const blogQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'blogPosts'), where('status', '==', 'PUBLISHED'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: posts, isLoading } = useCollection(blogQuery);

  const filteredPosts = posts?.filter(p => activeCategory === 'Alle' || p.category === activeCategory) || [];
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="bg-background min-h-screen">
      {/* Top Header - Dark Section for Navbar Contrast */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4"
              >
                <Compass className="w-3.5 h-3.5" /> Expeditions-Journal
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-headline text-4xl md:text-7xl font-bold leading-tight text-white"
              >
                Geschichten vom <br /><span className="text-primary">Nil zur Savanne</span>
              </motion.h1>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    activeCategory === cat 
                      ? "bg-primary text-secondary border-primary shadow-lg scale-105" 
                      : "bg-white/5 text-white/60 border-white/10 hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        {isLoading ? (
          <div className="py-40 text-center flex flex-col items-center gap-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Journal wird synchronisiert...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-40 text-center border-2 border-dashed rounded-[3rem] bg-muted/20">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <h3 className="text-xl font-bold text-secondary">Keine Artikel gefunden.</h3>
            <Button variant="link" onClick={() => setActiveCategory('Alle')} className="text-primary">Alle Berichte anzeigen</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {activeCategory === 'Alle' && featuredPost && (
                <div className="mb-16">
                  <BlogCard post={featuredPost} featured />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(activeCategory === 'Alle' ? otherPosts : filteredPosts).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              <BlogSidebar recentPosts={posts?.slice(0, 3) || []} />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
