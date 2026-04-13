
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
  CloudSun,
  Leaf
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const faqData = [
  {
    q: "Wie hoch ist der Kilimandscharo und warum ist er so besonders?",
    a: "Der Kilimandscharo ist mit 5.895 Metern der höchste Berg Afrikas und einer der berühmten 'Seven Summits'. Er ist besonders, da er einer der weltweit höchsten freistehenden Berge ist und fünf verschiedene Klimazonen beheimatet."
  },
  {
    q: "Brauche ich spezielle Ausrüstung für die Kilimandscharo Besteigung?",
    a: "Ja, Sie sollten auf gute Trekkingausrüstung achten: robuste Wanderschuhe, atmungsaktive Kleidung in Schichten, Schlafsack für hohe Temperaturen und eine Stirnlampe sind essenziell. Viele Ausrüster bieten auch vor Ort Mietmöglichkeiten."
  },
  {
    q: "Wie viel kostet eine Kilimandscharo Besteigung?",
    a: "Die Kosten variieren je nach Route und Dauer, liegen aber in der Regel zwischen 2.500 € und 5.000 € pro Person, inklusive Nationalparkgebühren, Guide-Teams und Verpflegung."
  },
  {
    q: "Gibt es Altersbeschränkungen für das Kilimandscharo Trekking?",
    a: "Das offizielle Mindestalter für den Uhuru Peak beträgt 10 Jahre. Nach oben hin gibt es keine strikte Grenze, solange die körperliche Verfassung und ärztliche Freigabe vorliegen."
  },
  {
    q: "Wie ist die Verpflegung während der Tour organisiert?",
    a: "Unsere professionellen Köche bereiten drei nahrhafte, warme Mahlzeiten am Tag zu. Wir achten auf eine kohlenhydratreiche Ernährung, die für die Anstrengung in großer Höhe optimal ist."
  },
  {
    q: "Wie viele Tage sollte ich für den Kilimandscharo Aufstieg einplanen?",
    a: "Wir empfehlen mindestens 7 bis 8 Tage. Längere Touren bieten eine deutlich bessere Akklimatisierung und erhöhen die Erfolgsquote auf bis zu 90%."
  },
  {
    q: "Wie sicher ist eine Kilimandscharo Besteigung?",
    a: "Sicherheit steht bei uns an erster Stelle. Unsere Guides führen tägliche Gesundheitschecks durch (Sauerstoffsättigung, Puls) und sind in Erster Hilfe und Höhenkrankheits-Protokollen geschult."
  }
];

