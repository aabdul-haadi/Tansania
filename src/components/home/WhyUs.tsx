
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowRight, Users, CheckCircle2, Star, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhyUs() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden font-sans border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Content Column: The Strategic Advantage */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-[0.4em] border border-primary/20">
                  <Star className="w-3 h-3 fill-primary" /> Excellence Registry
                </div>
                <h2 className="font-headline text-3xl md:text-6xl font-normal leading-[0.9] text-secondary uppercase tracking-tighter">
                  Ihr persönlicher <br />
                  <span className="text-primary italic">Afrika-Experte.</span>
                </h2>
                <p className="text-lg md:text-2xl font-medium text-secondary/80 uppercase tracking-tight">Kein Portal. Ein Mensch.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-muted/30 p-6 md:p-8 rounded-[2rem] relative overflow-hidden border border-border/50"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5"><Sparkles className="w-20 h-20" /></div>
                <p className="text-base md:text-lg font-normal leading-relaxed text-secondary/80 italic">
                  „Schließe deine Augen. Stell dir vor, wie die Sonne den Kraterrand des Ngorongoro in pures Gold taucht — und du der einzige Mensch bist, der diesen Moment sieht."
                </p>
              </motion.div>

              <div className="space-y-6 text-muted-foreground font-normal leading-relaxed text-sm md:text-lg uppercase tracking-widest opacity-80 max-w-2xl">
                <p>
                  Wir sind nicht Booking.com für Safari. Wir sind ein Berliner Team, das Tansania aus Jahren vor Ort kennt — mit Guides, die dort aufgewachsen sind, und Lodges, die wir persönlich geprüft haben.
                </p>
              </div>
            </div>

            {/* High-Density Feature Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-4">
              <div className="space-y-3 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-sm">
                    <Users className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline text-lg md:text-xl font-medium text-secondary uppercase tracking-tight leading-tight">Lokale Wurzeln</h4>
                </div>
                <p className="text-[11px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest leading-relaxed pl-16">
                  Unsere Partner in Arusha sind Freunde, denen wir unsere eigene Familie anvertrauen würden.
                </p>
              </div>

              <div className="space-y-3 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline text-lg md:text-xl font-medium text-secondary uppercase tracking-tight leading-tight">Geprüfte Sicherheit</h4>
                </div>
                <p className="text-[11px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest leading-relaxed pl-16">
                  TATO-Mitglied & DRSF-abgesichert. Wir schützen Ihre Reise von Berlin bis in die Serengeti.
                </p>
              </div>

              <div className="space-y-3 group md:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-xl shadow-primary/5">
                    <Compass className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-headline text-lg md:text-xl font-medium text-secondary uppercase tracking-tight leading-tight">100% Privat & Exklusiv</h4>
                </div>
                <p className="text-[11px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest leading-relaxed pl-16 max-w-xl">
                  Kein Gruppenbus. Kein Kompromiss. Ihr Jeep, Ihr Guide, Ihr Tempo. Das ist der Unterschied zwischen einer Reise und einer Expedition.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/about" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-all group">
                UNSERE GESCHICHTE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Visual Column: Cinematic Depth */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-border/50"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Ngorongoro Crater Explorer" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="safari guide"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[2rem] shadow-2xl"
                >
                  <p className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mb-3">SDL Protocol Status</p>
                  <h4 className="text-xl md:text-2xl font-headline font-normal text-white uppercase leading-none mb-4">Quality Assured</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white/20 bg-muted overflow-hidden">
                          <img src={`https://picsum.photos/seed/guide-${i}/50/50`} alt="Guide" />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Local Experts Ready</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
