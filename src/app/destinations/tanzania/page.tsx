"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Map, 
  Camera, 
  Zap, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  Mountain,
  Palmtree,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/shared/ContactSection';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';

export default function TanzaniaMasterHub() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => (
    firestore ? query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(3)) : null
  ), [firestore]);
  const { data: packages, isLoading } = useCollection(pkgQuery);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* Cinematic Master Hero */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tanzania Savannah" 
          fill 
          priority
          className="object-cover brightness-50 scale-105"
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[11px] font-black uppercase tracking-[0.4em] mb-6 shadow-2xl">
              Das Herz von Afrika
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.85] tracking-tighter uppercase">
              TANSANIA <br /><span className="text-primary">MASTER</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[11px] md:text-xl text-white/90 font-black uppercase tracking-[0.3em] leading-relaxed">
              Vom Gipfel des Kilimandscharo bis zu den weißen Stränden Sansibars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regional Grid Protocol */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[11px] block">National-Registry</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase leading-[0.9] tracking-tighter">
                EINE WELT <br />IN EINEM <span className="text-primary">LAND</span>
              </h2>
              <p className="text-muted-foreground font-bold leading-relaxed text-sm md:text-xl uppercase tracking-tight opacity-80">
                Tansania ist nicht nur ein Reiseziel – es ist die Definition von Abenteuer. Wir führen Sie zu den unberührten Orten, die in keinem Reiseführer stehen.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Mountain, title: "Northern Circuit", desc: "Serengeti, Ngorongoro & Tarangire." },
                { icon: Palmtree, title: "Zanzibar Archipelago", desc: "Tropischer Luxus & Swahili-Kultur." },
                { icon: Sun, title: "Southern Parks", desc: "Ruaha & Selous für echte Entdecker." }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-white rounded-3xl border border-border/50 shadow-sm flex items-center gap-6 group hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-secondary uppercase tracking-tight leading-none">{item.title}</h4>
                    <p className="text-[11px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-muted">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" alt="Safari" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-primary font-black text-[10px] uppercase tracking-widest mb-2">Signature Experience</p>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase leading-none">Big Five Safari</h4>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-muted md:translate-y-12">
              <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" alt="Beach" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-primary font-black text-[10px] uppercase tracking-widest mb-2">Island Escape</p>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase leading-none">Sansibar Luxus</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Packages */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[11px] mb-2 block">Aktuelle Kollektion</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-[0.9]">UNSERE <br /><span className="text-primary">EXPEDITIONEN</span></h2>
            </div>
            <Link href="/safaris">
              <Button variant="outline" className="rounded-xl px-8 h-12 md:h-14 text-[11px] font-black uppercase tracking-widest border-muted">Alle Pakete ansehen</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [1, 2, 3].map(i => <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-[2.5rem]" />)
            ) : packages?.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
