"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Quote,
  Award,
  Sparkles,
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap,
  Play,
  Video,
  Database,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  { name: "Manuela Jungas", role: "Team Mitglied", img: "https://picsum.photos/seed/manuela/400/400" },
  { name: "Susanne Stefaniack", role: "Team Mitglied", img: "https://picsum.photos/seed/susanne/400/400" },
  { name: "Petra Schönberger", role: "Team Mitglied", img: "https://picsum.photos/seed/petra/400/400" },
  { name: "Samson Kyashama", role: "Gründer & Experte", img: "https://picsum.photos/seed/samson/400/400" },
  { name: "Klaus Jungas", role: "Team Mitglied", img: "https://picsum.photos/seed/klaus/400/400" },
];

const guides = [
  { name: "Joachim Hugo", role: "Safari Guide", img: "https://picsum.photos/seed/joachim/400/400" },
  { name: "Emmanuel Mkama", role: "Safari Guide", img: "https://picsum.photos/seed/emmanuel/400/400" },
  { name: "Osbet Kihomwe", role: "Safari Guide", img: "https://picsum.photos/seed/osbet/400/400" },
  { name: "Salim Zawadi", role: "Safari Guide", img: "https://picsum.photos/seed/salim/400/400" },
  { name: "Iddi", role: "Safari Guide", img: "https://picsum.photos/seed/iddi/400/400" },
  { name: "James Martin", role: "Safari Guide", img: "https://picsum.photos/seed/james/400/400" },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* COMPACT DARK HERO */}
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-24 w-full overflow-hidden flex items-center justify-center bg-secondary border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="Afrikanische Savanne"
          fill
          priority
          className="object-cover opacity-30 brightness-50 scale-105"
          data-ai-hint="serengeti savannah"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-white mb-2 leading-none tracking-tighter text-3xl md:text-6xl">
              Ihr Schlüssel zum <br />
              <span className="text-primary">Herzen Afrikas</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
              Wir verbinden den Nil mit der Savanne – durch Abenteuer, die weit über das Gewöhnliche hinausgehen.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Intro Narrative */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-secondary uppercase text-2xl md:text-4xl tracking-tighter leading-none">
                Mehr als nur ein <br /><span className="text-primary">Urlaub</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-medium leading-relaxed text-xs md:text-sm uppercase tracking-widest">
              <p>
                Träumen Sie von einer Reise, die tiefer geht? Eine Reise, die Sie in die Seele eines Kontinents eintauchen lässt, reich an unberührter Natur, pulsierenden Kulturen und atemberaubenden Abenteuern?
              </p>
              <p className="text-secondary font-bold">
                Dann sind Sie bei Tansania Reiseabenteuer genau richtig! Wir sind nicht einfach nur ein Reiseveranstalter; wir sind Ihre Brücke zu authentischen Erlebnissen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Tansania", "Kenia", "Ruanda", "Botswana", "Namibia", "Südafrika"].map((dest, i) => (
                <div key={i} className="px-4 py-2 bg-white rounded-full border border-border shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{dest}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" 
                alt="Luxus Safari Lodge" 
                fill 
                className="object-cover"
                data-ai-hint="safari lodge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs">
              <Quote className="w-8 h-8 text-white/20 mb-4" />
              <p className="text-white font-bold text-sm md:text-lg leading-tight mb-4 uppercase tracking-tight">"Unser Herz schlägt für Afrika – mit uns erleben Sie den Kontinent hautnah."</p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 md:py-24 bg-[#FDF7F2] text-secondary relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/samson-kyashama/800/800" 
                  alt="Samson Kyashama" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-2xl flex items-center justify-center rotate-12 shadow-2xl border border-white/10">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-10">
              <div>
                <h2 className="text-secondary uppercase text-2xl md:text-4xl tracking-tighter leading-none">
                  Maßgeschneidert von <br /><span className="text-primary">Samson Kyashama</span>
                </h2>
              </div>
              <p className="text-secondary/80 font-medium leading-relaxed text-xs md:text-sm uppercase tracking-widest">
                Unter der Führung von Samson Kyashama entwerfen wir Reisen, die Ihre kühnsten Träume übertreffen. Jede Safari wird persönlich abgestimmt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-[10px] text-secondary uppercase tracking-widest">Lokale Expertise</p>
                    <p className="text-[10px] text-secondary/60 font-medium uppercase mt-1">Tief verwurzelt in Tansania.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-[10px] text-secondary uppercase tracking-widest">Einzigartige Erlebnisse</p>
                    <p className="text-[10px] text-secondary/60 font-medium uppercase mt-1">Abenteuer so individuell wie Sie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-secondary uppercase text-3xl md:text-5xl tracking-tighter">Unser <span className="text-primary">Team</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
              Die Spezialisten in Berlin, die Ihre Träume in detaillierte Pläne verwandeln.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative aspect-square w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 shadow-lg border border-border/50">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
                </div>
                <h4 className="text-secondary uppercase leading-none mb-1 md:mb-2 text-xl">{member.name}</h4>
                <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-3 md:mb-4">{member.role}</p>
                <Button variant="link" className="h-auto p-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Mehr erfahren</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACTED REGISTRY HUB SECTION */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-border/50">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Technical Narrative */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-primary text-[9px] font-black uppercase tracking-[0.4em]">
                  <Zap className="w-3 h-3 fill-current" /> Official Registry
                </div>
                <h2 className="font-headline text-xl md:text-4xl font-bold text-secondary leading-[0.85] tracking-tighter uppercase">
                  WILLKOMMEN IM <br />
                  <span className="text-primary">HERZEN AFRIKAS</span>
                </h2>
                <p className="text-muted-foreground font-medium text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-md opacity-80">
                  Dort, wo die Savanne niemals schläft und Ihre Träume durch unsere Präzision zur Wirklichkeit werden.
                </p>
              </motion.div>

              {/* Technical Feature Matrix */}
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { icon: ShieldCheck, title: "SICHERHEIT", sub: "DRSF-PROZESS AKTIV" },
                  { icon: Globe, title: "PRÄSENZ", sub: "BERLIN & KAIRO HUB" },
                  { icon: Compass, title: "EXPERTISE", sub: "OFFIZIELLE GUIDES" }
                ].map((feat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-[#FDF7F2] rounded-2xl border border-border/40 group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                      <feat.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-secondary uppercase tracking-tight leading-none">{feat.title}</p>
                      <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{feat.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Button asChild className="rounded-xl px-8 h-12 font-black text-[10px] uppercase tracking-widest shadow-xl border-none">
                  <Link href="/trip-planner">REISE PLANEN</Link>
                </Button>
                <Button variant="outline" asChild className="rounded-xl px-8 h-12 font-black text-[10px] uppercase tracking-widest border-muted text-muted-foreground hover:text-primary">
                  <Link href="/contact">KONTAKT</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: High-Density Media Mosaic */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 01: The Video Intel Frame */}
                <div className="md:col-span-2 relative aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl border-8 border-white group">
                  <iframe
                    src="https://www.youtube.com/embed/uVilAKUc8zE?autoplay=0&rel=0&modestbranding=1"
                    title="Expedition Registry"
                    className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                    allowFullScreen
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-4 py-2 bg-secondary/80 backdrop-blur-xl text-white rounded-lg border border-white/10 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">LIVE FEED</span>
                    </div>
                  </div>
                </div>

                {/* 02: Registry Data Card */}
                <div className="p-6 bg-white rounded-[2rem] shadow-sm border border-border/50 flex flex-col justify-between min-h-[180px]">
                  <div className="flex items-center justify-between">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Log ID: SDL-2025</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-secondary uppercase leading-none mb-2">INFRASTRUKTUR</h4>
                    <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed tracking-widest">
                      Echtzeit-Synchronisierung zwischen Berliner Büro und Feld-Operationen.
                    </p>
                  </div>
                </div>

                {/* 03: Atmospheric Insight */}
                <div className="relative aspect-square md:aspect-auto rounded-[2rem] overflow-hidden bg-muted shadow-sm border border-border/50">
                  <Image src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=600" alt="Detail" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-headline text-lg uppercase leading-none">PRECISION</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
