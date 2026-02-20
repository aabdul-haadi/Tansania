"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Plane, 
  Camera, 
  Heart,
  Download,
  Phone,
  Mail,
  Compass,
  Zap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { cn } from '@/lib/utils';

export default function PackageDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const docRef = useMemoFirebase(() => (firestore && slug ? doc(firestore, 'packages', slug as string) : null), [firestore, slug]);
  const { data: pkg, isLoading } = useDoc(docRef);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Accessing the Expedition Archive...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl font-headline font-bold mb-4">Package Not Found</h2>
        <p className="text-muted-foreground mb-8 italic">This part of the savannah seems to be uncharted.</p>
        <Button asChild className="rounded-full px-8 h-12 bg-primary text-white">
          <Link href="/safaris">Return to Catalog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-32 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left shadow-lg" style={{ scaleX }} />

      {/* Immersive Cinematic Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <Image 
          src={pkg.itinerary?.[5]?.img || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
          alt={pkg.title} 
          fill 
          priority
          className="object-cover"
          data-ai-hint="serengeti migration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/10 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 pb-12 md:pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
                {pkg.subtitle || 'Exklusive Erlebnisreise'}
              </Badge>
              <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl">
                {pkg.title.split(' - ')[0]} <br />
                <span className="text-primary italic">in Afrika</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 md:gap-8">
                <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white">{pkg.durationDays} Tage Expedition</span>
                </div>
                <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl">
                  <Plane className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white">Inkl. Intl. Flug</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-1">Ab</span>
                  <span className="text-2xl font-bold text-foreground">{pkg.startingPrice?.toLocaleString()} €</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">
                Ein Abenteuer, das <br />
                <span className="text-primary italic">alle Sinne weckt</span>
              </h2>
              <p className="text-foreground/80 text-lg md:text-xl font-light leading-relaxed">
                {pkg.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.highlights?.map((h: string, i: number) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-border/50 group hover:border-primary/30 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-secondary text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold">Ihre Route</h3>
                </div>
                <div className="space-y-6 relative">
                  {['Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Zanzibar'].map((loc, i) => (
                    <div key={i} className="flex items-center gap-5 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold border border-white/5 group-hover:bg-primary group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <span className="text-sm font-bold tracking-widest uppercase">{loc}</span>
                      {i < 4 && <ChevronRight className="w-4 h-4 ml-auto text-white/20" />}
                    </div>
                  ))}
                </div>
                <Button className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-base shadow-xl hover:bg-primary/90">
                  <Download className="w-5 h-5 mr-3" /> Reiseroute PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Itinerary Timeline */}
      <section className="py-20 bg-white/50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-3 block">Tag für Tag</span>
            <h2 className="font-headline text-4xl md:text-7xl font-bold leading-tight text-foreground">Ihre Reise <span className="text-primary italic">Schritt für Schritt</span></h2>
          </div>

          <div className="space-y-24 relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-primary/10 hidden lg:block" />

            {pkg.itinerary?.map((day: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col gap-10 md:gap-20 items-center",
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                    <Image 
                      src={day.img || `https://picsum.photos/seed/safari-${idx}/800/600`} 
                      alt={day.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-8 left-8 bg-primary text-white px-5 py-2 rounded-full shadow-xl">
                      <span className="font-bold text-xs uppercase tracking-widest">Tag {day.day}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left px-4">
                  <div className="inline-flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-[0.3em]">
                    <div className="w-12 h-0.5 bg-primary hidden lg:block" />
                    <span>Tag {day.day} Expedition</span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-tight">{day.title}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed text-lg md:text-xl italic border-l-4 border-primary/20 pl-6">
                    "{day.desc}"
                  </p>
                  <div className="flex gap-3 pt-4 justify-center lg:justify-start">
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest border-primary/20 text-primary bg-primary/5">Full Board</Badge>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest border-primary/20 text-primary bg-primary/5">Private Guide</Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lodges Carousel */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-3 block">Sanctuaries in the Wild</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">Wohnen wie <br /><span className="text-primary italic">im Paradies</span></h2>
              <p className="text-white/40 text-sm font-light mt-6 tracking-wide">Handverlesene Lodges und Strandresorts für höchste Ansprüche.</p>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {[
                { name: 'Ashura Planet Hotel', tag: 'Boutique', img: 'https://picsum.photos/seed/h1/600/800' },
                { name: 'Funbeach Hotel', tag: 'Lifestyle', img: 'https://picsum.photos/seed/h2/600/800' },
                { name: 'Nugiwi Hotel', tag: 'Luxury', img: 'https://picsum.photos/seed/h3/600/800' }
              ].map((hotel, i) => (
                <CarouselItem key={i} className="pl-6 basis-[85%] md:basis-1/3">
                  <div className="group relative aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
                    <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <Badge className="bg-primary text-white mb-3 uppercase tracking-widest font-bold text-[9px] border-none">{hotel.tag}</Badge>
                      <h4 className="text-2xl font-bold font-headline leading-tight">{hotel.name}</h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 border-white/10 hover:bg-primary hover:text-white transition-all text-white rounded-full" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 border-white/10 hover:bg-primary hover:text-white transition-all text-white rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 md:py-32 container mx-auto px-4 max-w-5xl">
        <div className="p-8 md:p-16 rounded-[4rem] bg-white border border-primary/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
            <Sparkles className="w-64 h-64 text-primary" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative z-10">
            <div className="space-y-4">
              <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-foreground">Haben Sie <br className="hidden md:block" />weitere Fragen?</h3>
              <p className="text-muted-foreground text-lg font-light max-w-md">Unsere Experten in Kairo und Arusha beraten Sie persönlich.</p>
            </div>
            
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-2xl px-10 h-16 font-bold bg-primary text-white shadow-2xl shadow-primary/20 hover:scale-105 transition-transform text-base">
                Rückruf anfordern
              </Button>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="icon" variant="ghost" className="w-14 h-14 rounded-2xl bg-background border border-border hover:bg-primary/5 transition-colors"><Phone className="w-6 h-6 text-primary" /></Button>
                <Button size="icon" variant="ghost" className="w-14 h-14 rounded-2xl bg-background border border-border hover:bg-primary/5 transition-colors"><Mail className="w-6 h-6 text-primary" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-5 flex items-center justify-between shadow-2xl border border-primary/5"
        >
          <div className="flex flex-col pl-4">
            <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.2em] mb-1">Ab Preis</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">{pkg.startingPrice?.toLocaleString()} €</span>
              <span className="text-[10px] text-muted-foreground font-light">/ Person</span>
            </div>
          </div>
          <Button asChild size="lg" className="rounded-2xl h-14 px-10 bg-primary text-white font-bold text-sm shadow-xl shadow-primary/20">
            <Link href={`/trip-planner?package=${pkg.id}`}>
              Anfragen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}