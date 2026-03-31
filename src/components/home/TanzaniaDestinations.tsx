"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const destinations = [
  {
    name: "Serengeti",
    desc: "Die endlose Savanne und die große Tierwanderung",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    slug: "serengeti",
    hint: "serengeti herds"
  },
  {
    name: "Ngorongoro Krater",
    desc: "Das achte Weltwunder mit unglaublicher Tierdichte",
    img: "https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800",
    slug: "ngorongoro",
    hint: "ngorongoro crater"
  },
  {
    name: "Tarangire",
    desc: "Elefantenherden und majestätische Baobab-Bäume",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800",
    slug: "tarangire",
    hint: "elephant savannah"
  },
  {
    name: "Sansibar",
    desc: "Traumstrände und exotische Gewürzinsel-Kultur",
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
    slug: "zanzibar",
    hint: "zanzibar beach"
  },
  {
    name: "Kilimandscharo",
    desc: "Afrikas höchster Gipfel und ultimative Herausforderung",
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800",
    slug: "kilimanjaro",
    hint: "mount kilimanjaro"
  },
  {
    name: "Arusha NP",
    desc: "Das grüne Juwel am Fuße des Mount Meru",
    img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800",
    slug: "arusha",
    hint: "mount meru"
  }
];

export function TanzaniaDestinations() {
  return (
    <section className="pb-12 md:pb-24 pt-8 md:pt-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter"
          >
            Entdecken Sie Tansania
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-80"
          >
            Die schönsten Destinationen für Ihre individuelle Reise
          </motion.p>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} dest={dest} />
          ))}
        </div>

        <div className="md:hidden -mx-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {destinations.map((dest, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-[85%]">
                  <DestinationCard dest={dest} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ dest }: { dest: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl bg-muted transition-all duration-700 hover:shadow-2xl border border-border/50"
    >
      <Image 
        src={dest.img} 
        alt={dest.name} 
        fill 
        unoptimized
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        data-ai-hint={dest.hint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        <h3 className="text-white font-headline text-xl md:text-3xl font-normal uppercase tracking-tighter mb-2">
          {dest.name}
        </h3>
        <p className="text-white/70 text-[9px] md:text-[10px] font-normal leading-relaxed mb-6 uppercase tracking-widest line-clamp-2">
          {dest.desc}
        </p>
        
        <Link href={`/destinations/${dest.slug}`} className="inline-flex items-center gap-2 text-white font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] group/link">
          Mehr erfahren <ArrowRight className="w-3 h-3 text-primary transition-transform group/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
