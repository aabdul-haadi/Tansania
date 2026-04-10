
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, LayoutGrid, Compass, Zap, ShieldCheck, Waves, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { AiCTA } from '@/components/sections/AiCTA';
import { cn } from '@/lib/utils';

export default function SafarisPage() {
  const firestore = useFirestore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const filteredPackages = (packages || []).filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = ['All', 'Signature', 'Expedition', 'Wildlife', 'Honeymoon'];

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* COMPACT DARK HERO */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Savannah Collection" 
            fill 
            priority 
            className="object-cover brightness-[0.35] scale-105"
            data-ai-hint="serengeti safari"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center space-y-6 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-white uppercase leading-none tracking-tighter text-3xl md:text-6xl lg:text-7xl">
              Savannen-Kollektion
            </h1>
            <p className="max-w-xl mx-auto text-white/60 font-bold text-[9px] md:text-sm uppercase tracking-widest leading-relaxed">
              Entdecken Sie handverlesene Safaris und exklusive Routen durch Tansanias unendliche Weite.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative group pt-4"
          >
            <Search className="absolute left-6 top-[calc(50%+8px)] -translate-y-1/2 w-4 h-4 text-white/40 transition-colors group-focus-within:text-primary" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Region oder Tierart suchen..." 
              className="h-12 md:h-14 pl-14 pr-6 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 font-bold text-[10px] md:text-xs uppercase tracking-widest backdrop-blur-md"
              suppressHydrationWarning
            />
          </motion.div>
        </div>
      </section>

      {/* Filter Stripe */}
      <div className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-7xl h-14 md:h-16 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border",
                activeCategory === cat 
                  ? "bg-secondary text-white border-secondary shadow-lg" 
                  : "text-muted-foreground border-transparent hover:border-border hover:bg-muted/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        {isLoading ? (
          <div className="py-40 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Syncing Catalog...</p>
          </div>
        ) : filteredPackages.length === 0 ? (
          <div className="py-40 text-center bg-white rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-border/50">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <h3 className="text-secondary uppercase">Keine Ergebnisse</h3>
            <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2 tracking-widest">Versuchen Sie es mit einem anderen Suchbegriff.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* EDITORIAL: Tansania Safari Deutschsprachig */}
      <section className="py-16 md:py-32 bg-white border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Unsere Expertise</span>
                <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-normal text-secondary leading-tight tracking-wide">
                  Tansania Safari Deutschsprachig – Deine Experten für Safaris und Touren in Tansania
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal">
                  Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt in Tansania ein reibungsloses und unvergessliches Erlebnis wird. Als Tansania Safari Deutschsprachig Anbieter bieten wir dir die Möglichkeit, diese atemberaubende Reise in deiner Sprache zu genießen.
                </p>
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal">
                  Auf einer Safari in Tansania erlebst du die beeindruckendste Tierwelt hautnah. Wenige Naturwunder sind so atemberaubend wie die Große Migration. Spüre das Zittern des Bodens, wenn Millionen von Tieren gleichzeitig durch die Serengeti ziehen. Tansania ist der einzige Ort der Welt, an dem du eine solche Vielzahl von wilden Tieren an einem Ort erleben kannst.
                </p>
              </div>
            </motion.div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/50">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Serengeti Migration" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL: Ultimative Safari & Video */}
      <section className="py-16 md:py-32 bg-[#FDF7F2] border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Expeditions Registry</span>
            <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-normal text-secondary leading-tight tracking-wide">
              Das ultimative Safari Abenteuer in Tansania
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal max-w-3xl">
              Stell dir vor, wie ein Löwenrudel in der goldenen Sonne döst, bunte Flamingos den See bei Sonnenaufgang schmücken, endlose Herden von Gnus über weite Ebenen ziehen und der majestätische Kilimandscharo den Horizont dominiert. Das ist Tansania: das Herz Afrikas und das perfekte Ziel für unvergessliche Safaris.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-black group border-8 border-white">
                <iframe
                  src="https://www.youtube.com/embed/pSiHhC4dzPk"
                  title="Serengeti Jeep Experience"
                  className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-white rounded-[2rem] border border-border/50 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-headline text-xl font-medium text-secondary">Nationalparks Fokus</h4>
                </div>
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal">
                  Mit fast 35% des Landes als Nationalparks und Wildschutzgebieten, darunter der weltberühmte Serengeti-Nationalpark und der Ngorongoro-Krater, gehört Tansania zu den besten Safari-Destinationen. Die Große Migration der Gnus – das größte Wanderereignis der Erde – und der majestätische Kilimandscharo machen Tansania zum ultimativen Ziel für Safaris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL: Luxuriöse Unterkünfte & Video 2 */}
      <section className="py-16 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Signature Stays</span>
                <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-wide">
                  Luxuriöse Safari Unterkünfte während deines Tansania-Abenteuers
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal">
                  Mit Tansania Reiseabenteuer übernachtest du in luxuriösen Lodges mit Vollpension, die höchsten Komfort und exklusive Ausstattung bieten. Jede Unterkunft wird regelmäßig von unserem erfahrenen Team überprüft, um dir ein unvergessliches, hochwertiges Safari-Erlebnis zu garantieren.
                </p>
                <div className="p-6 bg-[#FDF7F2] rounded-2xl border border-primary/10 flex gap-4">
                  <Compass className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-[14px] leading-[20px] font-normal text-secondary tracking-normal">
                    Unsere Premium-Lodges liegen in den bekanntesten Nationalparks Tansanias und bieten atemberaubende Ausblicke auf die Wildnis. Genieße das Brüllen der Löwen und das Trompeten der Elefanten – alles aus dem Luxus deiner 5-Sterne-Lodge.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-black group border-8 border-white">
                <iframe
                  src="https://www.youtube.com/embed/IMucYRze3vs"
                  title="Luxury Lodges in Tanzania"
                  className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL: Safari & Erholung */}
      <section className="py-16 md:py-32 bg-[#FDF7F2] border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[16/10] md:aspect-[21/9] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-border/50">
              <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200" alt="Sansibar Beach" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-3 text-white">
                  <Waves className="w-6 h-6 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Inselparadies</span>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-[9px] uppercase tracking-[0.4em]">
                  <Zap className="w-4 h-4" /> Abenteuer & Erholung
                </div>
                <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-normal text-secondary leading-tight tracking-wide">
                  Tansania Safari und Baden Sansibar – Abenteuer und Erholung vereint
                </h2>
                <div className="space-y-6 text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal">
                  <p>
                    Erlebe das Beste aus beiden Welten mit einer Tansania Safari und Baden Sansibar. Beginne dein Abenteuer mit einer aufregenden Safari durch die Nationalparks Tansanias, wie die Serengeti oder den Ngorongoro-Krater, und beobachte die beeindruckende Tierwelt in ihrem natürlichen Lebensraum.
                  </p>
                  <p>
                    Anschließend kannst du dich auf der Insel Sansibar entspannen, bekannt für ihre weißen Sandstrände, kristallklaren Gewässer und die faszinierende Mischung aus Kulturen. Tauche ein in die Schönheit der Insel, schwimme im warmen Ozean oder erkunde die historische Altstadt von Stone Town.
                  </p>
                  <p className="text-secondary font-bold">
                    Die Kombination aus Tansania Safari und Baden Sansibar bietet dir die perfekte Mischung aus Abenteuer und Erholung für einen unvergesslichen Urlaub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REUSABLE AICTA COMPONENT */}
      <AiCTA />

      {/* Support Section Registry */}
      <section className="bg-white">
        <ContactSection />
      </section>
    </div>
  );
}
