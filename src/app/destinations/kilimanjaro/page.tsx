"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Compass,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const packages = [
  {
    id: '13-day-combo',
    tag: 'Bestseller',
    cat: 'KILIMANDSCHARO KOMBI',
    title: '13 Tage Tansania Tour – Kilimandscharo & Safari mit Serengeti',
    duration: '13 Tage, Komplettpaket',
    accommodation: 'Berghütten & Safari-Lodges',
    groupSize: 'Max. 8 Teilnehmer',
    price: '5.299',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  {
    id: '8-day-marangu',
    tag: 'Hüttenroute',
    cat: 'KILIMANDSCHARO',
    title: '8 Tage Marangu: Komfortabel zum Gipfel',
    duration: '8 Tage All-Inclusive',
    accommodation: 'Berghütten mit Vollpension',
    groupSize: 'Max. 10 Teilnehmer',
    price: '2.999',
    img: 'https://images.unsplash.com/photo-1650361109293-909990990901?q=80&w=800'
  },
  {
    id: '9-day-machame',
    tag: 'Whiskey-Route',
    cat: 'KILIMANDSCHARO',
    title: '9 Tage Machame: Der Abenteuer-Weg zum Gipfel',
    duration: '9 Tage Rundreise',
    accommodation: 'Zeltcamps & Hütten',
    groupSize: 'Max. 8 Teilnehmer',
    price: '2.499',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
  }
];

export default function KilimanjaroPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Immersive Header - NO top padding */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Mount Kilimanjaro Summit" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="mount kilimanjaro"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-4"
          >
            <Mountain className="w-3 h-3 text-primary fill-primary" /> Das Dach Afrikas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
          >
            Finden Sie Ihre <span className="text-primary italic">Route</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-light leading-relaxed px-4"
          >
            Wählen Sie aus einzigartigen Routen und Erlebnissen, die perfekt zu Ihrem Abenteuergeist passen.
          </motion.p>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Expeditions-Katalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Aufstieg zum <br /><span className="text-primary italic">Uhuru Peak</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[180px] lg:mb-3">Handverlesene Kletter-Routen für Einsteiger und erfahrene Entdecker.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-white leading-tight mb-4 line-clamp-2">{pkg.title}</h3>
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl flex flex-col items-start min-w-[110px]">
                        <p className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase leading-none mb-1">Ab</p>
                        <p className="text-xl md:text-2xl font-bold text-secondary">€{pkg.price}</p>
                      </div>
                      <Link href={`/trip-planner?route=${pkg.id}`}>
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