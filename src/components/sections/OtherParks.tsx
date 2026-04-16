
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const allParks = [
  { id: 'serengeti', name: 'Serengeti', sub: 'Endlose Savannen', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800', href: '/national-parks/serengeti' },
  { id: 'ngorongoro', name: 'Ngorongoro', sub: 'Afrikas Garten Eden', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800', href: '/national-parks/ngorongoro' },
  { id: 'kilimanjaro', name: 'Kilimandscharo', sub: 'Dach Afrikas', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800', href: '/national-parks/kilimanjaro' },
  { id: 'tarangire', name: 'Tarangire', sub: 'Reich der Riesen', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800', href: '/national-parks/tarangire' },
  { id: 'manyara', name: 'Lake Manyara', sub: 'Grünes Juwel', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800', href: '/national-parks/manyara' },
  { id: 'arusha', name: 'Mount Meru', sub: 'Mystische Wälder', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800', href: '/national-parks/arusha' },
  { id: 'saadani', name: 'Saadani', sub: 'Busch trifft Ozean', img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800', href: '/national-parks/saadani' }
];

interface OtherParksProps {
  excludeId: string;
}

export function OtherParks({ excludeId }: OtherParksProps) {
  const filteredParks = allParks.filter(p => p.id !== excludeId);

  return (
    <section className="py-10 md:py-20 bg-[#fdfcfb] overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <h2 className="font-headline text-2xl md:text-5xl font-normal text-secondary tracking-tighter">
            Weitere Nationalparks entdecken
          </h2>
          <p className="text-muted-foreground font-bold text-[10px] md:text-sm tracking-widest max-w-xl mx-auto">
            Tansania bietet unzählige Wunder – erkunden Sie die Vielfalt unserer geschützten Ökosysteme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredParks.map((park, idx) => (
            <motion.div
              key={park.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-border/40 bg-muted"
            >
              <Image src={park.img} alt={park.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white border-none text-[7px] font-bold px-3 py-1 tracking-widest">Nationalpark</Badge>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-white font-headline text-2xl mb-1 leading-none">{park.name}</h3>
                <p className="text-primary font-bold text-[9px] tracking-widest mb-4">{park.sub}</p>
                <Link href={park.href} className="inline-flex items-center gap-2 text-white font-bold text-[10px] tracking-widest group/link">
                  Park ansehen <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
