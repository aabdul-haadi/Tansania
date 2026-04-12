"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Map, 
  Star, 
  TrendingUp,
  Wind,
  Timer,
  Award,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Zap,
  ArrowRight,
  ChevronRight,
  Clock,
  Heart,
  Users,
  ShieldAlert,
  MapPin,
  Calendar
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const routes = [
  { 
    id: "01",
    name: 'Machame Route', 
    title: 'Die Malerische',
    desc: 'Bekannt als die "Whiskey-Route", bietet sie spektakuläre Aussichten und eine exzellente Akklimatisierung durch das "hoch wandern, tief schlafen" Prinzip. Ideal für Fotografen.', 
    days: '6-7 Tage',
    level: 'Herausfordernd',
    highlight: 'Barranco Wall'
  },
  { 
    id: "02",
    name: 'Lemosho Route', 
    title: 'Die Exklusive',
    desc: 'Eine der schönsten Routen, die im Westen startet und durch unberührte Regenwälder führt. Ideal für Ruhe und höchste Erfolgschancen durch längere Gehzeit.', 
    days: '7-8 Tage',
    level: 'Moderat bis Schwer',
    highlight: 'Shira Plateau'
  },
  { 
    id: "03",
    name: 'Marangu Route', 
    title: 'Die Klassische',
    desc: 'Die "Coca-Cola-Route" ist der einzige Pfad mit festen Hüttenübernachtungen. Ein direkter, aber steilerer Aufstieg zum Gipfel für Liebhaber fester Unterkünfte.', 
    days: '5-6 Tage',
    level: 'Moderat',
    highlight: 'Hütten-Komfort'
  }
];

const faqs = [
  {
    question: "Wie läuft der Planungsprozess ab?",
    answer: "Unser Prozess beginnt mit einem persönlichen Gespräch, in dem wir Ihre Wünsche aufnehmen. Daraufhin erstellen wir einen individuellen Erstentwurf, den wir gemeinsam mit Ihnen so lange verfeinern, bis er perfekt zu Ihren Vorstellungen passt."
  },
  {
    question: "Kann ich online buchen und bezahlen?",
    answer: "Ja, nach der Finalisierung Ihres Reiseplans erhalten Sie Zugang zu unserem sicheren Buchungsportal. Wir bieten verschiedene gesicherte Zahlungsmethoden an, die alle durch den Deutschen Reisesicherungsfonds abgesichert sind."
  },
  {
    question: "Wie individuell können Sie meine Reise gestalten?",
    answer: "Da wir uns auf private Safaris spezialisiert haben, sind wir zu 100% flexibel. Von der Wahl der Lodges über die tägliche Route bis hin zu speziellen kulinarischen Wünschen gestalten wir jedes Detail nach Ihren Vorgaben."
  },
  {
    question: "Wie schnell erhalte ich eine Antwort auf meine Anfrage?",
    answer: "In der Regel erhalten Sie innerhalb von 24 Stunden eine erste Rückmeldung von unseren Spezialisten in Berlin. Ein detailliertes Angebot liegt Ihnen meist nach 48 Stunden vor."
  }
];

