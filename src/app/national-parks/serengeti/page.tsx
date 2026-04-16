
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Map as MapIcon,
  Zap,
  Sparkles,
  MapPin,
  Clock,
  Users,
  Camera,
  Bird,
  Sun,
  Wind,
  Phone,
  Plus,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';

const regions = [
  {
    id: 'south-central',
    badge: 'Süden & Zentrum',
    badgeColor: 'bg-green-600',
    title: 'Südliche & Zentrale Serengeti',
    desc: 'Das Herz der Serengeti mit klassischen Savannen, Akazienbäumen und der höchsten Raubtierdichte Afrikas.',
    tags: ['Seronera Valley', 'Ndutu Gebiet'],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    hint: 'serengeti balloon'
  },
  {
    id: 'western',
    badge: 'Westlicher Korridor',
    badgeColor: 'bg-orange-600',
    title: 'Westlicher Korridor',
    desc: 'Geprägt vom Grumeti-Fluss mit dichterem Buschland, Wäldern und spektakulären Flussüberquerungen im Juni/Juli.',
    tags: ['Grumeti River', 'Kirawira', 'Nyasirori'],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600',
    hint: 'migration crossing'
  },
  {
    id: 'north',
    badge: 'Norden',
    badgeColor: 'bg-blue-700',
    title: 'Nördliche Serengeti',
    desc: 'Wild, unberührt und zerklüftet mit dramatischen Mara-Flussüberquerungen und Grenze zum Masai Mara Reservat.',
    tags: ['Mara River', 'Lobo Gebiet', 'Kogatende'],
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=600',
    hint: 'northern serengeti'
  }
];

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
      {/* 01 Cinematic Hero */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Serengeti Migration" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white text-[11px] font-bold tracking-normal drop-shadow-lg">
              Das größte Naturschauspiel der Erde
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Serengeti Nationalpark
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-primary font-bold text-[10px] md:text-[11px] block tracking-normal">
                    Unesco-Weltnaturerbe seit 1952
                  </span>
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Die endlose Ebene voller Leben
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Serengeti Nationalpark, 1952 gegründet und Unesco-Weltnaturerbe, ist eines der ältesten und bekanntesten Ökosysteme der Erde. Sein Name stammt aus der Massai-Sprache "Siringitu", was "endloses Land" bedeutet – eine perfekte Beschreibung für die weiten Savannen, die sich über fast 30.000 Quadratkilometer erstrecken.
                </p>
                <p>
                  Mit dieser beeindruckenden Fläche ist die Serengeti das größte und artenreichste Schutzgebiet Tansanias und beherbergt die höchste Konzentration an Wildtieren in Afrika. Hier spielt sich jedes Jahr das größte Tierwanderungsspektakel unseres Planeten ab.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" 
                alt="Serengeti Sunset Tree" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          {[
            {
              title: "Big Five & Raubtiere",
              desc: "Die Serengeti beherbergt Afrikas höchste Löwenpopulation (über 3.000 Tiere), Leoparden, Geparden, Elefanten, Giraffen, Büffel und das seltene Spitzmaulnashorn."
            },
            {
              title: "Vogelparadies & Kleintiere",
              desc: "Mit über 500 Vogelarten, darunter Sekretärvögel, Flamingos, Geier und Strauße, sowie Reptilien, Insekten und Käfern ist die Serengeti ein komplettes Ökosystem."
            },
            {
              title: "Vegetationswandel",
              desc: "Trockenzeit: trockene, endlos weite goldschimmernde Ebene. Regenzeit: grünes, mit Wildblumen übersätes Meer – zwei völlig verschiedene Gesichter."
            },
            {
              title: "Beste Reisezeit & Unterkünfte",
              desc: "Mitte Dezember-Mitte März & Juni-Ende Oktober (afrikanischer Winter). Von Luxuslodges bis mobilen Camps, die der Migration folgen – für jeden Reisestil."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm bg-white rounded-2xl md:rounded-[2.5rem] hover:shadow-md transition-all duration-500 border border-border/40">
                <CardContent className="p-8 md:p-10 space-y-3 text-left">
                  <h4 className="font-headline text-lg md:text-2xl font-bold text-secondary tracking-tight leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-normal leading-relaxed opacity-80">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03 Geography Section */}
      <section className="py-8 md:py-12 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-6">
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] block">
              Serengeti Geografie
            </span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
              Entdecken Sie die Serengeti <span className="text-primary">auf der Karte</span>
            </h2>
          </div>

          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50 aspect-video md:aspect-[21/9] mb-10 md:mb-16 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021272.775330386!2d34.33120155!3d-2.333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ca71a684365773%3A0x67396c9c9b45660b!2sSerengeti%20National%20Park!5e0!3m2!1sen!2stz!4v1711234567890!5m2!1sen!2stz"
              className="absolute inset-0 w-full h-full border-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
            
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20 w-64 md:w-80 hidden md:block text-left">
              <Card className="bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-headline text-xl font-bold text-secondary">Serengeti Highlights</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { t: "Seronera Valley", d: "Zentrale Savanne & Raubtiere" },
                      { t: "Grumeti River", d: "Westlicher Korridor & Flussüberquerungen" },
                      { t: "Mara River", d: "Nördliche Grenze zu Kenia" },
                      { t: "Ndutu Area", d: "Südliche Kalbungsregion" }
                    ].map((h, i) => (
                      <div key={i} className="flex flex-col border-b border-border/40 pb-3 last:border-none">
                        <span className="text-[11px] font-bold text-secondary tracking-tight leading-none mb-1">{h.t}</span>
                        <span className="text-[9px] font-bold text-muted-foreground tracking-widest">{h.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {regions.map((region, idx) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col space-y-6"
              >
                <div className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl group border border-border/40 bg-muted">
                  <Image src={region.img} alt={region.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <Badge className={cn("text-white border-none font-bold text-[8px] px-3 py-1 tracking-widest", region.badgeColor)}>
                      {region.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4 px-1 text-left">
                  <h3 className="font-headline text-xl md:text-2xl font-normal text-secondary tracking-tight">{region.title}</h3>
                  <p className="text-[13px] leading-[20px] text-muted-foreground font-normal opacity-80">{region.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {region.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted/20 border border-border rounded-full text-[9px] font-bold text-secondary/60 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Migration Timeline Section */}
      <section className="py-8 md:py-12 bg-[#FDFCFB] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Die Route der Großen Migration
            </h2>
            <p className="text-muted-foreground font-bold text-[10px] md:text-sm tracking-widest max-w-xl mx-auto">
              Folgen Sie dem jährlichen Zyklus der Tierwanderung durch die Serengeti.
            </p>
          </div>

          <div className="relative space-y-12 md:space-y-16">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-primary/20 z-0 hidden md:block" />
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12",
                  item.side === 'right' ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <div className={cn(
                    "p-6 md:p-8 bg-white rounded-2xl border border-border/40 shadow-sm w-full transition-all hover:shadow-md",
                    item.side === 'right' ? "md:text-left" : "md:text-right"
                  )}>
                    <div className={cn(
                      "flex items-center gap-4 mb-3",
                      item.side === 'right' ? "flex-row-reverse" : "flex-row justify-end"
                    )}>
                      <h4 className="font-headline text-lg md:text-xl font-bold text-secondary leading-none">{item.title}</h4>
                      <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold tracking-widest">{item.dates}</Badge>
                    </div>
                    <p className="text-[11px] md:text-xs text-muted-foreground font-bold tracking-widest leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full bg-primary border-4 border-white shadow-xl items-center justify-center shrink-0" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Activity Hub Section */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px]">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Unvergessliche <span className="text-primary">Aktivitäten</span> in der Serengeti
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {activities.map((act) => (
              <button
                key={act.id}
                onClick={() => setActiveActivity(act)}
                className={cn(
                  "px-6 py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-3",
                  activeActivity.id === act.id 
                    ? "bg-secondary text-white border-secondary shadow-xl scale-105" 
                    : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                <act.icon className={cn("w-4 h-4", activeActivity.id === act.id ? "text-primary" : "text-muted-foreground")} />
                {act.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeActivity.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-[2rem] md:rounded-[3rem] border border-border/40 overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row">
                <div className="w-full lg:w-[45%] relative aspect-[16/9] lg:aspect-auto min-h-[300px] md:min-h-[350px]">
                  <Image src={activeActivity.img} alt={activeActivity.title} fill className="object-cover" />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold">{activeActivity.duration}</Badge>
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold">{activeActivity.level}</Badge>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-12 lg:p-16 space-y-8 flex flex-col justify-center text-left">
                  <div className="space-y-6">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight">{activeActivity.title}</h3>
                    
                    <div className="grid grid-cols-3 gap-4 pb-6 border-b border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Clock className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Dauer</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Users className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Personen</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.people}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Zap className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Fokus</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.frequency}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base font-bold leading-relaxed tracking-tight opacity-70">
                      {activeActivity.desc}
                    </p>

                    <div className="space-y-3">
                      {activeActivity.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-10 h-14 bg-primary text-white font-bold text-[10px] tracking-widest shadow-xl border-none">
                      Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 06 Action Banner */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative z-10 lg:w-[60%] space-y-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-lg sm:text-2xl md:text-5xl font-bold tracking-tighter leading-tight whitespace-nowrap">
                  Planen Sie Ihre perfekte Serengeti Safari
                </h2>
              </div>
              
              <p className="text-white/80 font-bold text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">
                Unsere Safari-Experten helfen Ihnen, die idealen Aktivitäten für Ihre Reisezeit und Interessen zu kombinieren. Erstellen Sie jetzt Ihr individuelles Programm.
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {["Kostenlose Beratung", "Individuelle Routenplanung", "Beste Preisgarantie"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] md:text-[11px] font-bold tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">
                Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:+493022608080" className="block">
                <Button variant="outline" className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-transparent border-white/40 text-white hover:bg-white/10 font-bold text-[10px] tracking-widest transition-all">
                  +49 30 22608080 anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="serengeti" />

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
