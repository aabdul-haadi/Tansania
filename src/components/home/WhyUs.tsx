
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Home, Star, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const reasons = [
  {
    icon: Heart,
    title: "Persönliche Beratung",
    desc: "Wir nehmen uns Zeit für Sie und verstehen Ihre individuellen Wünsche und Träume für Ihr Abenteuer."
  },
  {
    icon: Compass,
    title: "Maßgeschneiderte Planung",
    desc: "Jede Route wird individuell auf Ihre Bedürfnisse, Interessen und Ihr persönliches Budget zugeschnitten."
  },
  {
    icon: Home,
    title: "Handverlesene Unterkünfte",
    desc: "Wir wählen nur Lodges und Camps aus, die wir persönlich kennen und als exzellent bewertet haben."
  },
  {
    icon: Star,
    title: "Langjährige Expertise",
    desc: "Über 15 Jahre Erfahrung und tiefe Kenntnis Tansanias garantieren Ihnen eine unvergessliche Reise."
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässigkeit & Sicherheit",
    desc: "Professionelle Organisation, verlässliche Partner vor Ort und 24/7 Betreuung während Ihrer Expedition."
  },
  {
    icon: Users,
    title: "Absolute Exklusivität",
    desc: "Keine Massentourismus-Routen – wir kreieren einzigartige, private Reiseerlebnisse nur für Sie."
  }
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header Registry */}
        <div className="text-center mb-12 md:mb-20 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-[0.4em] border border-primary/20 mb-4"
          >
            <Star className="w-3 h-3 fill-primary" /> Warum mit uns reisen
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter"
          >
            Ihre Experten <br className="md:hidden" /> für Tansania
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-medium text-xs md:text-sm uppercase tracking-widest max-w-2xl mx-auto opacity-80"
          >
            Was unsere Reiseplanung von Standardportalen unterscheidet
          </motion.p>
        </div>

        {/* Creative Feature Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-full"
            >
              <div className="h-full bg-[#fdfcfb] p-8 md:p-10 rounded-[2rem] border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:bg-white hover:border-primary/20 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-all duration-500" />
                
                <div className="space-y-6">
                  {/* Icon Hub */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-3 group-hover:scale-110">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-headline text-xl md:text-2xl font-medium text-secondary uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium text-xs md:text-sm leading-relaxed uppercase tracking-widest opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-auto flex items-center gap-2 text-[9px] font-black text-secondary/40 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  SDL Excellence <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
