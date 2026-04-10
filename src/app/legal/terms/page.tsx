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
    content: "Nach Erhalt der Reisebestätigung und des Sicherungsscheines ist eine Anzahlung in Höhe von 20% des Reisepreises fällig. Die Restzahlung wird sechs Wochen vor Reiseantritt fällig, sofern der Sicherungsschein übergeben ist und die Reise nicht mehr aus den in Ziffer 7 genannten Gründen abgesagt werden kann."
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
  },
  {
    id: "05",
    title: "Pass-, Visa- und Gesundheitsvorschriften",
    content: "TANSANIA REISEABENTEUER wird den Kunden/Reisenden über allgemeine Pass- und Visumerfordernisse sowie gesundheitspolizeiliche Formalitäten des Bestimmungslandes einschließlich der ungefähren Fristen für die Erlangung von gegebenenfalls notwendigen Visa vor Vertragsabschluss sowie über deren evtl. Änderungen vor Reiseantritt unterrichten."
  }
];

export default function AGBPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 HERO REGISTRY (Preserved per instructions) */}
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
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Stand: 2025 Registry</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Zertifiziert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 CONTENT LEDGER: ARCHITECTURAL REDESIGN */}
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Legal Scroll */}
          <main className="lg:col-span-8 space-y-12 md:space-y-16">
            
            {/* Introductory Registry Note */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-border/40 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-headline text-2xl md:text-4xl text-secondary tracking-tight leading-none uppercase">Vorabinformation</h2>
              </div>
              <p className="text-muted-foreground font-normal text-[14px] leading-[20px] uppercase tracking-widest opacity-80 text-justify">
                Die folgenden Bestimmungen werden, soweit wirksam vereinbart, Inhalt des zwischen Ihnen und der Tansania Reiseabenteuer SDL GmbH zustande kommenden Pauschalreisevertrages. Bitte lesen Sie diese sorgfältig durch.
              </p>
            </div>

            {/* Terms Sections with Architectural Numbering */}
            <div className="space-y-10">
              {termsSections.map((section) => (
                <motion.div 
                  key={section.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <div className="hidden md:flex flex-col items-center gap-4 pt-2">
                      <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-black text-xs shadow-lg group-hover:bg-primary transition-colors">
                        {section.id}
                      </div>
                      <div className="w-px h-full min-h-[100px] bg-border/40" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <h3 className="font-headline text-xl md:text-3xl text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-border/40 p-6 md:p-10 shadow-sm">
                        <p className="text-muted-foreground font-normal text-[14px] leading-[22px] uppercase tracking-widest opacity-80 text-justify">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Insolvency Protocol Card - Removed Secondary Background */}
            <div className="bg-[#FDF7F2] p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] space-y-8 relative overflow-hidden border border-[#F0EBE0] group">
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <ShieldCheck className="w-64 h-64 text-secondary" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl md:text-4xl text-secondary uppercase tracking-tighter">Insolvenzschutz</h3>
                </div>
                <p className="text-muted-foreground text-[11px] md:text-sm font-bold uppercase tracking-widest leading-relaxed max-w-2xl">
                  Tansania Reiseabenteuer SDL GmbH ist durch den <span className="text-secondary font-black">Deutschen Reisesicherungsfonds (DRSF)</span> abgesichert. Mit Ihrer Reisebestätigung erhalten Sie den gesetzlich vorgeschriebenen Sicherungsschein, der Ihre Zahlungen zu 100% garantiert.
                </p>
                <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row gap-8">
                  <div className="space-y-1">
                    <p className="text-[8px] font-black text-primary uppercase tracking-[0.4em]">Registry Status</p>
                    <p className="text-[10px] font-black uppercase text-secondary">Aktiv & Zertifiziert 2025/26</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] font-black text-primary uppercase tracking-[0.4em]">Schutztyp</p>
                    <p className="text-[10px] font-black uppercase text-secondary">Pauschalreiseschutz § 651r BGB</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar Protocol */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              
              <Card className="bg-white p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-border/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                  <Compass className="w-48 h-48 text-secondary" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                    <Compass className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-secondary leading-none tracking-tighter text-2xl md:text-3xl uppercase font-headline">Haben Sie <br /><span className="text-primary font-bold">Fragen?</span></h3>
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                      Die rechtlichen Rahmenbedingungen einer Safari sind komplex. Lassen Sie uns diese persönlich klären.
                    </p>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full h-12 md:h-14 rounded-xl font-bold uppercase tracking-widest text-[9px] shadow-xl transition-all group border-none">
                      KONTAKT AUFNEHMEN <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <div className="p-8 bg-[#FDF7F2] rounded-[2rem] border border-[#F0EBE0] space-y-6">
                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Downloads</h4>
                <div className="space-y-4">
                  <button className="flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-tight">AGB als PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-tight">EU-Richtblatt</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </aside>
        </div>

        {/* Corporate Identity Footer */}
        <section className="pt-16 mt-20 border-t border-border/40 text-center space-y-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white border border-border shadow-xl">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4">
            <h3 className="text-secondary uppercase tracking-tight leading-none text-xl md:text-2xl font-headline">Tansania Reiseabenteuer SDL GmbH</h3>
            <div className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em] space-y-2 opacity-60">
              <p>Amtsgericht Oranienburg, HRB NR. 12250 NP</p>
              <p>Geschäftsführer: Samson Kyashama</p>
              <p className="text-secondary font-black">Berlin Registry Office</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
