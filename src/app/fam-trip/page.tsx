"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Compass, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Zap,
  Info,
  Waves,
  Mountain,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'overview', label: 'Übersicht' },
  { id: 'itinerary', label: 'Reiseverlauf' },
  { id: 'hotels', label: 'Unterkünfte' }
];

const itinerary = [
  {
    day: 1,
    title: "Flughafen Kilimanjaro - Arusha",
    location: "Arusha",
    dist: "50 km",
    time: "45-60 Min.",
    desc: "Nach der Ankunft am Kilimanjaro International Airport werden Sie von unserem Reiseleiter empfangen und mit dem Auto in die faszinierende Stadt Arusha gebracht. Dort angekommen, können Sie sich in der Arusha Planet Lodge von der Anreise erholen.",
    accommodation: "Arusha Planet Lodge",
    meals: "A"
  },
  {
    day: 2,
    title: "Arusha Nationalpark",
    location: "Arusha NP",
    dist: "20 km",
    time: "30 Min.",
    desc: "Erste Safari-Eindrücke im Arusha Nationalpark am Fuße des Mount Meru. Entdecken Sie Giraffen und seltene Stummelaffen im dichten Regenwald.",
    accommodation: "Arusha Planet Lodge",
    meals: "F, M, A"
  },
  {
    day: 3,
    title: "Tarangire Nationalpark",
    location: "Tarangire",
    dist: "120 km",
    time: "3,5 Std.",
    desc: "Fahrt zum Tarangire NP, bekannt für seine riesigen Elefantenherden und Baobabs. Weiterfahrt nach Karatu am Abend.",
    accommodation: "Farm of Dreams Lodge",
    meals: "F, M, A"
  },
  {
    day: 4,
    title: "Kulturelle Begegnungen",
    location: "Lake Eyasi",
    dist: "Variable",
    time: "Ganztags",
    desc: "Besuch der Buschmänner (Hadzabe) und der Schmieden (Datoga). Ein tiefer Einblick in ursprüngliche Kulturen Tansanias.",
    accommodation: "Farm of Dreams Lodge",
    meals: "F, M, A"
  },
  {
    day: 5,
    title: "Karatu - Massai Dorf - Serengeti",
    location: "Serengeti",
    dist: "100 km",
    time: "2,5 Std.",
    desc: "Besuch eines authentischen Massai Dorfes auf dem Weg in den legendären Serengeti Nationalpark.",
    accommodation: "Serengeti Heritage Camp",
    meals: "F, M, A"
  },
  {
    day: 6,
    title: "Serengeti Nationalpark",
    location: "Serengeti",
    dist: "Variable",
    time: "Pirschfahrten",
    desc: "Ein ganzer Tag im Herz der Serengeti. Beobachten Sie die Big Five in ihrer natürlichen Umgebung.",
    accommodation: "Serengeti Heritage Camp",
    meals: "F, M, A"
  },
  {
    day: 7,
    title: "Ngorongoro-Krater",
    location: "Ngorongoro",
    dist: "150 km",
    time: "3 Std.",
    desc: "Abstieg in den weltberühmten Ngorongoro Krater. Einzigartige Tierdichte auf engstem Raum.",
    accommodation: "Farm of Dreams Lodge",
    meals: "F, M, A"
  },
  {
    day: 8,
    title: "Karatu - Arusha - Rückreise",
    location: "Arusha",
    dist: "140 km",
    time: "2,5 Std.",
    desc: "Transfer zurück nach Arusha und anschließender Transfer zum Flughafen für Ihren Rückflug.",
    accommodation: "Abreise",
    meals: "F, M"
  }
];

