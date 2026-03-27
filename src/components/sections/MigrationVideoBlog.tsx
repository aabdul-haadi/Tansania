"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function MigrationVideoBlog() {
  return (
    <div className="bg-white py-16 md:py-32 overflow-hidden">
      
      {/* Section 1: Cinematic Video Discovery - Streamlined focus */}
      <section className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-secondary group cursor-pointer"
        >
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Migration Discovery Video" 
            fill 
            className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
            data-ai-hint="migration herds"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 space-y-6 md:space-y-8">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-10 md:h-10 text-primary fill-current ml-1" />
            </div>
            <div className="max-w-2xl space-y-4">
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none">
                AUF VIDEO ENTDECKEN
              </h2>
              <p className="text-white/80 font-bold text-[10px] md:text-sm uppercase tracking-widest leading-relaxed">
                Willkommen im Herzen Afrikas – dort, wo die Savanne niemals schläft.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
