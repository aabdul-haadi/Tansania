"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Camera,
  Bird,
  Leaf,
  Coffee,
  Heart,
  Sparkles,
  LayoutGrid,
  Video,
  Sun,
  Timer,
  ChevronRight,
  Filter,
  Search,
  Zap,
  CloudSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/sections/ContactSection';

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
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Dynamic Header */}
      <section className="bg-secondary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Intelligent Recommendations
              </motion.div>
              <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight uppercase">
                Explore Our <span className="text-primary">Savannah Collections</span>
              </h1>
            </div>
            
            <div className="w-full lg:w-96 space-y-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-primary transition-colors" />
                <Input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter by wildlife or region..." 
                  className="h-14 pl-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:ring-primary/20" 
                />
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-white/40 px-2">
                <span className="flex items-center gap-2"><CloudSun className="w-3 h-3 text-primary" /> Current: Serengeti 28°C</span>
                <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-primary" /> Peak Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Catalog */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap gap-2 mb-16">
          {['All', 'SAFARI & SANSIBAR', 'FLITTERWOCHEN', 'FAMILIENSAFARI', 'KILIMANDSCHARO SAFARI'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all border",
                activeCategory === cat ? "bg-primary text-white border-primary shadow-xl" : "bg-white text-muted-foreground border-border hover:border-primary/30"
              )}
            >
              {cat === 'SAFARI & SANSIBAR' ? 'Bush & Beach' : cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            Synchronizing Global Catalog...
          </div>
        ) : filteredPackages.length === 0 ? (
          <div className="py-40 text-center bg-muted/20 rounded-[3rem] border-2 border-dashed">
            <LayoutGrid className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2">No expeditions found</h3>
            <p className="text-muted-foreground font-light mb-8">Try adjusting your filters or ask our AI Advisor for a custom plan.</p>
            <Button variant="outline" onClick={() => { setActiveCategory('All'); setSearch(''); }} className="rounded-xl h-12 px-8">Reset All Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence>
              {filteredPackages.map((pkg, idx) => (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
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
