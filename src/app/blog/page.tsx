
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, LayoutGrid, Search } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const SEED_POSTS = [
  {
    id: 'luxus-safari-15-tage',
    slug: 'luxus-safari-tansania-15-tage',
    title: 'Luxus-Safari in Tansania: 15 Tage Abenteuer & Sansibar-Luxus',
    excerpt: 'Erlebe das Beste aus zwei Welten! Atemberaubende Tierbegegnungen in der Serengeti und tropische Entspannung auf Sansibar.',
    category: 'Guides',
    authorName: 'Samson Kyashama',
    createdAt: new Date().toISOString(),
    coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
  },
  {
    id: 'wildebeest-migration',
    slug: 'wildebeest-migration-insights',
    title: 'Wildebeest Migration Insights: Tipps für deine Safari',
    excerpt: 'Verstehen Sie die Rhythmen der Natur. Ein tiefer Einblick in das größte Spektakel der Serengeti.',
    category: 'Planning',
    authorName: 'Tansania Reiseabenteuer Expert',
    createdAt: new Date().toISOString(),
    coverImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200'
  }
];

const categories = ['Alle', 'Planung', 'Guides', 'Tipps', 'Kultur'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = SEED_POSTS.filter(p => {
    const matchesCat = activeCategory === 'Alle' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* COMPACT DARK HERO */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-[0.4em] mb-6"
              >
                <Compass className="w-3.5 h-3.5" /> Journal Registry
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white uppercase"
              >
                Vom Nil zur <br /><span className="text-primary">Savanne</span>
              </motion.h1>
            </div>
            
            <div className="w-full md:w-auto space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Thema suchen..." 
                  className="h-12 pl-11 pr-6 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 font-bold text-[10px] uppercase tracking-widest w-full md:w-80"
                  suppressHydrationWarning
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-16">
            {filteredPosts.length === 0 ? (
              <div className="py-40 text-center border-2 border-dashed rounded-[3rem] bg-muted/20">
                <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
                <h3 className="text-secondary uppercase">Registry Empty</h3>
                <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2 tracking-widest">Keine Berichte gefunden.</p>
              </div>
            ) : (
              filteredPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} featured={idx === 0 && !search && activeCategory === 'Alle'} />
              ))
            )}
          </div>
          <aside className="lg:col-span-4">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
