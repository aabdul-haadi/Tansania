
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
  Coffee
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
    title: "Ankunft in Kairo",
    location: "Kairo",
    desc: "Empfang am Flughafen Kairo durch unsere Repräsentanten. Privat-Transfer zu Ihrem 5-Sterne Hotel mit Blick auf die Stadt oder die Pyramiden.",
    details: "Willkommens-Abendessen und Briefing zur bevorstehenden Expedition.",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800"
  },
  {
    day: 2,
    title: "Die Pyramiden von Gizeh & Sphinx",
    location: "Gizeh Plateau",
    desc: "Ganztägige Erkundung der letzten erhaltenen Weltwunder der Antike. Besuch der Großen Pyramide und des Taltempels.",
    details: "Am Nachmittag Besuch des neuen Großen Ägyptischen Museums (GEM) oder des Ägyptischen Museums am Tahrir-Platz.",
    img: "https://images.unsplash.com/photo-1539760397268-33f5146dd9e2?q=80&w=800"
  },
  {
    day: 3,
    title: "Flug nach Assuan & Einschiffung",
    location: "Assuan / Nil",
    desc: "Transfer zum Flughafen Kairo für Ihren Inlandsflug nach Assuan. Einschiffung auf Ihre luxuriöse Nilkreuzfahrt.",
    details: "Nachmittags Felukkenfahrt rund um die Elephantine-Insel und Besuch des Botanischen Gartens.",
    img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800"
  },
  {
    day: 4,
    title: "Abu Simbel (Optional) & Kom Ombo",
    location: "Abu Simbel / Kom Ombo",
    desc: "Möglichkeit zum Besuch der majestätischen Tempel von Ramses II. in Abu Simbel. Später Segeln nach Kom Ombo.",
    details: "Besichtigung des Doppeltempels von Sobek und Haroeris direkt am Nilufer.",
    img: "https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800"
  },
  {
    day: 5,
    title: "Edfu & Ankunft in Luxor",
    location: "Edfu / Luxor",
    desc: "Besuch des Horus-Tempels in Edfu, dem am besten erhaltenen Tempel Ägyptens. Weiterreise durch die Schleuse von Esna nach Luxor.",
    details: "Abendlicher Besuch des beleuchteten Luxor-Tempels im Herzen der Stadt.",
    img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800"
  },
  {
    day: 6,
    title: "Tal der Könige & Westbank",
    location: "Theben-West",
    desc: "Überquerung des Nils zur Westbank. Erkundung des Tals der Könige, des Tempels der Hatschepsut und der Memnonkolosse.",
    details: "Einblick in die aufwendigen Grabmalereien, die seit Jahrtausenden ihre Farben bewahrt haben.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800"
  },
  {
    day: 7,
    title: "Karnak Tempel & Rückflug Kairo",
    location: "Luxor / Kairo",
    desc: "Besuch der gewaltigen Tempelanlage von Karnak, dem größten religiösen Bauwerk der Welt. Transfer zum Flughafen und Rückflug nach Kairo.",
    details: "Letzter Abend in Kairo – Zeit für Souvenirs im Khan el-Khalili Basar.",
    img: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800"
  },
  {
    day: 8,
    title: "Heimreise oder Verlängerung",
    location: "Kairo",
    desc: "Transfer zum internationalen Flughafen Kairo für Ihren Rückflug nach Europa oder Beginn Ihres Anschlussprogramms (z.B. Rotes Meer).",
    details: "Abschied von der Magie des Nils.",
    img: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=800"
  }
];

