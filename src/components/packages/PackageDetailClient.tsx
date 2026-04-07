
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
  Zap, 
  Users,
  Compass,
  Star,
  ShieldCheck
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
      {/* 01 COMPACT DARK HERO - Signature Protocol */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] w-full overflow-hidden flex flex-col md:flex-row bg-secondary">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <Image 
            src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
            alt={pkg.title} 
            fill 
            priority
            className="object-cover scale-105 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent md:hidden" />
        </div>
        
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10 max-w-xl text-center md:text-left pt-16 md:pt-24 lg:pt-32"
          >
            <div className="space-y-4">
              <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter uppercase">
                {pkg.title}
              </h1>
              <p className="text-white/60 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-md mx-auto md:mx-0">
                {pkg.durationDays} Tage Expedition • In Berlin konzipiert – am Nil gelebt.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
               <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest">
                 <Clock className="w-4 h-4 text-primary" /> {pkg.durationDays} Tage
               </div>
               <div className="flex items-center gap-3 bg-primary px-5 py-3.5 rounded-2xl text-white font-bold text-[10px] uppercase tracking-widest shadow-xl">
                 <Zap className="w-4 h-4 text-white" /> ab €{pkg.startingPrice?.toLocaleString()}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation Manifesto */}
      <div className="sticky top-0 z-[40] bg-white/95 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
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
            <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-11 px-8 text-[10px] font-black uppercase tracking-widest shadow-xl border-none">JETZT ANFRAGEN</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-12 md:pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <main className="lg:col-span-8 space-y-24 md:space-y-40">
            
            {/* Section: Overview */}
            <section ref={overviewRef} className="space-y-10 scroll-mt-32">
              <div className="space-y-6">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Das Master-Programm</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary leading-[0.9] uppercase tracking-tighter">
                  VOM NIL ZU DEN <br /><span className="text-primary">SAVANNEN TANSANIAS</span>
                </h2>
                <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-xl uppercase tracking-tight opacity-80 border-l-4 border-primary/20 pl-8 py-2">
                  <p>
                    {pkg.description || "Erleben Sie Tansania in seiner reinsten Form. Diese sorgfältig kuratierte Expedition führt Sie durch die legendärsten Wildreservate und Nationalparks Afrikas."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Star, label: "Kategorie", val: "Premium Luxus" },
                  { icon: Users, label: "Reiseart", val: "Privat-Geführt" },
                  { icon: Compass, label: "Fokus", val: "Echte Wildnis" },
                  { icon: ShieldCheck, label: "Schutz", val: "DRSF Mitglied" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white rounded-[1.5rem] border border-border/50 shadow-sm text-center space-y-2 group hover:border-primary/20 transition-all">
                    <stat.icon className="w-5 h-5 text-primary mx-auto group-hover:scale-110 transition-transform" />
                    <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                    <p className="font-bold text-[9px] md:text-xs text-secondary uppercase leading-tight">{stat.val}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Detailed Itinerary */}
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
                          <div className="md:w-32 bg-secondary p-6 md:p-10 flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors duration-500">
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

            {/* Section: Accommodations */}
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
                      <h4 className="text-2xl font-headline font-bold uppercase">Serengeti Heritage</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-32 space-y-8">
              
              <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-10 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-10">
                  <div className="text-center space-y-2">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Registry Status</span>
                    <h2 className="text-4xl font-black font-headline text-white uppercase leading-none tracking-tighter">
                      ab €{pkg.startingPrice?.toLocaleString()}
                    </h2>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Saison 2026/27</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Dauer</p>
                        <p className="text-xs font-bold uppercase">{pkg.durationDays} Tage Expedition</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Exklusivität</p>
                        <p className="text-xs font-bold uppercase">100% Private Tour</p>
                      </div>
                    </div>
                  </div>

                  <Button onClick={() => scrollTo('inquiry')} className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform border-none">
                    UNVERBINDLICH ANFRAGEN
                  </Button>

                  <div className="pt-6 border-t border-white/10 text-center">
                    <p className="text-[8px] font-black uppercase text-white/40 mb-2">Gesichert durch</p>
                    <div className="flex justify-center items-center gap-4 opacity-60">
                      <div className="text-[9px] font-black border border-white/20 px-2 py-1 rounded">DRSF</div>
                      <div className="text-[9px] font-black border border-white/20 px-2 py-1 rounded">HANSE</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[2rem] border border-border/50 shadow-sm p-8 space-y-6 bg-white">
                <h4 className="font-headline text-lg font-bold text-secondary uppercase tracking-tight">Experten-Insight</h4>
                <div className="space-y-4 text-muted-foreground font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                  <p>
                    „Diese Route wurde speziell konzipiert, um die optimale Balance zwischen intensiven Wildlife-Sichtungen und erholsamen Momenten in exklusiven Lodges zu finden.“
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-secondary">Berlin Office Registry</span>
                  </div>
                </div>
              </Card>

            </div>
          </aside>
        </div>
      </div>

      {/* Unified Conversion Mosaic */}
      <AiCTA />

      {/* Full-Width Registry Form */}
      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>

      {/* Mobile Floating Action Trigger */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-3 pointer-events-none">
        <motion.div 
          initial={{ y: 100 }} 
          animate={{ y: 0 }}
          className="pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-[1.5rem] p-3 flex items-center justify-between shadow-2xl border border-primary/10"
        >
          <div className="flex flex-col pl-3">
            <p className="text-[7px] text-muted-foreground uppercase font-black tracking-[0.2em]">Expedition ab</p>
            <p className="text-sm font-black text-secondary uppercase tracking-tight">€{pkg.startingPrice?.toLocaleString()}</p>
          </div>
          <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-12 px-6 bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-xl border-none">
            ANFRAGEN <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
