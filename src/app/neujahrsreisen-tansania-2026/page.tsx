
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Waves, 
  Sun, 
  ShieldCheck, 
  Heart, 
  Users, 
  MapPin, 
  Sparkles,
  Mountain 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';

const packages = [
  { id: '15-day', title: '15 Tage Safari in Tansania und Sansibar', slug: '15-day-safari-zanzibar', durationDays: 15, startingPrice: 5399, category: 'Signature', tag: 'Meistverkauft', highlights: ['Top Nationalparks Safari', 'Massai Dorfbesuch', 'Familienfreundlich', 'Sansibar Strände', 'Stone Town'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' },
  { id: '13-day', title: '13 Tage Safari & Sansibar', slug: 'safari-sansibar-13-tage', durationDays: 13, startingPrice: 3699, category: 'Signature', highlights: ['Big Five Pirschfahrten', 'Massai Dorfbesuch', 'Ngorongoro Krater', 'Sansibar Strände', 'Stone Town'], imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
  { id: '11-day', title: '11 Tage Safari & Sansibar', slug: 'safari-sansibar-11-tage', durationDays: 11, startingPrice: 2999, category: 'Kompakt', highlights: ['Tarangire Elefanten', 'Massai Kultur', 'Serengeti Tiermigration', 'Ngorongoro Krater', 'Sansibar Touren'], imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
  { id: 'family-12', title: '12 Tage Familien-Safari', slug: 'familien-safari-12-tage', durationDays: 12, startingPrice: 3499, category: 'Familie', highlights: ['Big Five Erlebnisse', 'Massai Begegnung', 'Schulbesuch', 'Manyara Safari', 'Kinder-Lodges'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' },
  { id: 'honeymoon-13', title: '13 Tage Flitterwochen', slug: 'flitterwochen-tansania-sansibar', durationDays: 13, startingPrice: 3899, category: 'Romantik', highlights: ['Champagner Sunset', 'Private Pirschfahrten', 'Luxusvillen', 'Stranddinner', 'Ballonsafari'], imageUrl: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
  { id: 'zanzibar-7', title: '7 Tage Sansibar', slug: '7-tage-sansibar', durationDays: 7, startingPrice: 2699, category: 'Strand', highlights: ['Stone Town Tour', 'Gewürzplantagen', 'Schnorcheln', 'Strandurlaub', 'Taucherlebnis'], imageUrl: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
  { id: 'camping-12', title: '12 Tage Camping Safari & Sansibar', slug: '12-tage-camping-safari', durationDays: 12, startingPrice: 2799, category: 'Abenteuer', highlights: ['Serengeti Zelten', 'Lagerfeuer Nächte', 'Massai Dorf', 'Traumstrände', 'Gewürztour'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' },
  { id: 'kili-13', title: '13 Tage Safari & Sansibar Abenteuer', slug: '13-tage-kilimandscharo-kombi', durationDays: 13, startingPrice: 4699, category: 'Kombi', highlights: ['Nationalparks Tour', 'Kilimandscharo nah', 'Big Five Safari', 'Sansibar Relax', 'Kultur-Mix'], imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
];

const reviews = [
  { name: "Lena M.", text: "Ich hatte eine großartige Erfahrung mit Neujahrsreisen in Tansania! Der Buchungsprozess war einfach, und das Reiseziel war einfach wunderschön." },
  { name: "Johannes S.", text: "Unsere Neujahr-Safari-Tour in Tansania war magisch! Wir haben die Big 5 aus nächster Nähe gesehen. Auch die Strände von Sansibar waren traumhaft. Diese Firma hat unseren Neujahrsurlaub 2026/2027 unvergesslich gemacht." },
  { name: "Clara W.", text: "Unsere Luxus Neujahrsreise-Buchung war ein wahrer Traum! Die Unterkunft war erstklassig, das Essen hervorragend und die private Safari-Erfahrung einzigartig." },
  { name: "Maximilian K.", text: "Ich habe einen Last Minute Neujahrsurlaub gebucht und war anfangs etwas besorgt, aber alles verlief reibungslos. Die Strände von Sansibar und die Neujahr-Safari in Tansania waren fantastisch." },
  { name: "Julia B.", text: "Wer hätte gedacht, dass Neujahrsurlaub in Tansania so toll wäre? Keine Schneeflocken, dafür die Sonne und Strände von Sansibar! Großartiger Service und ein unvergesslicher Neujahrsurlaub." },
  { name: "Felix R.", text: "Unser Neujahrsurlaub in Tansania war unvergesslich. Die Neujahr-Safari war ein Highlight – die Big 5 aus nächster Nähe zu sehen war einfach atemberaubend." }
];

export default function NewYearPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Neujahrs Safari Tansania" 
          fill 
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white mb-8 leading-tight tracking-tight">
              Exklusive Neujahrs Safari & Sansibar 2026/2027
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-normal leading-relaxed opacity-80">
              Ihr Jahreswechsel in Luxus & Abenteuer. Starten Sie das Jahr im Herzen der Savanne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Intro */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-5xl text-center">
        <div className="space-y-6">
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-90">
            Starten Sie das neue Jahr mit unvergesslichen Erlebnissen: eine private Safari in der Serengeti, luxuriöse Lodges unter Afrikas Sternenhimmel oder Entspannung an den paradiesischen Stränden Sansibars. Unsere handverlesenen Neujahrsreisen verbinden Abenteuer, Luxus und Exklusivität – perfekt auf Ihre Wünsche abgestimmt.
          </p>
          <div className="pt-4">
            <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-12 h-14 md:h-16 font-bold text-xs shadow-xl border-none transition-all">
              Jetzt Jahreswechsel planen
            </Button>
          </div>
        </div>
      </section>

      {/* 03 Package Registry Grid */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 How Tanzania Makes New Year Unforgettable */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <div className="space-y-6 text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">Wie macht Tansania Ihre Neujahrsreise unvergesslich?</h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                Tansania ist das ideale Ziel für eine einzigartige Reise über Neujahr in Afrika. Ob Sie auf den weißen Sandstränden von Sansibar entspannen, die beeindruckende Kilimanjaro Besteigung wagen oder auf Safari gehen möchten, hier gibt es unzählige Möglichkeiten, Ihre Neujahrsferien unvergesslich zu machen.
              </p>
            </div>
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800" alt="Zanzibar New Year" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Waves, t: "Sansibar Strände", d: "Genießen Sie weiße Sandstrände und kristallklares Wasser – der perfekte Ort für Neujahr in der Sonne.", img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=400" },
              { icon: Compass, t: "Safari-Abenteuer", d: "Erleben Sie ein unvergessliches Safari-Abenteuer durch die Serengeti und den Ngorongoro-Krater.", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400" },
              { icon: Mountain, t: "Kilimanjaro Trekking", d: "Wandern Sie auf dem majestätischen Kilimanjaro und erleben Sie die atemberaubende Aussicht.", img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400" },
              { icon: Star, t: "Die Big 5", d: "Treffen Sie die legendären Big 5 und machen Sie Ihr Neujahrsurlaub zu einem unvergesslichen Erlebnis.", img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=400" }
            ].map((item, i) => (
              <div key={i} className="bg-[#fdfcfb] rounded-[2rem] overflow-hidden border border-border/50 group hover:border-primary/20 transition-all flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={item.img} alt={item.t} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 space-y-3 flex-grow text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-xl font-bold text-secondary">{item.t}</h4>
                  <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Why Your New Year 2026/2027 becomes Unique */}
      <section className="py-8 md:py-12 bg-[#FDF7F2] overflow-hidden border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-12 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Warum Ihr Neujahr 2026/2027 in Tansania einzigartig wird
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-lg font-normal opacity-80">
              Starten Sie mit außergewöhnlichen Erlebnisssen ins neue Jahr: eine private Safari durch die Serengeti, Luxuslodges unter dem afrikanischen Sternenhimmel und pure Entspannung an den Stränden Sansibars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { t: "Exklusive Luxus-Safaris", d: "Starte ins neue Jahr mit einer privat geführten Safari, luxuriösen Lodges und purem strandgenuss auf Sansibar." },
              { t: "Sonne statt Kälte", d: "Wählen Sie Ihre Traumreise und genießen Sie Sonne zum Jahresbeginn. Safari-Abenteuer statt Kälte." },
              { t: "Familienzauber", d: "Erleben Sie Safari-Abenteuer, die Kinder begeistern, und entspanne in familienfreundlichen Lodges mit Pool." },
              { t: "Last-Minute Option", d: "Kurzentschlossen ins Paradies: sichern Sie sich eine spontane Luxus-Safari mit persönlichem Guide." },
              { t: "Big Five zum Jahresstart", d: "Begrüße das neue Jahr inmitten der Serengeti, erlebe die Big Five hautnah und finde Entspannung." },
              { t: "Silvester außergewöhnlich", d: "Statt Wintergrau erwartet dich Afrikas Sonne: private Safari-Erlebnisse und handverlesene Lodges." }
            ].map((point, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] shadow-sm border border-border/30 flex items-start gap-5 hover:shadow-md transition-all text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-secondary">{point.t}</h4>
                  <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{point.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Why Partner for Exclusive New Year Trip */}
      <section className="py-8 md:py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 text-left">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">Warum Tansania-Reiseabenteuer Ihr Partner für Neujahr ist</h2>
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                  Bei Tansania-Reiseabenteuer bekommen Sie mehr als nur eine Reise – Sie erhalten ein maßgeschneidertes Erlebnis, das Ihre Erwartungen übertrifft. Unser deutschsprachiger Premium-Service begleitet Sie von der ersten Beratung bis zur Rückreise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Neujahrszauber für Familien", d: "Kindgerechte Safaris mit Elefanten & Giraffen und familienfreundliche Lodges." },
                  { t: "Romantik für Zwei", d: "Beginnen Sie das neue Jahr mit romantischen Tagen in exklusiven Lodges, privaten Safaris nur für Sie und erholsamen Stunden am Traumstrand." },
                  { t: "Individuelle Abenteurer", d: "Als Alleinreisende:r genießen Sie maßgeschneiderte Routen, private Guides und absolute Flexibilität." },
                  { t: "Freunde & Teams", d: "Spektakuläre Natur und entspannte Tage am Ozean für Gruppen." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#fdf7f2] rounded-2xl border border-border/40 space-y-2 group hover:border-primary/20 transition-all">
                    <h4 className="font-bold text-base text-secondary">{item.t}</h4>
                    <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400" alt="Safari" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=400" alt="Wildlife" fill className="object-cover" />
                </div>
              </div>
              <div className="pt-10 space-y-4">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=400" alt="Beach" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=400" alt="Zanzibar" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Reviews */}
      <section className="py-8 md:py-12 bg-[#fdfcfb] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-12 tracking-tighter">Kundenbewertungen zu unseren Neujahrsreisen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm text-left group hover:shadow-xl transition-all">
                <div className="space-y-6">
                  <div className="flex gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm md:text-base font-normal italic text-secondary leading-relaxed opacity-80">"{r.text}"</p>
                </div>
                <p className="mt-8 font-bold text-primary text-xs tracking-widest uppercase">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry"><ContactSection /></section>
    </div>
  );
}
