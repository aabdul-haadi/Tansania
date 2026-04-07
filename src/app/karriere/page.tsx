
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Clock, 
  Plane, 
  Users, 
  GraduationCap, 
  Tag, 
  Globe, 
  Coffee,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  MapPin,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AiCTA } from '@/components/sections/AiCTA';

const benefits = [
  { 
    icon: Heart, 
    title: "Sinnvolle Arbeit", 
    desc: "Du gestaltest unvergessliche Reisen und trägst dazu bei, das Bild Afrikas positiv zu verändern." 
  },
  { 
    icon: Clock, 
    title: "Flexible Arbeitsmodelle", 
    desc: "Ob Teilzeit, Remote oder vor Ort in Berlin – wir passen die Arbeit an dein Leben an." 
  },
  { 
    icon: Plane, 
    title: "Fam-Trips", 
    desc: "Als Teil unseres Teams hast du die Chance, unsere Reiseziele in Tansania hautnah zu erleben." 
  },
  { 
    icon: Users, 
    title: "Flache Hierarchien", 
    desc: "Hier zählt jede Meinung. Du kannst Prozesse mitgestalten und eigene Ideen einbringen." 
  },
  { 
    icon: GraduationCap, 
    title: "Weiterbildung", 
    desc: "Ob Social Media oder Produktentwicklung – wir fördern deine Fähigkeiten durch Schulungen." 
  },
  { 
    icon: Tag, 
    title: "Attraktive Rabatte", 
    desc: "Deine eigene Reise nach Tansania kann mit exklusiven Rabatten realisiert werden." 
  },
  { 
    icon: Globe, 
    title: "Internationales Netzwerk", 
    desc: "Arbeite täglich mit Kolleg:innen aus Deutschland, Tansania und den USA zusammen." 
  },
  { 
    icon: Coffee, 
    title: "Offene Atmosphäre", 
    desc: "Wir sind ein leidenschaftliches Team mit starker Verbindung zur ostafrikanischen Kultur." 
  },
];

const targetAudience = [
  "Afrika lieben und ihre Begeisterung in sinnvolle Reisen verwandeln möchten",
  "nachhaltigen Tourismus nicht nur verstehen, sondern aktiv mitgestalten wollen",
  "eigenverantwortlich arbeiten, aber den Rückhalt eines engagierten Teams schätzen",
  "mehr als nur einen Job suchen – sondern eine Aufgabe mit Sinn und Wirkung"
];

export default function CareersPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* COMPACT DARK HERO */}
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-secondary border-b border-white/5 overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="Tansania Safari Karriere"
          fill
          priority
          className="object-cover opacity-30 brightness-50 scale-105"
          data-ai-hint="safari office"
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
              Karriere bei <br />
              <span className="text-primary">Tansania Reiseabenteuer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
              Arbeiten mit Sinn. Reisen gestalten. Afrika erleben.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-secondary uppercase text-3xl md:text-5xl tracking-tighter">
            Was wir dir bieten – <br /><span className="text-primary">Deine Vorteile</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full border-none shadow-sm bg-white rounded-2xl md:rounded-[2.5rem] hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
                <CardContent className="p-5 md:p-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary transition-colors shadow-inner">
                    <benefit.icon className="w-5 h-5 md:w-7 md:h-7 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs md:text-lg font-bold text-secondary uppercase leading-tight tracking-tight">{benefit.title}</h4>
                    <p className="text-[8px] md:text-xs text-muted-foreground font-black uppercase tracking-widest leading-relaxed opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Target Logic */}
      <section className="py-16 md:py-32 bg-[#FDF7F2] relative overflow-hidden border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-secondary uppercase text-3xl md:text-5xl tracking-tighter">
                  Für wen ist das <br /><span className="text-primary">der richtige Ort?</span>
                </h2>
              </div>
              <p className="text-secondary/80 font-bold text-xs md:text-sm leading-relaxed uppercase tracking-widest">
                Wir suchen Menschen, die nicht nur einen Job, sondern eine Berufung finden wollen.
              </p>
            </div>

            <div className="space-y-4">
              {targetAudience.map((text, i) => (
                <div key={i} className="flex gap-5 p-5 md:p-8 bg-white rounded-2xl md:rounded-[2rem] border border-border group hover:border-primary transition-all shadow-sm">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs md:text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-[10px] md:text-sm font-bold text-secondary uppercase tracking-widest leading-relaxed opacity-80">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-secondary uppercase text-3xl md:text-5xl tracking-tighter">Aktuelle <br /><span className="text-primary">Stellenangebote</span></h2>
        </div>

        <div className="space-y-4">
          <Card className="border-none shadow-sm rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white hover:shadow-xl transition-all duration-500 border border-border group">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[2.5rem] bg-primary/10 flex items-center justify-center shadow-inner">
                    <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-normal text-secondary uppercase leading-none mb-2 group-hover:text-primary transition-colors tracking-tight">Kundenberater/in für Afrika-Reisen (m/w/d)</h3>
                    <div className="flex flex-wrap items-center gap-4 text-[8px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Vollzeit</span>
                      <span className="flex items-center gap-1.5"><Sparkles className="w-3 h-3" /> Fokus: Tansania & Sansibar</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Standort: Berlin</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full md:w-auto rounded-xl px-10 h-11 md:h-14 font-black text-[10px] uppercase tracking-[0.3em] shadow-xl group border-none">
                  Stelle ansehen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 md:mt-24 p-8 md:p-16 bg-white rounded-[3rem] text-center border-2 border-dashed border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Mail className="w-48 h-48 text-secondary" />
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-secondary uppercase text-2xl md:text-4xl tracking-tighter">Nichts Passendes dabei?</h3>
            <p className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest leading-relaxed opacity-80">
              Gerne kannst du auch eine Initiativbewerbung an uns schicken. Wir sind immer auf der Suche nach leidenschaftlichen Talenten.
            </p>
            <div className="pt-4">
              <a href="mailto:info@tansania-reiseabenteuer.de" className="inline-flex items-center gap-3 text-sm md:text-lg font-black text-primary hover:text-secondary transition-colors uppercase tracking-[0.2em] border-b-2 border-primary/20 pb-1">
                info@tansania-reiseabenteuer.de <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <AiCTA />
    </div>
  );
}
