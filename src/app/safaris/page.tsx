
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  Star, 
  MapPin, 
  Camera, 
  Bird, 
  Heart, 
  ShieldCheck,
  ChevronRight,
  Compass,
  ArrowRight,
  Sparkles,
  Waves
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
    title: '15-Day Safari & Zanzibar complete package',
    duration: '15-day round trip',
    accommodation: 'Premium Lodges & Hotels',
    groupSize: 'Max 8 participants',
    period: '2026-2027',
    price: '5,399',
    highlights: [
      'Top National Parks Safari',
      'Maasai village visit',
      'Family-friendly accommodations',
      'Zanzibar Beaches & Diving',
      'Spice Tour & Stone Town'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: '13-day-safari-zanzibar',
    tag: 'All-Inclusive',
    cat: 'SAFARI & ZANZIBAR',
    title: '13-Day Safari & Zanzibar experience',
    duration: '13 days all-inclusive',
    accommodation: 'Comfortable Lodges & Resorts',
    groupSize: 'Max 10 participants',
    period: '2026-2027',
    price: '3,699',
    highlights: [
      'Big Five game drives',
      'Maasai village visit',
      'Ngorongoro UNESCO Crater',
      'Zanzibar Beaches & Diving',
      'Stone Town City Tour'
    ],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  },
  {
    id: '11-day-safari-short',
    tag: 'Short Trip',
    cat: 'SAFARI & ZANZIBAR',
    title: '11-Day Safari & Zanzibar short trip',
    duration: '11 days, complete package',
    accommodation: 'Lodges & beach hotels',
    groupSize: 'Max 8 participants',
    period: '2026-2027',
    price: '2,999',
    highlights: [
      'Elephants in Tarangire',
      'Experience Maasai culture',
      'Serengeti Animal Migration',
      'Ngorongoro Crater Tour',
      'Zanzibar Beaches & Tours'
    ],
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  {
    id: '13-day-honeymoon',
    tag: 'Romance',
    cat: 'HONEYMOON',
    title: '13-Day Premium Honeymoon tour',
    duration: '13 days luxury package',
    accommodation: 'Premium Lodges & Villas',
    groupSize: 'Max 6 participants',
    period: '2026-2027',
    price: '3,899',
    highlights: [
      'Champagne at sunset',
      'Private game drives',
      'Luxury Lodges & Villas',
      'Zanzibar beach dinner',
      'Hot air balloon Serengeti'
    ],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  },
  {
    id: '12-day-family',
    tag: 'Families',
    cat: 'FAMILY SAFARI',
    title: '12-Day Family Safari Adventure',
    duration: '12 days all-inclusive',
    accommodation: 'Family Lodges & Camps',
    groupSize: 'Max 8 participants',
    period: '2026-2027',
    price: '3,499',
    highlights: [
      'Big Five game drives',
      'Maasai village visit',
      'School visit in Karatu',
      'Lake Manyara Safari',
      'Child-friendly lodges'
    ],
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800'
  },
  {
    id: '13-day-kilimanjaro-combo',
    tag: 'Combination',
    cat: 'KILIMANJARO SAFARI',
    title: '13-Day Complete Safari Tour',
    duration: '13 days, all-inclusive',
    accommodation: 'Lodges & Beach Resorts',
    groupSize: 'Max 8 participants',
    period: '2026-2027',
    price: '4,699',
    highlights: [
      'Safari in top national parks',
      'Kilimanjaro up close',
      'Big Five & nature',
      'Zanzibar: Beach & Culture',
      'Adventure & relaxation'
    ],
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  }
];

const reviews = [
  { name: "Johanna K.", text: "Perfect safari! The encounter with the lions in the Serengeti was particularly impressive. We felt completely well looked after." },
  { name: "Martin L.", text: "Tanzania Travel Adventure exceeded our expectations. Our tailor-made safari was perfectly organized, with fantastic guides." },
  { name: "Michael T.", text: "An unforgettable safari! The wildebeest migration was a particular highlight. Highly recommended for any genuine holiday." }
];

