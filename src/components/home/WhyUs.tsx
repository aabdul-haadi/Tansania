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
          {/* Main Visual Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl bg-muted h-full min-h-[400px]"
          >
            <Image 
              src={features[0].bg} 
              alt={features[0].title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint={features[0].hint || "safari guide"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-xl mb-4">
                  {React.createElement(features[0].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="font-headline text-2xl md:text-4xl text-white uppercase tracking-tighter">
                  {features[0].title}
                </h3>
                <p className="text-white/80 font-normal text-sm md:text-lg max-w-lg leading-relaxed">
                  {features[0].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(
              "md:col-span-4 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all duration-500 hover:shadow-2xl",
              features[1].bg
            )}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              {React.createElement(features[1].icon, { className: "w-32 h-32 rotate-12 text-white" })}
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                {React.createElement(features[1].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-white uppercase tracking-tighter leading-tight">
                {features[1].title}
              </h3>
              <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed">
                {features[1].desc}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Signature Series</span>
            </div>
          </motion.div>

          {/* Bottom Row Tertiary Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 rounded-[2rem] md:rounded-[3rem] bg-white border border-border/50 p-8 md:p-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
              {React.createElement(features[2].icon, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors" })}
            </div>
            <div className="space-y-3">
              <h3 className="font-headline text-xl md:text-3xl text-secondary uppercase tracking-tight">
                {features[2].title}
              </h3>
              <p className="text-muted-foreground font-normal text-sm md:text-base opacity-80 leading-relaxed">
                {features[2].desc}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 rounded-[2rem] md:rounded-[3rem] bg-[#FDF7F2] border border-[#F0EBE0] p-8 md:p-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
              {React.createElement(features[3].icon, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors" })}
            </div>
            <div className="space-y-3">
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
