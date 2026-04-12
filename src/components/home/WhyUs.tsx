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
    bg: "/assets/images/home/why-travel-01.png",
    hint: "safari guide"
  },
  {
    id: "02",
    title: "100% Private Expeditionen",
    desc: "Kein geteilter Bus, keine Kompromisse. Ihr eigener Jeep und Ihr privater Guide garantieren ein exklusives Abenteuer in Ihrem eigenen Tempo.",
    icon: Compass,
    size: "mid",
    bg: "bg-secondary text-white"
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
    <section className="py-16 md:py-32 bg-white overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Protocol */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tight"
          >
            Warum mit uns reisen?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-sm md:text-base max-w-2xl mx-auto tracking-widest opacity-80"
          >
            Ihre Träume in den Händen von Experten – persönlich, sicher und exklusiv.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
          
          {/* Card 01: Large Visual Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl bg-muted h-full min-h-[450px]"
          >
            <Image 
              src={features[0].bg} 
              alt={features[0].title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={features[0].hint || "safari guide"}
            />
            {/* Protective Gradient Protocol */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="max-w-2xl space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-2xl mb-4">
                  {React.createElement(features[0].icon, { className: "w-7 h-7 text-white" })}
                </div>
                <h3 className="font-headline text-2xl md:text-5xl text-white uppercase tracking-tighter leading-none">
                  {features[0].title}
                </h3>
                <p className="text-white/80 font-normal text-sm md:text-lg max-w-lg leading-relaxed">
                  {features[0].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 02: Secondary Registry Feature */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(
              "md:col-span-4 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all duration-500 hover:shadow-2xl",
              features[1].bg
            )}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              {React.createElement(features[1].icon, { className: "w-32 h-32 rotate-12 text-white" })}
            </div>
            <div className="relative z-10 space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                {React.createElement(features[1].icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="font-headline text-2xl md:text-4xl text-white uppercase tracking-tighter leading-tight">
                {features[1].title}
              </h3>
              <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed">
                {features[1].desc}
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Signature Series</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Card 03: Expert Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-border/50 p-8 md:p-12 flex flex-col sm:flex-row gap-10 items-start sm:items-center shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-inner">
              {React.createElement(features[2].icon, { className: "w-10 h-10 text-primary group-hover:text-white transition-colors" })}
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-xl md:text-3xl text-secondary uppercase tracking-tight">
                {features[2].title}
              </h3>
              <p className="text-muted-foreground font-normal text-sm md:text-base opacity-80 leading-relaxed">
                {features[2].desc}
              </p>
            </div>
          </motion.div>

          {/* Card 04: Protection Registry */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#FDF7F2] border border-[#F0EBE0] p-8 md:p-12 flex flex-col sm:flex-row gap-10 items-start sm:items-center shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
              {React.createElement(features[3].icon, { className: "w-10 h-10 text-primary group-hover:text-white transition-colors" })}
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-xl md:text-3xl text-secondary uppercase tracking-tight">
                {features[3].title}
              </h3>
              <p className="text-muted-foreground font-normal text-sm md:text-base opacity-80 leading-relaxed">
                {features[3].desc}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
