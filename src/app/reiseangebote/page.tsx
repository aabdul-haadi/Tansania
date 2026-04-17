"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Clock, 
  Star, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Users, 
  Compass, 
  Sparkles, 
  Calendar,
  Heart,
  Globe,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackageCard } from '@/components/shared/PackageCard';
import { DestinationDiscovery } from '@/components/sections/DestinationDiscovery';
import { ContactSection } from '@/components/shared/ContactSection';
import { cn } from '@/lib/utils';

const packages = [
  {
    id: 'signature-15',
    title: '15 Tage Safari in Tansania und Sansibar',
    slug: '15-day-safari-zanzibar',
    startingPrice: 5399,
    durationDays: 15,
    category: 'Signature',
    highlights: ['Große Migration', 'Luxus Camps', 'Sansibar Strände'],
    imageUrl: '/assets/images/home/pkg-01.webp',
    excerpt: 'Unsere umfassendste Expedition: Vom Herzen der Serengeti bis zu den Palmen Sansibars.',
    tag: 'Bestseller'
  },
  {
    id: 'safari-13',
    title: '13 Tage Safari & Sansibar',
    slug: 'safari-sansibar-13-tage',
    startingPrice: 3699,
    durationDays: 13,
    category: 'Signature',
    highlights: ['Big Five Safaris', 'Ngorongoro Krater', 'Strand-Relax'],
    imageUrl: '/assets/images/home/pkg-02.webp',
    excerpt: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung.',
    tag: 'Beliebt'
  },
  {
    id: 'compact-11',
    title: '11 Tage Safari & Sansibar Kompakt',
    slug: 'safari-sansibar-11-tage',
    startingPrice: 2999,
    durationDays: 11,
    category: 'Kompakt',
    highlights: ['Elefanten Tarangire', 'Serengeti Highlights', 'Sansibar Tour'],
    imageUrl: '/assets/images/home/pkg-03.webp',
    excerpt: 'Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
    tag: 'Best Value'
  },
  {
    id: 'family-12',
    title: '12 Tage Familien Safari & Kids Adventure',
    slug: 'familien-safari-12-tage',
    startingPrice: 3499,
    durationDays: 12,
    category: 'Familie',
    highlights: ['Pool Lodges', 'Kinder-Safaris', 'Kultur-Besuche'],
    imageUrl: '/assets/images/home/pkg-04.png',
    excerpt: 'Speziell für Familien: Unvergessliche Abenteuer und kindgerechte Lodges in der Wildnis.',
    tag: 'Familientipp'
  }
];

const bestsellers = [
  { name: "15 Tage Signature Kombi", count: "140+ Buchungen", rating: 5.0, icon: Star, urgency: "Nur noch 2 Plätze" },
  { name: "Kilimandscharo Lemosho", count: "95+ Buchungen", rating: 4.9, icon: Globe, urgency: "Top-Saison" },
  { name: "13 Tage Honeymoon Special", count: "80+ Buchungen", rating: 5.0, icon: Heart, urgency: "Aktiv" }
];

