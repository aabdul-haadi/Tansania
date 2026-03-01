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
  Users,
  Compass,
  Download,
  Share2,
  Calendar,
  Waves,
  Mountain,
  Heart,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
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

  if (isLoading) return <PackageSkeleton />;

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#fdfcfb]">
        <div className="w-24 h-24 bg-destructive/10 rounded-[2rem] flex items-center justify-center mb-8">
          <Compass className="w-12 h-12 text-destructive" />
        </div>
        <h2 className="font-headline text-4xl font-bold mb-4">Expedition nicht gefunden</h2>
        <p className="text-muted-foreground mb-8 max-w-xs mx-auto italic text-sm">Dieser Teil der Savanne scheint noch unerforscht zu sein.</p>
        <Button asChild className="rounded-full px-10 h-14 font-bold shadow-xl"><Link href="/safaris">Zurück zum Katalog</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Cinematic Split Hero */}
      <section className="relative h-[75vh] md:h-[90vh] w-full overflow-hidden flex flex-col md:flex-row bg-[#0a0a0a]">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <Image 
            src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
            alt={pkg.title} 
            fill 
            priority
            className="object-cover scale-105"
            data-ai-hint="serengeti safari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
        </div>
        
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-20 relative z-10">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8 max-w-xl text-center md:text-left">
            <div className="space-y-4">
              <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                {pkg.subtitle || 'Traumabenteuer in Afrika!'}
              </Badge>
              <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl">
                {pkg.title}
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 text-white font-bold text-xs uppercase tracking-widest">
                 <Clock className="w-5 h-5 text-primary" /> {pkg.durationDays} Tage Erlebnisreise
               </div>
               <div className="flex items-center gap-3 bg-primary px-6 py-4 rounded-2xl text-white font-bold text-xs uppercase tracking-widest shadow-xl">
                 <Zap className="w-5 h-5 text-white" /> ab €{pkg.startingPrice?.toLocaleString()}
               </div>
            </div>

            <Button onClick={() => scrollTo('overview')} variant="ghost" className="text-white/60 hover:text-white group gap-2 text-xs font-bold uppercase tracking-widest px-0">
              Mehr Erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Magazine Sub-Nav */}
      <div className="sticky top-0 z-[40] bg-white/90 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <div className="flex gap-6 md:gap-12 h-full overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "h-full px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-11 px-8 text-[10px] shadow-lg">Jetzt Anfragen</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-16 md:pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <main className="lg:col-span-8 space-y-24 md:space-y-40">
            
            {/* Magazine Narrative Intro */}
            <section ref={overviewRef} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Das Erlebnis</span>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight">
                      15 Tage Pauschalreise Tansania - <br /><span className="text-primary italic">Safari im Norden und Badeurlaub auf Sansibar</span>
                    </h2>
                  </div>
                  <div className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed italic border-l-4 border-primary/20 pl-8 py-2">
                    {pkg.description}
                  </div>
                  <div className="prose prose-xl max-w-none text-muted-foreground font-light leading-relaxed space-y-8">
                    <p>
                      Die Safari im Norden beginnt im Arusha-Nationalpark, wo Sie beeindruckende Ausblicke auf die Momella-Seen und den Ngurdoto-Krater genießen, gefolgt von einem Besuch in Tarangire, wo Sie Elefantenherden zwischen den mächtigen Baobabs beobachten können.
                    </p>
                    <p>
                      Erleben Sie authentische Begegnungen mit der lokalen Kultur der Massai, bevor Sie die weite Savanne der Serengeti entdecken. Zwei intensive Tage voller unvergesslicher Tiermomente, mit Chancen auf die große Migration, je nach Saison.
                    </p>
                    <p>
                      Der Höhepunkt der Safari ist der Ngorongoro-Krater, ein Naturwunder mit einer hohen Wilddichte, das Ihnen außergewöhnliche Möglichkeiten bietet, die „Big Five“ zu erleben.
                    </p>
                    <p>
                      Nach der Safari fliegen Sie nach Sansibar, beziehen Ihr Strandhotel und genießen unvergessliche Erholung: barfuß am weißen Sandstrand, Baden im türkisblauen Meer und Zeit zum Genießen. Optional können Sie an Bootstouren, Schnorcheln, einer Gewürztour, Tauchen oder einem Besuch in Stone Town teilnehmen.
                    </p>
                    <p>
                      Am Ende Ihrer Reise werden Sie zurück zum Flughafen gebracht und treten Ihre Heimreise an, mit Erinnerungen, die bleiben.
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-5 space-y-6">
                  <div className="bg-secondary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    <h4 className="font-headline text-2xl font-bold mb-8 relative z-10 text-white">Signature Highlights</h4>
                    <div className="space-y-6 relative z-10">
                      {pkg.highlights?.map((h: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-bold text-[10px] uppercase tracking-widest text-white/80">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 border-2 border-dashed rounded-[3rem] text-center space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Teilnehmerzahl</p>
                    <p className="text-sm font-bold text-secondary">Min. auf Anfrage – Max. 6 Personen</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Expedition Log Journal Timeline */}
            <section ref={itineraryRef} className="space-y-20">
              <div className="text-center md:text-left space-y-2">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Expedition Log</span>
                <h3 className="font-headline text-4xl md:text-7xl font-bold text-secondary">Das <span className="text-primary italic">Reisetagebuch</span></h3>
              </div>

              <div className="space-y-16 relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-muted to-primary/40 hidden md:block" />

                {(pkg.itineraryDays || []).map((day: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative md:pl-24"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-[1.5rem] bg-secondary flex flex-col items-center justify-center text-white shadow-xl z-10 hidden md:flex group-hover:scale-110 transition-all duration-500 border border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 leading-none mb-1 text-white">Log</span>
                      <span className="text-2xl font-bold font-headline leading-none text-white">{day.day || idx + 1}</span>
                    </div>

                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-border/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-[45%] aspect-[16/10] md:aspect-auto relative overflow-hidden">
                          <Image src={day.img || `https://picsum.photos/seed/safari-day-${idx}/800/600`} alt={day.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4 md:hidden bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-xl">Tag {day.day || idx + 1}</div>
                        </div>
                        <div className="p-8 md:p-12 md:w-[55%] space-y-6">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                              <MapPin className="w-3.5 h-3.5" /> {day.location}
                            </div>
                            {day.stats && (
                              <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-muted text-muted-foreground">
                                {day.stats}
                              </Badge>
                            )}
                          </div>
                          <h4 className="font-headline text-2xl md:text-3xl font-bold text-secondary leading-tight group-hover:text-primary transition-colors">{day.title}</h4>
                          <div className="text-muted-foreground font-light leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                            {day.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Signature Accommodations Grid */}
            <section ref={hotelsRef} className="space-y-16">
              <div className="text-center md:text-left space-y-2">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Rest & Recharge</span>
                <h3 className="font-headline text-4xl md:text-7xl font-bold text-secondary">Flagship <span className="text-primary italic">Residences</span></h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { n: "Ashura Planet Hotel", l: "Arusha Boutique", i: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" },
                  { n: "Funbeach Hotel", l: "Zanzibar Coast", i: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" },
                  { n: "Nugiwi Luxury", l: "Exclusive Nungwi", i: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" }
                ].map((hotel, i) => (
                  <div key={i} className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl transition-all">
                    <Image src={hotel.i} alt={hotel.n} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-8 right-8 text-white">
                      <Badge className="bg-primary text-white border-none mb-3 px-3 py-1 text-[8px] uppercase tracking-widest font-bold">{hotel.l}</Badge>
                      <h4 className="text-2xl font-headline font-bold text-white">{hotel.n}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sticky Magazine Sidebar */}
          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-32 space-y-8">
              <Card className="rounded-[3rem] border-none bg-secondary text-white p-10 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-10">
                  <div className="text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Expedition Value</span>
                    <div className="flex items-baseline justify-center gap-2">
                      <h2 className="text-6xl font-bold font-headline text-white">€{pkg.startingPrice?.toLocaleString()}</h2>
                      <span className="text-white/40 text-sm">/ pp</span>
                    </div>
                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-4">Inklusive Intl. Flug & Vollpension</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { l: "Zeitraum", v: "2026 - 2027" },
                      { l: "Kategorie", v: "Premium Erlebnis" },
                      { l: "Highlights", v: "Big Five & Zanzibar" }
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="text-[9px] font-bold uppercase text-white/40">{s.l}</span>
                        <span className="text-xs font-bold text-white">{s.v}</span>
                      </div>
                    ))}
                  </div>

                  <Button onClick={() => scrollTo('inquiry')} size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-white hover:text-secondary font-bold text-sm shadow-xl transition-all uppercase tracking-widest text-white">
                    Expedition Planen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="flex justify-between gap-4 pt-4 border-t border-white/10">
                    <button className="flex-1 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-primary transition-colors h-12 rounded-xl">
                      <Download className="w-4 h-4" /> PDF Reiseroute
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center text-white/30 hover:text-primary transition-colors border border-white/10 rounded-xl">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>

              {/* Personal Consultation */}
              <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-border/50 text-center space-y-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 mx-auto shadow-lg relative">
                  <img src="https://picsum.photos/seed/expert/200/200" alt="Samson Kyashama" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary uppercase tracking-widest text-[9px] mb-2">Persönliche Beratung</h4>
                  <h3 className="font-headline text-2xl font-bold text-secondary">Samson Kyashama</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Direktkontakt Büro Berlin</p>
                </div>
                <div className="space-y-3">
                  <a href="tel:+493022608080" className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl text-xs font-bold hover:bg-primary hover:text-white transition-all group text-secondary">
                    <span className="opacity-60 group-hover:opacity-100">Telefon</span>
                    <span className="group-hover:text-white transition-colors text-secondary group-hover:text-white">+49 30 22608080</span>
                  </a>
                  <a href="mailto:info@tansania-reiseabenteuer.de" className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl text-xs font-bold hover:bg-primary hover:text-white transition-all group text-secondary">
                    <span className="opacity-60 group-hover:opacity-100">E-Mail</span>
                    <span className="truncate max-w-[140px] group-hover:text-white transition-colors text-secondary group-hover:text-white">info@tansania...</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div ref={inquiryRef} className="pt-12">
        <ContactSection />
      </div>

      {/* Modern Glassmorphism Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-4 pointer-events-none">
        <motion.div 
          initial={{ y: 100 }} animate={{ y: 0 }}
          className="pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-4 flex items-center justify-between shadow-2xl border border-primary/10"
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

function PackageSkeleton() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Skeleton */}
      <div className="h-[75vh] md:h-[90vh] flex flex-col md:flex-row gap-4 bg-muted animate-pulse">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-muted-foreground/10" />
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-20 flex flex-col justify-center space-y-8">
          <Skeleton className="h-8 w-32 rounded-full" />
          <Skeleton className="h-20 w-full rounded-2xl" />
          <Skeleton className="h-16 w-64 rounded-2xl" />
        </div>
      </div>
      
      {/* Narrative Skeleton */}
      <div className="container mx-auto px-4 max-w-7xl pt-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 space-y-12">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-40 w-full rounded-3xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <div className="lg:col-span-4">
          <Skeleton className="h-[500px] w-full rounded-[3rem]" />
        </div>
      </div>
    </div>
  );
}
