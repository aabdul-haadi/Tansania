"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  Users,
  Calendar,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/sections/ContactSection';
import { EgyptFAQ } from '@/components/sections/EgyptFAQ';

export default function EgyptLandingPage() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* 100% Exact Clone: Section 1 - Magic of Pharaohs Mosaic */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Overlapping Image Mosaic with Dotted Pattern */}
          <div className="relative group order-2 lg:order-1">
            {/* Background Dotted Grid */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-20 pointer-events-none hidden md:block">
              <div className="grid grid-cols-10 gap-4">
                {[...Array(100)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-secondary" />
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image 1: Background Ramses (Smaller) */}
              <div className="relative w-[70%] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 transform -translate-y-12 translate-x-4">
                <Image 
                  src="https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800" 
                  alt="Ancient Statue" 
                  fill 
                  className="object-cover"
                  data-ai-hint="egypt statue"
                />
              </div>
              
              {/* Image 2: Foreground Sphinx/Pyramid (Larger) */}
              <div className="absolute top-12 left-12 w-[90%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800" 
                  alt="Pyramids Giza" 
                  fill 
                  className="object-cover"
                  data-ai-hint="giza sphinx"
                />
              </div>
            </div>
          </div>

          {/* Right: Technical Content Registry */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight uppercase tracking-tighter">
                ÄGYPTEN: Die Magie der Pharaonen <br />& Pyramiden
              </h2>
              <div className="space-y-4 text-muted-foreground font-bold text-xs md:text-sm leading-relaxed uppercase tracking-widest">
                <p>
                  Erleben Sie Ägypten in seiner ganzen Pracht: die majestätischen Pyramiden von Gizeh, die Geheimnisse der Sphinx und die beeindruckenden Tempel von Luxor und Abu Simbel. Tauchen Sie ein in Geschichte, Kultur und unvergessliche Abenteuer.
                </p>
                <p className="text-secondary">
                  Im Mittelpunkt stehen antike Monumente, Nilkreuzfahrten und die Weite der Wüste – ein unvergessliches Erlebnis für Ihre Sinne.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight">Individuelle Reiseplanung</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Maßgeschneiderte Ägypten-Routen und handverlesene Luxus-Lodges – perfekt abgestimmt auf Ihre Wünsche.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight">Ägypten-Expertise</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Unsere Experten beraten Sie zu Reisezeit, Highlights und den besten Routen durch Ägypten.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 border-t border-border pt-8">
              <div className="space-y-2">
                {["Kairo", "Luxor & Abu Simbel", "Nilkreuzfahrt"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-secondary">
                    <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {["Private Führungen & Kultur", "Safari & Wüstenerlebnisse", "Luxusreisen & exklusive Lodges"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-secondary">
                    <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                  </div>
                ))}
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
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 font-black text-[10px] uppercase tracking-widest shadow-2xl bg-primary hover:scale-[1.02] transition-transform">
                Kostenloses Angebot anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Exact Clone: Section 2 - Luxury Egypt Tour Hero Card */}
      <section className="relative w-full overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="relative h-[70vh] md:h-[90vh] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=1920" 
            alt="Balloon Over Luxor" 
            fill 
            className="object-cover"
            priority
            data-ai-hint="luxor balloons"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Floating Registry Card */}
        <div className="absolute top-0 right-0 h-full w-full md:w-[45%] lg:w-[35%] flex items-center p-4 md:p-12 z-20">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xl md:bg-white p-8 md:p-12 shadow-2xl w-full space-y-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2 block">TANSANIA</span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-secondary uppercase leading-none tracking-tighter mb-8">
                12 Tage Luxus-Ägypten-Tour
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center"><Clock className="w-4 h-4 text-muted-foreground" /></div>
                  <div>
                    <p className="text-xs font-black uppercase text-secondary">Reisedauer:</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">15-tägig, Flüge inklusive</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center"><MapPin className="w-4 h-4 text-muted-foreground" /></div>
                  <div>
                    <p className="text-xs font-black uppercase text-secondary">Unterkünfte:</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Mittelklassehotels, Tented Lodges mit Vollpension</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center"><Users className="w-4 h-4 text-muted-foreground" /></div>
                  <div>
                    <p className="text-xs font-black uppercase text-secondary">Exklusive Gruppen:</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Maximal 6 Teilnehmer pro Termin</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center"><Calendar className="w-4 h-4 text-muted-foreground" /></div>
                  <div>
                    <p className="text-xs font-black uppercase text-secondary">Reisezeit:</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">2025-2026</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                {[
                  "Geführte Erlebnisreisen", 
                  "Kombinierbar", 
                  "Ideal für Kleingruppen", 
                  "Begrenzte Plätze verfügbar", 
                  "Garantiert Durchführung"
                ].map((tag, i) => (
                  <Badge key={i} variant="outline" className="text-[7px] font-black uppercase tracking-widest border-muted text-muted-foreground px-2 py-0.5 rounded-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-muted flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground line-through font-bold">5.999 €</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-black text-[10px] uppercase mr-1">ab</span>
                  <span className="text-3xl font-black text-secondary">4.999 €</span>
                </div>
                <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">pro Person</p>
              </div>
              <Button size="lg" className="rounded-sm px-8 h-12 md:h-14 bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                JETZT ANFRAGEN
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <EgyptFAQ />
      <ContactSection />
    </div>
  );
}
