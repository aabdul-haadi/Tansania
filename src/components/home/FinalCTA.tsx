"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Sunset" 
          fill 
          priority 
          unoptimized
          className="object-cover brightness-[0.4] scale-105"
          data-ai-hint="safari sunset"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 md:space-y-4"
        >
          <div className="space-y-2">
            <h2 className="font-headline text-2xl md:text-5xl font-normal text-white uppercase tracking-tighter leading-tight text-center">
              Bereit für Ihr <br />
              <span className="text-primary">Tansania-Abenteuer?</span>
            </h2>
            <p className="text-white/90 font-normal text-[7px] md:text-[10px] uppercase tracking-[0.3em] max-w-xl mx-auto leading-relaxed text-center">
              Lassen Sie uns gemeinsam Ihre individuelle Traumreise gestalten. Persönlich, professionell und mit Leidenschaft für Afrika.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 pt-2">
            <Link href="/trip-planner" className="w-full sm:w-auto">
              <Button size="default" className="w-full sm:w-auto rounded-lg px-6 h-10 md:h-12 bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-500 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] shadow-xl border-none group">
                Beratung anfragen <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="tel:+493022608080" className="w-full sm:w-auto">
              <Button size="default" className="w-full sm:w-auto rounded-lg px-6 h-10 md:h-12 bg-white text-secondary hover:bg-secondary hover:text-white transition-all duration-500 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] shadow-xl border-none group">
                <Phone className="w-3.5 h-3.5 mr-2" /> Jetzt anrufen
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
}
