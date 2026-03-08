"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Plane, 
  HeartPulse, 
  Clock, 
  Globe, 
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Info,
  ExternalLink,
  Zap,
  Briefcase,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
    subtitle: "Weltweit bis 45 Tage",
    tag: "Empfehlung",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Reise-Krankenversicherung",
      "Notfall-Versicherung",
      "Reise-Unfallversicherung",
      "Gepäckversicherung"
    ],
    desc: "Das Rundum Sorglos-Paket für alle die im Urlaub lieber auf Nummer sicher gehen. Vollständige Absicherung.",
    cta: "Premium Schutz buchen"
  },
  {
    title: "Rücktritt & Urlaub",
    subtitle: "Weltweit bis 45 Tage",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Ideal für Reisende mit bestehender Auslandskrankenversicherung. Fokus auf Stornokosten.",
    cta: "Rücktrittsschutz buchen"
  },
  {
    title: "Jahresversicherung",
    subtitle: "Alle Reisen bis 56 Tage",
    tag: "Vielreiser",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Notfall-Service"
    ],
    desc: "Einmal abschließen, das ganze Jahr geschützt sein. Gilt für alle Reisen weltweit.",
    cta: "Jahres-Schutz buchen"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-body">
      {/* High-Impact Hero */}
      <header className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Sicher Reisen in Tansania"
          fill
          priority
          className="object-cover opacity-40"
          data-ai-hint="safari landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6 shadow-xl">
              Maximale Sicherheit
            </Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-none uppercase tracking-tighter">
              Reise-<br />
              <span className="text-primary">Versicherung</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-xl text-white/90 font-bold uppercase tracking-widest leading-relaxed">
              Sorglos in das Abenteuer Afrika starten.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Intro Context */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Vorsorge</span>
              <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight text-secondary uppercase tracking-tight">
                An alles <span className="text-primary">gedacht?</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-xs md:text-lg uppercase tracking-wider">
              <p>
                Urlaub bedeutet Freiheit. Doch Unvorhersehbares kann passieren. Krankheit oder Unfälle können eine Stornierung notwendig machen.
              </p>
              <p className="text-secondary">
                Wir raten allen Reisenden dazu, sich mit einer Reiseversicherung gegen hohe Stornogebühren abzusichern.
              </p>
            </div>
          </div>

          <div className="bg-secondary text-white p-6 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden border-none">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-headline font-bold uppercase">HanseMerkur</h4>
                  <p className="text-[8px] font-bold uppercase text-primary tracking-widest">Exklusiv-Partner</p>
                </div>
              </div>
              <p className="text-white/70 font-bold text-[10px] md:text-sm leading-relaxed uppercase tracking-widest">
                Unser Partner HanseMerkur hilft Ihnen unkompliziert und zuverlässig – direkt über unsere Experten buchbar.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> 24/7 Notfall-Zentrale
                </div>
                <div className="flex items-center gap-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Schnelle Regulierung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Tiers Grid */}
      <section className="py-12 md:py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Paket-Übersicht</span>
            <h2 className="font-headline text-2xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Schutz nach <span className="text-primary">Maß</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {insurancePackages.map((pkg, i) => (
              <Card key={i} className={cn(
                "border-none shadow-sm rounded-[2rem] flex flex-col overflow-hidden transition-all duration-500",
                pkg.tag === 'Empfehlung' ? "ring-2 ring-primary bg-primary/5 shadow-2xl" : "bg-muted/20"
              )}>
                <CardContent className="p-6 md:p-8 flex flex-col h-full space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-lg md:text-2xl font-bold text-secondary uppercase leading-tight">
                        {pkg.title}
                      </h3>
                      {pkg.tag && (
                        <Badge className="bg-primary text-white border-none px-2 py-0.5 text-[7px] font-black uppercase tracking-widest shadow-md">
                          {pkg.tag}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[8px] font-black uppercase text-muted-foreground tracking-widest">
                      <Globe className="w-3 h-3 text-primary" /> {pkg.subtitle}
                    </div>
                  </div>

                  <div className="space-y-2 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-widest leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-[8px] font-bold text-muted-foreground leading-relaxed uppercase tracking-widest mb-6">
                      {pkg.desc}
                    </p>
                    <Button className="w-full h-12 rounded-xl bg-secondary text-white font-black text-[8px] md:text-[9px] uppercase tracking-widest shadow-xl group hover:bg-primary transition-all">
                      {pkg.cta} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-4xl text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-muted mx-auto flex items-center justify-center">
            <HeartPulse className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-headline text-2xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">
            Noch Fragen <br /><span className="text-primary">zum Schutz?</span>
          </h2>
          <p className="text-muted-foreground font-black text-[10px] md:text-lg uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Unsere Experten in Berlin beraten Sie individuell zum passenden Versicherungsschutz für Ihre Expedition.
          </p>
          <div className="pt-6">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 h-14 md:h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl group">
                Beratung anfordern <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
