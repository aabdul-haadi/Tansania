
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Map, Clock, Sparkles, Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SafariMap } from '@/components/sections/SafariMap';
import { ImmersiveReveal } from '@/components/sections/ImmersiveReveal';
import { CinematicQuote } from '@/components/sections/CinematicQuote';
import { Testimonials } from '@/components/sections/Testimonials';
import { KilimanjaroSummit } from '@/components/sections/KilimanjaroSummit';
import { ZanzibarEscape } from '@/components/sections/ZanzibarEscape';
import { SafariVideo } from '@/components/sections/SafariVideo';
import { FAQ } from '@/components/sections/FAQ';
import { ExpertiseNarrative } from '@/components/sections/ExpertiseNarrative';
import { MeetTheSpecialists } from '@/components/sections/MeetTheSpecialists';
import { AfricaVariety } from '@/components/sections/AfricaVariety';
import { Reiseblog } from '@/components/home/Reiseblog';

export default function Home() {
  const [tanzaniaApi, setTanzaniaApi] = useState<CarouselApi>();
  const [searchQuery, setSearchQuery] = useState('');

  const highlights = [
    { title: "Sansibar Küste", desc: "Makellose weiße Sandstrände und historische Gewürzküste.", img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200', link: "/destinations/zanzibar", hint: "zanzibar beach" },
    { title: "Serengeti Ebenen", desc: "Erleben Sie die legendäre Große Tierwanderung am Horizont.", img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200', link: "/destinations/serengeti", hint: "serengeti wildlife" },
    { title: "Ngorongoro Krater", desc: "Ein natürliches Amphitheater der Wildnis in einem Vulkan.", img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200', link: "/destinations/ngorongoro", hint: "ngorongoro crater" },
    { title: "Tarangire Giganten", desc: "Heimat riesiger Affenbrotbäume und großer Elefantenherden.", img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200', link: "/destinations/tarangire", hint: "tarangire elephants" },
    { title: "Kilimandscharo", desc: "Das Dach Afrikas, majestätisch über den Wolken.", img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200', link: "/destinations/kilimanjaro", hint: "mount kilimanjaro" },
  ];

  return (
    <div className="relative font-bold">
      {/* Dynamic Cinematic Hero */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <HeroBackgroundSlider 
          images={[
            { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920', hint: "serengeti safari" },
            { src: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1920', hint: "zanzibar beach" },
            { src: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920', hint: "mount kilimanjaro" }
          ]} 
        />
        <div className="container relative z-20 mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1] uppercase tracking-tighter">
              Die Seele der <br /><span className="text-primary">Serengeti</span>
            </h1>
            
            {/* Search Protocol */}
            <div className="max-w-md md:max-w-lg mx-auto relative px-2">
              <div className="relative flex items-center bg-white rounded-xl shadow-2xl overflow-hidden h-11 md:h-12 border border-border/50">
                <div className="pl-4 text-primary shrink-0"><Search className="w-4 h-4 md:w-5 md:h-5" /></div>
                <Input 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  placeholder="Wohin soll die Reise gehen?" 
                  className="h-full border-none bg-transparent text-secondary font-bold placeholder:text-muted-foreground/50 text-[10px] md:text-xs focus-visible:ring-0 uppercase tracking-widest" 
                  suppressHydrationWarning
                />
                <div className="pr-2">
                  <Button asChild className="h-7 md:h-8 rounded-lg px-3 gap-2 hidden sm:flex text-[7px] md:text-[8px] font-black uppercase shadow-none" variant="default" size="sm">
                    <Link href="/itinerary-builder">AI Planer</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8 h-11 md:h-12 text-[8px] md:text-[9px] font-bold shadow-xl uppercase tracking-widest border-none">
                <Link href="/safaris">Katalog ansehen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-11 md:h-12 text-[8px] md:text-[9px] font-bold border-white/20 text-white hover:bg-white/10 backdrop-blur-md bg-black/20 uppercase tracking-widest">
                <Link href="/trip-advisor"><MessageSquare className="w-3.5 h-3.5 mr-2" /> AI Beratung</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Registry Bar */}
      <section className="py-3 md:py-4 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {[{ icon: ShieldCheck, label: "Sicher Reisen" }, { icon: Heart, label: "Nachhaltigkeit" }, { icon: Map, label: "Private Guides" }, { icon: Clock, label: "24/7 Support" }].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 group">
                <item.icon className="w-3.5 h-3.5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[7px] md:text-[8px] font-bold tracking-widest text-muted-foreground uppercase text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseNarrative />

      {/* Highlights Registry */}
      <section className="py-8 md:py-12 relative overflow-hidden bg-muted/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <Carousel setApi={setTanzaniaApi} opts={{ align: "start", loop: true }} className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
              <div className="max-w-xl">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] mb-1 block">Exklusive Reiseziele</span>
                <h2 className="font-headline text-xl md:text-4xl font-bold leading-tight uppercase tracking-tighter">Das Beste von Tansania</h2>
              </div>
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 h-8 w-8 rounded-full border-muted" />
                <CarouselNext className="static translate-y-0 h-8 w-8 rounded-full border-muted" />
              </div>
            </div>
            <CarouselContent className="-ml-4">
              {highlights.map((item, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div whileHover={{ y: -4 }} className="relative aspect-[16/10] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden group shadow-lg h-full bg-muted border border-border/50">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" data-ai-hint={item.hint} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-6 md:p-8 flex flex-col justify-end">
                      <h3 className="text-white text-lg md:text-2xl font-headline font-bold mb-1 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-white/70 mb-3 max-w-xs text-[8px] md:text-[10px] font-bold leading-relaxed uppercase tracking-widest">{item.desc}</p>
                      <Button asChild className="rounded-lg px-5 h-8 md:h-9 font-bold shadow-xl text-[8px] uppercase tracking-widest border-none" variant="default" size="sm">
                        <Link href={item.link}>Region erleben</Link>
                      </Button>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <SafariMap />
      <AfricaVariety />
      <Reiseblog />
      <SafariVideo />
      <KilimanjaroSummit />
      <ZanzibarEscape />
      <MeetTheSpecialists />
      <ImmersiveReveal />
      <Testimonials />
      <CinematicQuote />
      <FAQ />
    </div>
  );
}

function HeroBackgroundSlider({ images }: { images: { src: string, hint: string }[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => { 
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 6000); 
    return () => clearInterval(timer); 
  }, [images.length]);
  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="popLayout">
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0">
          <Image src={images[index].src} alt="Hero" fill className="object-cover" priority data-ai-hint={images[index].hint} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
}
