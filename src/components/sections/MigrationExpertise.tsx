"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckSquare, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const expertiseItems = [
  {
    title: "15+ Jahre Erfahrung",
    desc: "Wir kennen Nationalparks, Lodges und Reisezeiten aus erster Hand."
  },
  {
    title: "Starkes Netzwerk vor Ort",
    desc: "Guides, Lodges und Partner sorgen für perfekte Abläufe."
  },
  {
    title: "Handverlesene Luxus-Lodges",
    desc: "Exklusive Safari-Camps und stilvolle Resorts – sorgfältig für Qualität und Lage ausgewählt."
  },
  {
    title: "Individuelle Safari-Abenteuer",
    desc: "Ihre Reise wird persönlich geplant – von der Serengeti bis Sansibar."
  }
];

const smallFeatures = [
  "Über 1.200 zufriedene Safari-Gäste",
  "Persönliche Beratung aus Deutschland",
  "Individuelle Reiseplanung",
  "Handverlesene Lodges & Camps"
];

export function MigrationExpertise() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Visual Anchor */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
              alt="Zebra Crossing Migration" 
              fill 
              className="object-cover"
              data-ai-hint="zebra crossing"
            />
          </motion.div>

          {/* Right: Technical Content Column */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight uppercase tracking-tighter">
                Ihre Safari durch Tansania – <br />
                individuell geplant, <br />
                unvergesslich erlebt
              </h2>
              <p className="text-muted-foreground font-bold text-xs md:text-sm lg:text-base leading-relaxed uppercase tracking-tight max-w-xl">
                Maßgeschneiderte Safari-Routen, handverlesene Lodges und spektakuläre Naturmomente in der Serengeti, im Ngorongoro-Krater und auf Sansibar.
              </p>
            </div>

            {/* Expertise List */}
            <div className="space-y-6 md:space-y-8">
              {expertiseItems.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="shrink-0 mt-1">
                    <CheckSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm md:text-lg text-secondary uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Small Features Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-6 border-t border-border/50">
              {smallFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[9px] md:text-[10px] font-bold text-secondary/70 uppercase tracking-widest">
                  <Check className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="pt-4 flex justify-center md:justify-end">
              <Button size="lg" className="rounded-full px-10 h-14 md:h-16 bg-primary text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-transform border-none group">
                Kostenloses Angebot anfragen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
