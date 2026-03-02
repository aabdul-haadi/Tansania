
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Waves, 
  MapPin, 
  Compass, 
  Camera, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  CloudSun,
  Timer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/sections/ContactSection';

const pointsOfInterest = [
  { 
    id: 'momella', 
    name: 'Momella Seen', 
    desc: 'Ein Paradies für Flamingos und spektakuläre Bergrefelektionen.', 
    coords: '-3.225,36.915',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    id: 'meru', 
    name: 'Mount Meru', 
    desc: 'Tansanias zweithöchster Vulkan und der kleine Bruder des Kili.', 
    coords: '-3.244,36.754',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  { 
    id: 'ngurdoto', 
    name: 'Ngurdoto Krater', 
    desc: 'Ein unberührter, versunkener Krater voller Wildtiere.', 
    coords: '-3.295,36.862',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

const activities = [
  { 
    title: 'Geführtes Hiking', 
    icon: Mountain, 
    level: 'Anspruchsvoll', 
    time: '3-4 Tage', 
    desc: 'Besteigen Sie den majestätischen Mount Meru mit unseren Profi-Guides.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
  },
  { 
    title: 'Kanu-Safari', 
    icon: Waves, 
    level: 'Entspannt', 
    time: '3 Std.', 
    desc: 'Beobachten Sie Büffel und Wasserböcke direkt vom stillen See aus.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    title: 'Wildlife Drive', 
    icon: Camera, 
    level: 'Familienfreundlich', 
    time: 'Halbtags', 
    desc: 'Entdecken Sie Giraffen und die seltenen schwarz-weißen Stummelaffen.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

export default function ArushaParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 1) Immersive Cinema Hero */}
      <section className="relative h-[65vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Arusha National Park Savannah"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-6">
            <Badge className="bg-primary text-white border-none font-bold text-[10px] uppercase tracking-[0.4em] px-6 py-2 shadow-2xl mb-4">Das Tor zur Wildnis</Badge>
            <h1 className="font-headline text-4xl md:text-8xl font-bold text-white leading-none tracking-tighter uppercase shadow-sm">
              Arusha <br /><span className="text-primary">Nationalpark</span>
            </h1>
            <p className="max-w-xl mx-auto text-[10px] md:text-lg text-white/90 font-black uppercase tracking-[0.4em]">
              Die perfekte Symbiose aus Regenwald und Vulkanlandschaft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2) Geographical Navigator (Interactive Map Dashboard) */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
            
            {/* Left: POI Selector */}
            <div className="lg:col-span-4 p-8 md:p-12 bg-muted/20 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Park Navigator</span>
                  <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">Entdecke die <br /><span className="text-primary">Hotspots</span></h2>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {pointsOfInterest.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => setActivePoi(p)}
                      className={cn(
                        "text-left p-6 rounded-2xl border transition-all flex justify-between items-center group",
                        activePoi.id === p.id ? "bg-secondary text-white shadow-xl translate-x-2 border-transparent" : "bg-white hover:border-primary/20 text-secondary/60 hover:text-secondary"
                      )}
                    >
                      <div>
                        <p className={cn("text-[8px] font-black uppercase tracking-widest mb-1", activePoi.id === p.id ? "text-primary" : "text-muted-foreground")}>Sehenswürdigkeit</p>
                        <p className="font-bold text-lg uppercase tracking-tight">{p.name}</p>
                      </div>
                      <ChevronRight className={cn("w-5 h-5 transition-transform duration-500", activePoi.id === p.id ? "text-primary rotate-0" : "text-muted-foreground -rotate-90 opacity-0 group-hover:opacity-100")} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-3xl border border-border shadow-sm hidden lg:block">
                <p className="text-xs text-muted-foreground font-bold leading-relaxed">
                  "{activePoi.desc}"
                </p>
              </div>
            </div>

            {/* Right: Map Integration */}
            <div className="lg:col-span-8 relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15935.0!2d${activePoi.coords.split(',')[1]}!3d${activePoi.coords.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz`}
                className="absolute inset-0 w-full h-full border-none grayscale-[0.3] contrast-[1.1]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Live Park-Daten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Modern Activity Carousel (Mobile-First) */}
      <section className="py-16 md:py-32 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Die Erlebnisse</span>
              <h2 className="font-headline text-4xl md:text-8xl font-bold text-secondary uppercase tracking-tighter">Expedition & <br /><span className="text-primary">Action</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-sm font-black uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block leading-relaxed">
              Arusha bietet Abenteuer für jede Fitnessstufe – von entspannten Kanufahrten bis hin zu Gipfelstürmen.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {activities.map((act, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-[#fdfcfb] rounded-[3rem] overflow-hidden shadow-lg border border-border/50 group h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-72 overflow-hidden">
                      <Image src={act.img} alt={act.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-secondary text-white border-none font-black text-[9px] uppercase tracking-widest px-4 py-1.5 shadow-lg">{act.level}</Badge>
                      </div>
                    </div>
                    <div className="p-10 space-y-6 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10">
                            <act.icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{act.time}</span>
                        </div>
                        <h4 className="font-headline text-2xl font-bold text-secondary uppercase leading-tight group-hover:text-primary transition-colors">{act.title}</h4>
                        <p className="text-sm text-muted-foreground font-bold leading-relaxed">{act.desc}</p>
                      </div>
                      <Link href="/contact" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:translate-x-2 transition-transform pt-6 border-t border-border/50 group/btn">
                        Jetzt Anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12 md:mt-16">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border-muted hover:bg-primary hover:text-white transition-all shadow-xl" />
              <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border-muted hover:bg-primary hover:text-white transition-all shadow-xl" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 4) Climate & Expert Insights (High Contrast Light Theme) */}
      <section className="py-20 md:py-32 bg-[#fdfcfb] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-10">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Klima & Planung</span>
                <h2 className="font-headline text-4xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter text-secondary">Die perfekte <br /><span className="text-primary">Reisezeit</span></h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-border shadow-sm group hover:border-primary transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CloudSun className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-lg uppercase text-secondary">Juni – Oktober</p>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Trockenzeit & Beste Fernsicht</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-border shadow-sm group hover:border-primary transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Waves className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-lg uppercase text-secondary">November – Mai</p>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Grüne Saison & Vogelwelt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000" alt="Arusha Guides" fill className="object-cover" />
              </div>
              {/* Expert Tip - Pure White Text on Charcoal for high contrast */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-10 -right-6 bg-secondary p-10 rounded-[3rem] shadow-2xl hidden lg:block border border-white/10 max-w-[340px]"
              >
                <Sparkles className="w-10 h-10 text-primary mb-6" />
                <h4 className="text-white font-black text-xl uppercase leading-tight mb-3">Geheimtipp der Guides</h4>
                <p className="text-white font-bold text-[11px] uppercase tracking-widest opacity-90 leading-relaxed">
                  Starten Sie Ihre Kanu-Tour pünktlich zum Sonnenaufgang für die magischsten Mount Meru-Reflektionen auf den Momella Seen.
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
