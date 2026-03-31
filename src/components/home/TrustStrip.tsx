"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Globe, Compass } from 'lucide-react';

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "HanseMerkur Schutz", sub: "Finanziell Abgesichert" },
    { icon: Star, label: "100% Private Safaris", sub: "Keine Gruppenzwänge" },
    { icon: Globe, label: "8 Country Hubs", sub: "Lokale Präsenz" },
    { icon: Compass, label: "24/7 Support", sub: "Berlin & Tansania" }
  ];

  return (
    <section className="py-6 md:py-10 bg-white border-y border-border/50 relative z-30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{item.label}</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{item.sub}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
