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
  },
  {
    id: "02",
    title: "100% Private Expeditionen",
    desc: "Kein geteilter Bus, keine Kompromisse. Ihr eigener Jeep und Ihr privater Guide garantieren ein exklusives Abenteuer in Ihrem eigenen Tempo.",
    icon: Compass,
  },
  {
    id: "03",
    title: "Echte lokale Wurzeln",
    desc: "Unsere Partner in Arusha sind Freunde, denen wir unsere eigene Familie anvertrauen würden. Authentizität ist bei uns kein Marketing – es ist unsere Basis.",
    icon: Users,
  },
  {
    id: "04",
    title: "Geprüfte Sicherheit",
    desc: "TATO-Mitglied & DRSF-abgesichert. Wir übernehmen die volle Verantwortung für Ihre Reise – von der Planung in Berlin bis zur Umsetzung vor Ort.",
    icon: ShieldCheck,
  }
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Manifest */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 relative z-10 bg-muted">
                <Image 
                  src="/assets/images/home/why-travel-01.png" 
                  alt="Tansania Expertise" 
                  fill 
                  className="object-cover"
                  data-ai-hint="safari guide"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Registry Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-10 z-20 bg-secondary p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-[240px] md:max-w-[300px] border border-white/10"
              >
                <div className="space-y-4">
                  <p className="text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Est. 2014</p>
                  <h4 className="text-white font-headline text-2xl md:text-4xl font-normal leading-tight tracking-tighter">
                    Ein Jahrzehnt <br />
                    <span className="text-primary font-bold">Expertise</span>
                  </h4>
                  <div className="h-px w-12 bg-white/20" />
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-relaxed">
                    Berlin Registry Office • SDL Operations Active
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Manifest */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16 order-1 lg:order-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block">Unsere DNA</span>
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary leading-[0.9] tracking-tighter">
                  Was uns von anderen <br />
                  <span className="text-primary font-bold">unterscheidet</span>
                </h2>
              </motion.div>
              <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl opacity-80 tracking-normal">
                Wir planen keine Reisen von der Stange. Wir gestalten individuelle Expeditionen für Menschen, die das Echte suchen – mit maximaler Sicherheit und persönlicher Note.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-5 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary shadow-sm">
                      {React.createElement(feature.icon, { 
                        className: "w-6 h-6 text-primary group-hover:text-white transition-colors" 
                      })}
                    </div>
                    <span className="font-headline text-4xl font-bold text-muted/10 select-none group-hover:text-primary/10 transition-colors">
                      {feature.id}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
