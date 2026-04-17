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
    tier: 'Luxury'
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
    tier: 'Premium'
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
    tier: 'Standard'
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
    tier: 'Premium'
  }
];

const bestsellers = [
  { name: "15 Tage Signature Kombi", count: "140+ Buchungen", rating: 5.0, icon: Star },
  { name: "Kilimandscharo Lemosho", count: "95+ Buchungen", rating: 4.9, icon: Mountain },
  { name: "13 Tage Honeymoon Special", count: "80+ Buchungen", rating: 5.0, icon: Heart }
];

export default function ReiseangebotePage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [formHeight, setFormHeight] = useState(600);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Dynamic Form Registry Protocol
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
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Clean Prestige Hero */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Safari-Angebote Tansania" 
          fill 
          priority 
          className="object-cover brightness-[0.5] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fdfcfb]/10" />
        
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
            <p className="max-w-2xl mx-auto text-white/90 text-sm md:text-xl font-normal leading-relaxed opacity-80">
              Abenteuer, Kultur & Entspannung – perfekt für Sie geplant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-10 h-14 font-bold text-[11px] shadow-2xl border-none">
                Alle Angebote ansehen
              </Button>
              <Button variant="glass" className="rounded-xl px-10 h-14 font-bold text-[11px] border-white/20">
                Sonderangebote & Deals
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Filter & Search Hub */}
      <section className="py-6 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setActiveCategory('All')}
                className={cn(
                  "px-5 py-2 rounded-full text-[10px] font-bold transition-all border",
                  activeCategory === 'All' ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                Alle Typen
              </button>
              {['Signature', 'Kompakt', 'Familie', 'Luxus'].map((cat) => (
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
                placeholder="Region oder Route suchen..." 
                className="h-11 pl-11 rounded-xl bg-muted/10 border-none font-bold text-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 Reisepaket Highlight Grid */}
      <section id="catalog" className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 Vergleichstabelle */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">Expeditions-Vergleich</h2>
            <p className="text-muted-foreground text-sm font-normal opacity-70">Die wichtigsten Parameter auf einen Blick.</p>
          </div>

          <div className="bg-[#fdfcfb] rounded-[2rem] border border-border/50 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-muted/10">
                <TableRow className="border-border/50">
                  <TableHead className="font-bold text-[10px] py-6 px-8">Leistung</TableHead>
                  <TableHead className="font-bold text-[10px]">Safari Signature</TableHead>
                  <TableHead className="font-bold text-[10px]">Kompakt Tour</TableHead>
                  <TableHead className="font-bold text-[10px]">Kili-Expedition</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { feature: "Unterkunft", s: "Luxus Lodge", k: "Boutique", e: "Berghütten" },
                  { feature: "Verpflegung", s: "Vollpension", k: "Vollpension", e: "Vollpension" },
                  { feature: "Guides", s: "Premium Service", k: "Staatlich Gepr.", e: "Cert. Alpine" },
                  { feature: "Preis ab", s: "5.399 €", k: "2.999 €", e: "3.599 €" },
                ].map((row, idx) => (
                  <TableRow key={idx} className="border-border/30 hover:bg-white transition-colors">
                    <TableCell className="font-bold text-xs text-muted-foreground py-5 px-8">{row.feature}</TableCell>
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

      {/* 05 Bestseller & Favoriten */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6 text-left">
                <span className="text-primary font-bold text-[10px] block">Trending Registry</span>
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary leading-none">Bestseller & Favoriten</h2>
                <p className="text-muted-foreground font-normal text-sm md:text-lg leading-relaxed opacity-80">
                  Basierend auf über 1.200 Expeditionen im letzten Jahr.
                </p>
              </div>

              <div className="space-y-3">
                {bestsellers.map((item, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl border border-border/40 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><item.icon className="w-5 h-5" /></div>
                      <div className="text-left">
                        <h4 className="font-bold text-sm text-secondary">{item.name}</h4>
                        <p className="text-[10px] text-muted-foreground font-bold mt-0.5">{item.count}</p>
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
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-1" />
                <Card className="relative bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40">
                  <div className="aspect-video relative overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" alt="Reise des Monats" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold shadow-xl">Reise des Monats</Badge>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 space-y-6 text-left">
                    <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary">Great Migration Special 2026</h3>
                    <p className="text-muted-foreground text-base md:text-xl font-normal leading-relaxed opacity-80 italic">
                      „Das war die beste Reise unseres Lebens! Das Brüllen der Löwen nachts in der Serengeti ist unbeschreiblich. Alles war perfekt organisiert.“
                    </p>
                    <div className="flex items-center gap-4 border-t border-border/40 pt-6">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                        <img src="https://picsum.photos/seed/guest-fav/100/100" alt="Guest" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-secondary">Familie Weidner</p>
                        <p className="text-[10px] font-bold text-muted-foreground">Safari im Juni 2025</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Geographic Discovery */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">Ihre Expeditions-Ziele</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'serengeti', name: 'Serengeti', icon: Leaf, desc: 'Große Migration & Big Five Safari' },
              { id: 'ngorongoro', name: 'Ngorongoro', icon: Sparkles, desc: 'UNESCO Welterbe & Krater-Eden' },
              { id: 'kilimanjaro', name: 'Kilimandscharo', icon: Mountain, desc: 'Dach Afrikas & Trekking-Abenteuer' },
              { id: 'zanzibar', name: 'Sansibar', icon: Waves, desc: 'Inselparadies & Swahili-Kultur' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#fdfcfb] rounded-[2rem] border border-border/40 text-center space-y-5 hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#F0EBE0] flex items-center justify-center mx-auto shadow-sm group-hover:bg-primary transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-xl md:text-2xl font-normal text-secondary">{item.name}</h4>
                  <p className="text-[10px] text-muted-foreground font-bold leading-relaxed opacity-60">{item.desc}</p>
                </div>
                <Link href={`/destinations/${item.id}`} className="inline-flex items-center gap-2 text-[10px] font-bold text-primary hover:text-secondary transition-colors">
                  Details ansehen <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Trust & Why Us */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200" alt="Expertise" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            <div className="space-y-10 order-1 lg:order-2 text-left">
              <div className="space-y-4">
                <span className="text-primary font-bold text-[10px] block">Premium Standard</span>
                <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary leading-[0.9] tracking-tighter">Warum mit uns reisen?</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: ShieldCheck, t: "DRSF Abgesichert", d: "Ihre Zahlungen sind zu 100% durch den deutschen Reisesicherungsfonds geschützt." },
                  { icon: Globe, t: "Arusha Registry Office", d: "Direkte Betreuung vor Ort durch unser Expertenteam rund um die Uhr." },
                  { icon: Compass, t: "Deutschsprachige Guides", d: "Staatlich geprüfte Experten, die Ihre Sprache sprechen." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-base text-secondary">{item.t}</h4>
                      <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-70">{item.d}</p>
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
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">Individuelle Beratung</h2>
            <p className="text-muted-foreground text-[10px] md:text-sm font-bold uppercase tracking-widest max-w-xl mx-auto">
              Begrenzte Plätze – unsere Experten klären alle Details für Sie.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-border/50 overflow-hidden relative transition-all duration-500 hover:shadow-primary/5">
            <div 
              ref={formContainerRef}
              className="w-full transition-all duration-500 ease-in-out"
              style={{ height: `${formHeight}px` }}
            >
              <iframe
                src="https://app.tansania-reiseabenteuer.de/forms/embed/571d4d75ca0448ab9a1df187bb8e4cba"
                className="w-full h-full border-none overflow-hidden"
                scrolling="no"
                title="Spezialisierte Reiseanfrage"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 09 FAQ Hub */}
      <section className="py-12 md:py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tighter">Häufig gestellte Fragen</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Wann ist die beste Reisezeit?", a: "Die Trockenzeiten von Juni bis Oktober und Januar bis Februar sind ideal für Safaris." },
              { q: "Benötige ich ein Visum?", a: "Ja, für Tansania ist ein Visum erforderlich. Wir unterstützen Sie gerne beim e-Visum Prozess." },
              { q: "Was ist in den Angeboten inkludiert?", a: "In der Regel alle Inlandsflüge, Transfers, Unterkünfte mit Vollpension und private Guides." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-[#FDFCFB] rounded-2xl px-8 shadow-sm transition-all hover:bg-white border border-transparent hover:border-border">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-8 opacity-80 text-left">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

