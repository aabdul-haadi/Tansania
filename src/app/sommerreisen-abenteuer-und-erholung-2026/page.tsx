"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Compass, ArrowRight, CheckCircle2, Zap, Waves, Sun, ShieldCheck, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const faqs = [
  { q: "Was kostet ein Sommerurlaub in Tansania?", a: "Die Kosten variieren je nach Reisedauer und Lodge-Kategorie. In der Regel beginnen hochwertige Privat-Safaris inkl. Sansibar bei ca. 3.000 € pro Person." },
  { q: "Warum sollte ich den Sommer in Tansania verbringen?", a: "Die Sommermonate (Juni bis Oktober) sind die beste Reisezeit für Tierbeobachtungen, da es trocken ist und sich die Tiere an den Wasserstellen konzentrieren." },
  { q: "Bietet Tansania Reiseabenteuer deutschsprachige Sommerreisen an?", a: "Ja, wir sind spezialisiert auf deutschsprachige Privat-Safaris mit exzellent ausgebildeten Guides." },
  { q: "Was ist der beste Zeitpunkt, um nach Tansania für den Sommer zu reisen?", a: "August und September sind ideal für die Flussüberquerungen der Großen Migration im Norden der Serengeti." }
];

export default function SummerTravelPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section - Clean bottom transition */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920" 
          alt="Sommerurlaub Tansania" 
          fill 
          priority
          className="object-cover brightness-50"
        />
        {/* Stable simple overlay protocol */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[11px] font-bold mb-6">
              Sommer-Edition 2026/2027
            </Badge>
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white mb-8 leading-tight tracking-tight">
              Sommerurlaub 2026/2027 in Tansania
            </h1>
            <p className="max-w-2xl mx-auto text-[14px] md:text-xl text-white/90 font-normal leading-relaxed opacity-80">
              Private Luxus Safari & Sansibar. Erleben Sie den Sommer einmal anders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Intro */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-5xl text-center">
        <div className="space-y-6">
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-90">
            Erleben Sie den Sommer einmal anders: Statt überfüllter Strände erwarten Sie exklusive Safaris in der Serengeti – und anschließend pure Entspannung an Sansibars weißen Traumküsten. Handverlesene Lodges, privater Guide und deutschsprachige Betreuung – individuell für Sie gestaltet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {[
              { icon: Compass, t: "Privat & maßgeschneidert", d: "Route, Tempo und Lodge-Kategorie nach Ihrem Wunsch gestaltet." },
              { icon: ShieldCheck, t: "Luxus & Sicherheit", d: "Handverlesene Partner und 24/7 Kontakt auf Deutsch." },
              { icon: Sun, t: "Safari + Strand", d: "Tierbeobachtungen in der Serengeti, Erholung auf Sansibar." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-secondary text-sm">{item.t}</h4>
                <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Package Registry */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg as any} />
          ))}
        </div>
      </section>

      {/* 04 Why Summer Section */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Warum den Sommer in Tansania verbringen?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Waves, t: "Sansibar Strände", d: "Genießen Sie die weißen Sandstrände und das kristallklare Wasser der tropischen Insel." },
              { icon: Compass, t: "Safari-Abenteuer", d: "Erleben Sie ein exklusives Safari-Abenteuer durch die Serengeti und den Ngorongoro-Krater." },
              { icon: Zap, t: "Kilimanjaro Trekking", d: "Wandern Sie auf dem majestätischen Kilimandscharo und genießen Sie die atemberaubende Aussicht." },
              { icon: Star, t: "Die Big 5", d: "Treffen Sie die legendären Big 5 und machen Sie Ihre Safari zu einem exklusiven Erlebnis." }
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

      {/* 05 Expertise Hub */}
      <section className="py-8 md:py-12 bg-[#FDF7F2]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10">
              <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
                Sommer in Tansania – Sonne, Safari & Luxus 2026/2027
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Exklusive Luxus-Safaris", d: "Starten Sie Ihren Sommer mit einer privat geführten Safari und luxuriösen Lodges." },
                  { t: "Afrika erleben", d: "Wählen Sie Ihre Traumreise. Safari-Abenteuer und Sonne statt Regen im Sommer." },
                  { t: "Familien-Safari", d: "Abenteuer, die Kinder begeistern, und Entspannung in familienfreundlichen Lodges." },
                  { t: "Dein unvergesslicher Sommer", d: "Begrüßen Sie den Sommer inmitten der Serengeti und finden Sie Entspannung am weißen Strand." }
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
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Summer Safari" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 06 FAQ Registry */}
      <section className="py-8 md:py-12 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-6 tracking-tighter">Häufig gestellte Fragen</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-[#fdfcfb] rounded-2xl px-8 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-8 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="inquiry"><ContactSection /></section>
    </div>
  );
}
