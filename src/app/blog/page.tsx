"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, LayoutGrid, Search } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// SYNCHRONIZED REGISTRY DATA
const blogPosts = [
  {
    id: 'luxus-safari-tansania-15-tage',
    slug: 'luxus-safari-tansania-15-tage',
    title: 'Luxus-Safari in Tansania: 15 Tage Abenteuer & Sansibar-Luxus ab 5.399 €',
    excerpt: 'Safari und Strand in einem – erlebe das Beste aus zwei Welten! Atemberaubende Tierbegegnungen, luxuriöse Lodges und tropische Strände.',
    category: 'Planung',
    authorName: 'Samson Kyashama',
    createdAt: '2024-08-30T09:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
  },
  {
    id: 'wildebeest-migration-insights',
    slug: 'wildebeest-migration-insights',
    title: 'Wildebeest Migration Insights: Tipps für deine Safari',
    excerpt: 'Erleben Sie das größte Naturschauspiel der Welt. Wir teilen exklusive Einblicke in die Routen und besten Beobachtungszeiten der Großen Tierwanderung.',
    category: 'Planung',
    authorName: 'Samson Kyashama',
    createdAt: '2024-08-26T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200'
  },
  {
    id: 'kalbung-in-ndutu',
    slug: 'kalbung-in-ndutu',
    title: 'Kalbung in Ndutu: Einmaliges Naturerlebnis',
    excerpt: 'Wenn tausende Jungtiere gleichzeitig das Licht der Welt erblicken, erwacht die Serengeti zu neuem Leben. Erfahren Sie mehr über die grüne Saison.',
    category: 'Wildnis',
    authorName: 'Maria Schmidt',
    createdAt: '2024-08-20T14:30:00Z',
    coverImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200'
  },
  {
    id: 'zanzibar-packing-guide',
    slug: 'zanzibar-packing-guide',
    title: 'Sansibar Packing Guide: Was in den Koffer muss',
    excerpt: 'Vom Busch an den Strand – unser ultimativer Guide für die perfekte Ausrüstung auf Ihrer Tansania-Reise.',
    category: 'Tipps',
    authorName: 'Sophie Meyer',
    createdAt: '2024-08-15T09:15:00Z',
    coverImage: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200'
  }
];

const categories = ['Alle', 'Planung', 'Guides', 'Tipps', 'Kultur'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [search, setSearch] = useState('');

  const filteredPosts = blogPosts.filter(p => {
    const matchesCat = activeCategory === 'Alle' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="bg-background min-h-screen">
      {/* Top Header - High Contrast Dark Section */}
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
            
            {/* Functional Interface */}
            <div className="w-full md:w-auto space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Thema suchen..." 
                  className="h-12 pl-11 pr-6 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 font-bold text-[10px] uppercase tracking-widest w-full md:w-80 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                      activeCategory === cat 
                        ? "bg-primary text-white border-primary shadow-lg scale-105" 
                        : "bg-white/5 text-white/40 border-white/10 hover:border-primary/30"
                    }`}
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
        {filteredPosts.length === 0 ? (
          <div className="py-40 text-center border-2 border-dashed rounded-[3rem] bg-muted/20">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <h3 className="text-2xl font-headline font-bold text-secondary uppercase tracking-tight">Keine Berichte gefunden.</h3>
            <Button variant="link" onClick={() => {setActiveCategory('Alle'); setSearch('');}} className="text-primary font-bold uppercase text-xs">Gesamtes Journal anzeigen</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-8 space-y-16">
              {activeCategory === 'Alle' && featuredPost && !search && (
                <BlogCard post={featuredPost} featured />
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {(activeCategory === 'Alle' && !search ? otherPosts : filteredPosts).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              <BlogSidebar recentPosts={blogPosts.slice(0, 4)} />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
