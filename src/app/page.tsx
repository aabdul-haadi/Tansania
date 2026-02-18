"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Map, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useDoc, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
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

export default function Home() {
  const firestore = useFirestore();
  const docRef = React.useMemo(() => (firestore ? doc(firestore, 'pages', 'home') : null), [firestore]);
  const { data: page } = useDoc(docRef);

  const [tanzaniaApi, setTanzaniaApi] = useState<CarouselApi>();
  const [tanzaniaIndex, setTanzaniaIndex] = useState(0);

  useEffect(() => {
    if (!tanzaniaApi) return;
    tanzaniaApi.on("select", () => {
      setTanzaniaIndex(tanzaniaApi.selectedScrollSnap());
    });
  }, [tanzaniaApi]);

  // Fallback content if CMS is not seeded
  const heroImg = PlaceHolderImages.find(img => img.id === 'serengeti-hero');
  const zanzibarImg = PlaceHolderImages.find(img => img.id === 'zanzibar-beach');
  const safariImg = PlaceHolderImages.find(img => img.id === 'safari-jeep');

  const highlights = [
    { title: "Zanzibar Shores", desc: "Pristine white sands and ancient spice markets.", img: zanzibarImg?.imageUrl || 'https://picsum.photos/seed/zanzibar/1200/800', link: "/destinations/zanzibar", hint: "zanzibar beach" },
    { title: "Serengeti Plains", desc: "Witness the legendary Great Migration across endless horizons.", img: safariImg?.imageUrl || 'https://picsum.photos/seed/serengeti/1200/800', link: "/destinations/serengeti", hint: "serengeti wildlife" },
    { title: "Ngorongoro Crater", desc: "A natural amphitheater of wildlife inside a dormant volcano.", img: 'https://picsum.photos/seed/crater/1200/800', link: "/destinations/ngorongoro", hint: "ngorongoro crater" },
    { title: "Tarangire Giants", desc: "Home to massive baobabs and the largest elephant herds.", img: 'https://picsum.photos/seed/tarangire/1200/800', link: "/destinations/tarangire", hint: "tarangire elephants" },
    { title: "Mount Kilimanjaro", desc: "The Roof of Africa, standing tall above the clouds.", img: 'https://picsum.photos/seed/kili/1200/800', link: "/destinations/kilimanjaro", hint: "mount kilimanjaro" },
  ];

  const sections = page?.sections || [
    {
      type: 'hero',
      data: {
        heading: 'The Soul of the Serengeti',
        subheading: "Egypt's premier gateway to the Great Migration. Bespoke safari adventures crafted with local expertise.",
        backgroundImage: heroImg?.imageUrl,
      }
    }
  ];

  return (
    <div className="relative">
      {sections.map((section: any, idx: number) => {
        if (section.type === 'hero') {
          const heroImages = [
            { src: section.data.backgroundImage || heroImg?.imageUrl || 'https://picsum.photos/seed/safari-hero/1920/1080', hint: "serengeti safari" },
            { src: zanzibarImg?.imageUrl || 'https://picsum.photos/seed/zanzibar-h/1920/1080', hint: "zanzibar beach" },
            { src: 'https://picsum.photos/seed/lodge-h/1920/1080', hint: "safari lodge" }
          ];

          return (
            <section key={idx} className="relative h-screen flex items-center justify-center overflow-hidden">
              <HeroBackgroundSlider images={heroImages} />
              
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
                    {section.data.heading?.split(' ').slice(0, -1).join(' ')} <br />
                    <span className="text-primary italic">{section.data.heading?.split(' ').pop()}</span>
                  </h1>
                  
                  <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-body font-light">
                    {section.data.subheading}
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
          );
        }

        if (section.type === 'content') {
          return (
            <section key={idx} className="py-24 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                {section.data.heading && (
                  <h2 className="text-3xl font-headline font-bold mb-8 text-center">{section.data.heading}</h2>
                )}
                <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
                  {section.data.bodyMarkdown}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

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

      <section className="py-32 relative overflow-hidden transition-colors duration-1000">
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
                className="object-cover opacity-10 blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-background/80" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Carousel
            setApi={setTanzaniaApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Best of Tanzania</span>
                <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-tight">Where Wild Nature <br/>Meets Timeless Luxury</h2>
              </div>
              <div className="flex flex-col items-end gap-6">
                <Link href="/destinations" className="group flex items-center gap-3 text-secondary font-bold text-lg hover:text-primary transition-colors">
                  Explore All Regions <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <div className="flex gap-4">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 border-secondary/20 hover:bg-secondary hover:text-white transition-all rounded-full" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 border-secondary/20 hover:bg-secondary hover:text-white transition-all rounded-full" />
                </div>
              </div>
            </div>

            <CarouselContent className="-ml-10">
              {highlights.map((item, idx) => (
                <CarouselItem key={idx} className="pl-10 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden group shadow-2xl h-full"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      data-ai-hint={item.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                      <h3 className="text-white text-4xl font-headline font-bold mb-3">{item.title}</h3>
                      <p className="text-white/70 mb-8 max-w-sm text-lg font-light leading-relaxed">{item.desc}</p>
                      <Link href={item.link}>
                        <Button variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-xl">Experience the Region</Button>
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

      <SafariVideo />

      <KilimanjaroSummit />

      <ZanzibarEscape />

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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            data-ai-hint={images[index].hint}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 hero-overlay z-10" />
    </div>
  );
}
