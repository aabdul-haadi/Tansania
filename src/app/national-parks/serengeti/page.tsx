
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  Map as MapIcon,
  Zap,
  Clock,
  Users,
  Camera,
  Wind,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';
import { cn } from '@/lib/utils';

const timeline = [
  {
    dates: "Jan - Mär",
    title: "Kalbungszeit im Süden",
    desc: "Ndutu Area - Täglich bis zu 8.000 Kälber werden geboren. Perfekte Zeit für Raubtierbeobachtungen.",
    side: "left"
  },
  {
    dates: "Apr - Mai",
    title: "Westwärts zum Grumeti",
    desc: "Wanderung durch die zentrale Serengeti in Richtung Westlicher Korridor.",
    side: "right"
  },
  {
    dates: "Jun - Jul",
    title: "Grumeti-Flussüberquerungen",
    desc: "Dramatische Flussüberquerungen mit Krokodilen im Westlichen Korridor.",
    side: "left"
  },
  {
    dates: "Aug - Okt",
    title: "Mara-Fluss im Norden",
    desc: "Höhepunkt der Migration mit spektakulären Flusskreuzungen an der Grenze zu Kenia.",
    side: "right"
  },
  {
    dates: "Nov - Dez",
    title: "Rückkehr in den Süden",
    desc: "Mit den kurzen Regenfällen kehren die Herden in ihre Geburtsregion zurück.",
    side: "left"
  }
];

