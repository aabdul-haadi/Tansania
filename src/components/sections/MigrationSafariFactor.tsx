
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "migration herds",
    title: "Die grosse Tierwanderung",
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
    title: "Dramatische Crossings",
    desc: "Spannung pur am Mara River – beobachten Sie den Überlebenskampf der Natur aus sicherster und bester Perspektive."
  }
];

export function MigrationSafariFactor() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    containScroll: false
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
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-8 pb-16 md:pb-24 bg-[#fdfcfb] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
            Der entscheidende Faktor für Ihre Safari
          </h2>
          <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-2xl mx-auto opacity-80">
            Wir positionieren Sie immer am richtigen Ort zur richtigen Zeit. Strategische Planung ist der Schlüssel zu spektakulären Tierbeobachtungen.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-12">
              {slides.map((slide, idx) => {
                const isActive = selectedIndex === idx;
                return (
                  <div 
                    key={slide.id} 
                    className={cn(
                      "flex-[0_0_85%] md:flex-[0_0_45%] pl-4 md:pl-12 transition-all duration-700 ease-prestige relative",
                      isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-90 opacity-40 blur-[1px]"
                    )}
                  >
                    <div className="relative aspect-[4/5] md:aspect-[16/11] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-secondary shadow-2xl">
                      <Image src={slide.img} alt={slide.title} fill className="object-cover" data-ai-hint={slide.hint} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-center items-center">
                        <motion.div
                          initial={false}
                          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          className="space-y-4"
                        >
                          <h3 className="font-headline text-2xl md:text-4xl font-normal text-white mb-2 tracking-tight">
                            {slide.title}
                          </h3>
                          <p className="text-[12px] md:text-[14px] leading-[20px] text-white/80 font-normal mb-6 max-w-[320px] mx-auto">
                            {slide.desc}
                          </p>
                          <Button className="rounded-xl h-11 px-8 bg-primary text-white font-bold text-[10px] uppercase tracking-widest border-none shadow-xl hover:bg-white hover:text-primary transition-all">
                            Anfrage senden
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Centered Controls Overlay - Recalibrated for modern UX */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none px-2 md:px-8 z-30">
            <button 
              onClick={() => emblaApi?.scrollPrev()} 
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()} 
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        {/* Carousel Progress Registry */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                selectedIndex === idx ? "bg-primary w-8" : "bg-border w-2"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