const kiliPackages = [
  {
    id: 'kili-kombi',
    title: '13 Tage Kilimandscharo, Serengeti und Sansibar',
    slug: '13-tage-kilimandscharo-kombi',
    durationDays: 13,
    startingPrice: 5299,
    category: 'Kombi-Reise',
    tag: 'Meistverkauft',
    excerpt: 'Die ultimative Tansania Rundreise – Kilimandscharo Besteigung kombiniert mit einer Safari in der Serengeti und Entspannung auf Sansibar.',
    highlights: ['Afrikas Dach erklimmen', 'Big Five hautnah erleben', 'Sansibars Strände genießen'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  {
    id: 'marangu-8',
    title: '8 Tage Marangu Route Kilimandscharo',
    slug: '8-tage-marangu-komfortabel-zum-gipfel',
    durationDays: 8,
    startingPrice: 3199,
    category: 'Expedition',
    tag: 'Hütten Route',
    excerpt: 'Die klassische Coca-Cola Route mit festen Berghütten statt Zelten. Ideal für alle, die ein wenig mehr Komfort am Berg suchen.',
    highlights: ['Hütten statt Zelte', 'Uhuru Peak erreichen', 'Zusatz-Tag für Erfolg'],
    imageUrl: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
  },
  {
    id: 'machame-9',
    title: '9 Tage Machame Route Kilimandscharo',
    slug: '9-tage-machame-der-abenteuer-weg',
    durationDays: 9,
    startingPrice: 2499,
    category: 'Expedition',
    tag: 'Whiskey Route',
    excerpt: 'Die spektakulärste Route zum Gipfel mit optimaler Akklimatisierung und abwechslungsreichen Landschaften durch fünf Klimazonen.',
    highlights: ['Whiskey Route erleben', 'Optimal akklimatisiert', 'Hohe Erfolgsquote'],
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: 'lemosho-10',
    title: '10 Tage Lemosho Route Kilimandscharo',
    slug: '10-tage-lemosho-unberuehrte-wege',
    durationDays: 10,
    startingPrice: 3599,
    category: 'Expedition',
    tag: 'Premium Route',
    excerpt: 'Die exklusivste und landschaftlich reizvollste Route über die Westseite des Kilimandscharo mit der höchsten Erfolgsrate.',
    highlights: ['Wenig begangene Route', 'Westseite Panoramen', 'Premium Ausrüstung'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  {
    id: 'rongai-8',
    title: '8 Tage Rongai Route Kilimandscharo',
    slug: '8-tage-rongai-dein-stiller-weg',
    durationDays: 8,
    startingPrice: 2999,
    category: 'Expedition',
    tag: 'Ruhige Route',
    excerpt: 'Entdecken Sie die wilde Nordseite des Kilimandscharo. Eine abgelegene Route mit weiten Panoramablicken und unberührter Natur.',
    highlights: ['Nordseite Panorama', 'Abgeschieden & ruhig', 'Tierbeobachtungen'],
    imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
  },
  {
    id: 'mount-meru-5',
    title: '5 Tage Mount Meru Besteigung',
    slug: '5-tage-mount-meru-besteigung',
    durationDays: 5,
    startingPrice: 2699,
    category: 'Expedition',
    tag: 'Einstiegsroute',
    excerpt: 'Erklimmen Sie Afrikas zweithöchsten Gipfel als perfekte Vorbereitung für den Kilimandscharo oder als eigenständiges Abenteuer.',
    highlights: ['Afrikas zweithöchster Peak', 'Perfekte Vorbereitung', 'Berghütten Komfort'],
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
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
      {/* 01 Cinematic Hero */}
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
            <h1 className="font-headline text-white leading-none text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-tight">
              Kilimandscharo Expeditionen
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 font-bold text-[10px] md:text-lg tracking-normal leading-relaxed">
              Finden Sie Ihre perfekte Route zum Uhuru Peak. Eine Expedition, die über den Wolken beginnt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Intro Narrative */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary mb-6">
          Finde deine perfekte Kilimandscharo-Route & Traumreise
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
          Wähle aus einzigartigen Routen und Erlebnissen die Tour, die zu deinem Abenteuergeist passt. Ob gemütlich, spektakulär oder herausfordernd – hier beginnt deine unvergessliche Reise zum Dach Afrikas.
        </p>
      </section>

      {/* 03 Package Registry Grid */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">
            Erleben Sie das ultimative Abenteuer: Besteigen Sie das Dach Afrikas
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
          {kiliPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 04 Expert Narrative */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold text-[10px] tracking-normal">National-Registry</span>
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
                <p className="text-[10px] font-bold tracking-normal text-primary mb-2">Uhuru Peak Registry</p>
                <h4 className="text-2xl font-headline font-bold">5.895 Meter Freiheit</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Quick Facts Registry */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-center">Kilimandscharo Quick Facts</h2>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="relative rounded-[3rem] overflow-hidden p-8 md:p-16 border border-border/50 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200" 
              alt="Facts Background" 
              fill 
              className="object-cover brightness-[0.3]"
              data-ai-hint="mount kilimanjaro"
            />
            <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px]" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
              {[
                { icon: TrendingUp, label: "Höhe", val: "5.895 Meter", sub: "Höchster Berg Afrikas" },
                { icon: Map, label: "Routen", val: "7 Pfade", sub: "Offizielle Aufstiege" },
                { icon: Timer, label: "Dauer", val: "5-10 Tage", sub: "Je nach Route" },
                { icon: Wind, label: "Klimazonen", val: "5 Zonen", sub: "Auf einem Berg" },
                { icon: Award, label: "Erfolgsquote", val: "Bis zu 90%", sub: "Mit Akklimatisierung" }
              ].map((fact, i) => (
                <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/10 text-center space-y-4 group hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                    <fact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-primary mb-1 tracking-normal">{fact.label}</p>
                    <p className="font-bold text-sm md:text-base text-white leading-none">{fact.val}</p>
                    <p className="text-[8px] text-white/60 font-bold mt-1 tracking-normal opacity-60">{fact.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 Video Registry */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40">
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

      {/* 07 Highlights Galerie */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Kilimandscharo Highlights Galerie</h2>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg group">
                <Image src={`https://picsum.photos/seed/kili-gal-${i}/800/800`} alt={`Highlight ${i}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden -mx-4">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <CarouselItem key={i} className="pl-4 basis-[85%]">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                      <Image src={`https://picsum.photos/seed/kili-gal-mob-${i}/800/1000`} alt={`Highlight ${i}`} fill className="object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* 08 Detailed Routes Registry - UI REDESIGN */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl space-y-24 md:space-y-40">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Beste Kilimandscharo Routen für ein unvergessliches Abenteuer</h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
              Es gibt sieben offizielle Kilimanjaro-Routen, jede mit eigenen Vorteilen und Herausforderungen. Sie unterscheiden sich in Länge, Schwierigkeitsgrad, Landschaft, Besucherandrang, Art der Unterkünfte und vielem mehr.
            </p>
          </div>

          {[
            {
              id: 'machame',
              title: 'Machame-Route',
              desc: 'Die Machame-Route – auch bekannt als „Whiskey Route" – gehört zu den beliebtesten Wegen auf den Kilimandscharo. Dank ihres sanften Anstiegs und der guten Akklimatisierungschancen hat sie zudem eine hohe Erfolgsquote.',
              details: 'Auf dieser Route wandern Sie durch üppigen Regenwald, über das beeindruckende Shira-Plateau bis hin zum Kraterrand bei Stella Point – dem anspruchsvollsten Abschnitt, für den zumindest eine Grundfitness erforderlich ist.',
              pro: 'Günstiger als längere Routen, leicht erreichbar und landschaftlich besonders reizvoll.',
              con: 'In der Hochsaison mitunter stark frequentiert.',
              img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
            },
            {
              id: 'marangu',
              title: 'Marangu-Route',
              desc: 'Die als „Coca-Cola-Route" bekannte Marangu-Route ist die einzige mit Hüttenunterkünften anstelle von Zelten – ein großer Pluspunkt für manche Bergsteiger.',
              details: 'Für preisbewusste Bergsteiger ist sie eine der günstigsten Möglichkeiten, den Gipfel zu erreichen, und ihr klarer, einfacher Weg ist leicht zu folgen. Da der Auf- und Abstieg jedoch auf derselben Route erfolgen, verpassen Sie einige der abwechslungsreichen Landschaften des Kilimandscharo.',
              pro: 'Budgetfreundlich, kürzeste Dauer, Unterkunft in Hütten.',
              con: 'Höheres Risiko für Höhenkrankheit durch schnellen Aufstieg.',
              img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
            },
            {
              id: 'lemosho',
              title: 'Lemosho-Route',
              desc: 'Die Lemosho-Route ist ein ruhiger und landschaftlich spektakulärer Weg zum Gipfel, der auf der Westseite des Kilimandscharo beginnt.',
              details: 'Diese Route führt Sie durch unberührte Wildnis auf das Shira-Plateau und trifft später auf die Machame-Route beim Lava Tower. Sie bietet dank der längeren Dauer beste Akklimatisierungschancen – was die Erfolgsquote spürbar erhöht.',
              pro: 'Wenig Andrang, hervorragende Akklimatisierung.',
              con: 'Höhere Kosten durch längere Dauer.',
              img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
            }
          ].map((route, i) => (
            <div key={route.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className={cn("lg:col-span-6 space-y-8", i % 2 !== 0 ? "lg:order-2" : "lg:order-1")}>
                <div className="space-y-4">
                  <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1 font-bold text-[10px]">Official Route Registry</Badge>
                  <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-tight">{route.title}</h3>
                </div>
                <div className="space-y-6 text-muted-foreground text-sm md:text-lg font-normal leading-relaxed">
                  <p>{route.desc}</p>
                  <p className="opacity-70">{route.details}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-6 bg-green-500/5 rounded-2xl border border-green-500/10">
                    <p className="text-[10px] font-bold text-green-600 mb-2">Vorteil</p>
                    <p className="text-xs font-bold text-secondary leading-relaxed">{route.pro}</p>
                  </div>
                  <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
                    <p className="text-[10px] font-bold text-red-600 mb-2">Nachteil</p>
                    <p className="text-xs font-bold text-secondary leading-relaxed">{route.con}</p>
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

      {/* 09 Best Time to Climb */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-primary font-bold text-[10px] block mb-2">Climbing Season</span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">Beste Zeit, den Kili zu besteigen</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
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
                <div key={idx} className="p-8 bg-[#FDFCFB] rounded-3xl border border-border/50 flex flex-col justify-center gap-3 group hover:border-primary transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <Calendar className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-secondary tracking-tight">{item.title}</h4>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-bold leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 Preparation Registry - UI REDESIGN */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-[#FDF7F2] border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-10">
          <div className="space-y-4">
            <span className="text-primary font-bold text-[10px]">Registry Protocol</span>
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">Wie Sie sich auf das Trekking vorbereiten</h2>
          </div>
          <div className="p-10 md:p-16 bg-white rounded-[3rem] shadow-sm border border-border/40 text-left space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none"><Compass className="w-48 h-48" /></div>
            <div className="relative z-10 space-y-6">
              <p className="text-secondary font-bold text-base md:text-2xl leading-relaxed tracking-tight">
                Das Besteigen des Kilimandscharo ist ein unvergessliches Abenteuer, erfordert jedoch eine gute körperliche und mentale Vorbereitung. Auch wenn es Routen für jedes Erfahrungslevel gibt, sollten Sie täglich 6–7 Stunden wandern können — oft in großer Höhe.
              </p>
              <div className="h-px bg-border/50 w-24" />
              <p className="text-muted-foreground font-bold text-[10px] md:text-sm leading-relaxed opacity-70">
                Planen Sie regelmäßige, lange Wanderungen ein- bis zweimal pro Woche und steigern Sie schrittweise Dauer und Schwierigkeit, damit Ihr Körper sich an mehrere aufeinanderfolgende Wandertage gewöhnt. Die Monate vor Ihrer Reise eignen sich ideal, um Ihre Kondition zu steigern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 Testimonials */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-tighter">Hören Sie von denen, die mit uns dort waren</h2>
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
                  <p className="text-xs md:text-sm italic text-secondary leading-relaxed font-bold tracking-tight opacity-80 group-hover:text-primary transition-colors">"{t.q}"</p>
                </div>
                <p className="mt-6 font-bold text-primary text-[10px] tracking-normal">— {t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 FAQ Registry */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">Häufig gestellte Fragen zum Kilimandscharo Trekking</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`faq-kili-${i}`} className="border-none bg-[#FDFCFB] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-border">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] pb-8 font-normal opacity-80 tracking-normal">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
