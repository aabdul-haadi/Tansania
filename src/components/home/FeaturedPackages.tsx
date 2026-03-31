
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/shared/PackageCard';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';

/**
 * Signature Expedition Registry.
 * High-density grid featuring flagship safari offerings.
 */
export function FeaturedPackages() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => (
    firestore ? query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(4)) : null
  ), [firestore]);
  
  const { data: packages, isLoading } = useCollection(pkgQuery);

  const fallbacks = [
    {
      id: 'safari-sansibar-15',
      title: '15 Tage Safari in Tansania und Sansibar',
      slug: 'safari-tansania-sansibar-15-tage',
      startingPrice: 5399,
      durationDays: 15,
      groupSize: '2-6 Personen',
      category: 'Signature',
      highlights: ['Big Five', 'Luxuslodges', 'Privatguide'],
      excerpt: 'Serengeti, Ngorongoro und Tarangire – die zeitlose Route durch Tansanias berühmteste Nationalparks.',
      imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
      rating: 4.9
    },
    {
      id: 'honeymoon-escape',
      title: 'Safari & Sansibar Honeymoon Special',
      slug: 'safari-sansibar-honeymoon',
      startingPrice: 8900,
      durationDays: 14,
      groupSize: '2 Personen',
      category: 'Romantik',
      highlights: ['Flitterwochen-Special', 'Boutique-Lodges', 'Private Insel'],
      excerpt: 'Die perfekte Kombination aus aufregender Wildlife-Safari und romantischem Strandurlaub auf Sansibar.',
      imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800',
      rating: 5.0
    }
  ];

  // Logic: Use live data if available, otherwise show high-prestige fallbacks
  const displayPkgs = packages && packages.length > 0 ? packages : fallbacks;

  return (
    <section className="pt-4 pb-20 md:pt-8 md:pb-32 bg-white relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tighter"
          >
            Unsere <span className="text-primary">Signature Reisen</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-bold text-[9px] md:text-[10px] uppercase tracking-widest max-w-2xl mx-auto opacity-60 leading-relaxed"
          >
            Sorgfältig komponierte Reiserouten – als Inspiration oder Ausgangspunkt für Ihre individuelle Planung
          </motion.p>
        </div>

        {/* Technical Staggered Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-32 gap-x-12"
        >
          {displayPkgs.map((pkg: any) => (
            <motion.div 
              key={pkg.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
