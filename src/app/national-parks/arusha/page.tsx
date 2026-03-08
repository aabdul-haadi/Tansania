"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Waves, 
  MapPin, 
  Camera, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  CloudSun
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
    desc: 'Ein Paradies für Flamingos und spektakuläre Bergreflexionen auf dem stillen Wasser.', 
    coords: '-3.225,36.915',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    id: 'meru', 
    name: 'Mount Meru', 
    desc: 'Tansanias zweithöchster Vulkan und der beeindruckende kleine Bruder des Kilimandscharo.', 
    coords: '-3.244,36.754',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  { 
    id: 'ngurdoto', 
    name: 'Ngurdoto Krater', 
    desc: 'Ein unberührter, versunkener Krater voller Wildtiere, oft als kleiner Ngorongoro bezeichnet.', 
    coords: '-3.295,36.862',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

const activities = [
  { 
    title: 'Hiking', 
    icon: Mountain, 
    level: 'Hard', 
    time: '3-4 Tage', 
    desc: 'Besteigen Sie den majestätischen Mount Meru mit unseren staatlich geprüften Profi-Guides.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
  },
  { 
    title: 'Kanu', 
    icon: Waves, 
    level: 'Easy', 
    time: '3 Std.', 
    desc: 'Beobachten Sie Büffel und Wasserböcke direkt vom stillen See aus – eine lautlose Begegnung.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    title: 'Wildlife', 
    icon: Camera, 
    level: 'Family', 
    time: 'Halbtags', 
    desc: 'Entdecken Sie Giraffen und seltene Stummelaffen im dichten Regenwald.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

export default function ArushaParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      <section className="relative h-[55vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
          alt="Arusha National Park"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <Badge className="bg-primary text-white border-none font-bold text-[8px] uppercase tracking-[0.4em] px-4 py-1.5 shadow-2xl mb-2">Tor zur Wildnis</Badge>
            <h1 className="font-headline text-3xl md:text-8xl font-bold text-white leading-none tracking-tighter uppercase">
              Arusha <br /><span className="text-primary">Nationalpark</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-6 md:py-12 container mx-auto px-3 md:px-4 max-w-7xl">
        <div className="bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px] md:min-h-[650px]">
            <div className="lg:col-span-4 p-5 md:p-10 bg-muted/20 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-between">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] block mb-1">Park Navigator</span>
                  <h2 className="font-headline text-xl md:text-4xl font-bold text-secondary uppercase tracking-tighter">Die <span className="text-primary">Hotspots</span></h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {pointsOfInterest.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => setActivePoi(p)}
                      className={cn(
                        "text-left p-3 rounded-lg border transition-all flex justify-between items-center",
                        activePoi.id === p.id ? "bg-secondary text-white shadow-xl" : "bg-white text-secondary/60"
                      )}
                    >
                      <div>
                        <p className="text-[7px] font-black uppercase tracking-widest mb-0.5">POI</p>
                        <p className="font-bold text-xs md:text-base uppercase tracking-tight truncate">{p.name}</p>
                      </div>
                      <ChevronRight className={cn("w-3 h-3", activePoi.id === p.id ? "text-primary" : "opacity-0")} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl border border-border shadow-sm hidden lg:block">
                <p className="text-[10px] text-muted-foreground font-bold leading-tight">"{activePoi.desc}"</p>
              </div>
            </div>
            <div className="lg:col-span-8 relative aspect-video lg:aspect-auto">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15935.0!2d${activePoi.coords.split(',')[1]}!3d${activePoi.coords.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz`}
                className="absolute inset-0 w-full h-full border-none grayscale-[0.3]"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 md:mb-12">
            <h2 className="font-headline text-2xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Erlebnisse</h2>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3 md:-ml-4">
              {activities.map((act, i) => (
                <CarouselItem key={i} className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-[#fdfcfb] rounded-[1.25rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border border-border/50 group h-full flex flex-col transition-all duration-500">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <Image src={act.img} alt={act.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white border-none font-bold text-[7px] uppercase tracking-widest px-2 py-0.5 shadow-lg">{act.level}</Badge>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="font-headline text-lg md:text-2xl font-bold text-secondary uppercase leading-tight group-hover:text-primary transition-colors">{act.title}</h4>
                        <p className="text-[10px] md:text-sm text-muted-foreground font-bold leading-tight">{act.desc}</p>
                      </div>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.2em] text-primary pt-4 border-t border-border/50">
                        Anfragen <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-muted" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-muted" />
            </div>
          </Carousel>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}