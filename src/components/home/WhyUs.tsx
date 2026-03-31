
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Home, Star, ShieldCheck, Users } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: "Persönliche Beratung",
    desc: "Wir nehmen uns Zeit für Sie und verstehen Ihre individuellen Wünsche und Träume."
  },
  {
    icon: Compass,
    title: "Maßgeschneiderte Planung",
    desc: "Jede Reise wird individuell auf Ihre Bedürfnisse, Interessen und Ihr Budget zugeschnitten."
  },
  {
    icon: Home,
    title: "Handverlesene Unterkünfte",
    desc: "Wir wählen nur Lodges und Camps aus, die wir persönlich kennen und empfehlen können."
  },
  {
    icon: Star,
    title: "Langjährige Expertise",
    desc: "Über 15 Jahre Erfahrung und tiefe Kenntnis Tansanias garantieren unvergessliche Reisen."
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässigkeit & Sicherheit",
    desc: "Professionelle Organisation, verlässliche Partner vor Ort und 24/7 Betreuung während Ihrer Reise."
  },
  {
    icon: Users,
    title: "Exklusivität",
    desc: "Keine Massentourismus-Routen – wir kreieren einzigartige, private Reiseerlebnisse."
  }
];

export function WhyUs() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tighter"
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
            Was unsere Reiseplanung auszeichnet
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f8f5f0] flex items-center justify-center shrink-0 shadow-sm border border-[#ede7e0] transition-all duration-500 hover:scale-105 group">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#c5a880] group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-base md:text-xl font-medium text-secondary uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-normal text-[10px] md:text-[11px] uppercase tracking-widest leading-relaxed max-w-[260px] lg:max-w-none">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
