"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Camera,
  Waves,
  TreePine,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';
import { cn } from '@/lib/utils';

const activities = [
  {
    id: 'game-drive',
    label: 'Pirschfahrten',
    icon: Camera,
    title: 'Dschungel- & See-Safari',
    duration: '4-6 Std',
    people: 'Max. 6',
    distance: 'Variabel',
    desc: 'Wir durchfahren verschiedene Vegetationszonen auf der Suche nach den berühmten baumkletternden Löwen und großen Elefantenherden.',
    features: [
      'Beobachtung von Baum-Löwen',
      'Elefanten im dichten Wald',
      'Fahrt entlang des Seeufers'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    level: 'Sehr leicht'
  },
  {
    id: 'canoe',
    label: 'Kanu-Safari',
    icon: Waves,
    title: 'Paddeln auf dem Manyara-See',
    duration: '2-3 Std',
    people: 'Max. 2 pro Kanu',
    distance: 'Variabel',
    desc: 'Gleiten Sie lautlos am Ufer entlang. Eine einzigartige Perspektive auf Nilpferde und Wasservögel.',
    features: [
      'Nahe Begegnungen mit Flamingos',
      'Stille des Sees genießen',
      'Professionelle Kanu-Guides'
    ],
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800',
    level: 'Leicht'
  },
  {
    id: 'treetop',
    label: 'Treetop Walkway',
    icon: TreePine,
    title: 'Manyara Treetop Walkway',
    duration: '1 Std',
    people: 'Max. 10',
    distance: '370 m',
    desc: 'Tansanias erster Hängebrücken-Pfad führt Sie in 18 Metern Höhe durch die Baumkronen des Grundwasserwaldes.',
    features: [
      'Perspektive aus der Vogelwelt',
      'Beobachtung von Schmetterlingen',
      'Natur hautnah erleben'
    ],
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800',
    level: 'Leicht'
  }
];

export default function ManyaraPage() {
  const [activeActivity, setActiveActivity] = useState(activities[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image src="/assets/images/national-parks/manyara-lake.jpg" alt="Manyara" fill priority className="object-cover brightness-75 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <p className="text-white text-[11px] font-normal tracking-normal drop-shadow-lg uppercase tracking-[0.3em]">Das grüne Juwel am Afrikanischen Grabenbruch</p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight uppercase">Lake Manyara Nationalpark</h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-primary font-bold text-[10px] block tracking-widest uppercase">Kompakte Vielfalt auf engstem Raum</span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight uppercase">Vom Urwald bis zum See</h2>
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] opacity-90">
                <p>Obwohl Lake Manyara einer der kleineren Parks Tansanias ist, beeindruckt er durch seine landschaftliche Abwechslung.</p>
                <p>Direkt hinter dem Eingangsbereich durchfahren Sie einen dichten Grundwasserwald, in dem Paviane und Diademmeerkatzen spielen, bevor sich der Blick auf den See öffnet.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Manyara Forest" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 Unvergessliche Aktivitäten - Centered Mobile Registry */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-3">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter uppercase text-center">Unvergessliche Aktivitäten</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {activities.map((act) => (
              <button 
                key={act.id} 
                onClick={() => setActiveActivity(act)} 
                className={cn(
                  "px-4 py-2 md:px-6 md:py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-2", 
                  activeActivity.id === act.id ? "bg-secondary text-white border-secondary shadow-xl scale-105" : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                <act.icon className={cn("w-3.5 h-3.5", activeActivity.id === act.id ? "text-primary" : "text-muted-foreground")} />
                <span className="uppercase">{act.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeActivity.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              transition={{ duration: 0.4 }} 
              className="flex justify-center"
            >
              <Card className="rounded-[1.5rem] md:rounded-[3rem] border border-border/40 overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row max-w-6xl w-full">
                <div className="w-full lg:w-[45%] relative aspect-video lg:aspect-auto min-h-[220px]">
                  <Image src={activeActivity.img} alt={activeActivity.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold uppercase">{activeActivity.duration}</Badge>
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold uppercase">{activeActivity.level}</Badge>
                  </div>
                </div>
                <div className="flex-1 p-5 md:p-10 lg:p-12 space-y-6 flex flex-col justify-center text-center lg:text-left">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight uppercase leading-tight">{activeActivity.title}</h3>
                    
                    <div className="grid grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-primary">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[7px] md:text-[9px] font-bold tracking-widest uppercase">Dauer</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary uppercase">{activeActivity.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-primary">
                          <Users className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[7px] md:text-[9px] font-bold tracking-widest uppercase">Personen</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary uppercase">{activeActivity.people}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-primary">
                          <Zap className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[7px] md:text-[9px] font-bold tracking-widest uppercase">Art</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary uppercase">{activeActivity.label}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-[14px] leading-[20px] font-normal tracking-tight opacity-70 max-w-lg mx-auto lg:mx-0">{activeActivity.desc}</p>
                    
                    <div className="space-y-2.5 max-w-md mx-auto lg:mx-0">
                      {activeActivity.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-left">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto rounded-xl px-10 h-12 md:h-14 bg-primary text-white font-bold text-[10px] tracking-widest shadow-xl border-none uppercase">Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" /></Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 04 Action Trigger */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl text-center lg:text-left">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 lg:w-[60%] space-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl shrink-0">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-normal text-white leading-tight tracking-tighter uppercase">Planen Sie Ihre perfekte Manyara Safari</h2>
              </div>
              <p className="text-white/80 font-normal text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl mx-auto lg:mx-0">Erleben Sie die faszinierenden baumkletternden Löwen und die üppige Natur Manyaras. Wir entwerfen Ihre individuelle Reise durch Tansanias grüne Perle.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group uppercase">Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="manyara" />
      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
