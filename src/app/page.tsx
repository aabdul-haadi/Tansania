
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Sparkles, Globe, Compass, ChevronRight } from 'lucide-react';
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
import { AfricaVariety } from '@/components/sections/AfricaVariety';
import { ContactSection } from '@/components/shared/ContactSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AtmosphericGallery } from '@/components/sections/AtmosphericGallery';
import { FeaturedPackages } from '@/components/sections/FeaturedPackages';
import { SunriseCTA } from '@/components/sections/SunriseCTA';

export default function Home() {
  return (
    <div className="relative bg-background">
      {/* 01 Navigation managed via Layout */}
      
      {/* 02 HERO SECTION */}
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
                <div className="inline-flex items-center gap-2 text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2">
                  <Compass className="w-4 h-4" /> Official Site Registry
                </div>
                <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight uppercase">
                  TANSANIA <br />
                  <span className="text-primary">PRESTIGE</span>
                </h1>
                
                <p className="max-w-xl mx-auto lg:mx-0 text-white/60 font-bold text-sm md:text-xl uppercase tracking-widest leading-relaxed">
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
                  <Button size="xl" className="w-full h-14 md:h-16 px-8 rounded-xl font-bold shadow-2xl">
                    Katalog Erkunden
                  </Button>
                </Link>
                <Link href="/trip-advisor" className="w-full sm:w-auto">
                  <Button size="xl" variant="glass" className="w-full h-14 md:h-16 px-8 rounded-xl shadow-xl">
                    AI Advisor <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
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
                  <div className="absolute top-0 right-0 p-6 opacity-5"><Globe className="w-24 h-24 rotate-12" /></div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white uppercase tracking-tight">Active Registry</h3>
                        <p className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">Live Status: Safe to Book</p>
                      </div>
                    </div>
                    <p className="text-white/60 font-bold leading-relaxed text-sm uppercase tracking-widest">
                      Alle unsere Routen sind aktuell auf die Große Tierwanderung und regionale Wetterbedingungen 2026/2027 abgestimmt.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 TRUST STRIP */}
      <TrustStrip />

      {/* 04 WARUM WIR */}
      <ExpertiseNarrative />

      {/* 05 REISEZIELE / KONTINENTALE VIELFALT */}
      <AfricaVariety />

      {/* 06 SO FUNKTIONIERT ES */}
      <ProcessSection />

      {/* EXPEDITIONSLOGISTIK */}
      <SafariMap />

      {/* 07 KUNDENSTIMMEN */}
      <Testimonials />
      <CinematicQuote />

      {/* 08 SAFARI-PAKETE */}
      <FeaturedPackages />

      {/* 09 FOTO-GALERIE */}
      <AtmosphericGallery />

      {/* 12 FAQ */}
      <FAQ />

      {/* 10 LEAD-FORMULAR */}
      <ContactSection />

      {/* 11 FINALER CTA */}
      <SunriseCTA />
    </div>
  );
}
