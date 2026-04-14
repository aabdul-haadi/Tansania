
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Map, 
  Camera, 
  Sun, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const parksData = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    fullName: 'Serengeti Nationalpark',
    tagline: 'Die Bühne der großen Tierwanderung',
    desc: 'Erleben Sie die endlose Weite und das größte Naturschauspiel der Welt – die Wanderung von Millionen Gnus und Zebras. Die Serengeti ist das Herz der afrikanischen Wildnis.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
    highlights: ['Great Migration', 'Big Five Spotting', 'Heißluftballon-Safari'],
    wildlife: ['Löwen', 'Gnus', 'Geparden', 'Elefanten'],
    bestTime: 'Juni bis Oktober'
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro',
    fullName: 'Ngorongoro Krater',
    tagline: 'Das achte Weltwunder',
    desc: 'Ein natürliches Amphitheater in einem schlafenden Vulkan. Die höchste Raubtierdichte Afrikas auf engstem Raum bietet Ihnen garantierte Sichtungen in einer surrealen Kulisse.',
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200',
    highlights: ['Kraterboden-Safari', 'Maasai Kultur', 'Schwarze Nashörner'],
    wildlife: ['Nashörner', 'Hyänen', 'Büffel', 'Zebras'],
    bestTime: 'Ganzjährig'
  },
  {
    id: 'tarangire',
    name: 'Tarangire',
    fullName: 'Tarangire Nationalpark',
    tagline: 'Das Reich der Giganten',
    desc: 'Berühmt für seine riesigen Affenbrotbäume und massiven Elefantenherden am Tarangire-Fluss. Ein Park für Entdecker, die das authentische Afrika abseits der Massen suchen.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200',
    highlights: ['Elefanten-Migration', 'Baobab-Wälder', 'Vogelbeobachtung'],
    wildlife: ['Elefanten', 'Baumkletternde Pythons', 'Leoparden'],
    bestTime: 'Juli bis Oktober'
  },
  {
    id: 'manyara',
    name: 'Lake Manyara',
    fullName: 'Lake Manyara Nationalpark',
    tagline: 'Heimat der baumkletternden Löwen',
    desc: 'Ein Juwel am Fuß des Rift Valley. Bekannt für seine riesigen Flamingoscharren, den dichten Grundwasserwald und die einzigartigen baumkletternden Löwen.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200',
    highlights: ['Flamingo-Beobachtung', 'Grundwasserwald', 'Nacht-Pirschfahrten'],
    wildlife: ['Flamingos', 'Baumkletternde Löwen', 'Nilpferde'],
    bestTime: 'Juni bis September'
  }
];

