
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Compass, Zap, ArrowRight } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    { 
      icon: Mail, 
      title: "Anfrage Senden", 
      desc: "Teilen Sie uns Ihre Wünsche mit. Unsere Experten in Berlin analysieren Ihre Vorstellungen sofort." 
    },
    { 
      icon: Compass, 
      title: "Design & Strategie", 
      desc: "Wir entwerfen eine maßgeschneiderte Route, die Logistik, Klima und Wildlife-Events optimiert." 
    },
    { 
      icon: Zap, 
      title: "Ihre Expedition", 
      desc: "Starten Sie Ihre Reise mit privatem Guide und exklusiven Lodges – 100% sicher und betreut." 
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Registry Protocol</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">
            SO FUNKTIONIERT <span className="text-primary">ES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center border border-border group hover:bg-primary transition-all duration-500">
                <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-3">
                <h4 className="font-headline text-xl font-bold text-secondary uppercase tracking-tight">{step.title}</h4>
                <p className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
