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

const insurancePackages = [
  {
    title: "5 Sterne-Premium-Schutz",
    subtitle: "Weltweit bis 45 Tage",
    tag: "Rundum Sorglos",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie",
      "Reise-Krankenversicherung",
      "Notfall-Versicherung",
      "Reise-Unfallversicherung",
      "Gepäckversicherung"
    ],
    desc: "Das „Rundum Sorglos“-Paket für alle die im Urlaub lieber auf Nummer sicher gehen. Für diese Reise sind Sie für alle Eventualitäten vorbereitet.",
    cta: "Zur Buchung des 5 Sterne-Premium-Schutz"
  },
  {
    title: "Rücktritt & Urlaubsgarantie",
    subtitle: "Weltweit bis 45 Tage",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Sie haben eine Reise-Krankenversicherung und wollen nur den Stornofall versichern? Dann buchen Sie unsere Rücktrittsversicherung mit der Urlaubsgarantie.",
    cta: "Zur Buchung der Rücktrittsversicherung"
  },
  {
    title: "Jahresversicherung",
    subtitle: "Weltweit bis 56 Tage - alle Reisen!",
    tag: "Für Vielreisende",
    features: [
      "Reise-Rücktrittsversicherung",
      "Urlaubsgarantie"
    ],
    desc: "Sie verreisen mehrmals im Jahr - auch mit anderen Anbietern - und wollen immer gegen den Stornofall versichert sein? Dann ist die Jahresversicherung das passende Produkt für Sie!",
    cta: "Zur Buchung der Jahresversicherung"
  }
];

export default function GuestProtectionPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-body">
      {/* Immersive Protection Hero */}
      <header className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Sicher Reisen in Tansania"
          fill
          priority
          className="object-cover opacity-40"
          data-ai-hint="safari landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-xl">
              Sorglos in den Urlaub
            </Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
              Haben Sie an Ihre <br />
              <span className="text-primary">Reiseversicherung</span> gedacht?
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-xl text-white/90 font-black uppercase tracking-widest leading-relaxed">
              Vorbereitet auf alle Eventualitäten – Ihr Schutz für die Safari.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Intro Narrative Section */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Warum Absichern?</span>
              <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight text-secondary uppercase tracking-tight">
                Vorsorge für <br /><span className="text-primary">den Ernstfall</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-lg">
              <p>
                Urlaub bedeutet für uns Abenteuer zu erleben und Sorgen hinter sich zu lassen. Doch zwischen Buchung und Abreise kann viel passieren. Gesundheitliche Gründe oder Unfälle bei Angehörigen können eine Stornierung notwendig machen.
              </p>
              <p className="text-secondary">
                Sollten Sie Ihre Reise absagen müssen, fallen oft hohe Gebühren an. Wir raten daher allen Reisenden dazu, sich mit einer Reiseversicherung kompetent abzusichern.
              </p>
            </div>
          </motion.div>

          <div className="bg-secondary text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-none group">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold uppercase">Unser Partner</h4>
                  <p className="text-[10px] font-black uppercase text-primary tracking-widest">HanseMerkur Versicherung</p>
                </div>
              </div>
              <p className="text-white/60 font-bold text-sm md:text-base leading-relaxed">
                Unser kompetenter Partner HanseMerkur hilft Ihnen gerne in jeder schwierigen Situation weiter. Unkompliziert und zuverlässig – direkt über uns buchbar.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> 24/7 Notfall-Service
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Schnelle Schadensregulierung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Recommendations Grid */}
      <section className="py-16 md:py-32 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-24">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Unsere Empfehlungen</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Ihre <span className="text-primary">Versicherungs-Pakete</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {insurancePackages.map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={cn(
                  "h-full border-none shadow-sm rounded-[2.5rem] flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500",
                  pkg.tag ? "border-2 border-primary/20 bg-primary/5" : "bg-muted/20"
                )}>
                  <CardContent className="p-8 md:p-10 flex flex-col h-full space-y-8">
                    <div className="space-y-4">
                      {pkg.tag && (
                        <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest mb-2 shadow-md">
                          {pkg.tag}
                        </Badge>
                      )}
                      <h3 className="font-headline text-xl md:text-3xl font-bold text-secondary uppercase leading-tight group-hover:text-primary transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase text-muted-foreground tracking-widest">
                        <Globe className="w-3.5 h-3.5 text-primary" /> {pkg.subtitle}
                      </div>
                    </div>

                    <div className="space-y-3 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border/50">
                      <p className="text-[10px] font-bold text-muted-foreground leading-relaxed uppercase tracking-widest mb-8">
                        {pkg.desc}
                      </p>
                      <Button className="w-full h-14 rounded-2xl bg-secondary text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl group hover:bg-primary transition-all">
                        {pkg.cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Support CTA */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-4xl text-center">
        <div className="space-y-8">
          <div className="w-16 h-16 rounded-[1.5rem] bg-muted mx-auto flex items-center justify-center">
            <HeartPulse className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">
            Haben Sie noch <br /><span className="text-primary">Fragen?</span>
          </h2>
          <p className="text-muted-foreground font-black text-sm md:text-xl uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Lassen Sie sich von unseren Experten in Berlin beraten. Wir helfen Ihnen, den richtigen Schutz für Ihre Reise zu finden.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full px-12 h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl group">
                Experten Sprechen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
