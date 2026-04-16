"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Waves, 
  Mountain, 
  Leaf, 
  Plane, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Plus,
  Compass,
  Sparkles,
  Fish,
  ShieldCheck,
  Users,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';

const categories = [
  { id: 'all', label: 'Alle', icon: Compass },
  { id: 'safari', label: 'Safari', icon: Camera },
  { id: 'wasser', label: 'Wasser', icon: Waves },
  { id: 'berg', label: 'Berg', icon: Mountain },
  { id: 'natur', label: 'Natur', icon: Leaf },
  { id: 'luft', label: 'Luft', icon: Plane },
];

const activities = [
  {
    id: 'wandersafari-tarangire',
    category: 'safari',
    tag: 'Safari',
    location: 'Nationalpark',
    duration: '1-2 Std',
    title: 'Wandersafari im Tarangire Nationalpark',
    desc: 'Erkunden Sie den Tarangire Nationalpark mit monumentalen Baobab-Bäumen und weitläufigen Akazienwäldern.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800',
    hint: 'tarangire baobab',
    highlights: ['Baobab-Bäume', 'Elefanten-Herden', 'Geführte Tour']
  },
  {
    id: 'schnorcheln-mnemba',
    category: 'wasser',
    tag: 'Wasser',
    location: 'Sansibar',
    duration: '3 Std',
    title: 'Schnorcheln nahe Mnemba Island',
    desc: 'Erleben Sie Schnorcheln in kristallklaren Gewässern nahe Mnemba Island mit farbenfrohen Korallenriffen.',
    img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800',
    hint: 'zanzibar snorkeling',
    highlights: ['Kristallklares Wasser', 'Meeresleben', 'Korallenriffe']
  },
  {
    id: 'kili-daytrip',
    category: 'berg',
    tag: 'Berg',
    location: 'Kilimandscharo',
    duration: 'Ganztag',
    title: 'Ein Tag am majestätischen Kilimandscharo',
    desc: 'Erleben Sie den Kilimandscharo auf einem Tagesausflug mit spektakulären Aussichten und leichten Wanderungen.',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    hint: 'mount kilimanjaro',
    highlights: ['Höchster Berg', 'Fotomotive', 'Wanderungen']
  },
  {
    id: 'fishing-zanzibar',
    category: 'wasser',
    tag: 'Angeln',
    location: 'Ozean',
    duration: 'Ganzer Tag',
    title: 'Hochseefischen – Ganzer Tag',
    desc: 'Erleben Sie Hochseefischen im Indischen Ozean mit professioneller Ausrüstung und exotischen Fischarten.',
    img: 'https://images.unsplash.com/photo-1544124499-58ec529dd298?q=80&w=800',
    hint: 'ocean fishing',
    highlights: ['Angelcharter', 'Exotische Fische', 'Prof. Ausrüstung']
  },
  {
    id: 'turtles-mafia',
    category: 'natur',
    tag: 'Natur',
    location: 'Mafia',
    duration: 'Nachmittag',
    title: 'Schlüpfen der Meeresschildkröten auf Mafia',
    desc: 'Sehen Sie das Naturschauspiel der schlüpfenden Meeresschildkröten im Mafia-Archipel von Juni bis September.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800',
    hint: 'sea turtle hatching',
    highlights: ['Meeresschildkröten', 'Juni–September', 'Naturschauspiel']
  },
  {
    id: 'canoe-arusha',
    category: 'wasser',
    tag: 'Wasser',
    location: 'Nationalpark',
    duration: '1,5 Std',
    title: 'Kanu-Tour im Arusha Nationalpark',
    desc: 'Paddeln Sie durch ruhige Gewässer im Arusha Nationalpark bei einer Kanu-Tour mit Vogelwelt.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800',
    hint: 'canoe lake tanzania',
    highlights: ['Ruhige Gewässer', 'Vogelwelt', 'Tierbeobachtung']
  },
  {
    id: 'flight-kili',
    category: 'luft',
    tag: 'Luft',
    location: 'Kilimandscharo',
    duration: '45 Min',
    title: 'Rundflug über den Kilimandscharo',
    desc: 'Bewundern Sie den Kilimandscharo aus der Luft bei einem Rundflug mit schneebedeckten Gipeln.',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800',
    hint: 'kilimanjaro aerial',
    highlights: ['Komfortabler Flug', 'Schneegipfel', 'Fotomöglichkeit']
  },
  {
    id: 'whalesharks-mafia',
    category: 'wasser',
    tag: 'Wasser',
    location: 'Mafia-Küste',
    duration: 'Halbtag',
    title: 'Schwimmen mit Walhaien',
    desc: 'Schwimmen Sie mit Walhaien – den größten Fischen der Welt – von November bis März an der Küste.',
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800',
    hint: 'whale shark',
    highlights: ['Walhaie', 'November–März', 'Sicheres Schwimmen']
  },
  {
    id: 'walking-arusha',
    category: 'safari',
    tag: 'Safari',
    location: 'Nationalpark',
    duration: '6-8 Std',
    title: 'Ganztägige Wandersafari im Arusha Nationalpark',
    desc: 'Teilnehmen Sie an einer Wandersafari im Arusha Nationalpark mit professioneller Begleitung.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    hint: 'walking safari arusha',
    highlights: ['Ganztägig', 'Prof. Ranger', 'Parkerkundung']
  },
];

