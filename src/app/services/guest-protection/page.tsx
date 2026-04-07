
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
    subtitle: "Rundum Sorglos Strategie",
    scope: "Weltweit bis 45 Tage",
    tag: "Empfehlung",
    features: [
      "Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Krankenversicherung",
      "Notfall-Schutz",
      "Unfallversicherung",
      "Gepäckschutz"
    ],
    desc: "Vollumfänglicher Schutz für Ihre Expedition.",
    cta: "Premium Wählen"
  },
  {
    title: "Basis Storno-Schutz",
    subtitle: "Rücktritt & Abbruch",
    scope: "Weltweit bis 45 Tage",
    features: [
      "Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Absicherung der Stornierungskosten.",
    cta: "Basis Wählen"
  },
  {
    title: "Jahresschutz-Kombi",
    subtitle: "Dauerhafte Sicherheit",
    scope: "Alle Reisen bis 56 Tage",
    tag: "Vielreiser",
    features: [
      "Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Gültig für 365 Tage"
    ],
    desc: "Für Entdecker mit mehreren Zielen jährlich.",
    cta: "Jahresschutz"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* COMPACT DARK HERO */}
      <header className="relative pt-32 pb-16 md:pb-24 bg-secondary border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <ShieldCheck className="w-48 h-48 text-primary" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-4"
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.4em] shadow-lg">Schutz-Strategie</Badge>
            <h1 className="text-white uppercase">
              Reise-<br />
              <span className="text-primary">Versicherung</span>
            </h1>
            <p className="max-w-xl text-[10px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
              Professionelles Risiko-Management für Ihr Tansania-Abenteuer. Wir sichern Ihre Träume ab.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Risiko-Audit</span>
              <h2 className="text-secondary uppercase">
                Prävention <br /><span className="text-primary">Statt Risiko</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-xs md:text-sm uppercase tracking-widest">
                <p>
                  Urlaub bedeutet Freiheit. Hohe Stornierungsgebühren sind ein vermeidbares Risiko.
                </p>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-border">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="w-7 h-7 text-primary" />
                      </div>
                      <h4 className="text-xl font-headline font-bold uppercase text-secondary">HanseMerkur</h4>
                    </div>
                    <p className="text-muted-foreground font-bold text-[10px] leading-relaxed uppercase tracking-widest">
                      Professioneller Schutz durch unseren langjährigen Partner HanseMerkur Reiseversicherung AG.
                    </p>
                    <div className="flex flex-col gap-2 border-t border-border pt-6">
                      <p className="text-[8px] font-bold text-muted-foreground/60 uppercase">Registry Berlin</p>
                      <p className="text-sm font-bold text-secondary">info@tansania-reiseabenteuer.de</p>
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
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative p-8 rounded-[2.5rem] bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-2xl flex flex-col justify-between group",
                    pkg.tag === 'Empfehlung' ? "border-primary/20 ring-1 ring-primary/5 md:col-span-2" : ""
                  )}
                >
                  {pkg.tag && (
                    <div className="absolute top-8 right-8">
                      <Badge className="bg-primary text-white border-none px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest shadow-xl">
                        {pkg.tag}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-8">
                    <div>
                      <p className="text-primary font-bold text-[9px] uppercase tracking-widest mb-2">{pkg.scope}</p>
                      <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase leading-none tracking-tighter">{pkg.title}</h3>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-3">{pkg.subtitle}</p>
                    </div>

                    <div className={cn(
                      "grid gap-3",
                      pkg.tag === 'Empfehlung' ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                    )}>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                      <p className="text-[10px] font-bold text-muted-foreground leading-relaxed uppercase tracking-widest max-w-[280px]">
                        {pkg.desc}
                      </p>
                      <Button className="w-full sm:w-auto h-11 md:h-14 px-10 rounded-xl bg-secondary text-white font-bold text-[10px] uppercase tracking-widest shadow-xl group-hover:bg-primary transition-all border-none">
                        {pkg.cta} <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-12 md:py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <div className="w-16 h-16 rounded-[1.5rem] bg-muted/50 mx-auto flex items-center justify-center border border-border">
            <ShieldAlert className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4">
            <h2 className="text-secondary uppercase">
              Individuelle <br /><span className="text-primary">Beratung</span>
            </h2>
            <p className="text-muted-foreground font-bold text-[10px] md:text-base uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
              Unser Expertenteam analysiert Ihren persönlichen Bedarf für die Tansania-Expedition. Wir finden die passende Strategie für Ihre Sicherheit.
            </p>
          </div>
          <div className="pt-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="rounded-xl px-12 h-11 md:h-14 font-bold text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.05] transition-transform border-none">
                Experten Sprechen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
