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
    <section className="pb-16 md:pb-24 pt-8 md:pt-12 bg-[#fdfcfb] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Registry */}
        <div className="text-center mb-12 md:mb-20 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-[3rem] text-[#3A3634] uppercase tracking-tighter"
          >
            So einfach geht's
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8581] font-normal text-sm md:text-lg uppercase tracking-widest max-w-2xl mx-auto"
          >
            In vier Schritten zu Ihrer persönlichen Traumreise
          </motion.p>
        </div>

        {/* Process Protocol Grid */}
        <div className="relative mb-16">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-px bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 relative z-10">
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
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl border border-border/50 flex items-center justify-center transition-all duration-500 hover:scale-105 group">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute top-0 -right-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#c5a880] text-white flex items-center justify-center font-bold text-[10px] md:text-[12px] shadow-lg border-2 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Content Matrix */}
                <div className="space-y-3 max-w-[240px]">
                  <h3 className="font-headline text-base md:text-lg font-normal text-[#3A3634] uppercase tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#8A8581] font-normal text-xs md:text-sm uppercase tracking-widest leading-relaxed">
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
            <Button size="lg" className="rounded-xl px-10 h-12 md:h-14 bg-[#3d3935] text-white hover:bg-secondary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] shadow-2xl border-none">
              Jetzt starten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