const activities = [
  {
    id: 'game-drive',
    label: 'Pirschfahrten',
    icon: Camera,
    title: 'Klassische Pirschfahrten & Game Drives',
    duration: '3-8 Std',
    people: 'Max. 6',
    frequency: '30+',
    desc: 'Entdecken Sie die Serengeti bei klassischen Pirschfahrten in speziell umgebauten Safari-Fahrzeugen. Erfahren Sie mehr über das Ökosystem von erfahrenen Guides.',
    features: [
      'Morgenpirschfahrt (6:00-10:00 Uhr)',
      'Nachmittagspirschfahrt (15:00-18:30 Uhr)',
      'Ganztagessafari mit Picknick'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    level: 'Sehr leicht'
  },
  {
    id: 'balloon',
    label: 'Heißluftballon',
    icon: Wind,
    title: 'Serengeti Ballon-Safari',
    duration: '1-2 Std',
    people: 'Max. 12',
    frequency: 'Täglich',
    desc: 'Gleiten Sie lautlos über die Savanne, während die Sonne aufgeht und die Migration unter Ihnen erwacht. Ein exklusives Highlight.',
    features: [
      'Sonnenaufgangs-Flug',
      'Champagner-Frühstück im Busch',
      'Zertifikat über die Teilnahme'
    ],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800',
    level: 'Moderat'
  },
  {
    id: 'migration',
    label: 'Migration Tour',
    icon: MapIcon,
    title: 'Migration Tracking Expedition',
    duration: 'Ganztags',
    people: 'Privat',
    frequency: 'Saisonal',
    desc: 'Wir folgen den Spuren der Großen Migration. Unsere Guides nutzen Echtzeit-Daten, um Sie direkt an das Herz des Geschehens zu bringen.',
    features: [
      'Echtzeit-Tracking der Herden',
      'Fokus auf Flussüberquerungen',
      'Erfahrene Migration-Spezialisten'
    ],
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800',
    level: 'Intensiv'
  }
];

export default function SerengetiPage() {
  const [activeActivity, setActiveActivity] = useState(activities[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Serengeti Nationalpark" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <p className="text-white text-[11px] font-normal tracking-normal drop-shadow-lg uppercase tracking-[0.3em]">Das größte Naturschauspiel der Erde</p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">Serengeti Nationalpark</h1>
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
                <span className="text-primary font-bold text-[10px] block tracking-widest">Unesco-Weltnaturerbe seit 1952</span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">Die endlose Ebene voller Leben</h2>
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] opacity-90">
                <p>Der Serengeti Nationalpark, 1952 gegründet und Unesco-Weltnaturerbe, ist eines der ältesten und bekanntesten Ökosysteme der Erde. Sein Name stammt aus der Massai-Sprache "Siringitu", was "endloses Land" bedeutet – eine perfekte Beschreibung für die weiten Savannen, die sich über fast 30.000 Quadratkilometer erstrecken.</p>
                <p>Mit dieser beeindruckenden Fläche ist die Serengeti das größte und artenreichste Schutzgebiet Tansanias und beherbergt die höchste Konzentration an Wildtieren in Afrika. Hier spielt sich jedes Jahr das größte Tierwanderungsspektakel unseres Planeten ab.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted">
              <Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" alt="Serengeti Sunset" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 Migration Timeline with Cinematic Overlay */}
      <section className="relative py-12 md:py-24 overflow-hidden bg-secondary">
        <Image src="/assets/images/national-parks/card-migration.jpg" alt="Migration Path" fill className="object-cover brightness-[0.6] opacity-60 scale-105" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-white tracking-tighter">Die Route der Großen Migration</h2>
            <p className="text-white/80 font-normal text-sm tracking-widest max-w-xl mx-auto">Folgen Sie dem jährlichen Zyklus der Tierwanderung</p>
          </div>
          <div className="relative space-y-12 md:space-y-16">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/20 z-0 hidden md:block" />
            {timeline.map((item, idx) => (
              <div key={idx} className={cn("relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12", item.side === 'right' ? "md:flex-row-reverse" : "")}>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <div className={cn("p-6 md:p-10 bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl w-full text-left", item.side === 'right' ? "md:text-left" : "md:text-right")}>
                    <div className={cn("flex items-center gap-4 mb-4", item.side === 'right' ? "flex-row-reverse" : "flex-row justify-end")}>
                      <h4 className="font-headline text-xl md:text-2xl font-bold text-secondary">{item.title}</h4>
                      <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[9px] font-bold">{item.dates}</Badge>
                    </div>
                    <p className="text-[13px] md:text-[14px] text-muted-foreground font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full bg-primary border-4 border-secondary z-20" />
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Unvergessliche Aktivitäten - Compact & Centered */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-3">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter text-center">Unvergessliche Aktivitäten</h2>
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
                <span>{act.label}</span>
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
                    <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold">{activeActivity.duration}</Badge>
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold">{activeActivity.level}</Badge>
                  </div>
                </div>
                <div className="flex-1 p-5 md:p-10 lg:p-12 space-y-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                  <div className="space-y-4 md:space-y-6 w-full">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight leading-tight">{activeActivity.title}</h3>
                    
                    <div className="grid grid-cols-3 gap-1 md:gap-4 pb-4 border-b border-border/50 w-full">
                      <div className="space-y-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-primary">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[7px] md:text-[9px] font-bold tracking-widest">Dauer</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary">{activeActivity.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-primary">
                          <Users className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[7px] md:text-[9px] font-bold tracking-widest">Personen</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary">{activeActivity.people}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1.5 text-primary">
                          <Zap className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[7px] md:text-[9px] font-bold tracking-widest">Fokus</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-bold text-secondary">{activeActivity.frequency}</p>
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
                  <div className="pt-4 w-full sm:w-auto">
                    <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto rounded-xl px-10 h-12 md:h-14 bg-primary text-white font-bold text-[10px] tracking-widest shadow-xl border-none">Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" /></Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 05 Action Trigger */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl text-center lg:text-left">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 lg:w-[60%] space-y-6">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl shrink-0">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-normal text-white leading-tight tracking-tighter">Planen Sie Ihre perfekte Serengeti Safari</h2>
              </div>
              <p className="text-white/80 font-normal text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl mx-auto lg:mx-0">Unsere Safari-Experten helfen Ihnen, die idealen Aktivitäten für Ihre Reisezeit und Interessen zu kombinieren. Erstellen Sie jetzt Ihr individuelles Programm.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="serengeti" />
      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
