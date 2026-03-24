
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Sparkles, 
  Users,
  Compass,
  Calendar,
  Waves,
  Mountain,
  Heart,
  ShieldCheck,
  Star,
  Plane,
  Camera,
  Coffee,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';

const navItems = [
  { id: 'overview', label: 'Übersicht' },
  { id: 'itinerary', label: 'Reiseverlauf' },
  { id: 'inclusions', label: 'Leistungen' },
  { id: 'inquiry', label: 'Anfrage' }
];

const itinerary = [
  {
    day: 1,
    title: "Willkommen in Kairo",
    location: "Kairo",
    desc: "Exklusiver VIP-Empfang am Flughafen durch unsere Repräsentanten. Privat-Transfer in einem klimatisierten Oberklasse-Fahrzeug zu Ihrem 5-Sterne Deluxe Hotel mit Blick auf die Pyramiden.",
    details: "Willkommens-Drink und persönliches Briefing durch Ihren Kairo-Spezialisten.",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800"
  },
  {
    day: 2,
    title: "Das Vermächtnis der Götter",
    location: "Gizeh Plateau & Sakkara",
    desc: "Ganztägige Erkundung der Pyramiden von Gizeh, der Sphinx und der Stufenpyramide von Sakkara. Ihr privater Ägyptologe führt Sie abseits der Touristenpfade.",
    details: "Exklusives Mittagessen mit Panoramablick auf die Große Pyramide.",
    img: "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=800"
  },
  {
    day: 3,
    title: "Kulturschätze Kairos",
    location: "Kairo Stadt",
    desc: "Besuch des neuen Großen Ägyptischen Museums (GEM) und der Schätze von Tutanchamun. Nachmittags erkunden wir das koptische Viertel und den Khan el-Khalili Basar.",
    details: "Einblicke in das pulsierende Leben der Metropole zwischen Tradition und Moderne.",
    img: "https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800"
  },
  {
    day: 4,
    title: "Flug in den Süden & Nil-Magie",
    location: "Assuan / Nil",
    desc: "Privattransfer zum Flughafen und Flug nach Assuan. Einschiffung auf Ihre luxuriöse 5-Sterne Deluxe Nil-Dahabeya oder ein Premium-Kreuzfahrtschiff.",
    details: "Nachmittags Felukkenfahrt rund um die Elephantine-Insel bei Sonnenuntergang.",
    img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800"
  },
  {
    day: 5,
    title: "Abu Simbel & Nubische Weite",
    location: "Abu Simbel",
    desc: "Frühmorgendlicher Privat-Ausflug (Flug oder PKW) zu den majestätischen Felsentempeln von Ramses II. in Abu Simbel. Ein monumentales Erlebnis am Nassersee.",
    details: "Rückkehr nach Assuan und Beginn Ihrer Segelreise Richtung Norden.",
    img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800"
  },
  {
    day: 6,
    title: "Tempel der Stille",
    location: "Kom Ombo & Edfu",
    desc: "Besuch des Doppeltempels von Kom Ombo und des Horus-Tempels in Edfu. Erleben Sie die architektonische Perfektion der ptolemäischen Ära.",
    details: "Gemütliches Segeln entlang malerischer Nil-Dörfer und Palmenhaine.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800"
  },
  {
    day: 7,
    title: "Ankunft in Theben",
    location: "Luxor Ostufer",
    desc: "Einfahrt nach Luxor. Besichtigung der gewaltigen Tempelanlagen von Karnak und des beleuchteten Luxor-Tempels im Herzen der Stadt.",
    details: "Abendlicher Spaziergang durch die historische Avenue der Sphinxe.",
    img: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800"
  },
  {
    day: 8,
    title: "Tal der Könige",
    location: "Theben West",
    desc: "Überquerung zur Westbank. Erkundung des Tals der Könige (inkl. Sondergräbern), des Tempels der Hatschepsut und der Memnonkolosse.",
    details: "Exklusiver Zugang zu archäologischen Stätten, die für die Öffentlichkeit oft geschlossen sind.",
    img: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=800"
  },
  {
    day: 9,
    title: "Aufbruch zum Roten Meer",
    location: "Hurghada / Sahl Hasheesh",
    desc: "Privater Überlandtransfer (ca. 4 Std.) durch die Wüstenlandschaft zum Roten Meer. Check-in in Ihrem luxuriösen Strandresort.",
    details: "Beginn Ihrer wohlverdienten Entspannungsphase im Paradies.",
    img: "https://images.unsplash.com/photo-1506929113614-44d5c6248033?q=80&w=800"
  },
  {
    day: 10,
    title: "Azurblauer Luxus",
    location: "Rotes Meer",
    desc: "Tag zur freien Verfügung. Genießen Sie die erstklassigen Spa-Angebote Ihres Resorts oder erkunden Sie die Korallenriffe beim Schnorcheln.",
    details: "Optional: Private Bootsfahrt zu abgelegenen Inseln.",
    img: "https://images.unsplash.com/photo-1510011560141-62c7e8fc7910?q=80&w=800"
  },
  {
    day: 11,
    title: "Sonne & Meer",
    location: "Rotes Meer",
    desc: "Ein weiterer Tag der Entspannung. Lassen Sie die Eindrücke der Kulturreise in der warmen Sonne Ägyptens Revue passieren.",
    details: "Abschieds-Dinner am Strand unter dem Sternenhimmel.",
    img: "https://images.unsplash.com/photo-1544124499-58ec529dd298?q=80&w=800"
  },
  {
    day: 12,
    title: "Heimreise via Kairo",
    location: "Abreise",
    desc: "Transfer zum Flughafen Hurghada, Inlandsflug nach Kairo und Anschlussflug nach Hause oder individuelle Verlängerung.",
    details: "Wir wünschen Ihnen eine gute Rückreise mit unvergesslichen Erinnerungen.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800"
  }
];

