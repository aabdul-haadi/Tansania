
"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Compass, 
  Map, 
  Camera, 
  Bird, 
  Sun, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  TreePine,
  Wind,
  Mountain,
  Zap,
  MapPin,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactSection } from '@/components/shared/ContactSection';
import { cn } from '@/lib/utils';

const parksData = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    fullName: 'Serengeti Nationalpark',
    tagline: 'Die Bühne der Großen Tierwanderung',
    desc: 'Erleben Sie die endlose Weite und das größte Naturschauspiel der Welt – die Wanderung von Millionen Gnus und Zebras.',
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
    desc: 'Ein natürliches Amphitheater in einem schlafenden Vulkan. Höchste Raubtierdichte Afrikas auf engstem Raum.',
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
    desc: 'Berühmt für seine riesigen Affenbrotbäume und massiven Elefantenherden am Tarangire-Fluss.',
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
    desc: 'Ein Juwel am Fuß des Rift Valley. Bekannt für seine riesigen Flamingoscharren und einzigartigen Löwen.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200',
    highlights: ['Flamingo-Beobachtung', 'Grundwasserwald', 'Nacht-Pirschfahrten'],
    wildlife: ['Flamingos', 'Baumkletternde Löwen', 'Nilpferde'],
    bestTime: 'Juni bis September'
  }
];

export default function NationalParksPage() {
  const [activePark, setActivePark] = useState(parksData[0]);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal" ref={containerRef}>
      {/* COMPACT DARK HERO */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
            alt="Tansania Safari Nationalparks"
            fill
            priority
            className="object-cover brightness-[0.3] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 md:px-6 md:py-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl">
              National-Registry
            </Badge>
            <h1 className="text-white uppercase">
              Die Seele <br />
              <span className="text-primary">Tansanias</span>
            </h1>
            <p className="max-w-xl mx-auto text-[9px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
              Entdecken Sie die Nationalparks, wo die Natur noch ihre eigenen Gesetze schreibt.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-8 md:-mt-12 px-3 md:px-10 pb-10 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[750px]">
              
              <div className="w-full lg:w-1/3 bg-muted/20 border-b lg:border-b-0 lg:border-r border-border/50 p-4 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-4 md:mb-8 block">Expeditions-Ziel</span>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4">
                    {parksData.map((park) => (
                      <button
                        key={park.id}
                        onClick={() => setActivePark(park)}
                        className={cn(
                          "text-left group transition-all duration-500 flex items-center justify-between p-2.5 md:p-5 rounded-lg md:rounded-2xl border border-transparent",
                          activePark.id === park.id 
                            ? "bg-secondary text-white shadow-xl" 
                            : "hover:bg-primary/5 text-secondary/60 hover:text-secondary"
                        )}
                      >
                        <div className="flex flex-col">
                          <span className={cn(
                            "text-[7px] md:text-[9px] font-bold uppercase tracking-widest",
                            activePark.id === park.id ? "text-primary" : "text-muted-foreground"
                          )}>
                            Region
                          </span>
                          <span className="font-headline text-sm md:text-2xl font-bold uppercase truncate leading-none">{park.name}</span>
                        </div>
                        <ChevronRight className={cn(
                          "w-3.5 h-3.5 md:w-5 md:h-5 transition-transform",
                          activePark.id === park.id ? "text-primary rotate-0" : "text-muted-foreground opacity-0"
                        )} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50 hidden lg:block">
                  <div className="flex items-center gap-3 p-4 bg-primary rounded-2xl text-white group cursor-pointer shadow-xl">
                    <Sparkles className="w-4 h-4 text-white" />
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-widest leading-none mb-1">AI Advisor</p>
                      <p className="text-[10px] font-bold">Passenden Park finden</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePark.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col h-full"
                  >
                    <div className="relative h-[200px] md:h-[450px] shrink-0">
                      <Image 
                        src={activePark.img} 
                        alt={activePark.fullName} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-12">
                        <h2 className="text-secondary leading-none tracking-tighter uppercase">
                          {activePark.fullName}
                        </h2>
                      </div>
                    </div>

                    <div className="p-5 md:p-12 space-y-8 flex-grow overflow-y-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                        <div className="space-y-4 md:space-y-8">
                          <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px]">Die Geschichte</h3>
                          <p className="text-secondary font-bold text-sm md:text-xl leading-relaxed uppercase tracking-tight opacity-80">
                            {activePark.desc}
                          </p>
                          <div className="grid grid-cols-2 gap-2 md:gap-6">
                            <div className="p-3 md:p-6 bg-muted/20 rounded-xl md:rounded-[2rem] border border-border/50">
                              <p className="text-[7px] md:text-[9px] font-bold uppercase text-muted-foreground">Reisezeit</p>
                              <p className="text-[9px] md:text-sm font-bold text-secondary flex items-center gap-1.5 mt-1">
                                <Sun className="w-3 h-3 text-primary" /> {activePark.bestTime}
                              </p>
                            </div>
                            <div className="p-3 md:p-6 bg-muted/20 rounded-xl md:rounded-[2rem] border border-border/50">
                              <p className="text-[7px] md:text-[9px] font-bold uppercase text-muted-foreground">Status</p>
                              <p className="text-[9px] md:text-sm font-bold text-secondary flex items-center gap-1.5 mt-1">
                                <MapPin className="w-3 h-3 text-primary" /> UNESCO
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 md:space-y-8">
                          <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px]">Wildtier-Check</h3>
                          <div className="grid grid-cols-2 gap-2 md:gap-4">
                            {activePark.wildlife.map((animal, i) => (
                              <div key={i} className="flex items-center gap-2 p-2.5 md:p-4 bg-white border border-border/50 rounded-lg md:rounded-2xl shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                <span className="text-[8px] md:text-[11px] font-bold uppercase tracking-widest text-secondary">{animal}</span>
                              </div>
                            ))}
                          </div>
                          <div className="pt-4 md:pt-10">
                            <Link href="/safaris">
                              <Button className="w-full h-11 md:h-14 rounded-xl md:rounded-[2rem] font-bold uppercase tracking-widest text-[9px] md:text-[11px] border-none shadow-xl">
                                Safari finden <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
