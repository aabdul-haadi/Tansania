
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Clock, 
  Mountain, 
  Camera, 
  ArrowRight,
  Waves,
  Bird,
  Users,
  CheckCircle2,
  Map as MapIcon,
  Footprints
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/shared/ContactSection';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';
import { cn } from '@/lib/utils';

const registryCards = [
  {
    title: "Mount Meru (4.566 m)",
    desc: "Tansanias zweithöchster Berg mit 3-4 tägigen Trekkingtouren durch fünf Vegetationszonen – von tropischem Regenwald bis zur alpinen Wüste.",
    icon: Mountain
  },
  {
    title: "Momella Seen",
    desc: "Sieben alkalische Seen mit unterschiedlichen Mineraliengehalten, die jeweils andere Vogelarten anziehen – ein Paradies für Ornithologen.",
    icon: Waves
  },
  {
    title: "Ngurdoto Krater",
    desc: "Auch \"Little Ngorongoro\" genannt, beherbergt dieser Vulkankrater Elefanten, Büffel, Warzenschweine und verschiedene Affenarten.",
    icon: Compass
  },
  {
    title: "Wanderungen & Kanu",
    desc: "Als einziger Nationalpark Tansanias erlaubt Arusha geführte Wanderungen und Kanufahrten – intensive Naturerlebnisse möglich.",
    icon: Footprints
  }
];

const regions = [
  {
    id: 'north',
    badge: 'Nordroute',
    badgeColor: 'bg-secondary',
    title: 'Nördliche Safari Route',
    desc: 'Entdecken Sie die klassische Safari-Route mit den bekanntesten Nationalparks Tansanias.',
    tags: ['Serengeti', 'Ngorongoro', 'Manyara'],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    hint: 'serengeti savannah'
  },
  {
    id: 'south',
    badge: 'Süden',
    badgeColor: 'bg-primary',
    title: 'Südliche Parks',
    desc: 'Erleben Sie unberührte Wildnis und exklusive Safari-Erlebnisse abseits der Touristenpfade.',
    tags: ['Selous', 'Ruaha', 'Mikumi'],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600',
    hint: 'elephant safari'
  },
  {
    id: 'coast',
    badge: 'Küste',
    badgeColor: 'bg-blue-700',
    title: 'Küste & Inseln',
    desc: 'Entspannen Sie an paradiesischen Stränden und entdecken Sie die einzigartige Kultur der Swahili-Küste.',
    tags: ['Sansibar', 'Pemba', 'Mafia'],
    img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=600',
    hint: 'zanzibar beach'
  }
];

