"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

const packageTags = [
  "Geführte Erlebnisreisen",
  "kreativ kombinierbar",
  "garantierte Durchführung",
  "Ideal für romantische Paare",
  "Begrenzte Plätze verfügbar"
];

const featureRegistry = [
  {
    title: "Private Safari-Fahrzeuge",
    desc: "Keine Gruppen, kein Zeitdruck – exklusiv für Sie beide."
  },
  {
    title: "Handverlesene romantische Lodges und stilvolle Tented Camps",
    desc: "Sorgfältig ausgewählte Unterkünfte für besondere gemeinsame Tage."
  },
  {
    title: "Sonnenuntergänge in der Wildnis und Dinner unter Sternen",
    desc: "Romantische Momente in einer Kulisse, die man nicht vergisst."
  },
  {
    title: "Perfekte Kombination aus Safari und Strand auf Sansibar",
    desc: "Abenteuer und Erholung in einer Reise – ideal ausbalanciert."
  },
  {
    title: "Top-Guides auf Deutsch oder Englisch",
    desc: "Erfahren, feinfühlig und mit dem Gespür für die richtigen Augenblicke."
  },
  {
    title: "Route individuell nach Ihrem Tempo",
    desc: "Keine Pauschalreise von der Stange, sondern zugeschnitten auf Ihre Wünsche."
  },
  {
    title: "Premium-Organisation mit klaren Abläufen",
    desc: "Ruhige, verlässliche Begleitung – von der Planung bis zur Rückkehr."
  },
  {
    title: "Raum für Privatsphäre, Nähe und echte gemeinsame Momente",
    desc: "Persönlich betreut und konsequent auf Sie als Paar abgestimmt."
  }
];

