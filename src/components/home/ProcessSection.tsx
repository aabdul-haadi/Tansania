"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, ClipboardCheck, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    id: "01",
    title: "Kostenlose Erstberatung",
    desc: "Erzählen Sie uns von Ihren Wünschen – per Telefon, WhatsApp, E-Mail oder über unser Formular.",
    icon: MessageSquare
  },
  {
    id: "02",
    title: "Individuelle Reiseplanung",
    desc: "Wir erstellen einen maßgeschneiderten Reisevorschlag mit detailliertem Ablauf und transparenter Kalkulation.",
    icon: Sparkles
  },
  {
    id: "03",
    title: "Feinabstimmung & Buchung",
    desc: "Gemeinsam verfeinern wir Ihre Reise bis alles perfekt passt. Dann sichern wir alle Leistungen für Sie.",
    icon: ClipboardCheck
  },
  {
    id: "04",
    title: "Ihre Traumreise beginnt",
    desc: "Sie erhalten alle Reiseunterlagen und starten entspannt in Ihr unvergessliches Tansania-Abenteuer.",
    icon: Plane
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-32 bg-[#FDFCFB] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Protocol */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary"
          >
            So einfach geht's
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-widest max-w-xl mx-auto opacity-80"
          >
            In vier Schritten zu Ihrer persönlichen Traumreise
          </motion.p>
        </div>

        {/* Horizontal Flow Registry */}
        <div className="relative">
          {/* Decorative Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-[#F0EBE0] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Visual Anchor Circle */}
                <div className="relative mb-10">
                  <div className="w-[120px] h-[120px] rounded-full bg-white shadow-xl flex items-center justify-center border border-border/40 relative z-10 transition-transform duration-500 group-hover:scale-105">
                    <step.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" strokeWidth={1.25} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-[#C9A876] text-white flex items-center justify-center font-bold text-xs shadow-lg z-20 border-4 border-[#FDFCFB]">
                    {step.id}
                  </div>
                </div>

                {/* Narrative Information */}
                <div className="space-y-4">
                  <h3 className="font-headline text-[24px] leading-[32px] font-medium text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide max-w-[240px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Execution Trigger */}
        <div className="mt-20 flex justify-center">
          <Link href="/trip-planner">
            <Button 
              size="lg" 
              className="rounded-lg px-12 h-14 bg-[#3A3634] text-white hover:bg-primary transition-all duration-500 font-bold text-[11px] tracking-widest border-none shadow-xl"
            >
              Jetzt starten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}