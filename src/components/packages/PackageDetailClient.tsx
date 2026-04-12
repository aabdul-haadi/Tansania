"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Users,
  Compass,
  Star, 
  ShieldCheck,
  Map as MapIcon,
  PawPrint,
  Home,
  Mountain,
  Calendar,
  Plane,
  Waves,
  Camera,
  ChevronDown,
  CheckCircle2,
  Car,
  Utensils,
  UserCheck,
  PhoneCall,
  Plus,
  Globe,
  Sprout,
  GlassWater,
  Palmtree,
  Wind,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';
import { AiCTA } from '@/components/sections/AiCTA';

const navItems = [
  { id: 'overview', label: 'Übersicht' },
  { id: 'itinerary', label: 'Reiseverlauf' },
  { id: 'hotels', label: 'Unterkünfte' },
  { id: 'inquiry', label: 'Anfrage' }
];

const highlights = [
  {
    title: "Serengeti-Safari",
    desc: "Erleben Sie die große Tierwanderung und beobachten Sie die Big Five in ihrer natürlichen Umgebung.",
    icon: Compass
  },
  {
    title: "Ngorongoro-Krater",
    desc: "Entdecken Sie das achte Weltwunder und seine einzigartige Konzentration an Wildtieren.",
    icon: Mountain
  },
  {
    title: "Sansibar Strände",
    desc: "Entspannen Sie an den kristallklaren Gewässern und weißen Sandstränden des Indischen Ozeans.",
    icon: Waves
  },
  {
    title: "Maasai Kultur",
    desc: "Tauchen Sie ein in die faszinierenden Traditionen und Lebensweisen des Maasai-Volkes.",
    icon: Users
  },
  {
    title: "Luxus-Lodges",
    desc: "Übernachten Sie in handverlesenen Boutique-Lodges mit höchstem Komfort und Service.",
    icon: Home
  }
];

const inclusionsData = [
  { icon: Home, title: "Übernachtungen", desc: "In handverlesenen Luxus-Lodges & Tented Camps" },
  { icon: Car, title: "Privater 4x4", desc: "Alle Transfers und Pirschfahrten im privaten Geländewagen" },
  { icon: Camera, title: "Pirschfahrten", desc: "Unbegrenzte Fahrten zur Wildtierbeobachtung" },
  { icon: Utensils, title: "Verpflegung", desc: "Vollpension auf Safari, Halbpension auf Sansibar" },
  { icon: UserCheck, title: "Deutschsprachiger Guide", desc: "Erfahrene Ranger mit exzellenten Gebietskenntnissen" },
  { icon: Plane, title: "Inlandsflug", desc: "Inklusive Gepäcktransfer zwischen den Parks" },
  { icon: PhoneCall, title: "24/7 Notfall-Hotline", desc: "Persönlicher Ansprechpartner rund um die Uhr" },
];

const extrasData = [
  { icon: Globe, label: "Internationale Flüge", status: "auf Anfrage" },
  { icon: ShieldCheck, label: "Reiseversicherung", status: "optional" },
  { icon: Wind, label: "Heißluftballon-Safari", status: "ab €550 p.P." },
  { icon: Users, label: "Kulturelle Touren", status: "zubuchbar" },
  { icon: Sprout, label: "Spa-Behandlungen", status: "vor Ort" },
  { icon: GlassWater, label: "Private Dinner im Busch", status: "inkludiert*" },
  { icon: Palmtree, label: "Sansibar Verlängerung", status: "individuell" },
];

const featureIcons = [
  { icon: PawPrint, label: "Tierbeobachtungen" },
  { icon: Home, label: "Exklusive Lodge" },
  { icon: Mountain, label: "Abenteuer & Erholung" },
  { icon: Calendar, label: "Gut organisiert" },
  { icon: Plane, label: "Inkl. Flug" }
];

interface PackageDetailClientProps {
  pkg: any;
}

