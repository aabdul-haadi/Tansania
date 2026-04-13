"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AiCTA() {
  const elephantsSunset = PlaceHolderImages.find(img => img.id === 'elephants-sunset-lake');

  return (
    <section className="bg-white border-t border-border/40 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Tile 1: AI Advisor */}
        <div className="bg-white text-secondary p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center space-y-5 min-h-[350px] md:min-h-[400px] order-1 border-b md:border-b-0 border-border/40">
          <div className="space-y-5 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-16 h-16 md:w-20 md:h-20"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full rotate-6 scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-muted">
                <img 
                  src="https://picsum.photos/seed/ai-advisor/200/200" 
                  alt="AI Trip Advisor" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-1 -right-1 md:bottom-0 md:right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white shadow-sm"></span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="font-headline text-2xl md:text-3xl font-bold leading-none text-secondary">
                AI Trip Advisor
              </h2>
              <p className="text-[11px] font-bold text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
                Nutzen Sie Ihren persönlichen Berater für sofortige Antworten und maßgeschneiderte Routenvorschläge rund um die Uhr.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full max-w-xs px-4">
            <Link href="/trip-advisor">
              <Button className="w-full h-11 rounded-xl bg-secondary text-white hover:bg-primary font-bold text-xs border-none transition-all shadow-2xl group">
                Berater fragen <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Tile 2: Field Imagery */}
        <div className="relative aspect-square md:aspect-auto min-h-[350px] md:min-h-[400px] overflow-hidden order-2">
          <Image 
            src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200"
            alt="Safari Expert Guide"
            fill
            className="object-cover"
            data-ai-hint="safari guide"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Expert Field Registry</span>
          </div>
        </div>

        {/* Tile 3: Direct Human Connection */}
        <div className="bg-[#FDF7F2] p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center space-y-5 min-h-[350px] md:min-h-[400px] order-3 md:order-4 border-t md:border-t-0 border-border/40">
          <div className="space-y-5">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto">
              <div className="absolute inset-0 bg-[#C9A876]/20 rounded-full transform rotate-6 scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="https://picsum.photos/seed/expert-maria/200/200" alt="Travel Specialist" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white shadow-lg" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary">Direkter Kontakt</h3>
              <p className="text-[11px] font-bold text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
                Unsere Spezialisten in Berlin entwerfen Ihre Route von Grund auf neu – mit Herz und Verstand.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full max-w-xs px-4">
            <Link href="/trip-planner">
              <Button className="w-full h-11 rounded-xl bg-secondary text-white hover:bg-primary font-bold text-xs border-none transition-all shadow-2xl">
                Beratung anfragen
              </Button>
            </Link>
            <a href="tel:+493022608080" className="flex items-center justify-center gap-2 text-[11px] font-bold text-secondary/60 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +49 30 22608080
            </a>
          </div>
        </div>

        {/* Tile 4: Atmospheric Anchor */}
        <div className="relative aspect-square md:aspect-auto min-h-[350px] md:min-h-[400px] overflow-hidden order-4 md:order-3 border-t border-border/40">
          <Image 
            src={elephantsSunset?.imageUrl || "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=1200"}
            alt="Elephants at Sunset"
            fill
            className="object-cover"
            data-ai-hint={elephantsSunset?.imageHint || "elephants sunset"}
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] w-[85%] max-w-[300px] shadow-2xl">
              <p className="text-white font-headline text-xl md:text-2xl tracking-tight leading-tight italic">
                "Persönlichkeit ist durch nichts zu ersetzen."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}