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
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const insurancePackages = [
  {
    title: "5 Sterne-Premium",
    subtitle: "Rundum-Sorglos-Paket",
    scope: "Weltweit bis 45 Tage",
    tag: "Empfehlung",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Reise-Krankenversicherung",
      "Notfall-Versicherung",
      "Reise-Unfallversicherung",
      "Gepäckversicherung"
    ],
    desc: "Das Komplettzertifikat für maximale Sicherheit auf allen Wegen.",
    cta: "Premium Schutz"
  },
  {
    title: "Storno-Schutz",
    subtitle: "Rücktritt & Urlaub",
    scope: "Weltweit bis 45 Tage",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Fokussierte Absicherung gegen hohe Stornierungskosten.",
    cta: "Basisschutz buchen"
  },
  {
    title: "Jahresschutz",
    subtitle: "Dauerhafte Sicherheit",
    scope: "Weltweit / Alle Reisen",
    tag: "Best Value",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "24/7 Priority Notfall-Service"
    ],
    desc: "Einmal abschließen, das ganze Jahr weltweit abgesichert sein.",
    cta: "Jahresabo buchen"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* High-Contrast Professional Hero */}
      <header className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Reiseversicherung Tansania"
          fill
          priority
          className="object-cover opacity-20 grayscale"
          data-ai-hint="safari security"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-4"
          >
            <Badge className="bg-primary text-white border-none px-4 py-1 text-[9px] font-black uppercase tracking-[0.4em] shadow-xl">Security Protocol</Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter uppercase">
              Schützen Sie <br />
              <span className="text-primary">Ihr Abenteuer</span>
            </h1>
            <p className="max-w-lg text-[10px] md:text-base text-white/50 font-bold uppercase tracking-widest leading-relaxed">
              Professionelles Risiko-Management für Ihre Tansania-Expedition. Sicher. Kompetent. Unbürokratisch.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Strategy Grid - High Density */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] block">Risiko-Audit</span>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase leading-tight">
                Vorsorge für <br />den <span className="text-primary">Ernstfall</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-bold leading-relaxed text-[11px] md:text-sm uppercase tracking-widest">
                <p>
                  Urlaub bedeutet Freiheit. Doch zwischen Buchung und Abreise liegen Wochen, in denen sich viel ändern kann. Hohe Stornierungskosten sind ein vermeidbares Risiko.
                </p>
                <div className="p-6 bg-secondary text-white rounded-2xl shadow-xl relative overflow-hidden border border-white/5">
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <Fingerprint className="w-6 h-6 text-primary" />
                      <h4 className="text-sm font-headline font-bold uppercase tracking-tight">HanseMerkur Partner</h4>
                    </div>
                    <p className="text-white/40 font-bold text-[9px] leading-relaxed uppercase tracking-widest">
                      Unser Partner bietet 24/7 Support und direkte Schadensabwicklung für unsere Gäste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Density Strategy Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insurancePackages.map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative p-6 rounded-[2rem] border transition-all duration-500 hover:shadow-2xl group",
                    pkg.tag === 'Empfehlung' ? "bg-white border-primary/20 ring-1 ring-primary/10 md:col-span-2" : "bg-white border-border/50"
                  )}
                >
                  {pkg.tag && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest shadow-lg">
                        {pkg.tag}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-primary font-black text-[8px] uppercase tracking-widest mb-1">{pkg.scope}</p>
                      <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary uppercase leading-none">{pkg.title}</h3>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2">{pkg.subtitle}</p>
                    </div>

                    <div className={cn(
                      "grid gap-2",
                      pkg.tag === 'Empfehlung' ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                    )}>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                          <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[9px] font-bold text-muted-foreground leading-tight uppercase tracking-widest max-w-[240px]">
                        {pkg.desc}
                      </p>
                      <Button className="w-full sm:w-auto h-11 px-8 rounded-xl bg-secondary text-white font-black text-[9px] uppercase tracking-widest shadow-lg hover:bg-primary transition-all">
                        {pkg.cta} <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Experts Spotlight */}
      <section className="py-12 md:py-20 bg-white border-y border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <div className="w-14 h-14 rounded-2xl bg-muted mx-auto flex items-center justify-center shadow-inner">
            <ShieldAlert className="w-7 h-7 text-primary" />
          </div>
          <div className="space-y-3">
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">
              Persönliche <br /><span className="text-primary">Sicherheitsberatung</span>
            </h2>
            <p className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-xl mx-auto">
              Unser Berliner Expertenteam analysiert Ihren Bedarf individuell für Ihre Afrika-Reise.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-2xl px-12 h-14 md:h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] transition-transform">
                Experten Sprechen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
