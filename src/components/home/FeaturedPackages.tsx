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
    imageUrl: '/assets/images/home/pkg-01.webp'
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
    imageUrl: '/assets/images/home/pkg-02.webp'
  },
  {
    id: 'safari-sansibar-11',
    title: 'Safari & Sansibar',
    slug: 'safari-sansibar-11-tage',
    startingPrice: 2999,
    durationDays: 11,
    category: 'Erlebnisreise',
    highlights: [
      'Atemberaubende Tierbeobachtungen',
      'Exklusive Lodges & Camps',
      'Abenteuer & Erholung',
      'Alles gut organisiert'
    ],
    excerpt: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
    imageUrl: '/assets/images/home/pkg-03.webp'
  },
  {
    id: 'familien-safari-12',
    title: '12 Tage Familien Safari',
    slug: 'familien-safari-12-tage',
    startingPrice: 3499,
    durationDays: 12,
    category: 'Erlebnisreise',
    highlights: [
      'Atemberaubende Tierbeobachtungen',
      'Exklusive Lodges & Camps',
      'Abenteuer & Erholung',
      'Alles gut organisiert'
    ],
    excerpt: 'Speziell für Familien konzipiert: Unvergessliche Abenteuer und kindgerechte Lodges in Tansanias Wildnis.',
    imageUrl: '/assets/images/home/pkg-04.png'
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
            className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal"
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