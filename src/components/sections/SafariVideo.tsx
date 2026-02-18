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
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3"
          >
            Serengeti Dreams Cinema
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-5xl font-bold mb-4"
          >
            Experience the <span className="text-primary italic">Wild Unfiltered</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed"
          >
            Witness the raw beauty of Tanzania through our lens. From the heart of the migration to the silent whispers of the savannah.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl bg-black group max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
            <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
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