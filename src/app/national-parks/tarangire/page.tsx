
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Clock, 
  Camera, 
  ArrowRight,
  ShieldCheck,
  TreePine,
  Wind,
  Bird,
  Users,
  CheckCircle2,
  Zap,
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
    title: "Elefantenparadies am Fluss",
    desc: "In der Trockenzeit versammeln sich bis zu 2.000 Elefanten entlang des Tarangire-Flusses. Es ist eine der höchsten Konzentrationen an Dickhäutern weltweit.",
    icon: Camera
  },
  {
    title: "Die Giganten der Flora",
    desc: "Uralte Affenbrotbäume (Baobabs) prägen das Landschaftsbild. Diese jahrtausendealten Riesen dienen als natürliche Wasserspeicher und Schattenspender.",
    icon: TreePine
  },
  {
    title: "Vielfältige Raubtierpräsenz",
    desc: "Neben den großen Herden beheimatet der Park Löwen, Leoparden und seltene afrikanische Wildhunde, die in den Akazienwäldern auf Jagd gehen.",
    icon: Wind
  },
  {
    title: "Expeditions-Saisonalität",
    desc: "Die Monate Juni bis Oktober bieten spektakuläre Sichtungen an den Wasserstellen. Wir planen Ihre Safari so, dass Sie die Wanderbewegungen optimal nutzen.",
    icon: Clock
  }
];

const regions = [
  {
    id: 'river',
    badge: 'Flussregion',
    badgeColor: 'bg-secondary',
    title: 'Tarangire River Korridor',
    desc: 'Die Lebensader des Parks. Besonders in der Trockenzeit sammeln sich hier tausende Tiere zur Tränke.',
    tags: ['Elefantenherden', 'Raubtier-Action', 'Vogelvielfalt'],
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=600',
    hint: 'elephants river'
  },
  {
    id: 'silale',
    badge: 'Sumpfgebiet',
    badgeColor: 'bg-primary',
    title: 'Silale Sumpf',
    desc: 'Ein riesiges grünes Meer, das das ganze Jahr über Wasser führt und ein Magnet für Büffel und Löwen ist.',
    tags: ['Büffel', 'Löwen', 'Landschaft'],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    hint: 'safari savannah'
  },
  {
    id: 'south',
    badge: 'Süden',
    badgeColor: 'bg-orange-700',
    title: 'Südliches Hinterland',
    desc: 'Wild, unberührt und weniger besucht. Ideal für Reisende, die absolute Einsamkeit im Busch suchen.',
    tags: ['Einsamkeit', 'Baobabs', 'Wildnis'],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600',
    hint: 'baobab landscape'
  }
];

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
    desc: 'Spüren Sie den Boden unter Ihren Füßen. In Begleitung eines bewaffneten Rangers entdecken Sie die kleinen Wunder der Natur, die vom Auto aus verborgen bleiben.',
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
    desc: 'Mit über 550 Vogelarten ist Tarangire ein Paradies für Beobachter. Wir suchen seltene Arten in den Sümpfen und Akazienwäldern.',
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
      {/* 01 Cinematic Hero */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="/assets/images/national-parks/tarangire-baobab.jpg" 
          alt="Tarangire Baobab Landscape" 
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
              Das Reich der sanften Riesen und uralten Bäume
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Tarangire Nationalpark
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
                <div className="space-y-2 text-left">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-primary font-bold text-[11px] block tracking-normal">
                    Ein Refugium der Stille und Größe
                  </span>
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight text-left">
                  Elefantenparadies mit Baobab-Landschaft
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Tarangire-Nationalpark liegt südlich des Manyara-Sees und ist ein echter Geheimtipp für Naturfotografen. Die Landschaft aus goldgelben Ebenen, weiten Palmenhainen und uralten Affenbrotbäumen macht jede Safari hier zu einem ästhetischen Erlebnis der Extraklasse.
                </p>
                <p>
                  In der Trockenzeit von Juni bis Oktober wird der Tarangire-Fluss zum einzigen dauerhaften Wasserspeicher der Region. Dies führt zu einer Tierkonzentration, die der Serengeti in nichts nachsteht. Besonders die Begegnungen mit den riesigen Elefantenfamilien bleiben unvergesslich.
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
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Tarangire Elephants" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          {registryCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm bg-white rounded-2xl md:rounded-[2.5rem] hover:shadow-md transition-all duration-500 border border-border/40">
                <CardContent className="p-8 md:p-10 flex items-start gap-6 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-headline text-lg md:text-2xl font-bold text-secondary tracking-tight leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-normal leading-relaxed opacity-80">
                      {card.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03 Geography Section */}
      <section className="py-8 md:py-12 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-6">
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] block">
              Tarangire Geografie
            </span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
              Entdecken Sie den Park <span className="text-primary">auf der Karte</span>
            </h2>
          </div>

          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50 aspect-video md:aspect-[21/9] mb-10 md:mb-16 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.666666666666!2d36.0!3d-4.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDAnMDYuMCJTIDM2wrAwMCcwMC4wIkU!5e0!3m2!1sen!2stz!4v1711234567890!5m2!1sen!2stz"
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
                    <h4 className="font-headline text-xl font-bold text-secondary">Highlights im Park</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { t: "Tarangire River", d: "Zentrale Tränke" },
                      { t: "Silale Sumpf", d: "Ganzjähriges Wasser" },
                      { t: "Lemayon Hill", d: "Panoramablick" },
                      { t: "Baobab Loop", d: "Dichte Baobab-Wälder" }
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Activity Hub Section */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px]">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter text-center">
              Unvergessliche Aktivitäten im <span className="text-primary">Tarangire Park</span>
            </h2>
            <p className="text-muted-foreground text-sm font-bold max-w-2xl mx-auto leading-relaxed">
              Erleben Sie die Giganten der Savanne auf Ihre Weise – von klassischen Pirschfahrten bis hin zu geführten Busch-Wanderungen unter uralten Baobabs.
            </p>
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
                          <MapIcon className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Strecke</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.distance}</p>
                      </div>
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

      {/* 05 Action Banner */}
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
                  Planen Sie Ihre perfekte Tarangire Safari
                </h2>
              </div>
              
              <p className="text-white/80 font-bold text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">
                Erleben Sie die Giganten der Savanne in ihrer natürlichen Umgebung. Wir gestalten Ihre Route für maximale Tiersichtungen und exklusiven Komfort.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">
                Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="tarangire" />

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
