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
  Compass,
  ArrowUp,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/shared/ContactSection';
import { MigrationVideoBlog } from '@/components/sections/MigrationVideoBlog';
import { MigrationSafariFactor } from '@/components/sections/MigrationSafariFactor';
import { MigrationTimeline } from '@/components/sections/MigrationTimeline';
import { MigrationExpertise } from '@/components/sections/MigrationExpertise';
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
      <section className="relative h-[55vh] md:h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden bg-secondary">
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
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-2">
              <Sparkles className="w-2.5 h-2.5 text-primary" />
              <span className="text-[7px] font-black text-white uppercase tracking-[0.3em]">Naturwunder Registry</span>
            </div>
            <h1 className="font-headline text-4xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase select-none">
              MIGRATION
            </h1>
            <p className="text-white/60 font-black uppercase tracking-[0.5em] text-[8px] md:text-xs max-w-xl mx-auto leading-relaxed">
              Die größte Tierwanderung der Welt • Live Monitoring
            </p>
          </motion.div>
        </div>

        {/* Technical Activity Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
              {[
                { icon: Map, label: "Navigation" },
                { icon: Camera, label: "Tracking" },
                { icon: TreePine, label: "Habitat" },
                { icon: Mountain, label: "Expedition" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 group cursor-default">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[6px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Trust Bar */}
      <section className="bg-white border-b border-border py-4 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-30 grayscale contrast-125">
            {['R+V SECURITY', 'DRV MEMBER', 'IATA OFFICIAL', 'AMREF PARTNER'].map((tag) => (
              <span key={tag} className="font-headline font-black text-xs md:text-sm uppercase tracking-tighter">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Mosaic Section */}
      <section className="py-10 md:py-20 container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative flex items-center gap-3 md:gap-4">
              <div className="w-[50%] shrink-0">
                <div className="relative aspect-[2/3] rounded-[1.25rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" 
                    alt="Migration Flow" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="migration herds"
                  />
                </div>
              </div>
              
              <div className="w-[50%] flex flex-col gap-3 md:gap-4">
                <div className="relative aspect-[4/3] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800" 
                    alt="River Crossing" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="migration crossing"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800" 
                    alt="Savannah Wildlife" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="zebra savannah"
                  />
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl z-20 border-[4px] border-[#fdfcfb]"
              >
                <ArrowUp className="w-5 h-5 md:w-7 md:h-7 text-primary stroke-[3px]" />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="font-headline text-2xl md:text-4xl font-black text-primary uppercase leading-[1.1] tracking-tighter">
                Die Great Migration: <br />
                Die größte Tierwanderung der Welt
              </h2>
              <div className="space-y-4 text-muted-foreground font-bold text-[10px] md:text-xs lg:text-sm leading-relaxed uppercase tracking-tight max-w-xl">
                <p>
                  Die Great Migration ist die größte Tierwanderung der Welt. Mehr als eine Million Gnus, begleitet von Zebras und Gazellen, ziehen jedes Jahr durch die Serengeti.
                </p>
                <p className="text-secondary">
                  Im Mittelpunkt stehen riesige Gnu-Herden. Raubtiere wie Löwen, Hyänen und Leoparden folgen den Herden – ein dramatisches Naturschauspiel.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-black text-xs md:text-sm text-secondary uppercase tracking-tight">Individuelle Planung</h4>
                </div>
                <p className="text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Maßgeschneiderte Safari-Routen und handverlesene Lodges.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-black text-xs md:text-sm text-secondary uppercase tracking-tight">Safari-Expertise</h4>
                </div>
                <p className="text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Unsere Experten beraten Sie zu Reisezeit und Migration-Routen.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[7px] font-black uppercase text-muted-foreground leading-none mb-1">Buchung Nummer</p>
                  <p className="text-xs font-black text-secondary">+49 30 22608080</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-8 h-12 md:h-14 font-black text-[9px] uppercase tracking-widest bg-primary text-white shadow-xl hover:scale-105 transition-transform border-none">
                Kostenloses Angebot anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MigrationSafariFactor />
      <MigrationExpertise />
      <MigrationTimeline />
      <MigrationVideoBlog />

      {/* Package Collection */}
      <section className="py-12 md:py-20 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-2">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px]">Expedition Registry</span>
            <h2 className="font-headline text-2xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-none">
              IHR EXKLUSIVES <br /><span className="text-primary">AFRIKA-ABENTEUER</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {isLoading ? (
              [1, 2, 3].map(i => <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-[1.5rem]" />)
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