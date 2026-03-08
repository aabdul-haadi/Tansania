"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Zap,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
    subtitle: "Rundum Sorglos",
    scope: "Weltweit bis 45 Tage",
    tag: "Unsere Empfehlung",
    features: [
      "Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Krankenversicherung",
      "Notfall-Schutz",
      "Unfallversicherung",
      "Gepäckschutz"
    ],
    desc: "Komplettschutz für alle Eventualitäten.",
    cta: "Premium buchen"
  },
  {
    title: "Storno-Schutz",
    subtitle: "Rücktritt & Urlaub",
    scope: "Weltweit bis 45 Tage",
    features: [
      "Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Nur den Stornofall professionell absichern.",
    cta: "Basis buchen"
  },
  {
    title: "Jahresschutz-Kombi",
    subtitle: "Dauerhafte Sicherheit",
    scope: "Alle Reisen bis 56 Tage",
    tag: "Vielreiser-Tipp",
    features: [
      "Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Gültig für alle Reisen im Jahr"
    ],
    desc: "Perfekt für mehrere Abenteuer jährlich.",
    cta: "Jahresschutz buchen"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* Tight Solid Header */}
      <header className="relative pt-32 pb-8 md:pb-12 bg-white border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <ShieldCheck className="w-48 h-48 text-secondary" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-4"
          >
            <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-black uppercase tracking-[0.4em] shadow-lg">Schutz-Strategie</Badge>
            <h1 className="font-headline text-3xl md:text-6xl font-bold text-secondary leading-none tracking-tighter uppercase">
              Haben Sie an Ihre <br />
              <span className="text-primary">Reiseversicherung gedacht?</span>
            </h1>
            <p className="max-w-xl text-[9px] md:text-sm text-muted-foreground font-black uppercase tracking-widest leading-relaxed">
              Planen Sie Ihr Tansania-Abenteuer mit professionellem Risiko-Management. Wir sichern Ihre Träume ab.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Strategy Grid */}
      <section className="py-10 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] block">Risiko-Audit</span>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase leading-none">
                Vorsorge für <br /><span className="text-primary">den Ernstfall</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-black leading-relaxed text-[10px] md:text-xs uppercase tracking-widest">
                <p>
                  Urlaub bedeutet Freiheit. Doch zwischen Buchung und Abreise liegen meist mehrere Wochen in denen sich viel in Ihrem Leben ändern kann. Hohe Stornierungsgebühren sind ein vermeidbares Risiko.
                </p>
                <div className="p-6 bg-white rounded-2xl shadow-sm relative overflow-hidden border border-border">
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <h4 className="text-base font-headline font-bold uppercase text-secondary">HanseMerkur Partner</h4>
                    </div>
                    <p className="text-muted-foreground font-bold text-[9px] leading-relaxed uppercase tracking-widest">
                      Unser Partner HanseMerkur hilft Ihnen unkompliziert und kompetent in jeder schwierigen Situation.
                    </p>
                    <div className="flex flex-col gap-1 border-t border-border pt-4">
                      <p className="text-[7px] font-black text-muted-foreground/60 uppercase">Support Berlin</p>
                      <p className="text-xs font-bold text-secondary">info@tansania-reiseabenteuer.de</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insurancePackages.map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative p-6 md:p-8 rounded-[2rem] bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col justify-between",
                    pkg.tag === 'Unsere Empfehlung' ? "border-primary/20 ring-1 ring-primary/5 md:col-span-2" : ""
                  )}
                >
                  {pkg.tag && (
                    <div className="absolute top-6 right-6 md:top-8 md:right-8">
                      <Badge className="bg-primary text-white border-none px-2.5 py-1 text-[8px] font-black uppercase tracking-widest shadow-xl">
                        {pkg.tag}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-primary font-black text-[8px] uppercase tracking-widest mb-1.5">{pkg.scope}</p>
                      <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary uppercase leading-none">{pkg.title}</h3>
                      <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest mt-2">{pkg.subtitle}</p>
                    </div>

                    <div className={cn(
                      "grid gap-2.5",
                      pkg.tag === 'Unsere Empfehlung' ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                    )}>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[9px] font-bold text-muted-foreground leading-relaxed uppercase tracking-widest max-w-[240px]">
                        {pkg.desc}
                      </p>
                      <Button className="w-full sm:w-auto h-12 px-8 rounded-xl bg-secondary text-white font-black text-[9px] uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
                        {pkg.cta} <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Advisory Call-to-Action */}
      <section className="py-12 md:py-20 bg-white border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <div className="w-14 h-14 rounded-2xl bg-muted/50 mx-auto flex items-center justify-center shadow-inner">
            <ShieldAlert className="w-7 h-7 text-primary" />
          </div>
          <div className="space-y-3">
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">
              Individuelle <br /><span className="text-primary">Beratung</span>
            </h2>
            <p className="text-muted-foreground font-black text-[9px] md:text-sm uppercase tracking-[0.2em] leading-relaxed max-w-xl mx-auto">
              Unser Berliner Expertenteam analysiert Ihren persönlichen Bedarf für die Tansania-Expedition.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-2xl px-12 h-14 md:h-16 font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] transition-transform">
                Experten Sprechen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}