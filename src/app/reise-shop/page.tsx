"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Star, 
  ArrowRight, 
  Sparkles,
  Zap,
  MapPin,
  Camera,
  Sun,
  Wind,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 'apparel', label: 'Safari Kleidung', icon: Wind },
  { id: 'gear', label: 'Technische Ausrüstung', icon: Camera },
  { id: 'logistics', label: 'Gepäck-Logistik', icon: Truck },
];

const products = [
  {
    name: "Savannah Field Jacket",
    price: "€185",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600",
    cat: "Apparel",
    hint: "safari jacket"
  },
  {
    name: "Pro Safari Binoculars",
    price: "€450",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600",
    cat: "Gear",
    hint: "binoculars gear"
  },
  {
    name: "Wide-Brim Expedition Hat",
    price: "€65",
    img: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=600",
    cat: "Accessories",
    hint: "safari hat"
  }
];

export default function ReiseShopPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      {/* Cinematic Hero */}
      <section className="relative h-[50vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?q=80&w=1920"
          alt="Safari Shop Lifestyle"
          fill
          priority
          className="object-cover brightness-50"
          data-ai-hint="luxury lounge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 shadow-2xl">
              Curated Expedition Supplies
            </Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-bold text-white leading-none tracking-tighter uppercase">
              TANSANIA <br /><span className="text-primary">REISE-STORE</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[9px] md:text-lg text-white/80 font-black uppercase tracking-widest leading-relaxed">
              Reisebezogene Produkte & Dienstleistungen für Ihr nahtloses Abenteuer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] block">Unsere Partnerschaften</span>
              <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight text-secondary uppercase tracking-tight">
                Qualität ohne <br /><span className="text-primary">Kompromisse</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-bold leading-relaxed text-sm md:text-lg uppercase tracking-widest opacity-80">
              Tansania Reiseabenteuer hat sich mit den besten verfügbaren Unternehmen zusammengeschlossen, um Dienstleistungen und Produkte anzubieten, die sicherstellen, dass Ihr Urlaub nahtlos verläuft.
            </p>
            <div className="p-6 bg-white rounded-3xl border border-border/50 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Sorgenfreie Planung</span>
              </div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                Mit den empfohlenen Reisedienstleistungen der TANSANIA REISEABENTEUER SDL GMBH können Sie die perfekte Kleidung kaufen und sogar arrangieren, dass Ihr Gepäck vorausgeschickt wird.
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50">
              <Image 
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800" 
                alt="Safari Gear" 
                fill 
                className="object-cover"
                data-ai-hint="safari luggage"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-[8px] font-black text-white uppercase tracking-widest">Logistik Service</span>
                </div>
                <h4 className="text-xl md:text-2xl font-headline font-bold text-white uppercase leading-none">Gepäck-Transfer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outfitter Section */}
      <section className="py-16 md:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Der Reiseausrüster</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight uppercase tracking-tighter mb-8">
                Speziell für Ihr <br /><span className="text-primary">Zielgebiet</span>
              </h2>
              <p className="text-white/60 font-bold leading-relaxed text-sm md:text-xl uppercase tracking-widest mb-10">
                Egal, ob Sie auf Safari gehen, Schnorcheln oder Wildwasser-Rafting betreiben – wir bieten Top-Marken, die leicht zu packen, sonnenschützend und wasserdicht sind.
              </p>
              <div className="flex flex-wrap gap-3">
                {['UV-Schutz', 'Atmungsaktiv', 'Wasserdicht', 'Leichtbau'].map(tag => (
                  <Badge key={tag} variant="outline" className="px-4 py-2 border-white/10 text-white/40 text-[8px] font-black uppercase tracking-widest">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.slice(0, 2).map((p, i) => (
                <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all hover:border-primary/40">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" data-ai-hint={p.hint} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 space-y-2">
                    <p className="text-primary font-black text-[8px] uppercase tracking-widest">{p.cat}</p>
                    <h4 className="text-lg md:text-xl font-headline font-bold text-white uppercase leading-tight">{p.name}</h4>
                    <p className="text-xl font-bold text-white">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter leading-none">
              Shop nach <span className="text-primary">Kategorie</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 md:p-16 bg-[#fdfcfb] rounded-[2.5rem] md:rounded-[3.5rem] border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-muted flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
                  <cat.icon className="w-8 h-8 text-muted-foreground group-hover:text-white" />
                </div>
                <h4 className="font-headline text-xl md:text-3xl font-bold text-secondary uppercase leading-tight mb-6">{cat.label}</h4>
                <div className="pt-6 border-t border-muted/50">
                  <Button variant="link" className="p-0 h-auto font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                    Kollektion ansehen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Quote / Final CTA */}
      <section className="py-16 md:py-32 bg-[#fdfcfb] container mx-auto px-4 max-w-4xl text-center space-y-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-border shadow-xl mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-2xl md:text-5xl font-bold text-secondary uppercase tracking-tight leading-tight">
            Machen Sie das Beste <br />aus Ihrem <span className="text-primary">Abenteuer</span>
          </h2>
          <p className="text-muted-foreground font-black text-[10px] md:text-xl uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Erhalten Sie eine Kollektion von Bekleidung und Ausrüstung, die speziell auf Ihr TANSANIA REISEABENTEUER SDL GMBH Reiseziel abgestimmt ist.
          </p>
        </div>
        <div className="pt-10">
          <Button size="lg" className="rounded-full px-12 h-16 md:h-20 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-transform border-none">
            ZUR PARTNER-SHOP AUSWAHL <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
