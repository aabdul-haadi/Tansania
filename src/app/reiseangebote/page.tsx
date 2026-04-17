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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PackageCard } from '@/components/shared/PackageCard';
import { DestinationDiscovery } from '@/components/sections/DestinationDiscovery';
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
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
    excerpt: 'Speziell für Familien: Unvergessliche Abenteuer und kindgerechte Lodges in der Wildnis.',
    tag: 'Familientipp'
  }
];

const bestsellers = [
  { name: "15 Tage Signature Kombi", count: "140+ Buchungen", rating: 5.0, icon: Star, urgency: "Nur noch 2 Plätze im März" },
  { name: "Kilimandscharo Lemosho", count: "95+ Buchungen", rating: 4.9, icon: Compass, urgency: "Top-Saison fast ausgebucht" },
  { name: "13 Tage Honeymoon Special", count: "80+ Buchungen", rating: 5.0, icon: Heart, urgency: "Frühbucherrabatt aktiv" }
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
      <section className="relative h-[55vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-secondary">
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Offizielles Safari-Register 2026/27
            </div>
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Unglaubliche Safari- und <br /> Tansania-Reiseangebote
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 text-sm md:text-xl font-normal leading-relaxed opacity-80">
              Abenteuer, Kultur und Entspannung – perfekt geplant. Erleben Sie Tansania in seiner reinsten Form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-12 h-14 font-bold text-xs shadow-2xl border-none">
                Alle Angebote ansehen
              </Button>
              <Button variant="glass" className="rounded-xl px-12 h-14 font-bold text-xs">
                Last-Minute Deals
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Filter Bar */}
      <section className="py-6 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar pb-1">
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
      <section id="catalog" className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 Comparison Matrix */}
      <section className="py-12 md:py-16 bg-[#fdfcfb] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 space-y-3">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">Angebote im Vergleich</h2>
            <p className="text-muted-foreground text-sm font-normal opacity-70">Wählen Sie das perfekte Level für Ihr Abenteuer</p>
          </div>

          <div className="bg-white rounded-[2rem] border border-border/50 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-muted/5">
                <TableRow className="border-border/30">
                  <TableHead className="font-bold text-[10px] py-6 px-10 uppercase tracking-widest">Leistung</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest text-secondary">Safari Luxury</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest text-secondary">Kompakt Tour</TableHead>
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
                  <TableRow key={idx} className="border-border/20 hover:bg-muted/5 transition-all group">
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
      <section className="py-12 md:py-16 bg-[#fdfcfb] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-none">Bestseller & Favoriten</h2>
                <p className="text-muted-foreground text-sm md:text-lg font-normal opacity-80 leading-relaxed">
                  Diese Expeditionen wurden im letzten Jahr am häufigsten gebucht und von unseren Gästen mit Höchstnoten bewertet.
                </p>
              </div>

              <div className="space-y-3">
                {bestsellers.map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-border/40 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
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

            <div className="lg:col-span-7">
              <Card className="relative bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-border/30">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" 
                    alt="Reise des Monats" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary text-white border-none px-6 py-2 text-[10px] font-bold shadow-2xl">REISE DES MONATS</Badge>
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-6 text-left">
                  <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">Great Migration Special 2026</h3>
                  <p className="text-muted-foreground text-base md:text-lg font-normal leading-relaxed opacity-80 italic">
                    "Das war die beste Reise unseres Lebens! Das Brüllen der Löwen nachts in der Serengeti ist unbeschreiblich. Wir fühlten uns von Tansania Reiseabenteuer vom ersten Moment an perfekt betreut."
                  </p>
                  <div className="flex items-center gap-5 border-t border-border/40 pt-8">
                    <div className="w-12 h-12 rounded-xl bg-muted overflow-hidden border-2 border-white shadow-lg">
                      <img src="https://picsum.photos/seed/guest-fav/100/100" alt="Guest" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-secondary">Familie Weidner</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Safari im Juni 2025</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Trust Signals */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, t: "DRSF Abgesichert", d: "Ihre Zahlungen sind zu 100% durch den deutschen Reisesicherungsfonds geschützt." },
              { icon: Globe, t: "Arusha Registry Office", d: "Direkte Betreuung vor Ort durch unser Expertenteam rund um die Uhr." },
              { icon: Compass, t: "Deutschsprachige Guides", d: "Staatlich geprüfte Experten, die Ihre Sprache sprechen und die Savanne kennen." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#fdf7f2] border border-[#f0ebe0] flex items-center justify-center transition-all group-hover:bg-primary shadow-sm group-hover:shadow-primary/20">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-lg text-secondary">{item.t}</h4>
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Dynamic Inquiry Protocol */}
      <section id="inquiry" className="py-12 md:py-24 bg-[#fdfcfb] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">Individuelle Beratung</h2>
            <p className="text-muted-foreground text-sm font-bold uppercase tracking-[0.2em] opacity-70">
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
            
            <div className="p-4 bg-muted/5 border-t border-border/40 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-[8px] font-black uppercase text-muted-foreground/40 tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" /> DSGVO Konform
              </div>
              <div className="flex items-center gap-2 text-[8px] font-black uppercase text-muted-foreground/40 tracking-widest">
                <Zap className="w-3.5 h-3.5" /> Schnelle Antwort
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
