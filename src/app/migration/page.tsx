"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Map, 
  Phone, 
  Sparkles,
  TreePine,
  Tent,
  Mountain,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/shared/ContactSection';
import { MigrationVideoBlog } from '@/components/sections/MigrationVideoBlog';
import { MigrationSafariFactor } from '@/components/sections/MigrationSafariFactor';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import Link from 'next/link';

export default function MigrationPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => (
    firestore ? query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(3)) : null
  ), [firestore]);
  const { data: packages, isLoading } = useCollection(pkgQuery);

  return (
    <div className="bg-white min-h-screen font-body">
      {/* 100% Compacted High-Density Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Great Migration Serengeti" 
          fill 
          priority 
          className="object-cover brightness-[0.4]" 
          data-ai-hint="migration herds"
        />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">Naturwunder Registry</span>
            </div>
            <h1 className="font-headline text-5xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase select-none">
              MIGRATION
            </h1>
            <p className="text-white/60 font-black uppercase tracking-[0.5em] text-[9px] md:text-sm max-w-xl mx-auto leading-relaxed">
              Die größte Tierwanderung der Welt • Live Monitoring
            </p>
          </motion.div>
        </div>

        {/* Technical Activity Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {[
                { icon: Map, label: "Navigation" },
                { icon: Camera, label: "Tracking" },
                { icon: TreePine, label: "Habitat" },
                { icon: Mountain, label: "Expedition" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 group cursor-default">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Trust Bar */}
      <section className="bg-white border-b border-border py-6 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-30 grayscale contrast-125">
            {['R+V SECURITY', 'DRV MEMBER', 'IATA OFFICIAL', 'AMREF PARTNER'].map((tag) => (
              <span key={tag} className="font-headline font-black text-sm md:text-lg uppercase tracking-tighter">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Compacted Mosaic Intro */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" 
                alt="Migration Movement" 
                fill 
                className="object-cover" 
                data-ai-hint="migration crossing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-[45%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block"
            >
              <Image 
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600" 
                alt="Predator View" 
                fill 
                className="object-cover" 
                data-ai-hint="lion serengeti"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest">Status: Active Registry</Badge>
              <h2 className="font-headline text-3xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter">
                EINE REISE <br /><span className="text-primary">OHNE ENDE</span>
              </h2>
              <div className="w-16 h-1 bg-primary/20 rounded-full" />
            </div>

            <div className="space-y-6 text-muted-foreground font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tight">
              <p>
                Über 1,5 Millionen Gnus, Zebras und Gazellen ziehen in einem ewigen Kreislauf durch das Serengeti-Mara-Ökosystem. Ein Schauspiel aus Instinkt und Überlebenskampf.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Prime Crossing", d: "Jul – Sep" },
                  { t: "Calving Season", d: "Jan – Feb" },
                  { t: "Predator Action", d: "Ganzjährig" },
                  { t: "Expert Guides", d: "SDL Certified" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div>
                      <p className="text-[7px] font-black text-primary uppercase leading-none mb-1">{item.t}</p>
                      <p className="text-[10px] font-black text-secondary uppercase">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="#contact-form" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-xl h-14 md:h-16 px-10 bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                  OFFERTE ANFORDERN
                </Button>
              </Link>
              <div className="flex items-center gap-3 px-5 h-14 md:h-16 bg-secondary rounded-xl text-white">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[7px] font-black text-white/40 uppercase leading-none mb-1">Support Berlin</p>
                  <p className="text-[11px] font-black uppercase">030 22608080</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MigrationSafariFactor />
      <MigrationVideoBlog />

      {/* Package Collection */}
      <section className="py-16 md:py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-24 space-y-3">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">Expedition Registry</span>
            <h2 className="font-headline text-3xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-none">
              IHR EXKLUSIVES <br /><span className="text-primary">AFRIKA-ABENTEUER</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {isLoading ? (
              [1, 2, 3].map(i => <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-[2.5rem]" />)
            ) : (
              packages?.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))
            )}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
