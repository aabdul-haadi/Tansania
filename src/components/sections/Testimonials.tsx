"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "A truly life-changing experience. From the bustling streets of Cairo to the silent majesty of the Serengeti, everything was perfectly curated.",
    author: "Elena Rodriguez",
    location: "Spain"
  },
  {
    quote: "The attention to detail was incredible. We didn't just see the Big Five; we understood the ecosystem thanks to our world-class guides.",
    author: "Jonathan Banks",
    location: "USA"
  },
  {
    quote: "Zanzibar was the perfect end to our adventure. Serengeti Dreams bridges the gap between raw nature and pure luxury effortlessly.",
    author: "Amira Hassan",
    location: "Egypt"
  }
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item, idx) => (
              <CarouselItem key={idx} className="flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <blockquote className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                      “{item.quote}”
                    </blockquote>
                    <div className="space-y-1">
                      <p className="font-bold text-lg text-secondary">{item.author}</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                        {item.location}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Minimal Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "h-1.5 transition-all duration-500 rounded-full",
                current === idx ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
