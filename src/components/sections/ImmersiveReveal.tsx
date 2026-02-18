"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const scenes = [
  {
    id: 'desert-dunes',
    title: 'Ride Across the Golden Sands',
    imgId: 'desert-dunes',
  },
  {
    id: 'serengeti-wildlife',
    title: 'Witness the Untamed',
    imgId: 'serengeti-wildlife',
  },
  {
    id: 'zanzibar-coast',
    title: 'Rest Where the Ocean Breathes',
    imgId: 'zanzibar-coast',
  }
];

export function ImmersiveReveal() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden group">
      {/* Background Images Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {scenes.map((scene, idx) => (
            idx === activeIndex && (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={PlaceHolderImages.find(img => img.id === scene.imgId)?.imageUrl || 'https://picsum.photos/seed/fallback/1920/1080'}
                  alt={scene.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  data-ai-hint={PlaceHolderImages.find(img => img.id === scene.imgId)?.imageHint}
                />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Slider Content Layer */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="relative h-full w-full"
      >
        <CarouselContent className="h-full ml-0">
          {scenes.map((scene, idx) => (
            <CarouselItem key={scene.id} className="h-full pl-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={activeIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-center"
                >
                  <h2 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl mx-auto leading-tight">
                    {scene.title}
                  </h2>
                  <div className="mt-8 flex justify-center">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={activeIndex === idx ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="w-24 h-1 bg-primary rounded-full origin-center" 
                    />
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Overlay */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center items-center gap-8 z-30">
          <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20 h-14 w-14 rounded-full" />
          <div className="flex gap-2">
            {scenes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  activeIndex === idx ? "bg-primary w-8" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20 h-14 w-14 rounded-full" />
        </div>
      </Carousel>
    </section>
  );
}
