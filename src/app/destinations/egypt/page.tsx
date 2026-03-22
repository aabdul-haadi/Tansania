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
  Compass,
  Globe,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { EgyptFAQ } from '@/components/sections/EgyptFAQ';
import { EgyptFeaturedContent } from '@/components/sections/EgyptFeaturedContent';
import { EgyptVideoBlog } from '@/components/sections/EgyptVideoBlog';

export default function EgyptLandingPage() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* CREATIVE MODERN HERO: Split-Narrative Glass Design */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1920" 
            alt="Pyramids Giza" 
            fill 
            priority 
            className="object-cover brightness-[0.35] scale-105"
            data-ai-hint="sphinx pyramids"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl pt-16 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2">
                  <Compass className="w-4 h-4" /> Destination Registry
                </div>
                <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase">
                  ÄGYPTEN: DIE MAGIE <br />
                  <span className="text-primary">DER PHARAONEN</span>
                </h1>
                
                <p className="max-w-xl mx-auto lg:mx-0 text-white/60 font-bold text-[10px] md:text-lg uppercase tracking-widest leading-relaxed">
                  Die majestätischen Pyramiden von Gizeh & Geheimnisse von Luxor. <br className="hidden md:block" />
                  In Berlin konzipiert – am Nil gelebt.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <Button size="xl" className="w-full sm:w-auto h-12 md:h-16 px-8 rounded-xl font-bold shadow-2xl">
                  Angebot Anfragen
                </Button>
                <Button size="xl" variant="glass" className="w-full sm:w-auto h-12 md:h-16 px-8 rounded-xl shadow-xl">
                  Routen Erkunden <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* PRESTIGE FLOATING CARD */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                <Card className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-5"><Globe className="w-24 h-24 rotate-12" /></div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white uppercase tracking-tight">Cairo Presence</h3>
                        <p className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">Live Status: Active Ops</p>
                      </div>
                    </div>
                    <p className="text-white/60 font-bold leading-relaxed text-[10px] uppercase tracking-widest">
                      Unser Kairo-Team sichert Qualität und authentische Erlebnisse vor Ort – vom Nil bis zum Roten Meer.
                    </p>
                    <div className="pt-2 space-y-3">
                      {["Privat-Cruises am Nil", "Exklusive Tempel-Touren", "Bespoke Egypt Itineraries"].map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-white/80">
                          <ShieldCheck className="w-4 h-4 text-primary" /> {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPACTED STATS STRIP */}
      <section className="py-6 md:py-10 bg-white border-y border-border/50 relative z-30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: MapPin, label: "Luxor & Assuan" },
              { icon: Zap, label: "Direktflüge" },
              { icon: Globe, label: "Kairo Office" },
              { icon: ShieldCheck, label: "DRSF Abgesichert" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 md:gap-3 group">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section - Recalibrated Typography */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative group">
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
                  src="https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=800" 
                  alt="Pyramids Giza" 
                  fill 
                  className="object-cover" 
                  data-ai-hint="sphinx pyramids"
                />
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 24px' }} />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] block">National-Registry</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight uppercase tracking-tight">
                ZEITLOSE WUNDER <br /><span className="text-primary">DES NILS</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-bold text-xs md:text-sm leading-relaxed uppercase tracking-widest opacity-80">
                <p>Erleben Sie Ägypten in seiner ganzen Pracht: die majestätischen Pyramiden von Gizeh, die Geheimnisse der Sphinx und die beeindruckenden Tempel von Luxor.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight">Individuell</h4>
                </div>
                <p className="text-[9px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Maßgeschneiderte Routen für Ihre Wünsche – vom Nil bis zum Roten Meer.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight">Experten</h4>
                </div>
                <p className="text-[9px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
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
                  <p className="text-[8px] font-bold uppercase text-muted-foreground leading-none mb-1">Support Berlin</p>
                  <p className="text-sm font-bold text-secondary">+49 30 22608080</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 font-bold text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl border-none">
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
