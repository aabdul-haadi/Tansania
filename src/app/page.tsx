"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Sparkles, Globe, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SafariMap } from '@/components/sections/SafariMap';
import { ImmersiveReveal } from '@/components/sections/ImmersiveReveal';
import { CinematicQuote } from '@/components/sections/CinematicQuote';
import { Testimonials } from '@/components/sections/Testimonials';
import { KilimanjaroSummit } from '@/components/home/KilimanjaroSummit';
import { ZanzibarEscape } from '@/components/home/ZanzibarEscape';
import { SafariVideo } from '@/components/sections/SafariVideo';
import { FAQ } from '@/components/sections/FAQ';
import { ExpertiseNarrative } from '@/components/sections/ExpertiseNarrative';
import { MeetTheSpecialists } from '@/components/sections/MeetTheSpecialists';
import { AfricaVariety } from '@/components/sections/AfricaVariety';
import { ContactSection } from '@/components/shared/ContactSection';

export default function Home() {
  const highlights = [
    { title: "Sansibar Küste", desc: "Makellose weiße Sandstrände und historische Gewürzküste.", img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200', link: "/destinations/zanzibar", hint: "zanzibar beach" },
    { title: "Serengeti Ebenen", desc: "Erleben Sie die legendäre Große Tierwanderung am Horizont.", img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200', link: "/destinations/serengeti", hint: "serengeti wildlife" },
    { title: "Ngorongoro Krater", desc: "Ein natürliches Amphitheater der Wildnis in einem Vulkan.", img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200', link: "/destinations/ngorongoro", hint: "ngorongoro crater" },
  ];

  return (
    <div className="relative bg-background">
      {/* COMPACTED PRESTIGE HERO: Reduced Weights & Balanced Sizes */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Serengeti Savannah" 
            fill 
            priority 
            className="object-cover brightness-[0.35] scale-105"
            data-ai-hint="serengeti safari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl pt-12 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mx-auto lg:mx-0">
                  <Sparkles className="w-3.5 h-3.5" /> Destination Registry Active
                </div>
                
                <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight uppercase">
                  TANSANIA <br />
                  <span className="text-primary">PRESTIGE</span>
                </h1>
                
                <p className="max-w-xl mx-auto lg:mx-0 text-white/60 font-bold text-xs md:text-lg uppercase tracking-widest leading-relaxed">
                  Experten-gestaltete Safaris & exklusive Sansibar-Fluchten. <br className="hidden md:block" />
                  Ihre Reise, in Berlin konzipiert – in Afrika gelebt.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <Link href="/safaris" className="w-full sm:w-auto">
                  <Button size="xl" className="w-full h-12 md:h-16 px-8 rounded-xl font-bold shadow-2xl">
                    Katalog Erkunden
                  </Button>
                </Link>
                <Link href="/trip-advisor" className="w-full sm:w-auto">
                  <Button size="xl" variant="glass" className="w-full h-12 md:h-16 px-8 rounded-xl shadow-xl">
                    AI Advisor <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0"
              >
                <div className="flex flex-col text-white">
                  <span className="font-bold text-lg md:text-xl">500+</span>
                  <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-widest font-bold">Paths</span>
                </div>
                <div className="w-px h-8 md:h-10 bg-white/10" />
                <div className="flex flex-col text-white">
                  <span className="font-bold text-lg md:text-xl">100%</span>
                  <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-widest font-bold">Privat</span>
                </div>
                <div className="w-px h-8 md:h-10 bg-white/10" />
                <div className="flex flex-col text-white">
                  <span className="font-bold text-lg md:text-xl">24/7</span>
                  <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-widest font-bold">Support</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                <Card className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-5"><Compass className="w-24 h-24 rotate-12" /></div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white uppercase tracking-tight">Active Registry</h3>
                        <p className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">Live Status: Safe to Book</p>
                      </div>
                    </div>
                    <p className="text-white/60 font-bold leading-relaxed text-sm uppercase tracking-widest">
                      Alle unsere Routen sind aktuell auf die Große Tierwanderung und regionale Wetterbedingungen 2026/2027 abgestimmt.
                    </p>
                    <div className="pt-2 space-y-3">
                      {["HanseMerkur Absicherung", "Deutsche Reiseleitung", "Bespoke Itinerary Architect"].map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
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

      <section className="py-6 md:py-10 bg-white border-y border-border/50 relative z-30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, label: "Sicher Buchen" },
              { icon: Sparkles, label: "Prestige Standard" },
              { icon: Globe, label: "8 Country Hubs" },
              { icon: Compass, label: "24/7 Support" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 md:gap-3 group">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseNarrative />

      <SafariMap />
      <AfricaVariety />
      <SafariVideo />
      <KilimanjaroSummit />
      <ZanzibarEscape />
      <MeetTheSpecialists />
      <ImmersiveReveal />
      <Testimonials />
      <CinematicQuote />
      <FAQ />
      <ContactSection />
    </div>
  );
}