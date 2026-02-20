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
  Info,
  Calendar,
  Users,
  Compass,
  Download,
  Share2,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <Sparkles className="w-12 h-12 text-primary animate-pulse" />
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Opening Expedition Log...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl font-headline font-bold mb-4">Package Not Found</h2>
        <Button asChild className="rounded-full px-8 h-12"><Link href="/safaris">Back to Catalog</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Cinematic Hero */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center">
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

      {/* Sticky Segmented Sub-Nav (Best Phone Practice) */}
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

      {/* Main Narrative Feed */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Narrative Column */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* overview section */}
            <section ref={overviewRef} className="space-y-12">
              <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <Compass className="w-48 h-48 text-secondary" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Expeditions-Kern</span>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight">
                      Abenteuer & Erholung <br /><span className="text-primary italic">Perfekt Vereint</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                    {pkg.highlights?.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-muted/20 rounded-2xl border border-border/50 group hover:border-primary/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-bold text-[10px] uppercase tracking-widest text-secondary">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* itinerary timeline section */}
            <section ref={itineraryRef} className="space-y-16">
              <div className="flex items-end justify-between px-4">
                <div className="space-y-2">
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Tagebuch der Wildnis</span>
                  <h3 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Ihr <span className="text-primary italic">Reiseverlauf</span></h3>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <Download className="w-4 h-4" /> Download PDF
                </div>
              </div>

              <div className="space-y-12 relative">
                {/* Visual Connector Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-muted to-primary/40 hidden md:block" />

                {pkg.itinerary?.map((day: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative md:pl-20"
                  >
                    {/* Visual Node */}
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-[1.5rem] bg-secondary flex flex-col items-center justify-center text-white shadow-xl z-10 hidden md:flex group-hover:scale-110 transition-transform">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Day</span>
                      <span className="text-xl font-bold font-headline">{day.day}</span>
                    </div>

                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 aspect-[16/10] md:aspect-auto relative overflow-hidden">
                          <Image src={day.img || 'https://picsum.photos/seed/safari/800/600'} alt={day.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-4 left-4 md:hidden bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-xl">Tag {day.day}</div>
                        </div>
                        <div className="p-8 md:p-10 md:w-2/3 space-y-4">
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
                          <h4 className="font-headline text-2xl md:text-3xl font-bold text-secondary">{day.title}</h4>
                          <p className="text-muted-foreground text-sm font-light leading-relaxed italic">"{day.desc}"</p>
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
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Rest & Recharge</span>
                <h3 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Premium <span className="text-primary italic">Unterkünfte</span></h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: "Ashura Planet Hotel", l: "Arusha Boutique", i: "https://picsum.photos/seed/ashura/600/800" },
                  { n: "Funbeach Hotel", l: "Sansibar Lifestyle", i: "https://picsum.photos/seed/fun/600/800" },
                  { n: "Nugiwi Luxury", l: "Nungwi Beach", i: "https://picsum.photos/seed/nugi/600/800" }
                ].map((hotel, i) => (
                  <div key={i} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                    <Image src={hotel.i} alt={hotel.n} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <Badge className="bg-primary text-white border-none mb-2 px-3 py-1 text-[8px] uppercase tracking-widest font-bold">{hotel.l}</Badge>
                      <h4 className="text-xl font-headline font-bold">{hotel.n}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sticky Sidebar (Desktop Only) */}
          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-10 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-10">
                  <div className="text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Expedition Booking</span>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold font-headline">€{pkg.startingPrice?.toLocaleString()}</span>
                      <span className="text-white/40 text-sm">/ pp</span>
                    </div>
                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-3">Inklusive Intl. Flug & Vollpension</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { l: "Min. Teilnehmer", v: "Auf Anfrage" },
                      { l: "Max. Teilnehmer", v: "6 Explorer" },
                      { l: "Saison", v: "2026 - 2027" }
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="text-[9px] font-bold uppercase text-white/40">{s.l}</span>
                        <span className="text-xs font-bold">{s.v}</span>
                      </div>
                    ))}
                  </div>

                  <Button onClick={() => scrollTo('inquiry')} size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-white hover:text-secondary font-bold text-sm shadow-xl transition-all">
                    Expedition Planen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="flex justify-between gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/20 hover:text-primary transition-colors border border-white/5 h-10 rounded-xl">
                      <Download className="w-3 h-3" /> PDF Itinerary
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-white/20 hover:text-primary transition-colors border border-white/5 rounded-xl">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>

              {/* Expert Advisory Card */}
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50 text-center space-y-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/10 mx-auto">
                  <img src="https://picsum.photos/seed/expert/200/200" alt="Specialist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary uppercase tracking-widest text-[9px] mb-1">Persönliche Beratung</h4>
                  <p className="font-headline font-bold text-xl">Samson Kyashama</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold">Gründer & Safari-Experte</p>
                </div>
                <div className="space-y-2">
                  <a href="tel:+493022608080" className="flex items-center justify-between p-3 bg-muted/30 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all group">
                    <span className="opacity-60 group-hover:opacity-100">Phone</span>
                    <span>+49 30 22608080</span>
                  </a>
                  <a href="mailto:info@serengetidreams.com" className="flex items-center justify-between p-3 bg-muted/30 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all group">
                    <span className="opacity-60 group-hover:opacity-100">E-Mail</span>
                    <span className="truncate max-w-[150px]">info@serengeti...</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Global Contact Section */}
      <div ref={inquiryRef}>
        <ContactSection />
      </div>

      {/* Mobile-Only Sticky Bottom Bar (Best Phone Practice) */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-4 pointer-events-none">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-4 flex items-center justify-between shadow-2xl border border-primary/10"
        >
          <div className="flex flex-col pl-4">
            <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-[0.2em] mb-0.5">Ab Preis</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-foreground">€{pkg.startingPrice?.toLocaleString()}</span>
              <span className="text-[9px] text-muted-foreground font-light">/ pp</span>
            </div>
          </div>
          <Button onClick={() => scrollTo('inquiry')} className="rounded-2xl h-14 px-8 bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-xl">
            Reise Anfragen <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
