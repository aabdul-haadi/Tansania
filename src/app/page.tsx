
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';
import { TravelCategories } from '@/components/home/TravelCategories';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { WhyUs } from '@/components/home/WhyUs';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CinematicQuote } from '@/components/home/CinematicQuote';
import { TanzaniaDestinations } from '@/components/home/TanzaniaDestinations';
import { VisualJournalGrid } from '@/components/home/VisualJournalGrid';
import { Testimonials } from '@/components/home/Testimonials';
import { ContactSection } from '@/components/shared/ContactSection';
import { FAQ } from '@/components/home/FAQ';
import { FinalCTA } from '@/components/home/FinalCTA';
import { TrustStrip } from '@/components/home/TrustStrip';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative bg-background font-normal">
      {/* STICKY RIGHT CTA PROTOCOL */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col gap-2">
        <Link href="/trip-planner">
          <motion.div 
            whileHover={{ x: -10 }}
            className="bg-primary text-white p-4 rounded-l-2xl shadow-2xl flex flex-col items-center gap-3 cursor-pointer border-y border-l border-white/20 backdrop-blur-md"
          >
            <Zap className="w-5 h-5 fill-white" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 py-2">
              Express Inquiry
            </span>
          </motion.div>
        </Link>
      </div>

      {/* HERO SECTION - REFINED CLONE */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-secondary">
        {/* Background Visual Asset */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner-1.webp" 
            alt="Serengeti Dreams Signature Visual" 
            fill 
            priority 
            unoptimized
            className="object-cover brightness-[0.6] scale-105"
            data-ai-hint="elephant forest"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* Massive Background Wordmark - 100% Responsive Protocol */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h2 className="font-headline font-black text-white/[0.05] text-[25vw] leading-none uppercase tracking-tighter transition-all duration-1000">
            Tansania
          </h2>
        </div>
        
        <div className="container relative z-20 mx-auto px-6 md:px-10 max-w-7xl h-full flex flex-col justify-center pt-20 md:pt-0">
          <div className="max-w-3xl space-y-6 md:space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Technical Registry Small Footer */}
              <div className="pb-2">
                <p className="text-[10px] md:text-[11px] font-normal text-white/60 uppercase tracking-[0.2em]">
                  Über 15 Jahre Expertise · Deutschsprachige Betreuung · Premium-Reisen ab €5.000
                </p>
              </div>

              {/* Main Architectural Headline */}
              <h1 className="font-headline text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter font-normal uppercase">
                Ihre maßgeschneiderte <br />
                Luxusreise durch Tansania
              </h1>

              {/* Narrative Description */}
              <p className="max-w-xl text-white/90 font-normal text-base md:text-lg lg:text-xl leading-relaxed opacity-90 tracking-widest">
                Erleben Sie exklusive Safaris, handverlesene Lodges und unvergessliche Momente. Persönlich geplant, individuell gestaltet.
              </p>
            </motion.div>

            {/* Interaction Protocol Triggers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-0"
            >
              <Link href="/trip-planner">
                <Button className="w-full sm:w-auto h-14 px-8 rounded-lg bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-500 font-bold text-[10px] uppercase tracking-widest border-none group shadow-2xl">
                  Reiseberatung anfragen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/safaris">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-lg bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white font-bold text-[10px] uppercase tracking-widest transition-all duration-500">
                  Unsere Reisen entdecken
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Global Registry Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </section>

      <TrustStrip />
      
      <div className="space-y-0">
        <TravelCategories />
        <FeaturedPackages />
        <WhyUs />
        <ProcessSection />
        <CinematicQuote />
        <TanzaniaDestinations />
        <VisualJournalGrid />
        <Testimonials />
        <ContactSection />
        <FAQ />
        <FinalCTA />
      </div>
    </div>
  );
}
