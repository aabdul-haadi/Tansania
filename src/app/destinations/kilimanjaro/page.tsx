"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Map, 
  Star, 
  ChevronRight,
  TrendingUp,
  Video,
  LayoutGrid,
  Wind,
  Sun,
  Timer,
  Award,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ContactSection } from '@/components/sections/ContactSection';

const youtubeVideos = [
  { id: "DuwK6uDjHAA", title: "Kilimanjaro Summit Expedition" },
  { id: "tpPEIbAeF34", title: "Machame Route Experience" },
  { id: "uVilAKUc8zE", title: "Lemosho Route Views" }
];

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
    <div className="bg-[#fdfcfb] min-h-screen pb-20">
      {/* Immersive Header */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
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
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              Das Dach Afrikas
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-normal text-white mb-6 leading-tight drop-shadow-2xl tracking-tighter">
              Besteigen Sie das <br />
              <span className="text-primary">Dach Afrikas</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed px-4">
              Finde deine perfekte Kilimandscharo-Route & Traumreise. Wähle aus einzigartigen Wegen zum Uhuru Peak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
              <Mountain className="w-4 h-4" /> Kilimandscharo Abenteuer
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-normal leading-tight text-secondary uppercase tracking-tighter">
              Was macht den Kilimandscharo <br /><span className="text-primary">zum ultimativen Ziel?</span>
            </h2>
            <p className="text-muted-foreground font-normal leading-[20px] text-[14px]">
              Der Kilimandscharo vereint atemberaubende Landschaften, eine echte körperliche und mentale Herausforderung und den Nervenkitzel, den höchsten Gipfel Afrikas zu erklimmen — und das ganz ohne technische Kletterkenntnisse.
            </p>
            <p className="text-muted-foreground font-normal leading-[20px] text-[14px]">
              Seine einzigartigen Routen führen dich durch üppige Regenwälder, alpine Wüsten und eisige Gletscher und bieten dir auf einer einzigen Reise fünf verschiedene Klimazonen.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1000" alt="Kili Trekking" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="mb-16">
            <h3 className="font-headline text-3xl md:text-5xl font-normal mb-4 tracking-tighter">Kilimandscharo Quick Facts</h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: TrendingUp, label: "Höhe", val: "5.895 Meter", sub: "Höchster Berg Afrikas" },
              { icon: Map, label: "Routen", val: "7 Aufstiegsrouten", sub: "Offizielle Pfade" },
              { icon: Timer, label: "Dauer", val: "5-10 Tage", sub: "Je nach Route" },
              { icon: Wind, label: "Klimazonen", val: "5 Zonen", sub: "Auf einem Berg" },
              { icon: Award, label: "Erfolgsquote", val: "Bis zu 90%", sub: "Mit Akklimatisierung" }
            ].map((fact, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[10px] uppercase font-bold text-primary tracking-widest">{fact.label}</p>
                <p className="font-bold text-xl text-white">{fact.val}</p>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{fact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Package Catalog */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Expeditions-Registry</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal leading-tight text-secondary tracking-tighter uppercase">Wählen Sie Ihre <br /><span className="text-primary">Gipfeltour</span></h2>
          </div>
          <p className="text-[14px] leading-[20px] text-muted-foreground font-normal max-w-[200px] border-l-2 border-primary/20 pl-4 lg:mb-2">
            Ob gemütlich, spektakulär oder herausfordernd – hier beginnt deine Reise zum Dach Afrikas.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Syncing Gipfelstürmer...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {kiliPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Route Finder Guide */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl md:text-6xl font-normal mb-4 text-secondary tracking-tighter uppercase">Welche Route passt <span className="text-primary">zu dir?</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Jede der Hauptrouten bietet eine einzigartige Kombination.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { q: "Beste für Anfänger?", r: "Marangu- oder Machame-Route", d: "Leicht zu folgen, gute Infrastruktur und angenehmes Tempo." },
            { q: "Schönste Landschaft?", r: "Lemosho- oder Machame-Route", d: "Dramatische Panoramen und vielfältige Ökosysteme." },
            { q: "Kleines Budget?", r: "Marangu-Route", d: "Kürzeste Dauer, Hüttenübernachtungen und geringere Gesamtkosten." },
            { q: "Moderate Wanderer?", r: "Machame- oder Lemosho-Route", d: "Gute Balance aus Herausforderung und Akklimatisierung." },
            { q: "Erfahrene Bergsteiger?", r: "Umbwe-Route", d: "Steil, direkt und körperlich anspruchsvoll." },
            { q: "Höchste Erfolgsquote?", r: "8 Tage Lemosho-Route", d: "Optimale Akklimatisierung durch längere Aufstiegszeit." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[3rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">{item.q}</h4>
              <p className="font-headline text-xl font-normal mb-4 text-secondary tracking-tight">{item.r}</p>
              <p className="text-[14px] leading-[20px] text-muted-foreground font-normal">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-normal mb-4 text-secondary tracking-tighter uppercase">Kilimandscharo <span className="text-primary">FAQ</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes zur Besteigung</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Wie hoch ist der Kilimandscharo?", a: "Der Kilimandscharo ist mit 5.895 Metern der höchste Berg Afrikas." },
            { q: "Brauche ich spezielle Ausrüstung?", a: "Ja, Sie benötigen professionelle Wanderschuhe, Schlafsack, Thermokleidung und Regenbekleidung." },
            { q: "Wie viel kostet eine Besteigung?", a: "Kosten variieren je nach Route und Dauer, meist zwischen 2.500 € und 4.500 €." },
            { q: "Gibt es Altersbeschränkungen?", a: "Offiziell ab 10 Jahren. Wir empfehlen eine Besteigung ab 12-14 Jahren." },
            { q: "Wie ist die Verpflegung?", a: "Wir bieten Vollpension mit täglich frisch zubereiteten heißen Mahlzeiten." },
            { q: "Wie sicher ist die Besteigung?", a: "Sicherheit steht an erster Stelle. Unsere Guides führen tägliche Gesundheitschecks durch." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-2xl px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-normal text-lg py-6 hover:no-underline hover:text-primary text-left text-secondary transition-colors tracking-tight">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
