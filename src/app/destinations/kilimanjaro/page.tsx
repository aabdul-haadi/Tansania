
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Map, 
  Star, 
  TrendingUp,
  Wind,
  Timer,
  Award,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Zap,
  ArrowRight,
  ChevronRight,
  Plus,
  Users,
  Calendar,
  Play
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const kiliPackages = [
  {
    id: '13-tage-kilimandscharo-kombi',
    title: '13 Tage Kilimandscharo, Serengeti und Sansibar',
    slug: '13-tage-kilimandscharo-kombi',
    category: 'Kilimandscharo Kombi',
    durationDays: 13,
    startingPrice: 5299,
    highlights: ['Afrikas Dach erklimmen', 'Big Five hautnah erleben', 'Sansibars Strände genießen', 'Spektakuläre Naturpanoramen'],
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    tag: 'Meistverkauft',
    rating: 5.0
  },
  {
    id: '8-tage-marangu-komfortabel-zum-gipfel',
    title: '8 Tage Marangu: Komfortabel zum Gipfel Afrikas',
    slug: '8-tage-marangu-komfortabel-zum-gipfel',
    category: 'Kilimandscharo',
    durationDays: 8,
    startingPrice: 3199,
    highlights: ['Hütten statt Zelte', 'Sonnenaufgang am Kraterrand', 'Uhuru Peak erreichen', 'Dschungel bis Eisfelder'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    tag: 'Hütten Route',
    rating: 4.9
  },
  {
    id: '9-tage-machame-der-abenteuer-weg',
    title: '9 Tage Machame: Die Abenteurer-Route zum Gipfel',
    slug: '9-tage-machame-der-abenteuer-weg',
    category: 'Kilimandscharo',
    durationDays: 9,
    startingPrice: 2499,
    highlights: ['Whiskey Route erleben', 'Vielfältige Landschaften', 'Optimal akklimatisiert', 'Uhuru Peak erklimmen'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    tag: 'Whiskey Route',
    rating: 4.9
  },
  {
    id: '10-tage-lemosho-unberuehrte-wege',
    title: '10 Tage Lemosho: Unberührte Wege zum höchsten Punkt Afrikas',
    slug: '10-tage-lemosho-unberuehrte-wege',
    category: 'Kilimandscharo',
    durationDays: 10,
    startingPrice: 3599,
    highlights: ['Wenig begangene Route', 'Westseite Kilimandscharos', 'Höchste Erfolgsquote', 'Unvergessliche Ausblicke'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    tag: 'Premium Route',
    rating: 5.0
  },
  {
    id: '8-tage-rongai-dein-stiller-weg',
    title: '8 Tage Rongai: Dein stiller Weg zum Gipfel',
    slug: '8-tage-rongai-dein-stiller-weg',
    category: 'Kilimandscharo',
    durationDays: 8,
    startingPrice: 2999,
    highlights: ['Nordseite Kilimandscharo', 'Abgeschieden & ruhig', 'Tierbeobachtungen unterwegs', 'Panorama ohne Menschenmassen'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    tag: 'Ruhige Route',
    rating: 4.8
  },
  {
    id: '5-tage-mount-meru-besteigung',
    title: '5 Tage Mount Meru: Dein Einstieg ins große Gipfelabenteuer',
    slug: '5-tage-mount-meru-besteigung',
    category: 'Mount Meru',
    durationDays: 5,
    startingPrice: 2699,
    highlights: ['Afrikas zweithöchster Gipfel', 'Perfekte Kilimanjaro-Vorbereitung', 'Wildtiere hautnah erleben', 'Sonnenaufgang über Savanne'],
    imageUrl: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800',
    tag: 'Einstiegsroute',
    rating: 4.9
  }
];

export default function KilimanjaroPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 COMPACT PRESTIGE HERO */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
            alt="Kilimandscharo Besteigung" 
            fill 
            priority
            className="object-cover brightness-[0.6]"
            data-ai-hint="mount kilimanjaro"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
        
        <div className="container relative z-30 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-6"
          >
            <Badge className="bg-primary text-white border-none font-bold text-[10px] uppercase tracking-[0.4em] px-6 py-2 shadow-2xl">
              Das Dach Afrikas
            </Badge>
            <h1 className="font-headline text-white leading-none text-3xl sm:text-4xl md:text-6xl lg:text-8xl uppercase">
              Kilimandscharo <br /> Expeditionen
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 font-bold text-[10px] md:text-lg uppercase tracking-widest leading-relaxed">
              Finden Sie Ihre perfekte Route zum Uhuru Peak. <br />Eine Expedition, die über den Wolken beginnt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 INTRO NARRATIVE */}
      <section className="py-8 md:py-16 container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary mb-6">
          Finde deine perfekte Kilimandscharo-Route & Traumreise
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
          Wähle aus einzigartigen Routen und Erlebnissen die Tour, die zu deinem Abenteuergeist passt. Ob gemütlich, spektakulär oder herausfordernd – hier beginnt deine unvergessliche Reise zum Dach Afrikas.
        </p>
      </section>

      {/* 03 PACKAGE REGISTRY GRID */}
      <section className="py-8 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">
            Erleben Sie das ultimative Abenteuer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
          {kiliPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 04 EXPERT NARRATIVE */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">National-Registry</span>
                <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
                  Was macht den Kilimandscharo zum ultimativen Abenteuerziel?
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                <p>
                  Der Kilimandscharo vereint atemberaubende Landschaften, eine echte körperliche und mentale Herausforderung und den Nervenkitzel, den höchsten Gipfel Afrikas zu erklimmen — und das ganz ohne technische Kletterkenntnisse. Seine einzigartigen Routen führen dich durch üppige Regenwälder, alpine Wüsten und eisige Gletscher und bieten dir auf einer einzigen Reise fünf verschiedene Klimazonen.
                </p>
                <p>
                  Für entschlossene Anfänger genauso zugänglich wie für erfahrene Bergsteiger, ist der Kilimandscharo mehr als nur ein Berg — es ist ein unvergessliches Abenteuer, das deine Grenzen testet und dir Erinnerungen fürs Leben schenkt. Die Vielfalt der Kilimandscharo-Route ermöglicht es, für jeden Erfahrungsgrad und jedes Budget die passende Herausforderung zu finden.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200" alt="Kilimanjaro Peak" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Uhuru Peak Registry</p>
                <h4 className="text-2xl font-headline font-bold">5.895 Meter Freiheit</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 QUICK FACTS REGISTRY */}
      <section className="py-12 md:py-20 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">Kilimandscharo Quick Facts</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {[
              { icon: TrendingUp, label: "Höhe", val: "5.895 Meter", sub: "Uhuru Peak" },
              { icon: Map, label: "Routen", val: "7 Pfade", sub: "Offiziell" },
              { icon: Timer, label: "Dauer", val: "5-10 Tage", sub: "Akklimatisierung" },
              { icon: Wind, label: "Klimazonen", val: "5 Zonen", sub: "Biodiversität" },
              { icon: Award, label: "Erfolgsquote", val: "Bis zu 90%", sub: "Mit SDL-Profi" }
            ].map((fact, i) => (
              <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-white shadow-sm border border-border/50 text-center space-y-4 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-primary mb-1 tracking-widest">{fact.label}</p>
                  <p className="font-bold text-sm md:text-base text-secondary uppercase leading-none">{fact.val}</p>
                  <p className="text-[8px] text-muted-foreground font-bold mt-1 uppercase tracking-widest opacity-60">{fact.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 VIDEO REGISTRY */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-12">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Erleben Sie die Magie des Kilimandscharo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              "https://www.youtube.com/embed/uVilAKUc8zE",
              "https://www.youtube.com/embed/DuwK6uDjHAA",
              "https://www.youtube.com/embed/tpPEIbAeF34"
            ].map((url, i) => (
              <div key={i} className="relative aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-black border-4 border-white group">
                <iframe src={url} className="absolute inset-0 w-full h-full border-none" allowFullScreen />
                <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 ROUTE DECISION MATRIX */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary mb-6">Kilimandscharo Routen & Reiseverläufe</h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-12">Welche Route ist die richtige für dich? Entdecke unseren Entscheidungs-Guide.</p>
          
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Welche Route ist am besten für Anfänger?", a: "Marangu- oder Machame-Route — leicht zu folgen, gute Infrastruktur und angenehmes Tempo." },
              { q: "Welche Route bietet die spektakulärste Landschaft?", a: "Lemosho- oder Machame-Route — beide bieten dramatische Panoramen und vielfältige Ökosysteme." },
              { q: "Welche Route ist am besten für Anfänger mit kleinem Budget?", a: "Marangu-Route — kürzeste Dauer, Hüttenübernachtungen und geringere Gesamtkosten." },
              { q: "Welche Route passt für moderate Wanderer?", a: "Machame- oder Lemosho-Route — gute Balance aus Herausforderung und Akklimatisierung." },
              { q: "Welche Route ist am besten für erfahrene Bergsteiger?", a: "Umbwe-Route — steil, direkt und körperlich anspruchsvoll." },
              { q: "Welche Route ist die beliebteste?", a: "Machame-Route — viel begangen, landschaftlich reizvoll und mit guter Erfolgsquote." },
              { q: "Welche Route ist die längste?", a: "Northern Circuit — ideal für alle, die Einsamkeit und maximale Akklimatisierungszeit suchen." },
              { q: "Welche Route eignet sich während der Regenzeit?", a: "Rongai-Route — startet auf der trockeneren Nordseite des Berges." },
              { q: "Welche Route hat die höchste Erfolgsquote?", a: "8 Tage Lemosho-Route oder 9 Tage Northern Circuit — beide bieten optimale Akklimatisierung." }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`route-${idx}`} className="border-none bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-border group">
                <AccordionTrigger className="font-bold text-sm md:text-base py-5 hover:no-underline text-left text-secondary transition-colors tracking-tight [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-6 uppercase tracking-widest">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 08 HIGHLIGHT GALLERY */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">Highlights Galerie</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group">
                <Image src={`https://picsum.photos/seed/kili-gal-${i}/800/800`} alt={`Highlight ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 DETAILED ROUTES REGISTRY */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl space-y-24 md:space-y-40">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Beste Kilimandscharo Routen für ein unvergessliches Abenteuer</h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              Es gibt sieben offizielle Kilimanjaro-Routen, jede mit eigenen Vorteilen und Herausforderungen. Sie unterscheiden sich in Länge, Schwierigkeitsgrad, Landschaft, Besucherandrang, Art der Unterkünfte und vielem mehr. Die Wahl der richtigen Route für Ihr Fitnesslevel, Ihr Budget und Ihre Vorlieben ist der erste Schritt zu einer erfolgreichen Besteigung.
            </p>
          </div>

          {[
            {
              id: 'machame',
              title: 'Machame-Route',
              desc: 'Die Machame-Route – auch bekannt als „Whiskey Route" – gehört zu den beliebtesten Wegen auf den Kilimandscharo. Dank ihres sanften Anstiegs und der guten Akklimatisierungschancen hat sie zudem eine hohe Erfolgsquote. Der Weg schlängelt sich allmählich um den Berg herum und bietet dabei atemberaubende Landschaften und spektakuläre Ausblicke.',
              details: 'Auf dieser Route wandern Sie durch üppigen Regenwald, über das beeindruckende Shira-Plateau bis hin zum Kraterrand bei Stella Point – dem anspruchsvollsten Abschnitt, für den zumindest eine Grundfitness erforderlich ist. Wir empfehlen dringend die 7-Tage-Variante.',
              pro: 'Günstiger als längere Routen, leicht erreichbar und landschaftlich besonders reizvoll.',
              con: 'In der Hochsaison mitunter stark frequentiert.',
              img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
            },
            {
              id: 'marangu',
              title: 'Marangu-Route',
              desc: 'Die als „Coca-Cola-Route" bekannte Marangu-Route ist die einzige mit Hüttenunterkünften anstelle von Zelten – ein großer Pluspunkt für manche Bergsteiger. Sie ist kürzer als andere Routen, was sie auf den ersten Blick leichter erscheinen lässt, tatsächlich aber dem Körper weniger Zeit zur Akklimatisierung gibt.',
              details: 'Für preisbewusste Bergsteiger ist sie eine der günstigsten Möglichkeiten, den Gipfel zu erreichen. Da der Auf- und Abstieg jedoch auf derselben Route erfolgen, verpassen Sie einige der abwechslungsreichen Landschaften des Kilimandscharo.',
              pro: 'Budgetfreundlich, kürzeste Dauer, Unterkunft in Hütten.',
              con: 'Höheres Risiko für Höhenkrankheit, weniger Privatsphäre und stärker frequentiert.',
              img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
            },
            {
              id: 'lemosho',
              title: 'Lemosho-Route',
              desc: 'Die Lemosho-Route ist ein ruhiger und landschaftlich spektakulärer Weg zum Gipfel, der auf der Westseite des Kilimandscharo beginnt. Dank ihrer Abgeschiedenheit ist sie weniger überlaufen und bietet ein intensiveres Naturerlebnis.',
              details: 'Diese Route führt Sie durch unberührte Wildnis auf das Shira-Plateau und trifft später auf die Machame-Route beim Lava Tower. Sie kann in 7 oder 8 Tagen absolviert werden und bietet dank der längeren Dauer beste Akklimatisierungschancen.',
              pro: 'Wunderschöne Landschaft, wenig Andrang, hervorragende Akklimatisierung und hohe Erfolgsrate.',
              con: 'Höhere Kosten durch längere Dauer und zusätzlichen Transportaufwand.',
              img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
            }
          ].map((route, i) => (
            <div key={route.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className={cn("lg:col-span-6 space-y-8", i % 2 !== 0 ? "lg:order-2" : "lg:order-1")}>
                <div className="space-y-4">
                  <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1 font-bold text-[10px] uppercase tracking-widest">Official Route Registry</Badge>
                  <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">{route.title}</h3>
                </div>
                <div className="space-y-6 text-muted-foreground text-sm md:text-lg font-normal leading-relaxed">
                  <p>{route.desc}</p>
                  <p className="opacity-70">{route.details}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-6 bg-green-500/5 rounded-2xl border border-green-500/10">
                    <p className="text-[10px] font-black uppercase text-green-600 mb-2">Vorteil</p>
                    <p className="text-xs font-bold text-secondary uppercase leading-relaxed">{route.pro}</p>
                  </div>
                  <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
                    <p className="text-[10px] font-black uppercase text-red-600 mb-2">Nachteil</p>
                    <p className="text-xs font-bold text-secondary uppercase leading-relaxed">{route.con}</p>
                  </div>
                </div>
              </div>
              <div className={cn("lg:col-span-6", i % 2 !== 0 ? "lg:order-1" : "lg:order-2")}>
                <div className="relative aspect-[4/3] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src={route.img} alt={route.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10 BEST TIME TO CLIMB */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">Climbing Season</span>
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase leading-[0.9] tracking-tighter">Beste Zeit, <br /><span className="text-primary">den Kili zu besteigen</span></h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80 uppercase tracking-widest">
                Die beste Zeit, um den Kilimandscharo zu besteigen, ist während der beiden Trockenzeiten: Januar bis Mitte März sowie Juni bis Oktober.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Juni bis Oktober", desc: "Besonders beliebt, stabiles Wetter, optimale Sichtverhältnisse." },
                { title: "Januar bis März", desc: "Optimales Wetter, weniger Andrang und kristallklare Sicht." },
                { title: "Regenzeiten meiden", desc: "April bis Mai und November sind rutschig und schwerer begehbar." },
                { title: "Optimale Bedingungen", desc: "Höchste Gipfelchancen und schönste Panoramen in der Trockenzeit." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-[#FDFCFB] rounded-3xl border border-border/50 flex flex-col justify-center gap-3 group hover:border-primary/20 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <Calendar className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-secondary uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 PREPARATION REGISTRY */}
      <section className="py-12 md:py-24 bg-[#FDF7F2] border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-10">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Registry Protocol</span>
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">Wie Sie sich auf das Trekking vorbereiten</h2>
          </div>
          <div className="p-10 md:p-16 bg-white rounded-[3rem] shadow-sm border border-border/40 text-left space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><Compass className="w-48 h-48" /></div>
            <div className="relative z-10 space-y-6">
              <p className="text-secondary font-bold text-base md:text-2xl leading-relaxed uppercase tracking-tight">
                Das Besteigen des Kilimandscharo ist ein unvergessliches Abenteuer, erfordert jedoch eine gute körperliche und mentale Vorbereitung. Auch wenn es Routen für jedes Erfahrungslevel gibt, sollten Sie täglich 6–7 Stunden wandern können — oft in großer Höhe.
              </p>
              <div className="h-px bg-border/50 w-24" />
              <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest leading-relaxed opacity-70">
                Planen Sie regelmäßige, lange Wanderungen ein- bis zweimal pro Woche und steigern Sie schrittweise Dauer und Schwierigkeit, damit Ihr Körper sich an mehrere aufeinanderfolgende Wandertage gewöhnt. Die Monate vor Ihrer Reise eignen sich ideal, um Ihre Kondition zu steigern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 TESTIMONIALS */}
      <section className="py-12 md:py-24 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tighter">Hören Sie von denen, die mit uns dort waren</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { n: "Sophia M.", q: "Perfect for beginners! Everything went smoothly and I loved the cozy huts. Great guides and service throughout." },
              { n: "Jonas L.", q: "The Lemosho Route completely exceeded my expectations. It was quiet, scenic, and beautifully organized. The pace was just right." },
              { n: "Katrin S.", q: "Fantastic team! The Machame route was a real challenge but worth every step. Everything was on time and well-planned." },
              { n: "David R.", q: "The food was way better than I imagined, even for vegetarians. Porters were kind, fast, and always smiling." },
              { n: "Anja P.", q: "Booking was simple and their customer service was outstanding. Every question I had was answered quickly and thoroughly." },
              { n: "Felix W.", q: "Worth every euro. Superb value, reliable service, and unforgettable adventure. Would book again immediately." }
            ].map((t, i) => (
              <div key={i} className="bg-[#fdfcfb] p-8 rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left group">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-xs md:text-sm italic text-secondary leading-relaxed font-bold uppercase tracking-tight opacity-80 group-hover:text-primary transition-colors">"{t.q}"</p>
                </div>
                <p className="mt-6 font-bold text-primary text-[10px] tracking-[0.2em] uppercase">— {t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 FAQ REGISTRY */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">Häufig gestellte Fragen zum Kilimandscharo Trekking</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Wie hoch ist der Kilimandscharo und warum ist er so besonders?", a: "Der Kilimandscharo ist mit 5.895 Metern der höchste Berg Afrikas und der höchste freistehende Berg der Welt. Seine Besteigung führt durch fünf verschiedene Klimazonen." },
              { q: "Brauche ich spezielle Ausrüstung für die Kilimandscharo Besteigung?", a: "Ja, Sie sollten auf gute Trekkingausrüstung achten: robuste Wanderschuhe, atmungsaktive Kleidung in Schichten, Schlafsack für hohe Temperaturen und eine Stirnlampe sind essenziell." },
              { q: "Wie viel kostet eine Kilimandscharo Besteigung?", a: "Eine hochwertige Besteigung inklusive Parkgebühren, professionellen Guides und Ausrüstung beginnt meist bei ca. 2.500 € bis 3.500 € pro Person." },
              { q: "Gibt es Altersbeschränkungen für das Kilimandscharo Trekking?", a: "Das offizielle Mindestalter beträgt 10 Jahre. Nach oben gibt es keine strikte Grenze, solange die körperliche Fitness und Gesundheit gegeben sind." },
              { q: "Wie ist die Verpflegung während der Tour organisiert?", a: "Unsere Köche bereiten drei nahrhafte, warme Mahlzeiten pro Tag zu, die reich an Kohlenhydraten sind, um den Energiebedarf in der Höhe zu decken." },
              { q: "Wie viele Tage sollte ich für den Kilimandscharo Aufstieg einplanen?", a: "Wir empfehlen mindestens 7 bis 8 Tage, um dem Körper ausreichend Zeit zur Akklimatisierung zu geben und die Erfolgschancen zu maximieren." },
              { q: "Wie sicher ist eine Kilimandscharo Besteigung?", a: "Sicherheit steht an erster Stelle. Unsere Guides führen tägliche Gesundheitschecks (Sauerstoffsättigung, Puls) durch und führen Notfallsauerstoff mit." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-kili-${i}`} className="border-none bg-[#FDFCFB] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-border">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] pb-8 font-normal opacity-80 uppercase tracking-widest">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
