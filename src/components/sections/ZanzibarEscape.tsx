"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const experiences = [
  { 
    id: 'beach', 
    label: 'Beach', 
    text: 'Drift away on white sands as the turquoise ocean laps at your feet.',
    img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1200&auto=format&fit=crop',
    hint: 'zanzibar beach'
  },
  { 
    id: 'culture', 
    label: 'Culture', 
    text: 'Lose yourself in Stone Town, rich with the scent of cloves and history.',
    img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1200&auto=format&fit=crop',
    hint: 'stone town'
  },
  { 
    id: 'cruise', 
    label: 'Cruises', 
    text: 'Sail the Swahili coast on a traditional wooden dhow at sunset.',
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    hint: 'dhow cruise'
  }
];

export function ZanzibarEscape() {
  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section className="py-8 lg:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Content Column */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-4"
            >
              <motion.span 
                variants={{
                  hidden: { opacity: 0, x: 10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary block"
              >
                Zanzibar Island
              </motion.span>

              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Slow Down on <br /> the Swahili Coast
              </motion.h2>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-muted-foreground text-sm lg:text-base font-light leading-relaxed max-w-md"
              >
                Contrast your safari adventure with the tranquil rhythm of Zanzibar's shores.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-4 pt-2"
              >
                <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExp(exp)}
                      className={cn(
                        "whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border",
                        activeExp.id === exp.id 
                          ? "bg-secondary text-white border-secondary shadow-md" 
                          : "bg-muted/50 text-muted-foreground border-transparent hover:border-muted-foreground/20"
                      )}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[40px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeExp.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-xs italic text-secondary/80 leading-relaxed"
                    >
                      “{activeExp.text}”
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
              >
                <Link href="/safaris?category=zanzibar">
                  <Button size="sm" variant="secondary" className="rounded-full px-6 h-10 font-bold shadow-lg text-[10px]">
                    Explore Add-Ons
                  </Button>
                </Link>
                <Link href="/trip-planner" className="text-[10px] font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[40px]">
                  Pair with Safari
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[55%] relative aspect-[16/10] lg:aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-xl order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image 
                  src={activeExp.img} 
                  alt={activeExp.label} 
                  fill 
                  className="object-cover" 
                  data-ai-hint={activeExp.hint} 
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-primary/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
