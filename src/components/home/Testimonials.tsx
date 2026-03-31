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
import { Star, MapPin, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Eine lebensverändernde Erfahrung. Von Kairo bis in die Serengeti war alles perfekt. Unser Guide kannte jeden Winkel der Savanne.",
    author: "Elena Rodriguez",
    location: "Spanien",
    rating: 5
  },
  {
    quote: "Unglaubliche Liebe zum Detail. Wir haben das gesamte Ökosystem verstanden. Die Lodges waren handverlesene Juwelen.",
    author: "Jonathan Banks",
    location: "USA",
    rating: 5
  },
  {
    quote: "Sansibar war der perfekte Abschluss. Serengeti Dreams verbindet Natur und Luxus auf einem Niveau, das wir so noch nicht erlebt haben.",
    author: "Amira Hassan",
    location: "Ägypten",
    rating: 5
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
    <section className="py-10 md:py-16 bg-white overflow-hidden border-y border-border/50 font-bold">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="mb-8 md:mb-12 space-y-2">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[9px] block">Soziale Validierung</span>
          <h2 className="font-headline text-xl md:text-3xl font-black text-secondary uppercase tracking-tighter">
            Stimmen von <span className="text-primary">der Savanne</span>
          </h2>
        </div>

        <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full">
          <CarouselContent>
            {testimonials.map((item, idx) => (
              <CarouselItem key={idx} className="flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="flex justify-center gap-1 text-primary mb-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                      ))}
                    </div>

                    <div className="relative max-w-2xl mx-auto px-4 md:px-6">
                      <Quote className="absolute -top-4 -left-2 w-6 h-6 text-muted/10 rotate-180" />
                      <blockquote className="font-headline text-base md:text-2xl font-bold leading-tight text-secondary uppercase tracking-tight">
                        „{item.quote}“
                      </blockquote>
                      <Quote className="absolute -bottom-4 -right-2 w-6 h-6 text-muted/10" />
                    </div>

                    <div className="space-y-1 pt-2">
                      <p className="font-black text-xs md:text-sm text-secondary uppercase tracking-widest">{item.author}</p>
                      <div className="flex items-center justify-center gap-2 text-[7px] md:text-[8px] text-muted-foreground uppercase tracking-[0.3em] font-black">
                        <MapPin className="w-2.5 h-2.5 text-primary" />
                        <span>Registry: {item.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center items-center gap-1.5 mt-8 md:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "h-0.5 transition-all duration-500 rounded-full",
                current === idx ? "w-6 bg-primary" : "w-2 bg-muted-foreground/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
