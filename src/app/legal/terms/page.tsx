
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  ShieldCheck, 
  HelpCircle, 
  Info,
  Clock,
  ArrowRight,
  BookOpen,
  Scale
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function AGBPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* Compact Dark Hero Section */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Vertragsgrundlagen
            </span>
            <h1 className="text-white uppercase tracking-tighter leading-none">
              Allgemeine <br /><span className="text-primary">Geschäftsbedingungen</span>
            </h1>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Stand: Dez 2022</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Rechtswirksam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        <Card className="bg-white rounded-[3rem] border-none shadow-sm mb-16 overflow-hidden border border-border/40">
          <CardContent className="p-8 md:p-16 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-secondary uppercase tracking-tight leading-none">Sehr geehrter Kunde</h2>
                <p className="text-muted-foreground font-bold leading-relaxed text-sm md:text-lg uppercase tracking-widest opacity-80">
                  Ab dem 01.07.2018 müssen wir Sie vor Abschluss eines Pauschalreisevertrages sowohl über Einzelheiten zu Ihrer Pauschalreise, die erheblich sind, als auch über Ihre Rechte nach der EU-Richtlinie 2015/2302 unterrichten.
                </p>
              </div>
            </div>
            <div className="text-muted-foreground font-bold leading-relaxed space-y-6 border-t border-border/40 pt-8 text-[10px] md:text-xs uppercase tracking-widest opacity-60">
              <p>
                Die nachfolgenden Bestimmungen werden, soweit wirksam vereinbart, Inhalt des zwischen Ihnen und uns der Tansania Reiseabenteuer SDL GmbH als verantwortlichem Reiseveranstalter zu Stande kommenden Pauschalreisevertrages.
              </p>
              <div className="p-6 bg-[#FDF7F2] rounded-2xl border border-[#F0EBE0] flex gap-4 items-start">
                <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-relaxed">
                  Wir empfehlen jedem Reisenden unbedingt den Abschluss einer Reiserücktrittskosten-, Reiseabbruch- sowie einer Reisekrankenversicherung mit Übernahme der Rücktransportkosten eines Krankentransportes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <main className="space-y-24">
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shadow-lg shrink-0">1</div>
              <h2 className="text-secondary uppercase tracking-tight leading-none">Anmeldung und Bestätigung</h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-widest leading-relaxed opacity-80">
              <p>
                Mit Ihrer Anmeldung bieten Sie TANSANIA REISEABENTEUER den Abschluss des Pauschalreisevertrages verbindlich an. Die Anmeldung ist über die Website, telefonisch oder schriftlich per E-Mail möglich. Der Vertrag kommt mit der Annahme durch TANSANIA REISEABENTEUER zustande, die durch Übersendung einer schriftlichen Reisebestätigung erfolgt.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shadow-lg shrink-0">2</div>
              <h2 className="text-secondary uppercase tracking-tight leading-none">Bezahlung & Sicherungsschein</h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-widest leading-relaxed opacity-80">
              <p>
                Nach Erhalt der Reisebestätigung ist eine Anzahlung in Höhe von <span className="text-secondary font-black">35% des Reisepreises</span> sofort fällig. Die Restzahlung wird sechs Wochen vor Reiseantritt ohne weitere Aufforderung fällig.
              </p>
              <div className="bg-secondary text-white p-8 md:p-12 rounded-[2.5rem] space-y-6 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <h4 className="text-white uppercase leading-none tracking-tight flex items-center gap-3 relative z-10">
                  <ShieldCheck className="w-6 h-6 text-primary" /> Insolvenzabsicherung
                </h4>
                <p className="text-white/60 text-[9px] md:text-[11px] font-bold uppercase tracking-widest leading-relaxed relative z-10">
                  TANSANIA REISEABENTEUER hat eine Insolvenzversicherung bei der R+V Allgemeine Versicherung AG abgeschlossen. Mit der Reisebestätigung erhalten Sie den gesetzlich vorgeschriebenen Sicherungsschein.
                </p>
              </div>
            </div>
          </section>
        </main>

        <section className="pt-16 mt-24 border-t border-border/40 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-secondary text-white shadow-xl mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-secondary uppercase tracking-tight leading-none">Tansania Reiseabenteuer SDL GmbH</h3>
          <p className="text-muted-foreground text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-md mx-auto opacity-60">
            Amtsgericht Oranienburg, HRB NR. 12250 NP<br />
            Geschäftsführer: Samson Kyashama<br />
            www.tansania-reiseabenteuer.de
          </p>
        </section>
      </div>
    </div>
  );
}
