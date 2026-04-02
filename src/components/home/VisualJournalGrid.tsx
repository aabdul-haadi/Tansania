
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const journalImages = [
  { 
    src: "/assets/images/home/gal-1.webp", 
    hint: "serengeti herds", 
    className: "md:col-span-8 md:row-span-6",
    aspect: "aspect-[4/5] md:aspect-auto"
  },
  { 
    src: "/assets/images/home/gal-2.webp", 
    hint: "safari jeep", 
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-square md:aspect-auto"
  },
  { 
    src: "/assets/images/home/gal-3.webp", 
    hint: "elephant savannah", 
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-square md:aspect-auto"
  },
  { 
    src: "/assets/images/home/park-1.webp", 
    hint: "zanzibar water", 
    className: "md:col-span-12 md:row-span-3",
    aspect: "aspect-[21/9] md:aspect-auto"
  }
];

export function VisualJournalGrid() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live Visual Journal
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter leading-[0.9]">
              DIE WILDNIS <br /><span className="text-primary">SPÜREN</span>
            </h2>
          </motion.div>
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

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-9 gap-4 md:gap-6 md:h-[1000px]"
        >
          {journalImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              className={cn(
                "relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden group shadow-xl border border-border/50 bg-muted",
                img.className,
                img.aspect
              )}
            >
              <Image 
                src={img.src} 
                alt="Safari Visual Asset" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                data-ai-hint={img.hint}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
                  <p className="text-[8px] font-black text-white uppercase tracking-[0.3em]">Captured by SDL Expert • Asset {idx + 1}</p>
                </div>
              </div>

              <div className="absolute top-6 left-6 md:top-10 md:left-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[7px] font-black text-white uppercase tracking-[0.2em]">Live Registry</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