const faqs = [
  { 
    q: "Welche Aktivitäten sind für Familien geeignet?", 
    a: "Viele unserer Aktivitäten sind familienfreundlich, insbesondere die Kanu-Touren in Arusha, der Besuch der Schildkröten auf Mafia und geführte, leichtere Wanderungen. Wir beraten Sie gerne individuell." 
  },
  { 
    q: "Werden alle Aktivitäten von Guides begleitet?", 
    a: "Ja, alle technischen und Wildlife-orientierten Aktivitäten werden von staatlich geprüften und SDL-zertifizierten Experten-Guides begleitet, um höchste Sicherheit und Qualität zu garantieren." 
  },
  { 
    q: "Was sollte ich für die Aktivitäten mitbringen?", 
    a: "Wir empfehlen festes Schuhwerk für Wanderungen, Sonnenschutz, Badebekleidung für Wasseraktivitäten und eine gute Kamera. Eine detaillierte Packliste erhalten Sie mit Ihrer Buchungsbestätigung." 
  },
  { 
    q: "Gibt es Altersbeschränkungen für die Aktivitäten?", 
    a: "Die meisten Aktivitäten sind ab 6-8 Jahren möglich. Für spezielle Bergtouren oder technisches Tauchen gelten gesonderte Alters- und Gesundheitsvoraussetzungen." 
  },
  { 
    q: "Wie buche ich die Aktivitäten?", 
    a: "Sie können Aktivitäten als Teil eines Komplettpakets buchen oder individuelle Bausteine über unser Anfrageformular anfragen. Unsere Experten in Berlin finalisieren dann die Details für Sie." 
  }
];

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredActivities = useMemo(() => {
    if (activeTab === 'all') return activities;
    return activities.filter(a => a.category === activeTab);
  }, [activeTab]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Less-Weighted Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Abenteuer in Tansania" 
          fill 
          priority
          className="object-cover brightness-[0.7] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-10 md:pb-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Abenteuer in Tansania
            </h1>
            <p className="text-white/80 text-[11px] md:text-sm font-normal tracking-widest max-w-xl mx-auto">
              Entdecken Sie die vielfältigen Aktivitäten von Safari bis zum Kilimandscharo
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Filter & Registry Header */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <span className="text-primary font-normal tracking-[0.4em] text-[10px]">Unsere Aktivitäten</span>
          <h2 className="font-headline text-2xl md:text-5xl font-normal text-secondary tracking-tighter">
            Erleben Sie unvergessliche Abenteuer
          </h2>
          <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-2xl mx-auto opacity-80">
            Entdecken Sie unsere sorgfältig kuratierten Aktivitäten in Tansania – von aufregenden Safaris und Wanderungen bis hin zu faszinierenden Wasserabenteuern.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-2.5",
                activeTab === cat.id 
                  ? "bg-secondary text-white border-secondary shadow-xl scale-105" 
                  : "bg-white text-muted-foreground border-border hover:border-primary/40"
              )}
            >
              <cat.icon className={cn("w-3.5 h-3.5", activeTab === cat.id ? "text-primary" : "text-muted-foreground")} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((act) => (
              <motion.div
                key={act.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full border-none shadow-sm bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500 border border-border/40 group">
                  <Link href="/trip-planner" className="block relative aspect-[16/10] overflow-hidden">
                    <Image src={act.img} alt={act.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" data-ai-hint={act.hint} />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-primary text-white border-none font-bold text-[7px] md:text-[8px] px-2.5 py-1 tracking-widest">{act.tag}</Badge>
                      <Badge className="bg-white/90 backdrop-blur-sm text-secondary border-none font-bold text-[7px] md:text-[8px] px-2.5 py-1 tracking-widest">{act.location}</Badge>
                    </div>
                  </Link>
                  
                  <CardContent className="p-6 md:p-8 flex flex-col h-[calc(100%-16/10)] text-left">
                    <div className="flex-grow space-y-4">
                      <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest">
                        <Clock className="w-3.5 h-3.5" /> {act.duration}
                      </div>
                      <Link href="/trip-planner" className="block group/title">
                        <h3 className="font-headline text-lg md:text-2xl font-bold text-secondary leading-tight tracking-tight uppercase group-hover/title:text-primary transition-colors">
                          {act.title}
                        </h3>
                      </Link>
                      <p className="text-[14px] leading-[20px] text-muted-foreground font-normal opacity-80 line-clamp-2">
                        {act.desc}
                      </p>
                      <div className="pt-4 space-y-2.5">
                        {act.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 mt-6 border-t border-border/40 flex items-center justify-between">
                      <Link href="/trip-planner" className="inline-flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-widest group/link">
                        Mehr erfahren <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center transition-colors group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-white"><ArrowRight className="w-3 h-3" /></div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 03 FAQ Registry */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-tighter">
              Häufig gestellte Fragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none bg-[#fdfcfb] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all group">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 04 Action Trigger */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative z-10 lg:w-[60%] space-y-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-lg sm:text-2xl md:text-5xl font-normal tracking-tighter text-white">
                  Designen Sie Ihr Erlebnis
                </h2>
              </div>
              <p className="text-white/80 font-normal text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">
                Kombinieren Sie Ihre Lieblings-Aktivitäten zu einer perfekten Safari. Unsere Spezialisten in Berlin beraten Sie persönlich zu Logistik und Verfügbarkeit.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button asChild size="xl" className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">
                <Link href="/trip-planner">Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
