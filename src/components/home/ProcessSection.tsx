
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    id: "01",
    title: "Kostenlose Erstberatung",
    desc: "Erzählen Sie uns von Ihren Wünschen – per Telefon, WhatsApp, E-Mail oder über unser Formular."
  },
  {
    id: "02",
    title: "Individuelle Reiseplanung",
    desc: "Wir erstellen einen maßgeschneiderten Reisevorschlag mit detailliertem Ablauf und transparenter Kalkulation."
  },
  {
    id: "03",
    title: "Feinabstimmung & Buchung",
    desc: "Gemeinsam verfeinern wir Ihre Reise bis alles perfekt passt. Dann sichern wir alle Leistungen für Sie."
  },
  {
    id: "04",
    title: "Ihre Traumreise beginnt",
    desc: "Sie erhalten alle Reiseunterlagen und starten entspannt in Ihr unvergessliches Tansania-Abenteuer."
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-32 bg-[#FDF7F2] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Registry - Matches Screen Shot Layout */}
        <div className="text-left mb-12 md:mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground"
          >
            REISE-PLANUNG
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-7xl font-normal text-secondary uppercase tracking-tighter leading-none"
          >
            So einfach <br className="hidden md:block" /> geht&apos;s
          </motion.h2>
        </div>

        {/* Process Protocol List - EXACT CLONE OF SCREENSHOT UI */}
        <div className="space-y-0">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-t border-border/60 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-colors duration-500 hover:bg-white/40 last:border-b"
            >
              {/* Number Registry */}
              <div className="flex-shrink-0">
                <span className="font-headline text-4xl md:text-7xl font-normal text-muted-foreground/30 group-hover:text-primary/20 transition-colors">
                  {step.id}
                </span>
              </div>

              {/* Title & Description Protocol */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center w-full">
                <div className="md:col-span-4">
                  <h3 className="font-headline text-2xl md:text-4xl font-medium text-primary uppercase tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-secondary font-normal text-sm md:text-base leading-relaxed uppercase tracking-widest max-w-xl opacity-80">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Action Trigger Protocol */}
              <div className="flex-shrink-0 hidden md:flex">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Execution Trigger */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link href="/trip-planner">
            <Button size="lg" className="rounded-xl px-12 h-14 md:h-16 bg-secondary text-white hover:bg-primary font-bold text-[11px] md:text-[13px] uppercase tracking-[0.3em] shadow-2xl border-none group">
              Jetzt Beratung starten <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
