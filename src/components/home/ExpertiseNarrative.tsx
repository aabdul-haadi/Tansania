
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowRight, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExpertiseNarrative() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden font-bold border-t border-border/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Content Column: The Narrative Registry */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] block">Warum Tansania Reiseabenteuer</span>
                <h2 className="font-headline text-3xl md:text-6xl font-black leading-[0.9] text-secondary uppercase tracking-tighter">
                  Ihr persönlicher <br />
                  <span className="text-primary">Afrika-Experte.</span>
                </h2>
                <p className="text-lg md:text-2xl font-black text-secondary/80 uppercase tracking-tight">Kein Portal. Ein Mensch.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-muted/30 p-6 md:p-8 rounded-[2rem] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5"><Sparkles className="w-20 h-20" /></div>
                <p className="text-sm md:text-base font-bold leading-relaxed text-secondary uppercase tracking-tight">
                  „Schließe deine Augen. Stell dir vor, wie die Sonne den Kraterrand des Ngorongoro in pures Gold taucht — und du der einzige Mensch bist, der diesen Moment sieht."
                </p>
              </motion.div>

              <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-lg uppercase tracking-widest opacity-80">
                <p>
                  Wir sind nicht Booking.com für Safari. Wir sind ein Berliner Team, das Tansania nicht aus Katalogen kennt, sondern aus Jahren, die wir dort verbracht haben — mit Guides, die dort aufgewachsen sind, in Lodges, die wir selbst besucht haben.
                </p>
                <p>
                  Seit 2014 planen wir Reisen, die das Leben verändern. Nicht weil das ein schöner Satz ist — sondern weil unsere Reisenden uns das immer wieder sagen, wenn sie zurückkommen. Und weil die meisten von ihnen wiederkommen.
                </p>
              </div>
            </div>

            {/* Feature Matrix: The Business Model */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight leading-tight">Guides mit echten Wurzeln vor Ort</h4>
                </div>
                <p className="text-[9px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Unsere lokalen Partner in Arusha sind keine Angestellten — es sind Freunde, die wir seit Jahren kennen und denen wir unsere eigene Familie anvertrauen würden.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight leading-tight">TATO-Mitglied & nachhaltig zertifiziert</h4>
                </div>
                <p className="text-[9px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Jede Buchung bei uns stärkt die lokale Wirtschaft und schützt die Ökosysteme, die Sie besuchen. Das ist kein Marketing — es ist unser Geschäftsmodell.
                </p>
              </div>

              <div className="space-y-3 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight leading-tight">100% privat — Ihr Jeep, Ihr Guide, Ihr Tempo</h4>
                </div>
                <p className="text-[9px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Kein Gruppenbus. Kein Kompromiss. Das ist der Unterschied zwischen einer Reise und einem Erlebnis.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/about" className="inline-flex items-center gap-3 text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-primary hover:text-secondary transition-all group">
                Unser Team & unsere Geschichte <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Visual Column: Atmospheric Depth */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/50"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Ngorongoro Crater Sunrise" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="ngorongoro crater"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl inline-block">
                  <p className="text-[8px] font-black text-white uppercase tracking-[0.4em]">SDL Signature View</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