export default function EgyptLuxury12DayPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMounted, setIsMounted] = useState(false);
  const overviewRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const inclusionsRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      if (inquiryRef.current && scrollPos >= inquiryRef.current.offsetTop) setActiveSection('inquiry');
      else if (inclusionsRef.current && scrollPos >= inclusionsRef.current.offsetTop) setActiveSection('inclusions');
      else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) setActiveSection('itinerary');
      else setActiveSection('overview');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const refMap: any = { overview: overviewRef, itinerary: itineraryRef, inclusions: inclusionsRef, inquiry: inquiryRef };
    const ref = refMap[id];
    if (ref && ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* Cinematic Prestige Hero */}
      <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden flex flex-col md:flex-row bg-secondary">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920" 
            alt="Luxus Ägypten" 
            fill 
            priority
            className="object-cover scale-105"
            data-ai-hint="abu simbel"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent md:hidden" />
        </div>
        
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-20 relative z-10">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-10 max-w-xl text-center md:text-left">
            <div className="space-y-4">
              <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl">
                Luxury Signature Tour
              </Badge>
              <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tighter uppercase">
                LUXUS <br /><span className="text-primary">ÄGYPTEN</span>
              </h1>
              <p className="text-white/60 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-md mx-auto md:mx-0">
                12 Tage • Kairo • Nilkreuzfahrt • Rotes Meer. <br />Die ultimative Verbindung aus Kultur & Entspannung.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
               <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest">
                 <Clock className="w-4 h-4 text-primary" /> 12 Tage / 11 Nächte
               </div>
               <div className="flex items-center gap-3 bg-primary px-5 py-3.5 rounded-2xl text-white font-bold text-[10px] uppercase tracking-widest shadow-xl">
                 <Zap className="w-4 h-4 text-white" /> Preis auf Anfrage
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
                  VOM NIL ZU DEN <br /><span className="text-primary">STRÄNDEN DES ROTEN MEERES</span>
                </h2>
                <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-xl uppercase tracking-tight opacity-80 border-l-4 border-primary/20 pl-8 py-2">
                  <p>
                    Erleben Sie Ägypten in seiner luxuriösesten Form. Diese 12-tägige Expedition führt Sie von den pulsierenden Gassen Kairos und den zeitlosen Pyramiden tief in den Süden nach Assuan und Luxor.
                  </p>
                  <p>
                    Nach den kulturellen Höhepunkten entspannen Sie in den exklusivsten Resorts am Roten Meer. Ein nahtloses Erlebnis, kuratiert von unseren Experten in Berlin und Kairo.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Star, label: "Kategorie", val: "5* Superior Luxus" },
                  { icon: Users, label: "Reiseart", val: "Privat-Geführt" },
                  { icon: Sun, label: "Finale", val: "Strand-Relax" },
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
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">Das Manifest</h2>
                <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">12 Tage / 11 Nächte Master-Route</p>
              </div>
              
              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {itinerary.map((day, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`day-${day.day}`}
                      className="border-none bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                    >
                      <AccordionTrigger className="p-0 hover:no-underline [&>svg]:hidden group">
                        <div className="flex flex-col md:flex-row w-full text-left">
                          <div className="md:w-32 bg-secondary p-6 md:p-10 flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Tag</span>
                            <span className="text-4xl md:text-5xl font-black font-headline leading-none">{day.day}</span>
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
                            <p className="text-xs md:text-sm text-muted-foreground font-bold leading-relaxed uppercase tracking-widest opacity-70">
                              {day.details}
                            </p>
                            <div className="pt-6 flex gap-4">
                              <Badge variant="outline" className="rounded-lg border-muted px-3 py-1 font-black text-[8px] uppercase text-muted-foreground">Luxury Protocol</Badge>
                              <Badge variant="outline" className="rounded-lg border-muted px-3 py-1 font-black text-[8px] uppercase text-muted-foreground">Private Expert</Badge>
                            </div>
                          </div>
                          <div className="md:col-span-5 relative aspect-video md:aspect-auto min-h-[300px]">
                            <Image src={day.img} alt={day.title} fill className="object-cover" />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Section: Inclusions */}
            <section ref={inclusionsRef} className="space-y-12 scroll-mt-32">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">Prestige Standard</span>
                  <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-[0.9] tracking-tighter">WAS IST <br /><span className="text-primary">INKLUDIERT?</span></h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Plane, t: "Internal Logistics", d: "Alle Inlandsflüge (Kairo-Assuan / Luxor-Hurghada / Hurghada-Kairo)." },
                  { icon: Waves, t: "Nile Sanctuary", d: "Private Nil-Dahabeya oder 5-Sterne Deluxe Cruise, Vollpension." },
                  { icon: Compass, t: "Expert Registry", d: "Staatlich geprüfte Privat-Ägyptologen für alle Besichtigungen." },
                  { icon: ShieldCheck, t: "VIP Mobility", d: "Alle Transfers in klimatisierten Privat-Fahrzeugen (Oberklasse)." },
                  { icon: Star, t: "Red Sea Luxury", d: "3 Nächte in einem 5-Sterne Beach-Resort (Sahl Hasheesh/El Gouna)." },
                  { icon: Coffee, t: "Full Protocol", d: "Vollpension während der Kreuzfahrt, Frühstück in Kairo & Hurghada." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl border border-border/50 shadow-sm flex items-start gap-6 group hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-secondary uppercase tracking-tight mb-1">{item.t}</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">{item.d}</p>
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
                    <h2 className="text-4xl font-black font-headline text-white uppercase leading-none tracking-tighter">Preis auf <br /><span className="text-primary">Anfrage</span></h2>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Master Collecton 2026/27</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <Plane className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Logistik</p>
                        <p className="text-xs font-bold uppercase">3 Inlandsflüge Inkl.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <Sun className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Strand</p>
                        <p className="text-xs font-bold uppercase">Rotes Meer Finale</p>
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
                    „Wir empfehlen dieses Programm für Reisende, die eine perfekte Balance zwischen intensiver Geschichte und modernem Strandluxus suchen. Der Privat-Transfer nach Hurghada bietet zudem spektakuläre Wüstenpanoramen.“
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

      {/* Full-Width Registry Form */}
      <section ref={inquiryRef} className="scroll-mt-20">
        <ContactSection />
      </section>

      {/* Mobile Floating Action Trigger */}
      {isMounted && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-3 pointer-events-none">
          <motion.div 
            initial={{ y: 100 }} 
            animate={{ y: 0 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-[1.5rem] p-3 flex items-center justify-between shadow-2xl border border-primary/10"
          >
            <div className="flex flex-col pl-3">
              <p className="text-[7px] text-muted-foreground uppercase font-black tracking-[0.2em]">Ägypten 12 Tage</p>
              <p className="text-sm font-black text-secondary uppercase tracking-tight">Auf Anfrage</p>
            </div>
            <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-12 px-6 bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-xl border-none">
              ANFRAGEN <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
