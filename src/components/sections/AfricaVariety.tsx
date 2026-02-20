
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const destinations = [
  { 
    name: 'Südafrika', 
    slug: 'south-africa',
    desc: 'Safari im Herzen Afrikas', 
    img: 'https://picsum.photos/seed/safari-sa/600/800',
    hint: 'south africa safari'
  },
  { 
    name: 'Kenia', 
    slug: 'kenia',
    desc: 'Epische Abenteuer erwarten Sie', 
    img: 'https://picsum.photos/seed/safari-kenya/600/800',
    hint: 'kenya safari'
  },
  { 
    name: 'Uganda', 
    slug: 'uganda',
    desc: 'Dschungelwunder und Gorillas', 
    img: 'https://picsum.photos/seed/safari-uganda/600/800',
    hint: 'uganda gorilla'
  },
  { 
    name: 'Äthiopien', 
    slug: 'ethiopia',
    desc: 'Land der alten Geheimnisse', 
    img: 'https://picsum.photos/seed/safari-ethiopia/600/800',
    hint: 'ethiopia landscape'
  },
  { 
    name: 'Ruanda', 
    slug: 'rwanda',
    desc: 'Das Land der Tausend Hügel', 
    img: 'https://picsum.photos/seed/safari-rwanda/600/800',
    hint: 'rwanda hills'
  },
  { 
    name: 'Botswana', 
    slug: 'botswana',
    desc: 'Entdecken Sie die wilde Luxus-Welt', 
    img: 'https://picsum.photos/seed/safari-botswana/600/800',
    hint: 'botswana wildlife'
  },
  { 
    name: 'Namibia', 
    slug: 'namibia',
    desc: 'Ein Abenteuer in der Wüste', 
    img: 'https://picsum.photos/seed/safari-namibia/600/800',
    hint: 'namibia desert'
  },
  { 
    name: 'Ägypten', 
    slug: 'egypt',
    desc: 'Zeitlose Wunder des Nils', 
    img: 'https://picsum.photos/seed/safari-egypt/600/800',
    hint: 'egypt pyramids'
  }
];

export function AfricaVariety() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              <Globe className="w-3 h-3" /> Kontinentale Vielfalt
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-6xl font-bold leading-tight text-foreground"
            >
              Entdecke Afrika in seiner <br />
              <span className="text-primary italic">ganzen Vielfalt</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-light leading-relaxed max-w-md text-sm md:text-base border-l-2 border-primary/20 pl-6"
          >
            Von der endlosen Savanne Tansanias bis zu den Pyramiden Ägyptens – jede Reise erzählt ihre eigene Geschichte. Finde dein persönliches Abenteuer zwischen Wildnis, Kultur und Luxus.
          </motion.p>
        </div>

        {/* Compacted Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-muted"
            >
              <Image 
                src={dest.img} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={dest.hint}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <p className="text-primary font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Erkunden
                </p>
                <h3 className="text-white font-headline text-xl md:text-2xl font-bold leading-tight mb-2">
                  {dest.name}
                </h3>
                <p className="text-white/60 text-[10px] md:text-xs font-light leading-relaxed mb-4 line-clamp-2">
                  {dest.desc}
                </p>
                
                <Link href={`/destinations/${dest.slug}`} className="inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest group/link">
                  Details <ArrowRight className="w-3 h-3 text-primary transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
