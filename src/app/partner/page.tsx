
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Network, 
  LayoutDashboard, 
  Mail, 
  ShieldCheck, 
  UserCircle, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Briefcase,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AiCTA } from '@/components/sections/AiCTA';

const requirements = [
  "Freude an Recherche und Interesse an Reisethemen",
  "Motivation, Menschen bei der Planung ihrer Wunschreise zu unterstützen",
  "Klare, freundliche und professionelle Kommunikation",
  "Technisches Verständnis und sicher Umgang mit digitalen Tools",
  "Sorgfältige und strukturierte Arbeitsweise",
  "Ausgeprägte Serviceorientierung und Kundenverständnis",
  "Eigeninitiative, Kreativität und lösungsorientiertes Denken"
];

const benefits = [
  { 
    icon: GraduationCap, 
    title: "Schulungsmodule", 
    sub: "Umfangreiche Schulungsmodule",
    desc: "Strukturierte Einarbeitung für Ihren Erfolg." 
  },
  { 
    icon: Network, 
    title: "Partnernetzwerk", 
    sub: "Starkes Partnernetzwerk",
    desc: "Zugang zu Weiterbildungsmöglichkeiten." 
  },
  { 
    icon: LayoutDashboard, 
    title: "CRM-System", 
    sub: "Modernes CRM-System",
    desc: "Effiziente Verwaltung von Kundendaten." 
  },
  { 
    icon: Mail, 
    title: "E-Mail-Adresse", 
    sub: "Professionelle E-Mail-Adresse",
    desc: "Eigene E-Mail für Ihren Geschäftserfolg." 
  },
  { 
    icon: ShieldCheck, 
    title: "Haftpflichtversicherung", 
    sub: "Berufs-Haftpflichtversicherung",
    desc: "Inklusive Errors & Omissions Versicherung." 
  },
  { 
    icon: UserCircle, 
    title: "Beraterprofil", 
    sub: "Persönliches Beraterprofil",
    desc: "Präsentation auf unserer Website." 
  },
  { 
    icon: FileText, 
    title: "Vorlagen", 
    sub: "Vorlagen und Ressourcen",
    desc: "Zahlreiche Tools für erfolgreiche Kundenprozesse." 
  }
];

const importantInfo = [
  "Selbstständige Tätigkeit (Freie Mitarbeit)",
  "100 % provisionsbasierte Vergütung – kein festes Gehalt",
  "Einmalige Startgebühr für Onboarding und Registrierung",
  "Monatliche Kosten für E-Mail, Partnernetzwerk, Versicherung und CRM",
  "Maximale Freiheit und Flexibilität in Ihrer Arbeitsgestaltung",
  "Erfahren Sie mehr über den FAM-Trip"
];

export default function PartnerPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* COMPACT DARK HERO */}
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-secondary border-b border-white/5 overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?q=80&w=1920"
          alt="Travel Advisor Career"
          fill
          priority
          className="object-cover opacity-30 brightness-50 scale-105"
          data-ai-hint="luxury lounge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-white uppercase leading-none tracking-tighter text-3xl md:text-6xl">
              Werden Sie <br />
              <span className="text-primary">Reiseberater:in</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
              Flexibel, unabhängig und mit Leidenschaft fürs Reisen!
            </p>
          </motion.div>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-secondary uppercase text-2xl md:text-4xl tracking-tighter leading-none">
                Zu einer <br /><span className="text-primary">erfüllenden Karriere</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-bold leading-relaxed text-xs md:text-sm uppercase tracking-widest opacity-80">
              Lieben Sie es, zu reisen und anderen zu ihrem Traumurlaub zu verhelfen? Werden Sie selbstständige:r Reiseberater:in bei Tansania Reiseabenteuer und gestalten Sie unvergessliche Erlebnisse.
            </p>
            <Button asChild className="rounded-xl px-10 h-11 md:h-14 font-black text-[10px] uppercase tracking-widest shadow-xl border-none">
              <Link href="/contact">Jetzt Bewerben</Link>
            </Button>
          </motion.div>

          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-secondary uppercase mb-6 tracking-tight">Was Sie mitbringen sollten</h3>
            <div className="space-y-3">
              {requirements.map((text, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-border/50 shadow-sm group hover:border-primary/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-[9px] md:text-xs font-black text-secondary uppercase tracking-widest leading-tight mt-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid follows... */}
      <section className="py-16 md:py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-secondary uppercase text-3xl md:text-5xl tracking-tighter">
              Ihre Vorteile <br /><span className="text-primary">bei uns</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {benefits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full border-none shadow-sm bg-[#fdfcfb] rounded-2xl md:rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary transition-colors shadow-inner">
                      <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs md:text-lg font-bold text-secondary uppercase leading-tight tracking-tight">{item.title}</h4>
                      <p className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest mb-1">{item.sub}</p>
                      <p className="text-[7px] md:text-xs text-muted-foreground font-black uppercase tracking-widest leading-tight opacity-60">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-16 md:py-32 bg-[#FDF7F2] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-secondary uppercase text-3xl md:text-5xl tracking-tighter">
                  Das sollten <br /><span className="text-primary">Sie wissen</span>
                </h2>
              </div>
              <p className="text-secondary/80 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-widest">
                Wir setzen auf ein faires, erfolgsbasiertes Modell für maximale Freiheit.
              </p>
            </div>

            <div className="space-y-3">
              {importantInfo.map((text, i) => (
                <div key={i} className="flex items-center gap-5 p-5 md:p-6 bg-white rounded-2xl border border-border group hover:border-primary transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-[9px] md:text-sm font-bold text-secondary uppercase tracking-widest leading-tight">
                    {text}
                  </p>
                </div>
              ))}
              <div className="pt-6">
                <Link href="/fam-trip" className="inline-flex items-center gap-3 text-[9px] font-bold text-primary hover:text-secondary transition-colors uppercase tracking-widest border-b border-primary/20 pb-1">
                  Details zum FAM-Trip <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AiCTA />
    </div>
  );
}
