
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
  Plus,
  ChevronRight
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
    excerpt: 'Speziell für Familien: Unvergessliche Abenteuer und kindgerechte Lodges in Tansanias Wildnis.',
    tag: 'Familientipp'
  }
];

const bestsellers = [
  { name: "15 Tage Signature Kombi", count: "140+ Buchungen", rating: 5.0, icon: Star, urgency: "Nur noch 2 Plätze" },
  { name: "Kilimandscharo Lemosho", count: "95+ Buchungen", rating: 4.9, icon: Globe, urgency: "Top-Saison" },
  { name: "13 Tage Honeymoon Special", count: "80+ Buchungen", rating: 5.0, icon: Heart, urgency: "Aktiv" }
];

const faqs = [
  { q: "Wie finde ich das passende Angebot für mich?", a: "Nutzen Sie unsere Filter nach Kategorie und Dauer. Gerne beraten wir Sie auch persönlich, um das Angebot auf Ihre Wünsche zuzuschneiden." },
  { q: "Sind Inlandsflüge in den Preisen enthalten?", a: "In unseren Signature-Kombinationen sind die Flüge vom Busch an die Küste in der Regel inkludiert. Details finden Sie in der jeweiligen Reisebeschreibung." },
  { q: "Wie sicher sind die Last-Minute Deals?", a: "Alle Angebote, auch kurzfristige Deals, unterliegen unseren strengen Qualitätskontrollen und sind zu 100% durch den DRSF abgesichert." },
  { q: "Gibt es Rabatte für Familien?", a: "Ja, für unsere Familiensafaris haben wir spezielle Konditionen bei den Lodges und Nationalparks verhandelt, die wir direkt an Sie weitergeben." }
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
      {/* 01 Hero Section - Centered Action Hub */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Angebote" 
          fill 
          priority 
          className="object-cover scale-105 brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center pt-32 md:pt-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 max-w-4xl"
          >
            <div className="space-y-4">
              <h1 className="font-headline text-3xl md:text-7xl font-normal text-white leading-tight tracking-tight">
                Unglaubliche Safari- und Tansania-Reiseangebote
              </h1>
              <p className="max-w-2xl mx-auto text-white/90 font-normal text-sm md:text-xl leading-relaxed opacity-80">
                Abenteuer, Kultur und Entspannung – perfekt geplant. Erleben Sie Tansania in seiner reinsten Form.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button 
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl font-bold text-xs shadow-2xl border-none"
              >
                Alle Angebote ansehen
              </Button>
              <Button 
                variant="glass" 
                className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl font-bold text-xs"
              >
                Sonderangebote & Deals
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Filter Bar - Sliding Protocol for Mobile */}
      <section className="py-4 md:py-6 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto flex overflow-x-auto no-scrollbar gap-2 pb-1 scroll-smooth">
            {['All', 'Signature', 'Kompakt', 'Familie'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold transition-all border whitespace-nowrap shrink-0",
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

      {/* 04 Comparison Matrix */}
      <section className="relative pt-8 pb-20 overflow-hidden">
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
          <div className="text-center mb-10 md:mb-12 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-white tracking-normal">
              Angebote im Vergleich
            </h2>
            <p className="text-white/70 font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
              Wählen Sie das perfekte Level für Ihr Abenteuer
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] border border-white/20 overflow-hidden shadow-2xl">
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

      {/* 05 Destination Discovery */}
      <DestinationDiscovery />

      {/* 06 Bestseller & Favoriten */}
      <section className="pt-8 pb-16 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
                  Bestseller & Favoriten
                </h2>
                <p className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
                  Diese Expeditionen wurden im letzten Jahr am häufigsten gebucht und von unseren Gästen mit Höchstnoten bewertet.
                </p>
              </div>

              <div className="space-y-3">
                {bestsellers.map((item, i) => (
                  <div key={i} className="p-4 md:p-6 bg-[#fdfcfb] rounded-2xl border border-border/40 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-border/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-[13px] md:text-base text-secondary">{item.name}</h4>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <p className="text-[9px] text-muted-foreground font-bold">{item.count}</p>
                          <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
                          <p className="text-[8px] md:text-[9px] text-destructive font-black uppercase tracking-tight">{item.urgency}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-primary shrink-0">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="relative bg-[#fdfcfb] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-xl border border-border/30 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" 
                    alt="Reise des Monats" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <Badge className="bg-primary text-white border-none px-4 py-1.5 md:px-6 md:py-2 text-[8px] md:text-[10px] font-bold shadow-2xl">Reise des Monats</Badge>
                  </div>
                </div>
                <div className="p-6 md:p-10 space-y-6 text-left">
                  <h3 className="font-headline text-xl md:text-3xl font-normal text-secondary tracking-normal">
                    Great Migration Special 2026
                  </h3>
                  <p className="text-muted-foreground font-normal text-[13px] md:text-lg leading-relaxed opacity-80 italic">
                    "Das war die beste Reise unseres Lebens! Das Brüllen der Löwen nachts in der Serengeti ist unbeschreiblich. Wir fühlten uns perfekt betreut."
                  </p>
                  <div className="flex items-center gap-4 border-t border-border/40 pt-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted overflow-hidden border-2 border-white shadow-lg">
                      <img src="https://picsum.photos/seed/guest-fav/100/100" alt="Guest" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs md:text-sm font-bold text-secondary">Familie Weidner</p>
                      <p className="text-[9px] font-normal text-muted-foreground tracking-normal">Safari im Juni 2025</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 07 FAQ Section - Reduced Heading Gap */}
      <section className="py-8 md:py-16 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-6 md:mb-10 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
              Häufig gestellte Fragen
            </h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
              Alles Wissenswerte zu unseren Angeboten und Ihrer Buchung
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`faq-${idx}`}
                className="border-none bg-[#fdfcfb] rounded-2xl px-6 md:px-10 shadow-sm hover:shadow-md transition-all group"
              >
                <AccordionTrigger className="text-left font-normal text-base md:text-xl py-6 hover:no-underline hover:text-primary transition-colors tracking-tight [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-8 pr-4 text-left">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 08 Individuelle Beratung */}
      <section id="inquiry" className="pt-8 pb-20 bg-[#fdfcfb] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-12 space-y-2">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal">
              Individuelle Beratung
            </h2>
            <p className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-normal opacity-80">
              Begrenzte Plätze • Experten klären alles für Sie
            </p>
          </div>

          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden relative transition-all duration-700">
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
            
            <div className="p-4 bg-muted/5 border-t border-border/40 flex items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold text-muted-foreground/40 tracking-normal">
                <ShieldCheck className="w-3.5 h-3.5" /> DSGVO konform
              </div>
              <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold text-muted-foreground/40 tracking-normal">
                <Zap className="w-3.5 h-3.5" /> Schnelle Antwort
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
