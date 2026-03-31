
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Home, MessageCircle, Sparkles, Award } from 'lucide-react';

export function TrustStrip() {
  const items = [
    { icon: Heart, label: "Persönliche Beratung" },
    { icon: MapPin, label: "Individuelle Reiseplanung" },
    { icon: Home, label: "Handverlesene Lodges" },
    { icon: MessageCircle, label: "Deutschsprachige Betreuung" },
    { icon: Sparkles, label: "Private Erlebnisse" },
    { icon: Award, label: "Hochwertige Umsetzung" }
  ];

  return (
    <section className="py-8 md:py-12 bg-white border-y border-border/40 relative z-30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#fdf7f2] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 border border-[#f0ebe0]/30 shadow-sm">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#C9A876] stroke-[1.5]" />
              </div>
              <div className="max-w-[120px] md:max-w-none">
                <span className="text-[11px] md:text-[12px] font-normal text-[#3A3634] leading-tight block">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
