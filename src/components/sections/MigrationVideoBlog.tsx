
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function MigrationVideoBlog() {
  return (
    <div className="bg-white pt-8 pb-16 md:pb-32 overflow-hidden border-t border-border/40">
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
            Die Serengeti in Bewegung
          </h2>
          <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl mx-auto opacity-80 tracking-normal">
            Erleben Sie die Intensität der Wanderung. Unsere Filmaufnahmen bringen Sie direkt in die grenzenlose Savanne.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-black border-8 border-white group"
        >
          {/* Native YouTube Player without custom static thumbnail to keep native feel */}
          <iframe
            src="https://www.youtube.com/embed/uVilAKUc8zE?rel=0&modestbranding=1"
            title="Migration Documentary"
            className="absolute inset-0 w-full h-full border-none"
            allowFullScreen
          />
        </motion.div>
      </section>
    </div>
  );
}
