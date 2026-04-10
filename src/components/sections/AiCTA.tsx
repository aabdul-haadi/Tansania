
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * Reusable 2x2 Mosaic Conversion Hub.
 * 100% Responsive Protocol for all device scales.
 * Balances AI Intelligent Assistance with Human Expertise.
 */
export function AiCTA() {
  const elephantsSunset = PlaceHolderImages.find(img => img.id === 'elephants-sunset-lake');

  return (
    <section className="bg-white border-t border-border/40 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Tile 1: AI HUB (Top Left) - RECALIBRATED: Single Line AI Advisor */}
        <div className="bg-white text-secondary p-8 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center space-y-8 md:space-y-10 min-h-[450px] md:min-h-[550px] order-1 border-b md:border-b-0 border-border/40">
          <div className="space-y-8 flex flex-col items-center">
            {/* AI Advisor Visual Registry */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-20 h-20 md:w-24 md:h-24"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full rotate-6 scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-muted">
                <img 
                  src="https://picsum.photos/seed/ai-advisor/200/200" 
                  alt="AI Trip Advisor" 
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* Live Intelligence Indicator */}
              <div className="absolute -bottom-1 -right-1 md:bottom-0 md:right-0">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white shadow-sm"></span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold uppercase leading-none text-secondary whitespace-nowrap">
                AI TRIP ADVISOR
              </h2>
              <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground max-w-[300px] mx-auto leading-relaxed">
                Nutzen Sie Ihren persönlichen <span className="text-secondary">KI-KOLLEGEN</span> für sofortige Antworten und maßgeschneiderte Routenvorschläge rund um die Uhr.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full max-w-xs px-4 sm:px-0">
            <Link href="/trip-advisor">
              <Button className="w-full h-11 md:h-14 rounded-xl bg-secondary text-white hover:bg-primary font-black text-[9px] sm:text-[10px] uppercase tracking-widest border-none transition-all shadow-2xl group">
                KI-BERATER JETZT FRAGEN <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Tile 2: Guide Image (Top Right) */}
        <div className="relative aspect-square md:aspect-auto min-h-[350px] md:min-h-full overflow-hidden order-2">
          <Image 
            src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200"
            alt="Safari Expert Guide"
            fill
            className="object-cover"
            data-ai-hint="safari guide"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
              <Compass className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest">Expert Field Registry</span>
          </div>
        </div>

        {/* Tile 3: DIRECT HUMAN CONTACT (Mobile Order 3 / Desktop Order 4) */}
        <div className="bg-[#FDF7F2] p-8 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center space-y-8 md:space-y-10 min-h-[400px] md:min-h-[550px] order-3 md:order-4 border-t md:border-t-0 border-border/40">
          <div className="space-y-6">
            <div className="relative w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto">
              <div className="absolute inset-0 bg-[#C9A876]/20 rounded-full transform rotate-6 scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="https://picsum.photos/seed/expert-maria/200/200" alt="Travel Specialist" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white shadow-lg" title="Expert Online" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl sm:text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tight">Direkter Kontakt</h3>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                Unsere Spezialisten in Berlin entwerfen Ihre Route von Grund auf neu – mit Herz und Verstand.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs px-4 sm:px-0">
            <Link href="/trip-planner">
              <Button className="w-full h-11 md:h-14 rounded-xl bg-secondary text-white hover:bg-primary font-black text-[9px] sm:text-[10px] uppercase tracking-widest border-none transition-all shadow-2xl">
                JETZT BERATUNG ANFRAGEN
              </Button>
            </Link>
            <a href="tel:+493022608080" className="flex items-center justify-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-secondary/60 hover:text-primary transition-colors py-2">
              <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" /> +49 30 22608080
            </a>
          </div>
        </div>

        {/* Tile 4: Atmospheric Image (Mobile Order 4 / Desktop Order 3) */}
        <div className="relative aspect-square md:aspect-auto min-h-[350px] md:min-h-full overflow-hidden order-4 md:order-3 border-t border-border/40">
          <Image 
            src={elephantsSunset?.imageUrl || "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=1200"}
            alt="Elephants at Sunset"
            fill
            className="object-cover"
            data-ai-hint={elephantsSunset?.imageHint || "elephants sunset"}
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10 text-center">
            <div className="p-6 sm:p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] w-[85%] max-w-[320px] shadow-2xl flex flex-col items-center justify-center text-center">
              <p className="text-white font-headline text-base sm:text-xl md:text-2xl uppercase tracking-tight leading-tight text-center">
                "Persönlichkeit ist durch nichts zu ersetzen."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
