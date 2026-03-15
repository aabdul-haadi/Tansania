"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Info, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const timelineData = [
  {
    period: "Dez – Mär",
    location: "Südliche Serengeti / Ndutu",
    observation: "Kalbungszeit – viele Jungtiere, intensive Raubtier-Action.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400"
  },
  {
    period: "Apr – Mai",
    location: "Zentral / West",
    observation: "Herden auf dem Move, dramatische Savannen-Szenen, oft sattgrün.",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=400"
  },
  {
    period: "Mai – Jun",
    location: "Westliche Serengeti (Grumeti)",
    observation: "Grumeti-River-Phase, erste Crossing-Spannung.",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=400"
  },
  {
    period: "Jul – Sep",
    location: "Nördliche Serengeti (Mara Region)",
    observation: "Mara River Crossing Season – Peak-Nachfrage.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400"
  },
  {
    period: "Okt – Nov",
    location: "Zurück Richtung Zentral / Süd",
    observation: "Rückwanderung, weniger Trubel möglich.",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=400"
  }
];

export function MigrationTimeline() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">
            Beste Reisezeit – <br /><span className="text-primary">Monat für Monat</span> <span className="text-secondary opacity-20">– klar & ehrlich</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-bold text-[8px] md:text-[10px] uppercase tracking-widest">
            <Info className="w-3.5 h-3.5 text-primary" />
            <p>Hinweis: Richtwerte – genaue Abläufe hängen vom Regen ab. Flussüberquerungen sind schwer vorherzusagen.</p>
          </div>
        </div>

        <div className="bg-[#f8f8f8] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-sm border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-8 p-6 md:p-16 space-y-1">
              <div className="hidden lg:grid grid-cols-12 gap-6 pb-6 border-b border-border/50 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                <div className="col-span-2">Zeitraum</div>
                <div className="col-span-4">Wo in Tanzania?</div>
                <div className="col-span-6">Was du typischerweise siehst</div>
              </div>

              {timelineData.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-6 md:py-8 border-b border-border/30 last:border-none group transition-all">
                  <div className="lg:col-span-2 flex items-center">
                    <span className="text-sm md:text-xl font-headline font-black text-secondary uppercase leading-none group-hover:text-primary transition-colors">
                      {item.period}
                    </span>
                  </div>
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 lg:hidden">Standort</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <p className="font-bold text-xs md:text-base text-secondary uppercase tracking-tight">{item.location}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 lg:hidden">Beobachtung</p>
                    <p className="text-[11px] md:text-sm text-muted-foreground font-bold leading-relaxed uppercase tracking-widest">
                      {item.observation}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-10 mt-4 border-t border-border flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-secondary">Mini-Entscheidungshilfe:</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { t: "Babytiere + viele Raubtiere?", v: "Feb-Mär (Ndutu)" },
                    { t: "Fluss-Drama erleben?", v: "Jul-Sep (Nord / Mara River)" },
                    { t: "Migration + weniger Andrang?", v: "Mai-Jun oder Okt-Nov" }
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <p className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-snug">
                        {tip.t} <br /><span className="text-secondary">→ {tip.v}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-secondary relative overflow-hidden hidden lg:block">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 h-full flex flex-col">
                {timelineData.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex-1 relative group overflow-hidden border-b border-white/5 last:border-none">
                    <Image 
                      src={item.img} 
                      alt="Safari Season" 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex justify-center">
          <Link href="#contact-form">
            <Button size="lg" className="rounded-full px-16 h-16 md:h-20 bg-primary text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform border-none">
              JETZT ANFRAGEN
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
