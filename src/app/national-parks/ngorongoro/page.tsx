
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Map as MapIcon,
  Zap,
  MapPin,
  Clock,
  Users,
  Camera,
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';
import { cn } from '@/lib/utils';

const regions = [
  {
    id: 'crater',
    badge: 'Krater',
    badgeColor: 'bg-secondary',
    title: 'Ngorongoro Krater',
    desc: 'Die größte intakte vulkanische Caldera der Welt (20 km Durchmesser), UNESCO-Welterbe und geschlossenes Ökosystem mit ganzjährigem Wildreichtum.',
    tags: ['Lake Magadi', 'Lerai Forest', 'Ngoitokitok'],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=600',
    hint: 'ngorongoro crater'
  },
  {
    id: 'highlands',
    badge: 'Hochland',
    badgeColor: 'bg-primary',
    title: 'Ngorongoro Conservation Area',
    desc: 'Einzigartiges Modell des Zusammenlebens von Mensch und Tier. Maasai leben hier seit Generationen im Einklang mit der Natur.',
    tags: ['Maasai-Dörfer', 'Olmoti Crater', 'Empakaai Crater'],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    hint: 'maasai village'
  },
  {
    id: 'olduvai',
    badge: 'Olduvai',
    badgeColor: 'bg-orange-700',
    title: 'Olduvai-Schlucht',
    desc: 'Die "Wiege der Menschheit" - Hier wurden die ältesten menschlichen Fossilien gefunden. Besucherzentrum zeigt die Evolution des Menschen.',
    tags: ['Fossilien-Stätten', 'Museum', 'Laetoli Fußspuren'],
    img: 'https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=600',
    hint: 'olduvai gorge'
  }
];

const timeline = [
  {
    dates: "6:00 Uhr",
    title: "Frühstart vom Kraterrand",
    desc: "Abholung von Ihrer Lodge. Möglicher Nebel am Kraterrand schafft mystische Atmosphäre.",
    side: "left"
  },
  {
    dates: "7:00 Uhr",
    title: "Abfahrt in den Krater",
    desc: "Fahrt auf steiler Serpentinenstraße 600 m in die Caldera hinab.",
    side: "right"
  },
  {
    dates: "8:00-12:00",
    title: "Morgendliche Tieraktivität",
    desc: "Beste Zeit für Tierbeobachtungen! Löwen auf Jagd, Nashörner bei der Futtersuche.",
    side: "left"
  },
  {
    dates: "12:00-13:00",
    title: "Picknick am See",
    desc: "Mittagspause am Lake Magadi mit Blick auf Flamingos.",
    side: "right"
  },
  {
    dates: "13:00-16:00",
    title: "Nachmittagssafari & Rückkehr",
    desc: "Weitere Tierbeobachtungen, Fokus auf Raubtiere. Ab 16:00 Uhr beginnt die Rückfahrt.",
    side: "left"
  }
];

