
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Clock, 
  Map, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ChevronRight,
  TrendingUp,
  Backpack,
  Utensils,
  Video,
  LayoutGrid
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';

export default function KilimanjaroPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const kiliPackages = packages?.filter(p => 
    ['KILIMANDSCHARO KOMBI', 'KILIMANDSCHARO', 'MOUNT MERU'].includes(p.category)
  ) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Header */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Kilimanjaro Summit" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="mount kilimanjaro"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
              Das Dach Afrikas
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Besteigen Sie den <br />
              <span className="text-primary italic">Kilimandscharo</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-light leading-relaxed px-4">
              Finde deine perfekte Route & Traumreise. Wähle aus einzigartigen Wegen zum Uhuru Peak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Routen & Touren</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Finden Sie Ihre <br /><span className="text-primary italic">Ideale Route</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4">
            Ob gemütlich, spektakulär oder herausfordernd – hier beginnt deine unvergessliche Reise zum höchsten Punkt Afrikas.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Synchronizing Expeditions...</div>
        ) : kiliPackages.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border border-dashed rounded-[3rem]">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="font-bold text-sm">Keine Kilimandscharo-Routen gefunden.</p>
            <p className="text-xs">Bitte initialisieren Sie die CMS-Daten im Admin-Panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {kiliPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Quick Facts Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <TrendingUp className="w-4 h-4" /> Kilimandscharo Quick Facts
              </div>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">
                Was macht den Kili <br /><span className="text-primary italic">so besonders?</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Der Kilimandscharo vereint atemberaubende Landschaften mit einer echten Herausforderung. Erleben Sie fünf verschiedene Klimazonen auf einem einzigen Berg – vom Regenwald bis zum ewigen Eis.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: "Höhe", val: "5.895 Meter" },
                  { label: "Routen", val: "7 Hauptrouten" },
                  { label: "Dauer", val: "5-10 Tage" },
                  { label: "Klimazonen", val: "5 Zonen" },
                  { label: "Erfolgsquote", val: "Bis zu 90%" },
                  { label: "Level", val: "Wander-Gipfel" }
                ].map((fact, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-primary tracking-widest">{fact.label}</p>
                    <p className="font-bold text-lg text-white">{fact.val}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
              <Image src="https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?q=80&w=800" alt="Kili Video" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Selection Guide */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Vergleich</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Welche Route ist <span className="text-primary italic">die Richtige?</span></h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Jeder Bergsteiger-Typ findet hier seinen Weg.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Für Anfänger", routes: "Marangu & Machame", desc: "Leicht zu folgen, gute Infrastruktur und angenehmes Tempo." },
            { title: "Spektakulärste Sicht", routes: "Lemosho & Machame", desc: "Dramatische Panoramen und vielfältige Ökosysteme." },
            { title: "Budget-Option", routes: "Marangu Route", desc: "Kürzeste Dauer, Hüttenübernachtung und geringere Kosten." },
            { title: "Hohe Erfolgsquote", routes: "Lemosho 8 Tage", desc: "Optimale Akklimatisierung durch längere Aufstiegszeit." },
            { title: "Für Erfahrene", routes: "Umbwe Route", desc: "Steil, direkt und körperlich extrem anspruchsvoll." },
            { title: "Ruhe & Natur", routes: "Rongai Route", desc: "Abgeschieden auf der Nordseite, weniger Menschenmassen." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">{item.title}</h4>
              <p className="font-headline text-xl font-bold mb-4 text-secondary">{item.routes}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden mx-4 md:mx-10 rounded-[3rem] md:rounded-[5rem] mb-12 shadow-2xl">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
              <Image src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800" alt="Preparation" fill className="object-cover" />
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Training & Gear</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">Wie bereite ich <br /><span className="text-primary italic">mich vor?</span></h2>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-lg italic">
                "Das Besteigen des Kilimandscharo ist ein unvergessliches Abenteuer, erfordert jedoch eine gute körperliche und mentale Vorbereitung."
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm text-white/80">Regelmäßige, lange Wanderungen (6-7h) in den Monaten davor.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm text-white/80">Schrittweise Steigerung der Ausdauer und Akklimatisierung.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm text-white/80">Gute mentale Einstellung – der Berg wird dich fordern.</p>
                </div>
              </div>
              
              <Button size="lg" className="rounded-full px-10 h-16 font-bold bg-primary text-white shadow-xl hover:scale-105 transition-transform">
                Packliste PDF <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-secondary">Fragen zum <span className="text-primary italic">Trekking</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes zur Besteigung</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Wie hoch ist der Kilimandscharo?", a: "Der Gipfel (Uhuru Peak) liegt auf 5.895 Metern über dem Meeresspiegel." },
            { q: "Brauche ich spezielle Ausrüstung?", a: "Ja, warme Kleidung (Zwiebelprinzip), Wanderschuhe, Schlafsack und Wanderstöcke sind essenziell." },
            { q: "Wie viele Tage sollte ich einplanen?", a: "Wir empfehlen mindestens 7 Tage für eine bessere Akklimatisierung und höhere Erfolgschancen." },
            { q: "Wie sicher ist eine Kilimandscharo Besteigung?", a: "Unsere Guides sind in Höhenrettung geschult und führen tägliche Gesundheitschecks durch." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline hover:text-primary text-left text-secondary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base font-light leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
