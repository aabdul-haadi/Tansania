"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/shared/PackageCard';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';

export function FeaturedPackages() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => (
    firestore ? query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(3)) : null
  ), [firestore]);
  
  const { data: packages, isLoading } = useCollection(pkgQuery);

  const fallbacks = [
    {
      id: 'luxury-combo',
      title: '15 Tage Luxus-Kombi Tansania & Sansibar',
      slug: 'luxus-safari-tansania-15-tage',
      startingPrice: 5490,
      durationDays: 15,
      category: 'Signature',
      highlights: ['Great Migration', 'Luxury Camps', 'Stone Town'],
      imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    {
      id: 'kili-lemosho',
      title: '8 Tage Lemosho Route Kilimandscharo',
      slug: 'kilimanjaro-lemosho-8-tage',
      startingPrice: 2850,
      durationDays: 8,
      category: 'Expedition',
      highlights: ['Uhuru Peak', 'Glacier Views', 'Expert Guides'],
      imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
    },
    {
      id: 'tarangire-special',
      title: '7 Tage Tarangire & Ngorongoro Kompakt',
      slug: 'tarangire-ngorongoro-7-tage',
      startingPrice: 3100,
      durationDays: 7,
      category: 'Wildlife',
      highlights: ['Elephants', 'Big Five', 'Baobabs'],
      imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    }
  ];

  const displayPkgs = packages && packages.length > 0 ? packages : fallbacks;

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Safari Catalog
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-2xl md:text-5xl font-bold text-secondary uppercase tracking-tighter"
          >
            AKTUELE <span className="text-primary">EXPEDITIONEN</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {displayPkgs.map((pkg: any) => (
            <motion.div 
              key={pkg.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
