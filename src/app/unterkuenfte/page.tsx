"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hotel, 
  MapPin, 
  Search, 
  ArrowRight, 
  Star, 
  Compass, 
  Sparkles,
  ShieldCheck,
  Palmtree,
  Mountain,
  Waves,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ContactSection } from '@/components/shared/ContactSection';

const categories = [
  { id: 'all', label: 'Alle Regionen', icon: Globe },
  { id: 'arusha', label: 'Arusha Hotel', icon: Mountain },
  { id: 'sansibar', label: 'Sansibar Hotel', icon: Palmtree },
  { id: 'tanzania', label: 'Tansania Hotel', icon: Compass },
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
  },
  {
    id: 'upendo-house',
    name: "Upendo House Zanzibar",
    location: "Stone Town, Sansibar",
    desc: "Das Upendo House Zanzibar ist eine einzigartige Unterkunft, die modernes Design mit der historischen Atmosphäre von Stone Town verbindet.",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800",
    category: 'sansibar',
    hint: "stone town boutique"
  },
  {
    id: 'blue-moon-resort',
    name: "Blue Moon Resort",
    location: "Ostküste von Sansibar",
    desc: "Das Blue Moon Resort auf Sansibar bietet eine traumhafte Kulisse für Entspannung und Abenteuer. Eingebettet in eine ruhige und natürliche Umgebung.",
    img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800",
    category: 'sansibar',
    hint: "east coast resort"
  },
  {
    id: 'kisiwa-on-the-beach',
    name: "Kisiwa On The Beach",
    location: "Paje Beach, Sansibar",
    desc: "Das Kisiwa On The Beach liegt an einem der schönsten Strände Sansibars und bietet eine ruhige, luxuriöse Atmosphäre mit einem Hauch Swahili-Tradition.",
    img: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800",
    category: 'sansibar',
    hint: "luxury beach villa"
  },
  {
    id: 'lawns-hotel',
    name: "Lawn Hotel Lushoto",
    location: "Lushoto, Tansania",
    desc: "Das Lawns Hotel Lushoto ist das älteste noch betriebene Hotel in den West-Usambara-Bergen Tansanias. Atemberaubender Blick auf die umliegenden Berge.",
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800",
    category: 'tanzania',
    hint: "mountain hotel"
  },
  {
    id: 'sharazad-boutique',
    name: "Sharazād Boutique Hotel",
    location: "Jambiani, Sansibar",
    desc: "Das Sharazād Boutique Hotel liegt an der malerischen Südostküste Sansibars und bietet eine ruhige und luxuriöse Atmosphäre.",
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
    category: 'sansibar',
    hint: "boutique jambiani"
  },
  {
    id: 'casa-del-mar',
    name: "Casa del Mar",
    location: "Jambiani, Sansibar",
    desc: "Das Casa del Mar ist ein charmantes Boutique-Hotel an der Südostküste von Sansibar, das sich durch eine familiäre und entspannte Atmosphäre auszeichnet.",
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800",
    category: 'sansibar',
    hint: "cozy beach hotel"
  },
  {
    id: 'riu-palace',
    name: "Riu Palace Zanzibar",
    location: "Nungwi Beach, Sansibar",
    desc: "Das Riu Palace Zanzibar ist ein exklusives Resort an der Nordküste von Sansibar und ein perfekter Rückzugsort für Erwachsene. All-Inclusive Luxus.",
    img: "https://images.unsplash.com/photo-1510011560141-62c7e8fc7910?q=80&w=800",
    category: 'sansibar',
    hint: "all inclusive resort"
  },
  {
    id: 'royal-zanzibar',
    name: "Royal Zanzibar Beach Resort",
    location: "Nungwi, Sansibar",
    desc: "Das Royal Zanzibar Beach Resort erstreckt sich entlang der malerischen Küste von Sansibar und bietet eine Vielzahl von Unterkunftsmöglichkeiten.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800",
    category: 'sansibar',
    hint: "large beach resort"
  }
];

export default function AccommodationsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    return accommodations.filter(item => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                            item.location.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Less-Weighted Hero Section */}
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
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white leading-tight tracking-tight uppercase">
              Unterkünfte
            </h1>
            <p className="text-white/80 text-[11px] md:text-sm font-normal tracking-widest max-w-xl mx-auto uppercase">
              Wir haben nur die besten Unterkünfte für Sie ausgesucht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Intro Narrative */}
      <section className="py-8 md:py-16 container mx-auto px-4 max-w-5xl text-center">
        <p className="text-muted-foreground font-normal text-[14px] leading-[22px] md:text-base opacity-80 uppercase tracking-widest leading-relaxed">
          Unsere Unterkunftsangebote in Tansania decken eine breite Palette von Ansprüchen ab. Sie reichen von eleganten Hotels in Arusha über charmante Lodges in der Serengeti bis hin zu authentischen Zeltcamps inmitten der wilden Natur. Auch Strandresorts auf Sansibar stehen zur Auswahl. Wir haben jede Unterkunft persönlich ausgewählt und geprüft, um Ihnen eine erstklassige und unvergessliche Reise zu garantieren.
        </p>
      </section>

      {/* 03 Filters & Search Hub */}
      <section className="py-8 bg-white border-y border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-2",
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
              placeholder="Ort oder Name suchen..." 
              className="h-11 pl-11 rounded-xl bg-muted/20 border-none font-bold text-[10px] uppercase tracking-widest"
              suppressHydrationWarning
            />
          </div>
        </div>
      </section>

      {/* 04 Accommodations Grid */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="h-full border-none shadow-sm bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border/40 group flex flex-col">
                  <Link href="/trip-planner" className="block relative aspect-[16/10] overflow-hidden shrink-0">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={item.hint}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 backdrop-blur-sm text-white border-none font-bold text-[8px] px-3 py-1 tracking-widest shadow-xl">
                        {item.category === 'sansibar' ? 'Insel-Luxus' : 'Safari-Komfort'}
                      </Badge>
                    </div>
                  </Link>
                  
                  <CardContent className="p-6 md:p-10 flex flex-col flex-grow text-left">
                    <div className="flex-grow space-y-4">
                      <div className="flex items-center gap-2 text-primary font-bold text-[9px] tracking-widest">
                        <MapPin className="w-3.5 h-3.5" /> {item.location}
                      </div>
                      
                      <Link href="/trip-planner" className="block group/title">
                        <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase leading-tight tracking-tight group-hover/title:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>

                      <p className="text-[14px] leading-[20px] text-muted-foreground font-normal opacity-80 line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/40">
                      <Link href="/trip-planner" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-all group/link">
                        Diese Unterkunft erkunden 
                        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-white">
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="py-40 text-center space-y-6 bg-white rounded-[3rem] border-2 border-dashed border-muted/50">
            <Hotel className="w-12 h-12 mx-auto opacity-10" />
            <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">Keine Unterkünfte gefunden</h3>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Versuchen Sie es mit einem anderen Suchbegriff.</p>
          </div>
        )}
      </section>

      {/* 05 Shared Components */}
      <section className="py-8">
        <ContactSection />
      </section>
    </div>
  );
}
