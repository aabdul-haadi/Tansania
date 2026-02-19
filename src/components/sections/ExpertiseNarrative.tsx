"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Heart } from 'lucide-react';

export function ExpertiseNarrative() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Personal Adventure</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
                Start Your Personal <br />
                <span className="text-primary italic">African Odyssey</span>
              </h2>
              <div className="w-20 h-1 bg-primary/20 rounded-full" />
            </div>

            <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
              <p>
                A Tanzanian holiday is a promise to all the senses: the fragrant scent of wild sage in the savanna, the distant roar of a lion under a dazzling starry sky, the gentle lapping of the Indian Ocean against powder-soft beaches.
              </p>
              <p>
                At <strong>Tanzania Travel Adventures</strong>, we combine 10 years of local expertise with genuine passion to answer just one question: <span className="text-foreground font-medium italic">How do we transform your dreams into the perfect Tanzanian safari?</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { icon: Leaf, label: "Sustainable Travel" },
                { icon: ShieldCheck, label: "German-Speaking Guides" },
                { icon: Sparkles, label: "Private Vehicles" },
                { icon: Heart, label: "Bespoke Lodging" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">{item.label}</span>
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
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Journey" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Highlight */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-secondary text-white p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[280px]"
            >
              <p className="text-xs font-light leading-relaxed italic">
                "Close your eyes and imagine the sun bathing the crater rim in gold. Your personal, no-obligation offer awaits."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Tanzania Experts</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "The Great Migration", text: "Deep into the Serengeti where the grass trembles under the weight of nature's greatest spectacle." },
            { title: "Zanzibar Escapes", text: "From eco-bungalows to exclusive luxury holidays on the shores of the Indian Ocean." },
            { title: "Kilimanjaro Summit", text: "Climb the Roof of Africa via the Machame Route or take a relaxed Mount Meru trek." }
          ].map((feature, i) => (
            <div key={i} className="space-y-4 border-l border-muted pl-8 hover:border-primary transition-colors">
              <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
