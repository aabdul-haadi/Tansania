"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mountain, 
  Waves, 
  MapPin, 
  Compass, 
  Camera, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  Map as MapIcon,
  CheckCircle2,
  TreePine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const pointsOfInterest = [
  { 
    id: 'momella', 
    name: 'Momella Seen', 
    desc: 'Ein Paradies für Flamingos und Wasservögel.', 
    details: 'Die sieben flachen Seen sind alkalisch und bieten Nahrung für Tausende von Flamingos. Ein Muss für Vogelliebhaber.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    id: 'meru', 
    name: 'Mount Meru', 
    desc: 'Tansanias zweithöchster Gipfel (4.566m).', 
    details: 'Perfekt zur Akklimatisierung für den Kilimandscharo oder als eigenständige, anspruchsvolle Trekking-Tour durch diverse Klimazonen.',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  { 
    id: 'ngurdoto', 
    name: 'Ngurdoto Krater', 
    desc: 'Der „Kleine Ngorongoro“ des Arusha Parks.', 
    details: 'Ein drei Kilometer breiter Krater, dessen Boden von Sumpf und Regenwald bedeckt ist – ein Rückzugsort für Büffel und Elefanten.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

const activities = [
  { 
    title: 'Geführtes Hiking', 
    icon: Mountain, 
    level: 'Anspruchsvoll', 
    time: '3-4 Tage', 
    desc: 'Besteigen Sie den Mount Meru mit unseren erfahrenen Bergführern.' 
  },
  { 
    title: 'Kanu-Safari', 
    icon: Waves, 
    level: 'Entspannt', 
    time: '2-3 Stunden', 
    desc: 'Gleiten Sie lautlos über die Momella-Seen und beobachten Sie Büffel aus nächster Nähe.' 
  },
  { 
    title: 'Wildlife Drive', 
    icon: Camera, 
    level: 'Familienfreundlich', 
    time: 'Halbtags', 
    desc: 'Entdecken Sie Giraffen, Zebras und die seltenen Schwarz-Weißen Stummelaffen.' 
  }
];

export default function ArushaParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 1) COMPACT HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
            alt="Arusha National Park"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight tracking-tighter uppercase">
              Arusha <span className="text-primary">Nationalpark</span>
            </h1>
            <p className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-bold uppercase tracking-widest leading-relaxed">
              Die verborgenen Schätze von Tansanias vielfältigstem Park.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2) INTERACTIVE MAP - TIGHT PADDING */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Orientierung</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-secondary uppercase leading-none">Park-Guide</h2>
            </div>
            
            <div className="space-y-2">
              {pointsOfInterest.map((poi) => (
                <button
                  key={poi.id}
                  onClick={() => setActivePoi(poi)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group",
                    activePoi.id === poi.id 
                      ? "bg-secondary text-white border-secondary shadow-lg" 
                      : "bg-white border-border/50 hover:border-primary/20 text-secondary/60"
                  )}
                >
                  <span className="font-headline text-base font-bold uppercase">{poi.name}</span>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", activePoi.id === poi.id ? "text-primary rotate-0" : "text-muted-foreground -rotate-45")} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.43452414112!2d36.7541611!3d-3.2441611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837699999999999%3A0x123456789abcdef!2sArusha%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.1]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-4 left-4 z-10 pointer-events-none hidden sm:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePoi.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-primary/10 max-w-[240px]"
                  >
                    <h4 className="font-headline text-lg font-bold text-secondary mb-1 uppercase">{activePoi.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-bold leading-relaxed">{activePoi.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) HIGHLIGHTS - REDUCED PADDING */}
      <section className="py-12 md:py-16 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">Tiefe Einblicke</span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase text-secondary tracking-tighter">Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pointsOfInterest.map((poi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-muted/10 rounded-[2rem] overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={poi.img} alt={poi.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="font-headline text-xl font-bold text-white uppercase">{poi.name}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs text-muted-foreground font-bold leading-relaxed">
                    {poi.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) ACTIVITIES - COMPACT BENTO */}
      <section className="py-12 md:py-16 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase text-secondary tracking-tighter">Abenteuer <span className="text-primary">Erleben</span></h2>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest border-l-0 md:border-l-2 border-primary/20 md:pl-4">
              Aktiv die Wildnis entdecken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activities.map((act, i) => (
              <Card key={i} className="rounded-[2rem] border-none shadow-lg bg-white group hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <CardContent className="p-8 flex flex-col justify-between h-full space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <act.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-[7px] font-black uppercase border-primary/20 text-primary">{act.level}</Badge>
                      <span className="text-[8px] font-black text-muted-foreground uppercase">{act.time}</span>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-secondary uppercase mb-2">{act.title}</h4>
                    <p className="text-[11px] text-muted-foreground font-bold leading-relaxed">{act.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5) CTA - COMPACT */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-5xl">
        <div className="bg-secondary rounded-[2.5rem] p-8 md:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Compass className="w-40 h-40 text-white" />
          </div>
          
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline text-3xl md:text-6xl font-bold text-white uppercase leading-none tracking-tighter">
              Ihr Abenteuer <span className="text-primary">Beginnt</span>
            </h3>
            <p className="text-white/60 font-bold max-w-md mx-auto text-[10px] md:text-xs uppercase tracking-widest">
              Planen Sie Ihre Safari mit unseren Experten.
            </p>
            <div className="pt-4">
              <Link href="/trip-planner">
                <Button className="bg-primary text-white hover:bg-white hover:text-secondary rounded-xl px-10 h-14 font-black text-[10px] uppercase tracking-[0.2em] shadow-xl border-none">
                  Jetzt Anfragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6) FAQ - REDUCED VERTICAL GAPS */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl font-bold text-secondary uppercase tracking-tighter">
            Park <span className="text-primary">FAQ</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {[
            { 
              q: "Was macht Arusha einzigartig?", 
              a: "Die Vielfalt auf kleinem Raum: Von Seen über dichten Bergregenwald bis hin zum Mount Meru."
            },
            { 
              q: "Welche Tiere sieht man?", 
              a: "Schwarz-Weiße Stummelaffen, Giraffen, Zebras, Büffel und eine reiche Vogelwelt."
            },
            { 
              q: "Mount Meru Besteigung?", 
              a: "Ja, eine 3- bis 4-tägige Tour ist möglich und gilt als technisch anspruchsvoller als der Kilimandscharo."
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all border border-border/50">
              <AccordionTrigger className="text-left font-headline text-base font-bold py-5 hover:no-underline hover:text-primary text-secondary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs font-bold leading-relaxed pb-5 pt-2 border-t border-muted/10">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="py-8 flex justify-center">
        <img src="/iconlogo.jpg" alt="Logo" className="h-8 w-auto grayscale opacity-20" />
      </div>
    </div>
  );
}
