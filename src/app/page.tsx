"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageSquare, ShieldCheck, Heart, Map, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
import { ContactSection } from '@/components/shared/ContactSection';

export default function Home() {
  const highlights = [
    { title: "Sansibar Küste", desc: "Makellose weiße Sandstrände und historische Gewürzküste.", img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200', link: "/destinations/zanzibar", hint: "zanzibar beach" },
    { title: "Serengeti Ebenen", desc: "Erleben Sie die legendäre Große Tierwanderung am Horizont.", img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200', link: "/destinations/serengeti", hint: "serengeti wildlife" },
    { title: "Ngorongoro Krater", desc: "Ein natürliches Amphitheater der Wildnis in einem Vulkan.", img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200', link: "/destinations/ngorongoro", hint: "ngorongoro crater" },
    { title: "Tarangire Giganten", desc: "Heimat riesiger Affenbrotbäume und großer Elefantenherden.", img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200', link: "/destinations/tarangire", hint: "tarangire elephants" },
    { title: "Kilimandscharo", desc: "Das Dach Afrikas, majestätisch über den Wolken.", img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200', link: "/destinations/kilimanjaro", hint: "mount kilimanjaro" },
  ];

  return (
    <div className="relative">
      {/* 500+ Page Infrastructure Hero */}
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Serengeti Dreams Master Hero" 
          fill 
          priority 
          className="object-cover brightness-50 scale-105"
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[11px] font-black uppercase tracking-[0.4em] mb-8">
              <Sparkles className="w-3 h-3" /> Prestige Safari Registry
            </div>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
              TANSANIA <br /><span className="text-primary">MASTER</span>
            </h1>
            
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/safaris" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-12 h-16 md:h-20 font-black text-xs md:text-sm uppercase tracking-[0.3em] shadow-2xl border-none">
                  Katalog Erkunden
                </Button>
              </Link>
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full px-12 h-16 md:h-20 font-black text-xs md:text-sm uppercase tracking-[0.3em] border-white/20 text-white hover:bg-white hover:text-secondary backdrop-blur-md">
                  Reise Designen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Registry Bar */}
      <section className="py-8 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: "Sicher Buchen" },
              { icon: Heart, label: "Nachhaltigkeit" },
              { icon: Map, label: "8 Country Hubs" },
              { icon: Clock, label: "24/7 Support" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <item.icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseNarrative />

      {/* Scale Hub: National Parks */}
      <section className="py-16 md:py-32 bg-muted/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-registry mb-4 block">Destination Portfolio</span>
              <h2 className="font-headline text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                Erkunden Sie die <br /><span className="text-primary">Nationalparks</span>
              </h2>
            </div>
            <Link href="/national-parks">
              <Button variant="outline" className="rounded-xl px-8 h-12 md:h-14 text-[11px] font-black uppercase tracking-widest border-muted">
                Alle Parks ansehen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.slice(0, 3).map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-xl bg-secondary"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" data-ai-hint={item.hint} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 leading-tight">{item.title}</h3>
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest leading-relaxed mb-6 line-clamp-2">{item.desc}</p>
                  <Link href={item.link}>
                    <Button variant="outline" className="w-full rounded-xl border-white/20 text-white font-black text-[11px] uppercase h-12 md:h-14 hover:bg-primary hover:border-primary">
                      Park Erleben
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
      <ContactSection />
    </div>
  );
}
