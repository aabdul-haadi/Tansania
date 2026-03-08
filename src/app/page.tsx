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

  const heroImg = PlaceHolderImages.find(img => img.id === 'serengeti-hero');
  const zanzibarImg = PlaceHolderImages.find(img => img.id === 'zanzibar-beach');
  const kiliImg = PlaceHolderImages.find(img => img.id === 'kilimanjaro-summit');
  const safariImg = PlaceHolderImages.find(img => img.id === 'safari-jeep');

  const highlights = [
    { title: "Sansibar Küste", desc: "Makellose weiße Sandstrände und historische Gewürzküste.", img: zanzibarImg?.imageUrl || 'https://picsum.photos/seed/zanzibar/1200/800', link: "/destinations/zanzibar", hint: "zanzibar beach" },
    { title: "Serengeti Ebenen", desc: "Erleben Sie die legendäre Große Tierwanderung am Horizont.", img: safariImg?.imageUrl || 'https://picsum.photos/seed/serengeti/1200/800', link: "/destinations/serengeti", hint: "serengeti wildlife" },
    { title: "Ngorongoro Krater", desc: "Ein natürliches Amphitheater der Wildnis in einem Vulkan.", img: 'https://picsum.photos/seed/crater/1200/800', link: "/destinations/ngorongoro", hint: "ngorongoro crater" },
    { title: "Tarangire Giganten", desc: "Heimat riesiger Affenbrotbäume und großer Elefantenherden.", img: 'https://picsum.photos/seed/tarangire/1200/800', link: "/destinations/tarangire", hint: "tarangire elephants" },
    { title: "Kilimandscharo", desc: "Das Dach Afrikas, majestätisch über den Wolken.", img: 'https://picsum.photos/seed/kili/1200/800', link: "/destinations/kilimanjaro", hint: "mount kilimanjaro" },
  ];

  return (
    <div className="relative">
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <HeroBackgroundSlider 
          images={[
            { src: heroImg?.imageUrl || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920', hint: "serengeti safari" },
            { src: zanzibarImg?.imageUrl || 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1920', hint: "zanzibar beach" },
            { src: kiliImg?.imageUrl || 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920', hint: "mount kilimanjaro" }
          ]} 
        />
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] uppercase tracking-tighter">
              Die Seele der <br />
              <span className="text-primary">Serengeti</span>
            </h1>

            <div className="max-w-md md:max-w-xl mx-auto relative group">
              <div className="relative flex items-center bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden h-12 md:h-16">
                <div className="pl-4 md:pl-6 text-primary shrink-0">
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Wohin soll die Reise gehen?"
                  className="h-full border-none bg-transparent text-secondary font-bold placeholder:text-muted-foreground/50 text-xs md:text-sm focus-visible:ring-0"
                />
                <Link href="/itinerary-builder" className="pr-2">
                  <Button className="h-8 md:h-12 rounded-lg md:rounded-xl px-3 md:px-4 gap-2 hidden sm:flex text-[8px] md:text-[9px] font-black uppercase">
                    AI Planer
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center gap-3 mt-3 md:mt-4">
                {['Migration', 'Big Five', 'Sansibar'].map(tag => (
                  <button key={tag} onClick={() => setSearchQuery(tag)} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                    # {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-10">
              <Link href="/safaris" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-8 h-12 md:h-14 text-[9px] md:text-[10px] font-bold shadow-xl transition-all hover:scale-105 uppercase tracking-[0.2em]">
                  Katalog ansehen
                </Button>
              </Link>
              <Link href="/trip-advisor" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full rounded-full px-8 h-12 md:h-14 text-[9px] md:text-[10px] font-bold border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all bg-black/20 uppercase tracking-[0.2em]"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-2" /> AI Beratung
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-20">
          <span className="text-[8px] uppercase tracking-[0.3em] font-black">Entdecken</span>
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent" 
          />
        </div>
      </section>

      <section className="py-6 md:py-10 bg-white border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center">
            {[
              { icon: ShieldCheck, label: "Sicher Reisen" },
              { icon: Heart, label: "Nachhaltige Touren" },
              { icon: Map, label: "Private Guides" },
              { icon: Clock, label: "24/7 Service" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5 md:gap-2.5 group">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[8px] md:text-[9px] font-bold tracking-wider text-muted-foreground uppercase text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseNarrative />

      <section className="py-12 md:py-20 relative overflow-hidden transition-colors duration-1000">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={tanzaniaIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src={highlights[tanzaniaIndex].img} 
                alt="Background" 
                fill 
                className="object-cover opacity-5 blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-background/90" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Carousel setApi={setTanzaniaApi} opts={{ align: "start", loop: true }} className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
              <div className="max-w-2xl text-left">
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2 block">Exklusive Reiseziele</span>
                <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight text-foreground uppercase">Das Beste von Tansania</h2>
              </div>
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 h-8 w-8 md:h-10 md:w-10 border-secondary/20 hover:bg-secondary hover:text-white transition-all rounded-full" />
                <CarouselNext className="static translate-y-0 h-8 w-8 md:h-10 md:w-10 border-secondary/20 hover:bg-secondary hover:text-white transition-all rounded-full" />
              </div>
            </div>
            <CarouselContent className="-ml-4 md:-ml-6">
              {highlights.map((item, idx) => (
                <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2">
                  <motion.div whileHover={{ y: -5 }} className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-xl h-full bg-muted">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" data-ai-hint={item.hint} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
                      <h3 className="text-white text-xl md:text-2xl font-headline font-bold mb-1 md:mb-2 uppercase">{item.title}</h3>
                      <p className="text-white/70 mb-4 md:mb-6 max-w-sm text-[8px] md:text-[10px] font-bold leading-relaxed uppercase tracking-wider">{item.desc}</p>
                      <Link href={item.link}>
                        <Button className="rounded-full px-5 h-8 md:h-10 font-bold shadow-xl text-[8px] md:text-[9px] uppercase tracking-widest">Region erleben</Button>
                      </Link>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-8 md:mt-16 flex justify-center">
              <Link href="/safaris" className="group flex items-center gap-2 text-secondary font-bold text-xs md:text-sm hover:text-primary transition-all uppercase tracking-widest">
                Alle Regionen <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
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
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={images[index].src} alt="Hero Background" fill className="object-cover" priority data-ai-hint={images[index].hint} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10" />
    </div>
  );
}