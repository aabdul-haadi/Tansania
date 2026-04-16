"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Safari & Sansibar",
    desc: "Die perfekte Kombination aus Wildnis und Paradies",
    img: "/assets/images/home/intro-01.webp",
    href: "/safaris",
    hint: "safari zanzibar"
  },
  {
    title: "Luxusreisen",
    desc: "Exklusive Unterkünfte und außergewöhnliche Erlebnisse",
    img: "/assets/images/home/intro-02.webp",
    href: "/safaris",
    hint: "luxury lodge"
  },
  {
    title: "Flitterwochen",
    desc: "Romantische Momente in Afrikas schönsten Landschaften",
    img: "/assets/images/home/intro-03.webp",
    href: "/safaris",
    hint: "honeymoon safari"
  },
  {
    title: "Familienreisen",
    desc: "Unvergessliche Abenteuer für die ganze Familie",
    img: "/assets/images/home/intro-04.webp",
    href: "/safaris",
    hint: "family beach"
  },
  {
    title: "Kilimandscharo",
    desc: "Besteigen Sie Afrikas höchsten Gipfel",
    img: "/assets/images/home/intro-05.png",
    href: "/destinations/kilimanjaro",
    hint: "mount kilimanjaro"
  },
  {
    title: "Individuelle Afrika-Reisen",
    desc: "Ihre Vision, unsere Expertise",
    img: "/assets/images/home/intro-06.webp",
    href: "/trip-planner",
    hint: "custom safari"
  }
];

export function TravelCategories() {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-24 bg-white">
      <div className="container mx-auto px-4 max-get-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal"
          >
            Welche Reise passt zu Ihnen?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[14px] leading-[20px] opacity-80"
          >
            Entdecken Sie unsere sorgfältig kuratierten Reisekategorien
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[16/11] md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-muted border border-border/50"
            >
              <Link href={cat.href} className="block relative h-full w-full">
                <Image 
                  src={cat.img} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={cat.hint}
                />
                {/* Targeted Bottom Shady Overlay Protocol: No full image darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </Link>
              
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-left pointer-events-none">
                <Link href={cat.href} className="pointer-events-auto">
                  <h3 className="text-white mb-2 font-headline text-[24px] leading-[32px] font-medium tracking-normal hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                </Link>
                <p className="text-white/90 mb-6 line-clamp-2 text-[14px] leading-[20px] font-normal tracking-normal">
                  {cat.desc}
                </p>
                
                <Link href={cat.href} className="inline-flex items-center gap-2 text-white font-bold text-[11px] tracking-normal group/link pointer-events-auto">
                  Mehr erfahren <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform group/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
