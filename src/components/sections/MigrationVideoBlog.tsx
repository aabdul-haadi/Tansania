
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function MigrationVideoBlog() {
  return (
    <div className="bg-white pt-8 pb-16 md:pb-32 overflow-hidden border-t border-border/40">
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20 space-y-3">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">
            Die Serengeti in Bewegung
          </h2>
          <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl mx-auto opacity-80">
            Erleben Sie die Intensität der Wanderung. Unsere Filmaufnahmen bringen Sie direkt in die grenzenlose Savanne.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl bg-secondary group cursor-pointer border-8 border-white"
        >
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Migration Video Preview" 
            fill 
            className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
            data-ai-hint="migration herds"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 space-y-8">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-10 md:h-10 text-primary fill-current ml-1" />
            </div>
            <div className="max-w-2xl">
              <p className="text-white font-bold text-sm md:text-xl uppercase tracking-widest leading-relaxed">
                Willkommen im Herzen Afrikas – dort, wo die Savanne niemals schläft.
              </p>
            </div>
          </div>
          
          <iframe
            src="https://www.youtube.com/embed/uVilAKUc8zE?rel=0&modestbranding=1"
            title="Migration Documentary"
            className="absolute inset-0 w-full h-full border-none opacity-0 group-hover:opacity-100 transition-opacity"
            allowFullScreen
          />
        </motion.div>
      </section>
    </div>
  );
}
