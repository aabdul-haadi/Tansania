"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, Leaf, Mountain, Waves } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const destinations = [
  { 
    id: 'serengeti', 
    name: 'Serengeti Plains', 
    sub: 'Tiermigration & Big Five', 
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    icon: Leaf,
    tag: 'Wildlife'
  },
  { 
    id: 'ngorongoro', 
    name: 'Ngorongoro Krater', 
    sub: 'Afrikas Garten Eden', 
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800',
    icon: Sparkles,
    tag: 'Unesco'
  },
  { 
    id: 'kilimanjaro', 
    name: 'Kilimandscharo', 
    sub: 'Das Dach Afrikas', 
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    icon: Mountain,
    tag: 'Expedition'
  },
  { 
    id: 'zanzibar', 
    name: 'Sansibar Küste', 
    sub: 'Türkisblaues Paradies', 
    img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800',
    icon: Waves,
    tag: 'Erholung'
  }
];

export function DestinationDiscovery() {
  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
            Ihre Expeditions-Ziele
          </h2>
          <p className="text-muted-foreground font-normal text-sm md:text-lg max-w-2xl mx-auto opacity-80">
            Erkunden Sie die faszinierenden Regionen, die Ihre Tansania-Reise so einzigartig machen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-muted border border-border/40"
            >
              <Link href={`/destinations/${dest.id}`} className="block relative h-full w-full">
                <Image 
                  src={dest.img} 
                  alt={dest.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                {/* Modern Bottom Shady Overlay Protocol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              </Link>

              <div className="absolute top-6 left-6 pointer-events-none">
                <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 font-bold text-[8px] px-3 py-1 tracking-normal">
                  {dest.tag}
                </Badge>
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left pointer-events-none">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                    <dest.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-headline text-2xl md:text-3xl font-normal leading-none mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-white/60 text-[10px] font-bold tracking-normal opacity-80">
                      {dest.sub}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link href={`/destinations/${dest.id}`} className="inline-flex items-center gap-2 text-white font-bold text-[10px] tracking-normal group/link pointer-events-auto hover:text-primary transition-colors">
                      Route entdecken <ArrowRight className="w-3 h-3 text-primary transition-transform group/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
