
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';
import { AiCTA } from '@/components/sections/AiCTA';

const navItems = [
  { id: 'overview', label: 'Übersicht' },
  { id: 'itinerary', label: 'Reiseverlauf' },
  { id: 'hotels', label: 'Unterkünfte' },
  { id: 'inquiry', label: 'Anfrage' }
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

      {/* 02 STICKY NAVIGATION MANIFESTO - Moved immediately after Hero */}
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
      <section ref={overviewRef} className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Storytelling */}
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

              <div className="space-y-8 text-muted-foreground font-bold leading-relaxed text-sm md:text-lg uppercase tracking-widest opacity-80">
                <p>
                  Eine außergewöhnliche Reise durch die endlose Serengeti, den majestätischen Ngorongoro-Krater und die paradiesischen Strände Sansibars. Erleben Sie Afrikas wilde Schönheit in exklusiven Lodges und unvergesslichen Momenten.
                </p>
                <p>
                  Diese handverlesene Safari verbindet die atemberaubende Tierwelt der Serengeti mit der Romantik Sansibars. In exklusiven Boutique-Lodges erleben Sie afrikanische Gastfreundschaft auf höchstem Niveau. Jeder Tag ist individuell gestaltet – für Paare, die das Besondere suchen, und für alle, die Afrika mit allen Sinnen erleben möchten.
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

            {/* Right Column: Master Card */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Card className="rounded-[2rem] border-none bg-[#FDF7F2] p-10 shadow-2xl relative overflow-hidden">
                  <div className="space-y-10 relative z-10">
                    <div className="space-y-6">
                      <p className="text-[#C9A876] font-black uppercase tracking-[0.3em] text-[10px]">Tansania</p>
                      <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase leading-none tracking-tighter">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-sm uppercase">Reisedauer:</p>
                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{pkg.durationDays}-tägig, Flüge inklusive</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-sm uppercase">Unterkünfte:</p>
                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Mittelklassehotels, Tented Lodges mit Vollpension</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-sm uppercase">Exklusive Gruppen:</p>
                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Maximal 6 Teilnehmer pro Termin</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary font-black text-sm uppercase">Reisezeit:</p>
                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">2026-2027</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Geführte Erlebnisreisen", "Kombinierbar", "Ideal für Kleingruppen", "Begrenzte Plätze verfügbar", "Garantierte Durchführung"].map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-white/50 border-border/40 text-muted-foreground/80 font-bold text-[8px] uppercase px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-end justify-between gap-6">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-muted-foreground/40 line-through">€{(pkg.startingPrice + 600).toLocaleString('de-DE')}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black text-secondary tracking-tighter uppercase">ab {pkg.startingPrice?.toLocaleString('de-DE') || '5.399'} €</span>
                        </div>
                        <p className="text-[9px] font-bold text-muted-foreground/60 uppercase">pro Person</p>
                      </div>
                      <div className="space-y-3 w-full md:w-auto">
                        <Button onClick={() => scrollTo('inquiry')} className="w-full rounded-lg h-12 px-8 bg-[#C9A876] text-white hover:bg-secondary font-black text-[10px] uppercase tracking-widest border-none shadow-xl">
                          JETZT ANFRAGEN
                        </Button>
                        <Button variant="outline" className="w-full rounded-lg h-12 px-8 bg-white border-secondary text-secondary font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
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

      {/* 05 CONTENT REGIONS */}
      <div className="container mx-auto px-4 max-w-7xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <main className="lg:col-span-8 space-y-24 md:space-y-40">
            {/* Detailed Itinerary */}
            <section ref={itineraryRef} className="space-y-16 scroll-mt-32">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">Ihr Reiseverlauf</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </div>
              
              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {(pkg.itineraryDays || []).map((day: any, idx: number) => (
                    <AccordionItem 
                      key={idx} 
                      value={`item-${idx}`}
                      className="border-none bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                    >
                      <AccordionTrigger className="p-0 hover:no-underline [&>svg]:hidden group">
                        <div className="flex flex-col md:flex-row w-full text-left">
                          <div className="md:w-32 bg-secondary p-6 md:p-10 flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-[#C9A876] transition-colors duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Tag</span>
                            <span className="text-4xl md:text-5xl font-black font-headline leading-none">{day.day || idx + 1}</span>
                          </div>
                          <div className="p-6 md:p-10 flex-grow flex items-center justify-between gap-6">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-primary font-black text-[8px] md:text-[9px] uppercase tracking-widest">
                                <MapPin className="w-3.5 h-3.5" /> {day.location}
                              </div>
                              <h4 className="font-headline text-lg md:text-2xl font-bold text-secondary uppercase leading-tight tracking-tight group-hover:text-primary transition-colors">
                                {day.title}
                              </h4>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 group-data-[state=open]:rotate-90 transition-transform">
                              <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-0 border-t border-border/50">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                          <div className="md:col-span-7 p-8 md:p-12 space-y-6">
                            <p className="text-sm md:text-lg text-secondary font-bold leading-relaxed uppercase tracking-tight">
                              {day.desc}
                            </p>
                            <div className="pt-6 flex gap-4">
                              <Badge variant="outline" className="rounded-lg border-muted px-3 py-1 font-black text-[8px] uppercase text-muted-foreground">Premium Protocol</Badge>
                              <Badge variant="outline" className="rounded-lg border-muted px-3 py-1 font-black text-[8px] uppercase text-muted-foreground">Private Expert</Badge>
                            </div>
                          </div>
                          <div className="md:col-span-5 relative aspect-video md:aspect-auto min-h-[300px] bg-muted">
                            {day.img && <Image src={day.img} alt={day.title} fill className="object-cover" />}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Accommodations */}
            <section ref={hotelsRef} className="space-y-12 scroll-mt-32">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">Prestige Standard</span>
                  <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-[0.9] tracking-tighter">DIE <br /><span className="text-primary">UNTERKÜNFTE</span></h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(i => (
                  <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl bg-muted">
                    <img 
                      src={`https://picsum.photos/seed/hotel-${i}/800/1000`} 
                      alt="Lodge" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="text-primary font-bold text-[9px] uppercase tracking-widest mb-2">Signature Lodge</p>
                      <h4 className="text-2xl font-headline font-bold uppercase">Handverlesene Auswahl</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <AiCTA />

      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
