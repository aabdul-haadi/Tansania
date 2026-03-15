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
    quote: "Eine lebensverändernde Erfahrung. Von Kairo bis in die Serengeti war alles perfekt kuratiert.",
    author: "Elena Rodriguez",
    location: "Spanien"
  },
  {
    quote: "Unglaubliche Liebe zum Detail. Wir haben nicht nur die Big Five gesehen, sondern das gesamte Ökosystem verstanden.",
    author: "Jonathan Banks",
    location: "USA"
  },
  {
    quote: "Sansibar war der perfekte Abschluss. Serengeti Dreams verbindet wilde Natur und puren Luxus mühelos.",
    author: "Amira Hassan",
    location: "Ägypten"
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
    <section className="py-16 bg-white overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full">
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
                    className="space-y-6"
                  >
                    <blockquote className="font-headline text-2xl md:text-4xl font-bold leading-tight text-foreground uppercase tracking-tight">
                      „{item.quote}“
                    </blockquote>
                    <div className="space-y-1">
                      <p className="font-bold text-base text-secondary uppercase tracking-widest">{item.author}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
                        {item.location}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "h-1 transition-all duration-500 rounded-full",
                current === idx ? "w-6 bg-primary" : "w-1 bg-muted-foreground/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
