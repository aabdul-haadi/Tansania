
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Globe, Sparkles, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { SafariMap } from '@/components/home/SafariMap';
import { Testimonials } from '@/components/home/Testimonials';
import { CinematicQuote } from '@/components/home/CinematicQuote';
import { FAQ } from '@/components/home/FAQ';
import { ExpertiseNarrative } from '@/components/home/ExpertiseNarrative';
import { AfricaVariety } from '@/components/home/AfricaVariety';
import { ContactSection } from '@/components/shared/ContactSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ProcessSection } from '@/components/home/ProcessSection';
import { VisualJournalGrid } from '@/components/home/VisualJournalGrid';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';

export default function Home() {
  return (
    <div className="relative bg-background">
      {/* STICKY RIGHT CTA PROTOCOL */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col gap-2">
        <Link href="/trip-planner">
          <motion.div 
            whileHover={{ x: -10 }}
            className="bg-primary text-white p-4 rounded-l-2xl shadow-2xl flex flex-col items-center gap-3 cursor-pointer border-y border-l border-white/20 backdrop-blur-md"
          >
            <Zap className="w-5 h-5 fill-white" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 py-2">
              Express Inquiry
            </span>
          </motion.div>
        </Link>
      </div>

      {/* 02 HERO SECTION - Cinematic Registry Protocol */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner-1.webp" 
            alt="Serengeti Dreams Visual" 
            fill 
            priority 
            className="object-cover brightness-[0.7] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-black/30 md:via-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl h-full flex flex-col justify-center md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3 md:space-y-4 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="space-y-2 md:space-y-3"
              >
                {/* Desktop-only Headline Hierarchy */}
                <div className="hidden md:block">
                  <div className="inline-flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-[0.4em] mb-1">
                    <Compass className="w-3.5 h-3.5" /> Registry 2026/27
                  </div>
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[1.1] tracking-tighter uppercase">
                    <span className="text-primary">PRESTIGE</span>
                  </h1>
                </div>
                
                {/* Unified Narrative Promise */}
                <p className="max-w-md mx-auto lg:mx-0 text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest leading-relaxed pt-20 md:pt-0">
                  Experten-gestaltete Safaris & exklusive Sansibar-Fluchten.
                  <br />
                  In Berlin konzipiert – in Afrika gelebt.
                </p>
              </motion.div>

              {/* Desktop-only Action Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="hidden md:flex flex-col sm:flex-row gap-2.5 md:gap-3 justify-center lg:justify-start pt-2"
              >
                <Link href="/safaris" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-44 h-10 md:h-12 px-5 rounded-lg font-black shadow-xl border-none text-[10px] uppercase tracking-widest">
                    Katalog Erkunden
                  </Button>
                </Link>
                <Link href="/trip-advisor" className="w-full sm:w-auto">
                  <Button variant="glass" className="w-full sm:w-44 h-10 md:h-12 px-5 rounded-lg shadow-xl border-white/20 text-[10px] font-black uppercase tracking-widest">
                    AI Advisor <Zap className="w-3.5 h-3.5 ml-1.5 fill-current" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Cinematic Video Protocol Bottom Anchor */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-500 group shadow-2xl">
              <Play className="w-5 h-5 md:w-6 md:h-6 fill-current group-hover:scale-110 transition-transform ml-1" />
            </button>
            <div className="text-center md:text-left">
              <p className="text-[7px] md:text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">Visual Discovery</p>
              <p className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest">Watch Expedition Film</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 TRUST STRIP */}
      <TrustStrip />

      {/* 04 WARUM WIR */}
      <ExpertiseNarrative />

      {/* 05 REISEZIELE - Kontinentale Vielfalt */}
      <AfricaVariety />

      {/* 06 SO FUNKTIONIERT ES */}
      <ProcessSection />

      {/* EXPEDITIONSLOGISTIK - Von Kairo in die Savanne */}
      <SafariMap />

      {/* 07 KUNDENSTIMMEN */}
      <Testimonials />
      <CinematicQuote />

      {/* 08 SAFARI-PAKETE */}
      <FeaturedPackages />

      {/* 09 FOTO-GALERIE - Visual Journal */}
      <VisualJournalGrid />

      {/* 12 FAQ */}
      <FAQ />

      {/* 10 LEAD-FORMULAR */}
      <ContactSection />
    </div>
  );
}
