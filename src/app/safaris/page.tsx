"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const packages = [
  {
    id: '15-day-safari-zanzibar',
    tag: 'Bestseller',
    cat: 'SAFARI & SANSIBAR',
    title: '15 Tage Safari & Sansibar Komplettpaket',
    duration: '15 Tage Rundreise',
    groupSize: 'Max. 8 Teilnehmer',
    price: '5.399',
    highlights: [
      'Safari in den Top-Nationalparks',
      'Besuch eines Massai-Dorfes',
      'Familienfreundliche Unterkünfte',
      'Sansibar Strände & Tauchen',
      'Gewürztour & Stone Town'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: '13-day-safari-zanzibar',
    tag: 'All-Inclusive',
    cat: 'SAFARI & SANSIBAR',
    title: '13 Tage Safari & Sansibar Erlebnis',
    duration: '13 Tage All-Inclusive',
    groupSize: 'Max. 10 Teilnehmer',
    price: '3.699',
    highlights: [
      'Big Five Pirschfahrten',
      'Massai-Dorf Besuch',
      'Ngorongoro UNESCO Krater',
      'Traumstrände auf Sansibar',
      'Stone Town Stadtführung'
    ],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  },
  {
    id: '11-day-safari-short',
    tag: 'Kurztrip',
    cat: 'SAFARI & SANSIBAR',
    title: '11 Tage Safari & Sansibar Kurztrip',
    duration: '11 Tage Komplettpaket',
    groupSize: 'Max. 8 Teilnehmer',
    price: '2.999',
    highlights: [
      'Elefanten in Tarangire',
      'Massai-Kultur erleben',
      'Serengeti Tierwanderung',
      'Ngorongoro Krater Tour',
      'Sansibar Highlights'
    ],
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  {
    id: '13-day-honeymoon',
    tag: 'Romantik',
    cat: 'FLITTERWOCHEN',
    title: '13 Tage Premium Flitterwochen Tour',
    duration: '13 Tage Luxuspaket',
    groupSize: 'Max. 6 Teilnehmer',
    price: '3.899',
    highlights: [
      'Champagner zum Sonnenuntergang',
      'Private Pirschfahrten',
      'Luxus-Lodges & Villen',
      'Strand-Dinner auf Sansibar',
      'Heißluftballon über der Serengeti'
    ],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  },
  {
    id: '12-day-family',
    tag: 'Familien',
    cat: 'FAMILIEN-SAFARI',
    title: '12 Tage Familien-Safari Abenteuer',
    duration: '12 Tage All-Inclusive',
    groupSize: 'Max. 8 Teilnehmer',
    price: '3.499',
    highlights: [
      'Big Five Pirschfahrten',
      'Besuch eines Massai-Dorfes',
      'Schulbesuch in Karatu',
      'Lake Manyara Safari',
      'Kindgerechte Lodges'
    ],
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800'
  },
  {
    id: '13-day-kilimanjaro-combo',
    tag: 'Kombination',
    cat: 'KILIMANDSCHARO SAFARI',
    title: '13 Tage Die Große Tansania Tour',
    duration: '13 Tage All-Inclusive',
    groupSize: 'Max. 8 Teilnehmer',
    price: '4.699',
    highlights: [
      'Safari in Top-Nationalparks',
      'Kilimandscharo aus der Nähe',
      'Big Five & Natur pur',
      'Sansibar: Strand & Kultur',
      'Abenteuer & Erholung'
    ],
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  }
];

export default function SafarisPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Immersive Header - NO top padding here */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Hero" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-4"
          >
            <Sparkles className="w-3 h-3 text-primary fill-primary" /> Premium Expeditionen
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
          >
            Tansania <span className="text-primary italic">Safaris</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-light leading-relaxed px-4"
          >
            Ungezähmte Natur, beeindruckende Tierwelt und atemberaubende Landschaften. Das Abenteuer Ihres Lebens beginnt hier.
          </motion.p>
        </div>
      </section>

      {/* Package Listing */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Unser Katalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold">Wählen Sie Ihre <br /><span className="text-primary italic">Afrikanische Odyssee</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[180px] lg:mb-3">Handverlesene Reiserouten für Familien, Paare und Entdecker.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl z-0">
                  <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-1.5 items-start">
                    <Badge className="bg-primary text-secondary border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                      {pkg.tag}
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                      {pkg.cat}
                    </Badge>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-white leading-tight mb-4">{pkg.title}</h3>
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl flex flex-col items-start min-w-[110px]">
                        <p className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase leading-none mb-1">Ab</p>
                        <p className="text-xl md:text-2xl font-bold text-secondary">€{pkg.price}</p>
                      </div>
                      <Link href={`/trip-planner?package=${pkg.id}`}>
                        <Button size="icon" className="w-14 h-14 rounded-2xl bg-primary text-secondary hover:bg-primary/90 shadow-xl transition-transform hover:scale-110">
                          <ArrowRight className="w-6 h-6" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6 px-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.groupSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}