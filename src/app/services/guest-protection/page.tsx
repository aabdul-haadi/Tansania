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
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
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
    desc: "Maximale Absicherung für alle Eventualitäten Ihrer Expedition.",
    cta: "Premium Schutz buchen"
  },
  {
    title: "Rücktritt & Urlaub",
    subtitle: "Stornokosten-Schutz",
    scope: "Weltweit bis 45 Tage",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Ideal bei bestehender Auslandskrankenversicherung.",
    cta: "Rücktrittsschutz buchen"
  },
  {
    title: "Jahresversicherung",
    subtitle: "Für alle Ihre Reisen",
    scope: "Bis zu 56 Tage pro Reise",
    tag: "Best Value",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "24/7 Notfall-Service"
    ],
    desc: "Einmal abschließen, das ganze Jahr weltweit abgesichert sein.",
    cta: "Jahres-Schutz buchen"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* Immersive Compact Hero */}
      <header className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden flex items-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Reiseversicherung Tansania"
          fill
          priority
          className="object-cover opacity-30 grayscale"
          data-ai-hint="safari security"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[11px] mb-4 block">
              Global Security Audit
            </span>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white mb-6 leading-[0.9] tracking-tighter uppercase">
              Haben Sie an Ihre <br />
              <span className="text-primary">Reiseversicherung</span> <br />
              gedacht?
            </h1>
            <p className="max-w-lg text-[9px] md:text-base text-white/60 font-bold uppercase tracking-[0.2em] leading-relaxed">
              Zwischen Buchung und Abreise liegen Wochen, in denen sich viel ändern kann. Schützen Sie Ihr Investment professionell.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] block">Risiko-Management</span>
              <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary uppercase leading-none">
                Vorsorge für <br />den <span className="text-primary">Ernstfall</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-bold leading-relaxed text-xs md:text-base uppercase tracking-widest">
                <p>
                  Urlaub und Reisen bedeutet die Welt kennenzulernen. Bei einer größeren Reise sollte man trotz aller Vorfreude auch auf schwierige Situationen vorbereitet sein.
                </p>
                <p className="text-secondary border-l-2 border-primary/20 pl-5">
                  Sollten Sie aus gesundheitlichen Gründen absagen müssen, fallen hohe Stornogebühren an. Sichern Sie sich und Ihre Angehörigen ab.
                </p>
              </div>
            </div>

            <div className="p-8 bg-secondary text-white rounded-[2.5rem] shadow-xl relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-white/10">
                    <Fingerprint className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-bold uppercase tracking-tight">HanseMerkur</h4>
                    <p className="text-[8px] font-black uppercase text-primary tracking-[0.3em]">Exklusiv-Partner</p>
                  </div>
                </div>
                <p className="text-white/60 font-bold text-[10px] md:text-xs leading-relaxed uppercase tracking-widest">
                  Unser kompetenter Partner hilft Ihnen in jeder schwierigen Situation weiter – unkompliziert und direkt über uns buchbar.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/5 p-3 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> 24/7 Notfall-Service
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/90 bg-white/5 p-3 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Einfache Online-Buchung
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Density Tiers */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {insurancePackages.map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className={cn(
                    "border-none shadow-sm rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-xl group",
                    pkg.tag === 'Empfehlung' ? "ring-2 ring-primary bg-primary/5" : "bg-white"
                  )}>
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="flex-grow space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-headline text-xl md:text-3xl font-bold text-secondary uppercase leading-none">
                              {pkg.title}
                            </h3>
                            {pkg.tag && (
                              <Badge className="bg-primary text-white border-none px-2 py-0.5 text-[8px] font-black uppercase tracking-widest">
                                {pkg.tag}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-[9px] font-black uppercase text-primary tracking-widest">
                            <Globe className="w-3.5 h-3.5" /> {pkg.scope}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2.5">
                              <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                              <span className="text-[9px] font-black text-secondary uppercase tracking-widest leading-none">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-border/50">
                          <p className="text-[9px] font-bold text-muted-foreground leading-relaxed uppercase tracking-widest">
                            {pkg.desc}
                          </p>
                        </div>
                      </div>

                      <div className="md:w-40 shrink-0">
                        <Button className="w-full h-12 md:h-14 rounded-xl bg-secondary text-white font-black text-[9px] uppercase tracking-widest shadow-lg group-hover:bg-primary transition-all flex items-center justify-center gap-2">
                          Buchen <ChevronRight className="w-3.5 h-3.5" />
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
      <section className="py-12 md:py-20 bg-white relative overflow-hidden border-y border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-[1.5rem] bg-muted mx-auto flex items-center justify-center shadow-lg">
              <HeartPulse className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-3">
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-[0.9]">
                Persönliche <br /><span className="text-primary">Beratung</span>
              </h2>
              <p className="text-muted-foreground font-black text-[9px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-xl mx-auto">
                Unsere Experten in Berlin beraten Sie individuell zum passenden Versicherungsschutz für Ihre Afrika-Expedition.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-10 h-14 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl group">
                  Experten Sprechen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}