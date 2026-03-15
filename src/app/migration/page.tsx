
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

      {/* Section 2: 100% SS Exact Clone Mosaic Section */}
      <section className="py-12 md:py-32 container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Mosaic Logic Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative flex items-center gap-3 md:gap-6">
              {/* Main Vertical Image */}
              <div className="w-[50%] shrink-0">
                <div className="relative aspect-[2/3] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" 
                    alt="Migration Flow" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="migration herds"
                  />
                </div>
              </div>
              
              {/* Stacked Images */}
              <div className="w-[50%] flex flex-col gap-3 md:gap-6">
                <div className="relative aspect-[4/3] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800" 
                    alt="River Crossing" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="migration crossing"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800" 
                    alt="Savannah Wildlife" 
                    fill 
                    className="object-cover" 
                    data-ai-hint="zebra savannah"
                  />
                </div>
              </div>

              {/* The Signature Arrow Circle */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border-[6px] border-[#fdfcfb]"
              >
                <ArrowUp className="w-6 h-6 md:w-10 md:h-10 text-primary stroke-[3px]" />
              </motion.div>
            </div>
          </div>

          {/* Content Narrative Column */}
          <div className="lg:col-span-6 space-y-8 md:space-y-10">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-5xl font-black text-primary uppercase leading-[1.1] tracking-tighter">
                Die Great Migration: <br />
                Die größte Tierwanderung der Welt
              </h2>
              <div className="space-y-6 text-muted-foreground font-bold text-xs md:text-sm leading-relaxed uppercase tracking-tight max-w-xl">
                <p>
                  Die Great Migration ist die größte Tierwanderung der Welt. Mehr als eine Million Gnus, begleitet von Zebras und Gazellen, ziehen jedes Jahr durch die Serengeti auf der Suche nach frischem Gras und Wasser. Dieses Naturereignis gehört zu den beeindruckendsten Safari-Erlebnissen Afrikas.
                </p>
                <p className="text-secondary">
                  Im Mittelpunkt stehen riesige Gnu-Herden, begleitet von Zebras und Gazellen. Raubtiere wie Löwen, Hyänen, Leoparden und Krokodile folgen den Herden – ein dramatisches Naturschauspiel.
                </p>
              </div>
            </div>

            {/* Feature Registry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-black text-sm md:text-base text-secondary uppercase tracking-tight">Individuelle Reiseplanung</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Maßgeschneiderte Safari-Routen und handverlesene Lodges – perfekt auf Ihre Wünsche abgestimmt.
                </p>
                <ul className="space-y-1.5">
                  {['Serengeti', 'Great Migration'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-[9px] font-black uppercase text-secondary">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-black text-sm md:text-base text-secondary uppercase tracking-tight">Safari-Expertise</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                  Unsere Experten beraten Sie zu Reisezeit, Migration-Routen und den besten Regionen der Serengeti.
                </p>
                <ul className="space-y-1.5">
                  {['Safari', 'Tansania'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-[9px] font-black uppercase text-secondary">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Command Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase text-muted-foreground leading-none mb-1">Buchung Nummer</p>
                  <p className="text-sm font-black text-secondary">+49 30 22608080</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 md:h-16 font-black text-[10px] uppercase tracking-widest bg-primary text-white shadow-xl hover:scale-105 transition-transform border-none">
                Kostenloses Angebot anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MigrationSafariFactor />
      <MigrationTimeline />
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
