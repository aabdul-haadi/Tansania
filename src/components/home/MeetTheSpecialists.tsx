"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const specialists = [
  { name: "Anna", role: "Safari Planning", img: "https://picsum.photos/seed/anna/150/150" },
  { name: "Maria", role: "Zanzibar Expert", img: "https://picsum.photos/seed/maria/150/150" },
  { name: "Sophie", role: "Adventure Logistics", img: "https://picsum.photos/seed/sophie/150/150" }
];

export function MeetTheSpecialists() {
  return (
    <section className="py-10 md:py-12 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block text-prestige">Human Connection</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight mb-4 text-secondary uppercase tracking-tighter">
                Wir kennen Afrika — <br />
                <span className="text-primary">Wir sind für Sie da</span>
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm font-bold leading-relaxed max-w-xl uppercase tracking-tight">
                Tansania Reiseabenteuer SDL. Ob Sie von einer exklusiven Safari oder einem entspannten Strandurlaub träumen, unsere Spezialisten in Berlin planen jedes Erlebnis mit viel Liebe zum Detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">E-mail</span>
                </div>
                <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-xs hover:text-primary transition-colors truncate text-secondary">info@tansania-reiseabenteuer.de</a>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-primary">
                  <Phone className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Telefon</span>
                </div>
                <a href="tel:+493022608080" className="font-bold text-xs hover:text-primary transition-colors text-secondary">+49 30 22608080</a>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Öffnungszeiten</span>
                </div>
                <p className="font-bold text-xs text-secondary">Montag – Freitag</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/trip-planner">
                <Button size="lg" className="rounded-xl md:rounded-2xl px-8 h-12 md:h-14 font-bold shadow-xl group text-[10px] uppercase tracking-widest border-none">
                  Angebot anfordern <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur rounded-xl border border-white/20">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <p className="text-[10px] text-muted-foreground leading-snug font-bold uppercase tracking-tight">
                  Persönlich. Kompetent. <br /><strong className="text-secondary">Expertenberatung.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-2.5">
              <div className="px-2 mb-1">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Ihre Reisespezialisten</h4>
              </div>
              {specialists.map((specialist, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl md:rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 bg-muted">
                    <img 
                      src={specialist.img} 
                      alt={specialist.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary mb-0.5 leading-none">Travel Specialist</p>
                    <h4 className="text-base font-headline font-bold leading-none text-secondary uppercase">{specialist.name}</h4>
                    <p className="text-[9px] text-muted-foreground uppercase font-bold mt-1 leading-none">{specialist.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
