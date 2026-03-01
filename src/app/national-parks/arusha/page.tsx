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
  Info, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Map as MapIcon,
  Tent,
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
      {/* 1) IMIMERSIVE HERO SECTION */}
      <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
            alt="Arusha National Park Mount Meru"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <Badge className="bg-primary text-white border-none px-6 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
              Geheimtipp Tansanias
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter uppercase">
              Die verborgenen Schätze <br />
              <span className="text-primary">des Arusha Parks</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-black leading-relaxed px-4 uppercase tracking-widest">
              Einzigartiges Erlebnis in Tansanias vielfältigstem Nationalpark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="rounded-full px-10 h-14 font-black text-[10px] uppercase tracking-widest">
                Mehr Erfahren
              </Button>
              <Link href="/trip-planner">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 font-black text-[10px] uppercase tracking-widest border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                  Jetzt Safari Erleben
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2) INTERACTIVE GOOGLE MAPS SECTION */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-2 block">Orientierung</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase leading-none">Interaktiver <br /><span className="text-primary">Park-Guide</span></h2>
            </div>
            <p className="text-muted-foreground font-bold text-sm leading-relaxed">
              Arusha Nationalpark liegt nur 45 Minuten von Arusha Stadt entfernt. Entdecken Sie die markanten Punkte direkt auf der Karte.
            </p>
            
            <div className="space-y-3">
              {pointsOfInterest.map((poi) => (
                <button
                  key={poi.id}
                  onClick={() => setActivePoi(poi)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group",
                    activePoi.id === poi.id 
                      ? "bg-secondary text-white border-secondary shadow-xl translate-x-2" 
                      : "bg-white border-border/50 hover:border-primary/20 text-secondary/60 hover:text-secondary"
                  )}
                >
                  <div>
                    <p className={cn("text-[8px] font-black uppercase tracking-widest mb-1", activePoi.id === poi.id ? "text-primary" : "text-muted-foreground")}>Region</p>
                    <span className="font-headline text-lg font-bold uppercase">{poi.name}</span>
                  </div>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", activePoi.id === poi.id ? "text-primary rotate-0" : "text-muted-foreground -rotate-45")} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.43452414112!2d36.7541611!3d-3.2441611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837699999999999%3A0x123456789abcdef!2sArusha%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.2] contrast-[1.1]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePoi.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-primary/10 max-w-xs"
                  >
                    <Badge className="bg-primary text-white border-none mb-2 text-[8px] font-black uppercase">Highlight</Badge>
                    <h4 className="font-headline text-xl font-bold text-secondary mb-2 uppercase">{activePoi.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-bold leading-relaxed">{activePoi.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) PARK HIGHLIGHTS DETAIL SECTION */}
      <section id="details" className="py-16 md:py-32 bg-white relative overflow-hidden border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Tiefe Einblicke</span>
            <h2 className="font-headline text-3xl md:text-7xl font-bold uppercase text-secondary tracking-tighter">Arusha Highlights <br /><span className="text-primary">Im Detail</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pointsOfInterest.map((poi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-muted/20 rounded-[3rem] overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={poi.img} alt={poi.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <h3 className="font-headline text-2xl font-bold text-white uppercase">{poi.name}</h3>
                  </div>
                </div>
                <div className="p-8 md:p-10 space-y-4">
                  <p className="text-sm text-muted-foreground font-bold leading-relaxed italic">
                    "{poi.details}"
                  </p>
                  <div className="pt-4">
                    <Link href="/trip-planner" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                      Expedition Planen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) SAFARI ACTIVITIES BENTO GRID */}
      <section className="py-16 md:py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 block">Aktive Erlebnisse</span>
              <h2 className="font-headline text-3xl md:text-7xl font-bold uppercase text-secondary tracking-tighter leading-none">Abenteuer <br /><span className="text-primary">Warten</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-sm font-bold uppercase tracking-widest max-w-[200px] border-l-2 border-primary/20 pl-4">
              Vom Gipfel des Mount Meru bis zum Kanu auf den Seen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((act, i) => (
              <Card key={i} className="rounded-[3rem] border-none shadow-xl bg-white group hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <CardContent className="p-10 flex flex-col justify-between h-full space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <act.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-[8px] font-black uppercase border-primary/20 text-primary">{act.level}</Badge>
                      <span className="text-[9px] font-black text-muted-foreground uppercase">{act.time}</span>
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-secondary uppercase mb-4">{act.title}</h4>
                    <p className="text-sm text-muted-foreground font-bold leading-relaxed">{act.desc}</p>
                  </div>
                  <Button variant="ghost" className="w-fit p-0 h-auto font-black text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">
                    Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5) TOUR BOOKING CTA */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="bg-secondary rounded-[3rem] md:rounded-[5rem] p-8 md:p-24 text-center space-y-8 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-1000" />
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
            <Compass className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Jetzt Buchen</span>
            <h3 className="font-headline text-4xl md:text-8xl font-bold text-white uppercase leading-none tracking-tighter">
              Ihr Abenteuer <br />beginnt <span className="text-primary italic">hier</span>
            </h3>
            <p className="text-white/60 font-bold max-w-lg mx-auto text-[10px] md:text-base leading-relaxed uppercase tracking-widest">
              Lassen Sie sich von unseren Experten in Berlin und Kairo beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-8 md:pt-12">
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button className="w-full bg-primary text-white hover:bg-white hover:text-secondary rounded-2xl px-12 md:px-16 h-16 md:h-20 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                  Safari Jetzt Anfragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6) VISITOR INFO & FAQ SECTION */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Wissenswertes</span>
          <h2 className="font-headline text-3xl md:text-7xl font-bold text-secondary uppercase leading-none tracking-tighter">
            Arusha <span className="text-primary">FAQ</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6">
          {[
            { 
              q: "Was macht den Arusha Nationalpark einzigartig?", 
              a: "Im Gegensatz zu den großen Savannen-Parks bietet Arusha eine unglaubliche Vielfalt auf kleinem Raum: von alkalischen Seen über dichten Bergregenwald bis hin zum alpinen Gelände des Mount Meru."
            },
            { 
              q: "Welche Tiere kann man im Arusha Nationalpark sehen?", 
              a: "Der Park ist berühmt für die Schwarz-Weißen Stummelaffen (Colobus), Giraffen, Zebras, Büffel und eine reiche Vogelwelt an den Momella-Seen. Elefanten sind am Ngurdoto-Krater zu finden, Löwen sind hingegen selten."
            },
            { 
              q: "Kann man den Mount Meru besteigen?", 
              a: "Ja, der Mount Meru ist eine beliebte 3- bis 4-tägige Tour. Er gilt als technisch anspruchsvoller als der Kilimandscharo und bietet spektakuläre Ausblicke auf seinen berühmten Nachbarn."
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-[2rem] md:rounded-[3rem] px-6 md:px-10 shadow-sm hover:shadow-xl transition-all group overflow-hidden border border-border/50">
              <AccordionTrigger className="text-left font-headline text-lg md:text-2xl font-bold py-8 md:py-10 hover:no-underline hover:text-primary transition-colors text-secondary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-lg font-bold leading-relaxed pb-8 md:pb-12 border-t border-muted/20 pt-6 md:pt-10">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FOOTER LOGO INTEGRATION */}
      <div className="py-12 border-t border-muted flex justify-center">
        <img src="/iconlogo.jpg" alt="Logo" className="h-12 w-auto grayscale opacity-30" />
      </div>
    </div>
  );
}