export default function EgyptClassicTourPage() {
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
            src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1920" 
            alt="Klassisches Ägypten" 
            fill 
            priority
            className="object-cover scale-105"
            data-ai-hint="egypt pyramids"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent md:hidden" />
        </div>
        
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-20 relative z-10">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-10 max-w-xl text-center md:text-left">
            <div className="space-y-4">
              <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl">
                Kultur-Expedition 2026
              </Badge>
              <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tighter uppercase">
                KLASSISCHES <br /><span className="text-primary">ÄGYPTEN</span>
              </h1>
              <p className="text-white/60 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-md mx-auto md:mx-0">
                8 Tage • Kairo • Nilkreuzfahrt • Luxor • Assuan. <br />In Berlin konzipiert – am Nil gelebt.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
               <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest">
                 <Clock className="w-4 h-4 text-primary" /> 8 Tage / 7 Nächte
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
            <div className="text-right">
              <p className="text-[8px] font-black uppercase text-muted-foreground leading-none mb-1">Support Berlin</p>
              <p className="text-xs font-black text-secondary">+49 30 22608080</p>
            </div>
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
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Das Erlebnis</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary leading-[0.9] uppercase tracking-tighter">
                  EINTAUCHEN IN DIE <br /><span className="text-primary">WELT DER PHARAONEN</span>
                </h2>
                <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-xl uppercase tracking-tight opacity-80 border-l-4 border-primary/20 pl-8 py-2">
                  <p>
                    Begleiten Sie uns auf eine Zeitreise entlang des Nils. Von den monumentalen Pyramiden von Gizeh bis zu den verborgenen Gräbern im Tal der Könige – diese Expedition verbindet archäologische Wunder mit dem Luxus einer privaten Nilkreuzfahrt.
                  </p>
                  <p>
                    Unser Kairo-Team sichert exklusive Zugänge und erstklassige Guides, die Geschichte lebendig werden lassen.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Star, label: "Standard", val: "5 Sterne Luxus" },
                  { icon: Users, label: "Gruppe", val: "Privat-Tour" },
                  { icon: MapPin, label: "Route", val: "Kairo & Nil" },
                  { icon: ShieldCheck, label: "Schutz", val: "DRSF Abgesichert" }
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
                              <Badge variant="outline" className="rounded-lg border-muted px-3 py-1 font-black text-[8px] uppercase text-muted-foreground">Inklusive Guide</Badge>
                              <Badge variant="outline" className="rounded-lg border-muted px-3 py-1 font-black text-[8px] uppercase text-muted-foreground">Privat Transfer</Badge>
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
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">Prestige Service</span>
                  <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-[0.9] tracking-tighter">WAS IST <br /><span className="text-primary">INKLUDIERT?</span></h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Plane, t: "Inlandsflüge", d: "Alle Kairo-Assuan-Luxor-Kairo Flüge inbegriffen." },
                  { icon: Waves, t: "Nilkreuzfahrt", d: "4 Nächte auf einem 5-Sterne Deluxe Schiff, Vollpension." },
                  { icon: Compass, t: "Privat-Guides", d: "Staatlich geprüfte deutschsprachige Ägyptologen." },
                  { icon: ShieldCheck, t: "VIP Transfer", d: "Alle Transfers in klimatisierten Privat-Fahrzeugen." },
                  { icon: Ticket, t: "Eintrittsgelder", d: "Alle Besichtigungen laut Programm inklusive Gizeh & Luxor." },
                  { icon: Coffee, t: "Verpflegung", d: "Vollpension auf dem Schiff, Frühstück in Kairo." }
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
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Tour-Registry Status</span>
                    <h2 className="text-4xl font-black font-headline text-white uppercase leading-none tracking-tighter">Preis auf <br /><span className="text-primary">Anfrage</span></h2>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Saison 2026/2027</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <Plane className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Inklusive</p>
                        <p className="text-xs font-bold uppercase">Inlandsflüge</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[8px] font-black uppercase text-white/40">Exklusivität</p>
                        <p className="text-xs font-bold uppercase">Private Expedition</p>
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
                <h4 className="font-headline text-lg font-bold text-secondary uppercase tracking-tight">Experten-Tipp</h4>
                <div className="space-y-4 text-muted-foreground font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                  <p>
                    „Erweitern Sie Ihre Reise um 3-4 Tage Entspannung am Roten Meer (Hurghada oder Marsa Alam) für das ultimative Ägypten-Erlebnis.“
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-secondary">Samson Kyashama</span>
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
              <p className="text-[7px] text-muted-foreground uppercase font-black tracking-[0.2em]">Ägypten 8 Tage</p>
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
  )
}
