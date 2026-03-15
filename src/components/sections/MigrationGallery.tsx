"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const images = [
  { 
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200", 
    hint: "migration crossing", 
    col: "col-span-12", 
    aspect: "aspect-[21/9]" 
  },
  { 
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800", 
    hint: "migration dust", 
    col: "md:col-span-4 col-span-12", 
    aspect: "aspect-[4/3]" 
  },
  { 
    src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200", 
    hint: "zebras savannah", 
    col: "md:col-span-8 col-span-12", 
    aspect: "aspect-[16/9] md:aspect-auto" 
  },
  { 
    src: "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=1200", 
    hint: "safari balloon", 
    col: "col-span-12", 
    aspect: "aspect-[21/9]" 
  },
  { 
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200", 
    hint: "migration river", 
    col: "md:col-span-8 col-span-12", 
    aspect: "aspect-[16/9] md:aspect-auto" 
  },
  { 
    src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800", 
    hint: "elephant family", 
    col: "md:col-span-4 col-span-12", 
    aspect: "aspect-[4/3]" 
  },
];

export function MigrationGallery() {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl font-bold text-primary uppercase tracking-tighter leading-tight"
          >
            Warum Reisende ihre Safari mit uns planen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-widest max-w-3xl mx-auto leading-relaxed"
          >
            Persönliche Beratung, handverlesene Lodges und individuell geplante Safari-Routen sorgen dafür, dass Ihre Reise durch Tansania zu einem unvergesslichen Erlebnis wird.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl group transition-all duration-700",
                img.col,
                img.aspect
              )}
            >
              <Image 
                src={img.src} 
                alt="Migration Safari Gallery" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint={img.hint}
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex justify-center">
          <Button className="rounded-full px-12 h-14 md:h-16 bg-primary text-white font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.05] transition-transform border-none group">
            Individuelle Safari planen →
          </Button>
        </div>
      </div>
    </section>
  );
}
