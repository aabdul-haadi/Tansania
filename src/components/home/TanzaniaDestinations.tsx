"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const destinations = [
  {
    name: "Serengeti",
    label: "Highlight-Destination",
    desc: "Gnus bei der Großen Migration, Serengeti-Nationalpark",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200",
    slug: "serengeti",
    hint: "serengeti herds"
  },
  {
    name: "Sansibar",
    label: "Strandparadies",
    desc: "Weißer Sandstrand auf Sansibar, Ostafrika",
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200",
    slug: "zanzibar",
    hint: "zanzibar beach"
  },
  {
    name: "Ngorongoro",
    label: "UNESCO-Weltnaturerbe",
    desc: "Löwin im Ngorongoro-Krater, Tansania",
    img: "https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200",
    slug: "ngorongoro",
    hint: "ngorongoro crater"
  },
  {
    name: "Kilimandscharo",
    label: "Das Dach Afrikas",
    desc: "Kilimandscharo bei Sonnenaufgang über den Wolken",
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200",
    slug: "kilimanjaro",
    hint: "mount kilimanjaro"
  },
  {
    name: "Tarangire",
    label: "Elefantenparadies",
    desc: "Elefantenherde im Tarangire-Nationalpark",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200",
    slug: "tarangire",
    hint: "elephant savannah"
  }
];

export function TanzaniaDestinations() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden font-bold">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-2">
              <Globe className="w-4 h-4" /> Regionale Registry
            </div>
            <h2 className="font-headline text-3xl md:text-6xl font-black leading-[0.9] text-secondary uppercase tracking-tighter">
              Ihre <br /><span className="text-primary">Reiseziele</span>
            </h2>
            <p className="text-lg md:text-2xl font-black text-secondary/80 uppercase tracking-tight">Das Beste von Tansania.</p>
          </motion.div>
          
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-muted-foreground font-black leading-relaxed max-w-xs text-[10px] md:text-sm border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-4 md:pl-0 md:pr-4 uppercase tracking-widest text-left md:text-right">
              Für jeden, der mehr will.
            </p>
            <Link href="/destinations" className="inline-flex items-center gap-3 text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-primary hover:text-secondary transition-all group">
              Alle Reiseziele <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Serengeti - Featured Large */}
          <DestinationCard 
            item={destinations[0]} 
            className="md:col-span-6 lg:col-span-8 lg:row-span-2 aspect-[4/3] md:aspect-auto" 
          />
          
          {/* Zanzibar */}
          <DestinationCard 
            item={destinations[1]} 
            className="md:col-span-3 lg:col-span-4" 
          />
          
          {/* Ngorongoro */}
          <DestinationCard 
            item={destinations[2]} 
            className="md:col-span-3 lg:col-span-4" 
          />

          {/* Kilimanjaro */}
          <DestinationCard 
            item={destinations[3]} 
            className="md:col-span-3 lg:col-span-6" 
          />

          {/* Tarangire */}
          <DestinationCard 
            item={destinations[4]} 
            className="md:col-span-3 lg:col-span-6" 
          />
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ item, className }: { item: any, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-border/50 bg-muted transition-all duration-700",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image 
          src={item.img} 
          alt={item.name} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          data-ai-hint={item.hint}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-primary font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] leading-none mb-2">
              {item.label}
            </p>
            <h3 className="text-white font-headline text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
              {item.name}
            </h3>
          </div>
          
          <p className="text-white/60 text-[9px] md:text-xs font-bold leading-relaxed uppercase tracking-widest max-w-xs group-hover:text-white/90 transition-colors">
            {item.desc}
          </p>
          
          <div className="pt-4 flex items-center justify-between">
            <Link href={`/destinations/${item.slug}`}>
              <Button size="icon" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-primary hover:border-primary transition-all group/btn shadow-2xl">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
