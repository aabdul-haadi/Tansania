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
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/sections/ContactSection';

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

      {/* Cinematic Overlap Hero */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <Image 
          src={pkg.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'} 
          alt={pkg.title} 
          fill 
          priority
          className="object-cover"
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              {pkg.subtitle || 'Traumabenteuer in Afrika!'}
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {pkg.title}
            </h1>
            <div className="flex justify-center gap-4">
               <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 text-white font-bold text-sm">
                 <Clock className="w-5 h-5 text-primary" /> {pkg.durationDays} Tage
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Intro Section - Staggered UI */}
      <section className="relative -mt-20 z-20 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Narrative & Experience */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-2xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <Sparkles className="w-48 h-48 text-secondary" />
                </div>
                
                <div className="space-y-8 relative z-10">
                  <div className="space-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Expeditions-Highlight</span>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary leading-tight">
                      {pkg.durationDays} Tage Pauschalreise Tansania - <br />
                      <span className="text-primary italic text-2xl md:text-4xl block mt-2">Safari im Norden und Badeurlaub auf Sansibar</span>
                    </h2>
                  </div>

                  <div className="prose prose-xl max-w-none text-muted-foreground font-light leading-relaxed space-y-6 text-lg">
                    <p className="font-medium text-secondary/80">
                      Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise: Nach der Landung am Kilimanjaro International Airport werden Sie herzlich empfangen und fahren nach Arusha, wo Sie das wahre Tansania in Ihrem eigenen Tempo erleben können.
                    </p>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                    {pkg.highlights?.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-muted/20 rounded-2xl border border-border/50">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-bold text-xs uppercase tracking-widest text-secondary">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Itinerary Timeline */}
              <div className="space-y-16">
                <div className="text-center md:text-left space-y-2 px-4">
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Tag für Tag</span>
                  <h3 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Ihre <span className="text-primary italic">Reiseroute</span></h3>
                </div>

                <div className="space-y-24 relative">
                  <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px bg-primary/10" />

                  {pkg.itinerary?.map((day: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={cn(
                        "flex flex-col gap-10 items-start md:items-center relative pl-12 md:pl-0",
                        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      )}
                    >
                      {/* Day Node */}
                      <div className="absolute left-[10px] md:left-[50%] -translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(227,81,13,0.5)] z-10 border-4 border-white" />

                      {/* Visual Content */}
                      <div className="w-full md:w-1/2">
                        <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl group border-4 border-white">
                          <Image 
                            src={day.img || `https://picsum.photos/seed/day-${idx}/800/600`} 
                            alt={day.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                          />
                          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                            Tag {day.day}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                            <MapPin className="w-3 h-3" /> {day.location || 'Tansania'}
                          </div>
                          <h4 className="font-headline text-2xl md:text-3xl font-bold text-secondary leading-tight">
                            {day.title}
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed">
                          {day.desc}
                        </p>
                        {day.stats && (
                          <div className="pt-2">
                            <Badge variant="outline" className="bg-primary/5 border-primary/10 text-primary text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                              {day.stats}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Premium Sidebar Sticky */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Price & Booking Card */}
                <div className="bg-secondary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  <div className="relative z-10 space-y-10">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Pauschalpreis</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">€{pkg.startingPrice?.toLocaleString()}</span>
                        <span className="text-white/40 text-sm">/ p.P.</span>
                      </div>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-2 italic">Inklusive Internationaler Flug</p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { l: "Dauer", v: "15 Tage Rundreise" },
                        { l: "Teilnehmer", v: "Max. 8 Explorer" },
                        { l: "Zeitraum", v: "Ganzjährig 2026-2027" }
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-white/40">{stat.l}</span>
                          <span className="text-sm font-bold">{stat.v}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="#contact-form" className="block">
                      <Button size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-white hover:text-black font-bold text-lg shadow-xl transition-all group">
                        Expedition Planen <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1" />
                      </Button>
                    </Link>

                    <button className="flex items-center gap-3 w-full justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 hover:text-primary transition-colors">
                      <Download className="w-4 h-4" /> Reiseroute als PDF
                    </button>
                  </div>
                </div>

                {/* Local Specialist Card */}
                <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/10">
                      <img src="https://picsum.photos/seed/expert/200/200" alt="Expert" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary uppercase tracking-widest text-[10px] mb-1">Ihre Beratung</h4>
                      <p className="font-headline font-bold text-xl">Samson Kyashama</p>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold">Gründer & Tansania-Experte</p>
                    </div>
                    <div className="w-full space-y-3 pt-4 border-t">
                      <a href="tel:+493022608080" className="flex items-center justify-between text-xs font-bold text-secondary hover:text-primary transition-colors">
                        <span>Telefon</span>
                        <span>+49 30 22608080</span>
                      </a>
                      <a href="mailto:info@serengetidreams.com" className="flex items-center justify-between text-xs font-bold text-secondary hover:text-primary transition-colors">
                        <span>E-Mail</span>
                        <span>info@serengetidreams.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Lodges - Staggered Grid */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Rest & Recharge</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-secondary">Premium <span className="text-primary italic">Unterkünfte</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "Ashura Planet Hotel", l: "Arusha Boutique", i: "https://picsum.photos/seed/ashura/600/800" },
            { n: "Funbeach Hotel", l: "Sansibar Lifestyle", i: "https://picsum.photos/seed/fun/600/800" },
            { n: "Nugiwi Luxury", l: "Nungwi Beach", i: "https://picsum.photos/seed/nugi/600/800" }
          ].map((hotel, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src={hotel.i} alt={hotel.n} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <Badge className="bg-primary text-white border-none mb-3 px-3 py-1 text-[9px] uppercase tracking-widest font-bold">{hotel.l}</Badge>
                <h4 className="text-2xl font-headline font-bold leading-tight">{hotel.n}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />

      {/* Mobile Sticky Bar */}
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
              <span className="text-[10px] text-muted-foreground font-light">/ p.P.</span>
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
