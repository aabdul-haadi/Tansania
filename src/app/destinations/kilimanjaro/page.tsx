"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Clock, 
  Map, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ChevronRight,
  TrendingUp,
  Backpack,
  Video,
  LayoutGrid,
  Info,
  Wind,
  Sun,
  Timer,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const youtubeVideos = [
  { id: "DuwK6uDjHAA", title: "Kilimanjaro Summit Expedition" },
  { id: "tpPEIbAeF34", title: "Machame Route Experience" },
  { id: "uVilAKUc8zE", title: "Lemosho Route Views" }
];

export default function KilimanjaroPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const kiliPackages = packages?.filter(p => 
    ['KILIMANDSCHARO KOMBI', 'KILIMANDSCHARO', 'MOUNT MERU'].includes(p.category)
  ) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen pb-20">
      {/* Immersive Header */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Kilimanjaro Summit" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="mount kilimanjaro"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              Das Dach Afrikas
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Besteigen Sie den <br />
              <span className="text-primary italic">Kilimandscharo</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed px-4">
              Erleben Sie das ultimative Abenteuer: Finde deine perfekte Route & Traumreise zum Uhuru Peak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
              <Mountain className="w-4 h-4" /> Kilimandscharo Abenteuer
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
              Was macht den Kilimandscharo <br /><span className="text-primary italic">so besonders?</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Der Kilimandscharo vereint atemberaubende Landschaften, eine echte körperliche und mentale Herausforderung und den Nervenkitzel, den höchsten Gipfel Afrikas zu erklimmen — und das ganz ohne technische Kletterkenntnisse. 
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Seine einzigartigen Routen führen dich durch üppige Regenwälder, alpine Wüsten und eisige Gletscher und bieten dir auf einer einzigen Reise fünf verschiedene Klimazonen. Für entschlossene Anfänger genauso zugänglich wie für erfahrene Bergsteiger.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1000" alt="Kili Trekking" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Quick Facts - High Contrast */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="mb-16">
            <h3 className="font-headline text-3xl md:text-5xl font-bold mb-4">Kilimandscharo Quick Facts</h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: TrendingUp, label: "Höhe", val: "5.895 Meter", sub: "Höchster Berg Afrikas" },
              { icon: Map, label: "Routen", val: "7 Aufstiegsrouten", sub: "Offizielle Pfade" },
              { icon: Timer, label: "Dauer", val: "5-10 Tage", sub: "Je nach Route" },
              { icon: Wind, label: "Klimazonen", val: "5 Zonen", sub: "Auf einem Berg" },
              { icon: Award, label: "Erfolgsquote", val: "Bis zu 90%", sub: "Mit Akklimatisierung" }
            ].map((fact, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[10px] uppercase font-bold text-primary tracking-widest">{fact.label}</p>
                <p className="font-bold text-xl text-white">{fact.val}</p>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{fact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Package Catalog */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Expeditions-Registry</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Wählen Sie Ihre <br /><span className="text-primary italic">Traumreise</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4">
            Ob Solo-Abenteuer oder exklusive Gruppenreise – hier beginnt dein Weg zum Uhuru Peak.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Syncing Global Catalog...</div>
        ) : kiliPackages.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border border-dashed rounded-[3rem]">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="font-bold text-sm">Keine Kilimandscharo-Routen im System.</p>
            <Button variant="link" asChild className="text-primary">
              <Link href="/admin">Initialisieren Sie die Daten im Admin-Panel</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {kiliPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Visual Experience</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Erleben Sie die <span className="text-primary italic">Magie</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 bg-muted"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:opacity-0 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Selection Comparison */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4">Welche Route passt <span className="text-primary italic">zu dir?</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Jeder Bergsteiger-Typ findet hier seinen Weg.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { q: "Welche Route ist am besten für Anfänger?", r: "Marangu- oder Machame-Route", d: "Leicht zu folgen, gute Infrastruktur und angenehmes Tempo." },
            { q: "Welche bietet die spektakulärste Landschaft?", r: "Lemosho- oder Machame-Route", d: "Dramatische Panoramen und vielfältige Ökosysteme." },
            { q: "Beste Route mit kleinem Budget?", r: "Marangu-Route", d: "Kürzeste Dauer, Hüttenübernachtungen und geringere Gesamtkosten." },
            { q: "Passend für moderate Wanderer?", r: "Machame- oder Lemosho-Route", d: "Gute Balance aus Herausforderung und Akklimatisierung." },
            { q: "Beste für erfahrene Bergsteiger?", r: "Umbwe-Route", d: "Steil, direkt und körperlich anspruchsvoll." },
            { q: "Welche hat die höchste Erfolgsquote?", r: "8 Tage Lemosho", d: "Optimale Akklimatisierung durch längere Aufstiegszeit." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[3rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">{item.q}</h4>
              <p className="font-headline text-xl font-bold mb-4 text-secondary">{item.r}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Route Deep Dives */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl space-y-32">
          {/* Machame */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-white uppercase tracking-widest">Whiskey Route</Badge>
              <h3 className="font-headline text-3xl md:text-5xl font-bold">Machame-Route</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Die Machame-Route gehört zu den beliebtesten Wegen. Dank ihres sanften Anstiegs und der guten Akklimatisierungschancen hat sie eine hohe Erfolgsquote. Sie schlängelt sich allmählich um den Berg herum und bietet atemberaubende Ausblicke.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase">Vorteil</p>
                  <p className="text-sm font-bold">Günstiger & landschaftlich reizvoll</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase">Nachteil</p>
                  <p className="text-sm font-bold">Stark frequentiert</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?q=80&w=800" alt="Machame Route" fill className="object-cover" />
            </div>
          </div>

          {/* Marangu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="space-y-6 lg:order-2">
              <Badge className="bg-primary text-white uppercase tracking-widest">Coca-Cola Route</Badge>
              <h3 className="font-headline text-3xl md:text-5xl font-bold">Marangu-Route</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Die einzige Route mit Hüttenunterkünften anstelle von Zelten. Sie ist kürzer als andere Routen, was sie auf den ersten Blick leichter erscheinen lässt, tatsächlich aber dem Körper weniger Zeit zur Akklimatisierung gibt.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase">Vorteil</p>
                  <p className="text-sm font-bold">Hüttenunterkunft & Budgetfreundlich</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase">Nachteil</p>
                  <p className="text-sm font-bold">Geringere Erfolgsquote</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl lg:order-1">
              <Image src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800" alt="Marangu Route" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Best Time & Preparation */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <h3 className="font-headline text-3xl md:text-5xl font-bold mb-6">Beste Reisezeit</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Die beste Zeit, um den Kilimandscharo zu besteigen, ist während der beiden Trockenzeiten: Januar bis Mitte März sowie Juni bis Oktober.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { t: "Juni bis Oktober", d: "Besonders beliebt, stabiles Wetter, klare Sicht." },
                { t: "Januar bis März", d: "Ruhiger, optimales Wetter und kristallklare Panoramen." },
                { t: "Regenzeiten meiden", d: "April-Mai und November sind rutschig und matschig." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <Sun className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-secondary">{item.t}</p>
                    <p className="text-sm text-muted-foreground font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10 space-y-8">
              <h3 className="font-headline text-3xl md:text-5xl font-bold">Vorbereitung</h3>
              <p className="text-white/60 font-light leading-relaxed italic">
                "Das Besteigen des Kilimandscharo ist ein unvergessliches Abenteuer, erfordert jedoch eine gute körperliche und mentale Vorbereitung."
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm leading-relaxed">Täglich 6–7 Stunden wandern können — oft in großer Höhe.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm leading-relaxed">Regelmäßige lange Wanderungen (1-2x pro Woche) Monate vorab.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm leading-relaxed">Schrittweise Steigerung von Dauer und Schwierigkeit.</p>
                </li>
              </ul>
              <Button className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-base shadow-xl">
                Beratung anfordern <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Gäste Stimmen</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold">Hören Sie von denen, <br /><span className="text-primary italic">die dort waren</span></h2>
          </div>
          
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {[
                { name: "Sophia M.", q: "Perfect for beginners! Everything went smoothly and I loved the cozy huts. Great guides and service throughout." },
                { name: "Jonas L.", q: "The Lemosho Route completely exceeded my expectations. It was quiet, scenic, and beautifully organized. The guides were incredibly knowledgeable." },
                { name: "Katrin S.", q: "Fantastic team! The Machame route was a real challenge but worth every step. Loved the changing landscapes." },
                { name: "Felix W.", q: "Worth every euro. Superb value, reliable service, and unforgettable adventure. Would book again immediately." }
              ].map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2">
                  <div className="p-10 bg-muted/20 rounded-[3rem] h-full flex flex-col justify-between border border-border/50">
                    <div className="space-y-6">
                      <div className="flex gap-1 text-primary">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-lg md:text-xl font-light italic leading-relaxed text-secondary/80">"{t.q}"</p>
                    </div>
                    <div className="pt-8 border-t border-muted mt-8">
                      <p className="font-bold text-sm uppercase tracking-widest text-secondary">{t.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Kilimandscharo <span className="text-primary italic">FAQ</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes zur Besteigung</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Wie hoch ist der Kilimandscharo?", a: "Der Kilimandscharo ist mit 5.895 Metern der höchste Berg Afrikas und der höchste freistehende Berg der Welt." },
            { q: "Brauche ich spezielle Ausrüstung?", a: "Ja, für das Trekking benötigen Sie professionelle Wanderschuhe, Schlafsack, Thermokleidung und Regenbekleidung. Wir stellen eine detaillierte Packliste bereit." },
            { q: "Wie viel kostet eine Kilimandscharo Besteigung?", a: "Die Kosten variieren je nach Route und Gruppengröße, liegen aber in der Regel zwischen 2.500 € und 4.500 € inkl. Transfers und Guides." },
            { q: "Gibt es Altersbeschränkungen?", a: "Offiziell ab 10 Jahren. Wir empfehlen eine Besteigung ab 12-14 Jahren je nach Fitness und Erfahrung." },
            { q: "Wie ist die Verpflegung organisiert?", a: "Wir bieten Vollpension inkl. heißer Mahlzeiten, die von unseren Begleitköchen täglich frisch zubereitet werden." },
            { q: "Wie sicher ist eine Kilimandscharo Besteigung?", a: "Sicherheit steht an erster Stelle. Unsere Guides führen tägliche Gesundheitschecks durch und sind in Höhenrettung geschult." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-2xl px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline hover:text-primary text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base font-light leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
