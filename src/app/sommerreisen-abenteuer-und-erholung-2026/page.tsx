
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Waves, 
  Sun, 
  ShieldCheck, 
  Plus,
  Mountain,
  Leaf,
  Calendar,
  Clock,
  Users,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

const discoveryCards = [
  { 
    icon: Waves, 
    t: "Sansibar Strände", 
    d: "Genießen Sie weiße Sandstrände und kristallklares Wasser – der ideale Ort, um Ihre Sommerferien in Afrika zu feiern.", 
    img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=600" 
  },
  { 
    icon: Compass, 
    t: "Safari-Abenteuer", 
    d: "Erleben Sie ein exklusives Safari-Abenteuer durch die Serengeti und den Ngorongoro-Krater.", 
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" 
  },
  { 
    icon: Mountain, 
    t: "Kilimanjaro Trekking", 
    d: "Wandern Sie auf dem majestätischen Kilimandscharo und genießen Sie die atemberaubende Aussicht auf das Dach Afrikas.", 
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600" 
  },
  { 
    icon: Star, 
    t: "Die Big 5", 
    d: "Treffen Sie die legendären Big 5 und machen Sie Ihre Safari zu einem exklusiven Erlebnis, das Ihren Sommer unvergesslich macht.", 
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600" 
  }
];

const faqs = [
  { q: "Was kostet ein Sommerurlaub in Tansania?", a: "Die Kosten hängen stark von der Reisedauer und dem gewünschten Komfortlevel ab. Eine hochwertige private Safari inklusive Sansibar beginnt meist bei ca. 3.000 € pro Person." },
  { q: "Warum sollte ich den Sommer in Tansania verbringen?", a: "Die Sommermonate (Juni bis Oktober) gelten als die beste Reisezeit für Tierbeobachtungen, da es trocken ist und sich die Tiere an den verbleibenden Wasserquellen sammeln." },
  { q: "Bietet Tansania Reiseabenteuer deutschsprachige Sommerreisen an?", a: "Ja, wir sind spezialisiert auf deutschsprachige Privat-Safaris. Unsere exzellent ausgebildeten Guides begleiten Sie persönlich." },
  { q: "Was ist der beste Zeitpunkt, um nach Tansania für den Sommer zu reisen?", a: "August und September sind besonders spektakulär, da in dieser Zeit oft die Flussüberquerungen der Großen Migration im Norden der Serengeti stattfinden." },
  { q: "Welche Aktivitäten kann ich in Tansania während meines Sommerurlaubs machen?", a: "Neben klassischen Pirschfahrten bieten wir Heißluftballon-Safaris, geführte Buschwanderungen, Schnorcheltouren auf Sansibar und Kilimandscharo-Besteigungen an." },
  { q: "Wie kann ich den Sommer in Afrika verbringen?", a: "Am besten mit einer Kombination aus Abenteuer und Erholung. Wir planen Ihre Route so, dass Sie erst die Wildnis erleben und dann am Ozean entspannen." },
  { q: "Was bietet Tansania Reiseabenteuer für Sommerreisen?", a: "Wir bieten 100% maßgeschneiderte Erlebnisse, handverlesene Luxus-Lodges und ein eigenes Team vor Ort für maximale Sicherheit und Qualität." }
];

