
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Compass, LayoutGrid, Sparkles, ArrowRight, Zap, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SafarisPage() {
  const firestore = useFirestore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const filteredPackages = (packages || []).filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = ['All', 'Signature', 'Expedition', 'Wildlife', 'Honeymoon'];

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* COMPACT DARK HERO: Savannen-Kollektion Protocol */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Savannah Collection" 
            fill 
            priority 
            className="object-cover brightness-[0.35] scale-105"
            data-ai-hint="serengeti safari"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-white uppercase leading-none tracking-tighter text-3xl md:text-6xl lg:text-7xl whitespace-nowrap">
              Savannen-Kollektion
            </h1>
            <p className="max-w-xl mx-auto text-white/60 font-bold text-[9px] md:text-sm uppercase tracking-widest leading-relaxed">
              Entdecken Sie handverlesene Safaris und exklusive Routen durch Tansanias unendliche Weite.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative group pt-4"
          >
            <Search className="absolute left-6 top-[calc(50%+8px)] -translate-y-1/2 w-4 h-4 text-white/40 transition-colors group-focus-within:text-primary" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Region oder Tierart suchen..." 
              className="h-12 md:h-14 pl-14 pr-6 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 font-bold text-[10px] md:text-xs uppercase tracking-widest backdrop-blur-md"
              suppressHydrationWarning
            />
          </motion.div>
        </div>
      </section>

      {/* Filter Stripe */}
      <div className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-7xl h-14 md:h-16 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border",
                activeCategory === cat 
                  ? "bg-secondary text-white border-secondary shadow-lg" 
                  : "text-muted-foreground border-transparent hover:border-border hover:bg-muted/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        {isLoading ? (
          <div className="py-40 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Syncing Catalog...</p>
          </div>
        ) : filteredPackages.length === 0 ? (
          <div className="py-40 text-center bg-white rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-border/50">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <h3 className="text-secondary uppercase">Keine Ergebnisse</h3>
            <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2 tracking-widest">Versuchen Sie es mit einem anderen Suchbegriff.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* CREATIVE CTA HUB: Individuelle Expedition Protocol */}
      <section className="py-12 md:py-32 bg-[#fdfcfb] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-border/50 overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
              {/* Visual Registry Column */}
              <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200"
                  alt="Individuelle Planung"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="safari planning"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-secondary/40" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white drop-shadow-md">
                    <p className="text-[8px] font-black uppercase tracking-[0.2em]">Strategy Registry</p>
                    <p className="text-sm font-bold uppercase">Bespoke Protocol</p>
                  </div>
                </div>
              </div>

              {/* Content Registry Column */}
              <div className="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
                    <Compass className="w-4 h-4" /> Personal Customization
                  </div>
                  <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase tracking-tighter leading-[0.9]">
                    INDIVIDUELLE <br /><span className="text-primary">EXPEDITION?</span>
                  </h2>
                  <p className="text-muted-foreground font-bold text-xs md:text-lg uppercase tracking-tight leading-relaxed max-w-xl opacity-80">
                    Sie finden nicht das passende Paket? Unsere Experten in Berlin entwerfen Ihre Route von Grund auf neu – synchronisiert mit Logistik und Wildlife-Events.
                  </p>
                </div>

                {/* Conversion Protocol Hub */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/trip-advisor" className="w-full sm:w-auto">
                    <Button size="xl" className="w-full h-13 md:h-16 rounded-xl bg-secondary text-white border-none shadow-2xl hover:bg-primary transition-all font-black text-[10px] tracking-[0.2em] group">
                      ASK AI ADVISOR <Sparkles className="w-4 h-4 ml-3" />
                    </Button>
                  </Link>
                  <Link href="#inquiry" className="w-full sm:w-auto">
                    <Button variant="outline" size="xl" className="w-full h-13 md:h-16 rounded-xl border-border hover:border-primary/20 hover:text-primary transition-all font-black text-[10px] tracking-[0.2em]">
                      EXPERTEN KONTAKTIEREN
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section Registry */}
      <section className="bg-white">
        <ContactSection />
      </section>
    </div>
  );
}
