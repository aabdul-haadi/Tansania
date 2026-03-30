"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const journalImages = [
  { 
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200", 
    hint: "serengeti herds", 
    className: "md:col-span-7 md:row-span-4",
    aspect: "aspect-[4/5] md:aspect-auto"
  },
  { 
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800", 
    hint: "safari jeep", 
    className: "md:col-span-5 md:row-span-2",
    aspect: "aspect-square md:aspect-auto"
  },
  { 
    src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800", 
    hint: "elephant savannah", 
    className: "md:col-span-5 md:row-span-2",
    aspect: "aspect-square md:aspect-auto"
  },
  { 
    src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200", 
    hint: "zanzibar water", 
    className: "md:col-span-12 md:row-span-2",
    aspect: "aspect-[21/9] md:aspect-auto"
  }
];

export function VisualJournalGrid() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live Visual Journal
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-2xl md:text-5xl font-bold text-secondary uppercase tracking-tighter leading-none"
            >
              DIE WILDNIS <br /><span className="text-primary">SPÜREN</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-bold text-[9px] md:text-sm uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 leading-relaxed"
          >
            Echte Momente aus der Savanne. Unsere Guides dokumentieren täglich die Magie Tansanias.
          </motion.p>
        </div>

        {/* Unique Asymmetric Registry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[900px]">
          {journalImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={cn(
                "relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden group shadow-prestige border border-border/50",
                img.className,
                img.aspect
              )}
            >
              <Image 
                src={img.src} 
                alt="Safari Visual" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                data-ai-hint={img.hint}
              />
              
              {/* Prestige Overlay Protocol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Metadata Tag */}
              <div className="absolute bottom-8 right-8 z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
                  <p className="text-[8px] font-black text-white uppercase tracking-[0.3em]">Registry Asset No. {idx + 1}</p>
                </div>
              </div>

              {/* Architectural Border Guard */}
              <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[3.5rem] pointer-events-none z-20 group-hover:border-primary/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
