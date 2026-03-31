
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
import { TravelCategories } from '@/components/home/TravelCategories';
import { ContactSection } from '@/components/shared/ContactSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ProcessSection } from '@/components/home/ProcessSection';
import { VisualJournalGrid } from '@/components/home/VisualJournalGrid';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { ExpertiseNarrative } from '@/components/home/ExpertiseNarrative';

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
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner-1.webp" 
            alt="Serengeti Dreams Visual" 
            fill 
            priority 
            className="object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-black/30 md:via-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl h-full flex flex-col justify-end pb-16 md:justify-center md:pb-0 md:pt-16">
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
                  <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter uppercase">
                    <span className="text-primary">PRESTIGE</span>
                  </h1>
                </div>
                
                {/* Unified Narrative Promise - Desktop Only */}
                <p className="max-w-md mx-auto lg:mx-0 text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest leading-relaxed hidden md:block">
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

        {/* Cinematic Video Protocol Bottom Anchor - Centered on Mobile, Right on Desktop */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center md:items-end gap-2"
          >
            <motion.button 
              animate={{ 
                boxShadow: ["0 0 0px rgba(227, 81, 13, 0)", "0 0 20px rgba(227, 81, 13, 0.3)", "0 0 0px rgba(227, 81, 13, 0)"],
                scale: [1, 1.05, 1]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-500 group shadow-2xl"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current group-hover:scale-110 transition-transform ml-1" />
            </motion.button>
            <div className="text-center md:text-right">
              <p className="text-[6px] md:text-[7px] font-black text-white/40 uppercase tracking-[0.4em]">Visual Discovery</p>
              <p className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-widest">Watch Expedition Film</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 TRUST STRIP */}
      <TrustStrip />

      {/* 04 TRAVEL CATEGORIES */}
      <TravelCategories />

      {/* 07 CINEMATIC BREAKER */}
      <CinematicQuote />

      {/* 08 EXPERTISE & SAFARI-PAKETE - PLACED BEFORE PROCESS SECTION */}
      <ExpertiseNarrative />
      <FeaturedPackages />

      {/* 06 SO FUNKTIONIERT ES */}
      <ProcessSection />

      {/* EXPEDITIONSLOGISTIK - Von Kairo in die Savanne */}
      <SafariMap />

      {/* 07 KUNDENSTIMMEN */}
      <Testimonials />

      {/* 09 FOTO-GALERIE - Visual Journal */}
      <VisualJournalGrid />

      {/* 12 FAQ */}
      <FAQ />

      {/* 10 LEAD-FORMULAR */}
      <ContactSection />
    </div>
  );
}
