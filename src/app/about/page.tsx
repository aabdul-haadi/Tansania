
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Heart, 
  ShieldCheck, 
  Leaf, 
  Users, 
  Star, 
  ArrowRight, 
  Sparkles,
  MapPin,
  Quote,
  CheckCircle2,
  Award,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  { name: "Samson Kyashama", role: "Founder & Safari Expert", img: "https://picsum.photos/seed/samson/400/400" },
  { name: "Manuela Jungas", role: "Operations Management", img: "https://picsum.photos/seed/manuela/400/400" },
  { name: "Susanne Stefaniack", role: "Travel Consultant", img: "https://picsum.photos/seed/susanne/400/400" },
  { name: "Petra Schönberger", role: "Guest Relations", img: "https://picsum.photos/seed/petra/400/400" },
  { name: "Klaus Jungas", role: "Logistics Specialist", img: "https://picsum.photos/seed/klaus/400/400" },
];

const guides = [
  { name: "Joachim Hugo", role: "Senior Safari Guide", img: "https://picsum.photos/seed/joachim/400/400" },
  { name: "Emmanuel Mkama", role: "Wildlife Specialist", img: "https://picsum.photos/seed/emmanuel/400/400" },
  { name: "Osbet Kihomwe", role: "Cultural Ambassador", img: "https://picsum.photos/seed/osbet/400/400" },
  { name: "Salim Zawadi", role: "Birding Expert", img: "https://picsum.photos/seed/salim/400/400" },
  { name: "Iddi", role: "Track & Trail Guide", img: "https://picsum.photos/seed/iddi/400/400" },
  { name: "James Martin", role: "Photography Guide", img: "https://picsum.photos/seed/james/400/400" },
];

const trustBadges = [
  { name: "Relais & Châteaux", icon: Award },
  { name: "DRV Member", icon: ShieldCheck },
  { name: "TripAdvisor Excellence", icon: Star },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Cinematic Hero */}
      <header className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="African Savannah"
          fill
          priority
          className="object-cover"
          data-ai-hint="serengeti savannah"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-secondary border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
              Exclusive Lodges & Luxury Resorts
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Your Key to the <br />
              <span className="text-primary italic">Heart of Africa</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-light leading-relaxed px-4">
              Bridging the Nile and the Savannah with authentic, tailor-made adventures that transcend ordinary vacations.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
              <Compass className="w-4 h-4" /> Our Vision
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-secondary">
              More Than Just a <br /><span className="text-primary italic">Vacation</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg italic">
              <p>
                "Do you dream of a journey that's more than just a vacation? A journey that immerses you in the soul of a continent rich in untouched nature, vibrant cultures, and breathtaking adventures?"
              </p>
              <p className="not-italic text-secondary font-medium">
                We are your bridge to authentic, unforgettable experiences across Tanzania, Kenya, Rwanda, Botswana, Namibia, and South Africa.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{badge.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" 
                alt="Luxury Lodge" 
                fill 
                className="object-cover"
                data-ai-hint="safari lodge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs">
              <p className="text-secondary font-bold text-lg leading-tight mb-4">"Our hearts beat for Africa."</p>
              <div className="h-px w-12 bg-secondary/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/founder/800/800" 
                  alt="Samson Kyashama" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center rotate-12 shadow-2xl">
                <Quote className="w-10 h-10 text-secondary fill-current" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">The Visionary</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">
                  Tailor-made by <br /><span className="text-primary italic">Samson Kyashama</span>
                </h2>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Led by a native Tanzanian and seasoned safari expert, we design journeys that exceed your wildest dreams. Every safari, every climb, and every cultural encounter is carefully selected to match your individual spirit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Native Expertise</p>
                    <p className="text-xs text-white/40 font-light">Deep-rooted connection to the land and its people.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Bespoke Design</p>
                    <p className="text-xs text-white/40 font-light">Your specifications are our blueprint.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Our Distinction</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold">Why a Tanzania <br /><span className="text-primary italic">Travel Adventure?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Users, 
                title: "Personal Experience", 
                desc: "Our team includes Tanzanian natives sharing insider knowledge you won't find in guidebooks." 
              },
              { 
                icon: Sparkles, 
                title: "Tailor-made Trips", 
                desc: "From ultra-luxury estates to adventurous self-drive tours, we build it to your specifications." 
              },
              { 
                icon: ShieldCheck, 
                title: "Pure Authenticity", 
                desc: "Genuine encounters and authentic moments far removed from mass-market tourism." 
              },
              { 
                icon: Leaf, 
                title: "Committed Sustainability", 
                desc: "Responsible travel that supports local communities and environmental protection." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-[#fdfcfb] border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg mb-3 leading-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200" 
                  alt="Maasai Culture" 
                  fill 
                  className="object-cover"
                  data-ai-hint="maasai culture"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                Ethical Tourism
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] block">Global Responsibility</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">Immerse & <span className="text-primary italic">Travel Sustainably</span></h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Meet the Maasai, Hadzabe, and other indigenous peoples as equals. We are committed to ecologically sustainable tourism and select our partners according to strict sustainability criteria.
              </p>
              <div className="space-y-4">
                {["Respect for Nature", "Cultural Equality", "Strict Partner Selection", "Better World Contribution"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-secondary uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Team */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Our Family</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold italic">The <span className="text-primary not-italic">Team</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {team.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all">
                  <Image src={person.img} alt={person.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-white">Learn More</button>
                  </div>
                </div>
                <h4 className="font-headline text-lg md:text-xl font-bold text-secondary mb-1">{person.name}</h4>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Guides */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">In the Field</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold italic">Our <span className="text-primary not-italic">Safari Guides</span></h2>
            </div>
            <p className="text-[10px] text-muted-foreground font-light uppercase tracking-widest max-w-[200px]">The eyes and ears of your expedition, with decades of combined tracking experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 bg-white rounded-[2rem] shadow-sm border border-border/50 hover:shadow-xl transition-all group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 bg-muted">
                  <Image src={guide.img} alt={guide.name} width={100} height={100} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-secondary leading-none mb-2">{guide.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">{guide.role}</p>
                  <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                    Bio <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-secondary text-white relative overflow-hidden mx-4 md:mx-10 rounded-[3rem] md:rounded-[5rem] mb-12 shadow-2xl text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-3xl mx-auto relative z-10 px-4">
          <h2 className="font-headline text-4xl md:text-8xl font-bold mb-8 leading-tight">
            Ready for the <br /><span className="text-primary italic">Adventure?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-2xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Welcome to the heart of Africa – where the savannah never sleeps and every horizon is a promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-secondary hover:bg-primary/90 shadow-2xl transition-all hover:scale-105 group">
                Begin Your Story <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
