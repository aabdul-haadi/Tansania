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
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    href: "/safaris",
    hint: "safari zanzibar"
  },
  {
    title: "Luxusreisen",
    desc: "Exklusive Unterkünfte und außergewöhnliche Erlebnisse",
    img: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800",
    href: "/safaris",
    hint: "luxury lodge"
  },
  {
    title: "Flitterwochen",
    desc: "Romantische Momente in Afrikas schönsten Landschaften",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800",
    href: "/safaris",
    hint: "honeymoon safari"
  },
  {
    title: "Familienreisen",
    desc: "Unvergessliche Abenteuer für die ganze Familie",
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
    href: "/safaris",
    hint: "family beach"
  },
  {
    title: "Kilimandscharo",
    desc: "Besteigen Sie Afrikas höchsten Gipfel",
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800",
    href: "/destinations/kilimanjaro",
    hint: "mount kilimanjaro"
  },
  {
    title: "Individuelle Afrika-Reisen",
    desc: "Ihre Vision, unsere Expertise",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    href: "/trip-planner",
    hint: "custom safari"
  }
];

export function TravelCategories() {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tighter"
          >
            Welche Reise passt zu Ihnen?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[10px] md:text-xs uppercase tracking-widest max-w-xl mx-auto opacity-80"
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
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill 
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                data-ai-hint={cat.hint}
              />
              {/* Added subtle light uniform overlay and gradient for maximum text visibility */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <h3 className="text-white font-headline text-lg md:text-2xl font-normal uppercase tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/70 text-[9px] md:text-[10px] font-normal leading-relaxed mb-6 uppercase tracking-widest line-clamp-2 opacity-80">
                  {cat.desc}
                </p>
                
                <Link href={cat.href} className="inline-flex items-center gap-2 text-white font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] group/link">
                  Mehr erfahren <ArrowRight className="w-3 h-3 text-primary transition-transform group/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