export default function NationalParksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* 01 Hero Header: Clean & Centered */}
      <header className="pt-32 pb-12 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-7xl font-normal text-secondary tracking-tighter"
          >
            Die Nationalparks in Tansania
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-xl font-normal tracking-wide uppercase tracking-widest opacity-60"
          >
            Entdecken Sie die atemberaubende Vielfalt Afrikas
          </motion.p>
        </div>
      </header>

      {/* 02 Full-Width Visual Anchor with Overlapping Button */}
      <section className="relative mb-24 md:mb-32">
        <div className="w-full relative aspect-[21/9] md:h-[600px] overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920"
            alt="Elefanten in der Savanne"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            data-ai-hint="elephants savannah"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        
        {/* The Overlapping Trigger */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <Link href="/trip-planner">
            <Button size="xl" className="rounded-xl px-12 h-14 md:h-16 bg-[#2b5a91] text-white hover:bg-secondary font-bold text-[10px] md:text-xs tracking-[0.2em] border-none shadow-2xl transition-all">
              Jetzt Safari planen
            </Button>
          </Link>
        </div>
      </section>

      {/* 03 Main Grid: Sticky Sidebar + Sequential Content */}
      <section className="container mx-auto px-4 max-w-7xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Sticky Sidebar Registry */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 hidden lg:block">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Park-Register</span>
                <h2 className="font-headline text-3xl font-normal text-secondary">Destinationen</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {parksData.map((park) => (
                  <Link
                    key={park.id}
                    href={`#${park.id}`}
                    className="text-left p-5 rounded-2xl border border-border/40 bg-white/50 hover:border-primary/20 text-secondary/60 hover:text-secondary hover:bg-white transition-all duration-500 flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="text-[8px] font-bold uppercase tracking-widest mb-1 text-muted-foreground">Nationalpark</span>
                      <span className="font-headline text-xl font-bold tracking-tight">{park.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-10 overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Compass className="w-20 h-20 rotate-12" /></div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[8px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> KI Beratung
                </div>
                <h4 className="font-headline text-2xl font-bold uppercase leading-tight">Fragen Sie unseren Berater</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  Unser KI-Berater hilft Ihnen, den perfekten Park basierend auf Ihren Interessen zu finden.
                </p>
                <Link href="/trip-advisor" className="block">
                  <Button className="w-full h-12 bg-white text-secondary hover:bg-primary hover:text-white border-none text-[9px] font-black uppercase tracking-widest rounded-xl transition-all">
                    Berater starten
                  </Button>
                </Link>
              </div>
            </Card>
          </aside>

          {/* Right: Full Sequential Park Content */}
          <main className="lg:col-span-8 space-y-24 md:space-y-40">
            {parksData.map((park) => (
              <section key={park.id} id={park.id} className="space-y-12 scroll-mt-32">
                {/* Park Narrative Header */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1 font-bold text-[9px] uppercase tracking-widest">
                      Offizielles Register: {park.name}
                    </Badge>
                    <h2 className="font-headline text-4xl md:text-6xl font-normal text-secondary leading-tight tracking-tighter">
                      {park.fullName}
                    </h2>
                  </div>
                  <p className="text-secondary font-bold text-sm md:text-xl leading-relaxed tracking-tight opacity-80 border-l-4 border-primary/20 pl-8 py-2">
                    {park.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                    {park.desc}
                  </p>
                </div>

                {/* Park Main Image */}
                <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40">
                  <Image src={park.img} alt={park.name} fill className="object-cover" />
                </div>

                {/* Technical Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Sun, label: "Beste Zeit", val: park.bestTime },
                    { icon: Sparkles, label: "Status", val: "Naturerbe" },
                    { icon: Camera, label: "Wildlife", val: "Big Five" },
                    { icon: MapPin, label: "Region", val: "Tansania" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 bg-white rounded-[1.5rem] border border-border/50 shadow-sm text-center space-y-2 group hover:border-primary/20 transition-all">
                      <stat.icon className="w-5 h-5 text-primary mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                      <p className="font-bold text-[9px] md:text-xs text-secondary uppercase leading-tight">{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights Registry */}
                <div className="space-y-8">
                  <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">Erlebnisse & Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {park.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-border/50 shadow-sm group hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <span className="font-bold text-xs md:text-base text-secondary tracking-widest">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Action Trigger */}
                <div className="pt-12 border-t border-border/50">
                  <div className="bg-[#FDF7F2] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#F0EBE0] shadow-sm">
                    <div className="space-y-4 text-center md:text-left">
                      <h4 className="font-headline text-2xl md:text-3xl font-bold text-secondary">Bereit für die {park.name}?</h4>
                      <p className="text-muted-foreground text-xs md:text-sm font-bold tracking-widest max-w-sm">
                        Wir entwerfen Ihre individuelle Route inklusive der besten Lodges in diesem Nationalpark.
                      </p>
                    </div>
                    <Link href={`/safaris`}>
                      <Button size="lg" className="rounded-xl px-10 h-14 bg-secondary text-white hover:bg-primary font-black text-[10px] tracking-widest shadow-xl border-none">
                        Passende Safari finden <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </main>

        </div>
      </section>
    </div>
  );
}
