"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const experiences = [
  { 
    id: 'beach', 
    label: 'Beach Relaxation', 
    text: 'Drift away on pristine white sands as the turquoise ocean laps at your feet in secluded coastal havens.',
    img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1200&auto=format&fit=crop',
    hint: 'zanzibar beach'
  },
  { 
    id: 'culture', 
    label: 'Stone Town Culture', 
    text: 'Lose yourself in the winding alleys of Stone Town, rich with the scent of cloves and centuries of Swahili history.',
    img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1200&auto=format&fit=crop',
    hint: 'stone town'
  },
  { 
    id: 'cruise', 
    label: 'Spice & Sunset Cruises', 
    text: 'Sail the Swahili coast on a traditional wooden dhow as the sky ignites with the colors of a tropical sunset.',
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    hint: 'dhow cruise'
  }
];

export function ZanzibarEscape() {
  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section className="py-8 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Content Column - Reversed for rhythm */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-6"
            >
              <motion.span 
                variants={{
                  hidden: { opacity: 0, x: 10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary block"
              >
                Zanzibar Island
              </motion.span>

              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Slow Down on <br /> the Swahili Coast
              </motion.h2>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-md"
              >
                Contrast your rugged safari adventure with the tranquil rhythm of Zanzibar's shores and spice-scented winds.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-6 pt-2"
              >
                {/* Experience Switcher */}
                <div className="flex flex-wrap gap-2">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExp(exp)}
                      className={cn(
                        "whitespace-nowrap px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border",
                        activeExp.id === exp.id 
                          ? "bg-primary text-white border-primary shadow-lg scale-105" 
                          : "bg-muted/30 text-muted-foreground border-transparent hover:border-muted-foreground/20"
                      )}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>

                {/* Narrative Text */}
                <div className="min-h-[60px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeExp.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm md:text-base text-secondary/70 leading-relaxed font-light"
                    >
                      "{activeExp.text}"
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
              >
                <Link href="/safaris">
                  <Button size="lg" className="rounded-full px-10 h-14 font-bold shadow-xl text-xs">
                    Explore Add-Ons
                  </Button>
                </Link>
                <Link href="/trip-planner" className="text-xs font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[44px] text-foreground">
                  Pair with Safari
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Column - Syncs with Experience */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[55%] relative aspect-[16/10] lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={activeExp.img} 
                  alt={activeExp.label} 
                  fill 
                  className="object-cover" 
                  priority
                  data-ai-hint={activeExp.hint} 
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-primary/5 pointer-events-none" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
              <div className="w-full h-full animate-[pulse_8s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
