"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
    desc: 'Die lebenspendende Ader des Parks, an der sich hunderte Tiere versammeln.', 
    coords: '-3.944,35.987',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
  },
  { 
    id: 'baobab', 
    name: 'Baobab Loop', 
    desc: 'Ein Tal voller jahrtausendealter Affenbrotbäume – die Giganten der Flora.', 
    coords: '-3.850,35.920',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  { 
    id: 'silale', 
    name: 'Silale Sumpf', 
    desc: 'Ein grünes Paradies und Magnet für riesige Elefantenherden in der Trockenzeit.', 
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
    desc: 'Erleben Sie die höchste Elefantendichte Tansanias in unseren professionell ausgestatteten 4x4 Jeeps.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
  },
  { 
    title: 'Walking Safari', 
    icon: Wind, 
    level: 'Authentisch', 
    time: '2-4 Std.', 
    desc: 'Spüren Sie den afrikanischen Boden unter den Füßen im Reich der Riesen, begleitet von Rangern.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  { 
    title: 'Nacht-Safari', 
    icon: Zap, 
    level: 'Exklusiv', 
    time: '2 Std.', 
    desc: 'Beobachten Sie die Jäger der Nacht bei einer exklusiven Fahrt nach Sonnenuntergang im Park.',
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  }
];

export default function TarangireParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Cinema Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920"
          alt="Tarangire National Park Elephants"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-6">
            <Badge className="bg-primary text-white border-none font-bold text-[10px] uppercase tracking-[0.4em] px-6 py-2 shadow-2xl mb-4">Das Reich der Riesen</Badge>
            <h1 className="font-headline text-4xl md:text-8xl font-bold text-white leading-none tracking-tighter uppercase">
              Tarangire <br /><span className="text-primary">Nationalpark</span>
            </h1>
            <p className="max-w-xl mx-auto text-[10px] md:text-lg text-white/90 font-bold uppercase tracking-[0.4em]">
              Gigantische Herden unter uralten Affenbrotbäumen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Geographical Navigator (Interactive Map Dashboard) */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] md:min-h-[650px]">
            
            {/* Left: POI Selector */}
            <div className="lg:col-span-4 p-6 md:p-10 bg-muted/20 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] block mb-2">Explorer Map</span>
                  <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tighter">Wildnis <br /><span className="text-primary">Pur</span></h2>
                </div>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {pointsOfInterest.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => setActivePoi(p)}
                      className={cn(
                        "text-left p-5 rounded-xl border transition-all flex justify-between items-center group",
                        activePoi.id === p.id ? "bg-secondary text-white shadow-xl translate-x-1 border-transparent" : "bg-white hover:border-primary/20 text-secondary/60 hover:text-secondary"
                      )}
                    >
                      <div>
                        <p className={cn("text-[8px] font-bold uppercase tracking-widest mb-1", activePoi.id === p.id ? "text-primary" : "text-muted-foreground")}>Hotspot</p>
                        <p className="font-bold text-base uppercase tracking-tight">{p.name}</p>
                      </div>
                      <ChevronRight className={cn("w-4 h-4 transition-transform duration-500", activePoi.id === p.id ? "text-primary rotate-0" : "text-muted-foreground -rotate-90 opacity-0 group-hover:opacity-100")} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-5 bg-white rounded-2xl border border-border shadow-sm hidden lg:block">
                <p className="text-[11px] text-muted-foreground font-bold leading-relaxed">
                  "{activePoi.desc}"
                </p>
              </div>
            </div>

            {/* Right: Map Integration */}
            <div className="lg:col-span-8 relative aspect-video lg:aspect-auto">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15935.0!2d${activePoi.coords.split(',')[1]}!3d${activePoi.coords.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz`}
                className="absolute inset-0 w-full h-full border-none grayscale-[0.3] contrast-[1.1]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Zentrum der Migration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Activity Carousel */}
      <section className="py-12 md:py-16 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-12 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-2 block">Die Erlebnisse</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Safari <br /><span className="text-primary">Highlights</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-sm font-bold uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block leading-relaxed">
              Vom Elefanten-Tracking bis hin zur nächtlichen Pirschfahrt – Tarangire bietet exklusive Einblicke.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {activities.map((act, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-[#fdfcfb] rounded-[2.5rem] overflow-hidden shadow-lg border border-border/50 group h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={act.img} alt={act.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute top-5 left-5">
                        <Badge className="bg-secondary text-white border-none font-bold text-[8px] uppercase tracking-widest px-3 py-1 shadow-lg">{act.level}</Badge>
                      </div>
                    </div>
                    <div className="p-8 space-y-5 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10">
                            <act.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{act.time}</span>
                        </div>
                        <h4 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase leading-tight group-hover:text-primary transition-colors">{act.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground font-bold leading-relaxed">{act.desc}</p>
                      </div>
                      <Link href="/contact" className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-primary hover:translate-x-1 transition-transform pt-5 border-t border-border/50 group/btn">
                        Jetzt Buchen <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-muted hover:bg-primary hover:text-white transition-all shadow-xl" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-muted hover:bg-primary hover:text-white transition-all shadow-xl" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Climate & Expert Insights */}
      <section className="py-12 md:py-16 bg-[#fdfcfb] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] block mb-2">Peak Safari Zeit</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase leading-[0.9] tracking-tighter text-secondary">Wann <br /><span className="text-primary">Besuchen?</span></h2>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-border shadow-sm group hover:border-primary transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sun className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base uppercase text-secondary">Juli – Oktober</p>
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">Trockenzeit & Beste Sichtungen</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-border shadow-sm group hover:border-primary transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CloudSun className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base uppercase text-secondary">November – Mai</p>
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">Grüne Saison & Vogelvielfalt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white">
                <Image src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1000" alt="Tarangire Elephants" fill className="object-cover" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-8 -right-4 bg-secondary p-8 rounded-[2.5rem] shadow-2xl hidden lg:block border border-white/10 max-w-[300px]"
              >
                <Sparkles className="w-8 h-8 text-primary mb-5" />
                <h4 className="text-white font-bold text-lg uppercase leading-tight mb-3">Tipp der Guides</h4>
                <p className="text-white font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                  Konzentrieren Sie Ihre Pirschfahrten während der Trockenzeit auf den Tarangire-Fluss – hier versammeln sich hunderte Elefanten an einem Ort.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
