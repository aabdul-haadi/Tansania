
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/shared/PackageCard';

const SIGNATURE_REISEN = [
  {
    id: 'klassisch-tansania',
    title: 'Klassische Tansania Safari',
    slug: 'klassische-tansania-safari',
    startingPrice: 6500,
    durationDays: 10,
    groupSize: '2-4 Personen',
    highlights: ['Big Five', 'Luxuslodges', 'Privatguide'],
    excerpt: 'Serengeti, Ngorongoro und Tarangire – die zeitlose Route durch Tansanias berühmteste Nationalparks',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: 'safari-honeymoon',
    title: 'Safari & Sansibar Honeymoon',
    slug: 'safari-sansibar-honeymoon',
    startingPrice: 8900,
    durationDays: 14,
    groupSize: '2 Personen',
    highlights: ['Flitterwochen-Special', 'Boutique-Lodges', 'Private Insel'],
    excerpt: 'Die perfekte Kombination aus aufregender Wildlife-Safari und romantischem Strandurlaub auf Sansibar',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800'
  },
  {
    id: 'familien-safari',
    title: 'Familiensafari Tansania',
    slug: 'familiensafari-tansania',
    startingPrice: 5200,
    durationDays: 11,
    groupSize: '4-6 Personen',
    highlights: ['Familienfreundlich', 'Kulturelle Begegnungen', 'Flexible Planung'],
    excerpt: 'Kinderfreundliche Lodges, spannende Tierbegegnungen und unvergessliche Abenteuer für alle Generationen',
    imageUrl: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  }
];

export function FeaturedPackages() {
  return (
    <section className="py-16 md:py-32 bg-white relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-[#3A3634] uppercase tracking-tighter"
          >
            Unsere Signature Reisen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8581] font-normal text-[11px] md:text-[14px] max-w-2xl mx-auto leading-relaxed"
          >
            Sorgfältig komponierte Reiserouten – als Inspiration oder Ausgangspunkt für <br className="hidden md:block" /> Ihre individuelle Planung
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