export default function ReiseangebotePage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [formHeight, setFormHeight] = useState(600);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.formHeight) {
        setFormHeight(e.data.formHeight);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const filteredPackages = useMemo(() => {
    return packages.filter(p => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = (p.title || '').toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section */}
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Angebote" 
          fill 
          priority 
          className="object-cover scale-105 brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Unglaubliche Safari- und Tansania-Reiseangebote
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 font-normal text-sm md:text-xl leading-relaxed opacity-80">
              Abenteuer, Kultur und Entspannung – perfekt geplant. Erleben Sie Tansania in seiner reinsten Form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-12 h-14 font-bold text-xs shadow-2xl border-none">
                Alle Angebote ansehen
              </Button>
              <Button variant="glass" className="rounded-xl px-12 h-14 font-bold text-xs">
                Sonderangebote & Last-Minute Deals
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Filter Bar */}
      <section className="py-4 md:py-6 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Signature', 'Kompakt', 'Familie'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold transition-all border whitespace-nowrap",
                  activeCategory === cat ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                {cat === 'All' ? 'Alle Angebote' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Reise suchen..." 
              className="h-11 pl-11 rounded-xl bg-muted/10 border-none font-bold text-[10px]"
            />
          </div>
        </div>
      </section>

      {/* 03 Highlight Grid */}
      <section id="catalog" className="pt-8 pb-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 Comparison Matrix with Background Visual */}
      <section className="relative pt-8 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/home/final-cta-bg.webp" 
            alt="Safari Landscape" 
            fill 
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-16 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-white tracking-tight">
              Angebote im Vergleich
            </h2>
            <p className="text-white/70 font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
              Wählen Sie das perfekte Level für Ihr Abenteuer
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-white/20 overflow-hidden shadow-2xl">
            <Table>
              <TableHeader className="bg-muted/10">
                <TableRow className="border-border/30">
                  <TableHead className="font-bold text-[10px] py-6 px-10 tracking-normal text-muted-foreground">Leistung</TableHead>
                  <TableHead className="font-bold text-[10px] tracking-normal text-secondary">Safari Luxury</TableHead>
                  <TableHead className="font-bold text-[10px] tracking-normal text-secondary">Kompakt Tour</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { f: "Unterkunft", l: "Luxury Lodge", k: "Boutique" },
                  { f: "Verpflegung", l: "Vollpension", k: "Vollpension" },
                  { f: "Exklusivität", l: "Privat-Jeep", k: "Privat-Jeep" },
                  { f: "Sicherheit", l: "DRSF Inkl.", k: "DRSF Inkl." },
                  { f: "Preis ab", l: "5.399 €", k: "2.999 €" },
                ].map((row, idx) => (
                  <TableRow key={idx} className="border-border/10 hover:bg-muted/5 transition-all group">
                    <TableCell className="font-bold text-xs text-muted-foreground py-6 px-10 group-hover:text-primary">{row.f}</TableCell>
                    <TableCell className="font-bold text-sm text-secondary">{row.l}</TableCell>
                    <TableCell className="font-bold text-sm text-secondary">{row.k}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 05 Shared Destination Discovery */}
      <DestinationDiscovery />

      {/* 06 Bestseller & Proof */}
      <section className="pt-8 pb-20 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
                  Bestseller & Favoriten
                </h2>
                <p className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
                  Diese Expeditionen wurden im letzten Jahr am häufigsten gebucht und von unseren Gästen mit Höchstnoten bewertet.
                </p>
              </div>

              <div className="space-y-4">
                {bestsellers.map((item, i) => (
                  <div key={i} className="p-6 bg-[#fdfcfb] rounded-2xl border border-border/40 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-border/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-sm md:text-base text-secondary">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <p className="text-[10px] text-muted-foreground font-bold">{item.count}</p>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <p className="text-[9px] text-destructive font-black uppercase tracking-tight">{item.urgency}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-primary">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 pt-4">
              <Card className="relative bg-[#fdfcfb] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-xl border border-border/30">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" 
                    alt="Reise des Monats" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary text-white border-none px-6 py-2 text-[10px] font-bold shadow-2xl">Reise des Monats</Badge>
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-6 text-left">
                  <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-normal">
                    Great Migration Special 2026
                  </h3>
                  <p className="text-muted-foreground font-normal text-[14px] md:text-lg leading-relaxed opacity-80 italic">
                    "Das war die beste Reise unseres Lebens! Das Brüllen der Löwen nachts in der Serengeti ist unbeschreiblich. Wir fühlten uns von Tansania Reiseabenteuer vom ersten Moment an perfekt betreut."
                  </p>
                  <div className="flex items-center gap-5 border-t border-border/40 pt-8">
                    <div className="w-12 h-12 rounded-xl bg-muted overflow-hidden border-2 border-white shadow-lg">
                      <img src="https://picsum.photos/seed/guest-fav/100/100" alt="Guest" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-secondary">Familie Weidner</p>
                      <p className="text-[10px] font-normal text-muted-foreground tracking-normal">Safari im Juni 2025</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Trust Signals */}
      <section className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, t: "DRSF Abgesichert", d: "Ihre Zahlungen sind zu 100% durch den deutschen Reisesicherungsfonds geschützt." },
              { icon: Globe, t: "Arusha Registry Office", d: "Direkte Betreuung vor Ort durch unser Expertenteam rund um die Uhr." },
              { icon: Compass, t: "Deutschsprachige Guides", d: "Staatlich geprüfte Experten, die Ihre Sprache sprechen und die Savanne kennen." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-5 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#fdf7f2] border border-[#f0ebe0] flex items-center justify-center transition-all group-hover:bg-primary shadow-sm">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-secondary tracking-tight">{item.t}</h4>
                  <p className="text-muted-foreground font-normal text-[14px] leading-[20px] opacity-80 max-w-[280px]">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Dynamic Inquiry Protocol */}
      <section id="inquiry" className="pt-8 pb-24 bg-[#fdfcfb] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
              Individuelle Beratung
            </h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
              Begrenzte Plätze • Experten klären alles für Sie
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-border/50 overflow-hidden relative transition-all duration-700 hover:shadow-primary/5">
            <div 
              className="w-full transition-all duration-500 ease-in-out"
              style={{ height: `${formHeight}px` }}
            >
              <div id="tansania-form-571d4d75" className="w-full h-full">
                <iframe
                  ref={iframeRef}
                  src="https://app.tansania-reiseabenteuer.de/forms/embed/571d4d75ca0448ab9a1df187bb8e4cba"
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  title="Spezialisierte Reiseanfrage"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="p-5 bg-muted/5 border-t border-border/40 flex items-center justify-center gap-12">
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/40 tracking-normal">
                <ShieldCheck className="w-4 h-4" /> Dsgvo Konform
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/40 tracking-normal">
                <Zap className="w-4 h-4" /> Schnelle Antwort
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <ContactSection />
      </section>
    </div>
  );
}
