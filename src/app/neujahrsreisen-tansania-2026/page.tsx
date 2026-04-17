"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Waves, 
  ShieldCheck, 
  Mountain,
  Sparkles,
  Zap,
  Globe,
  Users,
  Heart,
  CloudSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const packages = [
  { id: '15-day', title: '15 Tage Safari in Tansania und Sansibar', slug: '15-day-safari-zanzibar', durationDays: 15, startingPrice: 5399, category: 'Signature', highlights: ['Top Nationalparks Safari', 'Massai Dorfbesuch', 'Sansibar Strände'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200', excerpt: 'Vom Herzen der Serengeti bis zu den Palmen Sansibars – inklusive Flüge.' },
  { id: '13-day', title: '13 Tage Safari & Sansibar', slug: 'safari-sansibar-13-tage', durationDays: 13, startingPrice: 3699, category: 'Signature', highlights: ['Big Five Pirschfahrten', 'Ngorongoro UNESCO Krater', 'Sansibar Strände'], imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800', excerpt: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung.' },
  { id: '11-day', title: '11 Tage Safari & Sansibar', slug: 'safari-sansibar-11-tage', durationDays: 11, startingPrice: 2999, category: 'Kompakt', highlights: ['Elefanten im Tarangire', 'Serengeti Tiermigration', 'Sansibar Touren'], imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800', excerpt: 'Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.' },
  { id: 'family-12', title: '12 Tage Familien-Safari', slug: 'familien-safari-12-tage', durationDays: 12, startingPrice: 3499, category: 'Familie', highlights: ['Big Five Erlebnisse', 'Massai Begegnung', 'Kinder-Lodges'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200', excerpt: 'Speziell für Familien konzipiert: Unvergessliche Abenteuer und kindgerechte Lodges.' },
];

const discoveryCards = [
  { icon: Waves, t: "Sansibar Strände", d: "Genießen Sie weiße Sandstrände und kristallklares Wasser – der perfekte Ort für Neujahr in der Sonne.", img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=600" },
  { icon: Compass, t: "Safari-Abenteuer", d: "Erleben Sie ein unvergessliches Safari-Abenteuer durch die Serengeti und den Ngorongoro-Krater.", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" },
  { icon: Mountain, t: "Kilimanjaro Trekking", d: "Wandern Sie auf dem majestätischen Kilimanjaro und erleben Sie die atemberaubende Aussicht.", img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600" },
  { icon: Star, t: "Die Big 5", d: "Treffen Sie die legendären Big 5 und machen Sie Ihr Neujahrsurlaub zu einem unvergesslichen Erlebnis.", img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600" }
];

export default function NewYearPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Clean Hero Section */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" alt="Neujahr" fill priority className="object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white mb-8 leading-tight tracking-tight">Neujahrs Safari & Sansibar 2026/2027</h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-normal leading-relaxed opacity-80">Starten Sie das neue Jahr im Herzen der Savanne – luxuriös und individuell geplant.</p>
          </motion.div>
        </div>
      </section>

      {/* 02 Content Expansion */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-5xl text-center">
        <div className="space-y-6">
          <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">Wie macht Tansania Ihre Neujahrsreise unvergesslich?</h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-90">Tansania ist das ideale Ziel für eine einzigartige Reise über Neujahr in Afrika. Ob Sie auf den weißen Sandstränden von Sansibar entspannen, die beeindruckende Kilimanjaro Besteigung wagen oder auf Safari gehen möchten, hier gibt es unzählige Möglichkeiten, Ihre Neujahrsferien unvergesslich zu machen.</p>
        </div>
      </section>

      {/* 03 Modern Glass Discovery */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="hidden md:grid grid-cols-4 gap-6">
          {discoveryCards.map((item, i) => (
            <div key={i} className="relative rounded-[2rem] overflow-hidden group shadow-sm border border-border/40 h-full flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={item.img} alt={item.t} fill className="object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl"><item.icon className="w-5 h-5" /></div>
                  <h4 className="font-headline text-xl font-bold text-white leading-tight">{item.t}</h4>
                  <p className="text-[11px] text-white/80 font-normal leading-relaxed line-clamp-3">{item.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider with Gutter */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-0">
              {discoveryCards.map((item, i) => (
                <CarouselItem key={i} className="pl-0 basis-[85%] pr-4">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl bg-secondary">
                    <Image src={item.img} alt={item.t} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg"><item.icon className="w-4 h-4" /></div>
                      <h4 className="font-headline text-lg font-bold text-white leading-tight">{item.t}</h4>
                      <p className="text-[10px] text-white/70 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* 04 Unique Advantages */}
      <section className="py-8 md:py-12 bg-[#FDF7F2] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Warum Ihr Neujahr 2026/2027 einzigartig wird</h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">Außergewöhnliche Erlebnisse fernab vom Alltag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Exklusive Luxus-Safaris", d: "Starte ins neue Jahr mit einer privat geführten Safari und luxuriösen Lodges." },
              { t: "Sonne statt Kälte", d: "Genießen Sie Wärme und Licht zum Jahresbeginn statt grauem Winterwetter." },
              { t: "Familienzauber", d: "Erlebe Safari-Abenteuer, die Kinder und Erwachsene gleichermaßen begeistern." },
              { t: "Last-Minute Option", d: "Kurzentschlossen ins Paradies: Sichern Sie sich eine der wenigen freien Plätze." },
              { t: "Big Five zum Start", d: "Begrüßen Sie das Jahr inmitten der Serengeti mit unvergesslichen Tierbegegnungen." },
              { t: "Silvester Authentisch", d: "Statt Böllern erwartet Sie das Brüllen der Löwen unter dem Sternenhimmel." }
            ].map((point, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] shadow-sm border border-border/30 flex items-start gap-5 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-secondary">{point.t}</h4>
                  <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{point.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Shared Component Catalog */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Unsere Neujahrs-Kollektion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 06 Partner Protocol */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">Warum wir Ihr Partner für das neue Jahr sind</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Neujahrszauber für Familien", d: "Kindgerechte Safaris mit Elefanten & Giraffen und familienfreundliche Lodges." },
                  { t: "Romantik für Zwei", d: "Beginnen Sie das neue Jahr mit privaten Safaris und erholsamen Stunden am Traumstrand." },
                  { t: "Individuelle Abenteurer", d: "Alleinreisende genießen maßgeschneiderte Routen und absolute Flexibilität." },
                  { t: "Freunde & Teams", d: "Spektakuläre Natur und entspannte Tage am Ozean für Gruppen." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#fdf7f2] rounded-2xl border border-border/40 space-y-2">
                    <h4 className="font-bold text-base text-secondary">{item.t}</h4>
                    <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800" alt="Safari Expert" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}