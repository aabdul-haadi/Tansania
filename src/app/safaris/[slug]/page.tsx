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
  Calendar,
  Waves,
  Mountain,
  Heart,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
        <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
          <Compass className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="font-headline text-2xl font-bold mb-3">Expedition nicht gefunden</h2>
        <Button asChild className="rounded-xl h-12 px-8 font-bold shadow-xl"><Link href="/safaris">Katalog</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden flex flex-col md:flex-row bg-[#0a0a0a]">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <Image 
            src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
            alt={pkg.title} 
            fill 
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
        </div>
        
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-20 relative z-10">
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 md:space-y-8 max-w-xl text-center md:text-left">
            <div className="space-y-3">
              <Badge className="bg-primary text-white border-none px-4 py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                {pkg.subtitle || 'Traumabenteuer'}
              </Badge>
              <h1 className="font-headline text-3xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl uppercase">
                {pkg.title}
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest">
                 <Clock className="w-4 h-4 text-primary" /> {pkg.durationDays} Tage
               </div>
               <div className="flex items-center gap-2 bg-primary px-4 py-3 rounded-xl text-white font-bold text-[10px] uppercase tracking-widest shadow-xl">
                 <Zap className="w-4 h-4 text-white" /> ab €{pkg.startingPrice?.toLocaleString()}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-0 z-[40] bg-white/95 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
          <div className="flex gap-4 md:gap-12 h-full overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "h-full px-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
                  activeSection === item.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-10 px-6 text-[10px] shadow-lg">Anfrage</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-10 md:pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          <main className="lg:col-span-8 space-y-16 md:space-y-32">
            <section ref={overviewRef} className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] block">Das Erlebnis</span>
                <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary leading-tight uppercase">
                  {pkg.durationDays} Tage Tansania - <br /><span className="text-primary">Vom Nil zur Savanne</span>
                </h2>
                <div className="text-muted-foreground text-base md:text-xl font-light leading-relaxed border-l-2 border-primary/20 pl-6 py-1">
                  {pkg.description}
                </div>
              </div>
            </section>

            {/* Revamped Itinerary Section - 100% SS CLONE */}
            <section ref={itineraryRef} className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">Ihr Reiseverlauf</h2>
                <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-60">
                  Eine sorgfältig kuratierte Route durch die schönsten Regionen Tansanias
                </p>
              </div>

              <Card className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden">
                <CardContent className="p-4 md:p-10">
                  <Accordion type="single" collapsible className="w-full">
                    {(pkg.itineraryDays || []).map((day: any, idx: number) => (
                      <AccordionItem 
                        key={idx} 
                        value={`item-${idx}`} 
                        className="border-b border-border/50 last:border-none py-2"
                      >
                        <AccordionTrigger className="hover:no-underline py-6 group [&>svg]:hidden">
                          <div className="flex items-center gap-6 md:gap-10 w-full text-left">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 shadow-sm border border-[#F0EBE0]">
                              <span className="text-lg md:text-xl font-headline font-black text-[#8B735B]">
                                {day.day || idx + 1}
                              </span>
                            </div>
                            <div className="flex-grow min-w-0 pr-4">
                              <h4 className="font-headline text-sm md:text-xl font-bold text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                                {day.title}
                              </h4>
                              <p className="text-muted-foreground text-[10px] md:text-sm font-bold truncate mt-1 opacity-80">
                                {day.desc}
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#D1C4B2] group-data-[state=open]:rotate-90 transition-transform shrink-0" />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-10 pl-[72px] md:pl-[104px] pr-6">
                          <div className="space-y-6">
                            <div className="flex items-center gap-2 text-primary font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                              <MapPin className="w-3.5 h-3.5" /> {day.location}
                            </div>
                            <p className="text-muted-foreground text-sm md:text-base font-bold leading-relaxed uppercase tracking-tight">
                              {day.desc}
                            </p>
                            {day.img && (
                              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-border/50 mt-4">
                                <Image src={day.img} alt={day.title} fill className="object-cover" />
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            <section ref={hotelsRef} className="space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-xl">
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] block">Premium Residenzen</span>
                  <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary leading-tight uppercase">Die <span className="text-primary">Unterkünfte</span></h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(i => (
                  <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl bg-muted">
                    <img src={`https://picsum.photos/seed/hotel-${i}/800/1000`} alt="Lodge" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="text-primary font-bold text-[9px] uppercase tracking-widest mb-2">Luxury Camp</p>
                      <h4 className="text-2xl font-headline font-bold uppercase">Serengeti Heritage</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8 text-center">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Preis pro Person</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <h2 className="text-5xl font-bold font-headline text-white">€{pkg.startingPrice?.toLocaleString()}</h2>
                    </div>
                  </div>
                  <Button onClick={() => scrollTo('inquiry')} className="w-full h-14 rounded-xl bg-primary font-bold text-xs uppercase tracking-widest text-white shadow-xl">
                    Reise Planen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      <div ref={inquiryRef} className="pt-8">
        <ContactSection />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-3 pointer-events-none">
        <motion.div 
          initial={{ y: 50 }} animate={{ y: 0 }}
          className="pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-[1.5rem] p-3 flex items-center justify-between shadow-2xl border border-primary/10"
        >
          <div className="flex flex-col pl-3">
            <p className="text-[7px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Preis ab</p>
            <p className="text-xl font-bold text-secondary">€{pkg.startingPrice?.toLocaleString()}</p>
          </div>
          <Button onClick={() => scrollTo('inquiry')} className="rounded-xl h-12 px-6 bg-primary text-white font-bold text-[10px] uppercase tracking-widest shadow-xl">
            Anfragen <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function PackageSkeleton() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      <div className="h-[60vh] md:h-[90vh] bg-muted animate-pulse" />
      <div className="container mx-auto px-4 max-w-7xl pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}