"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Heart, Wind, Palmtree, Mountain } from 'lucide-react';

export function ExpertiseNarrative() {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block text-prestige">Persönliches Abenteuer</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-[0.9] mb-3 text-foreground uppercase tracking-tighter">
                Ihre maßgeschneiderte <br /><span className="text-primary">Afrikanische Odyssee</span>
              </h2>
            </div>
            <div className="text-muted-foreground font-bold leading-relaxed text-xs md:text-sm space-y-3 uppercase tracking-tight">
              <p>Ein Urlaub in Tansania ist ein Versprechen an alle Sinne: der würzige Duft von wildem Salbei, das ferne Brüllen eines Löwen und das sanfte Rauschen des Indischen Ozeans.</p>
              <p>Bei <strong className="text-secondary">Tansania Reiseabenteuer</strong> verbinden wir 10 Jahre lokale Expertise mit Leidenschaft.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[{ icon: Leaf, label: "Nachhaltig" }, { icon: ShieldCheck, label: "Experten-Guides" }, { icon: Sparkles, label: "Exklusiv" }, { icon: Heart, label: "Maßgeschneidert" }].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><item.icon className="w-3 h-3 text-primary" /></div><span className="text-[9px] font-bold uppercase tracking-wider text-secondary">{item.label}</span></div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[16/10] lg:aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Safari" className="w-full h-full object-cover" /></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}