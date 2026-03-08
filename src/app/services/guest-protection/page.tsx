"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  HeartPulse,
  ChevronRight,
  ShieldAlert,
  Fingerprint,
  Phone,
  Calendar,
  AlertTriangle,
  Lock,
  Compass,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
    subtitle: "Das „Rundum Sorglos“-Paket",
    scope: "Weltweit bis 45 Tage",
    tag: "Unsere Empfehlung",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Reise-Krankenversicherung",
      "Notfall-Versicherung",
      "Reise-Unfallversicherung",
      "Gepäckversicherung"
    ],
    desc: "Der Komplettschutz für alle Eventualitäten. Für alle, die im Urlaub lieber auf Nummer sicher gehen.",
    cta: "Premium Schutz buchen"
  },
  {
    title: "Storno-Schutz",
    subtitle: "Rücktritt & Urlaub",
    scope: "Weltweit bis 45 Tage",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Sie haben eine Reise-Krankenversicherung und wollen nur den Stornofall versichern? Dann ist dies die richtige Wahl.",
    cta: "Basisschutz buchen"
  },
  {
    title: "Jahresschutz-Kombi",
    subtitle: "Dauerhafte Sicherheit",
    scope: "Weltweit bis 56 Tage - alle Reisen!",
    tag: "Best Value",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Versichert für alle Reisen im Jahr"
    ],
    desc: "Sie verreisen mehrmals im Jahr – auch mit anderen Anbietern? Dann ist die Jahresversicherung das passende Produkt!",
    cta: "Jahresschutz buchen"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* High-Impact Solid Header */}
      <header className="relative pt-32 pb-12 md:pb-20 bg-white border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <ShieldCheck className="w-64 h-64 text-secondary" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.4em] shadow-lg">Sicherheitsprotokoll</Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-secondary leading-none tracking-tighter uppercase">
              Haben Sie an Ihre <br />
              <span className="text-primary">Versicherung gedacht?</span>
            </h1>
            <p className="max-w-2xl text-xs md:text-lg text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
              Planen Sie Ihr Tansania-Abenteuer mit professionellem Risiko-Management. Wir sichern Ihre Träume ab.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Strategy Grid */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] block">Risiko-Management</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase leading-none">
                Vorsorge für <br />den <span className="text-primary">Ernstfall</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-xs md:text-sm uppercase tracking-widest">
                <p>
                  Urlaub bedeutet Freiheit. Doch zwischen Buchung und Abreise liegen meist mehrere Wochen in denen sich viel in Ihrem Leben ändern kann. Hohe Stornierungsgebühren sind ein vermeidbares Risiko.
                </p>
                <div className="p-8 bg-muted/30 rounded-[2.5rem] shadow-sm relative overflow-hidden border border-border">
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                      <h4 className="text-lg font-headline font-bold uppercase tracking-tight text-secondary">HanseMerkur Partner</h4>
                    </div>
                    <p className="text-muted-foreground font-bold text-[10px] leading-relaxed uppercase tracking-widest">
                      Unser zuverlässiger Partner HanseMerkur hilft Ihnen in jeder schwierigen Situation – unkompliziert und kompetent.
                    </p>
                    <div className="flex flex-col gap-2 border-t border-border pt-6">
                      <p className="text-[8px] font-black text-muted-foreground/60 uppercase">Kontakt Berlin</p>
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
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative p-8 rounded-[2.5rem] bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-xl group flex flex-col justify-between",
                    pkg.tag === 'Unsere Empfehlung' ? "border-primary/30 ring-1 ring-primary/10 md:col-span-2" : ""
                  )}
                >
                  {pkg.tag && (
                    <div className="absolute top-8 right-8">
                      <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-xl">
                        {pkg.tag}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-8">
                    <div>
                      <p className="text-primary font-black text-[9px] uppercase tracking-widest mb-2">{pkg.scope}</p>
                      <h3 className="font-headline text-3xl md:text-4xl font-bold text-secondary uppercase leading-none">{pkg.title}</h3>
                      <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest mt-3">{pkg.subtitle}</p>
                    </div>

                    <div className={cn(
                      "grid gap-3",
                      pkg.tag === 'Unsere Empfehlung' ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
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
                      <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-secondary text-white font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
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

      {/* Advisory Spotlight */}
      <section className="py-16 md:py-32 bg-white border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <div className="w-16 h-16 rounded-[1.5rem] bg-muted/50 mx-auto flex items-center justify-center shadow-inner">
            <ShieldAlert className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-7xl font-bold text-secondary uppercase tracking-tighter leading-none">
              Individuelle <br /><span className="text-primary">Beratung</span>
            </h2>
            <p className="text-muted-foreground font-black text-[10px] md:text-base uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto">
              Unser Berliner Expertenteam analysiert Ihren persönlichen Bedarf für die Tansania-Expedition.
            </p>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-[2rem] px-14 h-16 md:h-20 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] transition-transform">
                Experten Sprechen <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
