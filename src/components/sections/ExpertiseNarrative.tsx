"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Heart } from 'lucide-react';

export function ExpertiseNarrative() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-2 md:space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] block">Persönliches Abenteuer</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-foreground uppercase tracking-tight">
                Ihre maßgeschneiderte <br />
                <span className="text-primary">Afrikanische Odyssee</span>
              </h2>
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
            </div>

            <div className="text-muted-foreground font-bold leading-relaxed text-xs md:text-sm space-y-4 uppercase tracking-widest opacity-80">
              <p>
                Ein Urlaub in Tansania ist ein Versprechen an alle Sinne: der würzige Duft von wildem Salbei, das ferne Brüllen eines Löwen und das sanfte Rauschen des Indischen Ozeans.
              </p>
              <p>
                Bei <strong className="font-bold text-secondary">Tansania Reiseabenteuer</strong> verbinden wir 10 Jahre lokale Expertise mit Leidenschaft für den Kontinent.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: Leaf, label: "Nachhaltig" },
                { icon: ShieldCheck, label: "Experten-Guides" },
                { icon: Sparkles, label: "Exklusiv" },
                { icon: Heart, label: "Maßgeschneidert" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-secondary">{item.label}</span>
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
            <div className="aspect-[4/3] md:aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Erlebnis" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 md:p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[220px] border border-white/5"
            >
              <p className="text-[9px] md:text-[10px] font-bold leading-relaxed mb-4 uppercase tracking-widest opacity-90">
                "Schließe deine Augen und stelle dir vor, wie die Sonne den Kraterrand in Gold taucht."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-primary">Tansania Experten</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}