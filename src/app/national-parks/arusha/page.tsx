
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
  TreePine,
  Zap,
  CloudSun,
  Timer,
  Plane
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
    desc: 'Besteigen Sie den Mount Meru mit unseren erfahrenen Bergführern.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
  },
  { 
    title: 'Kanu-Safari', 
    icon: Waves, 
    level: 'Entspannt', 
    time: '2-3 Stunden', 
    desc: 'Gleiten Sie lautlos über die Momella-Seen und beobachten Sie Büffel aus nächster Nähe.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    title: 'Wildlife Drive', 
    icon: Camera, 
    level: 'Familienfreundlich', 
    time: 'Halbtags', 
    desc: 'Entdecken Sie Giraffen, Zebras und die seltenen Schwarz-Weißen Stummelaffen.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

const wildlifeHighlights = [
  { name: "Stummelaffe", sub: "Schwarz-Weiß", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=600" },
  { name: "Flamingos", sub: "Momella Seen", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=600" },
  { name: "Giraffen", sub: "Maasai-Giraffe", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" },
];

export default function ArushaParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 1) STREAMLINED HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
            alt="Arusha National Park Discovery"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter uppercase">
              Arusha <br /><span className="text-primary">Nationalpark</span>
            </h1>
            <p className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-bold uppercase tracking-[0.4em] leading-relaxed">
              Tansanias Geheimtipp der Kontraste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2) LOGISTICS & INTERACTIVE MAP NAVIGATOR */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Navigator & Lage</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase leading-none tracking-tighter">
                Der Perfekte <br /><span className="text-primary">Auftakt</span>
              </h2>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Durch die Nähe zum Flughafen (45 Min.) ist dieser Park das ideale erste oder letzte Ziel Ihrer Expedition.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: Plane, t: "Airport JRO", d: "Nur 35km Entfernung" },
                { icon: Timer, t: "Zeiteffizient", d: "Optimal für Anreisetage" },
                { icon: Zap, t: "Vielfalt", d: "Dschungel, Seen & Vulkane" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-border/50 group hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-secondary uppercase leading-none mb-1">{item.t}</p>
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] md:aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.43452414112!2d36.7541611!3d-3.2441611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837699999999999%3A0x123456789abcdef!2sArusha%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.3]"
                allowFullScreen
                loading="lazy"
              />
              {/* Overlay Interactive Labels */}
              <div className="absolute top-4 left-4 z-10 hidden md:flex flex-col gap-2">
                {pointsOfInterest.map((p) => (
                  <button 
                    key={p.id}
                    onClick={() => setActivePoi(p)}
                    className={cn(
                      "px-4 py-2 rounded-xl backdrop-blur-md border text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg",
                      activePoi.id === p.id 
                        ? "bg-primary text-white border-primary" 
                        : "bg-white/80 text-secondary border-white/20 hover:bg-white"
                    )}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 z-10 p-4 bg-white/95 backdrop-blur shadow-2xl rounded-2xl border border-primary/10 max-w-[240px] hidden md:block">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{activePoi.name}</p>
                <p className="text-[11px] text-secondary font-bold leading-relaxed">{activePoi.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) CREATIVE WILDLIFE SPOTLIGHT */}
      <section className="py-12 md:py-20 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-3 block">Signature Wildlife</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-secondary uppercase leading-none tracking-tighter">
                Begegnungen <br /><span className="text-primary">Hautnah</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm font-light max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
              Arusha ist die exklusive Heimat der seltenen Schwarz-Weißen Stummelaffen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wildlifeHighlights.map((animal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <Image src={animal.img} alt={animal.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-primary font-bold text-[9px] uppercase tracking-[0.3em] mb-1.5">{animal.sub}</p>
                  <h4 className="font-headline text-2xl font-bold uppercase">{animal.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) CREATIVE BENTO ACTIVITIES - LIGHT THEME */}
      <section className="py-12 md:py-20 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-7xl font-bold uppercase text-secondary tracking-tighter">Die <span className="text-primary">Erlebnisse</span></h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((act, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-border/50 flex flex-col h-full group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={act.img} alt={act.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white border-none px-3 py-1 text-[8px] font-bold uppercase tracking-widest">{act.level}</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <act.icon className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{act.time} Dauer</span>
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-secondary uppercase mb-3 leading-tight">{act.title}</h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{act.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-muted">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:translate-x-2 transition-transform">
                      Anfrage senden <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) CLIMATE VISUALIZER - MINIMALIST LIGHT */}
      <section className="py-12 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Timing & Klima</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase leading-none tracking-tighter text-white">Beste <br /><span className="text-primary">Reisezeit</span></h2>
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                Der Arusha Nationalpark bietet das ganze Jahr über spektakuläre Einblicke, doch jede Phase hat ihre Vorteile.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                  <CloudSun className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-xs uppercase text-white">Juni – Oktober</p>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Trockenzeit & Beste Tiersichtungen</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                  <Waves className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-xs uppercase text-white">November – Mai</p>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Grüne Saison & Vogelbeobachtung</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000" alt="Arusha Climate View" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-[2.5rem] shadow-2xl hidden lg:block border border-white/10">
                <Sparkles className="w-8 h-8 text-white mb-3" />
                <p className="text-white font-bold text-lg uppercase leading-tight">Geheimtipp:</p>
                <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest mt-1">Starten Sie vor Sonnenaufgang!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) FAQ & FINAL CALL TO ACTION - LIGHT PREMIUM */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold uppercase text-secondary tracking-tighter">Park <span className="text-primary">Details</span></h2>
          <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-widest mt-2">Wissenswertes für Ihre Planung</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {[
            { q: "Was macht den Park einzigartig?", a: "Die unglaubliche topografische Vielfalt: Von den alkalischen Momella Seen über dichten Bergregenwald bis hin zum Mount Meru. Er bietet zudem Sichtungen des seltenen Stummelaffen." },
            { q: "Ist eine Besteigung des Mount Meru sicher?", a: "Sicherheit ist unsere Priorität. Alle Besteigungen werden von zertifizierten Guides und bewaffneten Rangern begleitet. Die Tour gilt als technisch anspruchsvoller als der Kilimandscharo." },
            { q: "Wie erreiche ich den Park von Arusha?", a: "Der Park liegt nur etwa 35km nordöstlich der Stadt Arusha. Die Anfahrt dauert je nach Verkehrslage etwa 45 bis 60 Minuten über gut ausgebaute Straßen." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-2xl px-6 shadow-sm hover:shadow-md transition-all border border-border/50">
              <AccordionTrigger className="text-left font-headline text-lg font-bold py-6 hover:no-underline hover:text-primary text-secondary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed pb-6 pt-1">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 p-8 md:p-16 bg-primary rounded-[3rem] text-center space-y-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="font-headline text-3xl md:text-6xl font-bold text-white uppercase leading-none tracking-tighter">
              Ihr Abenteuer <br /><span className="text-secondary">Beginnt Hier</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-secondary hover:bg-secondary hover:text-white rounded-2xl px-10 h-14 font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl transition-all border-none">
                  Reise Konfigurieren
                </Button>
              </Link>
              <Link href="/contact" className="text-white font-bold text-[10px] uppercase tracking-[0.4em] hover:text-secondary transition-colors px-6 py-3">
                Experten Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 flex justify-center opacity-20">
        <img src="/iconlogo.jpg" alt="Logo" className="h-8 w-auto grayscale" />
      </div>
    </div>
  );
}
