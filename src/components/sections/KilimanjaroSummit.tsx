
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const routes = [
  { name: 'Machame Route', desc: 'scenic & popular' },
  { name: 'Lemosho Route', desc: 'quieter & premium' },
  { name: 'Marangu Route', desc: 'classic hut trek' }
];

export function KilimanjaroSummit() {
  const kiliImg = PlaceHolderImages.find(img => img.id === 'kilimanjaro-summit');

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[55%] relative aspect-[16/10] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={kiliImg?.imageUrl || 'https://picsum.photos/seed/kili/1200/1500'}
              alt="Kilimanjaro at Sunrise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
              data-ai-hint="mount kilimanjaro"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Content Column */}
          <div className="w-full lg:w-[45%] max-w-[900px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-8"
            >
              {/* Label */}
              <motion.span 
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-primary block"
              >
                Kilimanjaro Treks
              </motion.span>

              {/* Heading Group */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative inline-block"
              >
                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4">
                  Climb Africa’s <br /> Iconic Roof
                </h2>
                <svg width="100%" height="2" className="mt-2 text-primary/30">
                  <motion.path
                    d="M 0 1 L 200 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-muted-foreground text-lg font-light leading-relaxed max-w-md"
              >
                Experience the magic of a sunrise summit. Our expert guides ensure a safety-first journey with specialized acclimatization protocols across multiple legendary routes.
              </motion.p>

              {/* Route Highlights */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-5 py-4"
              >
                {routes.map((route) => (
                  <div key={route.name} className="group flex items-center gap-4 cursor-default">
                    <div className="relative w-6 h-px bg-muted-foreground/20 overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    </div>
                    <div className="flex items-baseline gap-2 transition-transform duration-300 group-hover:translate-x-1">
                      <span className="font-bold text-sm tracking-tight">{route.name}</span>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-wider">
                        — {route.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
              >
                <Link href="/safaris?category=kilimanjaro">
                  <Button size="lg" className="rounded-full px-8 h-14 font-bold shadow-lg">
                    View Kilimanjaro Treks
                  </Button>
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm font-bold flex items-center gap-2 group hover:text-primary transition-colors min-h-[44px]"
                >
                  Ask for the best route for me
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
