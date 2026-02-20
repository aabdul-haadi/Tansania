
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle2, ShieldAlert, Scale, ArrowRight } from 'lucide-react';

export default function DirectivePage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Dark Header for Navbar Contrast */}
      <section className="bg-[#0a0a0a] pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Verbraucherschutz
            </span>
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight">
              Pauschalreise-<br /><span className="text-primary italic">Richtlinie</span>
            </h1>
            <p className="text-white/60 text-lg font-light max-w-2xl mt-6">
              Informationen nach der Richtlinie (EU) 2015/2302.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-border/50 space-y-12">
          
          <div className="flex items-start gap-6 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
            <ClipboardList className="w-10 h-10 text-primary shrink-0" />
            <p className="text-muted-foreground font-light leading-relaxed text-lg italic">
              "Die Kombination von Reiseleistungen, die Ihnen angeboten wird, ist eine Pauschalreise im Sinne der Richtlinie (EU) 2015/2302."
            </p>
          </div>

          <section className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-secondary flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" /> Ihre wichtigsten Rechte
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                "Reisende erhalten alle wesentlichen Informationen über die Pauschalreise vor Abschluss des Vertrags.",
                "Es haftet immer mindestens ein Unternehmer für die ordnungsgemäße Erbringung aller im Vertrag enthaltenen Reiseleistungen.",
                "Die Reisenden erhalten eine Notrufnummer oder Angaben zu einer Kontaktstelle.",
                "Reisende können die Pauschalreise auf eine andere Person übertragen.",
                "Der Preis der Pauschalreise darf nur erhöht werden, wenn bestimmte Kosten steigen."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-primary">
                    <CheckCircle2 className="w-4 h-4 text-primary transition-colors group-hover:text-white" />
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary text-white p-8 md:p-12 rounded-[2.5rem] space-y-6">
            <h3 className="font-headline text-2xl font-bold flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-primary" /> Insolvenzschutz
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Wird der Veranstalter insolvent, werden Zahlungen zurückerstattet. Wenn die Insolvenz nach Beginn der Pauschalreise eintritt und die Beförderung Bestandteil der Pauschalreise ist, wird die Rückbeförderung der Reisenden gewährleistet.
            </p>
            <div className="pt-4 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
              Abgesichert durch R+V Versicherung <ArrowRight className="w-3 h-3" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