const reviews = [
  { name: "Lena M.", text: "Ich hatte eine großartige Erfahrung mit Sommerreisen in Tansania! Der Buchungsprozess war einfach, und das Reiseziel war einfach wunderschön. Sehr zu empfehlen!" },
  { name: "Johannes S.", text: "Unsere Sommer-Safari-Tour in Tansania war magisch! Wir haben die Big 5 aus nächster Nähe gesehen. Auch die Strände von Sansibar waren traumhaft. Diese Firma hat unseren Urlaub unvergesslich gemacht." },
  { name: "Clara W.", text: "Unsere Luxus Sommerreise-Buchung war ein wahrer Traum! Die Unterkunft war erstklassig, das Essen hervorragend und die private Safari-Erfahrung einzigartig. Alles war perfekt organisiert." },
  { name: "Maximilian K.", text: "Ich habe einen Last Minute Sommerurlaub gebucht und war anfangs etwas besorgt, aber alles verlief reibungslos. Der Service war hervorragend und flexibel. Ich werde definitiv wieder buchen!" },
  { name: "Julia B.", text: "Wer hätte gedacht, dass Sommerurlaub in Tansania so toll wäre? Statt Mittelmeer die Sonne und Strände von Sansibar! Großartiger Service und ein unvergesslicher Urlaub." },
  { name: "Felix R.", text: "Unser Sommerurlaub in Tansania war unvergesslich. Die Safari war ein Highlight – die Big 5 aus nächster Nähe zu sehen war einfach atemberaubend. Der Service war erstklassig." }
];

