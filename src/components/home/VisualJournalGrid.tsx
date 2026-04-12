"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * High-Density Visual Grid.
 * Optimized asset delivery using unoptimized prop for local deployment images.
 * Refined bottom-weighted overlay protocol.
 */
export function VisualJournalGrid() {
  return (
    <section className="pb-16 md:pb-32 pt-4 md:pt-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[900px]"
        >
          {/* Item 1: Large Vertical Left Anchor */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl border border-border/50 bg-muted h-[500px] md:h-full"
          >
            <Image 
              src="/assets/images/home/gallery-01.png" 
              alt="Luxus Safari Erlebnis" 
              fill 
              unoptimized
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              data-ai-hint="safari relaxation"
            />
            {/* Targeted Bottom Shady Overlay Protocol: Clear top, protected text bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 right-10 space-y-3 text-left">
              <h3 className="font-headline text-2xl md:text-4xl text-white leading-tight tracking-normal uppercase">
                Luxus inmitten der Wildnis
              </h3>
              <p className="text-[14px] leading-[20px] font-normal text-white/70 tracking-normal uppercase opacity-80 max-w-md">
                Exklusive Lodges, die höchsten Komfort mit authentischen Erlebnissen verbinden.
              </p>
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="grid grid-rows-2 gap-6">
            {/* Item 2: Top Right */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl border border-border/50 bg-muted h-[300px] md:h-auto"
            >
              <Image 
                src="/assets/images/home/gal-2.webp" 
                alt="Sansibar Strand" 
                fill 
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                data-ai-hint="zanzibar beach"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 space-y-2 text-left">
                <h3 className="font-headline text-xl md:text-3xl text-white leading-tight tracking-normal uppercase">
                  Paradiesische Strände
                </h3>
                <p className="text-[14px] leading-[20px] font-normal text-white/70 tracking-normal uppercase opacity-80">
                  Entspannen Sie nach Ihrer Safari auf Sansibar.
                </p>
              </div>
            </motion.div>

            {/* Item 3: Bottom Right */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl border border-border/50 bg-muted h-[300px] md:h-auto"
            >
              <Image 
                src="/assets/images/home/gal-3.webp" 
                alt="Wildlife Tansania" 
                fill 
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                data-ai-hint="safari wildlife"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 space-y-2 text-left">
                <h3 className="font-headline text-xl md:text-3xl text-white leading-tight tracking-normal uppercase">
                  Wildlife hautnah
                </h3>
                <p className="text-[14px] leading-[20px] font-normal text-white/70 tracking-normal uppercase opacity-80">
                  Begegnungen, die Sie nie vergessen werden.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}