const activities = [
  {
    id: 'hike',
    label: 'Wanderungen',
    icon: Footprints,
    title: 'Geführte Wanderungen & Nature Walks',
    duration: '5-6 Std',
    people: 'Max. 6',
    distance: '3-10 km',
    desc: 'Entdecken Sie den Arusha Nationalpark aus nächster Nähe! Unsere geführten Wanderungen führen Sie durch verschiedene Vegetationszonen – vom tropischen Regenwald bis zu offenen Grassavannen.',
    features: [
      'Wanderung zum Tululusia Wasserfall',
      'Naturlehrpfad durch den Meru-Wald',
      'Beobachtung von Colobus-Affen'
    ],
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800',
    level: 'Leicht bis Mittel'
  },
  {
    id: 'canoe',
    label: 'Kanufahrten',
    icon: Waves,
    title: 'Kanu-Safari auf den Momella Seen',
    duration: '2-3 Std',
    people: 'Max. 2 pro Kanu',
    distance: 'Variabel',
    desc: 'Erleben Sie die Stille des Wassers. Lautlos gleiten wir an Wasserbüffeln und Flamingos vorbei – eine völlig neue Perspektive auf die Tierwelt.',
    features: [
      'Nahe Begegnungen am Seeufer',
      'Professionelle Kanu-Guides',
      'Einzigartige Vogelbeobachtung'
    ],
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800',
    level: 'Sehr leicht'
  },
  {
    id: 'game-drive',
    label: 'Pirschfahrten',
    icon: Camera,
    title: 'Boutique Game Drives',
    duration: 'Ganztags',
    people: 'Max. 6',
    distance: 'Variabel',
    desc: 'Die Vielfalt auf engstem Raum: Vom Kraterboden bis zu den Bergwäldern. Ein kompakter, aber intensiver Safari-Tag erwartet Sie.',
    features: [
      'Ngurdoto Krater Aussichtspunkte',
      'Suche nach Leoparden im Bergwald',
      'Kaffee-Pause am See'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    level: 'Sehr leicht'
  }
];

export default function ArushaParkPage() {
  const [activeActivity, setActiveActivity] = useState(activities[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920" alt="Mount Meru View" fill priority className="object-cover brightness-75 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-16 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <p className="text-white text-[11px] font-bold tracking-normal drop-shadow-lg">Einzigartiges Erlebnis vor den Toren Arushas</p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">Arusha Nationalpark</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="space-y-4 text-left">
                <div className="space-y-2"><div className="w-8 h-0.5 bg-primary" /><span className="text-primary font-bold text-[11px] block tracking-normal">Der vielfältigste Nationalpark Tansanias</span></div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">Einzigartiges Naturschauspiel am Mount Meru</h2>
              </div>
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>Nur wenige Kilometer von Arusha Stadt entfernt erwartet Sie ein einzigartiges Naturschauspiel. Der Arusha Nationalpark vereint drei spektakuläre Landschaften: den majestätischen Mount Meru, den Ngurdoto Krater und die sieben zauberhaften Momella Seen.</p>
                <p>Im Gegensatz zu anderen Nationalparks Tansanias können Sie hier Wanderungen unternehmen, Kanu fahren und die Natur hautnah erleben. Ideal für Reisende, die sowohl Wildlife als auch spektakuläre Landschaften suchen.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted">
              <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200" alt="Arusha Landscape" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          {registryCards.map((card, i) => (
            <div key={i} className="p-8 md:p-10 bg-white rounded-2xl border border-border/40 flex items-start gap-6 shadow-sm transition-all hover:shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary"><card.icon className="w-6 h-6 text-primary group-hover:text-white" /></div>
              <div className="space-y-3"><h4 className="font-headline text-lg md:text-2xl font-bold text-secondary tracking-tight leading-tight">{card.title}</h4><p className="text-[14px] leading-[20px] text-muted-foreground font-normal opacity-80">{card.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] block">Unsere Standorte</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">Entdecken Sie Tansania <span className="text-primary">auf der Karte</span></h2>
          </div>
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50 aspect-video md:aspect-[21/9] mb-10 md:mb-16 group">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255141.0565814515!2d36.63467655!3d-3.23307525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837090885e33d07%3A0x633190d79674066b!2sArusha%20National%20Park!5e0!3m2!1sen!2stz!4v1711234567890!5m2!1sen!2stz" className="absolute inset-0 w-full h-full border-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" loading="lazy" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20 w-64 md:w-80 hidden md:block text-left">
              <Card className="bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-2xl"><div className="space-y-6"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><MapPin className="w-5 h-5" /></div><h4 className="font-headline text-xl font-bold text-secondary">Top Safari Ziele</h4></div><div className="space-y-4">{[{ t: "Serengeti Nationalpark", d: "Große Tierwanderung" }, { t: "Ngorongoro Krater", d: "UNESCO Weltnaturerbe" }, { t: "Kilimanjaro", d: "Afrikas höchster Berg" }, { t: "Sansibar", d: "Gewürzinsel & Traumstrände" }].map((h, i) => (<div key={i} className="flex flex-col border-b border-border/40 pb-3 last:border-none"><span className="text-[11px] font-bold text-secondary tracking-tight leading-none mb-1">{h.t}</span><span className="text-[9px] font-bold text-muted-foreground tracking-widest">{h.d}</span></div>))}</div></div></Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {regions.map((region) => (
              <div key={region.id} className="flex flex-col space-y-6 text-left">
                <div className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl group border border-border/40 bg-muted"><Image src={region.img} alt={region.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" /><div className="absolute top-4 left-4"><Badge className={cn("text-white border-none font-bold text-[8px] px-3 py-1 tracking-widest", region.badgeColor)}>{region.badge}</Badge></div></div>
                <div className="space-y-4 px-1"><h3 className="font-headline text-xl md:text-2xl font-normal text-secondary tracking-tight">{region.title}</h3><p className="text-[13px] leading-[20px] text-muted-foreground font-normal opacity-80">{region.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px]">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter text-center">Unvergessliche Aktivitäten im <span className="text-primary">Arusha Park</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {activities.map((act) => (
              <button key={act.id} onClick={() => setActiveActivity(act)} className={cn("px-6 py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-3", activeActivity.id === act.id ? "bg-secondary text-white border-secondary shadow-xl scale-105" : "bg-white text-muted-foreground border-border hover:border-primary/40")}><act.icon className={cn("w-4 h-4", activeActivity.id === act.id ? "text-primary" : "text-muted-foreground")} />{act.label}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeActivity.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}>
              <Card className="rounded-[1.5rem] md:rounded-[3rem] border border-border/40 overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row">
                <div className="w-full lg:w-[45%] relative aspect-video lg:aspect-auto min-h-[220px] md:min-h-[350px]"><Image src={activeActivity.img} alt={activeActivity.title} fill className="object-cover" /><div className="absolute top-6 left-6 flex flex-col gap-2"><Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold">{activeActivity.duration}</Badge><Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold">{activeActivity.level}</Badge></div></div>
                <div className="flex-1 p-5 md:p-12 lg:p-16 space-y-6 md:space-y-8 flex flex-col justify-center text-left">
                  <div className="space-y-6">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight">{activeActivity.title}</h3>
                    <div className="grid grid-cols-3 gap-2 md:gap-4 pb-6 border-b border-border/50"><div className="space-y-1"><div className="flex items-center gap-2 text-primary"><MapIcon className="w-4 h-4" /><span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Strecke</span></div><p className="text-xs font-bold text-secondary">{activeActivity.distance}</p></div><div className="space-y-1"><div className="flex items-center gap-2 text-primary"><Clock className="w-4 h-4" /><span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Dauer</span></div><p className="text-xs font-bold text-secondary">{activeActivity.duration}</p></div><div className="space-y-1"><div className="flex items-center gap-2 text-primary"><Users className="w-4 h-4" /><span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Personen</span></div><p className="text-xs font-bold text-secondary">{activeActivity.people}</p></div></div>
                    <p className="text-muted-foreground text-sm md:text-base font-bold leading-relaxed tracking-tight opacity-70">{activeActivity.desc}</p>
                    <div className="space-y-3">{activeActivity.features.map((f, i) => (<div key={i} className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-secondary tracking-widest"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" />{f}</div>))}</div>
                  </div>
                  <div className="pt-4"><Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-10 h-14 bg-primary text-white font-bold text-[10px] tracking-widest shadow-xl border-none">Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" /></Button></div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 lg:w-[60%] space-y-8 text-left">
              <div className="flex items-center gap-4"><div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl"><Compass className="w-6 h-6 md:w-8 md:h-8 text-white" /></div><h2 className="font-headline text-lg sm:text-2xl md:text-5xl font-bold tracking-tighter text-white">Planen Sie Ihre perfekte Arusha Safari</h2></div>
              <p className="text-white/80 font-bold text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">Starten Sie Ihr Abenteuer direkt vor den Toren Arushas. Wir entwerfen Ihre individuelle Tour durch Bergwälder und Kraterlandschaften.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0"><Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" /></Button></div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="arusha" />
      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
