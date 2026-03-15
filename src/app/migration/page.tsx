
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Camera, 
  TreePine, 
  Map, 
  ArrowUp, 
  CheckCircle2, 
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/sections/ContactSection';

export default function MigrationPage() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* SECTION 1: Massive Impact Hero */}
      <section className="relative h-[70vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="Great Migration Serengeti"
          fill
          priority
          className="object-cover brightness-[0.6] scale-105"
          data-ai-hint="serengeti migration"
        />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-2"
          >
            <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-sm drop-shadow-lg block">
              Die Great Migration in Tansania
            </span>
            <h1 className="font-headline text-6xl md:text-[12rem] lg:text-[16rem] font-black text-white leading-none tracking-tighter uppercase drop-shadow-2xl">
              MIGRATION
            </h1>
            <span className="text-white font-black uppercase tracking-[0.5em] text-[10px] md:text-lg drop-shadow-lg block pt-4">
              Die Größte Tierwanderung Der Welt
            </span>
          </motion.div>
        </div>

        {/* Hero Activity Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-3 md:gap-6 px-4">
          {[
            { icon: Map, label: 'Safari' },
            { icon: Camera, label: 'Fotografie' },
            { icon: TreePine, label: 'Camping' },
            { icon: Compass, label: 'Höhlen' }
          ].map((act, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-white">
              <act.icon className="w-3.5 h-3.5 text-primary fill-current" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{act.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Trust Registry */}
      <section className="py-12 border-b border-border bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16 opacity-80">
            <img src="https://placehold.co/120x60/white/000?text=R+V" alt="R+V" className="h-12 md:h-16 w-auto grayscale" />
            <img src="https://placehold.co/120x60/white/000?text=DRV" alt="DRV" className="h-12 md:h-16 w-auto grayscale" />
            <img src="https://placehold.co/120x60/white/000?text=TripAdvisor" alt="TripAdvisor" className="h-12 md:h-16 w-auto grayscale" />
          </div>
        </div>
      </section>

      {/* SECTION 3: The Mosaic Narrative */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Complex Registry Mosaic */}
          <div className="relative group">
            <div className="grid grid-cols-12 gap-4 h-full items-end">
              <div className="col-span-7 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" 
                  alt="Migration crossing" 
                  fill 
                  className="object-cover"
                  data-ai-hint="migration crossing"
                />
              </div>
              <div className="col-span-5 space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600" 
                    alt="Migration landscape" 
                    fill 
                    className="object-cover"
                    data-ai-hint="serengeti aerial"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=600" 
                    alt="Zebras" 
                    fill 
                    className="object-cover"
                    data-ai-hint="zebras safari"
                  />
                </div>
              </div>
            </div>

            {/* The Signature Up-Arrow Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-primary/10"
              >
                <ArrowUp className="w-8 h-8 md:w-12 md:h-12 text-primary" />
              </motion.div>
            </div>
          </div>

          {/* Right: Technical Content Registry */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary leading-tight uppercase tracking-tighter">
                Die Great Migration: <br />Die größte Tierwanderung der Welt
              </h2>
              <div className="space-y-6 text-muted-foreground font-bold text-xs md:text-sm leading-relaxed uppercase tracking-widest">
                <p>
                  Die Great Migration ist die größte Tierwanderung der Welt. Mehr als eine Million Gnus, begleitet von Zebras und Gazellen, ziehen jedes Jahr durch die Serengeti auf der Suche nach frischem Gras und Wasser. Dieses Naturereignis gehört zu den beeindruckendsten Safari-Erlebnissen Afrikas.
                </p>
                <p className="text-secondary">
                  Im Mittelpunkt stehen riesige Gnu-Herden, begleitet von Zebras und Gazellen. Raubtiere wie Löwen, Hyänen, Leoparden und Krokodile folgen den Herden - ein dramatisches Naturschauspiel.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight">Individuelle Reiseplanung</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Maßgeschneiderte Safari-Routen und handverlesene Lodges - perfekt auf Ihre Wünsche abgestimmt.
                </p>
                <ul className="space-y-1.5 pl-1">
                  {["Serengeti", "Great Migration"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[9px] font-black uppercase text-secondary">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight">Safari-Expertise</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Unsere Experten beraten Sie zu Reisezeit, Migration-Routen und den besten Regionen der Serengeti.
                </p>
                <ul className="space-y-1.5 pl-1">
                  {["Safari", "Tansania"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[9px] font-black uppercase text-secondary">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-px w-full bg-muted" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase text-muted-foreground leading-none mb-1">Buchung Nummer</p>
                  <p className="text-sm font-black text-secondary">+49 30 22608080</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 font-black text-[10px] uppercase tracking-widest shadow-2xl bg-primary hover:scale-[1.02] transition-transform border-none">
                Kostenloses Angebot anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
