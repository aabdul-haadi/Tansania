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
    desc: "ERLEBEN SIE DIE GROSSE TIERWANDERUNG UND BEOBACHTEN SIE DIE BIG FIVE IN IHRER NATÜRLICHEN UMGEBUNG",
    icon: Compass
  },
  {
    title: "Ngorongoro-Krater",
    desc: "ENTDECKEN SIE DAS ACHTE WELTWUNDER UND SEINE EINZIGARTIGE KONZENTRATION AN WILDTIEREN",
    icon: Mountain
  },
  {
    title: "Sansibar Strände",
    desc: "ENTSPANNEN SIE AN DEN KRISTALLKLAREN GEWÄSSERN UND WEISSEN SANDSTRÄNDEN DES INDISCHEN OZEANS",
    icon: Waves
  },
  {
    title: "Maasai Kultur",
    desc: "TAUCHEN SIE EIN IN DIE FASZINIERENDEN TRADITIONEN UND LEBENSWEISEN DES MAASAI-VOLKES",
    icon: Users
  },
  {
    title: "Luxus-Lodges",
    desc: "ÜBERNACHTEN SIE IN HANDVERLESENEN BOUTIQUE-LODGES MIT HÖCHSTEM KOMFORT UND SERVICE",
    icon: Home
  }
];

const inclusions = [
  { icon: Home, title: "14 ÜBERNACHTUNGEN", desc: "IN HANDVERLESENEN LUXUS-LODGES & TENTED CAMPS" },
  { icon: Car, title: "PRIVATER 4X4", desc: "ALLE TRANSFERS UND PIRSCHFAHRTEN IM PRIVATEN GELÄNDEWAGEN" },
  { icon: Camera, title: "PIRSCHFAHRTEN", desc: "UNBEGRENZTE FAHRTEN ZUR WILDTIERBEOBACHTUNG" },
  { icon: Utensils, title: "VERPFLEGUNG", desc: "VOLLPENSION AUF SAFARI, HALBPENSION AUF SANSIBAR" },
  { icon: UserCheck, title: "DEUTSCHSPRACHIGER GUIDE", desc: "ERFAHRENE RANGER MIT EXZELLENTEN GEBIETSKENNTNISSEN" },
  { icon: Plane, title: "INLANDSFLUG", desc: "INKLUSIVE GEPÄCKTRANSFER ZWISCHEN DEN PARKS" },
  { icon: PhoneCall, title: "24/7 NOTFALL-HOTLINE", desc: "PERSÖNLICHER ANSPRECHPARTNER RUND UM DIE UHR" },
];

