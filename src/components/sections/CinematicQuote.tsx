"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function CinematicQuote() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 px-4 bg-[#0a0a0a]">
      {/* Subtle Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[url('https://picsum.photos/seed/safari-night/1920/1080')] bg-cover bg-center opacity-10 grayscale brightness-50"
          data-ai-hint="safari sunset"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-px bg-primary/40" />
          </div>

          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            “You don’t visit Africa. <br className="hidden md:block" />
            <span className="text-primary italic">Africa changes you.</span>”
          </h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/40 font-bold uppercase tracking-[0.4em] text-xs md:text-sm"
          >
            — Recent Traveler
          </motion.p>

          <div className="flex justify-center mt-6">
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </motion.div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
