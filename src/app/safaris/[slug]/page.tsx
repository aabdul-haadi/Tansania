
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
  ShieldCheck,
  Users,
  Map as MapIcon,
  Tent,
  Coffee,
  Info
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
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Synchronizing Expedition Data...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl font-headline font-bold mb-4">Package Not Found</h2>
        <p className="text-muted-foreground mb-8 italic">This path is currently unmapped.</p>
        <Button asChild className="rounded-full px-8 h-12">
          <Link href="/safaris">Back to Catalog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen pb-20">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Modern Compact Hero */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-end overflow-hidden">
        <Image 
          src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
          alt={pkg.title} 
          fill 
          priority
          className="object-cover"
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcfb] via-black/20 to-black/40" />
        
        <div className="container relative z-10 mx-auto px-4 pb-12 md:pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
                {pkg.subtitle || 'Traumabenteuer in Afrika!'}
              </Badge>
              <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl">
                {pkg.title}
              </h1>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white">{pkg.durationDays} Tage Erlebnisreise</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-xl">
                  <span className="text-2xl font-bold text-secondary">ab {pkg.startingPrice?.toLocaleString()} €</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Grid & Intro */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.highlights?.map((h: string, i: number) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-4xl font-bold leading-tight text-secondary">
                {pkg.durationDays} Tage Pauschalreise Tansania - <br />
                <span className="text-primary italic">Safari im Norden und Badeurlaub</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {pkg.description}
              </p>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-secondary text-white p-8 md:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Quick Inquiry</span>
                    <h3 className="font-headline text-3xl font-bold">Jetzt Reise Anfragen</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-xs font-light text-white/60">Teilnehmer</span>
                      <span className="font-bold text-sm">min. auf Anfrage – max. 8</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-xs font-light text-white/60">Reisezeitraum</span>
                      <span className="font-bold text-sm">Ganzjährig 2026-2027</span>
                    </div>
                  </div>

                  <Link href="#contact-form" className="block">
                    <Button size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-white hover:text-secondary text-white font-bold transition-all group">
                      Expedition Planen <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <button className="flex items-center gap-3 w-full justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors">
                    <Download className="w-4 h-4" /> Reiseroute als PDF laden
                  </button>
                </div>
              </div>

              {/* Expert Card */}
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Persönliche Beratung</h4>
                <div className="space-y-6">
                  <a href="tel:+493022608080" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary">+49 30 22608080</p>
                      <p className="text-[10px] text-muted-foreground uppercase">Mo.-Fr. 10-18 Uhr</p>
                    </div>
                  </a>
                  <a href="mailto:info@serengetidreams.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary">E-Mail senden</p>
                      <p className="text-[10px] text-muted-foreground uppercase">24h Rückmeldung</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Narrative Itinerary Timeline */}
      <section className="py-20 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Ihr Reiseverlauf</span>
            <h2 className="font-headline text-4xl md:text-7xl font-bold text-secondary">Tag für Tag <span className="text-primary italic">ins Glück</span></h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <div className="space-y-32 relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-primary/10 hidden lg:block" />

            {pkg.itinerary?.map((day: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col gap-12 lg:gap-24 items-center",
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
              >
                {/* Day Visual */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-2xl group border-8 border-white">
                    <Image 
                      src={day.img || `https://picsum.photos/seed/safari-${idx}/800/600`} 
                      alt={day.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-8 left-8 bg-primary text-white px-6 py-2 rounded-full shadow-xl">
                      <span className="font-bold text-xs uppercase tracking-widest">Tag {day.day}</span>
                    </div>
                  </div>
                </div>

                {/* Day Content */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                      <MapPin className="w-3 h-3" /> {day.location || 'Tansania'}
                    </div>
                    <h3 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight">
                      {day.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    {day.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                    <Badge variant="outline" className="bg-primary/5 border-primary/10 text-primary uppercase font-bold text-[9px] tracking-widest px-3 py-1">
                      {day.accommodation || 'Premium Lodge'}
                    </Badge>
                    {day.stats && (
                      <Badge variant="outline" className="bg-secondary/5 border-secondary/10 text-secondary uppercase font-bold text-[9px] tracking-widest px-3 py-1">
                        {day.stats}
                      </Badge>
                    )}
                  </div>

                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mx-auto lg:mx-0">
                    <MapIcon className="w-3.5 h-3.5" /> Auf Karte anzeigen
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lodges Selection */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-3 block">Unterkünfte</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Wo Träume <br /><span className="text-primary italic">Zuhause sind</span></h2>
          </div>
          <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs border-l-2 border-primary/20 pl-6">
            Handverlesene Lodges und Strandhotels, die Luxus und Authentizität vereinen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'ashura', name: 'Ashura Planet Hotel', tag: 'Arusha Boutique', img: 'https://picsum.photos/seed/h1/600/800' },
            { id: 'funbeach', name: 'Funbeach Hotel', tag: 'Sansibar Lifestyle', img: 'https://picsum.photos/seed/h2/600/800' },
            { id: 'nugiwi', name: 'Nugiwi Hotel', tag: 'Luxury Beach Resort', img: 'https://picsum.photos/seed/h3/600/800' }
          ].map((hotel, i) => (
            <motion.div 
              key={hotel.id}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl bg-muted"
            >
              <Image src={hotel.img} alt={hotel.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <Badge className="bg-primary text-white border-none mb-3 px-3 py-1 text-[9px] uppercase tracking-widest font-bold">{hotel.tag}</Badge>
                <h4 className="text-white text-2xl font-headline font-bold leading-tight">{hotel.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map & Support Component */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Expedition Route</span>
                <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">Ihre Reise <br /><span className="text-primary italic">auf der Karte</span></h2>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Die 13-tägige Safari-Route durch Tansania – von den Ausläufern des Kilimanjaro bis zu den weißen Stränden Sansibars.
                </p>
              </div>
              <div className="aspect-video bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center p-12">
                <MapIcon className="w-20 h-20 text-primary opacity-20" />
                <p className="absolute text-[10px] font-bold uppercase tracking-widest text-white/40">Interaktive Karte wird geladen...</p>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl">
              <div className="space-y-8 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-3xl font-bold mb-4">Fragen zur Route?</h3>
                  <p className="text-white/60 font-light leading-relaxed mb-8">
                    Unsere Safari-Experten in Kairo und Arusha stehen Ihnen für eine individuelle Anpassung der Reise zur Verfügung.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-14 rounded-2xl border-white/20 text-white hover:bg-white hover:text-secondary font-bold">Rückruf anfordern</Button>
                  <Button className="h-14 rounded-2xl bg-primary text-white font-bold">WhatsApp Expert</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Contact Section */}
      <div id="contact-form" className="mt-20">
        <div className="container mx-auto px-4 max-w-6xl text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary">Starten Sie Ihr <span className="text-primary italic">Abenteuer</span></h2>
          <p className="text-muted-foreground mt-4 font-light">Senden Sie uns eine unverbindliche Anfrage.</p>
        </div>
        {/* The ContactSection component is assumed to be handled globally or imported if needed */}
      </div>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-4 pointer-events-none">
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
          <Link href="#contact-form">
            <Button size="lg" className="rounded-2xl h-14 px-8 bg-primary text-white font-bold text-sm shadow-xl">
              Anfragen <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
