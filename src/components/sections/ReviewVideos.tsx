
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";

const reviewVideos = [
  "https://www.youtube.com/embed/2neXV-p-zq4",
  "https://www.youtube.com/embed/aBuAMj8BRvw",
  "https://www.youtube.com/embed/ZGi4RqyRZzA",
  "https://www.youtube.com/embed/u_tKFCT4skE",
  "https://www.youtube.com/embed/d7MH0uKxM9A"
];

export function ReviewVideos() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-2xl md:text-5xl font-normal text-secondary leading-tight">
            Unsere Gäste erzählen von Momenten, die sie nie vergessen werden
          </h2>
          <p className="text-muted-foreground font-bold text-[10px] md:text-sm tracking-widest max-w-3xl mx-auto leading-relaxed">
            Unsere Reisenden teilen ihre schönsten Erinnerungen an Tansania, Sansibar und die Big Five: Erlebnisse, die berühren und bleiben.
          </p>
        </div>

        {/* Desktop: Single Row */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {reviewVideos.map((url, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[9/16] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-black border-4 border-white group"
            >
              <iframe 
                src={`${url}?rel=0&modestbranding=1&controls=1`}
                className="absolute inset-0 w-full h-full border-none" 
                allowFullScreen 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Modern Slider */}
        <div className="md:hidden -mx-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {reviewVideos.map((url, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-[70%]">
                  <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl bg-black border-4 border-white">
                    <iframe 
                      src={`${url}?rel=0&modestbranding=1&controls=1`}
                      className="absolute inset-0 w-full h-full border-none" 
                      allowFullScreen 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
