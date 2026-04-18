
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Map, Camera, Globe } from 'lucide-react';
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
      {/* 01 Compact Prestige Hero */}
      <section className="relative h-[65vh] md:h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Great Migration Serengeti" 
          fill 
          priority 
          className="object-cover brightness-[0.5] scale-105" 
          data-ai-hint="migration herds"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center pt-32 md:pt-40 text-center">
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
              <p className="max-w-2xl mx-auto text-white/90 font-normal text-sm md:text-xl leading-relaxed opacity-80">
                Erleben Sie das grösste Naturschauspiel der Welt in der Serengeti. Wir bringen Sie direkt an das Herz des Geschehens – exklusiv und privat.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl font-bold text-xs shadow-2xl border-none">
                Termine prüfen
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl font-bold text-xs">
                Migration Guide entdecken
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Feature Icons Strip */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent pb-10">
          <div className="container mx-auto px-4 flex justify-center gap-8 md:gap-16">
            {[
              { icon: Map, label: "Tracking" },
              { icon: Camera, label: "Photography" },
              { icon: Globe, label: "Expedition" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-bold text-white/60 tracking-normal uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Content Flow */}
      <MigrationSafariFactor />
      <MigrationExpertise />
      <MigrationTimeline />
      <MigrationGallery />
      <MigrationVideoBlog />
      
      {/* Lead Capture */}
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
}
