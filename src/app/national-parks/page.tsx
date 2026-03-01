
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
import { ContactSection } from '@/components/sections/ContactSection';
import { cn } from '@/lib/utils';

const parksData = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    fullName: 'Serengeti Nationalpark',
    tagline: 'Die Bühne der Großen Tierwanderung',
    desc: 'Erleben Sie die endlose Weite und das größte Naturschauspiel der Welt – die Wanderung von Millionen Gnus und Zebras durch die Savanne.',
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
    desc: 'Ein natürliches Amphitheater in einem schlafenden Vulkan. Hier finden Sie die höchste Raubtierdichte Afrikas auf engstem Raum.',
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
    desc: 'Berühmt für seine riesigen Affenbrotbäume und massiven Elefantenherden, die sich am lebensspendenden Tarangire-Fluss versammeln.',
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
    desc: 'Ein Juwel am Fuß des Rift Valley. Bekannt für seine riesigen Flamingoscharren und die einzigartigen Löwen, die in den Akazien ruhen.',
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
    <div className="bg-[#fdfcfb] min-h-screen font-body" ref={containerRef}>
      {/* 1) IMIMERSIVE PARALLAX HERO */}
      <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
            alt="Tansania Safari Nationalparks Wildlife"
            fill
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8"
          >
            <Badge className="bg-primary text-white border-none px-6 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
              Wildnis ohne Grenzen
            </Badge>
            <h1 className="font-headline text-4xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tighter uppercase">
              Die Seele <br />
              <span className="text-primary">Tansanias</span>
            </h1>
            <p className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-bold leading-relaxed px-4 uppercase tracking-widest">
              Entdecken Sie die Nationalparks, wo die Natur noch ihre eigenen Gesetze schreibt.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-8 md:pt-12"
            >
              <div className="flex flex-col items-center gap-4 text-white/40">
                <span className="text-[9px] font-black uppercase tracking-[0.5em]">Erkunden</span>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-px h-12 md:h-16 bg-gradient-to-b from-primary to-transparent" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2) DYNAMIC PARK NAVIGATOR */}
      <section className="relative z-20 -mt-16 md:-mt-20 px-4 md:px-10 pb-12 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[700px]">
              
              {/* Left: Interactive Sidebar Selector */}
              <div className="w-full lg:w-1/3 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border/50 p-6 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-4 md:mb-6 block">Expeditions-Ziel</span>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4">
                    {parksData.map((park) => (
                      <button
                        key={park.id}
                        onClick={() => setActivePark(park)}
                        className={cn(
                          "text-left group transition-all duration-500 flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl",
                          activePark.id === park.id 
                            ? "bg-secondary text-white shadow-xl translate-x-0 lg:translate-x-2" 
                            : "hover:bg-primary/5 text-secondary/60 hover:text-secondary"
                        )}
                      >
                        <div className="flex flex-col">
                          <span className={cn(
                            "text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-colors",
                            activePark.id === park.id ? "text-primary" : "text-muted-foreground"
                          )}>
                            Region
                          </span>
                          <span className="font-headline text-lg md:text-2xl font-bold uppercase truncate">{park.name}</span>
                        </div>
                        <ChevronRight className={cn(
                          "w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 hidden sm:block",
                          activePark.id === park.id ? "text-primary rotate-0" : "text-muted-foreground -rotate-90 opacity-0 group-hover:opacity-100"
                        )} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 md:pt-12 border-t border-border/50 hidden lg:block">
                  <div className="flex items-center gap-4 p-6 bg-primary rounded-[2rem] text-white group cursor-pointer hover:bg-secondary transition-all shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">AI Advisor</p>
                      <p className="text-xs font-bold">Welcher Park passt zu mir?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Immersive Detail Pane */}
              <div className="flex-1 relative overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePark.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col h-full"
                  >
                    {/* Visual Header */}
                    <div className="relative h-[250px] md:h-[400px] shrink-0">
                      <Image 
                        src={activePark.img} 
                        alt={activePark.fullName} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
                      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-12">
                        <Badge className="bg-primary text-white border-none mb-2 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                          Highlights Tansania
                        </Badge>
                        <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-none">
                          {activePark.fullName}
                        </h2>
                      </div>
                    </div>

                    {/* Content Scroll Area */}
                    <div className="p-6 md:p-12 space-y-8 md:space-y-12 flex-grow overflow-y-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-4 md:space-y-6">
                          <h3 className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Die Geschichte</h3>
                          <p className="text-secondary font-bold text-base md:text-lg leading-relaxed">
                            {activePark.desc}
                          </p>
                          <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="p-3 md:p-4 bg-muted/20 rounded-xl md:rounded-2xl">
                              <p className="text-[8px] font-black uppercase text-muted-foreground mb-1">Beste Reisezeit</p>
                              <p className="text-[10px] md:text-xs font-bold text-secondary flex items-center gap-2">
                                <Sun className="w-3 h-3 text-primary" /> {activePark.bestTime}
                              </p>
                            </div>
                            <div className="p-3 md:p-4 bg-muted/20 rounded-xl md:rounded-2xl">
                              <p className="text-[8px] font-black uppercase text-muted-foreground mb-1">Status</p>
                              <p className="text-[10px] md:text-xs font-bold text-secondary flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-primary" /> UNESCO Erbe
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                          <h3 className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Wildtier-Check</h3>
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            {activePark.wildlife.map((animal, i) => (
                              <div key={i} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white border border-border/50 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary">{animal}</span>
                              </div>
                            ))}
                          </div>
                          <div className="pt-4 md:pt-6">
                            <Link href="/safaris">
                              <Button className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl group">
                                Passende Safari finden <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* 3) BENTO ACTIVITY FLOW (UPDATED LIGHT THEME) */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden border-y border-border/50">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 block">Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-7xl font-bold uppercase text-secondary">Aktivitäten in der <span className="text-primary">Wildnis</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
            {/* Bento Card 1: Game Drive */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 md:row-span-2 bg-muted/20 rounded-[2rem] border border-border/50 p-6 md:p-12 relative overflow-hidden group shadow-sm">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Map className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase mb-2 md:mb-4 text-secondary">Klassische <br />Pirschfahrten</h4>
                  <p className="text-muted-foreground text-xs md:text-sm font-bold leading-relaxed max-w-sm">
                    In unseren speziell ausgestatteten 4x4 Geländewagen bringen wir Sie so nah an die Big Five wie nie zuvor.
                  </p>
                </div>
              </div>
              <Image src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=800" alt="Safari Game Drive" fill className="object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            </motion.div>

            {/* Bento Card 2: Walking Safari */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-1 md:row-span-1 bg-white rounded-[2rem] border border-border/50 p-6 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
              <TreePine className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-secondary">Walking <br />Safaris</h4>
            </motion.div>

            {/* Bento Card 3: Balloon */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-1 md:row-span-2 bg-primary rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-xl group cursor-pointer">
              <div className="flex justify-between items-start">
                <Wind className="w-7 h-7 md:w-8 md:h-8 text-secondary" />
                <Badge className="bg-secondary text-primary border-none text-[8px] md:text-[9px]">Bestseller</Badge>
              </div>
              <div>
                <h4 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase leading-tight mb-2">Ballon <br />Safari</h4>
                <p className="text-secondary/60 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Abhebe-Garantie</p>
              </div>
            </motion.div>

            {/* Bento Card 4: Night Drive */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-1 md:row-span-1 bg-white rounded-[2rem] border border-border/50 p-6 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
              <Zap className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-secondary">Nacht <br />Expedition</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4) DYNAMIC PLANNING ACCORDION */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Wissenswertes</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-none">
            Planen Sie <span className="text-primary">Ihre Tour</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
          {[
            { 
              q: "Welche Impfungen sind für Tansania Pflicht?", 
              a: "Für die direkte Einreise aus Europa gibt es keine Pflichtimpfungen. Gelbfieber ist nur bei Einreise aus Endemiegebieten vorgeschrieben. Wir empfehlen dringend eine Malariaprophylaxe und eine Beratung durch einen Tropenmediziner.",
              kw: "impfung tansania safari"
            },
            { 
              q: "Was gehört in das Safari-Gepäck?", 
              a: "Leichte Kleidung in Erdtönen (Khaki, Beige), ein warmer Pullover für kühle Morgenstunden, festes Schuhwerk, Sonnenschutz und ein hochwertiges Fernglas. Wir stellen Ihnen nach der Buchung eine detaillierte Checklist bereit.",
              kw: "gepäck safari tansania"
            },
            { 
              q: "Ist eine Safari für Kindern geeignet?", 
              a: "Ja, wir bieten spezielle Familien-Safaris an. Wir empfehlen ein Mindestalter von 6 Jahren, damit die Kinder die Pirschfahrten voll genießen können. Unsere Guides sind besonders erfahren im Umgang mit kleinen Entdeckern.",
              kw: "familien safari tansania"
            },
            { 
              q: "Wie sicher ist ein Besuch im Ngorongoro Krater?", 
              a: "Die Sicherheit unserer Gäste hat oberste Priorität. Alle Fahrten finden in Begleitung staatlich geprüfter Guides statt. Die Tiere im Krater sind an Fahrzeuge gewöhnt, jedoch halten wir stets einen respektvollen Sicherheitsabstand.",
              kw: "sicherheit safari tansania"
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-2xl md:rounded-3xl px-6 md:px-8 shadow-sm hover:shadow-md transition-all group overflow-hidden">
              <AccordionTrigger className="text-left font-headline text-lg md:text-xl font-bold py-6 md:py-8 hover:no-underline hover:text-primary transition-colors text-secondary">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-[9px] md:text-[10px] font-black">{i + 1}</span>
                  </div>
                  <span className="leading-tight">{item.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base font-bold leading-relaxed pb-6 md:pb-8 pl-10 md:pl-12 border-t border-muted/30 pt-4 md:pt-6">
                {item.a}
                <div className="mt-4 flex gap-2">
                  <Badge variant="outline" className="text-[7px] md:text-[8px] font-black uppercase border-primary/20 text-primary"># {item.kw}</Badge>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 md:mt-20 p-8 md:p-12 bg-primary rounded-[2.5rem] md:rounded-[3rem] text-center space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-tight">
              Ihre Reise <br />beginnt <span className="text-white">jetzt</span>
            </h3>
            <p className="text-secondary font-black max-w-md mx-auto text-[10px] md:text-sm leading-relaxed uppercase tracking-widest mt-2 md:mt-4">
              Lassen Sie sich von unseren Experten in Berlin und Kairo beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 md:pt-10">
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button className="w-full bg-secondary text-white hover:bg-white hover:text-secondary rounded-xl md:rounded-2xl px-12 h-14 md:h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Reise Planen
                </Button>
              </Link>
              <Link href="/contact" className="text-secondary font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">
                Direkter Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5) CONTACT INTEGRATION */}
      <ContactSection />
    </div>
  );
}
