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
        <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
          <Compass className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="font-headline text-2xl font-bold mb-3">Expedition nicht gefunden</h2>
        <Button asChild className="rounded-xl h-12 px-8 font-bold shadow-xl"><Link href="/safaris">Katalog</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
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
          
          <main className="lg:col-span-8 space-y-16 md:space-y-40">
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

            <section ref={itineraryRef} className="space-y-12">
              <div className="text-center md:text-left">
                <h3 className="font-headline text-3xl md:text-7xl font-bold text-secondary uppercase">Das <span className="text-primary">Journal</span></h3>
              </div>

              <div className="space-y-8 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-muted hidden md:block" />

                {(pkg.itineraryDays || []).map((day: any, idx: number) => (
                  <motion.div key={idx} className="group relative md:pl-20">
                    <Card className="bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-sm border border-border/50">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-[40%] aspect-video md:aspect-auto relative overflow-hidden">
                          <Image src={day.img || `https://picsum.photos/seed/day-${idx}/800/600`} alt={day.title} fill className="object-cover" />
                          <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-[8px] font-bold">Tag {day.day || idx + 1}</div>
                        </div>
                        <div className="p-6 md:p-10 md:w-[60%] space-y-4">
                          <div className="flex items-center gap-2 text-primary font-bold text-[8px] uppercase tracking-widest">
                            <MapPin className="w-3 h-3" /> {day.location}
                          </div>
                          <h4 className="font-headline text-lg md:text-3xl font-bold text-secondary uppercase leading-tight">{day.title}</h4>
                          <p className="text-muted-foreground font-light leading-relaxed text-xs md:text-base">{day.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
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