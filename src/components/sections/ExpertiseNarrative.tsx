"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Heart, Wind, Palmtree, Mountain } from 'lucide-react';

export function ExpertiseNarrative() {
  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] mb-1 block">Persönliches Abenteuer</span>
              <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 text-foreground uppercase tracking-tighter">
                Ihre maßgeschneiderte <br />
                <span className="text-primary">Afrikanische Odyssee</span>
              </h2>
              <div className="w-10 h-0.5 bg-primary/20 rounded-full" />
            </div>

            <div className="text-muted-foreground font-bold leading-relaxed text-[10px] md:text-xs lg:text-sm space-y-2 uppercase tracking-tight">
              <p>
                Ein Urlaub in Tansania ist ein Versprechen an alle Sinne: der würzige Duft von wildem Salbei, das ferne Brüllen eines Löwen.
              </p>
              <p>
                Bei <strong className="font-bold text-secondary">Tansania Reiseabenteuer</strong> verbinden wir 10 Jahre lokale Expertise mit Leidenschaft.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {[
                { icon: Leaf, label: "Nachhaltig" },
                { icon: ShieldCheck, label: "Experten-Guides" },
                { icon: Sparkles, label: "Exklusiv" },
                { icon: Heart, label: "Maßgeschneidert" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-secondary">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[16/10] lg:aspect-square rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Erlebnis" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 bg-primary p-3 md:p-5 rounded-[1rem] shadow-xl hidden md:block max-w-[180px]"
            >
              <p className="text-[8px] font-bold leading-relaxed mb-2 text-white uppercase">
                "Schließe deine Augen und stelle dir vor, wie die Sonne den Kraterrand in pures Gold taucht."
              </p>
              <div className="mt-1 flex items-center gap-2">
                <div className="w-2.5 h-px bg-secondary" />
                <span className="text-[7px] font-black uppercase tracking-widest text-secondary">Tansania Experten</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}