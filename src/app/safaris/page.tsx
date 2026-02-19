
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
  Waves, 
  Heart, 
  ShieldCheck,
  ChevronRight,
  Info,
  Compass,
  ArrowRight
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
    title: '13-Day Complete Safari Tour',
    duration: '13 days, all-inclusive',
    accommodation: 'Lodges & Beach Resorts',
    groupSize: 'Max 8 participants',
    period: '2026-2027',
    price: '4,699',
    highlights: [
      'Safari in top national parks',
      'Kilimanjaro up close',
      'Big Five & breathtaking nature',
      'Zanzibar: Beach & Culture',
      'Perfect for adventure & relaxation'
    ],
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  }
];

const reviews = [
  { name: "Johanna K.", text: "Perfect safari! The lodges were luxurious and the staff very friendly. The encounter with the lions in the Serengeti was particularly impressive." },
  { name: "Martin L.", text: "Tanzania Travel Adventure exceeded our expectations. Our tailor-made safari was perfectly organized, with fantastic guides." },
  { name: "Sarah and Max B.", text: "Tanzania was magical! The wildlife and landscapes are unique. The only downside was the long travel times, but it was worth it." },
  { name: "Michael T.", text: "An unforgettable safari! The animals and landscapes were breathtaking. The wildebeest migration was a particular highlight." }
];

export default function SafarisPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tanzania Safari Hero" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            The Heart of Africa
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Book Your <br /> <span className="text-primary italic">Tanzania Safari</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-lg text-white/80 font-light leading-relaxed"
          >
            Discover untamed nature, impressive wildlife sightings, and breathtaking landscapes. The adventure of a lifetime begins here.
          </motion.p>
        </div>
      </section>

      {/* Package Listing */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Choose Your <span className="text-primary italic">Expedition</span></h2>
          <p className="text-muted-foreground text-sm font-light max-w-xl mx-auto">Handcrafted itineraries tailored for solo adventurers, families, and romantic escapes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={pkg.img} 
                    alt={pkg.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white border-none px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                      {pkg.tag}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-right shadow-lg">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase leading-none">From</p>
                      <p className="text-xl font-bold text-secondary">€{pkg.price}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-headline text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">{pkg.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {pkg.duration}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5 text-primary" /> {pkg.groupSize}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> Premium Lodges
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> {pkg.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8 border-t pt-6">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-light text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/trip-planner?package=${pkg.id}`}>
                    <Button className="w-full h-12 rounded-xl font-bold gap-2 group/btn">
                      Inquire Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* German-Speaking Experts */}
      <section className="py-16 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Localized Expertise</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
                Your Experts for <br /> <span className="text-primary italic">Tanzania Safaris</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                With years of experience, our own office in Tanzania, and a multilingual team on the ground, Serengeti Dreams guarantees a smooth and unforgettable experience. As a German-speaking Tanzania safari provider, we offer you the opportunity to enjoy this breathtaking journey in your own language.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Guaranteed Safety</h4>
                  <p className="text-xs text-white/40 font-light">24/7 Ground support from Cairo & Arusha.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1531355775887-e6b2484f494c?q=80&w=1000" 
                  alt="Safari Jeep" 
                  fill 
                  className="object-cover"
                  data-ai-hint="safari jeep"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-3xl shadow-xl hidden md:block"
              >
                <p className="text-secondary font-bold text-lg leading-tight italic">"The ultimate <br />jeep adventure"</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Lodging */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Luxurious <span className="text-primary italic">Sanctuaries</span></h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">Experience the wild from the comfort of hand-selected 5-star lodges and exclusive tented camps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-muted/30 border border-muted-foreground/10 relative">
                <Star className="w-8 h-8 text-primary mb-4 fill-primary" />
                <h3 className="text-2xl font-headline font-bold mb-4">Full Board Comfort</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Enjoy gourmet dining and exclusive amenities in Tanzania's most famous national parks. Each accommodation is regularly inspected by our team to guarantee quality.
                </p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-secondary text-white">
                <Compass className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-headline font-bold mb-4">Bush & Candlelight</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Experience the ultimate luxury safari. Hear the trumpeting of elephants and the roar of lions from your private deck.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1000" 
                alt="Luxury Lodge" 
                fill 
                className="object-cover"
                data-ai-hint="safari lodge"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safari & Beach Combo */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Safari & Relaxation</Badge>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Adventure & <span className="text-primary italic">Beach Bliss</span></h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">Combine the thrill of the Serengeti with the powder-soft sands of Zanzibar.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                <Image 
                  src={`https://picsum.photos/seed/zanzibar-${i}/800/800`} 
                  alt={`Zanzibar Beach ${i}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint="zanzibar beach"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-bold text-xs uppercase tracking-widest">Explore Zanzibar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Travel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Travel Planning</span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Best Time to <span className="text-primary italic">Travel</span></h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">When to visit depends on your dreams. Let our experts guide your timing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Compass, title: "Great Migration", time: "July - October", desc: "Witness millions of animals crossing the Serengeti. Peak season for dramatic river crossings." },
              { icon: Camera, title: "Wildlife Observations", time: "June - October", desc: "Dry season means less vegetation and scarce water, making animals much easier to spot." },
              { icon: Star, title: "Photography", time: "December - March", desc: "Lush green landscapes after rains and newborn animals provide perfect conditions for shots." },
              { icon: Bird, title: "Birdwatching", time: "November - April", desc: "Paradise for birders. Migratory birds arrive from Europe/Asia, including thousands of flamingos." },
              { icon: ShieldCheck, title: "Peaceful Safari", time: "March - May", desc: "Rainy season offers a quieter experience. Fewer tourists and lush, green landscapes." },
              { icon: Heart, title: "Family Safaris", time: "June - September", desc: "Mild weather and excellent visibility ensure unforgettable family experiences." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-muted hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">{item.time}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold mb-12">Traveler <span className="text-primary italic">Voices</span></h2>
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {reviews.map((rev, i) => (
                <CarouselItem key={i}>
                  <div className="space-y-6 px-4">
                    <blockquote className="text-xl md:text-2xl font-headline font-bold leading-tight italic">
                      "{rev.text}"
                    </blockquote>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs">— {rev.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold mb-4">Safari <span className="text-primary italic">FAQs</span></h2>
          <p className="text-muted-foreground font-light">Common questions about planning your Tanzania holiday.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "What should I consider when planning a safari?", a: "Consider your budget, time of year (Migration vs. Dry Season), and whether you want a private or group experience." },
            { q: "How much does a Tanzania safari holiday cost?", a: "Prices vary based on comfort tier. Our packages start from €2,999 per person including high-end lodging." },
            { q: "What should I pack for my safari?", a: "Lightweight, neutral-colored clothing, a wide-brimmed hat, binoculars, and a good camera are essential." },
            { q: "How can I book a cheap Tanzania safari?", a: "Look for travel during the rainy season (March-May) or join a larger group expedition to split costs." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-2xl px-6 shadow-sm">
              <AccordionTrigger className="font-bold hover:no-underline hover:text-primary text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Your Personal <br /><span className="text-primary italic">African Odyssey Awaits</span></h2>
          <p className="text-white/60 mb-10 font-light text-lg">Fair, transparent, and 100% tailored to you. Get your no-obligation offer today.</p>
          <Link href="/trip-planner">
            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl hover:scale-105 transition-all">
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
