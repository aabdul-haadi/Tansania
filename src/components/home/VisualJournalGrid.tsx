
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const journalImages = [
  { 
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", 
    hint: "serengeti herds", 
    className: "md:col-span-8 md:row-span-2" 
  },
  { 
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800", 
    hint: "safari jeep", 
    className: "md:col-span-4 md:row-span-1" 
  },
  { 
    src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800", 
    hint: "elephant savannah", 
    className: "md:col-span-4 md:row-span-1" 
  },
  { 
    src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", 
    hint: "zanzibar water", 
    className: "md:col-span-12 md:row-span-1" 
  }
];

export function VisualJournalGrid() {
  return (
    <section className="py-10 md:py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Visual Journal</span>
          <h2 className="font-headline text-2xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            DIE WILDNIS <span className="text-primary">SPÜREN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {journalImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5 ${img.className}`}
            >
              <Image 
                src={img.src} 
                alt="Safari Visual" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                data-ai-hint={img.hint}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Subtle architectural frame */}
              <div className="absolute inset-0 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none z-20 group-hover:border-primary/20 transition-colors" />
              
              {/* Modern glass indicator */}
              <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <p className="text-[8px] font-black text-white uppercase tracking-widest">Detail View</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
