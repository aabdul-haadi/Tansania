"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Compass, ArrowRight, CheckCircle2, Waves, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';

const packages = [
  { id: '15-day', title: '15 Tage Safari in Tansania und Sansibar', slug: '15-day-safari-zanzibar', durationDays: 15, startingPrice: 5399, category: 'Signature', tag: 'Meistverkauft', highlights: ['Top Nationalparks Safari', 'Massai Dorfbesuch', 'Familienfreundlich', 'Sansibar Strände', 'Stone Town'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
  { id: '13-day', title: '13 Tage Safari & Sansibar', slug: 'safari-sansibar-13-tage', durationDays: 13, startingPrice: 3699, category: 'Signature', highlights: ['Big Five Pirschfahrten', 'Massai Dorfbesuch', 'Ngorongoro Krater', 'Sansibar Strände', 'Stone Town'], imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
  { id: '11-day', title: '11 Tage Safari & Sansibar', slug: 'safari-sansibar-11-tage', durationDays: 11, startingPrice: 2999, category: 'Kompakt', highlights: ['Tarangire Elefanten', 'Massai Kultur', 'Serengeti Tiermigration', 'Ngorongoro Krater', 'Sansibar Touren'], imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
  { id: 'family-12', title: '12 Tage Familien-Safari', slug: 'familien-safari-12-tage', durationDays: 12, startingPrice: 3499, category: 'Familie', highlights: ['Big Five Erlebnisse', 'Massai Begegnung', 'Schulbesuch', 'Manyara Safari', 'Kinder-Lodges'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
  { id: 'honeymoon-13', title: '13 Tage Flitterwochen', slug: 'flitterwochen-tansania-sansibar', durationDays: 13, startingPrice: 3899, category: 'Romantik', highlights: ['Champagner Sunset', 'Private Pirschfahrten', 'Luxusvillen', 'Stranddinner', 'Ballonsafari'], imageUrl: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
  { id: 'zanzibar-7', title: '7 Tage Sansibar', slug: '7-tage-sansibar', durationDays: 7, startingPrice: 2699, category: 'Strand', highlights: ['Stone Town Tour', 'Gewürzplantagen', 'Schnorcheln', 'Strandurlaub', 'Taucherlebnis'], imageUrl: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
  { id: 'camping-12', title: '12 Tage Camping Safari & Sansibar', slug: '12-tage-camping-safari', durationDays: 12, startingPrice: 2799, category: 'Abenteuer', highlights: ['Serengeti Zelten', 'Lagerfeuer Nächte', 'Massai Dorf', 'Traumstrände', 'Gewürztour'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
  { id: 'kili-13', title: '13 Tage Safari & Sansibar Abenteuer', slug: '13-tage-kilimandscharo-kombi', durationDays: 13, startingPrice: 4699, category: 'Kombi', highlights: ['Nationalparks Tour', 'Kilimandscharo nah', 'Big Five Safari', 'Sansibar Relax', 'Kultur-Mix'], imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
];

const reviews = [
  { name: "Lena M.", text: "Ich hatte eine großartige Erfahrung mit Neujahrsreisen in Tansania! Der Buchungsprozess war einfach, und das Reiseziel war einfach wunderschön." },
  { name: "Johannes S.", text: "Unsere Neujahr-Safari-Tour in Tansania war magisch! Wir haben die Big 5 aus nächster Nähe gesehen. Auch die Strände von Sansibar waren traumhaft." },
  { name: "Clara W.", text: "Unsere Luxus Neujahrsreise-Buchung war ein wahrer Traum! Die Unterkunft war erstklassig, das Essen hervorragend und die private Safari-Erfahrung einzigartig." },
  { name: "Maximilian K.", text: "Ich habe einen Last Minute Neujahrsurlaub gebucht und war anfangs etwas besorgt, aber alles verlief reibungslos. Die Strände von Sansibar und die Neujahr-Safari in Tansania waren fantastisch." },
  { name: "Julia B.", text: "Wer hätte gedacht, dass Neujahrsurlaub in Tansania so toll wäre? Keine Schneeflocken, dafür die Sonne und Strände von Sansibar! Großartiger Service und ein unvergesslicher Neujahrsurlaub. Sehr zu empfehlen!" },
  { name: "Felix R.", text: "Unser Neujahrsurlaub in Tansania war unvergesslich. Die Neujahr-Safari war ein Highlight – die Big 5 aus nächster Nähe zu sehen war einfach atemberaubend. Die Strände von Sansibar waren perfekt zum Entspannen." }
];

export default function NewYearPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Neujahrs Safari Tansania" 
          fill 
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[11px] font-bold mb-6">
              Saison-Registry 2025/2026
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white mb-8 leading-tight tracking-tight">
              Exklusive Neujahrs Safari & Sansibar
            </h1>
            <p className="max-w-2xl mx-auto text-[14px] md:text-xl text-white/90 font-normal leading-relaxed opacity-80">
              Ihr Jahreswechsel in Luxus & Abenteuer. Starten Sie das Jahr im Herzen der Savanne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Intro */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-5xl text-center">
        <div className="space-y-6">
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-90">
            Starten Sie das neue Jahr mit unvergesslichen Erlebnissen: eine private Safari in der Serengeti, luxuriöse Lodges unter Afrikas Sternenhimmel oder Entspannung an den paradiesischen Stränden Sansibars. Unsere handverlesenen Neujahrsreisen verbinden Abenteuer, Luxus und Exklusivität – perfekt auf Ihre Wünsche abgestimmt.
          </p>
          <div className="pt-4">
            <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-12 h-14 md:h-16 font-bold text-[11px] shadow-xl border-none">
              Jetzt Jahreswechsel planen
            </Button>
          </div>
        </div>
      </section>

      {/* 03 Package Registry */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 Highlights Grid */}
      <section className="py-16 md:py-32 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Wie macht Tansania Ihre Neujahrsreise unvergesslich?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Waves, t: "Sansibar Strände", d: "Genießen Sie weiße Sandstrände und kristallklares Wasser – der perfekte Ort für Neujahr in der Sonne." },
              { icon: Compass, t: "Safari-Abenteuer", d: "Erleben Sie unvergessliche Momente in der Serengeti und im Ngorongoro-Krater." },
              { icon: Zap, t: "Kilimanjaro Trekking", d: "Wandern Sie auf dem majestätischen Kilimandscharo und blicken Sie vom Dach Afrikas." },
              { icon: Star, t: "Die Big 5", d: "Treffen Sie die legendären Big 5 und machen Sie Ihren Neujahrsurlaub zu einem Erlebnis." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#fdfcfb] rounded-3xl border border-border/50 text-left space-y-4 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-headline text-xl font-bold text-secondary tracking-tight">{item.t}</h4>
                <p className="text-[12px] md:text-sm text-muted-foreground font-normal leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Why Us Protocol */}
      <section className="py-16 md:py-32 bg-[#FDF7F2] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10">
              <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
                Warum Ihr Neujahr 2026 einzigartig wird
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { t: "Luxus-Safaris", d: "Privat geführte Safaris und exklusive Lodges zum Jahreswechsel." },
                  { t: "Sonne statt Kälte", d: "Afrikas Wildnis erleben statt europäischem Wintergrau." },
                  { t: "Familienzauber", d: "Abenteuer, die Kinder begeistern, in sicheren Umgebungen." },
                  { t: "Spontanes Glück", d: "Sichern Sie sich Last-Minute Plätze für Kurzentschlossene." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-bold text-secondary text-sm mb-1">{point.t}</p>
                      <p className="text-[12px] text-muted-foreground font-normal leading-relaxed">{point.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="New Year Safari" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 06 Reviews */}
      <section className="py-16 md:py-32 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-16 tracking-tighter">Was unsere Gäste sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="p-8 bg-[#fdfcfb] rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm text-left group hover:shadow-xl transition-all">
                <div className="space-y-6">
                  <div className="flex gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm md:text-base font-normal italic text-secondary leading-relaxed opacity-80">"{r.text}"</p>
                </div>
                <p className="mt-8 font-bold text-primary text-[10px]">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry"><ContactSection /></section>
    </div>
  );
}
