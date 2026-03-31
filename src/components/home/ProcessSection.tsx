"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Compass, Zap } from 'lucide-react';

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
    <section className="py-10 md:py-16 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Registry Protocol
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-2xl md:text-5xl font-bold text-secondary uppercase tracking-tighter"
          >
            SO FUNKTIONIERT <span className="text-primary">ES</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative"
        >
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-2xl flex items-center justify-center border border-border group hover:bg-primary transition-all duration-500">
                <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-2">
                <h4 className="font-headline text-lg md:text-xl font-bold text-secondary uppercase tracking-tight">{step.title}</h4>
                <p className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