export default function SummerTravelPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Hero Section - Clean Protocol */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920" 
          alt="Sommerurlaub Tansania" 
          fill 
          priority
          className="object-cover brightness-50 scale-105"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-headline text-3xl md:text-7xl font-normal text-white mb-8 leading-tight tracking-tight">
              Sommerurlaub 2026/2027 in Tansania
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-normal leading-relaxed opacity-80">
              Private Luxus Safari & Sansibar. Erleben Sie den Sommer einmal anders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Intro & USPs */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-5xl text-center">
        <div className="space-y-10">
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-90">
            Erleben Sie den Sommer einmal anders: Statt überfüllter Strände erwarten Sie exklusive Safaris in der Serengeti – und anschließend pure Entspannung an Sansibars weißen Traumküsten. Handverlesene Lodges, privater Guide und deutschsprachige Betreuung – individuell für Sie gestaltet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              { icon: Compass, t: "Privat & maßgeschneidert", d: "Route, Tempo und Lodge-Kategorie nach Ihrem Wunsch gestaltet." },
              { icon: ShieldCheck, t: "Luxus & Sicherheit", d: "Handverlesene Partner und 24/7 Kontakt auf Deutsch." },
              { icon: Sun, t: "Safari + Strand", d: "Tierbeobachtungen in der Serengeti, Erholung auf Sansibar." }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary shadow-inner">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-secondary text-sm md:text-base">{item.t}</h4>
                <p className="text-xs md:text-sm text-muted-foreground font-normal leading-relaxed">{item.d}</p>
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

      {/* 04 Modern Discovery Sections */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">
              Warum den Sommer in Tansania verbringen?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80 max-w-3xl mx-auto">
              Statt überfüllter Mittelmeerstrände genießen Sie in Tansania unvergessliche Safaris, sonnige Tage und weiße Traumstrände.
            </p>
          </div>

          {/* Desktop Grid: Glass Protocol */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {discoveryCards.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-border/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.img} alt={item.t} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-headline text-xl font-bold text-white leading-tight">{item.t}</h4>
                    <p className="text-[11px] text-white/80 font-normal leading-relaxed line-clamp-3">
                      {item.d}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Modern Slider Protocol */}
          <div className="md:hidden">
            <Carousel opts={{ align: "start", containScroll: "trimSnaps" }} className="w-full">
              <CarouselContent>
                {discoveryCards.map((item, i) => (
                  <CarouselItem key={i} className="basis-[85%]">
                    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl bg-secondary group">
                      <Image src={item.img} alt={item.t} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 space-y-3">
                        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
                          <item.icon className="w-4 h-4" />
                        </div>
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

      {/* 05 Safari & Erholung Narrative */}
      <section className="py-12 md:py-24 bg-[#FDFCFB]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Safari Discovery" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="space-y-8 order-1 lg:order-2 text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">
                Sommerurlaub in Tansania – Eine Kombination aus Safari, Strand & Abenteuer
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                Tansania ist das perfekte Ziel für einen unvergesslichen Sommer. Begegnen Sie den Big Five in der Serengeti, übernachten Sie in luxuriösen Lodges unter dem Sternenhimmel und entspannen Sie sich an den weißen Sandstränden Sansibars. Ob Safari-Abenteuer, Kilimandscharo-Trekking oder tropischer Strandurlaub – unsere maßgeschneiderten Reisen vereinen Luxus, Natur und Exklusivität. So wird Ihr Sommer außergewöhnlich.
              </p>
              <div className="pt-4">
                <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-10 h-12 md:h-14 bg-secondary text-white hover:bg-primary font-bold text-xs border-none shadow-xl transition-all">
                  Jetzt Sommerreise planen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Unique Advantages Section */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Warum Ihr Sommer 2026/2027 einzigartig wird
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { t: "Exklusive Luxus-Safaris", d: "Starten Sie Ihren Sommer mit einer privat geführten Safari, luxuriösen Lodges und purem Strandgenuss auf Sansibar." },
              { t: "Europa oder Safari?", d: "Ob festliche Sommerfeste in Europa oder die wilde Serengeti Afrikas – wählen Sie Ihre Traumreise. Sonne statt Regen im Sommer." },
              { t: "Familienzauber im Sommer", d: "Erleben Sie Safari-Abenteuer, die Kinder begeistern, und entspannen Sie in familienfreundlichen Lodges mit Pool." },
              { t: "Last-Minute Sommer-Safari", d: "Kurzentschlossen ins Paradies: Sichern Sie sich eine spontane Luxus-Safari mit persönlichem Guide. Nur wenige Plätze!" },
              { t: "Dein unvergesslicher Sommer", d: "Begrüßen Sie den Sommer inmitten der Serengeti, erleben Sie die Big Five hautnah und finden Sie Entspannung am weißen Strand." },
              { t: "Sommer in Tansania", d: "Statt Regen erwartet Sie Afrikas Sonne: private Safari-Erlebnisse, handverlesene Lodges und tropische Strände." }
            ].map((point, i) => (
              <div key={i} className="p-8 bg-[#fdfcfb] rounded-[2rem] shadow-sm border border-border/40 flex items-start gap-5 hover:shadow-md transition-all text-left">
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

      {/* 07 Partner Protocol */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 text-left">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">Warum Tansania Reiseabenteuer Ihr Partner ist</h2>
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                  Mit uns erleben Sie mehr als nur eine Reise – Sie erhalten ein maßgeschneidertes Abenteuer, das Ihre Erwartungen übertrifft.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Familien-Safari & Strand", d: "Erleben Sie gemeinsam eine kindgerechte Safari mit Elefanten und Giraffen in familienfreundlichen Lodges." },
                  { t: "Romantische Luxusreisen", d: "Beginnen Sie den Sommer mit romantischen Tagen in exklusiven Lodges und privaten Safaris nur für Sie zwei." },
                  { t: "Individuelle Abenteurer", d: "Genießen Sie maßgeschneiderte Routen, private Guides und absolute Flexibilität auf Ihrer Solo-Reise." },
                  { t: "Freunde & Teams", d: "Erleben Sie gemeinsam aufregende Safaris und spektakuläre Natur in einer verbundenen Gruppe." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#fdf7f2] rounded-2xl border border-border/40 space-y-2 group hover:border-primary transition-all">
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

      {/* 08 Reviews Section */}
      <section className="py-12 md:py-24 bg-[#fdfcfb] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-12 tracking-tighter">Kundenbewertungen zu unseren Sommerreisen</h2>
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

      {/* 09 FAQ Registry */}
      <section className="py-12 md:py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-6 tracking-tighter">Häufig gestellte Fragen zu Sommerreisen</h2>
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
                <AccordionContent className="text-muted-foreground text-sm pb-8 leading-relaxed font-normal opacity-80">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="inquiry"><ContactSection /></section>
    </div>
  );
}
