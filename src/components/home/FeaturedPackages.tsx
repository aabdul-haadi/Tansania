"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/shared/PackageCard';

const SIGNATURE_REISEN = [
  {
    id: 'safari-tansania-sansibar-15',
    title: '15 Tage Safari in Tansania und Sansibar',
    slug: 'safari-tansania-sansibar-15-tage',
    startingPrice: 5399,
    durationDays: 15,
    category: 'Erlebnisreise',
    highlights: [
      'Atemberaubende Tierbeobachtungen',
      'Exklusive Lodge & Tented Camp',
      'Abenteuer & Erholung',
      'Alles gut organisiert',
      'Inklusive Intl. Flug'
    ],
    excerpt: 'Unsere umfassendste Expedition: Vom Herzen der Serengeti bis zu den Palmen Sansibars – inklusive internationaler Flüge.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: 'safari-sansibar-13',
    title: '13 Tage Safari & Sansibar',
    slug: 'safari-sansibar-13-tage',
    startingPrice: 3699,
    durationDays: 13,
    category: 'Erlebnisreise',
    highlights: [
      'Atemberaubende Tierbeobachtungen',
      'Exklusive Lodges & Camps',
      'Abenteuer & Erholung',
      'Alles gut organisiert'
    ],
    excerpt: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung am Indischen Ozean.',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  }
];

export function FeaturedPackages() {
  return (
    <section className="py-12 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal uppercase"
          >
            Unsere Signature Reisen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-2xl mx-auto tracking-normal opacity-80"
          >
            Sorgfältig komponierte Reiserouten – als Inspiration oder Ausgangspunkt für Ihre individuelle Planung
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {SIGNATURE_REISEN.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
