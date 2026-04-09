"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  Heart,
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
  Zap
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

const inclusions = [
  { icon: Home, title: "14 Übernachtungen", desc: "In handverlesenen Luxus-Lodges & Tented Camps" },
  { icon: Car, title: "Privater 4x4", desc: "Alle Transfers und Pirschfahrten im privaten Geländewagen" },
  { icon: Camera, title: "Pirschfahrten", desc: "Unbegrenzte Fahrten zur Wildtierbeobachtung" },
  { icon: Utensils, title: "Verpflegung", desc: "Vollpension auf Safari, Halbpension auf Sansibar" },
  { icon: UserCheck, title: "Deutschsprachiger Guide", desc: "Erfahrene Ranger mit exzellenten Gebietskenntnissen" },
  { icon: Plane, title: "Inlandsflug", desc: "Inklusive Gepäcktransfer zwischen den Parks" },
  { icon: PhoneCall, title: "24/7 Notfall-Hotline", desc: "Persönlicher Ansprechpartner rund um die Uhr" },
];

const extras = [
  { icon: Globe, label: "Internationale Flüge", status: "auf Anfrage" },
  { icon: ShieldCheck, label: "Reiseversicherung", status: "optional" },
  { icon: Wind, label: "Heißluftballon-Safari", status: "ab €550 p.P." },
  { icon: Users, label: "Kulturelle Touren", status: "zubuchbar" },
  { icon: Sprout, label: "Spa-Behandlungen", status: "vor Ort" },
  { icon: GlassWater, label: "Private Dinner im Busch", status: "inkludiert*" },
  { icon: Palmtree, label: "Sansibar Verlängerung", status: "individuell" },
];

interface PackageDetailClientProps {
  pkg: any;
}

