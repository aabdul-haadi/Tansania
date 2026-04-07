
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Users, Compass, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: "01",
    title: "Ihr persönlicher Afrika-Experte",
    desc: "Wir sind kein anonymes Buchungsportal. Wir sind ein engagiertes Team in Berlin, das Tansania aus jahrelanger Erfahrung kennt und liebt.",
    icon: Star,
    size: "large",
    bg: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200",
    hint: "safari guide"
  },
  {
    id: "02",
    title: "100% Private Expeditionen",
    desc: "Kein geteilter Bus, keine Kompromisse. Ihr eigener Jeep und Ihr privater Guide garantieren ein exklusives Abenteuer in Ihrem eigenen Tempo.",
    icon: Compass,
    size: "mid",
    bg: "bg-primary text-white"
  },
  {
    id: "03",
    title: "Echte lokale Wurzeln",
    desc: "Unsere Partner in Arusha sind Freunde, denen wir unsere eigene Familie anvertrauen würden. Authentizität ist bei uns kein Marketing – es ist unsere Basis.",
    icon: Users,
    size: "small",
    bg: "bg-white border border-border/50"
  },
  {
    id: "04",
    title: "Geprüfte Sicherheit",
    desc: "TATO-Mitglied & DRSF-abgesichert. Wir übernehmen die volle Verantwortung für Ihre Reise – von der Planung in Berlin bis zur Umsetzung vor Ort.",
    icon: ShieldCheck,
    size: "small",
    bg: "bg-[#FDF7F2] border border-[#F0EBE0]"
  }
];

export function WhyUs() {
  return (
    <section className="py-12 md:py-24 bg-[#fdfcfb] overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Standardized Header Protocol */}
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter"
          >
            Warum mit uns reisen?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[10px] md:text-xs uppercase tracking-widest max-w-2xl mx-auto opacity-80"
          >
            Ihre Träume in den Händen von Experten – persönlich, sicher und exklusiv.
          </motion.p>
        </div>

        {/* Compact Modular Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-fr">
          
          {/* Tile 01: The Cinematic Hero Tile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-xl bg-muted h-full min-h-[300px]"
          >
            <Image 
              src={features[0].bg} 
              alt={features[0].title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={features[0].hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-[0.4em]">Expertise Registry</span>
                </div>
                <h3 className="font-headline text-xl md:text-3xl text-white uppercase tracking-tight leading-tight">
                  {features[0].title}
                </h3>
                <p className="text-white/80 font-normal text-[10px] md:text-sm leading-relaxed max-w-lg uppercase tracking-widest">
                  {features[0].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tile 02: High Contrast Accent Tile */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(
              "md:col-span-4 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden",
              features[1].bg
            )}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10"><Compass className="w-20 h-20 rotate-12 text-white" /></div>
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl text-white uppercase tracking-tight leading-tight">
                {features[1].title}
              </h3>
              <p className="text-white/90 font-normal text-[9px] md:text-xs leading-relaxed uppercase tracking-widest">
                {features[1].desc}
              </p>
            </div>
            <div className="relative z-10 pt-6 mt-auto border-t border-white/20">
              <span className="text-[8px] font-bold text-white uppercase tracking-[0.3em]">Privacy Protocol</span>
            </div>
          </motion.div>

          {/* Tile 03: Minimalist Trust Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-border/50 p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500 shadow-inner">
              <Users className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-lg md:text-2xl text-secondary uppercase tracking-tight">
                {features[2].title}
              </h3>
              <p className="text-muted-foreground font-normal text-[10px] md:text-sm leading-relaxed uppercase tracking-widest opacity-80">
                {features[2].desc}
              </p>
            </div>
          </motion.div>

          {/* Tile 04: Accredited Safety Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#FDF7F2] border border-[#F0EBE0] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-lg md:text-2xl text-secondary uppercase tracking-tight">
                {features[3].title}
              </h3>
              <p className="text-muted-foreground font-normal text-[10px] md:text-sm leading-relaxed uppercase tracking-widest opacity-80">
                {features[3].desc}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
