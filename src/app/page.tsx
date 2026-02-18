"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Map, Clock, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'serengeti-hero');
  const zanzibarImg = PlaceHolderImages.find(img => img.id === 'zanzibar-beach');
  const safariImg = PlaceHolderImages.find(img => img.id === 'safari-jeep');

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || ''}
            alt={heroImg?.description || 'Serengeti Hero'}
            fill
            className="object-cover scale-105"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
          <div className="absolute inset-0 hero-overlay z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl"
            >
              <Star className="w-3 h-3 fill-primary" /> Premium Tanzania Experiences
            </motion.span>
            
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
              The Soul of the <br />
              <span className="text-primary italic">Serengeti</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-body font-light">
              Egypt's premier gateway to the Great Migration. Bespoke safari adventures crafted with local expertise and luxury in every detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/safaris">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold shadow-2xl transition-all hover:scale-105">
                  Begin Your Journey
                </Button>
              </Link>
              <Link href="/trip-planner">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg border-white/40 text-white hover:bg-white/20 backdrop-blur-md transition-all">
                  Custom Planner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40 z-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" 
          />
        </div>
      </section>

      {/* Trust Badges - Refined */}
      <section className="py-16 bg-white border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            {[
              { icon: ShieldCheck, label: "Secure Cairo Booking" },
              { icon: Heart, label: "Eco-Conscious Travel" },
              { icon: Map, label: "Private Guided Expeditions" },
              { icon: Clock, label: "24/7 Local Concierge" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-bold tracking-wider text-muted-foreground uppercase text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-32 luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Best of Tanzania</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-tight">Where Wild Nature <br/>Meets Timeless Luxury</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                From the golden savannahs of the Serengeti to the turquoise shores of Zanzibar, we curate seamless transitions between untamed adventure and tropical serenity.
              </p>
            </div>
            <Link href="/destinations" className="group flex items-center gap-3 text-secondary font-bold text-lg hover:text-primary transition-colors">
              Explore All Regions <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src={zanzibarImg?.imageUrl || ''}
                alt="Zanzibar"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-headline font-bold mb-3">Zanzibar Shores</h3>
                <p className="text-white/70 mb-8 max-w-sm text-lg font-light leading-relaxed">Pristine white sands and ancient spice markets. The perfect end to any safari adventure.</p>
                <Link href="/destinations/zanzibar">
                  <Button variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-xl">Experience the Island</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src={safariImg?.imageUrl || ''}
                alt="Serengeti"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-headline font-bold mb-3">Serengeti Plains</h3>
                <p className="text-white/70 mb-8 max-w-sm text-lg font-light leading-relaxed">Witness the legendary Great Migration across endless horizons of the savannah.</p>
                <Link href="/destinations/serengeti">
                  <Button variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-xl">Venture into the Wild</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us - Refined */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 italic text-secondary">The Serengeti Dreams Signature</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground text-xl leading-relaxed font-light">Egypt’s most trusted partner for high-end Tanzanian travel. We bridge the distance with personalized care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: ShieldCheck,
                title: 'Cairo HQ Support',
                description: 'Visit our Zamalek office for face-to-face planning. We provide local payment options and immediate Egyptian support.'
              },
              {
                icon: Star,
                title: 'Curated Partnerships',
                description: 'We exclusively partner with lodges and guides who meet our stringent luxury and safety standards.'
              },
              {
                icon: Heart,
                title: 'Conscious Luxury',
                description: 'A portion of every booking funds wildlife corridors and educational programs in the regions we visit.'
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="w-10 h-10 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Packages - Grid Layout */}
      <section className="py-32 luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Handpicked Itineraries</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Limited Signature Packages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="safari-card border-none overflow-hidden bg-white shadow-xl rounded-[2.5rem]">
                <div className="relative aspect-[4/3] overflow-hidden">
                   <Image 
                    src={`https://picsum.photos/seed/pkg${i}/800/600`} 
                    alt="Package" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider text-secondary">
                     Limited Slots
                   </div>
                   <div className="absolute bottom-6 right-6 bg-primary text-white px-6 py-2 rounded-full font-bold text-lg shadow-xl">
                     From $3,200
                   </div>
                </div>
                <CardContent className="p-10">
                  <div className="flex items-center gap-2 mb-4 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                    <Clock className="w-4 h-4" /> 8 Days / 7 Nights
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Classic Migration Luxury</h3>
                  <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground font-light">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="font-bold text-foreground">4.9</span> (120+ Travelers)
                  </div>
                  <ul className="space-y-3 mb-10 text-sm text-muted-foreground font-light">
                    <li className="flex items-center gap-2">• <span className="font-medium text-foreground">Private</span> 4x4 Jeep &amp; Driver</li>
                    <li className="flex items-center gap-2">• <span className="font-medium text-foreground">Boutique</span> Tented Camps</li>
                    <li className="flex items-center gap-2">• <span className="font-medium text-foreground">Inclusive</span> Internal Flights</li>
                  </ul>
                  <Link href="/safaris/package-detail">
                    <Button className="w-full rounded-full h-14 text-lg font-bold bg-secondary hover:bg-primary transition-all">
                      View Itinerary
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}