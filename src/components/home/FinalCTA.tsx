"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="relative min-h-[30vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden bg-secondary py-8 md:py-20">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Terrace" 
          fill 
          unoptimized
          priority 
          className="object-cover brightness-[0.45] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-10"
        >
          <div className="space-y-2">
            <h2 className="font-headline text-2xl md:text-6xl font-normal text-white tracking-tighter leading-tight uppercase">
              Bereit für Ihr Tansania-Abenteuer?
            </h2>
            
            <p className="text-white/90 font-normal text-xs md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide">
              Lassen Sie uns gemeinsam Ihre individuelle Traumreise gestalten. <br className="hidden md:block" />
              Persönlich, professionell und mit Leidenschaft für Afrika.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2">
            <Link href="/trip-planner" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto rounded-lg px-6 md:px-10 h-12 md:h-14 bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-500 font-bold text-[10px] md:text-[11px] uppercase tracking-widest border-none group shadow-2xl"
              >
                <span className="hidden sm:inline">Kostenlose </span>Beratung anfragen <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="tel:+493022608080" className="w-full sm:w-auto">
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto rounded-lg px-6 md:px-10 h-12 md:h-14 bg-transparent text-white border-white hover:bg-white/10 transition-all duration-500 font-bold text-[10px] md:text-[11px] uppercase tracking-widest"
              >
                <span className="hidden sm:inline">Jetzt </span>anrufen
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
}
