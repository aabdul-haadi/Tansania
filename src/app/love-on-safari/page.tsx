"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  Waves, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Wine,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Zap,
  Plane,
  Clock,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

const experiences = [
  {
    title: "Dinner unter den Sternen",
    desc: "Ein exklusives Fünf-Gänge-Menü mitten in der Savanne, nur von Kerzen und dem Kreuz des Südens beleuchtet.",
    icon: Wine,
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "safari dinner"
  },
  {
    title: "Private Beach Sanctuary",
    desc: "Ihre eigene Villa auf Sansibar mit direktem Zugang zum Ozean und ungestörter Privatsphäre.",
    icon: Waves,
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
    hint: "zanzibar villa"
  },
  {
    title: "Morgendliche Ballon-Safari",
    desc: "Gleiten Sie schweigend über die Serengeti, während die Sonne aufgeht und die Natur unter Ihnen erwacht.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    hint: "safari balloon"
  }
];

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
      {/* 01 COMPACTED HERO: NARRATIVE HUB */}
      <section className="bg-white pt-24 md:pt-28 pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 mb-4">
            <span className="text-secondary font-bold text-[10px] md:text-[12px] tracking-[0.3em] text-center">
              Luxus Safari für Paare in Tansania
            </span>
            <span className="text-primary font-bold text-[10px] md:text-[12px] tracking-[0.3em] text-center">
              Love on Safari
            </span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-3 mb-6 md:mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-2xl md:text-4xl font-bold text-secondary leading-tight tracking-tight"
            >
              Abenteuer und Romantik im Herzen Tansanias
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-4xl mx-auto font-normal tracking-widest"
            >
              Erleben Sie die Weite der Serengeti, die besondere Atmosphäre des Ngorongoro-Kraters und im Anschluss Sansibar mit seinem warmen, türkisfarbenen Meer. Privat geplant und mit ausreichend Zeit für Sie als Paar.
            </motion.p>
          </div>
        </div>

        <div className="relative w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[450px] overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
              alt="Love on Safari Experience" 
              fill 
              priority
              className="object-cover brightness-[0.85]"
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

      {/* 02 COMPACTED INTRO: EMOTIONAL NARRATIVE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="space-y-1 mb-2">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-5xl font-bold text-secondary tracking-tight"
            >
              Wenn nur noch das Wir zählt.
            </motion.h2>
            <div className="w-16 h-0.5 bg-primary mx-auto opacity-40" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal max-w-4xl mx-auto mb-6"
          >
            Es gibt Reisen, die man sieht, und solche, die man spürt. Wenn Sie morgens ganz entspannt zur Safari aufbrechen, 
            ohne Eile, ohne Ablenkung, zählt nur dieser Moment: Ihre gemeinsame Zeit. Die Natur übernimmt den Rest – und 
            macht daraus Erinnerungen, die bleiben.
          </motion.p>

          <div className="space-y-6 group">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
                alt="Romantic Safari Moment" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="safari couple sunset"
              />
            </motion.div>
            
            <div className="flex flex-col items-center">
              <Button 
                onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-secondary text-white w-auto px-10 h-11 md:h-14 font-bold text-[10px] tracking-widest border-none shadow-2xl transition-all"
              >
                Jetzt Reise anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 03 COMPACTED SIGNATURE PACKAGE: HIGH-FIDELITY CAMPAIGN */}
      <section className="py-12 md:py-16 bg-[#fdfcfb] border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative aspect-[16/9] min-h-[700px] md:min-h-[800px] lg:min-h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-secondary group">
            <Image 
              src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1920" 
              alt="Love on Safari Signature Package" 
              fill 
              className="object-cover brightness-[0.85] scale-105 group-hover:scale-110 transition-transform duration-1000"
              data-ai-hint="luxury ocean resort"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

            {/* Left Overlay Labels */}
            <div className="absolute top-6 left-6 md:top-10 md:left-12 space-y-2 z-30 hidden md:block">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-[#7a1818] text-white px-6 py-4 md:px-10 md:py-5 shadow-2xl rounded-sm w-fit"
              >
                <h3 className="font-headline font-black text-xs md:text-xl lg:text-2xl tracking-widest leading-none uppercase text-white">
                  LUXUS "LOVE ON SAFARI" PAARE IN TANSANIA
                </h3>
              </motion.div>
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#e3510d] text-white px-5 py-3 md:px-8 md:py-4 shadow-xl rounded-sm flex items-center gap-3 w-fit"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em]">Int. Hin- und Rückflug inklusive</span>
              </motion.div>
            </div>

            {/* Desktop Prestige Card */}
            <div className="absolute top-10 bottom-10 right-10 w-full max-w-[480px] bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-between shadow-2xl hidden lg:flex rounded-none z-30">
              <div className="space-y-6">
                <div>
                  <p className="text-[#e3510d] font-black text-[12px] md:text-[14px] uppercase tracking-[0.4em] mb-3">TANSANIA</p>
                  <h4 className="font-headline text-2xl md:text-3xl font-bold text-[#141414] leading-[1.1] tracking-tighter uppercase">
                    15 Tage Love on Safari – <br />Luxus-Rundreise für Paare
                  </h4>
                </div>
                
                <div className="space-y-3 text-[10px] md:text-[11px] font-bold text-[#141414]/80 uppercase tracking-widest leading-relaxed">
                  <p>Reisedauer: 15-tägig Flüge inklusive</p>
                  <p>Unterkünfte: Handverlesene romantische Lodges, Tented Camps mit Vollpension</p>
                  <p>Zweisamkeit pur: Keine Gruppen, kein Zeitdruck</p>
                  <p>Reisezeit: 2026-2027</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {packageTags.map(tag => (
                    <div key={tag} className="px-3 py-1.5 rounded-full border border-border text-[#141414]/60 text-[7px] md:text-[8px] font-black uppercase tracking-widest bg-[#fdfcfb]">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-4 border-t border-border/50 flex items-end justify-between gap-6">
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-[12px] text-muted-foreground/50 line-through font-bold">7.299 €</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[10px] md:text-[12px] font-black text-secondary uppercase tracking-widest">ab</span>
                    <span className="text-2xl md:text-4xl font-black text-secondary tracking-tighter">6.799 €</span>
                  </div>
                  <p className="text-[7px] md:text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest mt-1">pro Person</p>
                </div>
                <Link href="/trip-planner">
                  <Button className="h-12 md:h-14 px-8 md:px-10 bg-[#e3510d] text-white font-black text-[9px] md:text-[11px] uppercase tracking-[0.2em] shadow-xl border-none rounded-none transition-all hover:bg-secondary">
                    JETZT ANFRAGEN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile Overlay & Card Logic */}
          <div className="lg:hidden mt-6 space-y-4">
            <div className="space-y-2">
              <div className="bg-[#7a1818] text-white p-4 rounded-xl shadow-lg">
                <h3 className="font-headline font-black text-xs md:text-lg tracking-widest uppercase text-white text-center">
                  LUXUS "LOVE ON SAFARI" PAARE IN TANSANIA
                </h3>
              </div>
              <div className="bg-[#e3510d] text-white p-3 rounded-xl shadow-lg flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Int. Hin- und Rückflug inklusive</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-border/40 space-y-6">
              <div className="space-y-6">
                <div>
                  <p className="text-[#e3510d] font-black text-[12px] uppercase tracking-[0.4em] mb-2">TANSANIA</p>
                  <h4 className="font-headline text-2xl font-bold text-secondary leading-tight uppercase">15 Tage Love on Safari – Luxus-Rundreise für Paare</h4>
                </div>
                
                <div className="space-y-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                  <p>• Reisedauer: 15-tägig Flüge inklusive</p>
                  <p>• Unterkünfte: Romantische Lodges & Camps</p>
                  <p>• Zweisamkeit: Keine Gruppen, kein Zeitdruck</p>
                  <p>• Reisezeit: 2026-2027</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {packageTags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-[#fdfcfb] text-[7px] font-black uppercase border-border/60 py-1.5 px-3 block text-center truncate">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[10px] text-muted-foreground/40 line-through font-bold">7.299 €</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase">ab</span>
                    <span className="text-3xl font-black text-secondary tracking-tighter">6.799 €</span>
                  </div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">pro Person</p>
                </div>
                <Link href="/trip-planner" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto rounded-none h-14 px-10 bg-[#e3510d] text-white font-black text-[11px] uppercase tracking-widest border-none shadow-xl">JETZT ANFRAGEN</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 COMPACTED EXPERIENCE AUDIT: WHAT MAKES IT SPECIAL */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight tracking-tight mb-3">
              Was „Love on Safari“ besonders macht
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full opacity-60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Narrative Registry List */}
            <div className="space-y-6 md:space-y-8">
              {featureRegistry.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="space-y-1 text-left"
                >
                  <h4 className="font-bold text-base md:text-lg text-secondary leading-tight uppercase tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[13px] md:text-[14px] font-normal text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Organic Visual Hub */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 z-20">
                  <Badge className="bg-primary text-white border-none px-5 py-2.5 text-[10px] font-black uppercase tracking-widest shadow-2xl rounded-sm">
                    Maßgeschneidert
                  </Badge>
                </div>

                <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden shadow-2xl bg-muted rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] group">
                  <Image 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                    alt="Couple toasting at safari sunset" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint="safari couple dinner"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 COMPACTED PRIVATE SANCTUARIES: EXPERIENCE REGISTRY */}
      <section className="py-12 md:py-16 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-12 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">Private Refugien</h2>
            <p className="text-muted-foreground font-normal text-[10px] md:text-sm tracking-widest opacity-60 uppercase">
              Exklusiv für Paare kuratierte Erlebnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-[1.5rem] border border-border/40 shadow-sm overflow-hidden bg-white hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image 
                      src={exp.img} 
                      alt={exp.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={exp.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col flex-grow text-left space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary tracking-tight uppercase">{exp.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-[14px] leading-[20px] font-normal opacity-80 flex-grow">
                      {exp.desc}
                    </p>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-[9px] font-black tracking-widest text-primary uppercase">Inklusive Service</span>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 COMPACTED EXPERT QUOTE SECTION */}
      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-10 h-px bg-primary/40 mx-auto" />
            <h2 className="font-headline text-2xl md:text-5xl font-normal leading-tight italic px-4">
              „Die Savanne flüstert ihre Geschichten nur denen zu, die sich Zeit für die Stille nehmen.“
            </h2>
            <div className="flex flex-col items-center gap-2">
               <p className="text-primary font-bold text-[10px] md:text-xs tracking-[0.4em]">Samson Kyashama</p>
               <p className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Founder & Africa Expert</p>
            </div>
            <div className="w-10 h-px bg-primary/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 07 COMPACTED AUTHORITY REGISTRY */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, t: "Gesicherte Träume", d: "Durch die DRSF-Mitgliedschaft sind Ihre Anzahlungen und die Reise zu 100% abgesichert." },
              { icon: Compass, t: "Eigene Guides", d: "Keine Subunternehmer. Unsere Guides sind Teil der Familie und kennen jeden geheimen Spot." },
              { icon: MapPin, t: "Direktkontakt", d: "Ein fester Ansprechpartner in Berlin begleitet Sie von der ersten Idee bis zur Rückkehr." }
            ].map((item, i) => (
              <div key={i} className="space-y-4 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center mx-auto text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-lg md:text-2xl font-normal text-secondary tracking-tight uppercase">{item.t}</h4>
                  <p className="text-[13px] md:text-[14px] leading-[20px] text-muted-foreground font-normal opacity-70 px-4">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Inquiry Protocol */}
      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
