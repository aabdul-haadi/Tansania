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
  Home,
  Mountain,
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
  FileText,
  HelpCircle
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
  { id: 'faq', label: 'FAQ' },
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

const faqData = [
  {
    q: "Benötige ich ein Visum für Tansania?",
    a: "Ja, für deutsche Staatsangehörige ist ein Visum erforderlich. Dies kann bequem vorab als E-Visum oder bei der Ankunft am Flughafen erworben werden."
  },
  {
    q: "Welche Impfungen werden empfohlen?",
    a: "Standardimpfungen sowie Schutz gegen Hepatitis A und Typhus werden empfohlen. Eine Gelbfieberimpfung ist bei Einreise aus Endemiegebieten Pflicht."
  },
  {
    q: "Ist die Safari für Kinder geeignet?",
    a: "Absolut. Wir wählen kinderfreundliche Lodges und passen die Fahrtzeiten an, um ein entspanntes Erlebnis für die ganze Familie zu gewährleisten."
  },
  {
    q: "Was ist in der Packliste unverzichtbar?",
    a: "Leichte, helle Kleidung (Khaki/Beige), Sonnenschutz, ein gutes Fernglas und eine Kamera mit Zoomobjektiv sind essenziell."
  }
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
  const faqRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      if (inquiryRef.current && scrollPos >= inquiryRef.current.offsetTop) setActiveSection('inquiry');
      else if (faqRef.current && scrollPos >= faqRef.current.offsetTop) setActiveSection('faq');
      else if (hotelsRef.current && scrollPos >= hotelsRef.current.offsetTop) setActiveSection('hotels');
      else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) setActiveSection('itinerary');
      else setActiveSection('overview');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const refMap: any = { overview: overviewRef, itinerary: itineraryRef, hotels: hotelsRef, faq: faqRef, inquiry: inquiryRef };
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
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-end items-center pb-12 md:pb-24 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl space-y-6 md:space-y-8 text-center flex flex-col items-center"
          >
            <div className="space-y-4 w-full">
              <h1 className="font-headline font-normal text-white text-3xl md:text-5xl lg:text-6xl leading-tight">
                {pkg.title}
              </h1>
              <p className="text-white/90 font-light text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Ihre private Safari-Expedition durch Tansania und exklusive Erholung auf Sansibar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
               <Button 
                 onClick={() => scrollTo('inquiry')}
                 className="w-full sm:w-auto rounded-lg px-10 h-12 font-bold text-sm shadow-2xl border-none"
               >
                 Jetzt anfragen
               </Button>
               <Button 
                 onClick={() => scrollTo('itinerary')}
                 variant="glass"
                 className="w-full sm:w-auto rounded-lg px-10 h-12 font-bold text-sm transition-all"
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
      <section ref={overviewRef} className="py-8 md:py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7 space-y-6 md:space-y-10">
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
                  {pkg.durationDays} Tage {pkg.category}
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">
                  Eine Reise, die berührt
                </h2>
              </div>

              <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-border/50 bg-muted">
                <Image 
                  src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'} 
                  alt="Safari Moment" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4 border-l-4 border-primary/20 pl-8 py-1 text-left">
                <p className="text-base leading-relaxed font-normal text-muted-foreground opacity-80">
                  Erleben Sie die pure Magie Ostafrikas. Von den goldenen Savannen der Serengeti bis zum türkisblauen Indischen Ozean auf Sansibar. Diese Reise wurde konzipiert, um Ihnen nicht nur die Big Five zu zeigen, sondern Ihnen die Seele Tansanias näherzubringen – exklusiv, privat und mit höchstem Komfort.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Card className="rounded-[1.5rem] border border-border/20 bg-[#FDFCFB] p-6 md:p-8 shadow-sm relative overflow-hidden group">
                  <div className="space-y-6 relative z-10 text-left">
                    <div className="space-y-2">
                      <p className="text-[#C9A876] font-bold text-[10px] tracking-widest uppercase">Tansania</p>
                      <h3 className="font-headline text-[26px] md:text-[32px] leading-tight font-medium text-[#3A3634]">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[#3A3634] font-bold text-sm">Reisedauer:</p>
                        <p className="text-sm text-[#8A8581] font-normal leading-tight">15-tägig, Flüge inklusive</p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[#3A3634] font-bold text-sm">Unterkünfte:</p>
                        <p className="text-sm text-[#8A8581] font-normal leading-tight">Handverlesene Tented Lodges & Boutique Hotels</p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[#3A3634] font-bold text-sm">Exklusivität:</p>
                        <p className="text-sm text-[#8A8581] font-normal leading-tight">Privat-Safari mit eigenem Guide & Jeep</p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[#3A3634] font-bold text-sm">Reisezeit:</p>
                        <p className="text-sm text-[#8A8581] font-normal leading-tight">Beste Zeit: Jun-Okt, Dez-Feb</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {["Erlebnisreise", "Individuell", "Privat", "All-Inclusive*"].map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full border border-border bg-white text-[#8A8581] text-[9px] font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-5 border-t border-border/40 flex flex-col md:flex-row items-end justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#C9A876] font-bold line-through mb-0.5 opacity-60">6.210 €</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl md:text-3xl font-black text-[#141414] tracking-tight">ab 5.399 €</span>
                        </div>
                        <p className="text-[10px] font-bold text-[#C9A876] mt-0.5">pro Person im DZ</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 w-full md:w-auto">
                        <Button onClick={() => scrollTo('inquiry')} className="w-full md:w-40 h-11 rounded-lg bg-[#C9A876] text-white hover:bg-secondary font-bold text-[11px] transition-all border-none">
                          Jetzt anfragen
                        </Button>
                        <Button variant="outline" className="w-full md:w-40 h-9 rounded-lg border-border text-secondary hover:bg-secondary hover:text-white font-bold text-[9px] transition-all flex items-center justify-center gap-2">
                          <FileText className="w-3.5 h-3.5" /> Reiseplan PDF
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

      {/* 04 HIGHLIGHTS */}
      <section className="py-10 md:py-16 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="mb-10">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">
              Die Höhepunkte Ihrer Reise
            </h2>
          </div>

          <div className="relative px-0 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {highlights.map((h, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <Card className="h-full border-none shadow-none bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500">
                      <CardContent className="p-8 md:p-10 flex flex-col items-center text-center space-y-5">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0]/50 flex items-center justify-center shrink-0">
                          <h.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="space-y-2.5">
                          <h4 className="font-headline text-xl font-medium text-secondary">
                            {h.title}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground font-normal leading-relaxed opacity-70">
                            {h.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex absolute -left-4 h-12 w-12 rounded-full border-border bg-white shadow-sm z-30" />
              <CarouselNext className="hidden md:flex absolute -right-4 h-12 w-12 rounded-full border-border bg-white shadow-sm z-30" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* 05 ITINERARY */}
      <section ref={itineraryRef} className="py-10 md:py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-16 space-y-3">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Ihr Reiseverlauf</h2>
            <p className="text-muted-foreground font-normal text-sm md:text-base max-w-xl mx-auto opacity-80">
              Eine sorgfältig kuratierte Route durch die schönsten Regionen Tansanias
            </p>
          </div>

          <Accordion type="multiple" defaultValue={["group-0"]} className="space-y-6">
            {dayGroups.map((group, gIdx) => {
              const startDay = gIdx * 5 + 1;
              const endDay = startDay + group.length - 1;
              
              return (
                <AccordionItem key={gIdx} value={`group-${gIdx}`} className="border-none">
                  <AccordionTrigger className="p-0 hover:no-underline [&>svg]:hidden group">
                    <div className="relative w-full min-h-[80px] md:min-h-[100px] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden bg-secondary flex items-center group-hover:shadow-xl transition-all duration-500">
                      <Image 
                        src={`https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200`}
                        alt="Expedition Section"
                        fill
                        className="object-cover opacity-20 brightness-50"
                      />
                      <div className="relative z-10 flex items-center justify-between w-full text-white px-6 md:px-12">
                        <div className="text-left">
                          <h3 className="font-headline text-lg md:text-2xl font-normal text-white">
                            Safari Abenteuer • <span className="text-white font-bold">Tag {startDay}-{endDay}</span>
                          </h3>
                          <p className="text-[10px] font-bold opacity-60 text-white/80 uppercase tracking-widest">Wildnis & Naturwunder</p>
                        </div>
                        <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center group-data-[state=open]:rotate-180 transition-transform bg-white/5 shadow-xl">
                          <ChevronDown className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="pt-8 pb-2 px-1 md:px-6 space-y-10 relative overflow-visible">
                    <div className="absolute left-[28px] md:left-[48px] top-12 bottom-12 w-px bg-border/40 z-0" />
                    
                    {group.map((day: any, dIdx: number) => (
                      <div key={dIdx} className="relative z-10 flex gap-4 md:gap-10">
                        <div className="shrink-0">
                          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shadow-sm relative z-10">
                            <span className="text-xs md:text-lg font-bold text-primary">{startDay + dIdx}</span>
                          </div>
                        </div>

                        <div className="flex-1 bg-white rounded-[1.25rem] md:rounded-[2rem] border border-border/40 p-5 md:p-10 shadow-sm hover:shadow-md transition-all duration-500 group/card">
                          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
                            <div className="flex-1 space-y-4 text-left">
                              <div className="space-y-1.5">
                                <Badge className="bg-primary/10 text-primary border-none text-[9px] font-bold px-3">
                                  {day.location}
                                </Badge>
                                <h4 className="font-headline text-xl md:text-3xl font-normal text-secondary group-hover/card:text-primary transition-colors">
                                  {day.title}
                                </h4>
                              </div>
                              <p className="text-sm md:text-base text-muted-foreground font-normal leading-relaxed opacity-70">
                                {day.desc}
                              </p>
                            </div>
                            
                            <div className="shrink-0 w-full lg:w-64 relative aspect-square rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border border-border/20 shadow-sm">
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
      <section ref={hotelsRef} className="py-10 md:py-16 bg-white scroll-mt-20 border-t border-border/40 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-10 space-y-3">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">
              Handverlesene Unterkünfte
            </h2>
            <p className="text-muted-foreground font-normal text-sm md:text-base max-w-2xl mx-auto opacity-60">
              Wir wählen jede Lodge persönlich nach Lage, Stil und Service aus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-border/40 flex flex-col h-full group transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" 
                  alt="Boutique Safari-Lodges" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-5 text-left">
                <h3 className="font-headline text-xl md:text-3xl font-medium text-secondary">
                  Boutique Safari-Lodges
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-normal leading-relaxed opacity-70">
                  Luxuriöse Zeltcamps und Lodges mitten in der Wildnis. Jede Unterkunft verbindet authentisches Safari-Feeling mit höchstem Komfort: private Terrassen mit Blick auf die Savanne.
                </p>
                <div className="pt-4 border-t border-border/40 space-y-3">
                  {[
                    "Private Decks mit Wildtierblick",
                    "Exquisite Küche und privates Dining",
                    "Persönlicher Butler-Service"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-border/40 flex flex-col h-full group transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" 
                  alt="Sansibar Beach Retreat" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-5 text-left">
                <h3 className="font-headline text-xl md:text-3xl font-medium text-secondary">
                  Sansibar Beach Retreat
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-normal leading-relaxed opacity-70">
                  Ihr privates Strandparadies auf Sansibar. Exklusives Boutique-Resort direkt am schneeweißen Sandstrand, umgeben von Palmen und dem türkisfarbenen Ozean.
                </p>
                <div className="pt-4 border-t border-border/40 space-y-3">
                  {[
                    "Direkter Strandzugang",
                    "Infinity-Pool und Spa",
                    "Meerblick-Suiten mit privatem Balkon"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-secondary">
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

      {/* 07 FAQ SECTION */}
      <section ref={faqRef} className="py-10 md:py-16 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-10 space-y-3">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">
              Häufig gestellte Fragen
            </h2>
            <p className="text-muted-foreground font-normal text-sm md:text-base opacity-60">
              Alles Wissenswerte für Ihre perfekte Planung
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`faq-${i}`} 
                className="border-none bg-white rounded-2xl px-6 md:px-10 shadow-sm transition-all hover:shadow-md"
              >
                <AccordionTrigger className="font-bold text-base md:text-lg py-6 hover:no-underline text-left text-secondary transition-colors [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <span>{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed text-left pb-8 opacity-80">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="py-4">
        <AiCTA />
      </div>

      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
