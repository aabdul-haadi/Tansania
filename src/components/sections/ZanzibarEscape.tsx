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
    label: 'Beach Relaxation', 
    text: 'Drift away on pristine white sands as the turquoise Indian Ocean laps at your feet.' 
  },
  { 
    id: 'culture', 
    label: 'Stone Town Culture', 
    text: 'Lose yourself in the labyrinthine alleys of Stone Town, rich with the scent of cloves and history.' 
  },
  { 
    id: 'cruise', 
    label: 'Sunset Cruises', 
    text: 'Sail the Swahili coast on a traditional wooden dhow as the horizon ignites in amber and violet.' 
  }
];

export function ZanzibarEscape() {
  const [activeExp, setActiveExp] = useState(experiences[0]);
  const zanzibarImg = PlaceHolderImages.find(img => img.id === 'zanzibar-coast');

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Column (order-1 on mobile, order-1 on desktop) */}
          <div className="w-full lg:w-[45%] order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-8"
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
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
              >
                Slow Down on <br /> the Swahili Coast
              </motion.h2>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-muted-foreground text-lg font-light leading-relaxed max-w-md"
              >
                Contrast your safari adventure with the tranquil rhythm of Zanzibar. From private spice tours to turquoise shores, we curate the ultimate tropical finale.
              </motion.p>

              {/* Experience Switch Micro-UI */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-6 pt-4"
              >
                <div className="flex overflow-x-auto pb-2 lg:pb-0 scrollbar-hide snap-x gap-2">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExp(exp)}
                      className={cn(
                        "whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all snap-start border",
                        activeExp.id === exp.id 
                          ? "bg-secondary text-white border-secondary shadow-lg" 
                          : "bg-muted/50 text-muted-foreground border-transparent hover:border-muted-foreground/20"
                      )}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[60px] relative">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeExp.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-sm italic text-secondary/80 leading-relaxed font-body"
                    >
                      “{activeExp.text}”
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
              >
                <Link href="/safaris?category=zanzibar">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 font-bold shadow-lg">
                    Explore Zanzibar Add-Ons
                  </Button>
                </Link>
                <Link 
                  href="/trip-planner" 
                  className="text-sm font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[44px]"
                >
                  Pair Zanzibar with Safari
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Column (order-2 on mobile, order-2 on desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%] relative aspect-[16/10] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl order-2"
          >
            <Image
              src={zanzibarImg?.imageUrl || 'https://picsum.photos/seed/zanzibar-escape/1200/1500'}
              alt="Zanzibar Coastline"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
              data-ai-hint="zanzibar coast"
            />
            {/* Soft Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-primary/5" />
            
            {/* Subtle Ocean Shimmer Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <div className="absolute inset-0 animate-shimmer" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
