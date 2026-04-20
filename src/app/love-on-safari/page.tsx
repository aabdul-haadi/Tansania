"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ChevronRight,
  Sparkles,
  Leaf,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

const packageTags = [
  "geführte Erlebnisreisen",
  "kreativ kombinierbar",
  "garantierte Durchführung",
  "ideal für romantische Paare",
  "begrenzte Plätze verfügbar"
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

const journeySteps = [
  { n: "①", t: "Ankommen und entspannt starten", s: "In Arusha" },
  { n: "②", t: "Erste Safari-Momente", s: "Im Tarangire, bekannt für große Elefantenherden" },
  { n: "③", t: "Serengeti erleben", s: "Weite Savanne, Löwen, Leoparden und goldene Stunden" },
  { n: "④", t: "Ngorongoro-Krater entdecken", s: "Ein Naturwunder mit hoher Tierdichte" },
  { n: "⑤", t: "Inlandsflug nach Sansibar", s: "Von der Wildnis ans Meer" },
  { n: "⑥", t: "Strandtage, Spa und Zeit zu zweit", s: "Entspannung pur" },
  { n: "⑦", t: "Optionale Erlebnisse", s: "Blue Safari, private Bootstour oder Gewürztour" }
];

export default function LoveOnSafariPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section */}
      <section className="bg-white pt-20 md:pt-28 pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 mb-3">
            <span className="text-secondary font-bold text-[10px] md:text-[11px] tracking-widest text-center">
              Luxus Safari für Paare in Tansania
            </span>
            <span className="text-primary font-bold text-[10px] md:text-[11px] tracking-widest text-center">
              Love on Safari
            </span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-2 mb-6 md:mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight tracking-tight"
            >
              Abenteuer und Romantik im Herzen Tansanias
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-[11px] md:text-[13px] max-w-4xl mx-auto font-normal"
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
              onClick={() => scrollTo('inquiry')}
              className="bg-white text-secondary hover:bg-secondary hover:text-white px-8 md:px-14 h-12 md:h-16 font-bold text-[9px] md:text-[10px] tracking-widest shadow-2xl transition-all duration-500 rounded-none border border-secondary whitespace-nowrap"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* 02 Intro Section */}
      <section className="pt-6 pb-6 md:pt-10 md:pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="space-y-1 mb-1">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-xl md:text-3xl lg:text-4xl font-bold text-secondary tracking-tight"
            >
              Wenn nur noch das Wir zählt
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-[14px] leading-[20px] font-normal max-w-4xl mx-auto mb-6 md:mb-10"
          >
            Es gibt Reisen, die man sieht, und solche, die man spürt. Wenn Sie morgens ganz entspannt zur Safari aufbrechen, 
            ohne Eile, ohne Ablenkung, zählt nur dieser Moment: Ihre gemeinsame Zeit.
          </motion.p>

          <div className="group flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-video w-full max-w-5xl rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
                alt="Romantic Safari Moment" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105 object-center"
                data-ai-hint="safari couple sunset"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 Signature Package Section */}
      <section className="py-6 md:py-12 bg-[#fdfcfb] border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-0 md:px-4 max-w-7xl">
          <div className="relative aspect-[4/5] md:aspect-[16/9] min-h-[450px] md:min-h-[500px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-secondary group w-[94%] mx-auto md:w-full">
            <Image 
              src="/assets/images/home/pkg-01.webp" 
              alt="Love on Safari Signature Package" 
              fill 
              className="object-cover brightness-[0.85] scale-105 group-hover:scale-110 transition-transform duration-1000 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

            <div className="absolute top-5 left-5 md:top-10 md:left-12 space-y-2 z-30">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-[#7a1818] text-white px-5 py-2 md:px-7 md:py-3.5 w-fit hidden md:block rounded-sm"
              >
                <h3 className="font-headline font-bold text-xs md:text-sm lg:text-base tracking-widest leading-none text-white">
                  Luxus „Love on Safari“ Paare in Tansania
                </h3>
              </motion.div>
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#e3510d] text-white px-4 py-2 md:px-7 md:py-3.5 shadow-xl rounded-sm flex items-center gap-3 w-fit"
              >
                <span className="text-[8px] md:text-[11px] font-bold tracking-widest">Int. Hin- und Rückflug inklusive</span>
              </motion.div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-8 w-full max-w-[400px] bg-white p-6 md:p-8 flex flex-col shadow-2xl hidden lg:flex rounded-none z-30 border border-border/20 h-fit">
              <div className="space-y-4">
                <div>
                  <p className="text-[#e3510d] font-bold text-[12px] md:text-[13px] tracking-widest mb-1">Tansania</p>
                  <h4 className="font-headline text-xl md:text-2xl font-bold text-[#141414] leading-[1.1] tracking-tighter">
                    15 Tage Love on Safari – <br />Luxus-Rundreise für Paare
                  </h4>
                </div>
                
                <div className="space-y-1.5 text-[10px] md:text-[11px] font-bold text-[#141414]/80 tracking-widest leading-relaxed">
                  <p>Reisedauer: 15-tägig Flüge inklusive</p>
                  <p>Unterkünfte: Handverlesene romantische Lodges & Camps</p>
                  <p>Zweisamkeit pur: Keine Gruppen, kein Zeitdruck</p>
                  <p>Reisezeit: 2026-2027</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {packageTags.map(tag => (
                    <div key={tag} className="px-3 py-1.5 rounded-full border border-border text-[#141414]/80 text-[8px] md:text-[9px] font-bold tracking-tight bg-[#fdfcfb] truncate">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-border/50 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-sm md:text-base text-muted-foreground/50 line-through font-bold">7.299 €</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">ab</span>
                    <span className="text-lg md:text-xl font-black text-secondary tracking-tighter whitespace-nowrap">6.799 €</span>
                  </div>
                  <p className="text-[8px] font-bold text-muted-foreground/60 tracking-widest">Pro Person</p>
                </div>
                <Link href="/trip-planner">
                  <Button className="h-11 md:h-12 px-6 bg-[#e3510d] text-white font-bold text-[9px] md:text-[10px] tracking-widest shadow-xl border-none rounded-none transition-all hover:bg-secondary shrink-0">
                    Jetzt anfragen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:hidden mt-4 space-y-4 px-3">
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-lg border border-border/40 space-y-6">
              <div className="space-y-5">
                <div>
                  <p className="text-[#e3510d] font-bold text-[11px] tracking-widest mb-1">Tansania</p>
                  <h4 className="font-headline text-xl font-bold text-secondary leading-tight">15 Tage Love on Safari – Luxus-Rundreise für Paare</h4>
                </div>
                
                <div className="space-y-2 text-[10px] font-bold text-muted-foreground tracking-widest leading-relaxed">
                  <p>• Reisedauer: 15-tägig Flüge inklusive</p>
                  <p>• Unterkünfte: Romantische Lodges & Camps</p>
                  <p>• Zweisamkeit: Keine Gruppen, kein Zeitdruck</p>
                  <p>• Reisezeit: 2026-2027</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {packageTags.map(tag => (
                    <div key={tag} className="bg-[#fdfcfb] text-[8px] font-bold border border-border/60 py-2 px-2 rounded-full text-center truncate">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col items-center gap-6">
                <div className="flex flex-col items-center text-center">
                  <span className="text-base text-muted-foreground/40 line-through font-bold">7.299 €</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[9px] font-bold text-muted-foreground">ab</span>
                    <span className="text-3xl font-black text-secondary tracking-tighter">6.799 €</span>
                  </div>
                  <p className="text-[8px] font-bold text-muted-foreground tracking-widest">Pro Person</p>
                </div>
                <Link href="/trip-planner" className="w-full flex justify-center">
                  <Button className="w-auto px-12 py-7 rounded-none bg-[#e3510d] text-white font-bold text-[11px] tracking-widest border-none shadow-xl">
                    Jetzt anfragen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Experience Audit */}
      <section className="py-6 md:py-12 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
            <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary leading-tight tracking-tight mb-3">
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
                  <h4 className="font-headline text-base md:text-xl font-bold text-secondary tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[13px] md:text-[16px] text-muted-foreground">
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
                  <Badge className="bg-primary text-white border-none px-4 py-2 text-[9px] font-bold tracking-widest shadow-2xl rounded-sm">
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

      {/* 05 Video Section */}
      <section className="py-8 md:py-16 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
              Love on Safari – Erleben Sie es selbst
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-black group"
          >
            <iframe
              src="https://www.youtube.com/embed/_N929_LUhXk?rel=0&modestbranding=1"
              title="Love on Safari Experience"
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* 06 Trust Section */}
      <section className="py-8 md:py-16 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
                  Vertrauen von Anfang an
                </h2>
                <p className="text-muted-foreground text-[14px] leading-[20px] font-normal opacity-80 border-l-4 border-primary/20 pl-6">
                  Mehr als eine Reise: Eine sorgfältig geplante Auszeit für Sie als Paar – persönlich, stilvoll und unvergesslich.
                </p>
              </div>

              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl bg-muted border border-border/50 group">
                <Image 
                  src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1200" 
                  alt="Liebe auf Safari Gestaltung" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint="safari planning"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="space-y-6">
                <p className="text-secondary font-bold text-[14px] leading-[20px]">
                  Jetzt Ihre persönliche Safari zu zweit entdecken und unvergessliche Momente erleben.
                </p>
                <Button 
                  onClick={() => scrollTo('inquiry')}
                  className="h-12 md:h-14 px-8 md:px-12 rounded-xl bg-secondary text-white font-bold text-[10px] md:text-[11px] shadow-xl border-none"
                >
                  Jetzt Liebe auf Safari planen
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative h-full min-h-[600px]">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl bg-muted">
                <Image 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                  alt="Couple Planning" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Step-by-Step Journey Section */}
      <section className="py-8 md:py-16 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary tracking-tighter">
              Ihre Reise – Schritt für Schritt begleitet
            </h2>
            <p className="text-muted-foreground font-bold text-[14px] leading-[20px]">
              Ihre “Love on Safari” Reise, komplett geplant
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6 space-y-12">
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" 
                  alt="Liebe auf Safari in Tansania" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint="safari couple sunset"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h4 className="text-white font-headline text-2xl md:text-4xl font-bold mb-2">Mehr als eine Filmromanze</h4>
                  <p className="text-primary font-bold text-[10px] md:text-xs tracking-widest">„Love on Safari“</p>
                </div>
              </div>

              <div className="lg:hidden p-8 md:p-12 bg-white rounded-[2rem] border border-border/50 shadow-sm space-y-6 text-left">
                <p className="text-muted-foreground text-[14px] leading-[20px] font-normal">
                  Alles für Ihre perfekte “Love on Safari” Erfahrung – persönlich abgestimmt, hochwertig organisiert und zuverlässig begleitet.
                </p>
                <div className="h-px w-20 bg-primary/40" />
                <p className="text-muted-foreground font-headline text-lg md:text-2xl italic">
                  „Wahre “Love on Safari” hat kein Drehbuch – und ist genau deshalb so besonders.“
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-10">
              <div className="flex flex-col gap-2 mb-8 text-left">
                <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary">Ihr kompakter Reiseverlauf</h3>
              </div>

              <div className="space-y-6">
                {journeySteps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-6 group text-left"
                  >
                    <span className="text-3xl md:text-4xl font-black text-primary leading-none group-hover:scale-110 transition-transform">
                      {step.n}
                    </span>
                    <div className="space-y-1">
                      <h5 className="font-bold text-base md:text-lg text-secondary tracking-tight group-hover:text-primary transition-colors">
                        {step.t}
                      </h5>
                      <p className="text-[14px] leading-[20px] text-muted-foreground opacity-60">
                        {step.s}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 flex justify-center">
                <Button 
                  onClick={() => scrollTo('inquiry')}
                  className="h-14 px-10 rounded-xl bg-secondary text-white hover:bg-primary font-bold text-[10px] shadow-xl border-none transition-all w-full sm:w-auto"
                >
                  Detaillierten Plan anfordern
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 Moments that Connect Section */}
      <section className="py-8 md:py-16 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-2">
            <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary tracking-tight mb-4">
              Love on Safari: Momente, die verbinden
            </h2>
            <p className="text-muted-foreground font-bold text-[14px] leading-[20px]">
              Warum eine Tansania-Safari mehr ist als nur eine romantische Reise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16 text-left">
            <div className="space-y-6">
              <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary">
                Gemeinsame Momente in der Weite der Natur
              </h3>
              <p className="text-[14px] leading-[20px] text-muted-foreground">
                Gemeinsame Naturerlebnisse fördern das Wohlbefinden und stärken die Verbundenheit. In der Serengeti entsteht ein Raum, in dem Sie zur Ruhe kommen, sich aufeinander konzentrieren und Zeit bewusst miteinander verbringen können. So werden aus Eindrücken echte Erinnerungen.
              </p>
              <div className="p-5 bg-[#fdf7f2] rounded-2xl border border-primary/10">
                <p className="text-[12px] font-bold text-primary leading-relaxed">
                  Nachhaltiger Tipp: Wählen Sie Unterkünfte, die lokale Mitarbeitende beschäftigen und Community-Projekte vor Ort unterstützen.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary">
                Digital Detox für zwei
              </h3>
              <p className="text-[14px] leading-[20px] text-muted-foreground">
                Viele exklusive Lodges bieten bewusst eingeschränktes WLAN an – als Einladung, das Handy häufiger beiseitezulegen und sich ganz aufeinander einzulassen. So entstehen tiefere Gespräche, echte Nähe und ein Reiseerlebnis, das langfristig nachwirkt.
              </p>
              <div className="p-5 bg-[#fdf7f2] rounded-2xl border border-primary/10">
                <p className="text-[12px] font-bold text-primary leading-relaxed">
                  Nachhaltiger Tipp: Nutzen Sie wiederverwendbare Trinkflaschen und vermeiden Sie Einwegplastik während Ihrer Reise.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary">
                Insider-Tipps
              </h3>
              <p className="text-[14px] leading-[20px] text-muted-foreground">
                Die Green Season von November bis März bietet oft mehr Privatsphäre, stimmungsvolle Landschaften und attraktive Konditionen. In ausgewählten Lodges sind bei Bedarf auch Workation-Möglichkeiten vorhanden. So lässt sich die Reise flexibel gestalten.
              </p>
              <div className="p-5 bg-[#fdf7f2] rounded-2xl border border-primary/10">
                <p className="text-[12px] font-bold text-primary leading-relaxed">
                  Nachhaltiger Tipp: Fragen Sie nach „Silent Safaris“ mit E-Fahrzeugen, besonders im Tarangire-Nationalpark.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FDF7F2] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden text-left border border-[#F0EBE0]">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Compass className="w-64 h-64 text-secondary" />
            </div>
            
            <div className="relative z-10 space-y-8 md:space-y-10">
              <div>
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary mb-4">
                  Mehr als die Big Five: Kulturelle Begegnungen, die berühren
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-secondary">Die Hadzabe: Ein Fenster in eine ursprüngliche Lebensweise</h4>
                  <p className="text-[14px] leading-[20px] text-muted-foreground">
                    Am Lake Eyasi leben die Hadzabe, eine der letzten Jäger-und-Sammler-Gemeinschaften. Ein Besuch ist keine inszenierte Vorführung, sondern eine respektvolle Begegnung, die Ihnen authentische Einblicke in Ihren Alltag ermöglicht – vom Honigsammeln bis zur traditionellen Jagd mit Pfeil und Bogen.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-secondary">Die Datoga: Meister des Feuers</h4>
                  <p className="text-[14px] leading-[20px] text-muted-foreground">
                    Die Datoga sind nomadische Hirten und zugleich erfahrene Schmiede. Aus Altmetall fertigen sie beeindruckende Speerspitzen und kunstvollen Armschmuck. Solche Begegnungen geben Ihrer Reise Tiefe und schaffen gemeinsame Erinnerungen, die weit über ein Foto hinausgehen.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                 <Button 
                   onClick={() => scrollTo('inquiry')} 
                   className="h-14 px-8 md:px-12 rounded-xl bg-secondary text-white hover:bg-primary font-bold text-[10px] md:text-xs shadow-xl border-none transition-all group w-full sm:w-auto"
                 >
                   Erfahren Sie mehr in unserer persönlichen Beratung <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 Final Inquiry Protocol */}
      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