export default function KilimanjaroPage() {
  const firestore = useFirestore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const kiliPackages = packages?.filter(p => 
    ['KILIMANDSCHARO KOMBI', 'KILIMANDSCHARO', 'MOUNT MERU', 'EXPEDITION'].includes(p.category?.toUpperCase())
  ) || [];

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 01 COMPACT PRESTIGE HERO - RECALIBRATED WITH PROTECTIVE OVERLAY */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
            alt="Kilimandscharo Besteigung" 
            fill 
            priority
            className="object-cover"
            data-ai-hint="mount kilimanjaro"
          />
          {/* Layered Protective Overlay Registry */}
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20" />
        </div>
        
        <div className="container relative z-30 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-headline text-white leading-none whitespace-nowrap text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-normal">
              Kilimandscharo Besteigung
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 font-bold text-[10px] md:text-sm uppercase tracking-normal mt-6 leading-relaxed">
              Finden Sie Ihre perfekte Route zum Uhuru Peak. <br /> Erleben Sie eine Expedition, die über den Wolken beginnt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 EXPERT MANIFEST */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-normal">
                <Mountain className="w-4 h-4" /> Expeditions-Registry
              </div>
              <h2 className="font-headline text-secondary text-2xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-normal">
                Was macht den Berg <span className="text-primary font-bold">so legendär?</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground font-normal leading-relaxed text-sm md:text-base border-l-4 border-primary/20 pl-8">
              <p className="uppercase tracking-normal">
                Der Kilimandscharo vereint atemberaubende Landschaften, eine echte körperliche Herausforderung und den Nervenkitzel, den höchsten Gipfel Afrikas zu erklimmen.
              </p>
              <p className="uppercase tracking-normal">
                Unsere spezialisierten Besteigungs-Protokolle führen Sie durch fünf verschiedene Klimazonen. Wir in Berlin planen Ihre Sicherheit mit, während unsere lokalen Guides Ihren Erfolg garantieren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm group hover:border-primary transition-all">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-secondary uppercase tracking-normal">Sicherheits-Fokus</h4>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-normal leading-relaxed">Tägliche Gesundheitschecks & modernste Ausrüstung.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm group hover:border-primary transition-all">
                <Users className="w-6 h-6 text-primary shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-secondary uppercase tracking-normal">Profi-Guides</h4>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-normal leading-relaxed">Staatlich geprüft mit over 100 Gipfelstürmen.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative aspect-square md:aspect-[16/10] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1000" 
              alt="Kili Trekking Team" 
              fill 
              className="object-cover transition-transform duration-1000 hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 03 UNIQUE ASYMMETRICAL ROUTE BLUEPRINT */}
      <section className="py-12 md:py-24 bg-[#f8f8f8] relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
          <Compass className="w-[500px] h-[500px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-normal text-[10px]">Registry Protocol</span>
              <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-normal">
                Die legendären <span className="text-primary font-bold">Routen</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-bold text-sm md:text-base uppercase tracking-normal max-w-xs border-l-2 border-primary/20 pl-6 leading-relaxed">
              Jeder Pfad erzählt eine eigene Geschichte. Wählen Sie die Route, die zu Ihrer Kondition und Ihren Erwartungen passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            {routes.map((route, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative group md:col-span-6 lg:col-span-4 flex flex-col h-full",
                  idx === 1 ? "md:translate-y-12" : ""
                )}
              >
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-sm border border-border/50 hover:shadow-2xl transition-all duration-700 flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 font-headline font-black text-8xl text-muted/5 select-none transition-colors group-hover:text-primary/5">
                    {route.id}
                  </div>

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="rounded-lg border-primary/20 text-primary px-3 py-1 font-black text-[8px] uppercase tracking-normal">
                        Official Path
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-normal group-hover:text-primary transition-colors">
                        {route.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground font-normal uppercase tracking-normal opacity-80">
                        {route.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/40">
                      <div className="space-y-1">
                        <p className="text-[8px] font-black text-muted-foreground uppercase tracking-normal flex items-center gap-1.5">
                          <Timer className="w-3 h-3 text-primary" /> Dauer
                        </p>
                        <p className="text-xs font-bold text-secondary uppercase tracking-normal">{route.days}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] font-black text-muted-foreground uppercase tracking-normal flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-primary" /> Level
                        </p>
                        <p className="text-xs font-bold text-secondary uppercase tracking-normal">{route.level}</p>
                      </div>
                      <div className="col-span-2 space-y-1 pt-2">
                        <p className="text-[8px] font-black text-muted-foreground uppercase tracking-normal flex items-center gap-1.5">
                          <Star className="w-3 h-3 text-primary" /> Highlight
                        </p>
                        <p className="text-xs font-bold text-secondary uppercase tracking-normal">{route.highlight}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10">
                    <Link href="/contact" className="block">
                      <Button variant="outline" className="w-full rounded-xl h-12 text-[9px] font-black uppercase tracking-normal group-hover:bg-secondary group-hover:text-white transition-all border-muted shadow-sm">
                        ROUTE ANALYSIEREN <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 STICKY QUICK FACTS */}
      <section className="relative py-12 md:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
            alt="Kilimanjaro Facts Background" 
            fill 
            className="object-cover"
            data-ai-hint="mount kilimanjaro"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-normal leading-none">Quick Facts</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-40" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {[
              { icon: TrendingUp, label: "Höhe", val: "5.895 Meter", sub: "Uhuru Peak" },
              { icon: Map, label: "Routen", val: "7 Pfade", sub: "Offiziell" },
              { icon: Timer, label: "Dauer", val: "5-10 Tage", sub: "Akklimatisierung" },
              { icon: Wind, label: "Klimazonen", val: "5 Zonen", sub: "Vielfalt" },
              { icon: Award, label: "Erfolg", val: "90%", sub: "Mit SDL-Profi" }
            ].map((fact, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-[2rem] bg-white shadow-xl border border-border/50 text-center space-y-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-primary mb-1 tracking-normal">{fact.label}</p>
                  <p className="font-bold text-lg md:text-xl text-secondary uppercase leading-none tracking-normal">{fact.val}</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold mt-1 tracking-normal">{fact.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 SHARED PACKAGE CATALOG */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-get-7xl scroll-mt-20 text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase text-[10px] mb-2 block tracking-normal">Expeditions Portfolio</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-normal">Wählen Sie Ihre <span className="text-primary font-bold">Gipfeltour</span></h2>
          </div>
        </div>

        {isLoading ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-bold uppercase text-muted-foreground animate-pulse tracking-normal">Syncing Catalog...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
            {kiliPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* 06 SYNCED FAQ */}
      <section className="py-12 md:py-24 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20 text-left">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-normal">Häufig gestellte Fragen</h2>
            <p className="text-muted-foreground uppercase font-bold text-[10px] tracking-normal">Wissenswertes zur Expedition</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-2xl px-6 md:px-10 shadow-sm border border-transparent hover:border-border transition-all">
                <AccordionTrigger className="font-normal text-base md:text-xl py-6 hover:no-underline text-left text-secondary transition-colors tracking-normal [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <span>{faq.question}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed font-normal pb-8 uppercase opacity-80 text-left tracking-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
