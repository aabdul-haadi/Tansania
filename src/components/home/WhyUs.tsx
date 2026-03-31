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
    <section className="pt-8 md:pt-12 pb-16 md:pb-32 bg-white font-bold">
      <div className="container mx-auto px-4 max-get-7xl">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-black text-secondary uppercase tracking-tighter"
          >
            Warum mit uns reisen?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-2xl mx-auto opacity-60"
          >
            Was unsere Reiseplanung auszeichnet
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f8f5f0] flex items-center justify-center shrink-0 shadow-sm border border-[#ede7e0] transition-all duration-500 hover:scale-105 group">
                <item.icon className="w-7 h-7 md:w-9 md:h-9 text-[#c5a880] group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-3">
                <h3 className="font-headline text-xl md:text-2xl font-black text-secondary uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-black text-[10px] md:text-xs lg:text-sm uppercase tracking-widest leading-relaxed opacity-80 max-w-[280px] lg:max-w-none">
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
