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
import { ContactSection } from '@/components/shared/ContactSection';
import { EgyptFAQ } from '@/components/sections/EgyptFAQ';
import { EgyptFeaturedContent } from '@/components/sections/EgyptFeaturedContent';
import { EgyptVideoBlog } from '@/components/sections/EgyptVideoBlog';

export default function EgyptLandingPage() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* 100% Exact Clone Hero & Mosaic Section */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative group order-2 lg:order-1">
            {/* Visual Mosaic with overlapping logic */}
            <div className="relative">
              <div className="relative w-[70%] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 transform -translate-y-12 translate-x-4">
                <Image 
                  src="https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800" 
                  alt="Egypt Ramses" 
                  fill 
                  className="object-cover" 
                  data-ai-hint="egypt statue"
                />
              </div>
              <div className="absolute top-12 left-12 w-[90%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800" 
                  alt="Pyramids Giza" 
                  fill 
                  className="object-cover" 
                  data-ai-hint="sphinx pyramids"
                />
              </div>
              {/* Registry Dotted Pattern */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 24px' }} />
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-[0.4em]">
                <Compass className="w-4 h-4" /> Destinatons-Registry
              </div>
              <h2 className="font-headline text-3xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter">
                ÄGYPTEN: DIE MAGIE <br />DER PHARAONEN <br />& <span className="text-primary">PYRAMIDEN</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tight">
                <p>Erleben Sie Ägypten in seiner ganzen Pracht: die majestätischen Pyramiden von Gizeh, die Geheimnisse der Sphinx und die beeindruckenden Tempel von Luxor.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-black text-sm md:text-base text-secondary uppercase tracking-tight">Individuelle Planung</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Maßgeschneiderte Routen für Ihre Wünsche – vom Nil bis zum Roten Meer.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-black text-sm md:text-base text-secondary uppercase tracking-tight">Lokale Expertise</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Unser Cairo-Team vor Ort sichert Qualität und authentische Erlebnisse.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase text-muted-foreground leading-none mb-1">Support Nummer</p>
                  <p className="text-sm font-black text-secondary">+49 30 22608080</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 font-black text-[10px] uppercase tracking-widest bg-primary shadow-xl hover:scale-105 transition-transform border-none">
                ANGEBOT ANFRAGEN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* High-Density Integrated Sections */}
      <EgyptFeaturedContent />
      <EgyptVideoBlog />
      <EgyptFAQ />
      <ContactSection />
    </div>
  );
}
