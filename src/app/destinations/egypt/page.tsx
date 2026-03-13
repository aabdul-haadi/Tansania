"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Camera, 
  MapPin, 
  Compass, 
  Tent, 
  Mountain, 
  CheckCircle2, 
  ArrowRight,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/sections/ContactSection';
import { EgyptFeaturedContent } from '@/components/sections/EgyptFeaturedContent';
import { EgyptVideoBlog } from '@/components/sections/EgyptVideoBlog';
import { EgyptFAQ } from '@/components/sections/EgyptFAQ';

export default function EgyptLandingPage() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* Hero Section - Matched to Image */}
      <section className="relative h-[70vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1920"
          alt="Ägypten Pyramiden"
          fill
          priority
          className="object-cover brightness-75"
          data-ai-hint="egypt pyramids"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white font-black text-xs md:text-xl uppercase tracking-[0.3em] drop-shadow-lg">
              Jetzt Abenteuer entdecken
            </p>
            <h1 className="font-headline text-6xl md:text-[12rem] lg:text-[14rem] font-bold text-white leading-none tracking-tighter uppercase drop-shadow-2xl">
              Ägypten
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-2xl text-white font-bold uppercase tracking-widest leading-tight drop-shadow-lg px-4">
              Erlebe Pyramiden, Nil & Wüste Dein Exklusives <br className="hidden md:block" /> Abenteuer Wartet.
            </p>
          </motion.div>
        </div>

        {/* Hero Bottom Activity Bar */}
        <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
          <div className="container mx-auto px-4 flex justify-center gap-12 text-white/80 font-black text-[10px] uppercase tracking-[0.4em]">
            <div className="flex items-center gap-2"><Compass className="w-4 h-4 text-primary" /> Safari</div>
            <div className="flex items-center gap-2"><Camera className="w-4 h-4 text-primary" /> Fotografie</div>
            <div className="flex items-center gap-2"><Tent className="w-4 h-4 text-primary" /> Camping</div>
            <div className="flex items-center gap-2"><Mountain className="w-4 h-4 text-primary" /> Wandern</div>
          </div>
        </div>
      </section>

      {/* Trust Logo Bar - Solid White */}
      <section className="py-12 md:py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-12 opacity-80">
            <img src="https://storage.googleapis.com/firebasestudio-af637.appspot.com/logo-rv.png" alt="R+V" className="h-14 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="https://storage.googleapis.com/firebasestudio-af637.appspot.com/logo-drv.png" alt="DRV" className="h-14 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="https://storage.googleapis.com/firebasestudio-af637.appspot.com/logo-tripadvisor.png" alt="TripAdvisor" className="h-14 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Main Content Mosaic - Matched to Image */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Column 1: Narrative & Checklist */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight uppercase tracking-tighter">
                Ihre Ägyptenreise Individuell Geplant, Unvergesslich Erlebt
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-muted-foreground font-bold text-sm md:text-base leading-relaxed uppercase tracking-widest">
                Maßgeschneiderte Ägypten-Routen, handverlesene Luxus-Lodges und spektakuläre Erlebnisse an den Pyramiden, am Nil und in der Wüste – Ihre exklusive Reise beginnt hier.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { t: "15+ Jahre Erfahrung", d: "Wir kennen die historischen Stätten, Nationalparks und Luxushotels in Ägypten aus erster Hand." },
                { t: "Starkes Netzwerk vor Ort", d: "Guides, Lodges und Partner sorgen für perfekte Abläufe und ein unvergessliches Erlebnis." },
                { t: "Handverlesene Luxus-Lodges", d: "Exklusive Hotels und Resorts – sorgfältig ausgewählt für Qualität, Lage und Komfort." },
                { t: "Individuelle Safari-Abenteuer", d: "Ihre Reise wird persönlich geplant – von Kairo über Luxor bis zu Nilkreuzfahrt & Abu Simbel." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-lg text-secondary uppercase leading-none mb-2">{item.t}</h4>
                    <p className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Über 1.200 zufriedene Reisende
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Individuelle Reiserouten
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Persönliche Beratung
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Exklusive Lodges
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto rounded-xl px-10 h-16 font-black text-xs uppercase tracking-widest shadow-2xl bg-primary hover:scale-[1.02] transition-transform">
                Kostenloses Angebot anfragen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Column 2: Stacked Mosaic */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=800" 
                alt="Luxor Temple" 
                fill 
                className="object-cover"
                data-ai-hint="luxor temple"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800" 
                alt="Abu Simbel" 
                fill 
                className="object-cover"
                data-ai-hint="abu simbel"
              />
            </motion.div>
          </div>

          {/* Column 3: Large Feature + Flight Path */}
          <div className="lg:col-span-4 relative">
            {/* SVG Flight Path Illustration */}
            <div className="absolute -top-20 -right-10 w-64 h-64 pointer-events-none opacity-20 hidden lg:block">
              <svg viewBox="0 0 200 200" className="w-full h-full text-secondary fill-none">
                <path d="M20,180 C50,150 150,150 180,20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                <g transform="translate(170, 10) rotate(-45)">
                  <Plane className="w-8 h-8 fill-current" />
                </g>
              </svg>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/5] md:aspect-[3/5] rounded-[3rem] overflow-hidden shadow-2xl bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800" 
                alt="Camel Safari" 
                fill 
                className="object-cover"
                data-ai-hint="camel pyramids"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <Badge className="bg-primary text-white border-none font-black text-[8px] uppercase tracking-widest mb-3">Signature Experience</Badge>
                <h4 className="text-3xl font-headline font-bold leading-none uppercase">Wüsten <br /> Expedition</h4>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Nil Exploration Grid */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto px-4 max-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Die Ader des Lebens</span>
              <h2 className="font-headline text-4xl md:text-7xl font-bold uppercase leading-tight tracking-tighter">Nil-Kreuzfahrten <br /><span className="text-primary">auf höchstem Niveau</span></h2>
            </div>
            <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] md:text-sm max-w-xs border-l border-white/10 pl-6">
              Gleiten Sie auf einer traditionellen Dahabeya durch die Geschichte der Pharaonen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Luxus Dahabeya", d: "Privatheit und Entschleunigung auf dem Fluss.", img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" },
              { t: "Königliche Suiten", d: "Balkone mit direktem Nilblick und 5-Sterne Service.", img: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" },
              { t: "Kulinarik", d: "Fine Dining unter dem Sternenhimmel Oberägyptens.", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800" }
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden hover:bg-white/10 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={item.img} alt={item.t} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-8 space-y-3">
                  <h4 className="text-xl font-headline font-bold uppercase">{item.t}</h4>
                  <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Egypt Featured Content (Mosaic + Package Slider) */}
      <EgyptFeaturedContent />

      {/* Egypt Video & Blog Section */}
      <EgyptVideoBlog />

      {/* Egypt FAQ Section */}
      <EgyptFAQ />

      {/* Inquiry Protocol */}
      <ContactSection />
    </div>
  );
}
