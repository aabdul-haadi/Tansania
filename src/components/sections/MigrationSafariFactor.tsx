
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "migration herds",
    title: "Die große Tierwanderung",
    desc: "Erleben Sie Millionen Gnus, Zebras und Raubtiere in Aktion. Eine perfekt geplante Safari für Ihre unvergesslichen Momente."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    hint: "river crossing",
    title: "Unberührte Wildnis",
    desc: "Wir folgen den Herden durch den ungezähmten Busch der zentralen Serengeti – fernab der bekannten Pfade."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800",
    hint: "zebra savannah",
    title: "Dramatische Überquerungen",
    desc: "Spannung pur am Mara River – beobachten Sie den Überlebenskampf der Natur aus sicherster und bester Perspektive."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "safari balloon",
    title: "Vogelperspektive",
    desc: "Gleiten Sie lautlos im Heißluftballon über die endlosen Ebenen, während unter Ihnen das größte Naturschauspiel erwacht."
  }
];

export function MigrationSafariFactor() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-8 pb-16 md:pb-24 bg-white overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">
              Der entscheidende Faktor für Ihre Safari
            </h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl opacity-80">
              Wir positionieren Sie immer am richtigen Ort zur richtigen Zeit. Strategische Planung ist der Schlüssel zu spektakulären Tierbeobachtungen.
            </p>
          </div>
          <div className="flex items-center gap-3 hidden md:flex">
            <button 
              onClick={() => emblaApi?.scrollPrev()} 
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()} 
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {slides.map((slide) => (
                <div 
                  key={slide.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] pl-6"
                >
                  <div className="flex flex-col h-full bg-[#fdfcfb] rounded-[2rem] overflow-hidden border border-border/40 group hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image 
                        src={slide.img} 
                        alt={slide.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                        data-ai-hint={slide.hint} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow text-left space-y-4">
                      <h3 className="font-headline text-2xl font-bold text-secondary uppercase tracking-tight leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80 flex-grow">
                        {slide.desc}
                      </p>
                      <div className="pt-4 border-t border-border/40">
                        <Button variant="link" className="p-0 h-auto font-black text-[10px] uppercase tracking-widest text-secondary hover:text-primary group/btn">
                          Mehr erfahren <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Indicator Protocol */}
        <div className="flex justify-center gap-2 mt-10 md:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={cn(
                "h-1 transition-all duration-500 rounded-full",
                selectedIndex === idx ? "bg-primary w-8" : "bg-border w-2"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
