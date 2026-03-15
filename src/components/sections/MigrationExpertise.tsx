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
    desc: "Exklusive Safari-Camps und stilvolle Resorts – sorgfältig ausgewählt."
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
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Visual Anchor */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50"
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
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight uppercase tracking-tighter">
                Ihre Safari durch Tansania – <br />
                individuell geplant
              </h2>
              <p className="text-muted-foreground font-bold text-[10px] md:text-xs lg:text-sm leading-relaxed uppercase tracking-tight max-w-xl">
                Maßgeschneiderte Safari-Routen, handverlesene Lodges und spektakuläre Naturmomente in der Serengeti.
              </p>
            </div>

            {/* Expertise List */}
            <div className="space-y-5 md:space-y-6">
              {expertiseItems.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 mt-1">
                    <CheckSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-xs md:text-base text-secondary uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Small Features Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 pt-5 border-t border-border/50">
              {smallFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-[8px] md:text-[9px] font-bold text-secondary/70 uppercase tracking-widest">
                  <Check className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="pt-2 flex justify-center md:justify-end">
              <Button size="lg" className="rounded-full px-8 h-12 md:h-14 bg-primary text-white font-black text-[8px] md:text-[9px] uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-transform border-none group">
                Angebot anfragen <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}