
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Sun, 
  Wind, 
  Palmtree, 
  Compass, 
  Anchor, 
  Camera, 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  CheckCircle2,
  ChevronRight,
  Zap,
  Map
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const packages = [
  {
    id: '15-day-safari-zanzibar',
    tag: 'Bestselling',
    cat: 'SAFARI & ZANZIBAR',
    title: '15-day safari in Tanzania and Zanzibar',
    duration: '15-day round trip',
    accommodation: 'Premium Lodges & Hotels',
    groupSize: 'Max 8 participants',
    price: '5,399',
    highlights: ['Top National Parks Safari', 'Maasai village visit', 'Zanzibar Beaches & Diving', 'Spice Tour & Stone Town'],
    img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800'
  },
  {
    id: '13-day-safari-zanzibar',
    tag: 'All-Inclusive',
    cat: 'SAFARI & ZANZIBAR',
    title: '13-day safari & Zanzibar experience',
    duration: '13 days all-inclusive',
    accommodation: 'Comfortable Lodges & Resorts',
    groupSize: 'Max 10 participants',
    price: '3,699',
    highlights: ['Big Five game drives', 'Ngorongoro UNESCO Crater', 'Zanzibar Beaches & Diving', 'Stone Town City Tour'],
    img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800'
  },
  {
    id: '11-day-safari-zanzibar',
    tag: 'Short Trip',
    cat: 'SAFARI & ZANZIBAR',
    title: '11-Day Safari & Zanzibar Experience',
    duration: '11 days, complete package',
    accommodation: 'Lodges & beach hotels',
    groupSize: 'Max 8 participants',
    price: '2,999',
    highlights: ['Elephants in Tarangire', 'Serengeti Animal Migration', 'Ngorongoro Crater Tour', 'Zanzibar Beaches & Tours'],
    img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800'
  },
  {
    id: '12-day-family-safari',
    tag: 'Families',
    cat: 'FAMILY SAFARI',
    title: '12-day family safari Adventure',
    duration: '12 days all-inclusive',
    accommodation: 'Family Lodges & Camps',
    groupSize: 'Max 8 participants',
    price: '3,499',
    highlights: ['Big Five game drives', 'School visit in Karatu', 'Lake Manyara Safari', 'Child-friendly lodges'],
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800'
  },
  {
    id: '13-day-honeymoon-zanzibar',
    tag: 'Romance',
    cat: 'HONEYMOON',
    title: '13 days honeymoon – Romance & Safari',
    duration: '13 days luxury package',
    accommodation: 'Premium Lodges & Villas',
    groupSize: 'Max 6 participants',
    price: '3,899',
    highlights: ['Champagne at sunset', 'Private game drives', 'Zanzibar beach dinner', 'Hot air balloon Serengeti'],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  },
  {
    id: '7-day-zanzibar-only',
    tag: 'Island Only',
    cat: 'ZANZIBAR',
    title: '7 days in Zanzibar – Tropical Flair',
    duration: '7 days beach holiday',
    accommodation: 'Beach resorts & hotels',
    groupSize: 'Max 10 participants',
    price: '2,699',
    highlights: ['Stone Town City Tour', 'Explore spice plantations', 'Boat tour & snorkeling', 'Guided diving experience'],
    img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800'
  },
  {
    id: '12-day-camping-zanzibar',
    tag: 'Budget',
    cat: 'CAMPING SAFARI',
    title: '12-day camping safari & Zanzibar',
    duration: '12 days of adventure',
    accommodation: 'Tent camps & budget hotels',
    groupSize: 'Max 12 participants',
    price: '2,799',
    highlights: ['Camping in the Serengeti', 'Campfire under starry sky', 'Zanzibar\'s dream beaches', 'Spice & Boat Tour'],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  },
  {
    id: '13-day-kili-zanzibar',
    tag: 'Combination',
    cat: 'KILIMANJARO SAFARI',
    title: '13-day safari & Zanzibar – Kilimanjaro & Sea',
    duration: '13 days, all-inclusive',
    accommodation: 'Lodges & Beach Resorts',
    groupSize: 'Max 8 participants',
    price: '4,699',
    highlights: ['Safari in top national parks', 'Kilimanjaro up close', 'Zanzibar: Beach & Culture', 'Perfect balance'],
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  }
];

