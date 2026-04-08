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
  FileText,
  Heart,
  ChevronLeft,
  Waves,
  Camera,
  Bird,
  ChevronDown,
  CheckCircle2
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
    desc: "Erleben Sie die große Tierwanderung und beobachten Sie die Big Five in ihrer natürlichen Umgebung",
    icon: Compass
  },
  {
    title: "Ngorongoro-Krater",
    desc: "Entdecken Sie das achte Weltwunder und seine einzigartige Konzentration an Wildtieren",
    icon: Mountain
  },
  {
    title: "Sansibar Strände",
    desc: "Entspannen Sie an den kristallklaren Gewässern und weißen Sandstränden des Indischen Ozeans",
    icon: Waves
  },
  {
    title: "Maasai Kultur",
    desc: "Tauchen Sie ein in die faszinierenden Traditionen und Lebensweisen des Maasai-Volkes",
    icon: Users
  }
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
                  Eine Reise, <br /><span className="text-[#C9A876]">die berührt</span>
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

              <div className="space-y-8 text-muted-foreground font-bold leading-relaxed text-sm md:text-lg uppercase tracking-widest opacity-80 border-l-4 border-primary/20 pl-8">
                <p>
                  Eine außergewöhnliche Reise durch die endlose Serengeti, den majestätischen Ngorongoro-Krater und die paradiesischen Strände Sansibars. Erleben Sie Afrikas wilde Schönheit in exklusiven Lodges und unvergesslichen Momenten.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/trip-planner">
                  <Button className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-xl bg-[#C9A876] text-white hover:bg-secondary font-black text-[10px] uppercase tracking-widest border-none transition-all shadow-xl">
                    Reiseberatung anfragen
                  </Button>
                </Link>
                <Button onClick={() => scrollTo('inquiry')} variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-8 rounded-xl border-secondary text-secondary font-black text-[10px] uppercase tracking-widest transition-all">
                  Diese Reise anfragen
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Card className="rounded-[2rem] border-none bg-[#FDF7F2] p-6 md:p-10 shadow-2xl relative overflow-hidden">
                  <div className="space-y-8 md:space-y-10 relative z-10">
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-[#C9A876] font-black uppercase tracking-[0.3em] text-[10px]">Master Registry</p>
                      <h3 className="font-headline text-xl md:text-4xl font-normal text-secondary uppercase leading-none tracking-tighter">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="space-y-5 md:space-y-6">
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-[11px] md:text-sm uppercase">Reisedauer:</p>
                        <p className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
                          {pkg.durationDays}-tägig, Flüge inklusive
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-[11px] md:text-sm uppercase">Unterkünfte:</p>
                        <p className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
                          Handverlesene Tented Lodges & Boutique Hotels
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-[11px] md:text-sm uppercase">Exklusive Gruppen:</p>
                        <p className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
                          Privat-Safari mit eigenem Guide & Jeep
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Signature Series", "Privat geführt", "Sicher Reisen"].map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-white/50 border-border/40 text-muted-foreground/80 font-bold text-[7px] md:text-[8px] uppercase px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-6 md:pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-[10px] md:text-[11px] font-black text-muted-foreground/40 line-through">€{(pkg.startingPrice + 600).toLocaleString('de-DE')}</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[10px] font-black text-secondary uppercase mr-1">ab</span>
                          <span className="text-2xl md:text-3xl font-black text-secondary tracking-tighter uppercase">
                            {pkg.startingPrice?.toLocaleString('de-DE') || '5.399'} €
                          </span>
                        </div>
                        <p className="text-[8px] md:text-[9px] font-bold text-muted-foreground/60 uppercase">pro Person</p>
                      </div>
                      <Button onClick={() => scrollTo('inquiry')} className="w-full sm:w-auto rounded-lg h-12 px-8 bg-[#C9A876] text-white hover:bg-secondary font-black text-[10px] uppercase tracking-widest border-none shadow-xl">
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
      <section className="py-12 md:py-16 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">
              Die Höhepunkte Ihrer Reise
            </h2>
          </div>

          <div className="relative px-0 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {highlights.map((h, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <Card className="h-full border-none shadow-sm bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-8 md:p-12 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FDF7F2] border border-[#F0EBE0]/50 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#C9A876] transition-colors duration-500">
                          <h.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C9A876] group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase tracking-tight leading-tight">
                            {h.title}
                          </h4>
                          <p className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest leading-relaxed opacity-80">
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
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase tracking-tighter">Ihr Reiseverlauf</h2>
            <p className="text-muted-foreground font-normal text-xs md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-80">
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
                    <div className="relative w-full min-h-[100px] md:aspect-[21/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-secondary flex items-center px-6 md:px-12 group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src={`https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200`}
                        alt="Expedition Section"
                        fill
                        className="object-cover opacity-20 brightness-50"
                      />
                      <div className="relative z-10 flex items-center justify-between w-full text-white py-6">
                        <div className="text-left">
                          <h3 className="font-headline text-lg md:text-3xl font-normal uppercase tracking-tighter">
                            SAFARI ABENTEUER • <span className="text-primary font-black">Tag {startDay}-{endDay}</span>
                          </h3>
                          <p className="text-[8px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-60">Wildnis & Naturwunder</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-data-[state=open]:rotate-180 transition-transform bg-white/5">
                          <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pt-12 pb-4 px-2 md:px-8 space-y-12 relative overflow-visible">
                    {/* Vertical Connector Line - Responsive Position */}
                    <div className="absolute left-[36px] md:left-[60px] top-12 bottom-12 w-px bg-border/60 z-0" />
                    
                    {group.map((day, dIdx) => (
                      <div key={dIdx} className="relative z-10 flex gap-4 md:gap-10">
                        {/* Day Circle Indicator */}
                        <div className="shrink-0">
                          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shadow-sm relative z-10">
                            <span className="text-xs md:text-lg font-black text-[#C9A876]">{startDay + dIdx}</span>
                          </div>
                        </div>

                        {/* Day Content Card */}
                        <div className="flex-1 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-border/40 p-5 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group/card">
                          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-10">
                            <div className="flex-1 space-y-4 md:space-y-6">
                              <div className="flex flex-wrap items-center gap-3">
                                <h4 className="font-headline text-lg md:text-3xl font-normal text-secondary uppercase tracking-tight leading-tight group-hover/card:text-primary transition-colors">
                                  {day.title}
                                </h4>
                                <Badge className="bg-[#C9A876]/10 text-[#C9A876] border-none text-[7px] md:text-[10px] font-black uppercase px-2.5 py-1">
                                  {day.location}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground font-bold text-[10px] md:text-sm leading-relaxed uppercase tracking-widest opacity-70">
                                {day.desc}
                              </p>
                              <div className="pt-2 flex items-center gap-2 text-[8px] md:text-[10px] font-black text-secondary uppercase tracking-[0.2em] group-hover/card:text-primary transition-colors cursor-pointer">
                                DETAILS ANZEIGEN <ChevronRight className="w-3 h-3 rotate-90 text-primary" />
                              </div>
                            </div>
                            
                            {/* Visual Preview */}
                            <div className="shrink-0 w-full lg:w-56 aspect-[16/9] lg:aspect-square relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl border border-border/20">
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

      {/* 07 ACCOMMODATIONS */}
      <section ref={hotelsRef} className="py-16 md:py-32 bg-[#FDF7F2] scroll-mt-20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">Signature Lodging</span>
              <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase leading-[0.9] tracking-tighter">DIE <br /><span className="text-primary">UNTERKÜNFTE</span></h2>
            </div>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest max-w-[200px] border-l-2 border-primary/20 pl-4 hidden md:block">
              Exklusive Camps & Boutique Hotels mit höchstem Standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2].map(i => (
              <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50">
                <img 
                  src={`https://picsum.photos/seed/lodge-${i}/800/1000`} 
                  alt="Lodge Preview" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white space-y-3">
                  <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Signature Collection</p>
                  <h4 className="text-2xl md:text-4xl font-headline font-normal uppercase leading-tight tracking-tight">Luxury Savannah Sanctuary</h4>
                  <div className="flex items-center gap-2 pt-2">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <Star className="w-3 h-3 text-primary fill-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 CONVERSION HUB */}
      <AiCTA />

      {/* 09 OFFICIAL REGISTRY INQUIRY */}
      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}