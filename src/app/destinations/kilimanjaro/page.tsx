
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Clock, 
  Users, 
  Calendar, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Wind, 
  Sun, 
  Compass,
  Map,
  ChevronRight,
  Droplets,
  Zap
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
    id: '13-day-combo',
    tag: 'Bestselling',
    cat: 'KILIMANJARO COMBO',
    title: '13-Day Tanzania Tour – Kilimanjaro & Safari with Serengeti',
    duration: '13 days, complete package',
    accommodation: 'Mountain huts & safari lodges',
    groupSize: 'Max 8 participants',
    price: '5,299',
    oldPrice: '6,699',
    highlights: [
      'Climbing Africa\'s roof',
      'Experience the Big Five up close',
      'Enjoy Zanzibar\'s beaches',
      'Spectacular natural panoramas'
    ],
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  {
    id: '8-day-marangu',
    tag: 'Hut Route',
    cat: 'KILIMANJARO',
    title: '8 Days in Marangu: Comfortable journey to the summit',
    duration: '8 days all-inclusive',
    accommodation: 'Mountain huts with full board',
    groupSize: 'Max 10 participants',
    price: '2,999',
    oldPrice: '3,199',
    highlights: [
      'Cabins instead of tents',
      'Sunrise at the crater rim',
      'Reaching Uhuru Peak',
      'Coca-Cola Route'
    ],
    img: 'https://images.unsplash.com/photo-1650361109293-909990990901?q=80&w=800'
  },
  {
    id: '9-day-machame',
    tag: 'Whiskey Route',
    cat: 'KILIMANJARO',
    title: '9 Days Machame: The Adventurer\'s Route to the Summit',
    duration: '9 days complete package',
    accommodation: 'Tent camps & cabins',
    groupSize: 'Max 8 participants',
    price: '2,499',
    oldPrice: '2,999',
    highlights: [
      'Experience the Whiskey Route',
      'Diverse landscapes',
      'High success rate',
      'Spiritual Adventure'
    ],
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
  },
  {
    id: '10-day-lemosho',
    tag: 'Premium Route',
    cat: 'KILIMANJARO',
    title: '10 days in Lemosho: Untouched paths to the highest point',
    duration: '10 days, all-inclusive',
    accommodation: 'Premium tent camps',
    groupSize: 'Max 6 participants',
    price: '3,099',
    oldPrice: '3,599',
    highlights: [
      'Less frequented route',
      'Highest success rate',
      'West side of Kilimanjaro',
      'Premium Equipment'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: '8-day-rongai',
    tag: 'Quiet Route',
    cat: 'KILIMANJARO',
    title: '8 Days in Rongai: Your Silent Path to the Summit',
    duration: '8 days all-inclusive',
    accommodation: 'Tent camps with full board',
    groupSize: 'Max 8 participants',
    price: '2,679',
    oldPrice: '2,999',
    highlights: [
      'North side of Kilimanjaro',
      'Secluded & quiet',
      'Wildlife observations on the go',
      'A panoramic view without crowds'
    ],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  },
  {
    id: '5-day-meru',
    tag: 'Entry Route',
    cat: 'MOUNT MERU',
    title: '5 days on Mount Meru: Introduction to the summit',
    duration: '5 days, complete package',
    accommodation: 'Mountain huts & tent camps',
    groupSize: 'Max 8 participants',
    price: '2,299',
    oldPrice: '2,699',
    highlights: [
      'Africa\'s second highest peak',
      'Perfect Kilimanjaro preparation',
      'Sunrise over the savannah',
      'Ideal acclimatization'
    ],
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  }
];

