"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/shared/PackageCard';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';

export function FeaturedPackages() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => (
    firestore ? query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(4)) : null
  ), [firestore]);
  
  const { data: packages } = useCollection(pkgQuery);

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
      imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    {
      id: 'honeymoon-escape',
      title: 'Safari & Sansibar Honeymoon',
      slug: 'safari-sansibar-honeymoon',
      startingPrice: 8900,
      durationDays: 14,
      groupSize: '2 Personen',
      category: 'Romantik',
      highlights: ['Flitterwochen-Special', 'Boutique-Lodges', 'Private Insel'],
      excerpt: 'Die perfekte Kombination aus aufregender Wildlife-Safari und romantischem Strandurlaub auf Sansibar.',
      imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800'
    },
    {
      id: 'exclusive-luxury',
      title: 'Exklusive Luxury Safari',
      slug: 'exklusive-luxury-safari',
      startingPrice: 12000,
      durationDays: 12,
      groupSize: '2-6 Personen',
      category: 'Prestige',
      highlights: ['Ultra-Luxury', 'Heißluftballon', 'Private Safaris'],
      excerpt: 'Tansanias schönste Wildparks in den luxuriösesten Unterkünften mit höchstem Service-Standard.',
      imageUrl: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800'
    },
    {
      id: 'family-safari',
      title: 'Familiensafari Tansania',
      slug: 'familiensafari-tansania',
      startingPrice: 5200,
      durationDays: 11,
      groupSize: '4-6 Personen',
      category: 'Familie',
      highlights: ['Familienfreundlich', 'Kulturelle Begegnungen', 'Flexible Planung'],
      excerpt: 'Kinderfreundliche Lodges, spannende Tierbegegnungen und unvergessliche Abenteuer für alle Generationen.',
      imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    }
  ];

  const displayPkgs = packages && packages.length > 0 ? packages : fallbacks;

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter"
          >
            Unsere <span className="text-primary">Signature Reisen</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-2xl mx-auto opacity-60 leading-relaxed"
          >
            Sorgfältig komponierte Reiserouten – als Inspiration oder Ausgangspunkt für Ihre individuelle Planung
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
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
