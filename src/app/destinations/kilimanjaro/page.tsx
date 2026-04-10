"use client";

import React from 'react';
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
  Award
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { cn } from '@/lib/utils';

export default function KilimanjaroPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const kiliPackages = packages?.filter(p => 
    ['KILIMANDSCHARO KOMBI', 'KILIMANDSCHARO', 'MOUNT MERU', 'EXPEDITION'].includes(p.category?.toUpperCase())
  ) || [];

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
    },
    {
      question: "Was kostet eine Safari-Reise nach Tansania?",
      answer: "Die Kosten hängen stark von der Reisezeit und dem gewünschten Komfortlevel ab. Als Richtwert für eine hochwertige, private Safari inkl. Lodges sollten Sie mit einem Budget ab ca. 5.000 € pro Person planen."
    },
    {
      question: "Sprechen die Guides vor Ort Deutsch?",
      answer: "Wir verfügen über einen Pool an exzellenten, staatlich geprüften Guides, die fließend Deutsch sprechen. Bitte geben Sie uns bei der Planung Bescheid, damit wir Ihren Wunschguide frühzeitig reservieren können."
    },
    {
      question: "Welche Reisezeit ist die beste für eine Safari?",
      answer: "Tansania ist ein Ganzjahresziel. Die Trockenzeiten von Juni bis Oktober sind ideal für Tierbeobachtungen, während die Monate Januar bis März perfekt für die Kalbungszeit im Süden der Serengeti sind."
    },
    {
      question: "Sind die Reisen auch für Familien mit Kindern geeignet?",
      answer: "Absolut. Wir planen spezielle Familiensafaris mit kürzeren Fahrtzeiten und familienfreundlichen Lodges, die über Pools und spezielle Aktivitäten für Kinder verfügen."
    }
  ];

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 01 STREAMLINED HERO - SINGLE LINE PRESTIGE */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Kilimandscharo Besteigung" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="mount kilimanjaro"
        />
        {/* Visibility Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="font-headline text-white leading-tight whitespace-nowrap text-xl sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest">
              Kilimandscharo Besteigung
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 font-light text-sm md:text-xl tracking-widest leading-relaxed uppercase">
              Finden Sie Ihre perfekte Route zum Uhuru Peak. Erleben Sie eine Expedition, die über den Wolken beginnt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 INTRO NARRATIVE */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <Mountain className="w-4 h-4" /> Expeditions-Registry
              </div>
              <h2 className="font-headline text-secondary tracking-wide uppercase text-2xl md:text-4xl">
                Was macht den Berg <span className="text-primary">so legendär?</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground font-normal leading-[20px] text-[14px] tracking-normal border-l-4 border-primary/20 pl-8">
              <p>
                Der Kilimandscharo vereint atemberaubende Landschaften, eine echte körperliche Herausforderung und den Nervenkitzel, den höchsten Gipfel Afrikas zu erklimmen — ganz ohne technische Kletterkenntnisse.
              </p>
              <p>
                Unsere spezialisierten Besteigungs-Protokolle führen Sie durch fünf verschiedene Klimazonen – von üppigen Regenwäldern bis hin zu den ewigen Gletschern am Kraterrand.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[16/10] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border border-border/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1000" 
              alt="Kili Trekking Team" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 03 QUICK FACTS WITH STICKY BG */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
            alt="Kilimanjaro Facts Background" 
            fill 
            className="object-cover"
            data-ai-hint="mount kilimanjaro"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-headline text-secondary tracking-wide uppercase text-2xl md:text-4xl">Kilimandscharo Quick Facts</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-40" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
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
                  <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">{fact.label}</p>
                  <p className="font-bold text-lg md:text-xl text-secondary tracking-tight uppercase">{fact.val}</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">{fact.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 SHARED PACKAGE CATALOG */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-get-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Aktuelle Expeditionen</span>
            <h2 className="font-headline text-secondary leading-tight tracking-wide uppercase text-2xl md:text-4xl">Wählen Sie Ihre <span className="text-primary">Gipfeltour</span></h2>
          </div>
        </div>

        {isLoading ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Syncing Gipfelstürmer...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {kiliPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* 05 SYNCED FAQ */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-secondary tracking-wide uppercase text-2xl md:text-4xl">Häufig gestellte Fragen</h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes zur Besteigung</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-xl px-6 md:px-10 shadow-sm border border-transparent hover:border-border transition-all">
              <AccordionTrigger className="font-normal text-[14px] leading-[20px] md:text-base py-5 hover:no-underline text-left text-secondary transition-colors uppercase tracking-widest">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <ContactSection />
    </div>
  );
}