const extras = [
  { icon: Globe, label: "INTERNATIONALE FLÜGE", status: "AUF ANFRAGE" },
  { icon: ShieldCheck, label: "REISEVERSICHERUNG", status: "OPTIONAL" },
  { icon: Wind, label: "HEISSLUFTBALLON-SAFARI", status: "AB €550 P.P." },
  { icon: Users, label: "KULTURELLE TOUREN", status: "ZUBUCHBAR" },
  { icon: Sprout, label: "SPA-BEHANDLUNGEN", status: "VOR ORT" },
  { icon: GlassWater, label: "PRIVATE DINNER IM BUSCH", status: "INKLUDIERT*" },
  { icon: Palmtree, label: "SANSIBAR VERLÄNGERUNG", status: "INDIVIDUELL" },
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

  // STANDARD PRESTIGE TYPOGRAPHY PROTOCOL
  const prestigeParaClass = "font-medium text-[10px] md:text-sm uppercase tracking-widest leading-relaxed text-muted-foreground opacity-80";

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* 01 IMMERSIVE CINEMA HERO */}
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
        
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-12 md:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
          >
            <div className="space-y-2 md:space-y-4">
              <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-90">
                {pkg.category || 'TANSANIA · SANSIBAR'}
              </p>
              <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-normal text-white leading-tight tracking-tighter uppercase">
                {pkg.title || 'Traumabenteuer in Afrika'}
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
               <Button 
                 onClick={() => scrollTo('inquiry')}
                 size="lg"
                 className="w-full sm:w-auto rounded-lg h-12 md:h-14 px-10 bg-[#C9A876] text-white hover:bg-[#B89765] border-none font-bold text-[11px] uppercase tracking-widest shadow-2xl"
               >
                 Jetzt Anfragen
               </Button>
               <Button 
                 onClick={() => scrollTo('itinerary')}
                 variant="outline"
                 size="lg"
                 className="w-full sm:w-auto rounded-lg h-12 md:h-14 px-10 bg-white/5 backdrop-blur-md text-white border-white/40 hover:bg-white/10 hover:border-white font-bold text-[11px] uppercase tracking-widest transition-all"
               >
                 <MapIcon className="w-4 h-4 mr-2" /> Reiseroute
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
                  "h-full px-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[8px] font-black uppercase text-muted-foreground leading-none mb-1">Preise ab</p>
              <p className="text-xs font-black text-secondary">€{pkg.startingPrice?.toLocaleString('de-DE') || '5.399'}</p>
            </div>
            <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-11 px-8 text-[10px] font-black uppercase tracking-widest shadow-xl border-none">ANFRAGE SENDEN</Button>
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
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FDF7F2] flex items-center justify-center border border-[#F0EBE0]/30 shadow-sm">
                  <item.icon className="w-6 h-6 text-[#C9A876]" />
                </div>
                <span className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 NARRATIVE MANIFEST SECTION */}
      <section ref={overviewRef} className="py-12 md:py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
            
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="inline-block bg-[#C9A876] text-white px-5 py-2 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">
                  {pkg.durationDays} TAGE {pkg.category || 'SAFARI & SANSIBAR'}
                </div>
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase leading-[0.9] tracking-tighter">
                  EINE REISE, <br /><span className="text-[#C9A876]">DIE BERÜHRT</span>
                </h2>
              </div>

              <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl group border border-border/50">
                <Image 
                  src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'} 
                  alt="Safari Moment" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="space-y-8 border-l-4 border-primary/20 pl-8 py-2">
                <p className={prestigeParaClass}>
                  EINE AUSSERGEWÖHNLICHE REISE DURCH DIE ENDLOSE SERENGETI, DEN MAJESTÄTISCHEN NGORONGORO-KRATER UND DIE PARADIESISCHEN STRÄNDE SANSIBARS. ERLEBEN SIE AFRIKAS WILDE SCHÖNHEIT IN EXKLUSIVEN LODGES UND UNVERGESSLICHEN MOMENTEN.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/trip-planner">
                  <Button className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-xl bg-[#C9A876] text-white hover:bg-secondary font-black text-[10px] uppercase tracking-widest border-none transition-all shadow-xl">
                    REISEBERATUNG ANFRAGEN
                  </Button>
                </Link>
                <Button onClick={() => scrollTo('inquiry')} variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-xl border-secondary text-secondary font-black text-[10px] uppercase tracking-widest transition-all">
                  DIESE REISE ANFRAGEN
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Card className="rounded-[2rem] border-none bg-[#FDF7F2] p-6 md:p-10 shadow-2xl relative overflow-hidden">
                  <div className="space-y-8 md:space-y-10 relative z-10">
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-[#C9A876] font-black uppercase tracking-[0.3em] text-[10px]">MASTER REGISTRY</p>
                      <h3 className="font-headline text-xl md:text-4xl font-normal text-secondary uppercase leading-none tracking-tighter">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="space-y-5 md:space-y-6">
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-[11px] md:text-sm uppercase">REISEDAUER:</p>
                        <p className={cn(prestigeParaClass, "opacity-70")}>
                          {pkg.durationDays}-TÄGIG, FLÜGE INKLUSIVE
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-[11px] md:text-sm uppercase">UNTERKÜNFTE:</p>
                        <p className={cn(prestigeParaClass, "opacity-70")}>
                          HANDVERLESENE TENTED LODGES & BOUTIQUE HOTELS
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-[11px] md:text-sm uppercase">EXKLUSIVE GRUPPEN:</p>
                        <p className={cn(prestigeParaClass, "opacity-70")}>
                          PRIVAT-SAFARI MIT EIGENEM GUIDE & JEEP
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["SIGNATURE SERIES", "PRIVAT GEFÜHRT", "SICHER REISEN"].map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-white/50 border-border/40 text-muted-foreground/80 font-bold text-[8px] md:text-[9px] uppercase px-3.5 py-1.5 shadow-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-6 md:pt-8 border-t border-border/40 flex flex-col items-center sm:items-stretch gap-6">
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-lg md:text-xl font-black text-muted-foreground/40 line-through mb-1">€{(pkg.startingPrice + 600).toLocaleString('de-DE')}</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs md:text-sm font-black text-secondary uppercase">ab</span>
                          <span className="text-4xl md:text-5xl font-black text-secondary tracking-tighter uppercase">
                            {pkg.startingPrice?.toLocaleString('de-DE') || '5.399'} €
                          </span>
                        </div>
                        <p className="text-xs md:text-sm font-black text-muted-foreground/60 uppercase mt-1">PRO PERSON</p>
                      </div>
                      <Button onClick={() => scrollTo('inquiry')} className="w-full rounded-lg h-14 px-8 bg-[#C9A876] text-white hover:bg-secondary font-black text-[11px] uppercase tracking-widest border-none shadow-xl">
                        ANFRAGEN
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 05 HIGHLIGHTS CAROUSEL */}
      <section className="py-8 md:py-12 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">
              DIE HÖHEPUNKTE IHRER REISE
            </h2>
          </div>

          <div className="relative px-0 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {highlights.map((h, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <Card className="h-full border-none shadow-sm bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-8 md:p-12 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FDF7F2] border border-[#F0EBE0]/50 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#C9A876] transition-colors duration-500">
                          <h.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C9A876] group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase tracking-tight leading-tight">
                            {h.title}
                          </h4>
                          <p className={prestigeParaClass}>
                            {h.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex absolute -left-4 h-14 w-14 rounded-full border-border bg-white text-secondary hover:bg-[#C9A876] hover:text-white transition-all shadow-md z-30" />
              <CarouselNext className="hidden md:flex absolute -right-4 h-14 w-14 rounded-full border-border bg-white text-secondary hover:bg-[#C9A876] hover:text-white transition-all shadow-md z-30" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* 06 TIMELINE ITINERARY PROTOCOL */}
      <section ref={itineraryRef} className="py-16 md:py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase tracking-tighter">IHR REISEVERLAUF</h2>
            <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-80">
              EINE SORGFÄLTIG KURATIERTE ROUTE DURCH DIE SCHÖNSTEN REGIONEN TANSANIAS
            </p>
          </div>

          <Accordion type="multiple" defaultValue={["group-0"]} className="space-y-8">
            {dayGroups.map((group, gIdx) => {
              const startDay = gIdx * 5 + 1;
              const endDay = startDay + group.length - 1;
              
              return (
                <AccordionItem key={gIdx} value={`group-${gIdx}`} className="border-none">
                  <AccordionTrigger className="p-0 hover:no-underline [&>svg]:hidden group">
                    <div className="relative w-full min-h-[100px] md:aspect-[21/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-secondary flex items-center group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src={`https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200`}
                        alt="Expedition Section"
                        fill
                        className="object-cover opacity-20 brightness-50"
                      />
                      <div className="relative z-10 flex items-center justify-between w-full text-white py-6 pr-6 md:pr-12">
                        {/* ALIGNMENT PROTOCOL: Syncing trigger headline with card start */}
                        <div className="text-left pl-[44px] md:pl-[96px]">
                          <h3 className="font-headline text-lg md:text-3xl font-normal uppercase tracking-tighter">
                            SAFARI ABENTEUER • <span className="text-primary font-black">TAG {startDay}-{endDay}</span>
                          </h3>
                          <p className="text-[8px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-60">WILDNIS & NATURWUNDER</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-data-[state=open]:rotate-180 transition-transform bg-white/5">
                          <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pt-12 pb-4 px-2 md:px-8 space-y-12 relative overflow-visible">
                    <div className="absolute left-[36px] md:left-[60px] top-12 bottom-12 w-px bg-border/60 z-0" />
                    
                    {group.map((day, dIdx) => (
                      <div key={dIdx} className="relative z-10 flex gap-3 md:gap-10">
                        <div className="shrink-0">
                          <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shadow-sm relative z-10">
                            <span className="text-[10px] md:text-lg font-black text-[#C9A876]">{startDay + dIdx}</span>
                          </div>
                        </div>

                        <div className="flex-1 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-border/40 p-5 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group/card">
                          <div className="flex flex-col gap-6 md:gap-10">
                            <div className="space-y-4 md:space-y-6">
                              <div className="flex flex-wrap items-center gap-3">
                                <h4 className="font-headline text-base md:text-3xl font-normal text-secondary uppercase tracking-tight leading-tight group/card:text-primary transition-colors">
                                  {day.title}
                                </h4>
                                <Badge className="bg-[#C9A876]/10 text-[#C9A876] border-none text-[7px] md:text-[10px] font-black uppercase px-2.5 py-1">
                                  {day.location}
                                </Badge>
                              </div>
                              <p className={prestigeParaClass}>
                                {day.desc}
                              </p>
                            </div>
                            
                            <div className="shrink-0 w-full md:w-auto relative aspect-[16/9] md:aspect-[21/9] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl border border-border/20">
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
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-normal text-secondary uppercase tracking-tighter">
              HANDVERLESENE UNTERKÜNFTE
            </h2>
            <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-2xl mx-auto opacity-60">
              WIR WÄHLEN JEDE LODGE PERSÖNLICH NACH LAGE, STIL UND SERVICE AUS
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
                  data-ai-hint="safari lodge"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col flex-grow space-y-6 md:space-y-8">
                <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">
                  BOUTIQUE SAFARI-LODGES
                </h3>
                <p className={cn(prestigeParaClass, "opacity-70")}>
                  LUXURIÖSE ZELTCAMPS UND LODGES MITTEN IN DER WILDNIS. JEDE UNTERKUNFT VERBINDET AUTHENTISCHES SAFARI-FEELING MIT HÖCHSTEM KOMFORT: PRIVATE TERRASSEN MIT BLICK AUF DIE SAVANNE, ELEGANTE EINRICHTUNG UND ERSTKLASSIGER SERVICE.
                </p>
                <ul className="space-y-4 pt-2">
                  {[
                    "PRIVATE DECKS MIT WILDTIERBLICK",
                    "EXQUISITE KÜCHE UND PRIVATES DINING",
                    "PERSÖNLICHER BUTLER-SERVICE"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A876] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-sm border border-border/40 flex flex-col h-full group hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" 
                  alt="Sansibar Beach Retreat" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="zanzibar resort"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col flex-grow space-y-6 md:space-y-8">
                <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">
                  SANSIBAR BEACH RETREAT
                </h3>
                <p className={cn(prestigeParaClass, "opacity-70")}>
                  IHR PRIVATES STRANDPARADIES AUF SANSIBAR. EXKLUSIVES BOUTIQUE-RESORT DIREKT AM SCHNEEWEISSEN SANDSTRAND, UMGEBEN VON PALMEN UND DEM TÜRKISFARBENEN INDISCHEN OZEAN. PERFEKTER ORT FÜR ROMANTIK UND ERHOLUNG.
                </p>
                <ul className="space-y-4 pt-2">
                  {[
                    "DIREKTER STRANDZUGANG",
                    "INFINITY-POOL UND SPA",
                    "MEERBLICK-SUITEN MIT PRIVATEM BALKON"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A876] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 INCLUSIONS & EXTRAS SECTION */}
      <section className="py-16 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase tracking-tighter">
              IN IHRER REISE ENTHALTEN
            </h2>
            <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-60">
              RUNDUM-SORGLOS-PAKET FÜR IHR PERFEKTES SAFARI-ERLEBNIS
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#C9A876]/10 border border-[#C9A876]/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:bg-[#C9A876] group-hover:shadow-lg">
                    <item.icon className="w-5 h-5 text-[#C9A876] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-headline text-lg md:text-xl font-bold text-secondary uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className={cn(prestigeParaClass, "opacity-70")}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[400px] shrink-0">
              <Card className="rounded-[2.5rem] border-none shadow-2xl bg-white p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-[#FDF7F2] flex items-center justify-center bg-white shadow-lg text-[#C9A876]">
                  <Plus className="w-5 h-5" />
                </div>
                
                <div className="space-y-10 relative z-10">
                  <h3 className="font-headline text-2xl md:text-3xl font-normal text-secondary uppercase tracking-tight">
                    EXTRAS & OPTIONEN
                  </h3>

                  <div className="space-y-6">
                    {extras.map((ex, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 group/item">
                        <div className="flex items-center gap-4">
                          <ex.icon className="w-4 h-4 text-[#C9A876]/60 group-hover/item:text-[#C9A876] transition-colors" />
                          <span className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest">{ex.label}</span>
                        </div>
                        <span className={cn(
                          "text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap px-2 py-0.5 rounded",
                          ex.status === 'INKLUDIERT*' ? "bg-[#C9A876]/10 text-[#C9A876]" : "text-muted-foreground/40"
                        )}>
                          {ex.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border/40">
                    <Button onClick={() => scrollTo('inquiry')} className="w-full h-14 rounded-xl bg-secondary text-white hover:bg-primary font-black text-[10px] uppercase tracking-[0.2em] shadow-xl border-none transition-all">
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

function Ticket(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}
