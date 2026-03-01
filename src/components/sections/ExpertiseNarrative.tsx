
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Heart, Wind, Palmtree, Mountain } from 'lucide-react';

export function ExpertiseNarrative() {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Personal Adventure</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight mb-3">
                Start Your Personal <br />
                <span className="text-primary">African Odyssey</span>
              </h2>
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
            </div>

            <div className="text-muted-foreground font-light leading-relaxed text-xs md:text-sm space-y-3">
              <p>
                A Tanzanian holiday is a promise to all the senses: the fragrant scent of wild sage, the distant roar of a lion, and the gentle lapping of the Indian Ocean.
              </p>
              <p>
                At <strong>Tanzania Travel Adventures</strong>, we combine 10 years of local expertise with genuine passion to transform your dreams into the perfect Tanzanian safari.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { icon: Leaf, label: "Sustainable" },
                { icon: ShieldCheck, label: "Expert Guides" },
                { icon: Sparkles, label: "Private" },
                { icon: Heart, label: "Bespoke" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-secondary">{item.label}</span>
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
            <div className="aspect-[16/10] lg:aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Journey" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-secondary text-white p-4 md:p-6 rounded-[1.25rem] shadow-xl hidden md:block max-w-[200px]"
            >
              <p className="text-[10px] font-light leading-relaxed">
                "Close your eyes and imagine the sun bathing the crater rim in gold."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-3 h-px bg-primary" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-primary">Tanzania Experts</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-muted">
          {[
            { icon: Wind, title: "Great Migration", text: "Witness nature's greatest spectacle in the Serengeti." },
            { icon: Palmtree, title: "Zanzibar Escapes", text: "Contrast rugged safari with tranquil ocean rhythms." },
            { icon: Mountain, title: "Kilimanjaro", text: "Climb the Roof of Africa via legendary routes." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-3.5 group">
              <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-xs uppercase tracking-wider">{feature.title}</h3>
                <p className="text-[10px] text-muted-foreground font-light leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