export default function KilimanjaroPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Immersive Header */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Mount Kilimanjaro Summit" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="mount kilimanjaro"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-4"
          >
            <Mountain className="w-3 h-3 text-primary fill-primary" /> The Roof of Africa
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
          >
            Find Your Perfect <span className="text-primary italic">Route</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-xs md:text-lg text-white/80 font-light leading-relaxed px-4"
          >
            Choose from unique routes and experiences to find the tour that suits your adventurous spirit.
          </motion.p>
        </div>
      </section>

      {/* Package Grid - Creative Overlapping Style */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-1.5 block">Expedition Catalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Climb to the <br /><span className="text-primary italic">Uhuru Peak</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[180px] lg:mb-3">Handcrafted climbing itineraries for beginners and seasoned explorers.</p>
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
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl z-0">
                  <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1.5 items-start">
                    <Badge className="bg-primary text-secondary border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                      {pkg.tag}
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                      {pkg.cat}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-white leading-tight mb-3 line-clamp-2">{pkg.title}</h3>
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl flex flex-col items-start min-w-[100px]">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-bold text-muted-foreground line-through decoration-primary">€{pkg.oldPrice}</span>
                          <span className="text-[8px] font-bold text-primary bg-primary/10 px-1 rounded">OFFER</span>
                        </div>
                        <p className="text-lg md:text-2xl font-bold text-secondary leading-none mt-1">€{pkg.price}</p>
                      </div>
                      <Link href={`/trip-planner?route=${pkg.id}`}>
                        <Button size="icon" className="w-12 h-12 rounded-xl bg-primary text-secondary hover:bg-primary/90 shadow-xl transition-transform hover:scale-110">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

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
                    <ul className="space-y-1.5">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[11px] font-light text-muted-foreground/80">
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

      {/* Ultimate Adventure Section */}
      <section className="py-12 md:py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Why Kilimanjaro?</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">
                  The Ultimate <br /> <span className="text-primary italic">Adventure Destination</span>
                </h2>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-sm md:text-lg">
                Mount Kilimanjaro combines breathtaking landscapes, a genuine physical challenge, and the thrill of climbing Africa's highest peak—all without any technical climbing skills. From lush rainforests to alpine deserts and icy glaciers.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Mountain, label: "5,895m", sub: "Africa's Peak" },
                  { icon: Map, label: "7 Routes", sub: "Official Paths" },
                  { icon: Wind, label: "5 Zones", sub: "Climate Diversity" },
                  { icon: Zap, label: "90%", sub: "Success Rate" },
                  { icon: Clock, label: "5-10 Days", sub: "Trip Duration" },
                  { icon: ShieldCheck, label: "Safe", sub: "Expert Guides" }
                ].map((fact, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <fact.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-bold text-sm leading-none mb-1">{fact.label}</p>
                    <p className="text-[8px] text-white/40 uppercase tracking-widest font-bold">{fact.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image src="https://images.unsplash.com/photo-1650361109293-909990990901?q=80&w=1000" alt="Kilimanjaro Summit" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent" />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-[2rem] shadow-2xl hidden md:block max-w-[200px]"
              >
                <p className="text-secondary font-bold text-sm leading-tight italic">"The view from Uhuru Peak is a memory for a lifetime."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Strategic Guide */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2">Decision Guide</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4">Which Route is <span className="text-primary italic">Right for You?</span></h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto text-sm md:text-lg">Every path to the summit offers a unique combination of scenery, difficulty, and acclimatization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Beginners", route: "Marangu or Machame", desc: "Easy to follow, good infrastructure and a steady, pleasant pace.", icon: Sparkles },
              { type: "Landscape Lovers", route: "Lemosho or Machame", desc: "Dramatic panoramas and the most diverse ecosystems on the mountain.", icon: Map },
              { type: "Budget Travelers", route: "Marangu Route", desc: "Shortest duration, hut accommodations, and the lowest overall cost.", icon: Compass },
              { type: "Moderate Hikers", route: "Machame or Lemosho", desc: "The perfect balance between challenge and optimal acclimatization.", icon: Zap },
              { type: "Experienced", route: "Umbwe Route", desc: "Steep, direct, and physically demanding. Only for the prepared.", icon: Mountain },
              { type: "Rainy Season", route: "Rongai Route", desc: "Starts on the drier northern side, offering better conditions in wet months.", icon: Droplets }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] border border-muted hover:border-primary/20 hover:shadow-xl transition-all group bg-background">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">{item.type}</h4>
                <p className="text-primary font-bold text-[9px] uppercase tracking-widest mb-4 px-3 py-1 bg-primary/5 rounded-full w-fit">{item.route}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time & Preparation */}
      <section className="py-12 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Best Time */}
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Climate Guide</span>
                <h2 className="font-headline text-3xl md:text-5xl font-bold">Best Time to <span className="text-primary italic">Climb</span></h2>
              </div>
              <div className="space-y-6">
                {[
                  { time: "January – March", label: "Quiet & Clear", desc: "Fewer crowds and crystal-clear views. Optimal weather conditions." },
                  { time: "June – October", label: "Peak Season", desc: "Dry weather and optimal visibility, coinciding with summer holidays." },
                  { time: "Avoid Nov & April-May", label: "Rainy Seasons", desc: "Paths become slippery and muddy. Visibility is often low." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-none mb-1">{item.time}</p>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">{item.label}</p>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation */}
            <div className="bg-secondary text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-6">
                <Badge className="bg-primary text-secondary border-none uppercase tracking-widest font-bold">Preparation</Badge>
                <h3 className="font-headline text-3xl font-bold">Ready for the <br /> Summit?</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Climbing Kilimanjaro is an unforgettable adventure, but it requires physical and mental preparation. You should be able to hike for 6-7 hours a day—often at high altitude.
                </p>
                <ul className="space-y-4">
                  {[
                    "Plan regular hikes 1-2 times a week.",
                    "Gradually increase duration and intensity.",
                    "Focus on cardiovascular endurance.",
                    "Mental resilience is key for summit night."
                  ].map((tip, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {tip}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full bg-primary text-secondary font-bold rounded-2xl h-14 mt-4 shadow-xl">Download Packing List</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />)}
          </div>
          <h2 className="font-headline text-2xl md:text-5xl font-bold mb-12 italic text-foreground/90">Climber <span className="text-primary italic">Stories</span></h2>
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {[
                { name: "Sophia M.", text: "Perfect for beginners! Everything went smoothly and I loved the cozy huts. Great guides and service throughout." },
                { name: "Jonas L.", text: "The Lemosho Route completely exceeded my expectations. It was quiet, scenic, and beautifully organized." },
                { name: "Katrin S.", text: "Fantastic team! The Machame route was a real challenge but worth every step. Loved the changing landscapes." }
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Kilimanjaro <span className="text-primary italic">FAQs</span></h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg">Essential information for your journey to the roof of Africa.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Do I need special equipment for climbing?", a: "Yes, including thermal clothing, quality hiking boots, a high-altitude sleeping bag, and trekking poles. We provide a full checklist upon booking." },
            { q: "How much does it cost to climb Kilimanjaro?", a: "Prices vary by route and duration. Packages typically range from €2,500 to €5,500 including park fees, guides, porters, and food." },
            { q: "How safe is climbing Kilimanjaro?", a: "Safety is our priority. We use pulse oximeters, carry emergency oxygen, and our guides are trained in wilderness first aid and altitude sickness protocols." },
            { q: "How many days should I plan for the climb?", a: "We recommend at least 7-8 days for better acclimatization. Longer routes like Lemosho or Northern Circuit have higher success rates." }
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
          <h2 className="font-headline text-3xl md:text-7xl font-bold mb-6 leading-tight">Conquer the <br /><span className="text-primary italic">African Giant</span></h2>
          <p className="text-white/60 mb-10 font-light text-base md:text-xl">Bespoke expeditions tailored to your pace. Start your climb today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-10 h-14 md:h-16 text-base font-bold shadow-2xl bg-primary text-secondary hover:bg-primary/90 transition-all hover:scale-105">
                Request a Proposal
              </Button>
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              Talk to a Guide <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
