
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Map, Camera, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactSection } from '@/components/shared/ContactSection';
import { MigrationVideoBlog } from '@/components/sections/MigrationVideoBlog';
import { MigrationSafariFactor } from '@/components/sections/MigrationSafariFactor';
import { MigrationTimeline } from '@/components/sections/MigrationTimeline';
import { MigrationExpertise } from '@/components/sections/MigrationExpertise';
import { MigrationGallery } from '@/components/sections/MigrationGallery';

export default function MigrationPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section - Compacted Action Protocol */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Great Migration Serengeti" 
          fill 
          priority 
          className="object-cover brightness-[0.55] scale-105" 
          data-ai-hint="migration herds"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-center items-center pt-32 md:pt-40 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8 max-w-4xl"
          >
            <div className="space-y-4">
              <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-normal text-white leading-tight tracking-tight">
                Die große Tierwanderung
              </h1>
              <p className="max-w-2xl mx-auto text-white/90 font-normal text-sm md:text-xl leading-relaxed opacity-90 tracking-normal">
                Erleben Sie das grösste Naturschauspiel der Welt in der Serengeti. Wir bringen Sie direkt an das Herz des Geschehens – exklusiv und privat.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-10 rounded-xl font-bold text-xs shadow-2xl border-none transition-all hover:scale-105">
                Termine prüfen
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-10 rounded-xl font-bold text-xs shadow-xl">
                Route entdecken <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 z-20 hidden md:block">
          <div className="container mx-auto px-4 flex justify-center gap-16">
            {[
              { icon: Map, label: "Live Tracking" },
              { icon: Camera, label: "Fotografie" },
              { icon: Globe, label: "Expedition" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Content Flow */}
      <div className="space-y-0">
        <MigrationSafariFactor />
        <MigrationExpertise />
        <MigrationTimeline />
        <MigrationGallery />
        <MigrationVideoBlog />
        <ContactSection />
      </div>
    </div>
  );
}
