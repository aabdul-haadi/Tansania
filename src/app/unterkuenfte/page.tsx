"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hotel, 
  MapPin, 
  Search, 
  ArrowRight, 
  Compass, 
  Globe,
  Palmtree,
  Mountain
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';

const categories = [
  { id: 'all', label: 'Alle Regionen', icon: Globe },
  { id: 'arusha', label: 'Arusha Hotels', icon: Mountain },
  { id: 'sansibar', label: 'Sansibar Hotels', icon: Palmtree },
  { id: 'tanzania', label: 'Tansania Safari Lodges', icon: Compass },
];

const accommodations = [
  {
    id: 'neptune-hotels',
    name: "Neptune Hotels Tanzania",
    location: "Küste & Safari-Regionen, Tansania",
    desc: "Neptune Hotels stehen für erstklassigen Komfort, exzellenten Service und einzigartige Urlaubserlebnisse in Tansania. Die Hotels verbinden luxuriöse Unterkünfte mit authentischem afrikanischem Flair und bieten ideale Lagen – von traumhaften Stränden bis hin zu safari-nahen Rückzugsorten.",
    img: "https://images.unsplash.com/photo-1544124499-58ec529dd298?q=80&w=800",
    category: 'tanzania',
    hint: "luxury beach hotel"
  },
  {
    id: 'fun-beach-hotel',
    name: "Fun Beach Hotel",
    location: "Jambiani, Sansibar",
    desc: "Das Fun Beach Hotel auf Sansibar bietet eine entspannte, ungezwungene Atmosphäre direkt am weißen Sandstrand von Jambiani. Mit seinen stilvollen Bungalows, die sich harmonisch in die tropische Umgebung einfügen, ist es der perfekte Ort für Strandliebhaber.",
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
    category: 'sansibar',
    hint: "zanzibar bungalows"
  },
  {
    id: 'four-seasons-serengeti',
    name: "Four Seasons Safari Lodge Serengeti",
    location: "Serengeti-Nationalpark, Tansania",
    desc: "Die Four Seasons Safari Lodge Serengeti bietet ein unvergleichliches Safari-Erlebnis inmitten der atemberaubenden Wildnis Tansanias. Ein perfekter Ort, um die Tiermigration zu beobachten.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    category: 'tanzania',
    hint: "serengeti lodge"
  },
  {
    id: 'shauno-beach-bungalows',
    name: "Shauno Beach Bungalows",
    location: "Sansibar, direkt am Strand von Paje",
    desc: "Die Shauno Beach Bungalows bieten eine gemütliche, authentische Unterkunft in einem der schönsten Küstenorte Sansibars. Mit direktem Zugang zum traumhaften Strand.",
    img: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800",
    category: 'sansibar',
    hint: "paje beach"
  },
  {
    id: 'nungwi-beach-resort',
    name: "Nungwi Beach Resort by Turaco",
    location: "Nungwi, Sansibar",
    desc: "Das Nungwi Beach Resort liegt an einem der schönsten Strände Sansibars und bietet eine luxuriöse Kombination aus Entspannung und Abenteuer.",
    img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800",
    category: 'sansibar',
    hint: "nungwi resort"
  },
  {
    id: 'melia-arusha',
    name: "Melia Arusha Hotel",
    location: "Arusha, mit guter Anbindung",
    desc: "Das Melia Arusha vereint modernen Luxus mit der natürlichen Schönheit der tansanischen Landschaft. Ein idealer Ausgangspunkt für Safaris in den Norden.",
    img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800",
    category: 'arusha',
    hint: "arusha luxury hotel"
  },
  {
    id: 'breezes-beach-club',
    name: "Breezes Beach Club & Spa Zanzibar",
    location: "Südostküste, Bwejuu Beach, Sansibar",
    desc: "Der Breezes Beach Club & Spa ist ein preisgekröntes Resort an der unberührten Südostküste Sansibars. Idyllische Lage direkt am weißen Sandstrand.",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800",
    category: 'sansibar',
    hint: "zanzibar spa"
  }
];

export default function AccommodationsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredItems = useMemo(() => {
    return accommodations.filter(item => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                            item.location.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Compact Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1920" 
          alt="Unterkünfte in Tansania" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-10 md:pb-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Unsere Unterkünfte
            </h1>
            <p className="text-white/80 text-[11px] md:text-sm font-normal tracking-widest max-w-xl mx-auto uppercase">
              Handverlesene Lodges & Resorts für Ihr Abenteuer
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Intro Narrative */}
      <section className="py-8 md:py-16 container mx-auto px-4 max-w-4xl text-center">
        <p className="text-muted-foreground font-normal text-[14px] leading-[22px] md:text-base opacity-80 tracking-normal">
          Unsere Unterkunftsangebote in Tansania decken eine breite Palette von Ansprüchen ab. Sie reichen von eleganten Hotels in Arusha über charmante Lodges in der Serengeti bis hin zu authentischen Zeltcamps inmitten der wilden Natur. Jede Unterkunft wurde persönlich ausgewählt, um Ihnen eine erstklassige und unvergessliche Reise zu garantieren.
        </p>
      </section>

      {/* 03 Filters & Search Hub */}
      <section className="py-6 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex overflow-x-auto no-scrollbar gap-2 w-full md:w-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold transition-all border flex items-center gap-2 whitespace-nowrap",
                  activeTab === cat.id 
                    ? "bg-secondary text-white border-secondary shadow-lg" 
                    : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                <cat.icon className={cn("w-3.5 h-3.5", activeTab === cat.id ? "text-primary" : "text-muted-foreground")} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Suchen..." 
              className="h-10 pl-11 rounded-xl bg-muted/10 border-none font-bold text-[10px]"
            />
          </div>
        </div>
      </section>

      {/* 04 Accommodations Grid - One Per Row Horizontal Protocol */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="h-full border border-border/40 shadow-sm bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Hub */}
                    <Link href="/trip-planner" className="block relative lg:w-[40%] aspect-[16/10] lg:aspect-auto min-h-[250px] overflow-hidden">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        data-ai-hint={item.hint}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/95 text-white border-none font-bold text-[8px] px-3 py-1 shadow-xl">
                          {item.category === 'sansibar' ? 'Insel-Resort' : 'Safari-Lodge'}
                        </Badge>
                      </div>
                    </Link>
                    
                    {/* Content Hub */}
                    <CardContent className="flex-1 p-8 md:p-10 flex flex-col justify-center text-left">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold text-[9px] tracking-widest uppercase">
                          <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </div>
                        
                        <Link href="/trip-planner" className="block group/title">
                          <h3 className="font-headline text-2xl md:text-3xl font-normal text-secondary leading-tight group-hover/title:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Link>

                        <p className="text-[14px] leading-[20px] text-muted-foreground font-normal opacity-80 max-w-2xl">
                          {item.desc}
                        </p>

                        <div className="pt-6 border-t border-border/40 flex items-center">
                          <Link href="/trip-planner">
                            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-all group/btn">
                              Diese Unterkunft anfragen
                              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white">
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="py-40 text-center space-y-6 bg-white rounded-3xl border-2 border-dashed border-muted/50">
            <Hotel className="w-12 h-12 mx-auto opacity-10 text-secondary" />
            <h3 className="text-xl font-bold text-secondary">Keine Unterkünfte gefunden</h3>
            <p className="text-[10px] font-bold text-muted-foreground uppercase">Versuchen Sie es mit einem anderen Suchbegriff.</p>
          </div>
        )}
      </section>

      <ContactSection />
    </div>
  );
}
