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
    img: "/assets/images/home/park-1.webp",
    slug: "serengeti",
    hint: "serengeti herds"
  },
  {
    name: "Ngorongoro Krater",
    desc: "Das achte Weltwunder mit unglaublicher Tierdichte",
    img: "/assets/images/home/park-2.webp",
    slug: "ngorongoro",
    hint: "ngorongoro crater"
  },
  {
    name: "Tarangire",
    desc: "Elefantenherden und majestätische Baobab-Bäume",
    img: "/assets/images/home/park-3.webp",
    slug: "tarangire",
    hint: "elephant savannah"
  },
  {
    name: "Sansibar",
    desc: "Traumstrände und exotische Gewürzinsel-Kultur",
    img: "/assets/images/home/park-4.webp",
    slug: "zanzibar",
    hint: "zanzibar beach"
  },
  {
    name: "Kilimandscharo",
    desc: "Afrikas höchster Gipfel und ultimative Herausforderung",
    img: "/assets/images/home/park-5.webp",
    slug: "kilimanjaro",
    hint: "mount kilimanjaro"
  },
  {
    name: "Arusha NP",
    desc: "Das grüne Juwel am Fuße des Mount Meru",
    img: "/assets/images/home/park-6.webp",
    slug: "arusha",
    hint: "mount meru"
  }
];

export function TanzaniaDestinations() {
  return (
    <section className="pb-12 md:pb-24 pt-8 md:pt-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-normal"
          >
            Entdecken Sie Tansania
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[10px] md:text-xs tracking-normal max-w-xl mx-auto opacity-80"
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
      className="group relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-muted transition-all duration-700 hover:shadow-2xl border border-border/50"
    >
      <Image 
        src={dest.img} 
        alt={dest.name} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        data-ai-hint={dest.hint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
        {/* Applied 24px/32px Cormorant Garamond 500 Spec */}
        <h3 className="text-white font-headline text-[24px] leading-[32px] font-medium tracking-normal mb-2">
          {dest.name}
        </h3>
        {/* Applied 14px/20px Inter 400 Spec */}
        <p className="text-white/90 text-[14px] leading-[20px] font-normal tracking-normal mb-6 line-clamp-2">
          {dest.desc}
        </p>
        
        <Link href={`/destinations/${dest.slug}`} className="inline-flex items-center gap-2 text-white font-bold text-[11px] tracking-widest group/link">
          Mehr erfahren <ArrowRight className="w-3 h-3 text-primary transition-transform group/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}