export function PackageDetailClient({ pkg }: PackageDetailClientProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const itineraryRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
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
  const dayGroups = [];
  for (let i = 0; i < itineraryDays.length; i += 5) {
    dayGroups.push(itineraryDays.slice(i, i + 5));
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 IMMERSIVE CINEMA HERO - SYNCED WITH 72PX/90PX PROTOCOL */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
            alt={pkg.title} 
            fill 
            priority
            className="object-cover scale-105 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-end pb-16 md:pb-24 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl space-y-6 md:space-y-10"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-90">
                {pkg.category || 'Tansania · Sansibar'}
              </p>
              <h1 className="font-headline font-normal text-white text-3xl md:text-6xl lg:text-[72px] lg:leading-[90px] tracking-tight leading-tight">
                {pkg.title || 'Traumabenteuer in Afrika'}
              </h1>
              <p className="text-white font-light text-sm md:text-xl lg:text-[24px] lg:leading-[39px] tracking-wide leading-relaxed max-w-3xl">
                Erleben Sie eine privat geführte Expedition durch die spektakulärsten Nationalparks und entspannen Sie an den Traumstränden Sansibars.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
               <Button 
                 onClick={() => scrollTo('inquiry')}
                 size="lg"
                 className="w-full sm:w-auto rounded-lg h-12 md:h-14 px-10 font-bold text-[11px] tracking-widest shadow-2xl border-none"
               >
                 Jetzt Anfragen
               </Button>
               <Button 
                 onClick={() => scrollTo('itinerary')}
                 variant="glass"
                 size="lg"
                 className="w-full sm:w-auto rounded-lg h-12 md:h-14 px-10 font-bold text-[11px] tracking-widest transition-all"
               >
                 <MapIcon className="w-4 h-4 mr-2" /> Reiseroute ansehen
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 STICKY NAVIGATION MANIFESTO */}
      <div className="sticky top-0 z-[40] bg-white/95 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20 max-w-7xl">
          <div className="flex gap-4 md:gap-12 h-full overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "h-full px-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[8px] font-bold uppercase text-muted-foreground leading-none mb-1 tracking-widest">Preise ab</p>
              <p className="text-xs font-bold text-secondary">€{pkg.startingPrice?.toLocaleString('de-DE') || '5.399'}</p>
            </div>
            <Button onClick={() => scrollTo('inquiry')} size="sm" className="rounded-xl h-11 px-8 text-[10px] font-bold tracking-widest shadow-xl border-none">Anfrage senden</Button>
          </div>
        </div>
      </div>

      {/* 03 TECHNICAL ICON STRIP */}
      <section className="bg-white border-b border-border/40 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12">
            {[
              { icon: PawPrint, label: "Tierbeobachtungen" },
              { icon: Home, label: "Exklusive Lodge" },
              { icon: Mountain, label: "Abenteuer & Erholung" },
              { icon: Calendar, label: "Gut organisiert" },
              { icon: Plane, label: "Inkl. Flug" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FDF7F2] flex items-center justify-center border border-[#F0EBE0]/30 shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <item.icon className="w-6 h-6 text-[#C9A876]" />
                </div>
                <span className="text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 NARRATIVE MANIFEST SECTION - SYNCED WITH 14PX/20PX PROTOCOL */}
      <section ref={overviewRef} className="py-12 md:py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
            
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] border border-primary/20">
                  {pkg.durationDays} Tage {pkg.category || 'Safari & Sansibar'}
                </div>
                <h2 className="font-headline text-3xl md:text-5xl lg:text-[48px] lg:leading-[1.2] font-normal text-secondary tracking-tighter">
                  Eine Reise, <br /><span className="text-primary">die berührt</span>
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

              <div className="space-y-8 border-l-4 border-primary/20 pl-8 py-2">
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-wide">
                  Erleben Sie die pure Magie Ostafrikas. Von den goldenen Savannen der Serengeti bis zum türkisblauen Indischen Ozean auf Sansibar. Diese Reise wurde konzipiert, um Ihnen nicht nur die Big Five zu zeigen, sondern Ihnen die Seele Tansanias näherzubringen – exklusiv, privat und mit höchstem Komfort.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/trip-planner">
                  <Button className="w-full sm:w-auto h-12 md:h-14 px-10 rounded-xl font-bold text-[11px] tracking-widest border-none transition-all shadow-xl">
                    Reiseberatung anfragen
                  </Button>
                </Link>
                <Button onClick={() => scrollTo('inquiry')} variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-10 rounded-xl font-bold text-[11px] tracking-widest transition-all">
                  Diese Reise anfragen
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Card className="rounded-[2.5rem] border-none bg-[#FDF7F2] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="space-y-10 relative z-10">
                    <div className="space-y-4">
                      <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Master Registry</p>
                      <h3 className="font-headline text-[24px] leading-[32px] font-medium text-secondary tracking-tight">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-1">
                        <p className="text-secondary font-bold text-[11px] tracking-widest uppercase">Reisedauer</p>
                        <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                          {pkg.durationDays}-tägig, Flüge inklusive
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-bold text-[11px] tracking-widest uppercase">Unterkünfte</p>
                        <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                          Handverlesene Tented Lodges & Boutique Hotels
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-bold text-[11px] tracking-widest uppercase">Exklusivität</p>
                        <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                          Privat-Safari mit eigenem Guide & Jeep
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-border/40 space-y-6">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-muted-foreground/40 line-through mb-1">€{(pkg.startingPrice + 600).toLocaleString('de-DE')}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-bold text-secondary uppercase tracking-widest">ab</span>
                          <span className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter">
                            {pkg.startingPrice?.toLocaleString('de-DE') || '5.399'} €
                          </span>
                        </div>
                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">pro Person im Doppelzimmer</p>
                      </div>
                      <Button onClick={() => scrollTo('inquiry')} className="w-full rounded-lg h-14 px-8 font-bold text-[11px] tracking-widest border-none shadow-xl">
                        Verfügbarkeit prüfen
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 05 HIGHLIGHTS REGISTRY */}
      <section className="py-12 md:py-24 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-[48px] lg:leading-[1.2] font-normal text-secondary tracking-tighter">
              Die Höhepunkte Ihrer Reise
            </h2>
          </div>

          <div className="relative px-0 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {highlights.map((h, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <Card className="h-full border-none shadow-sm bg-white rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0]/50 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                          <h.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-headline text-[24px] leading-[32px] font-medium text-secondary tracking-tight">
                            {h.title}
                          </h4>
                          <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
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

      {/* 06 TIMELINE ITINERARY - SYNCED TYPOGRAPHY */}
      <section ref={itineraryRef} className="py-16 md:py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl lg:text-[48px] lg:leading-[1.2] font-normal text-secondary tracking-tighter">Ihr Reiseverlauf</h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl mx-auto tracking-widest opacity-80">
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
                          <h3 className="font-headline text-lg md:text-3xl font-normal tracking-tighter">
                            Safari Abenteuer • <span className="text-primary font-bold">Tag {startDay}-{endDay}</span>
                          </h3>
                          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-60">Wildnis & Naturwunder</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-data-[state=open]:rotate-180 transition-transform bg-white/5 shadow-xl">
                          <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pt-12 pb-4 px-2 md:px-8 space-y-12 relative overflow-visible">
                    <div className="absolute left-[36px] md:left-[60px] top-12 bottom-12 w-px bg-border/60 z-0" />
                    
                    {group.map((day, dIdx) => (
                      <div key={dIdx} className="relative z-10 flex gap-4 md:gap-12">
                        <div className="shrink-0">
                          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shadow-sm relative z-10">
                            <span className="text-xs md:text-xl font-bold text-primary">{startDay + dIdx}</span>
                          </div>
                        </div>

                        <div className="flex-1 bg-white rounded-[1.5rem] md:rounded-[3rem] border border-border/40 p-6 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 group/card">
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="flex-1 space-y-6">
                              <div className="space-y-2">
                                <Badge className="bg-primary/10 text-primary border-none text-[8px] font-bold tracking-widest px-3 py-1 uppercase">
                                  {day.location}
                                </Badge>
                                <h4 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-tight group-hover/card:text-primary transition-colors">
                                  {day.title}
                                </h4>
                              </div>
                              <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                                {day.desc}
                              </p>
                            </div>
                            
                            <div className="shrink-0 w-full lg:w-72 relative aspect-square md:aspect-video lg:aspect-square rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-border/20">
                              <Image 
                                src={day.img || `https://picsum.photos/seed/day-${startDay + dIdx}/600/600`} 
                                alt={day.title} 
                                fill 
                                className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
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

      {/* 07 HAND-SELECTED ACCOMMODATIONS Registry */}
      <section ref={hotelsRef} className="py-16 md:py-32 bg-white scroll-mt-20 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-[48px] lg:leading-[1.2] font-normal text-secondary tracking-tighter">
              Handverlesene Unterkünfte
            </h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-2xl mx-auto tracking-widest opacity-60">
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
              <div className="p-8 md:p-16 flex flex-col flex-grow space-y-8">
                <h3 className="font-headline text-[24px] leading-[32px] font-medium text-secondary tracking-tight">
                  Boutique Safari-Lodges
                </h3>
                <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                  Luxuriöse Zeltcamps und Lodges mitten in der Wildnis. Jede Unterkunft verbindet authentisches Safari-Feeling mit höchstem Komfort: private Terrassen mit Blick auf die Savanne und erstklassiger Service.
                </p>
                <div className="pt-4 border-t border-border/40 space-y-4">
                  {[
                    "Private Decks mit Wildtierblick",
                    "Exquisite Küche und privates Dining",
                    "Persönlicher Butler-Service"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[11px] font-bold text-secondary tracking-widest">
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
              <div className="p-8 md:p-16 flex flex-col flex-grow space-y-8">
                <h3 className="font-headline text-[24px] leading-[32px] font-medium text-secondary tracking-tight">
                  Sansibar Beach Retreat
                </h3>
                <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
                  Ihr privates Strandparadies auf Sansibar. Exklusives Boutique-Resort direkt am schneeweißen Sandstrand, umgeben von Palmen und dem türkisfarbenen Indischen Ozean.
                </p>
                <div className="pt-4 border-t border-border/40 space-y-4">
                  {[
                    "Direkter Strandzugang",
                    "Infinity-Pool und Spa",
                    "Meerblick-Suiten mit privatem Balkon"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[11px] font-bold text-secondary tracking-widest">
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

      {/* 08 INCLUSIONS Registry */}
      <section className="py-16 md:py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl lg:text-[48px] lg:leading-[1.2] font-normal text-secondary tracking-tighter">
              In Ihrer Reise enthalten
            </h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl mx-auto tracking-widest opacity-60">
              Rundum-Sorglos-Paket für Ihr perfektes Safari-Erlebnis
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A876]/10 border border-[#C9A876]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-[24px] leading-[32px] font-medium text-secondary tracking-tight transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-wide">
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
                
                <div className="space-y-10 relative z-10">
                  <h3 className="font-headline text-[24px] leading-[32px] font-medium text-secondary tracking-tight">
                    Extras & Optionen
                  </h3>

                  <div className="space-y-6">
                    {extras.map((ex, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 group/item">
                        <div className="flex items-center gap-4">
                          <ex.icon className="w-4 h-4 text-primary/60 group-hover/item:text-primary transition-colors" />
                          <span className="text-[11px] font-bold text-secondary tracking-widest uppercase">{ex.label}</span>
                        </div>
                        <span className={cn(
                          "text-[9px] font-bold uppercase tracking-widest whitespace-nowrap px-2 py-0.5 rounded",
                          ex.status === 'inkludiert*' ? "bg-primary/10 text-primary" : "text-muted-foreground/40"
                        )}>
                          {ex.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/40">
                    <Button onClick={() => scrollTo('inquiry')} className="w-full rounded-lg h-14 px-8 font-bold text-[11px] tracking-widest border-none shadow-xl">
                      JETZT ANFRAGEN
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 09 CONVERSION HUB */}
      <AiCTA />

      {/* 10 OFFICIAL REGISTRY INQUIRY */}
      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}