"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Palmtree, 
  Compass, 
  MapPin, 
  Sun, 
  Wind, 
  Star, 
  ChevronRight, 
  Anchor, 
  LayoutGrid, 
  Video, 
  Sparkles,
  Camera,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/sections/ContactSection';

const zanzibarGallery = [
  { src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", alt: "Sansibar Strand 1", hint: "zanzibar beach" },
  { src: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800", alt: "Sansibar Strand 2", hint: "zanzibar coast" },
  { src: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800", alt: "Sansibar Strand 3", hint: "stone town" },
  { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", alt: "Sansibar Strand 4", hint: "dhow cruise" },
  { src: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800", alt: "Sansibar Strand 5", hint: "safari lodge" },
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", alt: "Sansibar Strand 6", hint: "serengeti safari" },
];

export default function ZanzibarPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const zanzibarPackages = packages?.filter(p => 
    ['SAFARI & SANSIBAR', 'FLITTERWOCHEN', 'FAMILIENSAFARI', 'SANSIBAR', 'CAMPING SAFARI', 'KILIMANDSCHARO SAFARI'].includes(p.category)
  ) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Header */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1920" 
          alt="Sansibar Inselparadies" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="zanzibar coast"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              Das tropische Juwel Tansanias
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-normal text-white mb-6 leading-tight drop-shadow-2xl tracking-tighter">
              Erleben Sie das Beste <br />
              <span className="text-primary">aus zwei Welten</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed px-4">
              Entspannen Sie an Sansibars Traumstränden und entdecken Sie Tansanias spektakuläre Safaris – perfekt kombiniert in unseren maßgeschneiderten Reisepaketen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-normal mb-4 text-secondary tracking-tighter uppercase">Häufig gestellte <span className="text-primary">Fragen zu Sansibar</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes für Ihren Inselurlaub</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Wie ist das Internet und die Mobilfunkabdeckung?", a: "In den meisten Hotels und Resorts gibt es WLAN. In Stone Town ist die Abdeckung gut, in abgelegeneren Regionen kann sie schwankend sein. Wir empfehlen lokale SIM-Karten für mobiles Internet." },
            { q: "Gibt es besondere Verhaltensregeln auf Sansibar?", a: "Sansibar ist muslimisch geprägt. Bitte kleiden Sie sich außerhalb der Strände (z.B. in Stone Town) respektvoll und bedecken Sie Schultern und Knie." },
            { q: "Brauche ich für Sansibar besondere Impfungen?", a: "Es gelten die gleichen Empfehlungen wie für Tansania Festland. Gelbfieber-Impfung ist bei Einreise aus Endemiegebieten Pflicht." },
            { q: "Ist Sansibar auch für Flitterwochen geeignet?", a: "Absolut! Sansibar gilt als eines der romantischsten Ziele weltweit mit exklusiven Honeymoon-Resorts und privaten Dinner-Optionen." },
            { q: "Wie sicher ist ein Urlaub auf Sansibar?", a: "Sansibar ist ein sehr sicheres Reiseziel. Wie überall sollten Sie Wertsachen im Hotelsafe lassen und nachts keine einsamen Strandabschnitte aufsuchen." },
            { q: "Warum mit Tansania Reiseabenteuer buchen?", a: "Wir bieten lokale Expertise, handverlesene Unterkünfte und eine nahtlose Organisation zwischen Safari-Festland und Inselparadies." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-normal text-base md:text-lg py-6 hover:no-underline hover:text-primary text-left text-secondary transition-colors tracking-tight">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
}
