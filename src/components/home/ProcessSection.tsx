
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, FileCheck, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Kostenlose Erstberatung",
    desc: "Erzählen Sie uns von Ihren Wünschen – per Telefon, WhatsApp, E-Mail oder über unser Formular."
  },
  {
    id: "02",
    icon: Sparkles,
    title: "Individuelle Reiseplanung",
    desc: "Wir erstellen einen maßgeschneiderten Reisevorschlag mit detailliertem Ablauf und transparenter Kalkulation."
  },
  {
    id: "03",
    icon: FileCheck,
    title: "Feinabstimmung & Buchung",
    desc: "Gemeinsam verfeinern wir Ihre Reise bis alles perfekt passt. Dann sichern wir alle Leistungen für Sie."
  },
  {
    id: "04",
    icon: Plane,
    title: "Ihre Traumreise beginnt",
    desc: "Sie erhalten alle Reiseunterlagen und starten entspannt in Ihr unvergessliches Tansania-Abenteuer."
  }
];

export function ProcessSection() {
  return (
    <section className="pb-12 md:pb-20 pt-8 md:pt-12 bg-[#fdfcfb] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Registry */}
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tighter"
          >
            So einfach geht's
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[10px] md:text-xs uppercase tracking-widest max-w-2xl mx-auto opacity-80"
          >
            In vier Schritten zu Ihrer persönlichen Traumreise
          </motion.p>
        </div>

        {/* Process Protocol Grid */}
        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-px bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-5 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg border border-border/50 flex items-center justify-center transition-all duration-500 hover:scale-105 group">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute top-0 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#c5a880] text-white flex items-center justify-center font-bold text-[9px] md:text-[11px] shadow-md border-2 border-white">
                    {step.id}
                  </div>
                </div>

                <div className="space-y-2 max-w-[240px]">
                  <h3 className="font-headline text-base md:text-xl font-medium text-secondary uppercase tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-normal text-[10px] md:text-[11px] uppercase tracking-widest leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/trip-planner">
            <Button size="default" className="rounded-xl px-8 h-11 md:h-12 bg-secondary text-white hover:bg-primary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] shadow-xl border-none">
              Jetzt starten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
