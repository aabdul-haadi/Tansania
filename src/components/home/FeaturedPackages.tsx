"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/shared/PackageCard';

const SIGNATURE_REISEN = [
  {
    id: 'safari-honeymoon',
    title: 'Safari & Sansibar Honeymoon',
    slug: 'safari-sansibar-honeymoon',
    startingPrice: 8900,
    durationDays: 14,
    groupSize: '2 Personen',
    highlights: ['Flitterwochen-Special', 'Boutique-Lodges', 'Private Insel'],
    excerpt: 'Die perfekte Kombination aus aufregender Wildlife-Safari und romantischem Strandurlaub auf Sansibar',
    imageUrl: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1200'
  },
  {
    id: 'kili-safari-kombi',
    title: '12 Tage Kilimandscharo & Safari Kombi',
    slug: 'kilimanjaro-safari-kombi',
    startingPrice: 4850,
    durationDays: 12,
    groupSize: 'Privat-Expedition',
    highlights: ['Gipfelsturm', 'Big Five', 'Exklusive Lodges'],
    excerpt: 'Die ultimative Herausforderung am Berg kombiniert mit den spektakulärsten Wildlife-Hotspots im Norden Tansanias',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
  },
  {
    id: 'exclusive-luxury',
    title: 'Exklusive Luxury Safari',
    slug: 'exklusive-luxury-safari',
    startingPrice: 12000,
    durationDays: 12,
    groupSize: '2-6 Personen',
    highlights: ['Ultra-Luxury', 'Heißluftballon', 'Private Safaris'],
    excerpt: 'Tansanias schönste Wildparks in den luxuriösesten Unterkünften mit höchstem Service-Standard',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
  },
  {
    id: 'familien-safari',
    title: 'Familiensafari Tansania',
    slug: 'familien-safari-tansania',
    startingPrice: 5200,
    durationDays: 11,
    groupSize: '4-6 Personen',
    highlights: ['Familienfreundlich', 'Kulturelle Begegnungen', 'Flexible Planung'],
    excerpt: 'Kinderfreundliche Lodges, spannende Tierbegegnungen und unvergessliche Abenteuer für alle Generationen',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200'
  }
];

export function FeaturedPackages() {
  return (
    <section className="py-12 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 max-get-7xl">
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
            className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-2xl mx-auto tracking-widest opacity-80"
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