
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Map, 
  Camera, 
  Sun, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  TreePine,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const parksData = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    fullName: 'Serengeti Nationalpark',
    tagline: 'Die Bühne der Großen Tierwanderung',
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
  },
  {
    id: 'arusha',
    name: 'Arusha',
    fullName: 'Arusha Nationalpark',
    tagline: 'Das grüne Juwel am Mount Meru',
    desc: 'Oft unterschätzt, bietet dieser Park eine unglaubliche landschaftliche Vielfalt: von den Momella-Seen bis zum dramatischen Krater des Mount Meru.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200',
    highlights: ['Momella Seen', 'Kanu-Safari', 'Mount Meru Trekking'],
    wildlife: ['Colobus Affen', 'Giraffen', 'Flamingos'],
    bestTime: 'Ganzjährig'
  }
];

export default function NationalParksPage() {
  const [activePark, setActivePark] = useState(parksData[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 01 Hero Section - Matching Reference Layout */}
      <section className="bg-white pt-32 pb-12 text-center border-none">
        <div className="container mx-auto px-4 max-w-5xl space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-6xl font-normal text-secondary tracking-tighter"
          >
            Die Nationalparks in Tansania
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-xl font-normal tracking-wide"
          >
            Entdecken Sie die atemberaubende Vielfalt Afrikas
          </motion.p>
        </div>
      </section>

      {/* 02 Large Cinematic Image with Centered Button */}
      <section className="container mx-auto px-4 max-w-7xl mb-12 md:mb-20">
        <div className="relative aspect-[21/9] w-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 group bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920"
            alt="Elefanten in der Savanne"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            data-ai-hint="elephants savannah"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 md:translate-y-0 md:bottom-8 z-20">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-xl px-10 h-12 md:h-14 bg-[#2b5a91] text-white hover:bg-secondary font-bold text-[10px] tracking-widest border-none shadow-2xl transition-all">
                Jetzt Safari planen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 03 Main Content Layout with Sticky Sidebar */}
      <section className="container mx-auto px-4 max-w-7xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Sticky Sidebar Registry */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Park-Register</span>
                <h2 className="font-headline text-3xl font-normal text-secondary uppercase">Destinationen</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {parksData.map((park) => (
                  <button
                    key={park.id}
                    onClick={() => setActivePark(park)}
                    className={cn(
                      "text-left p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between group",
                      activePark.id === park.id 
                        ? "bg-white border-primary/20 shadow-xl translate-x-2" 
                        : "bg-white/50 border-border/40 hover:border-primary/20 text-secondary/60 hover:text-secondary hover:bg-white"
                    )}
                  >
                    <div className="flex flex-col">
                      <span className={cn(
                        "text-[8px] font-bold uppercase tracking-widest mb-1",
                        activePark.id === park.id ? "text-primary" : "text-muted-foreground"
                      )}>
                        Nationalpark
                      </span>
                      <span className="font-headline text-xl font-bold uppercase tracking-tight">{park.name}</span>
                    </div>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-all duration-500",
                      activePark.id === park.id ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                    )} />
                  </button>
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
                  Unser KI-Berater hilft Ihnen, den perfekten Park basierend auf Ihren Wildlife-Interessen zu finden.
                </p>
                <Link href="/trip-advisor" className="block">
                  <Button className="w-full h-12 bg-white text-secondary hover:bg-primary hover:text-white border-none text-[9px] font-black uppercase tracking-widest rounded-xl transition-all">
                    Berater starten
                  </Button>
                </Link>
              </div>
            </Card>
          </aside>

          {/* Right: Dynamic Park Content area */}
          <main className="lg:col-span-8 space-y-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePark.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {/* Park Narrative Header */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1 font-bold text-[9px] uppercase tracking-widest">
                      Offizielles Register: {activePark.name}
                    </Badge>
                    <h2 className="font-headline text-4xl md:text-6xl font-normal text-secondary leading-tight uppercase tracking-tighter">
                      {activePark.fullName}
                    </h2>
                  </div>
                  <p className="text-secondary font-bold text-sm md:text-xl leading-relaxed uppercase tracking-tight opacity-80 border-l-4 border-primary/20 pl-8 py-2">
                    {activePark.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                    {activePark.desc}
                  </p>
                </div>

                {/* Technical Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Sun, label: "Beste Zeit", val: activePark.bestTime },
                    { icon: Sparkles, label: "Status", val: "UNESCO Weltnaturerbe" },
                    { icon: Camera, label: "Wildlife", val: "Big Five Spotting" },
                    { icon: MapPin, label: "Erreichbarkeit", val: "Von Arusha / Kairo" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 bg-white rounded-[1.5rem] border border-border/50 shadow-sm text-center space-y-2 group hover:border-primary/20 transition-all">
                      <stat.icon className="w-5 h-5 text-primary mx-auto group-hover:scale-110 transition-transform" />
                      <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                      <p className="font-bold text-[9px] md:text-xs text-secondary uppercase leading-tight">{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights Gallery (Park Specific) */}
                <div className="space-y-8">
                  <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">Erlebnisse & Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activePark.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-border/50 shadow-sm group hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <span className="font-bold text-xs md:text-base text-secondary uppercase tracking-widest">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Call to Action for this Park */}
                <div className="pt-12 border-t border-border/50">
                  <div className="bg-[#FDF7F2] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#F0EBE0] shadow-sm">
                    <div className="space-y-4 text-center md:text-left">
                      <h4 className="font-headline text-2xl md:text-3xl font-bold text-secondary uppercase">Bereit für die {activePark.name}?</h4>
                      <p className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-widest max-w-sm">
                        Wir entwerfen Ihre individuelle Route inklusive der besten Lodges in diesem Nationalpark.
                      </p>
                    </div>
                    <Link href={`/safaris?park=${activePark.id}`}>
                      <Button size="xl" className="rounded-xl px-10 h-14 bg-secondary text-white hover:bg-primary font-black text-[10px] tracking-widest shadow-xl border-none">
                        Passende Safari finden <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

        </div>
      </section>

      {/* Support Registry Section */}
      <ContactSection />
    </div>
  );
}