export function PackageDetailClient({ pkg }: PackageDetailClientProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const [activeSection, setActiveSection] = useState('overview');
  const itineraryRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      if (inquiryRef.current && scrollPos >= inquiryRef.current.offsetTop) setActiveSection('inquiry');
      else if (hotelsRef.current && scrollPos >= hotelsRef.current.offsetTop) setActiveSection('hotels');
      else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) setActiveSection('itinerary');
      else setActiveSection('overview');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const refMap: any = { overview: overviewRef, itinerary: itineraryRef, hotels: hotelsRef, inquiry: inquiryRef };
    const ref = refMap[id];
    if (ref && ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  const itineraryDays = pkg.itineraryDays || [];
  const dayGroups: any[] = [];
  for (let i = 0; i < itineraryDays.length; i += 5) {
    dayGroups.push(itineraryDays.slice(i, i + 5));
  }

  const basePrice = pkg.startingPrice || 5399;
  const originalPrice = 5999;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left" style={{ scaleX }} />

      {/* 01 IMMERSIVE CINEMA HERO */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
            alt={pkg.title} 
            fill 
            priority
            className="object-cover scale-105 brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-end pb-16 md:pb-24 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6 md:space-y-10 text-center flex flex-col items-center"
          >
            <div className="space-y-4 md:space-y-6 w-full">
              <h1 className="font-headline font-normal text-white text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                {pkg.title}
              </h1>
              <p className="text-white/90 font-light text-sm md:text-base lg:text-lg tracking-wide leading-relaxed max-w-2xl mx-auto">
                Ihre private Safari-Expedition durch Tansania und exklusive Erholung auf Sansibar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
               <Button 
                 onClick={() => scrollTo('inquiry')}
                 size="default"
                 className="w-full sm:w-auto rounded-lg px-10 font-bold text-sm tracking-wide shadow-2xl border-none"
               >
                 Jetzt anfragen
               </Button>
               <Button 
                 onClick={() => scrollTo('itinerary')}
                 variant="glass"
                 size="default"
                 className="w-full sm:w-auto rounded-lg px-10 font-bold text-sm tracking-wide transition-all"
               >
                 <MapIcon className="w-4 h-4 mr-2" /> Reiseroute ansehen
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 STICKY NAVIGATION */}
      <div className="sticky top-0 z-[40] bg-white/95 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20 max-w-7xl">
          <div className="flex gap-4 md:gap-12 h-full overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "h-full px-1 text-[11px] font-bold transition-all border-b-2 whitespace-nowrap",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] font-bold text-muted-foreground leading-none mb-1">Preise ab</p>
              <p className="text-sm font-bold text-secondary">€{basePrice.toLocaleString('de-DE')}</p>
            </div>
            <Button onClick={() => scrollTo('inquiry')} size="sm" className="rounded-xl h-11 px-8 text-xs font-bold shadow-xl border-none">Anfrage senden</Button>
          </div>
        </div>
      </div>

      {/* 03 NARRATIVE & MASTER CARD SECTION */}
      <section ref={overviewRef} className="py-8 md:py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  {pkg.durationDays} Tage {pkg.category}
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">
                  Eine Reise, die berührt
                </h2>
              </div>

              <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl group border border-border/50 bg-muted">
                <Image 
                  src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'} 
                  alt="Safari Moment" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="space-y-6 border-l-4 border-primary/20 pl-8 py-2 text-left">
                <p className="text-base leading-relaxed font-normal text-muted-foreground opacity-80">
                  Erleben Sie die pure Magie Ostafrikas. Von den goldenen Savannen der Serengeti bis zum türkisblauen Indischen Ozean auf Sansibar. Diese Reise wurde konzipiert, um Ihnen nicht nur die Big Five zu zeigen, sondern Ihnen die Seele Tansanias näherzubringen – exklusiv, privat und mit höchstem Komfort.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/trip-planner">
                  <Button className="w-full sm:w-auto h-12 md:h-14 px-10 rounded-xl font-bold text-xs border-none transition-all shadow-xl">
                    Reiseberatung anfragen
                  </Button>
                </Link>
                <Button onClick={() => scrollTo('inquiry')} variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-10 rounded-xl font-bold text-xs transition-all">
                  Diese Reise anfragen
                </Button>
              </div>
            </div>

            {/* Right Master Card Clone */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Card className="rounded-[1.5rem] border border-border/20 bg-[#FDFCFB] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                  <div className="space-y-8 relative z-10 text-left">
                    <div className="space-y-4">
                      <p className="text-[#C9A876] font-bold text-xs tracking-[0.2em] uppercase">Tansania</p>
                      <h3 className="font-headline text-[32px] md:text-[40px] leading-[1.1] font-medium text-[#3A3634] tracking-tight">
                        15 Tage Safari & Sansibar
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-1">
                        <p className="text-[#3A3634] font-bold text-lg">Reisedauer:</p>
                        <p className="text-lg text-[#8A8581] font-normal leading-tight">15-tägig, Flüge inklusive</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[#3A3634] font-bold text-lg">Unterkünfte:</p>
                        <p className="text-lg text-[#8A8581] font-normal leading-tight">Mittelklassehotels, Tented Lodges mit Vollpension</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[#3A3634] font-bold text-lg">Exklusive Gruppen:</p>
                        <p className="text-lg text-[#8A8581] font-normal leading-tight">Maximal 6 Teilnehmer pro Termin</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[#3A3634] font-bold text-lg">Reisezeit:</p>
                        <p className="text-lg text-[#8A8581] font-normal leading-tight">2026-2027</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "Geführte Erlebnisreisen",
                        "Kombinierbar",
                        "Ideal für Kleingruppen",
                        "Begrenzte Plätze verfügbar",
                        "Garantierte Durchführung"
                      ].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-border/60 bg-white text-[#8A8581] text-[11px] font-medium tracking-tight">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-end justify-between gap-6">
                      <div className="flex flex-col">
                        <span className="text-lg text-[#C9A876] font-medium line-through mb-1">5.999 €</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl md:text-5xl font-black text-[#141414] tracking-tighter">ab 5.399 €</span>
                        </div>
                        <p className="text-sm font-medium text-[#C9A876] mt-1">pro Person</p>
                      </div>
                      
                      <div className="flex flex-col gap-3 w-full md:w-auto">
                        <Button onClick={() => scrollTo('inquiry')} className="w-full md:w-48 h-14 rounded-lg bg-[#C9A876] text-white hover:bg-[#B89765] font-bold text-sm tracking-widest transition-all shadow-lg uppercase border-none">
                          Jetzt anfragen
                        </Button>
                        <Button variant="outline" className="w-full md:w-48 h-12 rounded-lg bg-white border-2 border-[#3A3634] text-[#3A3634] hover:bg-[#3A3634] hover:text-white font-bold text-[11px] tracking-widest transition-all flex items-center justify-center gap-2">
                          <FileText className="w-4 h-4" /> Reiseplan als PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 HIGHLIGHTS (Recalibrated Padding & Shadow) */}
      <section className="py-12 md:py-20 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="mb-10 md:mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">
              Die Höhepunkte Ihrer Reise
            </h2>
          </div>

          <div className="relative px-0 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {highlights.map((h, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <Card className="h-full border-none shadow-sm bg-white rounded-[2rem] overflow-hidden group transition-all duration-500">
                      <CardContent className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0]/50 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                          <h.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-headline text-2xl font-medium text-secondary tracking-tight">
                            {h.title}
                          </h4>
                          <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-70">
                            {h.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex absolute -left-4 h-14 w-14 rounded-full border-border bg-white text-secondary hover:bg-primary hover:text-white transition-all shadow-md z-30" />
              <CarouselNext className="hidden md:flex absolute -right-4 h-14 w-14 rounded-full border-border bg-white text-secondary hover:bg-primary hover:text-white transition-all shadow-md z-30" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* 05 ITINERARY (Bright Headlines) */}
      <section ref={itineraryRef} className="py-12 md:py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">Ihr Reiseverlauf</h2>
            <p className="text-muted-foreground font-normal text-base max-xl mx-auto opacity-80">
              Eine sorgfältig kuratierte Route durch die schönsten Regionen Tansanias
            </p>
          </div>

          <Accordion type="multiple" defaultValue={["group-0"]} className="space-y-8">
            {dayGroups.map((group, gIdx) => {
              const startDay = gIdx * 5 + 1;
              const endDay = startDay + group.length - 1;
              
              return (
                <AccordionItem key={gIdx} value={`group-${gIdx}`} className="border-none">
                  <AccordionTrigger className="p-0 hover:no-underline [&>svg]:hidden group">
                    <div className="relative w-full min-h-[100px] md:aspect-[21/2.5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-secondary flex items-center group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src={`https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200`}
                        alt="Expedition Section"
                        fill
                        className="object-cover opacity-20 brightness-50"
                      />
                      <div className="relative z-10 flex items-center justify-between w-full text-white py-6 pr-6 md:pr-12">
                        <div className="text-left pl-8 md:pl-16">
                          <h3 className="font-headline text-lg md:text-3xl font-normal tracking-tighter text-white">
                            Safari Abenteuer • <span className="text-white font-bold">Tag {startDay}-{endDay}</span>
                          </h3>
                          <p className="text-xs font-bold opacity-60 text-white/80">Wildnis & Naturwunder</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-data-[state=open]:rotate-180 transition-transform bg-white/5 shadow-xl">
                          <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pt-8 pb-4 px-2 md:px-8 space-y-12 relative overflow-visible">
                    <div className="absolute left-[36px] md:left-[60px] top-12 bottom-12 w-px bg-border/60 z-0" />
                    
                    {group.map((day: any, dIdx: number) => (
                      <div key={dIdx} className="relative z-10 flex gap-4 md:gap-12">
                        <div className="shrink-0">
                          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shadow-sm relative z-10">
                            <span className="text-xs md:text-xl font-bold text-primary">{startDay + dIdx}</span>
                          </div>
                        </div>

                        <div className="flex-1 bg-white rounded-[1.5rem] md:rounded-[3rem] border border-border/40 p-6 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 group/card">
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="flex-1 space-y-6 text-left">
                              <div className="space-y-2">
                                <Badge className="bg-primary/10 text-primary border-none text-[10px] font-bold px-3 py-1">
                                  {day.location}
                                </Badge>
                                <h4 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-tight group-hover/card:text-primary transition-colors">
                                  {day.title}
                                </h4>
                              </div>
                              <p className="text-base text-muted-foreground font-normal leading-relaxed opacity-70">
                                {day.desc}
                              </p>
                            </div>
                            
                            <div className="shrink-0 w-full lg:w-72 relative aspect-square md:aspect-video lg:aspect-square rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-border/20">
                              <Image 
                                src={day.img || `https://picsum.photos/seed/day-${startDay + dIdx}/600/600`} 
                                alt={day.title} 
                                fill 
                                className="object-cover transition-transform duration-1000 group-card:scale-110"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* 06 HOTELS */}
      <section ref={hotelsRef} className="py-12 md:py-20 bg-white scroll-mt-20 border-t border-border/40 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-10 md:mb-12 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">
              Handverlesene Unterkünfte
            </h2>
            <p className="text-muted-foreground font-normal text-base max-w-2xl mx-auto opacity-60">
              Wir wählen jede Lodge persönlich nach Lage, Stil und Service aus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-sm border border-border/40 flex flex-col h-full group hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" 
                  alt="Boutique Safari-Lodges" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow space-y-6 text-left">
                <h3 className="font-headline text-2xl font-medium text-secondary tracking-tight">
                  Boutique Safari-Lodges
                </h3>
                <p className="text-base text-muted-foreground font-normal leading-relaxed opacity-70">
                  Luxuriöse Zeltcamps und Lodges mitten in der Wildnis. Jede Unterkunft verbindet authentisches Safari-Feeling mit höchstem Komfort: private Terrassen mit Blick auf die Savanne und erstklassiger Service.
                </p>
                <div className="pt-4 border-t border-border/40 space-y-4">
                  {[
                    "Private Decks mit Wildtierblick",
                    "Exquisite Küche und privates Dining",
                    "Persönlicher Butler-Service"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-bold text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-sm border border-border/40 flex flex-col h-full group hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" 
                  alt="Sansibar Beach Retreat" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow space-y-6 text-left">
                <h3 className="font-headline text-2xl font-medium text-secondary tracking-tight">
                  Sansibar Beach Retreat
                </h3>
                <p className="text-base text-muted-foreground font-normal leading-relaxed opacity-70">
                  Ihr privates Strandparadies auf Sansibar. Exklusives Boutique-Resort direkt am schneeweißen Sandstrand, umgeben von Palmen und dem türkisfarbenen Indischen Ozean.
                </p>
                <div className="pt-4 border-t border-border/40 space-y-4">
                  {[
                    "Direkter Strandzugang",
                    "Infinity-Pool und Spa",
                    "Meerblick-Suiten mit privatem Balkon"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-bold text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 INCLUSIONS */}
      <section className="py-12 md:py-20 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="mb-10 md:mb-12 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">
              In Ihrer Reise enthalten
            </h2>
            <p className="text-muted-foreground font-normal text-base max-w-xl mx-auto opacity-60">
              Rundum-Sorglos-Paket für Ihr perfektes Safari-Erlebnis
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
              {inclusionsData.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-xl font-medium text-secondary tracking-tight transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-normal opacity-70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[400px] shrink-0">
              <Card className="rounded-[2.5rem] border-none shadow-2xl bg-white p-10 relative overflow-hidden group">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-[#FDF7F2] flex items-center justify-center bg-white shadow-lg text-primary">
                  <Plus className="w-5 h-5" />
                </div>
                
                <div className="space-y-10 relative z-10 text-left">
                  <h3 className="font-headline text-2xl font-medium text-secondary tracking-tight">
                    Extras & Optionen
                  </h3>

                  <div className="space-y-6">
                    {extrasData.map((ex, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 group/item">
                        <div className="flex items-center gap-4">
                          <ex.icon className="w-4 h-4 text-primary/60 group-hover/item:text-primary transition-colors" />
                          <span className="text-xs font-bold text-secondary">{ex.label}</span>
                        </div>
                        <span className={cn(
                          "text-[10px] font-bold whitespace-nowrap px-2 py-0.5 rounded",
                          ex.status === 'inkludiert*' ? "bg-primary/10 text-primary" : "text-muted-foreground/40"
                        )}>
                          {ex.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/40">
                    <Button onClick={() => scrollTo('inquiry')} className="w-full rounded-lg h-14 px-8 font-bold text-xs border-none shadow-xl">
                      Jetzt anfragen
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <AiCTA />

      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}