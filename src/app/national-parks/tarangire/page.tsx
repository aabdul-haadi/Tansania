
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Clock, 
  Camera, 
  ArrowRight,
  TreePine,
  Wind,
  Bird,
  Users,
  CheckCircle2,
  Footprints
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/shared/ContactSection';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';
import { cn } from '@/lib/utils';

const activities = [
  {
    id: 'game-drive',
    label: 'Pirschfahrten',
    icon: Camera,
    title: 'Klassische Pirschfahrten im Elefantenreich',
    duration: '6-8 Std',
    people: 'Max. 6',
    distance: 'Variabel',
    desc: 'Erleben Sie die Giganten der Savanne aus nächster Nähe. Unsere 4x4 Safaris führen Sie zu den besten Beobachtungspunkten entlang des Tarangire-Flusses.',
    features: [
      'Beobachtung riesiger Elefantenherden',
      'Fotostopps an monumentalen Baobabs',
      'Erfahrene Guides mit Tier-Expertise'
    ],
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800',
    level: 'Sehr leicht'
  },
  {
    id: 'walking',
    label: 'Walking Safari',
    icon: Footprints,
    title: 'Geführte Busch-Wanderung',
    duration: '2-4 Std',
    people: 'Max. 4',
    distance: '5-8 km',
    desc: 'Spüren Sie den Boden unter Ihren Füßen. In Begleitung eines Rangers entdecken Sie die kleinen Wunder der Natur.',
    features: [
      'Spurenlesen & Fährtenkunde',
      'Botanische Einblicke',
      'Intensives Naturerlebnis'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    level: 'Mittel'
  },
  {
    id: 'birding',
    label: 'Vogelbeobachtung',
    icon: Bird,
    title: 'Ornithologische Expedition',
    duration: '4-6 Std',
    people: 'Max. 6',
    distance: 'Variabel',
    desc: 'Mit über 550 Vogelarten ist Tarangire ein Paradies für Beobachter. Wir suchen seltene Arten in den Sümpfen.',
    features: [
      'Spezialisierte Birding-Guides',
      'Besuch des Silale Sumpfes',
      'Checkliste der lokalen Arten'
    ],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800',
    level: 'Leicht'
  }
];

export default function TarangireParkPage() {
  const [activeActivity, setActiveActivity] = useState(activities[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image src="/assets/images/national-parks/tarangire-baobab.jpg" alt="Tarangire" fill priority className="object-cover brightness-75 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-16 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <p className="text-white text-[11px] font-normal tracking-normal drop-shadow-lg">Das Reich der sanften Riesen und uralten Bäume</p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">Tarangire Nationalpark</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6 text-left">
              <div className="space-y-2"><div className="w-8 h-0.5 bg-primary" /><span className="text-primary font-normal text-[11px] block tracking-normal">Ein Refugium der Stille und Größe</span></div>
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">Elefantenparadies mit Baobab-Landschaft</h2>
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] opacity-90">
                <p>Der Tarangire-Nationalpark liegt südlich des Manyara-Sees und ist ein echter Geheimtipp für Naturfotografen. Die Landschaft aus goldgelben Ebenen und uralten Affenbrotbäumen ist einzigartig.</p>
                <p>In der Trockenzeit von Juni bis Oktober wird der Tarangire-Fluss zum einzigen dauerhaften Wasserspeicher der Region, was zu einer enormen Tierkonzentration führt.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Tarangire Elephants" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <span className="text-primary font-normal tracking-[0.4em] text-[10px]">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter text-center">Unvergessliche Aktivitäten im Tarangire Park</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {activities.map((act) => (
              <button 
                key={act.id} 
                onClick={() => setActiveActivity(act)} 
                className={cn(
                  "px-4 py-2 md:px-6 md:py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-2 md:gap-3", 
                  activeActivity.id === act.id ? "bg-secondary text-white border-secondary shadow-xl scale-105" : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                <act.icon className={cn("w-3.5 h-3.5 md:w-4 h-4", activeActivity.id === act.id ? "text-primary" : "text-muted-foreground")} />
                {act.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeActivity.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="flex justify-center">
              <Card className="rounded-[1.5rem] md:rounded-[3rem] border border-border/40 overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row max-w-6xl w-full">
                <div className="w-full lg:w-[45%] relative aspect-video lg:aspect-auto min-h-[220px] md:min-h-[400px]">
                  <Image src={activeActivity.img} alt={activeActivity.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold">{activeActivity.duration}</Badge>
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold">{activeActivity.level}</Badge>
                  </div>
                </div>
                <div className="flex-1 p-5 md:p-10 lg:p-12 space-y-4 md:space-y-8 flex flex-col justify-center text-left">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight">{activeActivity.title}</h3>
                    <div className="grid grid-cols-3 gap-1 md:gap-4 pb-4 md:pb-6 border-b border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-primary">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Dauer</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary">{activeActivity.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-primary">
                          <Users className="w-3.5 h-3.5" />
                          <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Personen</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary">{activeActivity.people}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-primary">
                          <TreePine className="w-3.5 h-3.5" />
                          <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Art</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary">{activeActivity.label}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-[14px] leading-[20px] font-normal tracking-tight opacity-70">{activeActivity.desc}</p>
                    <div className="space-y-2 md:space-y-3">
                      {activeActivity.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto rounded-xl px-10 h-12 md:h-14 bg-primary text-white font-bold text-[10px] tracking-widest shadow-xl border-none">Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" /></Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl text-center lg:text-left">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 lg:w-[60%] space-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl shrink-0">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-normal tracking-tighter text-white leading-tight">Planen Sie Ihre perfekte Tarangire Safari</h2>
              </div>
              <p className="text-white/80 font-normal text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl mx-auto lg:mx-0">Erleben Sie die Giganten der Savanne in ihrer natürlichen Umgebung. Wir gestalten Ihre Route für maximale Tiersichtungen und exklusiven Komfort.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="tarangire" />
      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
