
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  Palmtree, 
  Anchor, 
  Waves, 
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';
import { Badge } from '@/components/ui/badge';

const registryCards = [
  {
    title: "Safari am Strand",
    desc: "Endlose einsame Strände mit palmengesäumten Buchten grenzen direkt an wildes Buschland – diese Kombination aus Strandurlaub und Safari findet man sonst kaum irgendwo auf der Welt.",
    icon: Palmtree
  },
  {
    title: "Die kleine Serengeti",
    desc: "Die Tierwelt Saadanis steht den bekannten Parks kaum nach: Löwen, Büffel, Zebras, Giraffen und zahlreiche Antilopen durchstreifen sogar die Dünen und Mangroven entlang der Küste.",
    icon: Anchor
  },
  {
    title: "Wasser-Paradies",
    desc: "Die Flussmündungen und Mangroven bieten Lebensraum für unzählige Vögel, Flusspferde und seltene Meeresschildkröten, die an Saadanis Stränden ihre Eier ablegen.",
    icon: Waves
  },
  {
    title: "Expeditions-Logistik",
    desc: "Mit ca. 1.100 km² ist der Park ideal für Reisende, die Wildnis und Ozean ohne lange Transferzeiten verbinden möchten. Perfekt erreichbar von Sansibar oder Dar Es Salaam.",
    icon: Clock
  }
];

export default function SaadaniParkPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1920" 
          alt="Saadani Nationalpark Coastline" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white text-[11px] font-normal tracking-normal drop-shadow-lg uppercase tracking-[0.3em]">
              Dort, wo der Busch den Ozean küsst
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Saadani Nationalpark
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-bold text-[10px] block tracking-widest">
                  Einzigartige Küsten-Dynamik
                </span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                Safari trifft Strandparadies
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] opacity-90">
                <p>
                  Der Saadani Nationalpark ist Tansanias einzige geschützte Region, die direkt an den Indischen Ozean grenzt. Hier erleben Sie eine Szenerie, die fast surreal wirkt: Elefanten, die im Sand der Dünen wandern, und Löwen, die im Schatten der Palmen direkt hinter dem Strand ruhen.
                </p>
                <p>
                  Die Mischung aus marinen und terrestrischen Ökosystemen macht Saadani zu einem Hotspot der Biodiversität. Ob bei einer Bootssafari auf dem Wami-Fluss zwischen Krokodilen und Flusspferden oder bei einer Pirschfahrt durch die Küstensavanne – Saadani bietet ein unvergleichliches Erlebnis für Entdecker, die das Besondere suchen.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted">
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Wildlife near Saadani coast" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 Information Matrix */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {registryCards.map((card, i) => (
              <Card key={i} className="h-full border-none shadow-sm bg-[#fdfcfb] rounded-[1.5rem] md:rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group border border-border/20">
                <CardContent className="p-8 md:p-12 flex items-start gap-6 md:gap-8 text-left">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary transition-colors border border-border/40">
                    <card.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-headline text-xl md:text-[28px] font-normal text-secondary tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-[14px] leading-[20px] text-muted-foreground font-normal opacity-80">
                      {card.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Action Trigger */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl text-center lg:text-left">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 lg:w-[60%] space-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl shrink-0">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-normal text-white leading-tight tracking-tighter">Planen Sie Ihre perfekte Saadani Safari</h2>
              </div>
              <p className="text-white/80 font-normal text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl mx-auto lg:mx-0">Erleben Sie den Busch direkt am Indischen Ozean. Wir entwerfen Ihre individuelle Küsten-Safari für ein unvergleichliches Naturerlebnis.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="saadani" />
      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
