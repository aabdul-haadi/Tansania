
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Waves, 
  ShieldCheck, 
  Mountain,
  Sparkles,
  Zap,
  Globe,
  Users,
  Heart,
  Calendar,
  Clock,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const packages = [
  {
    id: '15-day-safari-zanzibar',
    title: '15 Tage Safari in Tansania und Sansibar',
    slug: '15-day-safari-zanzibar',
    durationDays: 15,
    startingPrice: 5399,
    category: 'Signature',
    highlights: ['Top Nationalparks Safari', 'Massai Dorfbesuch', 'Sansibar Strände & Tauchen'],
    excerpt: 'Unsere umfassendste Expedition: Vom Herzen der Serengeti bis zu den Palmen Sansibars – perfekt kombiniert.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
  },
  {
    id: 'safari-sansibar-13-tage',
    title: '13 Tage Safari & Sansibar',
    slug: 'safari-sansibar-13-tage',
    durationDays: 13,
    startingPrice: 3699,
    category: 'Signature',
    highlights: ['Big Five Pirschfahrten', 'Ngorongoro UNESCO Krater', 'Stone Town Stadttour'],
    excerpt: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung am Ozean.',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  },
  {
    id: 'safari-sansibar-11-tage',
    title: '11 Tage Safari & Sansibar',
    slug: 'safari-sansibar-11-tage',
    durationDays: 11,
    startingPrice: 2999,
    category: 'Kompakt',
    highlights: ['Elefanten im Tarangire', 'Serengeti Tiermigration', 'Sansibar Strände'],
    excerpt: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten Reise.',
    imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
  },
  {
    id: 'familien-safari-12-tage',
    title: '12 Tage Familien-Safari',
    slug: 'familien-safari-12-tage',
    durationDays: 12,
    startingPrice: 3499,
    category: 'Familie',
    highlights: ['Big Five Pirschfahrten', 'Schulbesuch in Karatu', 'Kinderfreundliche Lodges'],
    excerpt: 'Unvergessliche Erlebnisse für Groß & Klein mit einem Reisetempo, das alle glücklich macht.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
  },
  {
    id: 'flitterwochen-tansania-sansibar',
    title: '13 Tage Flitterwochen',
    slug: 'flitterwochen-tansania-sansibar',
    durationDays: 13,
    startingPrice: 3899,
    category: 'Honeymoon',
    highlights: ['Champagner bei Sonnenuntergang', 'Privat-Safari', 'Luxuslodges & Villen'],
    excerpt: 'Romantik pur & Safari-Abenteuer erleben – Ihr Start in ein gemeinsames Leben.',
    imageUrl: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800'
  },
  {
    id: '7-tage-sansibar',
    title: '7 Tage Sansibar',
    slug: '7-tage-sansibar',
    durationDays: 7,
    startingPrice: 2699,
    category: 'Signature',
    highlights: ['Stone Town Tour', 'Gewürzplantagen', 'Bootstour & Schnorcheln'],
    excerpt: 'Traumstrände & Tropenflair erleben – die perfekte Auszeit auf der Gewürzinsel.',
    imageUrl: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800'
  },
  {
    id: '12-tage-camping-safari',
    title: '12 Tage Camping Safari',
    slug: '12-tage-camping-safari',
    durationDays: 12,
    startingPrice: 2799,
    category: 'Abenteuer',
    highlights: ['Zelten in der Serengeti', 'Lagerfeuer unter Sternen', 'Authentische Wildnis'],
    excerpt: 'Wildnis hautnah, Strand pur – das authentischste Abenteuer für echte Entdecker.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
  },
  {
    id: '13-tage-kilimandscharo-kombi',
    title: '13 Tage Kilimandscharo Kombi',
    slug: '13-tage-kilimandscharo-kombi',
    durationDays: 13,
    startingPrice: 4699,
    category: 'Expedition',
    highlights: ['Kili Besteigung', 'Nationalpark Safari', 'Sansibar Erholung'],
    excerpt: 'Vom ewigen Eis des Kilimandscharo bis zum tropischen Paradies Sansibar.',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
  }
];

const discoveryCards = [
  { icon: Waves, t: "Sansibar Strände", d: "Genießen Sie weiße Sandstrände und kristallklares Wasser – der ideale Ort für Ihre Osterferien in der Sonne.", img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=600" },
  { icon: Compass, t: "Safari-Abenteuer", d: "Erleben Sie ein exklusives Safari-Abenteuer durch die Serengeti und den Ngorongoro-Krater zu Ostern.", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" },
  { icon: Mountain, t: "Kilimandscharo Trekking", d: "Wandern Sie auf dem majestätischen Kilimandscharo und genießen Sie die atemberaubende Aussicht.", img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600" },
  { icon: Star, t: "Die Big 5", d: "Treffen Sie die legendären Big 5 und machen Sie Ihren Osterurlaub zu einem unvergesslichen Erlebnis.", img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600" }
];

const reviews = [
  { n: "Sarah K.", q: "Ich hatte eine großartige Erfahrung mit Osterreisen in Tansania! Der Buchungsprozess war einfach, und das Reiseziel war einfach wunderschön." },
  { n: "Mark T.", q: "Unsere Oster-Safari-Tour in Tansania war magisch! Wir haben die Big 5 aus nächster Nähe gesehen. Auch die Strände von Sansibar waren traumhaft." },
  { n: "Emma L.", q: "Unsere Luxus Osterreise-Buchung war ein wahrer Traum! Die Unterkunft war erstklassig, das Essen hervorragend und die private Safari-Erfahrung einzigartig." },
  { n: "Alex P.", q: "Ich habe einen Last Minute Osterurlaub gebucht und war anfangs etwas besorgt, aber alles verlief reibungslos. Der Service war hervorragend." },
  { n: "Linda M.", q: "Wer hätte gedacht, dass Ostern in Tansania so toll wäre? Keine Schneeflocken, dafür die Sonne und Strände von Sansibar! Großartiger Service." },
  { n: "David W.", q: "Unser Osterurlaub in Tansania war unvergesslich. Die Safari war ein Highlight – die Big 5 aus nächster Nähe zu sehen war einfach atemberaubend." }
];

export default function EasterPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Clean Hero Section */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920" 
          alt="Ostern in Tansania" 
          fill 
          priority 
          className="object-cover brightness-50" 
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white mb-8 leading-tight tracking-tight">Ostern 2026 in Tansania</h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-normal leading-relaxed opacity-80">
              Verbringen Sie die Osterferien einmal anders – mit exklusiver Safari & Sansibar Entspannung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Content Grid: Advantages */}
      <section className="py-8 md:py-16 container mx-auto px-4 max-w-5xl text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, t: "Privat & maßgeschneidert", d: "Route, Tempo und Lodge-Kategorie nach Ihrem Wunsch gestaltet." },
            { icon: ShieldCheck, t: "Luxus & Sicherheit", d: "Handverlesene Partner und 24/7 Kontakt auf Deutsch." },
            { icon: Heart, t: "Safari + Strand", d: "Big Five in der Serengeti, Erholung am Indischen Ozean." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-secondary">{item.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 Package Registry: Shared Component */}
      <section className="py-8 md:py-16 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-4">Unsere Oster-Kollektion</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Sorgfältig kuratierte Reisen für die ideale Oster-Auszeit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg as any} />
            ))}
          </div>
        </div>
      </section>

      {/* 04 Modern Discovery Protocol */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Warum Ostern in Tansania?</h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
              Während zuhause der Frühling gerade erst beginnt, erlebst du in Tansania spektakuläre Tierbeobachtungen und Sonne pur.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-4 gap-6">
            {discoveryCards.map((item, i) => (
              <div key={i} className="relative rounded-[2.5rem] overflow-hidden group shadow-sm border border-border/40 h-full flex flex-col bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.img} alt={item.t} fill className="object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-md flex items-center justify-center text-white"><item.icon className="w-5 h-5" /></div>
                    <h4 className="font-headline text-xl font-bold text-white leading-tight">{item.t}</h4>
                    <p className="text-[11px] text-white/80 font-normal leading-relaxed line-clamp-3">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:hidden">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-0">
                {discoveryCards.map((item, i) => (
                  <CarouselItem key={i} className="pl-0 basis-[85%] pr-4">
                    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl bg-secondary">
                      <Image src={item.img} alt={item.t} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 space-y-3">
                        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg"><item.icon className="w-4 h-4" /></div>
                        <h4 className="font-headline text-lg font-bold text-white leading-tight">{item.t}</h4>
                        <p className="text-[10px] text-white/70 font-normal leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* 05 Unique Advantages Section */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-6">Ostern in Tansania – Das Außergewöhnliche erleben</h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">Unsere maßgeschneiderten Reisen verbinden Luxus, Natur und Exklusivität.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Exklusive Luxus-Safaris", d: "Starte in den Frühling mit einer privat geführten Safari und luxuriösen Lodges." },
              { t: "Sonne statt Regen", d: "Safari-Abenteuer und Sonne statt wechselhaftem Frühlingswetter." },
              { t: "Familienzauber", d: "Erlebe Safari-Abenteuer, die Kinder begeistern, und entspanne in familienfreundlichen Lodges." },
              { t: "Last-Minute Ostern", d: "Kurzentschlossen ins Paradies: sichere dir eine der letzten exklusiven Safaris." },
              { t: "Große Migration zu Ostern", d: "Begrüße den Frühling inmitten der Serengeti und erlebe die Tierwelt hautnah." },
              { t: "Sonne, Safari & Luxus", d: "Statt Grau erwartet dich Afrikas Sonne: private Safari-Erlebnisse und tropische Strände." }
            ].map((point, i) => (
              <div key={i} className="p-8 bg-[#fdfcfb] rounded-[2rem] shadow-sm border border-border/30 flex items-start gap-5 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-secondary">{point.t}</h4>
                  <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{point.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Partner Protocol */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">Warum wir Ihr perfekter Partner für Ostern sind</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Osterzauber für Familien", d: "Kindgerechte Safaris mit Elefanten & Giraffen und familienfreundliche Lodges." },
                  { t: "Romantik für Zwei", d: "Beginnen Sie den Frühling mit privaten Safaris und erholsamen Stunden am Traumstrand." },
                  { t: "Individuelle Abenteuer", d: "Alleinreisende genießen maßgeschneiderte Routen und absolute Flexibilität." },
                  { t: "Osterferien für Gruppen", d: "Spektakuläre Natur und entspannte Tage am Ozean mit Freunden erleben." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#fdf7f2] rounded-2xl border border-border/40 space-y-2">
                    <h4 className="font-bold text-base text-secondary">{item.t}</h4>
                    <p className="text-sm text-muted-foreground font-normal leading-relaxed opacity-80">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800" alt="Safari Expert" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 07 Customer Reviews Matrix */}
      <section className="py-12 md:py-24 bg-[#fdfcfb] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">Gäste-Erfahrungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm italic text-secondary leading-relaxed font-bold tracking-tight opacity-80">"{r.q}"</p>
                </div>
                <p className="mt-6 font-bold text-primary text-xs tracking-normal">— {r.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 FAQ Registry */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">Häufig gestellte Fragen zu Osterreisen</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Was kostet ein Osterurlaub in Tansania?", a: "Die Kosten hängen stark von der Dauer und dem gewählten Komfortlevel ab. Eine hochwertige 12-tägige Privat-Safari beginnt meist bei ca. 3.500 € pro Person." },
              { q: "Warum sollte ich Ostern in Tansania verbringen?", a: "Es ist die Zeit, in der die Natur nach den Regenfällen in saftigem Grün erstrahlt, die Tierwelt besonders aktiv ist und weniger Touristen unterwegs sind." },
              { q: "Bietet Tansania Reiseabenteuer deutschsprachige Osterreisen an?", a: "Ja, alle unsere Safaris werden von professionellen, deutschsprachigen Guides begleitet und persönlich für Sie geplant." },
              { q: "Was ist der beste Zeitpunkt, um nach Tansania für Ostern zu reisen?", a: "Die Osterwochen selbst sind ideal, da sie oft in die kleine Trockenzeit fallen und perfekte Bedingungen für Safaris bieten." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-easter-${i}`} className="border-none bg-[#FDFCFB] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] pb-8 font-normal opacity-80 tracking-normal text-left">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
