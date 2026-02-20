
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';

export default function ZanzibarPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('category', '==', 'SANSIBAR'));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  return (
    <div className="bg-background min-h-screen">
      {/* Immersive Header */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1920" 
          alt="Sansibar Küste" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="zanzibar coast"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-4"
          >
            <Waves className="w-3 h-3 text-primary" /> Die Swahili-Küste
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
          >
            Erleben Sie beide <span className="text-primary italic">Welten</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-light leading-relaxed px-4"
          >
            Entspannen Sie an Sansibars Traumstränden und entdecken Sie Tansanias spektakuläre Safaris – perfekt kombiniert.
          </motion.p>
        </div>
      </section>

      {/* Package listing */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Tropische Expeditionen</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-secondary">Unsere Sansibar & <br /><span className="text-primary italic">Safari Abenteuer</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[180px] lg:mb-3">Sorgfältig kuratierte Reisepakete für Ihren Urlaub im Paradies.</p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Loading Island Escapes...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {packages?.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
