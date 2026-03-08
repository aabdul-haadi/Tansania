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
  Zap,
  Info,
  ShieldAlert,
  Fingerprint
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
    subtitle: "Das Rundum-Sorglos-Paket",
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
    desc: "Für diese Reise sind Sie für alle Eventualitäten vorbereitet. Maximale Absicherung.",
    cta: "Premium Schutz buchen"
  },
  {
    title: "Rücktritt & Urlaub",
    subtitle: "Fokus auf Stornokosten",
    scope: "Weltweit bis 45 Tage",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Ideal für Reisende mit bestehender Auslandskrankenversicherung.",
    cta: "Rücktrittsschutz buchen"
  },
  {
    title: "Jahresversicherung",
    subtitle: "Für alle Ihre Reisen",
    scope: "Alle Reisen bis 56 Tage",
    tag: "Best Value",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "24/7 Notfall-Service"
    ],
    desc: "Einmal abschließen, das ganze Jahr weltweit gegen Stornofall versichert sein.",
    cta: "Jahres-Schutz buchen"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Editorial High-Scale Hero */}
      <header className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Sicher Reisen"
          fill
          priority
          className="object-cover opacity-30 grayscale"
          data-ai-hint="safari security"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl"
          >
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block">
              Global Security Audit
            </span>
            <h1 className="font-headline text-4xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.85] tracking-tighter uppercase">
              Haben Sie an <br />
              <span className="text-primary">Versicherung</span> <br />
              gedacht?
            </h1>
            <p className="max-w-xl text-[10px] md:text-lg text-white/60 font-bold uppercase tracking-[0.2em] leading-relaxed">
              Zwischen Buchung und Abreise liegen Wochen, in denen sich viel ändern kann. Schützen Sie Ihr Investment.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Security Context Grid */}
      <section className="py-12 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] block">Risiko-Management</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-none">
                Vorsorge für <br />den <span className="text-primary">Ernstfall</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-base uppercase tracking-widest">
                <p>
                  Sollten Sie aus gesundheitlichen oder anderen wichtigen Gründen Ihre Reise absagen müssen, fallen oft hohe Stornogebühren an.
                </p>
                <p className="text-secondary border-l-2 border-primary/20 pl-6">
                  Nicht nur Sie sind versichert: Was ist, wenn Angehörige einen Unfall haben oder Ihr Zuhause gefährdet ist?
                </p>
              </div>
            </div>

            <div className="p-10 bg-secondary text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-white/10">
                    <Fingerprint className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold uppercase tracking-tight">HanseMerkur</h4>
                    <p className="text-[8px] font-black uppercase text-primary tracking-[0.3em]">Exklusiv-Strategie</p>
                  </div>
                </div>
                <p className="text-white/60 font-bold text-[10px] md:text-xs leading-relaxed uppercase tracking-widest">
                  Unser Partner HanseMerkur hilft Ihnen unkompliziert – direkt über unsere Experten in Berlin und Kairo buchbar.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Globaler 24/7 Notfall-Support
                  </div>
                  <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Digitale Schadensmeldung
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {insurancePackages.map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={cn(
                    "border-none shadow-sm rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl group",
                    pkg.tag === 'Empfehlung' ? "ring-2 ring-primary bg-primary/5 shadow-2xl" : "bg-white"
                  )}>
                    <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
                      <div className="flex-grow space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase leading-none">
                              {pkg.title}
                            </h3>
                            {pkg.tag && (
                              <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest shadow-xl">
                                {pkg.tag}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-[10px] font-black uppercase text-primary tracking-widest">
                            <Globe className="w-4 h-4" /> {pkg.scope}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="text-[10px] font-black text-secondary uppercase tracking-widest leading-tight">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-border/50">
                          <p className="text-[9px] font-bold text-muted-foreground leading-relaxed uppercase tracking-widest">
                            {pkg.desc}
                          </p>
                        </div>
                      </div>

                      <div className="md:w-48 flex flex-col justify-end">
                        <Button className="w-full h-16 rounded-2xl bg-secondary text-white font-black text-[9px] uppercase tracking-[0.2em] shadow-xl group-hover:bg-primary transition-all flex flex-col items-center justify-center gap-1">
                          <span>Details</span>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Advisory Spotlight */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden border-y border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-muted mx-auto flex items-center justify-center shadow-xl">
              <HeartPulse className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-7xl font-bold text-secondary uppercase tracking-tighter leading-[0.9]">
                Beratung <br /><span className="text-primary">anfordern</span>
              </h2>
              <p className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto">
                Unsere Experten in Berlin beraten Sie individuell zum passenden Versicherungsschutz für Ihre Afrika-Expedition.
              </p>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-12 h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] shadow-2xl group transition-all">
                  Experten Sprechen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}