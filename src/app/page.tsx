"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Map, Clock, Sparkles, Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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

export default function Home() {
  const [tanzaniaApi, setTanzaniaApi] = useState<CarouselApi>();
  const [tanzaniaIndex, setTanzaniaIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!tanzaniaApi) return;
    tanzaniaApi.on("select", () => {
      setTanzaniaIndex(tanzaniaApi.selectedScrollSnap());
    });
  }, [tanzaniaApi]);

  const highlights = [
    { title: "Sansibar Küste", desc: "Makellose weiße Sandstrände und historische Gewürzküste.", img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200', link: "/destinations/zanzibar", hint: "zanzibar beach" },
    { title: "Serengeti Ebenen", desc: "Erleben Sie die legendäre Große Tierwanderung am Horizont.", img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200', link: "/destinations/serengeti", hint: "serengeti wildlife" },
    { title: "Ngorongoro Krater", desc: "Ein natürliches Amphitheater der Wildnis in einem Vulkan.", img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200', link: "/destinations/ngorongoro", hint: "ngorongoro crater" },
    { title: "Tarangire Giganten", desc: "Heimat riesiger Affenbrotbäume und großer Elefantenherden.", img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200', link: "/destinations/tarangire", hint: "tarangire elephants" },
    { title: "Kilimandscharo", desc: "Das Dach Afrikas, majestätisch über den Wolken.", img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200', link: "/destinations/kilimanjaro", hint: "mount kilimanjaro" },
  ];

  return (
    <div className="relative font-bold">
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroBackgroundSlider 
          images={[
            { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920', hint: "serengeti safari" },
            { src: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1920', hint: "zanzibar beach" },
            { src: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920', hint: "mount kilimanjaro" }
          ]} 
        />
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1] uppercase tracking-tighter shadow-sm">
              Die Seele der <br />
              <span className="text-primary">Serengeti</span>
            </h1>

            <div className="max-w-md md:max-w-lg mx-auto relative group px-2">
              <div className="relative flex items-center bg-white rounded-xl shadow-2xl overflow-hidden h-12 md:h-14">
                <div className="pl-4 text-primary shrink-0">
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Wohin soll die Reise gehen?"
                  className="h-full border-none bg-transparent text-secondary font-bold placeholder:text-muted-foreground/50 text-[11px] md:text-sm focus-visible:ring-0"
                />
                <Link href="/itinerary-builder" className="pr-2">
                  <Button className="h-8 md:h-10 rounded-lg px-3 gap-2 hidden sm:flex text-[8px] md:text-[9px] font-black uppercase">
                    AI Planer
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center gap-3 mt-3">
                {['Migration', 'Big Five', 'Sansibar'].map(tag => (
                  <button key={tag} onClick={() => setSearchQuery(tag)} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/80 hover:text-primary transition-colors">
                    # {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
              <Link href="/safaris" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-10 h-12 md:h-14 text-[9px] md:text-[10px] font-bold shadow-xl uppercase tracking-widest">
                  Katalog ansehen
                </Button>
              </Link>
              <Link href="/trip-advisor" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full rounded-full px-10 h-12 md:h-14 text-[9px] md:text-[10px] font-bold border-white/20 text-white hover:bg-white/10 backdrop-blur-md bg-black/20 uppercase tracking-widest"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-2" /> AI Beratung
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Density Trust Bar */}
      <section className="py-4 md:py-6 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {[
              { icon: ShieldCheck, label: "Sicher Reisen" },
              { icon: Heart, label: "Nachhaltigkeit" },
              { icon: Map, label: "Private Guides" },
              { icon: Clock, label: "24/7 Support" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 group">
                <item.icon className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-muted-foreground uppercase text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseNarrative />

      {/* Compact Destinations Carousel */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-muted/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <Carousel setApi={setTanzaniaApi} opts={{ align: "start", loop: true }} className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div className="max-w-xl">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1 block">Exklusive Reiseziele</span>
                <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight uppercase">Das Beste von Tansania</h2>
              </div>
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 h-9 w-9 border-secondary/20 hover:bg-secondary hover:text-white transition-all rounded-full" />
                <CarouselNext className="static translate-y-0 h-9 w-9 border-secondary/20 hover:bg-secondary hover:text-white transition-all rounded-full" />
              </div>
            </div>
            <CarouselContent className="-ml-4">
              {highlights.map((item, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div whileHover={{ y: -4 }} className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg h-full bg-muted">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" data-ai-hint={item.hint} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-6 md:p-10 flex flex-col justify-end">
                      <h3 className="text-white text-xl md:text-3xl font-headline font-bold mb-1 uppercase">{item.title}</h3>
                      <p className="text-white/70 mb-4 max-w-xs text-[9px] md:text-xs font-bold leading-relaxed uppercase tracking-widest">{item.desc}</p>
                      <Link href={item.link}>
                        <Button className="rounded-xl px-6 h-9 md:h-11 font-bold shadow-xl text-[9px] uppercase tracking-widest">Region erleben</Button>
                      </Link>
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
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={images[index].src} alt="Hero Background" fill className="object-cover" priority data-ai-hint={images[index].hint} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
}