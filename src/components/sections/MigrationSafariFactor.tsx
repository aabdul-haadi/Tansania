"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "migration herds",
    title: "Die Great Migration",
    desc: "Erlebe Millionen Gnus, Zebras und Raubtiere in Aktion. Perfekt geplante Safari für unvergessliche Momente."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    hint: "river crossing",
    title: "Wildnis Pur",
    desc: "Folgen Sie den Herden durch den ungezähmten Busch der Serengeti."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800",
    hint: "zebra savannah",
    title: "Flussüberquerung",
    desc: "Spannung pur am Mara River – der Überlebenskampf aus nächster Nähe."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800",
    hint: "ngorongoro crater",
    title: "Krater-Expedition",
    desc: "Einzigartige Tierwelt im größten versunkenen Vulkankrater der Erde."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800",
    hint: "zanzibar beach",
    title: "Tropisches Ende",
    desc: "Nach dem Staub der Savanne erwartet Sie das türkisblaue Meer Sansibars."
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
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-32 bg-[#fdfcfb] relative overflow-hidden">
      {/* 100% Precise Topographic Background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M0 100 C 50 80, 150 120, 200 100 S 350 80, 400 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M0 200 C 50 180, 150 220, 200 200 S 350 180, 400 200" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M0 300 C 50 280, 150 320, 200 300 S 350 280, 400 300" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M100 0 C 80 50, 120 150, 100 200 S 80 350, 100 400" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M200 0 C 180 50, 220 150, 200 200 S 180 350, 200 400" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M300 0 C 280 50, 320 150, 300 200 S 280 350, 300 400" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Registry Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none"
          >
            Der entscheidende Faktor für deine Migration-Safari
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-3xl mx-auto leading-relaxed"
          >
            Die Great Migration bewegt sich ständig durch die Serengeti – von Süd nach Nord und wieder zurück. <br className="hidden md:block" />
            Wer im falschen Gebiet übernachtet, sieht die Herden oft nur aus der Ferne.
          </motion.p>
        </div>

        {/* 3D Depth Slider */}
        <div className="relative group">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8">
              {slides.map((slide, idx) => {
                const isActive = selectedIndex === idx;
                return (
                  <div 
                    key={slide.id} 
                    className="flex-[0_0_80%] md:flex-[0_0_35%] lg:flex-[0_0_28%] pl-4 md:pl-8 transition-all duration-700 ease-prestige"
                    style={{
                      transform: isActive ? 'scale(1.1) translateY(0)' : 'scale(0.85) translateY(20px)',
                      opacity: isActive ? 1 : 0.5,
                      zIndex: isActive ? 30 : 10
                    }}
                  >
                    <div className={cn(
                      "relative aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-secondary shadow-2xl transition-all duration-700",
                      isActive ? "shadow-primary/20" : "shadow-none"
                    )}>
                      <Image 
                        src={slide.img} 
                        alt={slide.title} 
                        fill 
                        className="object-cover"
                        data-ai-hint={slide.hint}
                      />
                      
                      {/* Technical Gradient Overlay */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-40"
                      )} />

                      {/* Content Reveal - Precise Clone of Center Slide UI */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10 text-center"
                          >
                            <h3 className="font-headline text-xl md:text-3xl font-black text-white uppercase mb-3 leading-tight">
                              {slide.title}
                            </h3>
                            <p className="text-[9px] md:text-[11px] text-white/80 font-black uppercase tracking-widest leading-relaxed mb-8 max-w-[240px] mx-auto">
                              {slide.desc}
                            </p>
                            <Button className="rounded-xl h-11 md:h-14 px-10 bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform border-none">
                              JETZT ANFRAGEN
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Precision Controls - Exact Positioning */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none px-4 md:px-8">
            <button 
              onClick={scrollPrev}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        {/* Technical Progress Dots */}
        <div className="mt-12 md:mt-16 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={cn(
                "h-1 transition-all duration-500 rounded-full",
                selectedIndex === idx ? "w-10 bg-primary" : "w-3 bg-muted-foreground/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
