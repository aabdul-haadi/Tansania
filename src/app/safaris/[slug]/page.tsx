"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  Calendar,
  Users,
  Compass,
  Download,
  Share2,
  Plane,
  Camera,
  Coffee,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/sections/ContactSection';

const navItems = [
  { id: 'overview', label: 'Übersicht' },
  { id: 'itinerary', label: 'Reiseverlauf' },
  { id: 'hotels', label: 'Unterkünfte' },
  { id: 'inquiry', label: 'Anfrage' }
];

export default function PackageDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const [activeSection, setActiveSection] = useState('overview');
  const itineraryRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);

  const docRef = useMemoFirebase(() => (firestore && slug ? doc(firestore, 'packages', slug as string) : null), [firestore, slug]);
  const { data: pkg, isLoading } = useDoc(docRef);

  useEffect(() => {
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

  // 1. Check Loading first to prevent "Not Found" flicker
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#fdfcfb]">
        <div className="relative">
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
          <Compass className="w-6 h-6 text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-secondary">Opening Expedition Log</p>
          <div className="h-1 w-24 bg-muted mx-auto rounded-full overflow-hidden">
            <motion.div initial={{ x: -100 }} animate={{ x: 100 }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-full w-full bg-primary" />
          </div>
        </div>
      </div>
    );
  }

  // 2. Only show "Not Found" if we are DONE loading and still have no package
  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#fdfcfb]">
        <div className="w-24 h-24 bg-destructive/10 rounded-[2rem] flex items-center justify-center mb-8">
          <Compass className="w-12 h-12 text-destructive" />
        </div>
        <h2 className="font-headline text-4xl font-bold mb-4">Package Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-xs mx-auto italic">This part of the savannah seems to be unexplored or the coordinates are incorrect.</p>
        <Button asChild className="rounded-full px-10 h-14 font-bold shadow-xl"><Link href="/safaris">Return to Catalog</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <Image 
          src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
          alt={pkg.title} 
          fill 
          priority
          className="object-cover scale-105"
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              {pkg.subtitle || 'Traumabenteuer in Afrika!'}
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
               <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest">
                 <Clock className="w-4 h-4 text-primary" /> {pkg.durationDays} Tage Rundreise
               </div>
               <div className="flex items-center gap-3 bg-primary px-6 py-3 rounded-2xl text-white font-bold text-xs uppercase tracking-widest shadow-xl">
                 <Zap className="w-4 h-4 text-white" /> ab €{pkg.startingPrice?.toLocaleString()}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile-First Sub-Nav */}
      <div className="sticky top-0 z-[40] bg-white/80 backdrop-blur-xl border-b overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 flex items-center justify-between min-w-max h-16">
          <div className="flex gap-8 h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "h-full px-2 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4 ml-8">
            <Button onClick={() => scrollTo('inquiry')} size="sm" className="rounded-xl h-10 px-6 text-[10px]">Jetzt Anfragen</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <main className="lg:col-span-8 space-y-24">
            
            {/* overview section */}
            <section ref={overviewRef} className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Signature Narrative</span>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight">
                      Wo Abenteuer auf <br /><span className="text-primary italic">zeitlose Erholung trifft</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2">
                    {pkg.description}
                  </p>
                  <div className="prose prose-neutral max-w-none text-muted-foreground font-light leading-relaxed">
                    <p>
                      Jedes Detail Ihrer 15-tägigen Expedition ist darauf ausgelegt, die rohe Kraft der afrikanischen Wildnis mit dem Komfort erstklassiger Unterkünfte zu verbinden. Von den dichten Wäldern des Arusha Nationalparks bis zu den weißen Stränden Sansibars.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-5 bg-white p-8 rounded-[3rem] shadow-xl border border-border/50 space-y-6">
                  <h4 className="font-headline text-xl font-bold text-secondary">Expert Curation</h4>
                  <div className="space-y-4">
                    {pkg.highlights?.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                        </div>
                        <span className="font-bold text-[10px] uppercase tracking-widest text-secondary">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-muted flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-muted-foreground">Gruppengröße</p>
                        <p className="text-xs font-bold text-secondary">Max. 8 Explorer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* itinerary timeline section */}
            <section ref={itineraryRef} className="space-y-16">
              <div className="flex items-end justify-between px-4">
                <div className="space-y-2">
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Expedition Log</span>
                  <h3 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Das <span className="text-primary italic">Reisetagebuch</span></h3>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Download className="w-4 h-4" /> PDF Herunterladen
                </div>
              </div>

              <div className="space-y-12 relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-muted to-primary/40 hidden md:block" />

                {(pkg.itineraryDays || pkg.itinerary || []).map((day: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative md:pl-24"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-[1.5rem] bg-secondary flex flex-col items-center justify-center text-white shadow-xl z-10 hidden md:flex group-hover:scale-110 transition-all duration-500 border border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 leading-none mb-1">Tag</span>
                      <span className="text-2xl font-bold font-headline leading-none">{day.day || idx + 1}</span>
                    </div>

                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-border/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-[45%] aspect-[16/10] md:aspect-auto relative overflow-hidden">
                          <Image src={day.img || `https://picsum.photos/seed/safari-day-${idx}/800/600`} alt={day.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-4 left-4 md:hidden bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-xl border border-white/10">Tag {day.day || idx + 1}</div>
                        </div>
                        <div className="p-8 md:p-12 md:w-[55%] space-y-6">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                              <MapPin className="w-3.5 h-3.5" /> {day.location}
                            </div>
                            {day.stats && (
                              <Badge variant="secondary" className="bg-muted text-muted-foreground border-none text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                                {day.stats}
                              </Badge>
                            )}
                          </div>
                          <h4 className="font-headline text-2xl md:text-3xl font-bold text-secondary leading-tight group-hover:text-primary transition-colors">{day.title}</h4>
                          <div className="prose prose-sm max-w-none text-muted-foreground font-light leading-relaxed">
                            <p className="whitespace-pre-wrap">{day.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* hotels section */}
            <section ref={hotelsRef} className="space-y-12">
              <div className="text-center md:text-left space-y-2 px-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Reside & Recharge</span>
                <h3 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Signature <span className="text-primary italic">Accommodations</span></h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: "Ashura Planet Hotel", l: "Arusha Boutique", i: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" },
                  { n: "Funbeach Hotel", l: "Zanzibar Coast", i: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" },
                  { n: "Nugiwi Luxury", l: "Exclusive Nungwi", i: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" }
                ].map((hotel, i) => (
                  <div key={i} className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl transition-all">
                    <Image src={hotel.i} alt={hotel.n} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10 text-white">
                      <Badge className="bg-primary text-white border-none mb-3 px-3 py-1 text-[8px] uppercase tracking-widest font-bold">{hotel.l}</Badge>
                      <h4 className="text-2xl font-headline font-bold">{hotel.n}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <Card className="rounded-[3rem] border-none bg-secondary text-white p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-10">
                  <div className="text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Expedition Pricing</span>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-bold font-headline">€{pkg.startingPrice?.toLocaleString()}</span>
                      <span className="text-white/40 text-sm">/ pp</span>
                    </div>
                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-4">Inklusive Intl. Flug & Vollpension</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { l: "Min. Teilnehmer", v: "Auf Anfrage" },
                      { l: "Max. Teilnehmer", v: "6-8 Personen" },
                      { l: "Saison", v: "2026 - 2027" }
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="text-[9px] font-bold uppercase text-white/40">{s.l}</span>
                        <span className="text-xs font-bold">{s.v}</span>
                      </div>
                    ))}
                  </div>

                  <Button onClick={() => scrollTo('inquiry')} size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-white hover:text-secondary font-bold text-sm shadow-xl transition-all uppercase tracking-widest">
                    Expedition Planen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="flex justify-between gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-primary transition-colors border border-white/5 h-12 rounded-xl">
                      <Download className="w-3.5 h-3.5" /> Reiseroute PDF
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center text-white/30 hover:text-primary transition-colors border border-white/5 rounded-xl">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>

              {/* Specialist Contact */}
              <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-border/50 text-center space-y-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 mx-auto shadow-lg">
                  <img src="https://picsum.photos/seed/expert/200/200" alt="Samson Kyashama" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary uppercase tracking-widest text-[9px] mb-2">Persönliche Beratung</h4>
                  <p className="font-headline font-bold text-2xl">Samson Kyashama</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Gründer & Experte</p>
                </div>
                <div className="space-y-3">
                  <a href="tel:+493022608080" className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl text-xs font-bold hover:bg-primary hover:text-white transition-all group">
                    <span className="opacity-60 group-hover:opacity-100">Telefon</span>
                    <span>+49 30 22608080</span>
                  </a>
                  <a href="mailto:info@tansania-reiseabenteuer.de" className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl text-xs font-bold hover:bg-primary hover:text-white transition-all group">
                    <span className="opacity-60 group-hover:opacity-100">E-Mail</span>
                    <span className="truncate max-w-[140px]">info@tansania...</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div ref={inquiryRef}>
        <ContactSection />
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-4 pointer-events-none">
        <motion.div 
          initial={{ y: 100 }} animate={{ y: 0 }}
          className="pointer-events-auto bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-4 flex items-center justify-between shadow-2xl border border-primary/10"
        >
          <div className="flex flex-col pl-4">
            <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-[0.2em] mb-0.5">Expedition Preis</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-secondary">€{pkg.startingPrice?.toLocaleString()}</span>
              <span className="text-[10px] text-muted-foreground font-light">/ pp</span>
            </div>
          </div>
          <Button onClick={() => scrollTo('inquiry')} className="rounded-2xl h-14 px-8 bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-xl">
            Jetzt Anfragen <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