const activities = [
  {
    id: 'crater-safari',
    label: 'Krater-Safari',
    icon: Camera,
    title: 'Klassische Krater-Safari: Big Five an einem Tag',
    duration: '6 Std',
    people: 'Max. 6',
    frequency: '25.000+',
    desc: 'Erleben Sie das größte geschlossene Ökosystem der Welt! Der Ngorongoro-Krater bietet die einmalige Chance, alle Big Five an einem Tag zu sehen.',
    features: [
      'Frühstart um 6:00 Uhr für beste Sicht',
      'Picknick am Lake Magadi',
      'Beobachtung seltener Spitzmaulnashörner'
    ],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800',
    level: 'Sehr leicht'
  },
  {
    id: 'maasai-culture',
    label: 'Maasai-Kultur',
    icon: Users,
    title: 'Authentische Maasai Begegnungen',
    duration: '2-3 Std',
    people: 'Individuell',
    frequency: 'Täglich',
    desc: 'Besuchen Sie ein traditionelles Maasai-Boma in der Conservation Area. Lernen Sie die Lebensweise dieses stolzen Hirtenvolkes kennen.',
    features: [
      'Besuch eines authentischen Dorfes',
      'Einblicke in Traditionen',
      'Support lokaler Gemeinschaften'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    level: 'Leicht'
  },
  {
    id: 'olduvai-tour',
    label: 'Olduvai-Tour',
    icon: History,
    title: 'Olduvai-Schlucht: Wiege der Menschheit',
    duration: '2 Std',
    people: 'Max. 12',
    frequency: 'Ganzjährig',
    desc: 'Besuchen Sie eine der wichtigsten paläoanthropologischen Stätten der Welt. Entdecken Sie unsere evolutionäre Herkunft.',
    features: [
      'Geführter Rundgang im Museum',
      'Blick in die Ausgrabungsstätten',
      'Historische Funde entdecken'
    ],
    img: 'https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800',
    level: 'Sehr leicht'
  }
];

export default function NgorongoroPage() {
  const [activeActivity, setActiveActivity] = useState(activities[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image src="/assets/images/national-parks/ngorongoro-card.webp" alt="Ngorongoro Krater" fill priority className="object-cover brightness-75 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-16 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <p className="text-white text-[11px] font-normal tracking-normal drop-shadow-lg">UNESCO-Welterbe & Größte Caldera der Welt</p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">Ngorongoro-Krater</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6 text-left">
              <div className="space-y-2"><div className="w-8 h-0.5 bg-primary" /><span className="text-primary font-normal text-[11px] block tracking-normal">Ein einzigartiges Naturwunder Afrikas</span></div>
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">Das achte Weltwunder am Nil-Savannen-Korridor</h2>
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] opacity-90">
                <p>Der Ngorongoro-Krater gilt als eine der spektakulärsten Naturlandschaften Afrikas. Vor 2–3 Millionen Jahren brach ein gigantischer Vulkan zusammen und schuf die 20 km breite Caldera.</p>
                <p>Heute ist sie ein geschlossenes Ökosystem mit ganzjährig Wasser und Nahrung – Grund für die unglaubliche Tierdichte und die höchste Raubtierdichte weltweit.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted">
              <Image src="https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200" alt="Ngorongoro View" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <span className="text-primary font-normal tracking-[0.4em] text-[10px]">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter text-center">Unvergessliche <span className="text-primary">Aktivitäten</span> im Ngorongoro-Krater</h2>
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
                <div className="flex-1 p-5 md:p-10 lg:p-12 space-y-6 md:space-y-8 flex flex-col justify-center text-left">
                  <div className="space-y-6">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight">{activeActivity.title}</h3>
                    <div className="grid grid-cols-3 gap-2 md:gap-4 pb-6 border-b border-border/50"><div className="space-y-1"><div className="flex items-center gap-2 text-primary"><Clock className="w-4 h-4" /><span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Dauer</span></div><p className="text-xs font-bold text-secondary">{activeActivity.duration}</p></div><div className="space-y-1"><div className="flex items-center gap-2 text-primary"><Users className="w-4 h-4" /><span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Personen</span></div><p className="text-xs font-bold text-secondary">{activeActivity.people}</p></div><div className="space-y-1"><div className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /><span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Fokus</span></div><p className="text-xs font-bold text-secondary">{activeActivity.frequency}</p></div></div>
                    <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed tracking-tight opacity-70">{activeActivity.desc}</p>
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
              <div className="flex items-center gap-4"><div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl"><Compass className="w-6 h-6 md:w-8 md:h-8 text-white" /></div><h2 className="font-headline text-lg sm:text-2xl md:text-5xl font-normal tracking-tighter text-white">Planen Sie Ihre perfekte Ngorongoro Safari</h2></div>
              <p className="text-white/80 font-normal text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">Unsere Safari-Experten helfen Ihnen, die idealen Aktivitäten für Ihre Reisezeit und Interessen zu kombinieren. Erleben Sie Big Five und Maasai-Kultur in einer unvergesslichen Reise.</p>
            </div>
            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0"><Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" /></Button></div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="ngorongoro" />
      <section id="inquiry" className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
