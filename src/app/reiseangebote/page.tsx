
"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Users, 
  Compass, 
  Sparkles, 
  Leaf, 
  Mountain, 
  Waves, 
  Calendar,
  ChevronRight,
  Heart,
  Plus,
  Globe,
  Loader2
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
import { cn } from '@/lib/utils';

// Master Data Registry for Offers
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
  { name: "Kilimandscharo Lemosho", count: "95+ Buchungen", rating: 4.9, icon: Mountain, urgency: "Top-Saison fast ausgebucht" },
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
      {/* 01 High-Impact Hero Section */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Tansania Safari Angebote" 
            fill 
            priority 
            className="object-cover brightness-[0.4] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]/10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white text-[10px] font-bold border border-primary/30 backdrop-blur-md mb-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Offizielle Safari-Registry 2026/27
            </div>
            <h1 className="font-headline text-4xl md:text-8xl font-normal text-white leading-tight tracking-tight uppercase">
              Unglaubliche Safari- <br />und Reiseangebote
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 text-sm md:text-xl font-normal leading-relaxed opacity-80">
              Abenteuer, Kultur & Entspannung – perfekt für Sie geplant. Erleben Sie Tansania in seiner reinsten Form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-12 h-14 md:h-16 font-bold text-[11px] shadow-2xl border-none transition-all hover:scale-105">
                Alle Angebote ansehen
              </Button>
              <Button variant="glass" className="rounded-xl px-12 h-14 md:h-16 font-bold text-[11px] border-white/20 backdrop-blur-md">
                Sonderangebote & Deals
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Specialized Filter Hub */}
      <section className="py-6 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setActiveCategory('All')}
                className={cn(
                  "px-5 py-2 rounded-full text-[10px] font-bold transition-all border whitespace-nowrap",
                  activeCategory === 'All' ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                Alle Angebote
              </button>
              {['Signature', 'Kompakt', 'Familie', 'Wildlife'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2 rounded-full text-[10px] font-bold transition-all border whitespace-nowrap",
                    activeCategory === cat ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white text-muted-foreground border-border hover:border-primary/40"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tansania Rundreise suchen..." 
                className="h-11 pl-11 rounded-xl bg-muted/10 border-none font-bold text-[10px]"
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 High-Density Offer Grid */}
      <section id="catalog" className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 Bestsellers & Social Proof */}
      <section className="py-12 md:py-20 bg-[#fdfcfb] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6 text-left">
                <span className="text-primary font-bold text-[10px] block tracking-widest uppercase">Popularity Protocol</span>
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary leading-none">Bestseller & Favoriten</h2>
                <p className="text-muted-foreground font-normal text-sm md:text-lg leading-relaxed opacity-80">
                  Diese Expeditionen wurden im letzten Jahr am häufigsten gebucht und von unseren Gästen mit Höchstnoten bewertet.
                </p>
              </div>

              <div className="space-y-3">
                {bestsellers.map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-border/40 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all duration-500">
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
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700" />
                <Card className="relative bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-border/40">
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
                    <h3 className="font-headline text-2xl md:text-5xl font-normal text-secondary leading-tight">Great Migration Special 2026</h3>
                    <p className="text-muted-foreground text-base md:text-xl font-normal leading-relaxed opacity-80 italic">
                      „Das war die beste Reise unseres Lebens! Das Brüllen der Löwen nachts in der Serengeti ist unbeschreiblich. Wir fühlten uns von Tansania Reiseabenteuer vom ersten Moment an perfekt betreut.“
                    </p>
                    <div className="flex items-center gap-5 border-t border-border/40 pt-8">
                      <div className="w-14 h-14 rounded-2xl bg-muted overflow-hidden border-2 border-white shadow-lg">
                        <img src="https://picsum.photos/seed/guest-fav/100/100" alt="Guest" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-secondary">Familie Weidner</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Safari im Juni 2025 • Arusha & Serengeti</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Comparison Matrix */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">Angebote im Vergleich</h2>
            <p className="text-muted-foreground text-sm font-normal opacity-80 uppercase tracking-widest">Wählen Sie das perfekte Level für Ihr Abenteuer</p>
          </div>

          <div className="bg-[#fdfcfb] rounded-[2rem] border border-border/50 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-muted/10">
                <TableRow className="border-border/50">
                  <TableHead className="font-bold text-[10px] py-6 px-10 uppercase tracking-widest">Leistung</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Safari Signature</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Kompakt Tour</TableHead>
                  <TableHead className="font-bold text-[10px] uppercase tracking-widest">Kili-Expedition</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { feature: "Unterkunft", s: "Luxus Lodge", k: "Boutique", e: "Berghütten" },
                  { feature: "Verpflegung", s: "Vollpension", k: "Vollpension", e: "Vollpension" },
                  { feature: "Guides", s: "Premium Service", k: "Staatlich Gepr.", e: "Cert. Alpine" },
                  { feature: "Drsf Schutz", s: "Inklusive", k: "Inklusive", e: "Inklusive" },
                  { feature: "Preis ab", s: "5.399 €", k: "2.999 €", e: "3.599 €" },
                ].map((row, idx) => (
                  <TableRow key={idx} className="border-border/30 hover:bg-white transition-all group">
                    <TableCell className="font-bold text-xs text-muted-foreground py-6 px-10 group-hover:text-primary transition-colors">{row.feature}</TableCell>
                    <TableCell className="font-bold text-sm text-secondary">{row.s}</TableCell>
                    <TableCell className="font-bold text-sm text-secondary">{row.k}</TableCell>
                    <TableCell className="font-bold text-sm text-secondary">{row.e}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 06 Geographic Discovery Hub */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-7xl font-normal text-secondary tracking-tighter">Destinationen & Highlights</h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto font-normal opacity-80 uppercase tracking-widest">
              Entdecken Sie die Regionen, die Ihre Tansania Safari so einzigartig machen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'serengeti', name: 'Serengeti', icon: Leaf, desc: 'Tiermigration & Big Five • Das Herz der Wildnis' },
              { id: 'ngorongoro', name: 'Ngorongoro', icon: Sparkles, desc: 'UNESCO Welterbe • Afrikas Garten Eden' },
              { id: 'kilimanjaro', name: 'Kilimandscharo', icon: Mountain, desc: 'Dach Afrikas • Das ultimative Trekking-Epos' },
              { id: 'zanzibar', name: 'Sansibar', icon: Waves, desc: 'Inselparadies • Türkisblaues Meer & Gewürze' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-[#fdfcfb] rounded-[2.5rem] border border-border/40 text-center space-y-6 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <item.icon className="w-20 h-20" />
                </div>
                <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-[#F0EBE0] flex items-center justify-center mx-auto shadow-sm group-hover:bg-primary transition-all duration-500">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-2xl font-normal text-secondary">{item.name}</h4>
                  <p className="text-[10px] text-muted-foreground font-bold leading-relaxed opacity-60 uppercase tracking-widest">{item.desc}</p>
                </div>
                <Link href={`/destinations/${item.id}`} className="inline-flex items-center gap-2 text-[10px] font-black text-primary hover:text-secondary transition-colors uppercase tracking-widest">
                  Details <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Trust Signals Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1 border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200" 
                alt="Safari Expertise" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <span className="font-bold text-[10px] uppercase tracking-[0.3em]">Arusha Registry Office</span>
              </div>
            </div>
            
            <div className="space-y-12 order-1 lg:order-2 text-left">
              <div className="space-y-6">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] block">Premium Standard</span>
                <h2 className="font-headline text-3xl md:text-7xl font-normal text-secondary leading-[0.85] tracking-tighter uppercase">Warum mit <br />uns reisen?</h2>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: ShieldCheck, t: "DRSF Abgesichert", d: "Ihre Zahlungen sind zu 100% durch den deutschen Reisesicherungsfonds geschützt. Vollkommene finanzielle Sicherheit." },
                  { icon: Globe, t: "Direkt vor Ort", d: "Eigenes Office in Arusha. Wir sind 24/7 für Sie da – persönlich und ohne Umwege über Agenturen." },
                  { icon: Compass, t: "Deutschsprachige Guides", d: "Staatlich geprüfte Experten, die Ihre Sprache sprechen und die Savanne wie ihre Westentasche kennen." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-sm">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-base md:text-xl text-secondary uppercase tracking-tight">{item.t}</h4>
                      <p className="text-sm md:text-[15px] text-muted-foreground font-normal leading-relaxed opacity-80">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 Specialized Dynamic Inquiry Registry */}
      <section id="inquiry" className="py-12 md:py-24 bg-[#fdfcfb] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase tracking-tighter">Individuelle Beratung</h2>
            <p className="text-muted-foreground text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] max-w-xl mx-auto opacity-70">
              Limitierte Plätze • Unsere Experten entwerfen Ihre Traumroute in 24 Stunden.
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
                <ShieldCheck className="w-3.5 h-3.5" /> DSGVO KONFORM
              </div>
              <div className="flex items-center gap-2 text-[8px] font-black uppercase text-muted-foreground/40 tracking-widest">
                <Zap className="w-3.5 h-3.5" /> REAKTION IN 24H
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 FAQ Hub */}
      <section className="py-12 md:py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase tracking-tighter">Häufig gestellte Fragen</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Was kostet ein typischer Safari-Urlaub in Tansania?", a: "Die Kosten hängen stark von der Reisedauer und dem gewünschten Komfortlevel ab. Eine hochwertige 12-tägige Privat-Safari inkl. Inlandsflügen beginnt meist bei ca. 3.500 € pro Person." },
              { q: "Benötige ich für Tansania ein Visum?", a: "Ja, für deutsche Staatsangehörige ist ein Visum erforderlich. Wir unterstützen Sie gerne beim e-Visum Prozess, der in der Regel 48-72 Stunden dauert." },
              { q: "Sind alle Angebote durch den DRSF abgesichert?", a: "Ja, als deutscher Reiseveranstalter sind alle unsere Pauschalreisen zu 100% durch den Deutschen Reisesicherungsfonds geschützt. Sie erhalten bei Buchung den gesetzlichen Sicherungsschein." },
              { q: "Wann ist die beste Reisezeit für die Serengeti?", a: "Die Trockenzeiten von Juni bis Oktober und Januar bis Februar sind ideal für klassische Tierbeobachtungen. Die Große Migration erreicht ihren Höhepunkt am Mara River meist zwischen Juli und September." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-[#FDFCFB] rounded-[1.5rem] px-8 md:px-10 shadow-sm transition-all hover:bg-white border border-transparent hover:border-border group">
                <AccordionTrigger className="font-bold text-sm md:text-lg py-7 hover:no-underline text-left text-secondary transition-colors [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-6">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-5 h-5 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed pb-8 opacity-80 text-left">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10 Final CTA Footer */}
      <section className="py-12 md:py-20 bg-[#FDF7F2]">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-border shadow-xl mx-auto flex items-center justify-center">
            <Compass className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary uppercase tracking-tighter">Bereit für Ihr <br />nächstes Abenteuer?</h2>
            <p className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-[0.3em] max-w-xl mx-auto opacity-70">
              Lassen Sie uns gemeinsam Geschichte schreiben.
            </p>
          </div>
          <div className="pt-6">
             <Button onClick={() => scrollTo('inquiry')} className="rounded-xl px-12 h-14 md:h-16 bg-secondary text-white hover:bg-primary font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl border-none transition-all">
               ANFRAGE STARTEN <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
