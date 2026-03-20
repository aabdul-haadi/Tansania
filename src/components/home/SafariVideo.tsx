"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function SafariVideo() {
  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3"
          >
            Serengeti Dreams Cinema
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
          >
            Die Wildnis <span className="text-primary">Ungefiltert Erleben</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-lg font-bold max-w-2xl leading-relaxed uppercase tracking-widest"
          >
            Erleben Sie die rohe Schönheit Tansanias durch unsere Linse. Vom Herzen der Migration bis zum stillen Flüstern der Savanne.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-video w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl bg-black group max-w-5xl mx-auto border-8 border-white shadow-primary/10"
        >
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/unBMVxhl-C0"
            title="Serengeti Dreams Experience"
            className="absolute inset-0 w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
