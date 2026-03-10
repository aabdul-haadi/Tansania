
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2,
  Search,
  Zap,
  CloudSun,
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/sections/ContactSection';
import { cn } from '@/lib/utils';

// Enable ISR for this route
export const revalidate = 60;

export default function SafarisPage() {
  const firestore = useFirestore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const filteredPackages = packages?.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.highlights?.some((h: string) => h.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  }) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* Dynamic Header */}
      <section className="bg-white pt-32 pb-16 relative overflow-hidden border-b">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Intelligente Empfehlungen
              </motion.div>
              <h1 className="font-headline text-4xl md:text-7xl font-bold text-secondary leading-tight uppercase tracking-tighter">
                Entdecken Sie unsere <br /><span className="text-primary">Savannen-Kollektion</span>
              </h1>
            </div>
            
            <div className="w-full lg:w-96 space-y-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nach Tieren oder Regionen filtern..." 
                  className="h-14 pl-12 rounded-xl bg-muted/20 border-none text-secondary placeholder:text-muted-foreground focus:ring-primary/20 font-bold" 
                />
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-muted-foreground px-2">
                <span className="flex items-center gap-2"><CloudSun className="w-3 h-3 text-primary" /> Aktuell: Serengeti 28°C</span>
                <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-primary" /> Hochsaison</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Catalog */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap gap-2 mb-16">
          {['All', 'SAFARI & SANSIBAR', 'FLITTERWOCHEN', 'FAMILIENSAFARI', 'KILIMANDSCHARO SAFARI'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all border",
                activeCategory === cat 
                  ? "bg-secondary text-white border-secondary shadow-xl scale-105" 
                  : "bg-white text-muted-foreground border-border hover:border-primary/30"
              )}
            >
              {cat === 'SAFARI & SANSIBAR' ? 'Bush & Beach' : cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            Synchronisiere Katalog...
          </div>
        ) : filteredPackages.length === 0 ? (
          <div className="py-40 text-center bg-muted/20 rounded-[3rem] border-2 border-dashed border-muted">
            <LayoutGrid className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2 uppercase">Keine Expeditionen gefunden</h3>
            <p className="text-muted-foreground font-bold text-[10px] uppercase tracking-widest mb-8">Versuchen Sie andere Filter oder nutzen Sie unsere AI Beratung.</p>
            <Button variant="outline" onClick={() => { setActiveCategory('All'); setSearch(''); }} className="rounded-xl h-12 px-8 font-bold uppercase text-[10px]">Filter zurücksetzen</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg, idx) => (
                <motion.div 
                  key={pkg.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <PackageCard pkg={pkg} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      <ContactSection />
    </div>
  );
}
