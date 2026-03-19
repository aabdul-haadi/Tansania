
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, MapPin, Compass, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const countries = [
  { name: 'Ägypten', slug: 'egypt', desc: 'Zeitlose Wunder des Nils und der Pharaonen.', img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800', hint: 'egypt pyramids' },
  { name: 'Tansania', slug: 'tanzania', desc: 'Die unendliche Weite der Serengeti und Sansibar.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800', hint: 'serengeti safari' },
  { name: 'Kenia', slug: 'kenya', desc: 'Epische Abenteuer im Herzen der Maasai Mara.', img: 'https://picsum.photos/seed/safari-kenya/600/800', hint: 'kenya safari' },
  { name: 'Südafrika', slug: 'south-africa', desc: 'Weinberge, Kapstadt und erstklassige Safaris.', img: 'https://picsum.photos/seed/safari-sa/600/800', hint: 'south africa' },
  { name: 'Namibia', slug: 'namibia', desc: 'Die Magie der Wüste und endlose Horizonte.', img: 'https://picsum.photos/seed/safari-namibia/600/800', hint: 'namibia desert' },
  { name: 'Botswana', slug: 'botswana', desc: 'Das Okavango Delta und pure Wildnis-Erlebnisse.', img: 'https://picsum.photos/seed/safari-botswana/600/800', hint: 'botswana wildlife' },
  { name: 'Uganda', slug: 'uganda', desc: 'Neblige Regenwälder und seltene Berggorillas.', img: 'https://picsum.photos/seed/safari-uganda/600/800', hint: 'uganda gorilla' },
  { name: 'Ruanda', slug: 'rwanda', desc: 'Das Land der tausend Hügel und Primate-Tracking.', img: 'https://picsum.photos/seed/safari-rwanda/600/800', hint: 'rwanda landscape' }
];

export default function DestinationsHub() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] border border-primary/20">
            <Globe className="w-3.5 h-3.5" /> Continent Registry
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-headline text-4xl md:text-8xl font-black text-secondary uppercase tracking-tighter leading-none">
            ENTDECKE <br /><span className="text-primary">AFRIKA</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-60">
            Unsere 8 Kern-Destinitionen – Von der Sahara bis zum Kap der Guten Hoffnung.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {countries.map((country, idx) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-muted"
            >
              <Image 
                src={country.img} 
                alt={country.name} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                data-ai-hint={country.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <Badge className="bg-primary text-white border-none font-black text-[8px] uppercase tracking-widest shadow-lg">
                    Country Registry
                  </Badge>
                </div>
                <h3 className="text-white font-headline text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">
                  {country.name}
                </h3>
                <p className="text-white/60 text-[10px] font-bold leading-relaxed mb-6 line-clamp-2 uppercase tracking-widest">
                  {country.desc}
                </p>
                
                <Link href={`/destinations/${country.slug}`}>
                  <Button className="w-full rounded-xl h-12 bg-white/10 backdrop-blur-md border-white/20 text-white font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:border-primary transition-all group/btn" suppressHydrationWarning>
                    Destination erleben <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scalability Disclaimer */}
        <div className="mt-32 p-12 bg-white rounded-[3rem] border border-border/50 text-center space-y-6">
          <div className="w-16 h-16 rounded-[1.5rem] bg-muted mx-auto flex items-center justify-center">
            <Compass className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-headline text-2xl font-bold text-secondary uppercase tracking-tight">Massive Expedition Library</h3>
          <p className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Beyond our 8 core destinations, we maintain a registry of over 100+ safari combinations and bespoke offer itineraries. Use our AI Trip Advisor to navigate the full portfolio.
          </p>
          <div className="pt-4">
            <Button asChild className="rounded-full px-12 h-16 font-black text-[10px] uppercase tracking-[0.3em] shadow-xl border-none" suppressHydrationWarning>
              <Link href="/trip-advisor">Ask AI Concierge <Sparkles className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
