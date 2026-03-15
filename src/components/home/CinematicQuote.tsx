"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function CinematicQuote() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-16 px-4 bg-[#0a0a0a]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920')] bg-cover bg-center opacity-10 grayscale brightness-50"
          data-ai-hint="safari sunset"
        />
      </div>
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="space-y-6">
          <div className="w-8 h-px bg-primary/40 mx-auto" />
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
            „Man besucht Afrika nicht einfach. <br className="hidden md:block" />
            <span className="text-primary">Afrika verändert einen.</span>“
          </h2>
          <p className="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">— Reisender</p>
          <div className="w-8 h-px bg-primary/40 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
