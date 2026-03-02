"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  MapPin, 
  Compass, 
  Camera, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  Zap,
  CloudSun,
  Wind,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/sections/ContactSection';

const pointsOfInterest = [
  { 
    id: 'river', 
    name: 'Tarangire Fluss', 
    desc: 'Die Lebensader des Parks.', 
    coords: '-3.944,35.987',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
  },
  { 
    id: 'baobab', 
    name: 'Baobab Loop', 
    desc: 'Tal der Affenbrotbäume.', 
    coords: '-3.850,35.920',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  { 
    id: 'silale', 
    name: 'Silale Sumpf', 
    desc: 'Magnet für Elefanten.', 
    coords: '-4.020,36.050',
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  }
];

const activities = [
  { 
    title: 'Elefanten Pirsch', 
    icon: Camera, 
    level: 'Classic', 
    time: 'Ganztags', 
    desc: 'Tansanias höchste Elefantendichte erleben.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
  },
  { 
    title: 'Walking Safari', 
    icon: Wind, 
    level: 'Authentisch', 
    time: '2-4 Std.', 
    desc: 'Zu Fuß durch das Reich der Riesen.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  { 
    title: 'Nacht-Safari', 
    icon: Zap, 
    level: 'Exklusiv', 
    time: '2 Std.', 
    desc: 'Raubtiere in der Dunkelheit beobachten.',
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  }
];

export default function TarangireParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Hero Section - Compacted */}
      <section className="relative h-[50vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920"
          alt="Tarangire National Park"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h1 className="font-headline text-4xl md:text-8xl font-bold text-white leading-none tracking-tighter uppercase">
              Tarangire <br /><span className="text-primary">Nationalpark</span>
            </h1>
            <p className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-bold uppercase tracking-[0.4em]">
              Land der Riesen und Giganten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Navigator */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Park Navigator</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">Wildnis <br /><span className="text-primary">Pur</span></h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {pointsOfInterest.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => setActivePoi(p)}
                  className={cn(
                    "text-left p-5 rounded-2xl border transition-all flex justify-between items-center group",
                    activePoi.id === p.id ? "bg-secondary text-white shadow-xl" : "bg-white hover:border-primary/20"
                  )}
                >
                  <div>
                    <p className={cn("text-[8px] font-bold uppercase tracking-widest mb-1", activePoi.id === p.id ? "text-primary" : "text-muted-foreground")}>Hotspot</p>
                    <p className="font-bold text-lg uppercase tracking-tight">{p.name}</p>
                  </div>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", activePoi.id === p.id ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100")} />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-muted">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15935.0!2d${activePoi.coords.split(',')[1]}!3d${activePoi.coords.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz`}
                className="absolute inset-0 w-full h-full border-none grayscale-[0.2]"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Activity Slider */}
      <section className="py-12 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Die Erlebnisse</span>
              <h2 className="font-headline text-4xl md:text-7xl font-bold text-secondary uppercase tracking-tighter">Safari <br /><span className="text-primary">Highlights</span></h2>
            </div>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
              Tarangire ist berühmt für seine Elefantenherden und mystischen Affenbrotbäume.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {activities.map((act, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-[#fdfcfb] rounded-[3rem] overflow-hidden shadow-lg border border-border/50 group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image src={act.img} alt={act.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white border-none font-bold text-[8px] uppercase tracking-widest">{act.level}</Badge>
                      </div>
                    </div>
                    <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <act.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{act.time}</span>
                        </div>
                        <h4 className="font-headline text-2xl font-bold text-secondary uppercase mb-3 leading-tight">{act.title}</h4>
                        <p className="text-xs text-muted-foreground font-bold leading-relaxed">{act.desc}</p>
                      </div>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:translate-x-2 transition-transform">
                        Angebot anfordern <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-muted hover:bg-primary hover:text-white transition-all" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-muted hover:bg-primary hover:text-white transition-all" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Timing & Climate */}
      <section className="py-16 bg-[#fdfcfb] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Timing & Klima</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase leading-none tracking-tighter text-secondary">Wann ist <br /><span className="text-primary">Peak Season?</span></h2>
              <div className="grid grid-cols-1 gap-3 pt-4">
                <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-border shadow-sm group hover:border-primary transition-all">
                  <Sun className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-sm uppercase text-secondary">Juli – Oktober</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Trockenzeit & Beste Sichtungen</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-border shadow-sm group hover:border-primary transition-all">
                  <CloudSun className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-sm uppercase text-secondary">November – Mai</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Grüne Saison & Vogelwelt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000" alt="Tarangire Season" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-[2.5rem] shadow-2xl hidden lg:block border border-white/10 max-w-[280px]">
                <Sparkles className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-bold text-lg uppercase leading-tight mb-1">Geheimtipp der Guides</h4>
                <p className="text-white font-bold text-[10px] uppercase tracking-widest opacity-80 leading-relaxed">
                  In der Trockenzeit versammeln sich hunderte Elefanten am Fluss – ein unvergessliches Spektakel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}