"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MessageSquare, ShieldCheck, Heart, Map, Clock, ArrowRight, Sparkles, Globe, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SafariMap } from '@/components/sections/SafariMap';
import { ImmersiveReveal } from '@/components/sections/ImmersiveReveal';
import { CinematicQuote } from '@/components/sections/CinematicQuote';
import { Testimonials } from '@/components/sections/Testimonials';
import { KilimanjaroSummit } from '@/components/sections/KilimanjaroSummit';
import { ZanzibarEscape } from '@/components/sections/ZanzibarEscape';
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
      {/* CREATIVE MODERN HERO: Floating Cinematic Logic */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
        {/* Dynamic Background */}
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
          
          {/* Topographic Accent Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                  <Sparkles className="w-4 h-4" /> Established 2014 • SDL Berlin
                </div>
                
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                  TANSANIA <br />
                  <span className="text-primary">PRESTIGE</span>
                </h1>
                
                <p className="max-w-xl text-white/60 font-bold text-sm md:text-xl uppercase tracking-widest leading-relaxed">
                  Experten-gestaltete Safaris & exklusive Sansibar-Fluchten. <br className="hidden md:block" />
                  Ihre Reise, in Berlin konzipiert – in Afrika gelebt.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link href="/safaris" className="w-full sm:w-auto">
                  <Button size="xl" className="w-full border-none shadow-2xl">
                    Katalog Erkunden
                  </Button>
                </Link>
                <Link href="/trip-advisor" className="w-full sm:w-auto">
                  <Button size="xl" variant="glass" className="w-full shadow-xl">
                    AI Advisor <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Authority Pulse */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 pt-8 border-t border-white/10 max-w-md"
              >
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl">500+</span>
                  <span className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Destinations-Paths</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl">100%</span>
                  <span className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Privat-Safaris</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl">24/7</span>
                  <span className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Expert Support</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Floating Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                <Card className="glass-card rounded-[3rem] p-10 relative overflow-hidden group shadow-2xl border-white/10">
                  <div className="absolute top-0 right-0 p-8 opacity-10"><Compass className="w-32 h-32 rotate-12" /></div>
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">Active Registry</h3>
                        <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Live Status: Safe to Book</p>
                      </div>
                    </div>
                    <p className="text-white/60 font-bold leading-relaxed text-sm uppercase tracking-widest">
                      Alle unsere Routen sind aktuell auf die Große Tierwanderung und regionale Wetterbedingungen 2026/2027 abgestimmt.
                    </p>
                    <div className="pt-4 space-y-3">
                      {["HanseMerkur Absicherung", "Deutsche Reiseleitung", "Bespoke Itinerary Architect"].map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/80">
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

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Trust Registry Bar */}
      <section className="py-10 bg-white border-y border-border/50 relative z-30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: "Sicher Buchen" },
              { icon: Heart, label: "Nachhaltigkeit" },
              { icon: Map, label: "8 Country Hubs" },
              { icon: Clock, label: "24/7 Support" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <item.icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseNarrative />

      {/* Scale Hub: National Parks */}
      <section className="py-16 md:py-32 bg-muted/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-registry mb-4 block">Destination Portfolio</span>
              <h2 className="font-headline text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                Erkunden Sie die <br /><span className="text-primary">Nationalparks</span>
              </h2>
            </div>
            <Link href="/national-parks">
              <Button variant="outline" className="rounded-xl px-8 h-12 md:h-14 text-[11px] font-black uppercase tracking-widest border-muted">
                Alle Parks ansehen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-xl bg-secondary"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" data-ai-hint={item.hint} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 leading-tight">{item.title}</h3>
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest leading-relaxed mb-6 line-clamp-2">{item.desc}</p>
                  <Link href={item.link}>
                    <Button variant="outline" className="w-full rounded-xl border-white/20 text-white font-black text-[11px] uppercase h-12 md:h-14">
                      Park Erleben
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
