"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const experiences = [
  { 
    id: 'beach', 
    label: 'Strand-Entspannung', 
    text: 'Lassen Sie sich an unberührten weißen Stränden treiben, während der türkisblaue Ozean in abgelegenen Küstenparadiesen Ihre Füße umspült.',
    img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1200&auto=format&fit=crop',
    hint: 'zanzibar beach'
  },
  { 
    id: 'culture', 
    label: 'Stone Town Kultur', 
    text: 'Verlieren Sie sich in den verwinkelten Gassen von Stone Town, erfüllt vom Duft von Nelken und Jahrhunderten Swahili-Geschichte.',
    img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1200&auto=format&fit=crop',
    hint: 'stone town'
  },
  { 
    id: 'cruise', 
    label: 'Gewürz- & Segeltouren', 
    text: 'Segeln Sie auf einer traditionellen Dhow entlang der Küste, während der Himmel in den Farben eines tropischen Sonnenuntergangs erglüht.',
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    hint: 'dhow cruise'
  }
];

export function ZanzibarEscape() {
  const [activeExp, setActiveExp] = useState(experiences[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-8 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
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
                Inselparadies Sansibar
              </motion.span>

              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-headline text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight"
              >
                Entschleunigung an der <br /> Swahili-Küste
              </motion.h2>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-muted-foreground text-base lg:text-lg font-bold leading-relaxed max-w-md uppercase tracking-widest"
              >
                Kombinieren Sie Ihre Safari mit dem entspannten Rhythmus der Insel Sansibar und dem Duft der Gewürze.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-6 pt-2"
              >
                <div className="flex flex-wrap gap-2">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExp(exp)}
                      suppressHydrationWarning
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

                <div className="min-h-[60px]">
                  {isMounted && (
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeExp.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm md:text-base text-secondary font-bold leading-relaxed uppercase tracking-widest"
                      >
                        {activeExp.text}
                      </motion.p>
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
              >
                <Button asChild size="lg" className="rounded-full px-10 h-14 font-bold shadow-xl text-[10px] uppercase tracking-widest">
                  <Link href="/safaris">Erweiterungen Entdecken</Link>
                </Button>
                <Link href="/trip-planner" className="text-[10px] font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[44px] text-foreground uppercase tracking-widest">
                  Mit Safari kombinieren
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}