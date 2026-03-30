
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const destinations = [
  { name: 'Südafrika', slug: 'south-africa', desc: 'Safari im Herzen Afrikas', img: 'https://picsum.photos/seed/safari-sa/600/800', hint: 'south africa safari' },
  { name: 'Kenia', slug: 'kenia', desc: 'Epische Abenteuer erwarten Sie', img: 'https://picsum.photos/seed/safari-kenya/600/800', hint: 'kenya safari' },
  { name: 'Uganda', slug: 'uganda', desc: 'Dschungelwunder und Gorillas', img: 'https://picsum.photos/seed/safari-uganda/600/800', hint: 'uganda gorilla' },
  { name: 'Äthiopien', slug: 'ethiopia', desc: 'Land der alten Geheimnisse', img: 'https://picsum.photos/seed/safari-ethiopia/600/800', hint: 'ethiopia landscape' },
  { name: 'Ruanda', slug: 'rwanda', desc: 'Das Land der Tausend Hügel', img: 'https://picsum.photos/seed/safari-rwanda/600/800', hint: 'rwanda hills' },
  { name: 'Botswana', slug: 'botswana', desc: 'Entdecken Sie die wilde Welt', img: 'https://picsum.photos/seed/safari-botswana/600/800', hint: 'botswana wildlife' },
  { name: 'Namibia', slug: 'namibia', desc: 'Ein Abenteuer in der Wüste', img: 'https://picsum.photos/seed/safari-namibia/600/800', hint: 'namibia desert' },
  { name: 'Ägypten', slug: 'egypt', desc: 'Zeitlose Wunder des Nils', img: 'https://picsum.photos/seed/safari-egypt/600/800', hint: 'egypt pyramids' }
];

export function AfricaVariety() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-bold text-[8px] uppercase tracking-[0.4em] mb-2"
            >
              <Globe className="w-2.5 h-2.5" /> Kontinentale Vielfalt
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-xl md:text-3xl font-bold leading-[0.9] text-foreground uppercase tracking-tighter"
            >
              Entdecke Afrika in seiner <br />
              <span className="text-primary">ganzen Vielfalt</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-bold leading-relaxed max-w-xs text-[9px] md:text-xs border-l-2 border-primary/20 pl-4 uppercase tracking-widest"
          >
            Von der Savanne Tansanias bis zu den Pyramiden Ägyptens – jede Reise erzählt ihre eigene Geschichte.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[4/5] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden cursor-pointer bg-muted shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image 
                src={dest.img} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={dest.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                <p className="text-primary font-bold text-[7px] md:text-[8px] uppercase tracking-[0.2em] mb-0.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Erkunden
                </p>
                <h3 className="text-white font-headline text-sm md:text-xl font-bold leading-tight mb-1 uppercase tracking-tight">
                  {dest.name}
                </h3>
                <p className="text-white/60 text-[7px] md:text-[9px] font-bold leading-relaxed mb-3 line-clamp-2 uppercase tracking-widest">
                  {dest.desc}
                </p>
                
                <Link href={`/destinations/${dest.slug}`} className="inline-flex items-center gap-1.5 text-white font-bold text-[7px] md:text-[8px] uppercase tracking-widest group/link">
                  Details <ArrowRight className="w-2.5 h-2.5 text-primary transition-transform group/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
