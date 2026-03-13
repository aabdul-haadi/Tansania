"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users, Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const destinationImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=800", hint: "pyramids balloon", size: "large-v" },
  { id: 2, src: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800", hint: "camel pyramids", size: "mid-h" },
  { id: 3, src: "https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800", hint: "egypt statue", size: "small-v" },
  { id: 4, src: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800", hint: "luxor temple", size: "small-v" },
  { id: 5, src: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800", hint: "pyramids portrait", size: "large-v" },
];

const egyptPackages = [
  {
    title: "10 Tage Luxus-Ägypten",
    slug: "10-tage-luxus-aegypten",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800",
    hint: "abu simbel luxury"
  },
  {
    title: "12 Tage / 11 Nächte Luxus-Ägypten-Tour",
    slug: "12-tage-luxus-aegypten-tour",
    img: "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=800",
    hint: "giza pyramids"
  },
  {
    title: "Klassisches Ägypten 8 Tage / 7 Nächte",
    slug: "klassisches-aegypten-8-tage",
    img: "https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800",
    hint: "karnak temple"
  }
];

export function EgyptFeaturedContent() {
  return (
    <div className="bg-[#fdfcfb] space-y-24 md:space-y-32 py-16 md:py-32">
      
      {/* Section 1: Beliebte Reiseziele */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">
            Beliebte Reiseziele in Ägypten
          </h2>
          <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto">
            Entdecken Sie die Highlights Ägyptens, die unsere Gäste lieben.
          </p>
        </div>

        {/* Desktop Mosaic Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4 h-[750px]">
          {/* Column 1: Large Vertical */}
          <div className="col-span-4 relative rounded-[2rem] overflow-hidden shadow-xl group">
            <Image src={destinationImages[0].src} alt="Egypt" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint={destinationImages[0].hint} />
            <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
          </div>

          {/* Column 2: Stacked */}
          <div className="col-span-4 grid grid-rows-2 gap-4">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl group">
              <Image src={destinationImages[1].src} alt="Egypt" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint={destinationImages[1].hint} />
              <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl group">
                <Image src={destinationImages[2].src} alt="Egypt" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint={destinationImages[2].hint} />
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl group">
                <Image src={destinationImages[3].src} alt="Egypt" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint={destinationImages[3].hint} />
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Column 3: Large Vertical */}
          <div className="col-span-4 relative rounded-[2rem] overflow-hidden shadow-xl group">
            <Image src={destinationImages[4].src} alt="Egypt" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint={destinationImages[4].hint} />
            <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
          </div>
        </div>

        {/* Mobile Modern Slider */}
        <div className="md:hidden -mx-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2">
              {destinationImages.map((img) => (
                <CarouselItem key={img.id} className="pl-2 basis-[85%]">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg">
                    <Image src={img.src} alt="Egypt" fill className="object-cover" data-ai-hint={img.hint} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Section 2: Ihr exklusives Ägypten-Abenteuer */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">
            Ihr exklusives Ägypten-Abenteuer:
          </h2>
          <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto">
            maßgeschneiderte Luxusreisen in Ägypten.
          </p>
        </div>

        {/* High-Density Package Grid / Slider */}
        <div className="relative">
          <div className="hidden md:grid grid-cols-3 gap-8">
            {egyptPackages.map((pkg, idx) => (
              <EgyptPackageStaticCard key={idx} pkg={pkg} />
            ))}
          </div>

          {/* Mobile Package Slider */}
          <div className="md:hidden">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {egyptPackages.map((pkg, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-[90%]">
                    <EgyptPackageStaticCard pkg={pkg} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Final Large CTA */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Button size="lg" className="rounded-full px-16 h-16 md:h-20 bg-primary text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform">
            JETZT ANFRAGEN
          </Button>
        </div>
      </section>
    </div>
  );
}

function EgyptPackageStaticCard({ pkg }: { pkg: any }) {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-border/50 flex flex-col group hover:shadow-xl transition-all duration-500 h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" data-ai-hint={pkg.hint} />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-primary text-white border-none font-bold text-[8px] uppercase px-3 py-1">ENTDECKEN</Badge>
          <Badge className="bg-secondary/80 text-white border-none font-bold text-[8px] uppercase px-2 py-1 flex items-center gap-1">
            <Users className="w-2.5 h-2.5" /> 6
          </Badge>
          <Badge className="bg-secondary/80 text-white border-none font-bold text-[8px] uppercase px-2 py-1 flex items-center gap-1">
            <Calendar className="w-2.5 h-2.5" /> 2
          </Badge>
        </div>
      </div>
      
      <div className="p-8 flex flex-col justify-between flex-grow gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-1 text-primary">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
            <span className="text-[9px] font-bold text-muted-foreground ml-1">4.9 (1.387 rating)</span>
          </div>
          <h3 className="font-headline text-lg md:text-xl font-bold text-secondary uppercase leading-tight line-clamp-2">{pkg.title}</h3>
          
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-muted-foreground">
              <Users className="w-3 h-3" /> 02 people
            </div>
            <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-muted-foreground">
              <Clock className="w-3 h-3" /> 10 Tage
            </div>
            <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-muted-foreground">
              <Calendar className="w-3 h-3" /> 04/12/2026
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-muted flex flex-col items-center gap-1">
          <p className="text-primary font-black text-sm md:text-base uppercase tracking-widest">Preis auf Anfrage</p>
        </div>
      </div>
    </div>
  );
}
