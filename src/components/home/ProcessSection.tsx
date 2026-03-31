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
    <section className="pb-16 md:pb-32 pt-8 md:pt-12 bg-[#fdfcfb] overflow-hidden font-bold">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Registry */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-black text-secondary uppercase tracking-tighter"
          >
            So einfach geht's
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-2xl mx-auto opacity-60"
          >
            In vier Schritten zu Ihrer persönlichen Traumreise
          </motion.p>
        </div>

        {/* Process Protocol Grid */}
        <div className="relative mb-20">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Hub with Number Badge */}
                <div className="relative mb-8 md:mb-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-xl border border-border/50 flex items-center justify-center transition-all duration-500 hover:scale-105 group">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute top-0 -right-2 md:-right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#c5a880] text-white flex items-center justify-center font-black text-[10px] md:text-xs shadow-lg border-2 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Content Matrix */}
                <div className="space-y-4 max-w-[260px]">
                  <h3 className="font-headline text-lg md:text-xl font-black text-secondary uppercase tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-widest leading-relaxed opacity-80">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Trigger */}
        <div className="flex justify-center">
          <Link href="/trip-planner">
            <Button size="xl" className="rounded-xl px-12 h-14 md:h-16 bg-[#3d3935] text-white hover:bg-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl border-none">
              Jetzt starten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
