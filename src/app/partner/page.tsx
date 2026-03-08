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
    <div className="bg-[#fdfcfb] min-h-screen font-body">
      {/* Hero Section */}
      <header className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?q=80&w=1920"
          alt="Travel Advisor Career"
          fill
          priority
          className="object-cover opacity-40 brightness-75"
          data-ai-hint="luxury lounge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-xl">
              Starten Sie Ihre Karriere
            </Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white mb-6 leading-none uppercase tracking-tighter">
              Werden Sie <br />
              <span className="text-primary">Reiseberater:in</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-xl text-white/90 font-black uppercase tracking-widest leading-relaxed">
              Flexibel, unabhängig und mit Leidenschaft fürs Reisen!
            </p>
          </motion.div>
        </div>
      </header>

      {/* Intro Narrative */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Ihre Reise</span>
              <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight text-secondary uppercase tracking-tight">
                Zu einer <br /><span className="text-primary">erfüllenden Karriere</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-black leading-relaxed text-sm md:text-lg uppercase tracking-widest">
              Lieben Sie es, zu reisen und anderen zu ihrem Traumurlaub zu verhelfen? Werden Sie selbstständige:r Reiseberater:in bei Tansania Reiseabenteuer und gestalten Sie unvergessliche Erlebnisse.
            </p>
            <Button asChild className="rounded-full px-10 h-14 font-black text-[10px] uppercase tracking-widest shadow-xl">
              <Link href="/contact">Jetzt Bewerben</Link>
            </Button>
          </motion.div>

          <div className="space-y-4">
            <h3 className="font-headline text-xl font-bold text-secondary uppercase mb-6">Was Sie mitbringen sollten</h3>
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

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Unser Support</span>
            <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">
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
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-headline text-xs md:text-lg font-bold text-secondary uppercase leading-tight">{item.title}</h4>
                      <p className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest mb-1">{item.sub}</p>
                      <p className="text-[7px] md:text-xs text-muted-foreground font-black uppercase tracking-widest leading-tight">
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

      {/* Commercial Model / Transparency */}
      <section className="py-16 md:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Transparenz</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none">
                  Das sollten <br /><span className="text-primary">Sie wissen</span>
                </h2>
              </div>
              <p className="text-white/80 font-bold text-sm md:text-lg leading-relaxed uppercase tracking-widest">
                Wir setzen auf ein faires, erfolgsbasiertes Modell für maximale Freiheit.
              </p>
              <div className="pt-4 hidden lg:block">
                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-start gap-6">
                  <Zap className="w-10 h-10 text-primary shrink-0" />
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest leading-relaxed">
                    Unser Modell ermöglicht es Ihnen, Ihr eigener Chef zu sein, während Sie die Infrastruktur eines etablierten Experten-Teams nutzen.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {importantInfo.map((text, i) => (
                <div key={i} className="flex items-center gap-5 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-[9px] md:text-sm font-black text-white uppercase tracking-widest leading-tight">
                    {text}
                  </p>
                </div>
              ))}
              <div className="pt-6">
                <Link href="/fam-trip" className="inline-flex items-center gap-3 text-[9px] font-black text-primary hover:text-white transition-colors uppercase tracking-widest border-b border-primary/20 pb-1">
                  Details zum FAM-Trip <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-4xl text-center">
        <div className="space-y-8">
          <div className="w-16 h-16 rounded-[1.5rem] bg-muted mx-auto flex items-center justify-center">
            <Compass className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">
            Bereit für den <br /><span className="text-primary">nächsten Schritt?</span>
          </h2>
          <p className="text-muted-foreground font-black text-sm md:text-xl uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Werden Sie Teil unseres Teams und gestalten Sie unvergessliche Reiseerlebnisse in Afrika. Wir freuen uns auf Sie!
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-12 h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl group">
              Kontaktieren Sie uns <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