export default function LoveOnSafariPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 HERO SECTION */}
      <section className="bg-white pt-20 md:pt-28 pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 mb-3">
            <span className="text-secondary font-bold text-[10px] md:text-[11px] tracking-[0.3em] text-center uppercase">
              Luxus Safari für Paare in Tansania
            </span>
            <span className="text-primary font-bold text-[10px] md:text-[11px] tracking-[0.3em] text-center uppercase">
              Love on Safari
            </span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-2 mb-6 md:mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight tracking-tight normal-case"
            >
              Abenteuer und Romantik im Herzen Tansanias
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-[11px] md:text-[13px] leading-relaxed max-w-4xl mx-auto font-normal tracking-widest"
            >
              Erleben Sie die Weite der Serengeti, die besondere Atmosphäre des Ngorongoro-Kraters und im Anschluss Sansibar mit seinem warmen, türkisfarbenen Meer. Privat geplant und mit ausreichend Zeit für Sie als Paar.
            </motion.p>
          </div>
        </div>

        <div className="relative w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[21/9] min-h-[280px] md:min-h-[450px] overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
              alt="Love on Safari Experience" 
              fill 
              priority
              className="object-cover brightness-[0.85] object-center"
              data-ai-hint="safari couple"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
            <Button 
              onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-secondary hover:bg-secondary hover:text-white px-8 md:px-14 h-12 md:h-16 font-bold text-[9px] md:text-[10px] tracking-[0.2em] shadow-2xl transition-all duration-500 rounded-none border border-secondary whitespace-nowrap"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* 02 INTRO SECTION: EMOTIONAL NARRATIVE */}
      <section className="pt-6 pb-6 md:pt-10 md:pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="space-y-1 mb-1">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-xl md:text-3xl lg:text-4xl font-bold text-secondary tracking-tight normal-case"
            >
              Wenn nur noch das Wir zählt.
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xs md:text-base leading-relaxed font-normal max-w-4xl mx-auto mb-6 md:mb-10"
          >
            Es gibt Reisen, die man sieht, und solche, die man spürt. Wenn Sie morgens ganz entspannt zur Safari aufbrechen, 
            ohne Eile, ohne Ablenkung, zählt nur dieser Moment: Ihre gemeinsame Zeit. Die Natur übernimmt den Rest – und 
            macht daraus Erinnerungen, die bleiben.
          </motion.p>

          <div className="space-y-8 group flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-video w-full max-w-5xl rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
                alt="Romantic Safari Moment" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center"
                data-ai-hint="safari couple sunset"
              />
            </motion.div>
            
            <Button 
              onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-secondary text-white w-auto px-10 h-11 md:h-14 font-bold text-[10px] tracking-widest border-none shadow-2xl transition-all"
            >
              Jetzt Reise anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* 03 SIGNATURE PACKAGE SECTION */}
      <section className="py-6 md:py-12 bg-[#fdfcfb] border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative aspect-[4/5] md:aspect-[16/9] min-h-[450px] md:min-h-[700px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-secondary group w-[94%] mx-auto md:w-full">
            <Image 
              src="/assets/images/home/pkg-01.webp" 
              alt="Love on Safari Signature Package" 
              fill 
              className="object-cover brightness-[0.85] scale-105 group-hover:scale-110 transition-transform duration-1000 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

            {/* Overlays (Top Left) */}
            <div className="absolute top-5 left-5 md:top-10 md:left-12 space-y-2 z-30">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-[#7a1818] text-white px-5 py-2.5 md:px-7 md:py-3.5 shadow-2xl rounded-sm w-fit hidden md:block"
              >
                <h3 className="font-headline font-bold text-xs md:text-sm lg:text-base tracking-widest leading-none text-white normal-case">
                  Luxus „Love on Safari“ Paare in Tansania
                </h3>
              </motion.div>
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#e3510d] text-white px-4 py-2 md:px-7 md:py-3.5 shadow-xl rounded-sm flex items-center gap-3 w-fit"
              >
                <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
                <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em]">Int. Hin- und Rückflug inklusive</span>
              </motion.div>
            </div>

            {/* Desktop Prestige Card */}
            <div className="absolute top-8 bottom-8 right-8 w-full max-w-[400px] bg-white p-6 md:p-8 flex flex-col justify-between shadow-2xl hidden lg:flex rounded-none z-30 border border-border/20">
              <div className="space-y-4">
                <div>
                  <p className="text-[#e3510d] font-black text-[12px] md:text-[13px] uppercase tracking-[0.4em] mb-1">Tansania</p>
                  <h4 className="font-headline text-xl md:text-2xl lg:text-[28px] font-bold text-[#141414] leading-[1.1] tracking-tighter normal-case">
                    15 Tage Love on Safari – <br />Luxus-Rundreise für Paare
                  </h4>
                </div>
                
                <div className="space-y-1 text-[10px] md:text-[11px] font-bold text-[#141414]/80 tracking-widest leading-relaxed">
                  <p>Reisedauer: 15-tägig Flüge inklusive</p>
                  <p>Unterkünfte: Handverlesene romantische Lodges, Tented Camps mit Vollpension</p>
                  <p>Zweisamkeit pur: Keine Gruppen, kein Zeitdruck</p>
                  <p>Reisezeit: 2026-2027</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {packageTags.map(tag => (
                    <div key={tag} className="px-3 py-1.5 rounded-full border border-border text-[#141414]/80 text-[8px] md:text-[9px] font-bold tracking-tight bg-[#fdfcfb] truncate normal-case">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-border/50 flex items-center justify-between gap-6">
                <div className="flex flex-col">
                  <span className="text-sm md:text-base text-muted-foreground/50 line-through font-bold">7.299 €</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] md:text-[11px] font-black text-secondary uppercase tracking-widest">ab</span>
                    <span className="text-lg md:text-xl font-black text-secondary tracking-tighter whitespace-nowrap">6.799 €</span>
                  </div>
                  <p className="text-[7px] md:text-[8px] font-black text-muted-foreground/60 uppercase tracking-widest mt-0.5">pro Person</p>
                </div>
                <Link href="/trip-planner">
                  <Button className="h-11 md:h-12 px-6 bg-[#e3510d] text-white font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-xl border-none rounded-none transition-all hover:bg-secondary shrink-0">
                    JETZT ANFRAGEN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile Details Block */}
          <div className="lg:hidden mt-4 space-y-4 px-3">
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-lg border border-border/40 space-y-6">
              <div className="space-y-5">
                <div>
                  <p className="text-[#e3510d] font-black text-[11px] uppercase tracking-[0.4em] mb-1">Tansania</p>
                  <h4 className="font-headline text-xl font-bold text-secondary leading-tight normal-case">15 Tage Love on Safari – Luxus-Rundreise für Paare</h4>
                </div>
                
                <div className="space-y-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                  <p>• Reisedauer: 15-tägig Flüge inklusive</p>
                  <p>• Unterkünfte: Romantische Lodges & Camps</p>
                  <p>• Zweisamkeit: Keine Gruppen, kein Zeitdruck</p>
                  <p>• Reisezeit: 2026-2027</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {packageTags.map(tag => (
                    <div key={tag} className="bg-[#fdfcfb] text-[8px] font-bold border border-border/60 py-2 px-2 rounded-full text-center truncate normal-case">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-muted-foreground/40 line-through font-bold">7.299 €</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase">ab</span>
                    <span className="text-3xl font-black text-secondary tracking-tighter">6.799 €</span>
                  </div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">pro Person</p>
                </div>
                <Link href="/trip-planner" className="w-full flex justify-center">
                  <Button className="w-auto px-12 py-7 rounded-none bg-[#e3510d] text-white font-black text-[11px] uppercase tracking-[0.2em] border-none shadow-xl">
                    JETZT ANFRAGEN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 EXPERIENCE AUDIT */}
      <section className="py-6 md:py-12 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
            <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary leading-tight tracking-tight mb-3 normal-case">
              Was „Love on Safari“ besonders macht
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full opacity-60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-10">
              {featureRegistry.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="space-y-1 text-left"
                >
                  <h4 className="font-bold text-base md:text-xl text-secondary leading-tight tracking-tight normal-case">
                    {feature.title}
                  </h4>
                  <p className="text-[13px] md:text-[16px] font-normal text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-3 -left-3 z-20">
                  <Badge className="bg-primary text-white border-none px-4 py-2 text-[9px] font-black uppercase tracking-widest shadow-2xl rounded-sm">
                    Maßgeschneidert
                  </Badge>
                </div>

                <div className="relative aspect-square w-full max-w-[480px] mx-auto overflow-hidden shadow-2xl bg-muted rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] group">
                  <Image 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                    alt="Couple at Safari" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center"
                    data-ai-hint="safari couple dinner"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 FINAL INQUIRY PROTOCOL */}
      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