export default function FamTripPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-body">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Fam Trip" 
          fill 
          priority
          className="object-cover brightness-50"
          data-ai-hint="serengeti jeep"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-primary text-white border-none px-4 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-2xl">
              Exklusiv für Reiseprofis
            </Badge>
            <h1 className="font-headline text-4xl md:text-8xl font-bold text-white leading-none tracking-tighter uppercase mb-6">
              FAM TRIP <br /> Tansania
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-xl text-white/90 font-black uppercase tracking-widest leading-relaxed">
              8 Tage Abenteuer & Kultur. Ihre Brücke zum Expertenwissen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Sub-Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
          <div className="flex gap-6 md:gap-12 h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "h-full px-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border-b-2",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[8px] font-black uppercase text-muted-foreground leading-none mb-1">Fragen?</p>
              <p className="text-xs font-black text-secondary">030 22608080</p>
            </div>
            <Button size="sm" className="rounded-xl px-6 text-[9px] font-black uppercase tracking-widest shadow-xl">Anfrage</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-12 md:pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <main className="lg:col-span-8 space-y-24">
            
            {/* Overview Section */}
            <section id="overview" className="space-y-8 scroll-mt-32">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-[0.4em]">
                  <Compass className="w-4 h-4" /> Expeditions-Audit
                </div>
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary leading-tight uppercase">
                  Abenteuer und <br /><span className="text-primary">Kultur erleben</span>
                </h2>
                <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-lg">
                  <p>
                    Erleben Sie Tansania auf eine einzigartige Weise mit unserem exklusiven 8-tägigen Fam Trip für Reiseprofis. Diese speziell gestaltete Reise bietet Ihnen die Möglichkeit, die spektakulärsten Orte des Landes zu entdecken.
                  </p>
                  <p>
                    Unser Fam Trip kombiniert Abenteuer, Kultur und Entspannung und bietet Ihnen wertvolle Einblicke, die Sie an Ihre Kunden weitergeben können.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Clock, label: "Dauer", val: "8 Tage" },
                  { icon: Users, label: "Gruppe", val: "Max. 6 Pers." },
                  { icon: Zap, label: "Preis", val: "Auf Anfrage" },
                  { icon: MapPin, label: "Region", val: "Nord-Tansania" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white rounded-[1.5rem] border border-border/50 shadow-sm text-center space-y-2">
                    <stat.icon className="w-5 h-5 text-primary mx-auto" />
                    <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                    <p className="font-bold text-xs md:text-sm text-secondary uppercase">{stat.val}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary Section */}
            <section id="itinerary" className="space-y-12 scroll-mt-32">
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase">Der <span className="text-primary">Reiseverlauf</span></h2>
              
              <div className="space-y-6">
                {itinerary.map((day, idx) => (
                  <Card key={idx} className="border-none shadow-sm rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white group hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-0 flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-secondary p-8 flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors duration-500">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Tag</span>
                        <span className="text-5xl font-black font-headline leading-none">{day.day}</span>
                      </div>
                      <div className="p-8 md:p-10 flex-grow space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5" /> {day.location}
                          </div>
                          <div className="flex gap-4 text-[8px] font-black text-muted-foreground uppercase tracking-widest">
                            <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3" /> {day.dist}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {day.time}</span>
                          </div>
                        </div>
                        <h4 className="font-headline text-xl md:text-3xl font-bold text-secondary uppercase leading-tight group-hover:text-primary transition-colors">{day.title}</h4>
                        <p className="text-sm text-muted-foreground font-bold leading-relaxed">{day.desc}</p>
                        
                        <div className="pt-4 flex items-center justify-between border-t border-border/50">
                          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>Unterkunft: <strong className="text-secondary">{day.accommodation}</strong></span>
                            <span>Verpflegung: <strong className="text-secondary">{day.meals}</strong></span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Accommodations Section */}
            <section id="hotels" className="space-y-12 scroll-mt-32">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-none">Die <br /><span className="text-primary">Unterkünfte</span></h2>
                </div>
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest max-w-[200px] border-l-2 border-primary/20 pl-4">
                  Handverlesene Lodges, die Komfort und Authentizität vereinen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Arusha Planet Lodge", type: "City Oasis", img: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800", desc: "Bungalows mit tropischem Garten am Stadtrand von Arusha." },
                  { name: "Serengeti Heritage Camp", type: "Luxury Tent", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", desc: "Authentisches Bush-Erlebnis mitten in der Wildnis." }
                ].map((hotel, i) => (
                  <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl bg-muted">
                    <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-primary font-black text-[9px] uppercase tracking-widest mb-2">{hotel.type}</p>
                      <h4 className="text-2xl font-headline font-bold text-white uppercase mb-2">{hotel.name}</h4>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{hotel.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar Conversion */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              
              <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-8 md:p-10 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8">
                  <div className="text-center">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Fam Trip Investment</span>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-white uppercase leading-none">Preis auf <br /><span className="text-primary">Anfrage</span></h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Hotline Berlin</p>
                        <p className="text-sm font-bold">030 22608080</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <Mail className="w-5 h-5 text-primary" />
                      <div className="min-w-0">
                        <p className="text-[8px] font-black uppercase text-white/40">Direktkontakt</p>
                        <p className="text-sm font-bold truncate">info@tansania-reiseabenteuer.de</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="block">
                    <Button className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                      Unterlagen anfordern
                    </Button>
                  </Link>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center">
                      <p className="text-[8px] font-black uppercase text-white/40">Verfügbarkeit</p>
                      <p className="text-[10px] font-black text-green-500 uppercase">Saison 2026</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex flex-col items-center">
                      <p className="text-[8px] font-black uppercase text-white/40">Beratung</p>
                      <p className="text-[10px] font-black text-white uppercase">Mo-Fr 10-18h</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[2rem] border-none shadow-sm p-8 space-y-6 bg-white">
                <h4 className="font-headline text-lg font-bold text-secondary uppercase">Inklusivleistungen</h4>
                <div className="space-y-3">
                  {[
                    "Alle Inlands-Transfers",
                    "Qualifizierte Safari Guides",
                    "Unterkunft in Partner-Lodges",
                    "Vollpension auf Safari",
                    "Nationalpark-Gebühren",
                    "Material für Ihre Kunden"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-3 pointer-events-none">
        <motion.div 
          initial={{ y: 50 }} animate={{ y: 0 }}
          className="pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-[1.5rem] p-3 flex items-center justify-between shadow-2xl border border-primary/10"
        >
          <div className="flex flex-col pl-3">
            <p className="text-[7px] text-muted-foreground uppercase font-black tracking-[0.2em]">FAM Trip Preis</p>
            <p className="text-lg font-black text-secondary uppercase">Auf Anfrage</p>
          </div>
          <Link href="/contact">
            <Button className="rounded-xl h-12 px-6 bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-xl">
              Anfragen <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
