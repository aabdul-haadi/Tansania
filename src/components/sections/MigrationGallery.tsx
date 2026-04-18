
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const images = [
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200", hint: "migration crossing", col: "col-span-12", aspect: "aspect-[21/9]" },
  { src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800", hint: "migration dust", col: "md:col-span-4 col-span-12", aspect: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200", hint: "zebras savannah", col: "md:col-span-8 col-span-12", aspect: "aspect-[16/9] md:aspect-auto" },
  { src: "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=1200", hint: "safari balloon", col: "col-span-12", aspect: "aspect-[21/9]" },
];

export function MigrationGallery() {
  return (
    <section className="pt-8 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
            Augenblicke der Wildnis
          </h2>
          <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-2xl mx-auto opacity-80 tracking-normal">
            Unsere Guides halten die magischsten Momente der Migration fest. Erleben Sie die Serengeti durch ihre Augen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm group transition-all duration-700 hover:shadow-xl",
                img.col,
                img.aspect
              )}
            >
              <Image 
                src={img.src} 
                alt="Migration Moment" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint={img.hint}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
