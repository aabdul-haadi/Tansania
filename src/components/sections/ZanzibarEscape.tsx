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
  { id: 'beach', label: 'Beach', text: 'Drift away on white sands as the turquoise ocean laps at your feet.' },
  { id: 'culture', label: 'Culture', text: 'Lose yourself in Stone Town, rich with scent of cloves and history.' },
  { id: 'cruise', label: 'Cruises', text: 'Sail the Swahili coast on a traditional wooden dhow at sunset.' }
];

export function ZanzibarEscape() {
  const [activeExp, setActiveExp] = useState(experiences[0]);
  const zanzibarImg = PlaceHolderImages.find(img => img.id === 'zanzibar-coast');

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Content Column */}
          <div className="w-full lg:w-[45%] order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
                className="text-xs font-bold uppercase tracking-[0.3em] text-primary block"
              >
                Zanzibar Island
              </motion.span>

              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
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
                Contrast your safari adventure with the tranquil rhythm of Zanzibar.
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

                <div className="min-h-[50px]">
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
                  <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-lg text-xs">
                    Explore Add-Ons
                  </Button>
                </Link>
                <Link href="/trip-planner" className="text-xs font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[44px]">
                  Pair with Safari
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%] relative aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl order-2"
          >
            <Image src={zanzibarImg?.imageUrl || 'https://picsum.photos/seed/zanzibar-escape/1200/1500'} alt="Zanzibar" fill className="object-cover" data-ai-hint="zanzibar coast" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-primary/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}