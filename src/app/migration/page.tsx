"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Map, Phone, Sparkles, Zap, Globe, Compass, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/shared/ContactSection';
import { MigrationVideoBlog } from '@/components/sections/MigrationVideoBlog';
import { MigrationSafariFactor } from '@/components/sections/MigrationSafariFactor';
import { MigrationTimeline } from '@/components/sections/MigrationTimeline';
import { MigrationExpertise } from '@/components/sections/MigrationExpertise';
import { MigrationGallery } from '@/components/sections/MigrationGallery';

export default function MigrationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* High-Density Modular Hero */}
      <section className="relative h-[65vh] md:h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Great Migration Serengeti" 
          fill 
          priority 
          className="object-cover brightness-[0.4]" 
          data-ai-hint="migration herds"
        />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-2">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Naturwunder Registry</span>
            </div>
            <h1 className="font-headline text-5xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
              MIGRATION
            </h1>
            <p className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px] md:text-sm max-w-xl mx-auto leading-relaxed">
              Die größte Tierwanderung der Welt • 2026/2027 Status: LIVE
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent pb-10">
          <div className="container mx-auto px-4 flex justify-center gap-12">
            {[
              { icon: Map, label: "Navigation" },
              { icon: Camera, label: "Tracking" },
              { icon: Globe, label: "Expedition" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MigrationSafariFactor />
      <MigrationExpertise />
      <MigrationTimeline />
      <MigrationGallery />
      <MigrationVideoBlog />
      
      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
}
