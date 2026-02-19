
"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Plane, 
  Camera, 
  Heart,
  MessageSquare,
  Download,
  Phone,
  Mail,
  Compass,
  Star,
  Zap,
  Waves
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
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Accessing the Archive...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl font-headline font-bold mb-4">Package Not Found</h2>
        <p className="text-muted-foreground mb-8 italic">This part of the savannah seems to be uncharted.</p>
        <Button asChild className="rounded-full px-8 h-12 bg-secondary text-white">
          <Link href="/safaris">Return to Catalog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen pb-32 overflow-x-hidden">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Unique Immersive Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <Image 
          src={pkg.itinerary?.[5]?.img || 'https://picsum.photos/seed/safari-hero/1920/1080'} 
          alt={pkg.title} 
          fill 
          priority
          className="object-cover"
          data-ai-hint="serengeti migration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcfb] via-black/20 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 pb-12 md:pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-primary text-secondary border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-xl">
                {pkg.subtitle || 'Exklusive Erlebnisreise'}
              </Badge>
              <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
                {pkg.title.split(' - ')[0]} <br />
                <span className="text-primary italic">in Afrika</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 md:gap-8 text-white/90">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold">{pkg.durationDays} Tage Expedition</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                  <Plane className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold">Inkl. Intl. Flug</span>
                </div>
                <div className="flex items-center gap-2 bg-white text-secondary px-4 py-2 rounded-2xl shadow-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest mr-1 opacity-60">Ab</span>
                  <span className="text-xl font-bold">{pkg.startingPrice.toLocaleString()} €</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section - Compact & Informative */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
                Ein Abenteuer, das <br />
                <span className="text-primary italic">alle Sinne weckt</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {pkg.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.highlights?.map((h: string, i: number) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-border/50 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-sm text-secondary">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-secondary text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                  <Compass className="w-8 h-8 text-primary" />
                  <h3 className="font-headline text-2xl font-bold">Ihre Route im Blick</h3>
                </div>
                <div className="space-y-6">
                  {['Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Zanzibar'].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-primary group-hover:text-secondary transition-all">
                        {i + 1}
                      </div>
                      <span className="text-sm font-bold tracking-wide uppercase">{loc}</span>
                      {i < 4 && <ChevronRight className="w-4 h-4 ml-auto text-white/20" />}
                    </div>
                  ))}
                </div>
                <Button className="w-full h-14 rounded-2xl bg-primary text-secondary font-bold text-base shadow-xl hover:scale-[1.02] transition-transform">
                  <Download className="w-4 h-4 mr-2" /> Reiseroute PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Itinerary Section - Timeline Design */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 px-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Tag für Tag</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Ihre Reise <span className="text-primary italic text-2xl md:text-6xl block md:inline">Schritt für Schritt</span></h2>
          </div>

          <div className="space-y-24 relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-muted hidden lg:block" />

            {pkg.itinerary?.map((day: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col gap-8 md:gap-16 items-center",
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
              >
                <div className="w-full lg:w-1/2 relative px-4 md:px-0">
                  <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                    <Image 
                      src={day.img || `https://picsum.photos/seed/safari-${idx}/800/600`} 
                      alt={day.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
                      <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Tag {day.day}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur px-4 py-1.5 rounded-full text-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{day.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4 px-6 md:px-0 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                    <div className="w-8 h-px bg-primary hidden lg:block" />
                    <span>Tag {day.day} Expedition</span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-secondary leading-tight">{day.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-lg italic">
                    "{day.desc}"
                  </p>
                  <div className="flex gap-2 md:gap-4 pt-4 justify-center lg:justify-start">
                    <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-widest border-muted text-muted-foreground px-3">Full Board</Badge>
                    <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-widest border-muted text-muted-foreground px-3">Private Guide</Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lodges Showcase - Horizontal Carousel for Phones */}
      <section className="py-16 md:py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Sanctuaries in the Wild</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Wohnen wie <br /><span className="text-primary italic">im Paradies</span></h2>
              <p className="text-white/40 text-xs font-light mt-4 max-w-[300px] mx-auto md:mx-0">Handverlesene Lodges und Strandresorts für höchste Ansprüche.</p>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {[
                { name: 'Ashura Planet Hotel', tag: 'Boutique', img: 'https://picsum.photos/seed/h1/600/800' },
                { name: 'Funbeach Hotel', tag: 'Lifestyle', img: 'https://picsum.photos/seed/h2/600/800' },
                { name: 'Nugiwi Hotel', tag: 'Luxury', img: 'https://picsum.photos/seed/h3/600/800' }
              ].map((hotel, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%] md:basis-1/3">
                  <div className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <Badge className="bg-primary text-secondary mb-2 uppercase tracking-widest font-bold text-[8px]">{hotel.tag}</Badge>
                      <h4 className="text-xl font-bold font-headline">{hotel.name}</h4>
                      <Link href="#" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold text-white/60 group-hover:text-primary transition-colors mt-2">
                        Details ansehen <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
              <CarouselNext className="static translate-y-0 h-10 w-10 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 leading-tight">Häufig gestellte <br className="md:hidden"/><span className="text-primary italic">Fragen</span></h2>
          <p className="text-muted-foreground font-light text-sm">Alles, was Sie für Ihre 15-tägige Reise wissen müssen.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {pkg.faqs?.map((faq: any, i: number) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 py-1 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="font-bold text-base md:text-lg hover:no-underline hover:text-primary text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 italic text-xs md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Compact Support CTA */}
        <div className="mt-16 md:mt-24 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-muted/30 border border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3">
              <h3 className="font-headline text-2xl md:text-4xl font-bold leading-tight text-secondary">Haben Sie <br className="hidden md:block" />weitere Fragen?</h3>
              <p className="text-muted-foreground text-sm font-light max-w-xs mx-auto md:mx-0">Unsere Experten in Kairo und Arusha beraten Sie persönlich.</p>
            </div>
            
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <div className="flex gap-3 justify-center md:justify-end">
                <Button size="icon" className="w-12 h-12 rounded-2xl bg-white border border-border shadow-sm text-secondary hover:bg-secondary hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button size="icon" className="w-12 h-12 rounded-2xl bg-white border border-border shadow-sm text-secondary hover:bg-secondary hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
              <Button size="lg" className="rounded-xl px-8 h-14 font-bold bg-primary text-secondary shadow-lg shadow-primary/20 w-full sm:w-auto">
                Rückruf anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto bg-secondary/95 backdrop-blur-xl rounded-[2rem] p-4 flex items-center justify-between shadow-2xl border border-white/10"
        >
          <div className="flex flex-col pl-4">
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-none mb-1">Ab Preis</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white">{pkg.startingPrice?.toLocaleString()} €</span>
              <span className="text-[8px] text-white/40 font-light">/ Person</span>
            </div>
          </div>
          <Button asChild size="lg" className="rounded-2xl h-12 px-8 bg-primary text-secondary font-bold shadow-xl">
            <Link href={`/trip-planner?package=${pkg.id}`}>
              Anfragen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
