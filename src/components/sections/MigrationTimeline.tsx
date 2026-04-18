
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const timelineData = [
  {
    period: "Januar – März",
    location: "Südliche Serengeti / Ndutu",
    observation: "Kalbungszeit – Tausende Gnus werden täglich geboren. Ein Festmahl für Raubtiere."
  },
  {
    period: "April – Mai",
    location: "Zentral-Serengeti",
    observation: "Die Herden ziehen nach Norden. Grüne Landschaften und dramatische Gewitterstimmungen."
  },
  {
    period: "Juni – Juli",
    location: "Westlicher Korridor",
    observation: "Überquerung des Grumeti-Flusses. Erste spektakuläre Szenen an den Wasserstellen."
  },
  {
    period: "August – Oktober",
    location: "Nördliche Serengeti",
    observation: "Höhepunkt: Die berühmten Crossings am Mara-Fluss. Spannung pur an der Grenze zu Kenia."
  },
  {
    period: "November – Dezember",
    location: "Rückzug in den Süden",
    observation: "Mit den kurzen Regenfällen kehren die Herden in ihre Geburtsregionen zurück."
  }
];

export function MigrationTimeline() {
  return (
    <section className="relative pt-8 pb-16 md:pb-24 overflow-hidden scroll-mt-32">
      {/* Cinematic Background Registry */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/home/final-cta-bg.webp" 
          alt="Serengeti Savannah" 
          fill 
          className="object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-transparent to-secondary/90" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-white tracking-normal">
            Ihr Migration-Fahrplan
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/60 font-normal text-[14px] leading-[20px] tracking-normal">
            <Info className="w-4 h-4 text-primary" />
            <p>Abläufe hängen jährlich vom individuellen Regenfall ab.</p>
          </div>
        </div>

        <div className="space-y-6">
          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col md:flex-row md:items-center gap-6 md:gap-12 group hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="md:w-1/4 shrink-0">
                <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 text-xs font-bold mb-2">
                  Saison
                </Badge>
                <h4 className="font-headline text-xl md:text-2xl font-normal text-secondary">
                  {item.period}
                </h4>
              </div>
              <div className="md:w-1/3 flex items-center gap-3">
                {/* Constant Dark Icon Background Protocol */}
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shadow-sm border border-white/5 transition-transform duration-500 group-hover:scale-110">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="font-bold text-sm text-secondary uppercase tracking-tight">
                  {item.location}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[14px] leading-[20px] text-muted-foreground font-normal opacity-80">
                  {item.observation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
