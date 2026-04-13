"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  ChevronRight, 
  Users,
  Compass,
  FileText,
  Plus,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';
import { AiCTA } from '@/components/sections/AiCTA';

const faqData = [
  { q: "Benötige ich ein Visum für Tansania?", a: "Ja, für deutsche Staatsangehörige ist ein Visum erforderlich. Dies kann bequem vorab als E-Visum oder bei der Ankunft am Flughafen erworben werden." },
  { q: "Welche Impfungen werden empfohlen?", a: "Standardimpfungen sowie Schutz gegen Hepatitis A und Typhus werden empfohlen. Eine Gelbfieberimpfung ist bei Einreise aus Endemiegebieten Pflicht." },
  { q: "Ist die Safari für Kinder geeignet?", a: "Absolut. Wir wählen kinderfreundliche Lodges und passen die Fahrtzeiten an, um ein entspanntes Erlebnis für die ganze Familie zu gewährleisten." },
  { q: "Was ist in der Packliste unverzichtbar?", a: "Leichte, helle Kleidung (Khaki/Beige), Sonnenschutz, ein gutes Fernglas und eine Kamera mit Zoomobjektiv sind essenziell." }
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
      const scrollPos = window.scrollY + 100;
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

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left" style={{ scaleX }} />

      {/* 01 CENTERED BOTTOM HERO - NATURAL CASING */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
            alt={pkg.title} 
            fill 
            priority
            className="object-cover scale-105 brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-end items-center pb-12 md:pb-20 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl space-y-6 text-center flex flex-col items-center"
          >
            <div className="space-y-4">
              <h1 className="font-headline font-normal text-white text-3xl md:text-6xl leading-tight">
                {pkg.title}
              </h1>
              <p className="text-white/90 font-light text-xs md:text-lg leading-relaxed max-w-2xl mx-auto">
                {pkg.heroDescription}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-2">
               <Button onClick={() => scrollTo('inquiry')} className="w-full sm:w-auto rounded-lg px-10 h-12 font-bold text-xs shadow-2xl border-none">
                 Jetzt anfragen
               </Button>
               <Button onClick={() => scrollTo('itinerary')} variant="glass" className="w-full sm:w-auto rounded-lg px-10 h-12 font-bold text-xs">
                 Reiseroute ansehen
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 STICKY NAVIGATION */}
      <div className="sticky top-0 z-[40] bg-white/95 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20 max-w-7xl">
          <div className="flex gap-4 md:gap-12 h-full overflow-x-auto no-scrollbar">
            {['overview', 'itinerary', 'hotels', 'faq'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={cn(
                  "h-full px-1 text-[11px] font-bold transition-all border-b-2 whitespace-nowrap",
                  activeSection === id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {id === 'overview' ? 'Übersicht' : id === 'itinerary' ? 'Reiseverlauf' : id === 'hotels' ? 'Unterkünfte' : 'FAQ'}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[9px] font-bold text-muted-foreground leading-none mb-1">Preise ab</p>
              <p className="text-sm font-bold text-secondary">€{(pkg.startingPrice || 2999).toLocaleString('de-DE')}</p>
            </div>
            <Button onClick={() => scrollTo('inquiry')} size="sm" className="rounded-xl h-11 px-8 text-[10px] font-bold shadow-xl border-none">Anfrage senden</Button>
          </div>
        </div>
      </div>

      {/* 03 NARRATIVE & MASTER CARD - HIGH DENSITY */}
      <section ref={overviewRef} className="pt-8 md:pt-12 pb-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">Eine Reise, die berührt</h2>
              <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-border/50 bg-muted">
                <Image src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'} alt="Safari" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground opacity-80 border-l-4 border-primary/20 pl-8">
                Erleben Sie die pure Magie Ostafrikas. Von den goldenen Savannen der Serengeti bis zum türkisblauen Indischen Ozean auf Sansibar. Diese Reise wurde konzipiert, um Ihnen die Seele Tansanias näherzubringen – exklusiv und mit höchstem Komfort.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <Card className="rounded-[1.5rem] border border-border/20 bg-[#FDFCFB] p-6 md:p-8 shadow-sm text-left">
                  <div className="space-y-6">
                    <div>
                      <p className="text-primary font-bold text-[10px] tracking-widest uppercase mb-1">Master Registry</p>
                      <h3 className="font-headline text-2xl md:text-[28px] font-medium text-secondary leading-tight">{pkg.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex flex-col">
                          <p className="text-secondary font-bold text-sm">Reisedauer</p>
                          <p className="text-sm text-muted-foreground">{pkg.durationDays} Tage, Flüge inklusive</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-secondary font-bold text-sm">Unterkünfte</p>
                          <p className="text-sm text-muted-foreground">Handverlesene Tented Lodges & Boutique Hotels</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-secondary font-bold text-sm">Exklusivität</p>
                          <p className="text-sm text-muted-foreground">Privat-Safari mit eigenem Guide & Jeep</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-secondary font-bold text-sm">Reisezeit</p>
                          <p className="text-sm text-muted-foreground">Ganzjährig buchbar</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-border/40 space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {["Inlandsflüge inkl.", "Vollpension", "Deutschsprachig"].map(tag => (
                          <div key={tag} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-bold text-secondary">{tag}</div>
                        ))}
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <div className="flex flex-col">
                          <span className="text-2xl md:text-3xl font-black text-secondary leading-none">ab {pkg.startingPrice?.toLocaleString('de-DE')} €</span>
                          <p className="text-[10px] font-bold text-primary mt-1">pro Person im Doppelzimmer</p>
                        </div>
                        <Button onClick={() => scrollTo('inquiry')} className="h-11 px-6 bg-secondary text-white hover:bg-primary font-bold text-[11px] border-none shadow-md">
                          Anfragen
                        </Button>
                      </div>
                      
                      <Button variant="outline" className="w-full h-11 border-muted text-secondary font-bold text-[11px] flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4" /> Reiseplan als PDF
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 ITINERARY - SPLIT LAYOUT PROTOCOL */}
      <section ref={itineraryRef} className="py-12 md:py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Ihr Reiseverlauf</h2>
            <p className="text-muted-foreground text-sm">Eine sorgfältig kuratierte Route durch die schönsten Regionen Tansanias</p>
          </div>
          <Accordion type="multiple" defaultValue={["group-0"]} className="space-y-6">
            {dayGroups.map((group, gIdx) => (
              <AccordionItem key={gIdx} value={`group-${gIdx}`} className="border-none">
                <AccordionTrigger className="p-0 hover:no-underline [&>svg]:hidden">
                  <div className="relative w-full h-24 rounded-3xl overflow-hidden bg-secondary flex items-center px-8 md:px-12">
                    <div className="relative z-10 text-left">
                      <h3 className="font-headline text-lg md:text-2xl text-white">Safari Abenteuer • Tag {gIdx * 5 + 1}-{gIdx * 5 + group.length}</h3>
                      <p className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Wildnis & Naturwunder</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-8 space-y-10">
                  {group.map((day: any, dIdx: number) => (
                    <div key={dIdx} className="flex gap-6 md:gap-10 text-left items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FDF7F2] flex items-center justify-center font-bold text-primary shrink-0">{gIdx * 5 + dIdx + 1}</div>
                      <div className="flex-1 bg-white rounded-3xl border border-border/40 overflow-hidden shadow-sm flex flex-col md:flex-row">
                        <div className="flex-1 p-6 md:p-10 space-y-4">
                          <Badge className="bg-primary/10 text-primary border-none text-[9px] mb-2">{day.location}</Badge>
                          <h4 className="font-headline text-xl md:text-3xl mb-4">{day.title}</h4>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{day.desc}</p>
                        </div>
                        <div className="md:w-1/3 relative aspect-video md:aspect-auto min-h-[250px]">
                          <Image 
                            src={day.img || `https://picsum.photos/seed/day-${gIdx}-${dIdx}/800/600`} 
                            alt={day.title} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 05 HOTELS & FAQ */}
      <section ref={hotelsRef} className="py-12 md:py-20 bg-white scroll-mt-20 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-12">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Handverlesene Unterkünfte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] overflow-hidden border border-border/40 shadow-sm text-left group">
              <div className="relative aspect-video overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" alt="Lodge" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-headline text-2xl font-medium">Boutique Safari-Lodges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Luxuriöse Zeltcamps und Lodges mitten in der Wildnis. Jede Unterkunft verbindet authentisches Safari-Feeling mit höchstem Komfort.</p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden border border-border/40 shadow-sm text-left group">
              <div className="relative aspect-video overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" alt="Beach" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-headline text-2xl font-medium">Sansibar Beach Retreat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Ihr privates Strandparadies auf Sansibar. Exklusives Boutique-Resort direkt am schneeweißen Sandstrand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-12 md:py-20 bg-[#FDF7F2] border-y border-border/40 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-2xl px-8 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full"><span>{faq.q}</span><Plus className="w-4 h-4 text-primary transition-transform group-data-[state=open]:rotate-45" /></div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm text-left pb-8">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="pt-4"><AiCTA /></div>
      <section ref={inquiryRef} className="scroll-mt-20"><ContactSection /></section>
    </div>
  );
}
