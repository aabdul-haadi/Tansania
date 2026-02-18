
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Map, Clock, Star } from 'lucide-react';
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
            className="object-cover brightness-50"
            priority
            data-ai-hint={heroImg?.imageHint}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
              Egypt-based Experts for Tanzania Safaris
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Where the Nile Meets <br />
              <span className="italic text-primary">the Great Migration</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-body">
              Tailored premium safari experiences crafted by locals who know the sands of Egypt and the plains of Tanzania like no other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/safaris">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-10 h-14 text-lg bg-primary text-foreground hover:bg-primary/90">
                  Explore Safaris
                </Button>
              </Link>
              <Link href="/trip-planner">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-10 h-14 text-lg border-white text-white hover:bg-white/10 backdrop-blur-sm">
                  Plan My Trip
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="font-medium">Secure Booking</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              <span className="font-medium">Local Support</span>
            </div>
            <div className="flex items-center gap-3">
              <Map className="w-6 h-6 text-primary" />
              <span className="font-medium">Expert Guides</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-medium">24/7 Concierge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 luxury-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Curated Wilderness</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in the iconic Serengeti and the paradise of Zanzibar, creating seamless transitions between wild adventure and tropical serenity.
              </p>
            </div>
            <Link href="/destinations" className="group flex items-center gap-2 text-secondary font-bold text-lg">
              View All Destinations <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden group shadow-2xl"
            >
              <Image
                src={zanzibarImg?.imageUrl || ''}
                alt="Zanzibar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-headline font-bold mb-2">Zanzibar Island</h3>
                <p className="text-white/80 mb-6 max-w-sm">The spice island where Arabian architecture meets Indian Ocean blues.</p>
                <Link href="/destinations/zanzibar">
                  <Button variant="secondary" className="rounded-full">Discover Zanzibar</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden group shadow-2xl"
            >
              <Image
                src={safariImg?.imageUrl || ''}
                alt="Serengeti"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-headline font-bold mb-2">Serengeti National Park</h3>
                <p className="text-white/80 mb-6 max-w-sm">Witness the world's most spectacular wildlife theatre in motion.</p>
                <Link href="/destinations/serengeti">
                  <Button variant="secondary" className="rounded-full">Explore Serengeti</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-4xl font-bold mb-6">The Serengeti Dreams Edge</h2>
            <p className="text-muted-foreground text-lg">Based in Egypt, connected globally, rooted in Tanzania.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: 'Egypt-Based Support',
                description: 'We are locals in Egypt. Visit our office in Cairo or call us anytime for face-to-face planning and support.'
              },
              {
                icon: Star,
                title: 'Vetted Tanzania Partners',
                description: 'We don\'t just book trips; we own the relationships. Every lodge and guide is personally inspected.'
              },
              {
                icon: Heart,
                title: 'Ethical & Sustainable',
                description: 'A portion of every booking goes towards wildlife conservation in the Serengeti and local schools in Zanzibar.'
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Packages (Simplified Mock) */}
      <section className="py-24 luxury-gradient">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden rounded-3xl border-none shadow-xl hover:shadow-2xl transition-shadow group">
                <div className="relative aspect-video overflow-hidden">
                   <Image 
                    src={`https://picsum.photos/seed/pkg${i}/800/600`} 
                    alt="Package" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute top-4 right-4 bg-primary text-foreground px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                     From $2,499
                   </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4 text-secondary text-sm font-bold uppercase tracking-widest">
                    <Clock className="w-4 h-4" /> 7 Days / 6 Nights
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">Serengeti Great Migration Luxury</h3>
                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9 (124 reviews)
                    </div>
                  </div>
                  <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                    <li>• Private 4x4 Jeep with Guide</li>
                    <li>• Luxury Tented Camp Accommodation</li>
                    <li>• All Meals & Park Fees Included</li>
                  </ul>
                  <Link href="/safaris/luxury-serengeti">
                    <Button className="w-full rounded-full py-6 bg-foreground text-background hover:bg-secondary hover:text-white transition-colors">
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
