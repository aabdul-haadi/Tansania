
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Compass, LayoutGrid, Sparkles, ArrowRight, Zap, MapPin, Phone, MessageSquare, Headphones } from 'lucide-react';
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
      {/* COMPACT DARK HERO */}
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
            <h1 className="text-white uppercase leading-none tracking-tighter text-3xl md:text-6xl lg:text-7xl">
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

      {/* TAILOR-MADE EXPEDITION MOSAIC SECTION - RECALIBRATED 100% RESPONSIVE */}
      <section className="bg-white border-t border-border/40 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Tile 1: Strategy Hub (Top Left) */}
          <div className="bg-[#141414] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center space-y-8 md:space-y-10 min-h-[450px] order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight">
                Individuelle <br /> <span className="text-primary">Expedition</span>
              </h2>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/60 max-w-sm mx-auto">
                Sie finden nicht das passende Paket? Unsere Experten entwerfen Ihre Route von Grund auf neu.
              </p>
            </motion.div>
            
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Link href="/trip-planner">
                <Button className="w-full h-12 md:h-14 rounded-xl bg-primary text-white hover:bg-white hover:text-secondary font-black text-[10px] uppercase tracking-widest border-none transition-all shadow-2xl">
                  IHRE ROUTE PLANEN
                </Button>
              </Link>
              <Link href="/trip-advisor">
                <Button variant="outline" className="w-full h-12 md:h-14 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 font-black text-[10px] uppercase tracking-widest transition-all">
                  AI CONCIERGE FRAGEN <Sparkles className="w-3.5 h-3.5 ml-2 text-primary" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Tile 2: Guide Image (Top Right) */}
          <div className="relative aspect-video md:aspect-auto min-h-[350px] md:min-h-full overflow-hidden order-2">
            <Image 
              src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200"
              alt="Safari Expert Guide"
              fill
              className="object-cover"
              data-ai-hint="safari guide"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-white text-[10px] font-black uppercase tracking-widest">Expert Care Registry</span>
            </div>
          </div>

          {/* Tile 3: Expert Contact Hub (Bottom Left / Stacks after Balloon on Desktop) */}
          <div className="bg-[#FDF7F2] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center space-y-10 min-h-[450px] order-4 md:order-3 border-t border-border/40">
            <div className="space-y-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                <div className="absolute inset-0 bg-[#C9A876]/20 rounded-full transform rotate-6 scale-110" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img src="https://picsum.photos/seed/expert-maria/200/200" alt="Travel Specialist" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg" title="Expert Online" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tighter">Persönlicher Kontakt</h3>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Unsere Spezialisten sind jetzt für Sie da</p>
              </div>
            </div>

            <div className="space-y-3 w-full max-w-xs">
              <a href="tel:+493022608080" className="flex items-center gap-4 p-4 bg-secondary text-white rounded-xl shadow-xl hover:bg-primary transition-all group overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 relative z-10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left relative z-10">
                  <p className="text-[7px] font-black uppercase opacity-60">DIREKTVERBINDUNG BERLIN</p>
                  <p className="text-xs font-black tracking-tight">+49 30 22608080</p>
                </div>
              </a>
              <Link href="/contact" className="block text-[9px] font-black uppercase tracking-widest text-secondary/40 hover:text-primary transition-colors py-2">
                KONTAKTWEGE ANSEHEN
              </Link>
            </div>
          </div>

          {/* Tile 4: Balloon Image (Bottom Right / Stacks before Contact on Desktop) */}
          <div className="relative aspect-video md:aspect-auto min-h-[350px] md:min-h-full overflow-hidden order-3 md:order-4 border-t border-border/40">
            <Image 
              src="https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=1200"
              alt="Safari Balloon Over Serengeti"
              fill
              className="object-cover"
              data-ai-hint="safari balloon"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
              <div className="p-6 md:p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] max-w-xs shadow-2xl">
                <p className="text-white font-headline text-lg md:text-2xl uppercase tracking-tight leading-tight">
                  "Der Traum beginnt dort, wo die Planung endet."
                </p>
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
