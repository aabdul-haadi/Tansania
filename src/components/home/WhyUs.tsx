"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Users, Compass, Star } from 'lucide-react';

const features = [
  {
    title: "Ihr persönlicher Afrika-Experte",
    desc: "Wir sind kein anonymes Buchungsportal. Wir sind ein engagiertes Team in Berlin, das Tansania aus jahrelanger Erfahrung kennt und liebt.",
    icon: Star,
  },
  {
    title: "100% Private Expeditionen",
    desc: "Kein geteilter Bus, keine Kompromisse. Ihr eigener Jeep und Ihr privater Guide garantieren ein exklusives Abenteuer in Ihrem eigenen Tempo.",
    icon: Compass,
  },
  {
    title: "Echte lokale Wurzeln",
    desc: "Unsere Partner in Arusha sind Freunde, denen wir unsere eigene Familie anvertrauen würden. Authentizität ist bei uns kein Marketing – es ist unsere Basis.",
    icon: Users,
  },
  {
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
          
          {/* Left Column: Cinematic Visual Anchor */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-border/50 relative z-10 bg-muted">
                <Image 
                  src="/assets/images/home/why-travel-01.png" 
                  alt="Tansania Expertise" 
                  fill 
                  unoptimized
                  className="object-cover"
                  data-ai-hint="safari guide"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Manifest */}
          <div className="lg:col-span-7 space-y-10 md:space-y-16 order-1 lg:order-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary leading-[0.9] tracking-tighter uppercase">
                  Was uns von anderen <br />
                  <span className="text-primary font-bold">unterscheidet</span>
                </h2>
              </motion.div>
              <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl opacity-80 tracking-wide">
                Wir planen keine Reisen von der Stange. Wir gestalten individuelle Expeditionen für Menschen, die das Echte suchen – mit maximaler Sicherheit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-14">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary shadow-sm">
                      {React.createElement(feature.icon, { 
                        className: "w-5 h-5 text-primary group-hover:text-white transition-colors" 
                      })}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary tracking-tight group-hover:text-primary transition-colors uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide opacity-70">
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