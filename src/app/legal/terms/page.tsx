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
  Scale,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const termsSections = [
  {
    id: "01",
    title: "Anmeldung und Bestätigung",
    content: "Mit Ihrer Anmeldung bieten Sie TANSANIA REISEABENTEUER den Abschluss des Pauschalreisevertrages verbindlich an. Die Anmeldung kann schriftlich, mündlich, telefonisch oder über elektronische Medien (E-Mail, Internet) erfolgen. Der Vertrag kommt mit der Annahme durch TANSANIA REISEABENTEUER zustande, die durch Übersendung der Reisebestätigung erfolgt."
  },
  {
    id: "02",
    title: "Bezahlung & Sicherungsschein",
    content: "Nach Erhalt der Reisebestätigung und des Sicherungsscheines ist eine Anzahlung in Höhe von 35% des Reisepreises fällig. Die Restzahlung wird sechs Wochen vor Reiseantritt fällig, sofern der Sicherungsschein übergeben ist und die Reise nicht mehr aus den in Ziffer 7 genannten Gründen abgesagt werden kann."
  },
  {
    id: "03",
    title: "Leistungen und Preise",
    content: "Welche Leistungen vertraglich vereinbart sind, ergibt sich aus den Leistungsbeschreibungen in unserem Katalog bzw. auf unserer Website und aus den hierauf Bezug nehmenden Angaben in der Reisebestätigung. Die in dem Katalog / auf der Website enthaltenen Angaben sind für TANSANIA REISEABENTEUER bindend."
  },
  {
    id: "04",
    title: "Rücktritt durch den Kunden",
    content: "Sie können jederzeit vor Reisebeginn von der Reise zurücktreten. Maßgeblich ist der Zugang der Rücktrittserklärung bei TANSANIA REISEABENTEUER. Wir empfehlen Ihnen, den Rücktritt schriftlich zu erklären. Treten Sie vom Reisevertrag zurück, können wir eine angemessene Entschädigung für die getroffenen Reisevorkehrungen und unsere Aufwendungen verlangen."
  }
];

export default function AGBPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: Registry Header */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Vertragsgrundlagen
            </span>
            <h1 className="text-white tracking-tighter leading-none">
              AGB
            </h1>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Stand: Dez 2022</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Geprüft</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Policy Registry: Natural Architecture */}
      <div className="container mx-auto px-4 max-w-5xl py-12 md:py-16">
        <Card className="bg-white rounded-[2rem] md:rounded-[3rem] border-none shadow-sm mb-12 overflow-hidden border border-border/40">
          <CardContent className="p-8 md:p-16 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-secondary tracking-tight leading-none text-2xl md:text-4xl">Wichtige Informationen</h2>
                <p className="text-muted-foreground font-normal text-[14px] leading-[20px] uppercase tracking-widest opacity-80">
                  Vor Abschluss Ihres Pauschalreisevertrages unterrichten wir Sie hiermit über die wesentlichen Details Ihrer Reise sowie Ihre Rechte nach der EU-Richtlinie 2015/2302. Die folgenden Bestimmungen werden Inhalt Ihres Vertrages mit der Tansania Reiseabenteuer SDL GmbH.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-[#FDF7F2] rounded-[1.5rem] border border-[#F0EBE0] flex gap-4 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-relaxed">
                Wir empfehlen dringend den Abschluss einer Reiserücktrittskosten- und Reisekrankenversicherung. Wir beraten Sie hierzu gerne persönlich.
              </p>
            </div>
          </CardContent>
        </Card>

        <main className="space-y-12 pb-16">
          {termsSections.map((section) => (
            <section key={section.id} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shadow-lg shrink-0">
                  {section.id}
                </div>
                <h3 className="text-secondary uppercase tracking-tight leading-none text-xl md:text-2xl">{section.title}</h3>
              </div>
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-border/40 p-8 md:p-10 shadow-sm">
                <p className="text-muted-foreground font-normal text-[14px] leading-[22px] uppercase tracking-widest opacity-80 text-justify">
                  {section.content}
                </p>
              </div>
            </section>
          ))}

          <section className="pt-8">
            <Card className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] space-y-8 relative overflow-hidden border border-border/40 shadow-sm group">
              <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <ShieldCheck className="w-64 h-64 text-secondary" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-secondary tracking-tight text-2xl md:text-4xl">Insolvenzabsicherung</h3>
                </div>
                <p className="text-muted-foreground text-[11px] md:text-sm font-bold uppercase tracking-widest leading-relaxed max-w-3xl">
                  Tansania Reiseabenteuer SDL GmbH ist durch den Deutschen Reisesicherungsfonds (DRSF) abgesichert. Gemeinsam mit Ihrer Reisebestätigung erhalten Sie den gesetzlich vorgeschriebenen Sicherungsschein, der Ihre Zahlungen zu 100% garantiert.
                </p>
                <div className="pt-6 border-t border-border/40 flex flex-col md:flex-row gap-8">
                  <div className="space-y-1">
                    <p className="text-[8px] font-bold text-primary uppercase tracking-[0.3em]">Registry Status</p>
                    <p className="text-[10px] font-black uppercase text-secondary">Aktiv & Zertifiziert 2026</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] font-bold text-primary uppercase tracking-[0.3em]">Versicherungstyp</p>
                    <p className="text-[10px] font-black uppercase text-secondary">Pauschalreiseschutz § 651r BGB</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </main>

        <section className="pt-16 mt-20 border-t border-border/40 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white border border-border shadow-xl mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-secondary uppercase tracking-tight leading-none text-xl md:text-2xl">Tansania Reiseabenteuer SDL GmbH</h3>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-md mx-auto opacity-60">
              Amtsgericht Oranienburg, HRB NR. 12250 NP<br />
              Geschäftsführer: Samson Kyashama<br />
              www.tansania-reiseabenteuer.de
            </p>
          </div>
          <div className="pt-6">
            <Link href="/contact">
              <Button variant="outline" className="rounded-xl h-12 px-8 font-bold uppercase text-[10px] tracking-widest border-muted">
                Kontakt für Rückfragen
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
