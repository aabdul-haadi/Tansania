"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const routes = [
  { name: 'Machame Route', desc: 'malerisch & beliebt' },
  { name: 'Lemosho Route', desc: 'ruhig & exklusiv' },
  { name: 'Marangu Route', desc: 'klassische Hütte' }
];

export function KilimanjaroSummit() {
  const kiliImg = PlaceHolderImages.find(img => img.id === 'kilimanjaro-summit');

  return (
    <section className="py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[50%] relative aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={kiliImg?.imageUrl || 'https://picsum.photos/seed/kili/1200/1500'}
              alt="Kilimandscharo bei Sonnenaufgang"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint="mount kilimanjaro"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Content Column */}
          <div className="w-full lg:w-[50%] max-w-[600px]">
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
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-primary block"
              >
                Gipfelexpeditionen
              </motion.span>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-2 text-foreground uppercase tracking-tighter">
                  Besteigen Sie das <br /> Dach Afrikas
                </h2>
                <div className="w-24 h-0.5 bg-primary/30" />
              </motion.div>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-muted-foreground text-base lg:text-lg font-bold leading-relaxed max-w-md uppercase tracking-widest"
              >
                Erleben Sie eine sicherheitsorientierte Reise mit spezialisierten Akklimatisierungsprotokollen auf legendären Routen.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-4 py-2"
              >
                {routes.map((route) => (
                  <div key={route.name} className="group flex items-center gap-4 cursor-default">
                    <div className="w-4 h-px bg-muted-foreground/20 shrink-0" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-xs lg:text-sm tracking-tight text-foreground uppercase">{route.name}</span>
                      <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">
                        — {route.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
              >
                <Link href="/safaris?category=kilimanjaro">
                  <Button size="lg" className="rounded-full px-8 h-12 font-bold shadow-lg text-[10px] uppercase tracking-widest">
                    Routen ansehen
                  </Button>
                </Link>
                <Link 
                  href="/contact" 
                  className="text-[10px] font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[44px] text-foreground uppercase tracking-widest"
                >
                  Beste Route für mich
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