export default function SafarisPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Immersive Header */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tanzania Safari Hero" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-4"
          >
            <Sparkles className="w-3 h-3 text-primary fill-primary" /> Premium Expeditions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
          >
            Tanzania <span className="text-primary italic">Safaris</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-light leading-relaxed px-4"
          >
            Untamed nature, impressive wildlife, and breathtaking landscapes. The adventure of a lifetime begins here.
          </motion.p>
        </div>
      </section>

      {/* Creative Package Listing */}
      <section className="py-10 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Our Catalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold">Choose Your <br /><span className="text-primary italic">African Odyssey</span></h2>
          </div>
          <div className="flex gap-4">
             <div className="h-px w-16 bg-muted hidden lg:block mb-3" />
             <p className="text-[10px] text-muted-foreground font-light max-w-[180px]">Handcrafted itineraries for families, couples, and solo explorers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
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
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl z-0">
                  <Image 
                    src={pkg.img} 
                    alt={pkg.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />
                  
                  {/* Floating Elements on Image */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1.5 items-start">
                    <Badge className="bg-primary text-secondary border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                      {pkg.tag}
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                      {pkg.cat}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                    <h3 className="font-headline text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">{pkg.title}</h3>
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-xl flex flex-col items-start min-w-[100px]">
                        <p className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase leading-none mb-1">From</p>
                        <p className="text-lg md:text-2xl font-bold text-secondary">€{pkg.price}</p>
                      </div>
                      <Link href={`/trip-planner?package=${pkg.id}`}>
                        <Button size="icon" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-secondary hover:bg-primary/90 shadow-xl transition-transform hover:scale-110 shrink-0">
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Logistics Bar - Creative Overlay */}
                <div className="mt-4 px-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-muted">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Highlights</p>
                    <ul className="space-y-1.5">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[11px] font-light text-muted-foreground/80 leading-relaxed">
                          <div className="w-1 h-1 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Multi-Lingual Experts Section */}
      <section className="py-16 md:py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Language & Expertise</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">
                  Your Experts for <br /> <span className="text-primary italic">Tanzania Safaris</span>
                </h2>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-sm md:text-lg">
                With our own office in Tanzania and a multilingual team on the ground, Serengeti Dreams guarantees a smooth experience. As a German-speaking provider, we offer you the opportunity to enjoy this journey in your own language.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-base mb-1.5">Local Support</h4>
                  <p className="text-[10px] text-white/40 font-light">24/7 assistance from our Arusha and Cairo offices.</p>
                </div>
                <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/10">
                  <Compass className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-base mb-1.5">Expert Guides</h4>
                  <p className="text-[10px] text-white/40 font-light">Certified professional guides with 10+ years experience.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-square rounded-[3rem] overflow-hidden rotate-2 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1531355775887-e6b2484f494c?q=80&w=1000" 
                  alt="Safari Jeep" 
                  fill 
                  className="object-cover"
                  data-ai-hint="safari jeep"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-primary p-6 md:p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[220px]"
              >
                <p className="text-secondary font-bold text-lg leading-tight italic">"The ground trembles under the migration."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Lodging Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2">Sanctuaries in the Wild</span>
            <h2 className="font-headline text-3xl md:text-7xl font-bold mb-4">Luxurious <span className="text-primary italic">Comfort</span></h2>
            <p className="text-muted-foreground font-light max-w-xl text-sm md:text-lg leading-relaxed">Experience the wild from the comfort of hand-selected 5-star lodges and exclusive tented camps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1000" 
                alt="Luxury Lodge" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                data-ai-hint="safari lodge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary mb-3" />
                <h3 className="text-2xl md:text-3xl font-headline font-bold mb-2">Exclusive Tented Camps</h3>
                <p className="text-white/60 font-light text-xs md:text-sm">Listen to the whispers of the bush by candlelight under fine cotton tents.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8 md:space-y-10">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold">Full Board Perfection</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Enjoy gourmet dining and exclusive amenities in Tanzania's most famous national parks. Each accommodation is regularly inspected to guarantee the highest quality.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold">Tailored Experience</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  From eco-bungalows to oceanfront villas, we match the lodging to your personal vibe and comfort requirements.
                </p>
              </div>
              <Button size="lg" variant="outline" className="rounded-full w-fit px-8 h-12 font-bold border-secondary/20 hover:bg-secondary hover:text-white transition-all text-xs">
                Explore Accommodations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safari & Beach Combo */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 border-primary/20 text-primary uppercase tracking-[0.2em] font-bold px-3 py-0.5 text-[8px]">Bush & Beach Combination</Badge>
            <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4">Adventure meets <span className="text-primary italic">Relaxation</span></h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto text-sm md:text-lg">Combine the thrill of the Serengeti with the powder-soft sands of Zanzibar.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group ${i % 2 === 0 ? 'mt-4 md:mt-8' : ''}`}>
                <div className="aspect-[3/4]">
                  <Image 
                    src={`https://picsum.photos/seed/zanzibar-safari-${i}/600/800`} 
                    alt={`Zanzibar Beach ${i}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    data-ai-hint="zanzibar coast"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-8">
                  <p className="text-white font-bold text-[8px] md:text-xs uppercase tracking-widest flex items-center gap-1.5 md:gap-2">Explore Sansibar <ChevronRight className="w-3 h-3 md:w-4 md:h-4" /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Travel Planning</span>
            <h2 className="font-headline text-3xl md:text-7xl font-bold mb-4">Best Time to <span className="text-primary italic">Visit</span></h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto text-sm md:text-lg leading-relaxed">The Serengeti changes with the seasons. Let our specialists guide your timing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Compass, title: "Great Migration", time: "July - October", desc: "Witness millions of animals crossing the Serengeti. Peak season for dramatic river crossings." },
              { icon: Camera, title: "Wildlife Observations", time: "June - October", desc: "Dry season means less vegetation and scarce water, making animals much easier to spot." },
              { icon: Sparkles, title: "Photography", time: "December - March", desc: "Lush green landscapes and many newborn animals provide perfect conditions for vivid shots." },
              { icon: Bird, title: "Birdwatching", time: "November - April", desc: "Migratory birds arrive from Europe and Asia, including thousands of flamingos at the lakes." },
              { icon: Waves, title: "Peaceful Safari", time: "March - May", desc: "Rainy season offers a quieter experience. Fewer tourists and lush, green landscapes." },
              { icon: Heart, title: "Family Safaris", time: "June - September", desc: "Mild weather and excellent visibility ensure unforgettable family experiences." }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-muted hover:border-primary/20 hover:shadow-xl transition-all group bg-background">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-1.5 md:mb-2">{item.title}</h4>
                <p className="text-primary font-bold text-[8px] md:text-[10px] uppercase tracking-widest mb-4 md:mb-6 px-2.5 py-0.5 md:px-3 md:py-1 bg-primary/5 rounded-full w-fit">{item.time}</p>
                <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refined Reviews */}
      <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />)}
          </div>
          <h2 className="font-headline text-2xl md:text-5xl font-bold mb-12 md:mb-16 italic text-foreground/90">Traveler <span className="text-primary italic">Voices</span></h2>
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {reviews.map((rev, i) => (
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
            <div className="flex justify-center gap-4 md:gap-6 mt-10 md:mt-12">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-12 md:w-12 border-secondary/20 hover:bg-secondary hover:text-white" />
              <CarouselNext className="static translate-y-0 h-10 w-10 md:h-12 md:w-12 border-secondary/20 hover:bg-secondary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Comprehensive FAQ */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Knowledge Base</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3 md:mb-4">Safari <span className="text-primary italic">FAQs</span></h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg">Common questions about planning your Tanzania holiday.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "What should I consider when planning a safari?", a: "Consider your budget, time of year (Migration vs. Dry Season), and whether you want a private or group experience. Also check visa and health requirements." },
            { q: "How much does a Tanzania safari holiday cost?", a: "Prices vary based on comfort tier. Our packages start from €2,999 per person including high-end lodging, guides, and meals." },
            { q: "What should I pack for my safari?", a: "Lightweight, neutral-colored clothing, a wide-brimmed hat, binoculars, a good camera, and sun protection are essential." },
            { q: "How can I book a cheap Tanzania safari?", a: "Look for travel during the green season (March-May) or join a shared group expedition to split costs while still enjoying luxury camps." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="font-bold text-base md:text-lg py-5 md:py-6 hover:no-underline hover:text-primary text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 md:pb-8 text-xs md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA Overlay */}
      <section className="py-16 md:py-24 bg-secondary text-white text-center px-4 relative overflow-hidden mx-4 md:mx-10 rounded-[2.5rem] md:rounded-[4rem] mb-12 md:mb-20 shadow-2xl">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="font-headline text-3xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">Your African <br /><span className="text-primary italic">Odyssey Awaits</span></h2>
          <p className="text-white/60 mb-10 md:mb-12 font-light text-base md:text-xl">Fair, transparent, and 100% tailored to you. Get your bespoke proposal today.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-10 h-14 md:px-12 md:h-16 text-base md:text-lg font-bold shadow-2xl hover:scale-105 transition-all bg-primary text-secondary">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact" className="text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              Talk to a Specialist <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