export default function ZanzibarPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Immersive Header */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1920" 
          alt="Zanzibar Coastline" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="zanzibar coast"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-4"
          >
            <Waves className="w-3 h-3 text-primary" /> The Swahili Coast
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
          >
            Experience Both <span className="text-primary italic">Worlds</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-light leading-relaxed px-4"
          >
            Relax on Zanzibar's dream beaches and discover Tanzania's spectacular safaris – perfectly combined in our bespoke travel packages.
          </motion.p>
        </div>
      </section>

      {/* Creative Package Listing */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Tropical Expeditions</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Our Zanzibar & <br /><span className="text-primary italic">Safari Adventures</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[180px] lg:mb-3">Carefully curated travel packages for your Zanzibar holiday and Tanzania safari.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl z-0">
                  <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                    <Badge className="bg-primary text-secondary border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                      {pkg.tag}
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                      {pkg.cat}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-headline text-lg font-bold text-white leading-tight mb-3 line-clamp-2">{pkg.title}</h3>
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl flex flex-col items-start">
                        <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">From</p>
                        <p className="text-xl font-bold text-secondary">€{pkg.price}</p>
                      </div>
                      <Link href={`/trip-planner?route=${pkg.id}`}>
                        <Button size="icon" className="w-10 h-10 rounded-xl bg-primary text-secondary hover:bg-primary/90">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-2">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-primary" />
                      <span className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-primary" />
                      <span className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.groupSize}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-[10px] font-light text-muted-foreground/80 leading-relaxed">
                        <div className="w-1 h-1 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Zanzibar Narrative */}
      <section className="py-12 md:py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">The Dream Island</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">
                  Why Zanzibar is <br /> <span className="text-primary italic">Perfect for You</span>
                </h2>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-sm md:text-lg">
                For many, a holiday in Zanzibar is the fulfillment of a lifelong dream. The archipelago off the coast of Tanzania captivates visitors with its white sandy beaches, turquoise waters, and a fascinating blend of African, Arab, and Indian cultures.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Anchor, title: "Stone Town", desc: "Centuries of history." },
                  { icon: Palmtree, title: "Pristine Sands", desc: "Top-tier world beaches." },
                  { icon: Zap, title: "Spice Island", desc: "Aromatic plantations." },
                  { icon: Waves, title: "Coral Reefs", desc: "Diving & snorkeling." }
                ].map((f, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <f.icon className="w-5 h-5 text-primary mb-2" />
                    <h4 className="font-bold text-xs mb-1">{f.title}</h4>
                    <p className="text-[9px] text-white/40 uppercase tracking-widest">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1000" alt="Zanzibar Market" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent" />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-[2rem] shadow-2xl hidden md:block max-w-[200px]"
              >
                <p className="text-secondary font-bold text-sm leading-tight italic">"Where the scent of cloves meets the ocean breeze."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Guide */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Geography of Paradise</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4">The Most Beautiful <span className="text-primary italic">Beaches</span></h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto text-sm md:text-lg">With more than 25 unique coastlines, which Zanzibar shore is right for your vibe?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "North Coast", 
                sub: "Nungwi & Kendwa", 
                desc: "The most famous beaches. Ideal for swimming at any time as tides are barely noticeable. Lively atmosphere with numerous restaurants.", 
                icon: Sun,
                img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1000"
              },
              { 
                title: "East Coast", 
                sub: "Matemwe & Kiwengwa", 
                desc: "Idyllic and calm. An impressive coral reef stretches along the coast, making it a world-class spot for snorkeling and diving.", 
                icon: Waves,
                img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000"
              },
              { 
                title: "Southeast Coast", 
                sub: "Jambiani & Paje", 
                desc: "Perfect for kitesurfing and sailing thanks to consistent winds. Authentic Swahili atmosphere with warm and welcoming locals.", 
                icon: Wind,
                img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1000"
              },
              { 
                title: "Southwest Coast", 
                sub: "Menai Bay", 
                desc: "Remote and pristine. Ideal for those seeking silence. Menai Bay is a conservation area and a diver's secret paradise.", 
                icon: ShieldCheck,
                img: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1000"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-[2.5rem] border border-muted hover:shadow-xl transition-all group">
                <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-primary" />
                    <h4 className="font-bold text-lg leading-none">{item.title}</h4>
                  </div>
                  <p className="text-primary font-bold text-[9px] uppercase tracking-widest mb-3">{item.sub}</p>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time Grid */}
      <section className="py-12 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Climate & Events</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4">Best Time to <span className="text-primary italic">Visit</span></h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto text-sm md:text-lg leading-relaxed">Planning your island escape? Here is the seasonal rhythm of Zanzibar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sun, title: "Sun & Warmth", time: "June - October", desc: "Driest and sunniest period. Temperatures 25–30 °C with low humidity. Perfect for sun worshippers." },
              { icon: Waves, title: "Beach & Swimming", time: "Dec - February", desc: "Warm ocean waters and crystal clear visibility. Ideal for swimming and festive season retreats." },
              { icon: Anchor, title: "Snorkeling & Diving", time: "July - October", desc: "Sea is at its calmest. Offers perfect conditions to explore the vibrant coral gardens." },
              { icon: Wind, title: "Kitesurfing", time: "June - Sept / Dec - Jan", desc: "Ideal consistent winds on the East coast, particularly Paje, for wind and kite surfing." },
              { icon: Palmtree, title: "Peace & Privacy", time: "Nov / March - May", desc: "Off-season tranquility. Occasional tropical showers but maximum privacy and lower prices." },
              { icon: Compass, title: "Culture & Festivals", time: "July - August", desc: "Zanzibar Film Festival and Mwaka Kogwa celebrations. Authentic Swahili traditions in Stone Town." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-border/50 hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1.5">{item.title}</h4>
                <p className="text-primary font-bold text-[9px] uppercase tracking-widest mb-4 px-3 py-1 bg-primary/5 rounded-full w-fit">{item.time}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Reviews */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />)}
          </div>
          <h2 className="font-headline text-2xl md:text-5xl font-bold mb-12 italic text-foreground/90">Island <span className="text-primary italic">Voices</span></h2>
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {[
                { name: "Lea M., Munich", text: "Absolutely fantastic! The safari was spectacular; we saw lions and elephants. Afterwards, the peace and quiet of Zanzibar – simply perfect." },
                { name: "Tobias H., Frankfurt", text: "Organization was top-notch. Our guides knew every detail. Zanzibar was pure bliss – spice tours, sunsets, and snorkeling." },
                { name: "Jonas W., Hamburg", text: "The drive to the Serengeti was impressive, but Zanzibar afterwards was like a dream. White sand, warm sea, everything stress-free." }
              ].map((rev, i) => (
                <CarouselItem key={i}>
                  <div className="space-y-6 md:space-y-8 px-4">
                    <blockquote className="text-lg md:text-4xl font-headline font-bold leading-tight">
                      “{rev.text}”
                    </blockquote>
                    <p className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">— {rev.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-secondary/20 hover:bg-secondary hover:text-white" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-secondary/20 hover:bg-secondary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Knowledge Base</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Zanzibar <span className="text-primary italic">FAQs</span></h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg">Essential information for your tropical island escape.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "What is internet and network coverage like?", a: "Most resorts provide free Wi-Fi. In Stone Town and main beach areas, 4G coverage is generally good. We recommend a local SIM for remote areas." },
            { q: "Are there special rules of conduct?", a: "Zanzibar is a culturally conservative Muslim society. Please dress modestly in Stone Town and local villages (shoulders and knees covered)." },
            { q: "Do I need special vaccinations or visas?", a: "A tourist visa is required for most nationalities ($50-100). Yellow Fever vaccination is required if arriving from an endemic zone." },
            { q: "How safe is a holiday in Zanzibar?", a: "The island is generally very safe for tourists. As with any travel, exercise normal precautions and use provided hotel safes for valuables." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[1.5rem] px-6 md:px-8 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="font-bold text-base md:text-lg py-5 hover:no-underline hover:text-primary text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA Overlay */}
      <section className="py-16 md:py-24 bg-secondary text-white text-center px-4 relative overflow-hidden mx-4 md:mx-10 rounded-[2.5rem] md:rounded-[4rem] mb-12 shadow-2xl">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="font-headline text-3xl md:text-7xl font-bold mb-6 leading-tight">Your Spice Island <br /><span className="text-primary italic">Escape Starts</span></h2>
          <p className="text-white/60 mb-10 font-light text-base md:text-xl">Bespoke combinations of bush and beach. Request your proposal today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-10 h-14 md:h-16 text-base font-bold shadow-2xl bg-primary text-secondary hover:bg-primary/90 transition-all hover:scale-105">
                Design My Combination
              </Button>
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              Talk to a Specialist <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
