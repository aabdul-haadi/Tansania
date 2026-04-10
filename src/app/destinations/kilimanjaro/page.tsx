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
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';

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

  // Filter for climbing specific packages
  const kiliPackages = packages?.filter(p => 
    ['KILIMANDSCHARO KOMBI', 'KILIMANDSCHARO', 'MOUNT MERU', 'Expedition'].includes(p.category?.toUpperCase())
  ) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 01 IMMERSIVE HERO: The Roof of Africa */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Kilimandscharo Besteigung" 
          fill 
          className="object-cover brightness-[0.6] scale-105"
          priority
          data-ai-hint="mount kilimanjaro"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <Badge className="bg-primary text-white border-none px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl">
              Das Dach Afrikas
            </Badge>
            <h1 className="font-headline text-white leading-tight">
              Kilimandscharo <br />
              <span className="text-primary">Besteigung</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 font-light text-sm md:text-xl lg:text-[24px] lg:leading-[39px] tracking-wide">
              Finden Sie Ihre perfekte Route zum Uhuru Peak. Erleben Sie eine Expedition, die über den Wolken beginnt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 INTRO NARRATIVE */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <Mountain className="w-4 h-4" /> Expeditions-Registry
              </div>
              <h2 className="font-headline text-secondary">
                Was macht den Berg <br /><span className="text-primary">so legendär?</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground font-normal leading-[20px] text-[14px] tracking-normal border-l-4 border-primary/20 pl-8">
              <p>
                Der Kilimandscharo vereint atemberaubende Landschaften, eine echte körperliche Herausforderung und den Nervenkitzel, den höchsten Gipfel Afrikas zu erklimmen — ganz ohne technische Kletterkenntnisse.
              </p>
              <p>
                Unsere spezialisierten Besteigungs-Protokolle führen Sie durch fünf verschiedene Klimazonen – von üppigen Regenwäldern bis hin zu den ewigen Gletschern am Kraterrand.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[16/10] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border border-border/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1000" 
              alt="Kili Trekking Team" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 03 QUICK FACTS REGISTRY */}
      <section className="py-12 md:py-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-headline text-white">Kilimandscharo Quick Facts</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-40" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {[
              { icon: TrendingUp, label: "Höhe", val: "5.895 Meter", sub: "Uhuru Peak" },
              { icon: Map, label: "Routen", val: "7 Pfade", sub: "Offiziell" },
              { icon: Timer, label: "Dauer", val: "5-10 Tage", sub: "Akklimatisierung" },
              { icon: Wind, label: "Klimazonen", val: "5 Zonen", sub: "Vielfalt" },
              { icon: Award, label: "Erfolg", val: "90%", sub: "Mit SDL-Profi" }
            ].map((fact, i) => (
              <div key={i} className="space-y-4 text-center group">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 border border-primary/10">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">{fact.label}</p>
                  <p className="font-bold text-xl text-white tracking-tight">{fact.val}</p>
                  <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-1">{fact.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 DYNAMIC PACKAGE CATALOG */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Aktuelle Expeditionen</span>
            <h2 className="font-headline text-secondary leading-tight">Wählen Sie Ihre <br /><span className="text-primary">Gipfeltour</span></h2>
          </div>
          <p className="text-[14px] leading-[20px] text-muted-foreground font-normal max-w-[240px] border-l-2 border-primary/20 pl-6 hidden md:block">
            Ob klassisch oder spektakulär – hier beginnt Ihr Weg zum Dach Afrikas.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Syncing Gipfelstürmer...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {kiliPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* 05 ROUTE FINDER GUIDE */}
      <section className="py-12 md:py-16 bg-[#FDF7F2] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-secondary">Welche Route passt zu Ihnen?</h2>
            <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Strategische Auswahl für maximalen Erfolg</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { q: "Beste für Einsteiger?", r: "Marangu- oder Machame-Route", d: "Leicht zu folgen, gute Infrastruktur und angenehmes Tempo." },
              { q: "Schönste Landschaften?", r: "Lemosho- oder Machame-Route", d: "Dramatische Panoramen und vielfältige Ökosysteme auf dem Weg." },
              { q: "Kleines Budget?", r: "Marangu-Route", d: "Kürzeste Dauer, Hüttenübernachtungen und geringere Logistikkosten." },
              { q: "Moderate Wanderer?", r: "Machame- oder Lemosho-Route", d: "Gute Balance aus Herausforderung und Höhen-Akklimatisierung." },
              { q: "Erfahrene Bergsteiger?", r: "Umbwe-Route", d: "Steil, direkt und körperlich extrem anspruchsvoll. Der direkte Weg." },
              { q: "Höchste Erfolgsquote?", r: "8 Tage Lemosho-Route", d: "Optimale Akklimatisierung durch eine längere Aufstiegszeit." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 md:p-10 bg-white rounded-[2rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group">
                <h4 className="text-primary font-bold text-[9px] uppercase tracking-[0.2em] mb-3">{item.q}</h4>
                <p className="font-headline text-xl md:text-2xl font-medium text-secondary mb-4 tracking-tight leading-tight">{item.r}</p>
                <p className="text-[14px] leading-[20px] text-muted-foreground font-normal">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 EXPEDITION FAQ */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-secondary">Häufig gestellte Fragen</h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes zur Besteigung</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Wie hoch ist der Kilimandscharo?", a: "Der Kilimandscharo ist mit 5.895 Metern (Uhuru Peak) der höchste Berg Afrikas und der höchste freistehende Berg der Welt." },
            { q: "Brauche ich spezielle Ausrüstung?", a: "Ja, eine professionelle Trekking-Ausrüstung ist essenziell. Dazu gehören eingelaufene Wanderschuhe, Thermokleidung, ein Schlafsack bis -15°C und Regenbekleidung. Wir stellen Ihnen eine detaillierte Packliste zur Verfügung." },
            { q: "Wie viel kostet eine Besteigung?", a: "Die Kosten variieren je nach Route und Dauer. In der Regel liegen hochwertige Besteigungen mit erstklassiger Betreuung zwischen 2.800 € und 4.500 € pro Person." },
            { q: "Gibt es Altersbeschränkungen?", a: "Das offizielle Mindestalter liegt bei 10 Jahren. Wir empfehlen eine Besteigung jedoch erst ab einem Alter von 12-14 Jahren und nach Rücksprache mit einem Arzt." },
            { q: "Wie ist die Verpflegung am Berg?", a: "Unsere Teams bereiten täglich drei frische, warme und energiereiche Mahlzeiten zu. Wir achten auf hohe Qualität und können auch vegetarische oder vegane Wünsche berücksichtigen." },
            { q: "Wie sicher ist die Kilimandscharo Besteigung?", a: "Sicherheit ist unsere oberste Priorität. Unsere Guides führen tägliche Gesundheitschecks durch, haben Sauerstoff für Notfälle dabei und sind in Höhenrettung geschult." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-xl px-6 md:px-10 shadow-sm border border-transparent hover:border-border transition-all">
              <AccordionTrigger className="font-normal text-[14px] leading-[20px] md:text-base py-5 hover:no-underline text-left text-secondary transition-colors tracking-tight">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 07 FINAL CALL TO ACTION */}
      <ContactSection />
    </div>
  );
}
