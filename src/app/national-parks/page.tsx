"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Map, 
  Camera, 
  Sun, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Leaf,
  Info,
  Waves,
  Mountain,
  Heart,
  ShieldCheck,
  Star,
  Coffee,
  Ticket,
  Palmtree,
  TreePine,
  Bird,
  CloudSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const parksData = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    fullName: 'Serengeti Nationalpark: UNESCO-Weltnaturerbe & Große Migration',
    tagline: 'Der Serengeti-Nationalpark (ca. 14.763 km²) ist weltberühmt für seine endlosen Graslandschaften und die legendäre Große Tierwanderung.',
    desc: 'Jährlich ziehen hier über eine Million Gnus, Zebras und Gazellen durch die Savanne – eines der beeindruckendsten Naturschauspiele der Welt – dicht gefolgt von Löwen, Geparden und Hyänen.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
    facts: [
      { t: "Tiermigration", v: "Über 1 Mio. Gnus, Zebras und Gazellen wandern jährlich mit den Regenzeiten durch die Serengeti." },
      { t: "Reiche Raubtierwelt", v: "Rund 3.000 Löwen leben hier – zudem viele Leoparden, Geparden und Schakale." },
      { t: "UNESCO-Welterbe", v: "Seit 1981 als Weltnaturerbe ausgezeichnet wegen ihrer enormen Biodiversität." }
    ],
    highlights: ['Great Migration', 'Serengeti Balloon Safari', 'Big Five Spotting']
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro',
    fullName: 'Ngorongoro-Krater: Größte intakte Vulkankaldera der Erde',
    tagline: 'Der Ngorongoro-Krater ist mit etwa 19 km Durchmesser die größte intakte Vulkankaldera der Erde.',
    desc: 'Auf dem Kraterboden (ca. 260 km²) leben unzählige Wildtiere dicht gedrängt – von Gnus und Zebras bis zu einer ungewöhnlich hohen Anzahl an Löwen und sogar einigen seltenen Spitzmaulnashörnern.',
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200',
    facts: [
      { t: "Riesige Caldera", v: "Ngorongoro ist die größte unversehrte Vulkankrater-Landschaft der Welt (Ø ~19 km)." },
      { t: "Hohe Wildtierdichte", v: "Konzentration nahezu aller ostafrikanischen Großsäuger auf kleinem Raum." },
      { t: "UNESCO Status", v: "Seit 1979 UNESCO-Welterbe (Natur- und seit 2010 auch Kulturerbe)." }
    ],
    highlights: ['Kraterboden-Safari', 'Vogelbeobachtung', 'Spitzmaulnashorn Sichtungen']
  },
  {
    id: 'tarangire',
    name: 'Tarangire',
    fullName: 'Tarangire-Nationalpark: Elefantenparadies mit Baobab-Landschaft',
    tagline: 'Bekannt für seine riesigen Elefantenherden und malerischen Baobab-Bäume.',
    desc: 'In der Trockenzeit (Juni–Oktober) versammeln sich hier bis zu 2.000 Elefanten entlang des Tarangire-Flusses, der selbst in Dürreperioden Wasser führt.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200',
    facts: [
      { t: "Elefantenparadies", v: "Bis zu 2.000 Tiere werden gleichzeitig am Fluss gezählt." },
      { t: "Baobab-Landschaft", v: "Zahlreiche uralte Riesen-Baobabs (Affenbrotbäume) prägen den Horizont." },
      { t: "Vielfältige Tierwelt", v: "Büffel, Giraffen und Leoparden tummeln sich an den Wasserstellen." }
    ],
    highlights: ['Elefanten-Migration', 'Baobab Safari', 'Bird Watching']
  },
  {
    id: 'manyara',
    name: 'Lake Manyara',
    fullName: 'Lake-Manyara-Nationalpark: Baumkletternde Löwen & Vogelparadies',
    tagline: 'Ein üppig grünes Juwel am Fuß des Ostafrikanischen Grabenbruchs.',
    desc: 'Berühmt für seine baumkletternden Löwen und tausende Flamingos, die je nach Saison den alkalischen Manyara-See rosa färben.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200',
    facts: [
      { t: "Grundwasserwald", v: "Ständig sprudelnde Quellen nähren einen dichten Urwald am Rand des Sees." },
      { t: "Löwen im Geäst", v: "Einzigartiges Verhalten der Löwen, die sich in Akazien zurückziehen." },
      { t: "Vogelparadies", v: "Über 400 Vogelarten, darunter Pelikane und Störche." }
    ],
    highlights: ['Baumlöwen beobachten', 'Flamingo-Schwärme', 'Nacht-Safari']
  },
  {
    id: 'kilimanjaro',
    name: 'Kilimanjaro',
    fullName: 'Kilimandscharo-Nationalpark: Dach Afrikas mit Schneefeldern',
    tagline: 'Der höchste Berg Afrikas (5.895 m) und der höchste freistehende Berg der Welt.',
    desc: 'Vom dichten tropischen Regenwald am Fuß bis zur kargen alpinen Wüste nahe dem schneebedeckten Kibo-Gipfel.',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200',
    facts: [
      { t: "Uhuru Peak", v: "5.895 m Gipfel – ein begehrtes Ziel für Wanderer weltweit." },
      { t: "Schnee am Äquator", v: "Einziger Ort Afrikas, der ganzjährig Schnee und Eis trägt." },
      { t: "Ökozonen", v: "Man durchläuft alle Klima- und Vegetationsstufen der Tropen." }
    ],
    highlights: ['Gipfelbesteigung', 'Regenwald Trekking', 'Gletscher Ausblick']
  },
  {
    id: 'arusha',
    name: 'Mount Meru',
    fullName: 'Mount Meru (Arusha-Nationalpark): Zweithöchster Berg Tansanias',
    tagline: 'Ein erloschener Vulkan (4.566 m) nur etwa 70 km vom Kilimandscharo entfernt.',
    desc: 'Ideal als Akklimatisierungstour oder eigenständiges Abenteuer mit Blick in das Innere des Vulkan-Kraters.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200',
    facts: [
      { t: "Akklimatisierung", v: "Oft als Vorbereitungstour für den Kilimandscharo genutzt." },
      { t: "Colobusaffen", v: "Heimat seltener Bergwaldbewohner und Waldantilopen." },
      { t: "Zentrumsnah", v: "Direkt bei Arusha gelegen und somit leicht erreichbar." }
    ],
    highlights: ['Mount Meru Trek', 'Arusha National Park Tour', 'Wildlife Spaziergänge']
  },
  {
    id: 'saadani',
    name: 'Saadani',
    fullName: 'Saadani-Nationalpark: Safari am Strand - Einzigartige Kombination',
    tagline: 'Der einzige Küsten-Nationalpark Tansanias – hier trifft Wildnis auf das Meer.',
    desc: 'Löwen, Giraffen und Elefanten streifen nur wenige hundert Meter hinter dem Indischen Ozean durch Palmenhaine.',
    img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200',
    facts: [
      { t: "Safari am Meer", v: "Einsame Strände grenzen direkt an wildes Buschland." },
      { t: "Kleine Serengeti", v: "Beeindruckende Raubtier- und Huftierdichte an der Küste." },
      { t: "Wasser-Paradies", v: "Lebensraum für Krokodile, Flusspferde und Meeresschildkröten." }
    ],
    highlights: ['Strand Safari', 'Boots-Safari am Fluss', 'Schildkröten Schutz']
  }
];

export default function NationalParksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* 01 Centered Hero Narrative */}
      <header className="pt-32 pb-12 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-7xl font-normal text-secondary tracking-tighter"
          >
            Die Nationalparks in Tansania
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-xl font-normal uppercase tracking-widest opacity-60"
          >
            Entdecken Sie die atemberaubende Vielfalt Afrikas
          </motion.p>
        </div>
      </header>

      {/* 02 Full Width Visual with Overlapping Button */}
      <section className="relative mb-24 md:mb-32">
        <div className="w-full relative aspect-[21/9] md:h-[600px] overflow-hidden shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920"
            alt="Elephants Savannah"
            fill
            priority
            className="object-cover"
            data-ai-hint="elephants savannah"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        
        {/* Overlapping Button sits half on image, half on content below */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <Link href="/trip-planner">
            <Button size="xl" className="rounded-xl px-12 h-14 md:h-16 bg-[#2b5a91] text-white hover:bg-secondary font-bold text-[10px] md:text-xs tracking-[0.2em] border-none shadow-2xl transition-all">
              Jetzt Safari planen
            </Button>
          </Link>
        </div>
      </section>

      {/* 03 Main Sequential Content Body */}
      <section className="container mx-auto px-4 max-w-7xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Sticky Anchor Registry */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 hidden lg:block">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold text-[10px] mb-2 block">Park-Register</span>
                <h2 className="font-headline text-3xl font-normal text-secondary">Destinationen</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {parksData.map((park) => (
                  <Link
                    key={park.id}
                    href={`#${park.id}`}
                    className="text-left p-5 rounded-2xl border border-border/40 bg-white/50 hover:border-primary/20 text-secondary/60 hover:text-secondary hover:bg-white transition-all duration-500 flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="text-[8px] font-bold uppercase tracking-widest mb-1 text-muted-foreground">Nationalpark</span>
                      <span className="font-headline text-xl font-bold tracking-tight">{park.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-10 overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Compass className="w-20 h-20 rotate-12" /></div>
              <div className="relative z-10 space-y-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[8px] font-bold">
                  <Sparkles className="w-3" /> KI Beratung
                </div>
                <h4 className="font-headline text-2xl font-bold text-white leading-tight">Fragen Sie unseren Berater</h4>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed">
                  Unser KI-Berater hilft Ihnen, den perfekten Park basierend auf Ihren Interessen zu finden.
                </p>
                <Link href="/trip-advisor" className="block">
                  <Button className="w-full h-12 bg-white text-secondary hover:bg-primary hover:text-white border-none text-[9px] font-black uppercase tracking-widest rounded-xl transition-all">
                    Berater starten
                  </Button>
                </Link>
              </div>
            </Card>
          </aside>

          {/* Sequential Main Content */}
          <main className="lg:col-span-8 space-y-24 md:space-y-40">
            
            {/* Introductory Narrative */}
            <div className="space-y-8">
              <div className="bg-[#fdf7f2] p-8 md:p-12 rounded-[2.5rem] border border-[#f0ebe0] shadow-sm">
                <p className="text-secondary font-bold text-sm md:text-xl leading-relaxed uppercase tracking-tight">
                  Tansania ist ein echtes Safari-Paradies – rund ein Drittel der Landesfläche steht unter Naturschutz. Die Parks sichern die Artenvielfalt und machen das Land zu einem erstklassigen Ziel für Naturliebhaber.
                </p>
              </div>
            </div>

            {/* Visual Pillars Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { t: "Serengeti", s: "Endlose Savannen", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" },
                { t: "Ngorongoro", s: "Afrikas Garten Eden", img: "https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=600" },
                { t: "Kilimanjaro", s: "Dach Afrikas", img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600" }
              ].map((item, idx) => (
                <div key={idx} className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm group border border-border/40">
                  <Image src={item.img} alt={item.t} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-headline text-lg leading-none">{item.t}</p>
                    <p className="text-primary font-bold text-[8px] uppercase tracking-widest mt-1">{item.s}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Individual Park Registries */}
            {parksData.map((park) => (
              <section key={park.id} id={park.id} className="space-y-12 scroll-mt-32">
                <div className="space-y-6">
                  <div className="space-y-2 text-left">
                    <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1 font-bold text-[9px]">
                      Nationalpark Registry
                    </Badge>
                    <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tighter">
                      {park.fullName}
                    </h2>
                  </div>
                  <p className="text-secondary font-bold text-sm md:text-lg leading-relaxed border-l-4 border-primary/20 pl-8 py-2 text-left">
                    {park.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base font-normal opacity-80 text-left">
                    {park.desc}
                  </p>
                </div>

                <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40">
                  <Image src={park.img} alt={park.name} fill className="object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {park.facts.map((fact, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-border/50 shadow-sm space-y-2 group hover:border-primary/20 transition-all text-left">
                      <p className="text-[8px] font-black uppercase text-primary tracking-widest">{fact.t}</p>
                      <p className="font-bold text-[10px] text-muted-foreground leading-relaxed">{fact.v}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <h3 className="font-headline text-xl md:text-3xl font-normal text-secondary tracking-tight text-left">Erlebnisse & Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {park.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-border/50 shadow-sm group hover:border-primary/30 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white" />
                        </div>
                        <span className="font-bold text-xs text-secondary uppercase tracking-tight">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {/* Wildlife Overview */}
            <section className="space-y-12">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-left">Tierwelt in Tansania: Big Five & mehr</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { t: "Big Five", v: "Löwe, Elefant, Nashorn, Büffel und Leopard in fast allen großen Nationalparks." },
                  { t: "Große Migration", v: "Über 2 Millionen Gnus, Zebras und Gazellen wandern jährlich durch die Serengeti." },
                  { t: "Vogelvielfalt", v: "Mehr als 400 Vogelarten im Lake Manyara, darunter Tausende Flamingos." },
                  { t: "Seltene Arten", v: "Spitzmaulnashorn, Afrikanischer Wildhund, Baumlöwen (Manyara)." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-muted/10 rounded-3xl space-y-3 text-left">
                    <h4 className="font-headline text-xl font-bold text-primary">{item.t}</h4>
                    <p className="text-xs font-bold text-muted-foreground uppercase leading-relaxed tracking-widest">{item.v}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Global Activities */}
            <section className="space-y-12">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-left">Top-Aktivitäten in Tansania</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Camera, t: "Pirschfahrten" },
                  { icon: Sun, t: "Heißluftballon" },
                  { icon: Mountain, t: "Bergtouren" },
                  { icon: Waves, t: "Boots-Touren" },
                  { icon: Heart, t: "Kultur" },
                  { icon: Palmtree, t: "Strand" }
                ].map((act, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-border shadow-sm text-center space-y-3 group hover:bg-secondary transition-all duration-500">
                    <act.icon className="w-6 h-6 text-primary mx-auto group-hover:text-white" />
                    <p className="text-[9px] font-black uppercase text-secondary tracking-widest group-hover:text-white">{act.t}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Support Trigger */}
            <section className="pt-12 border-t border-border/50">
              <div className="bg-secondary text-white rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10"><Compass className="w-48 h-48 rotate-12" /></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="font-headline text-3xl md:text-6xl font-normal text-white leading-tight">Bereit für Ihre <br /><span className="text-primary font-bold">Traum-Safari?</span></h3>
                  <p className="text-white/60 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] max-w-xl mx-auto">
                    Wir planen Ihre Safari nach Maß – von der ersten Idee bis zum letzten Sonnenuntergang am Nil.
                  </p>
                  <Link href="/contact" className="inline-block">
                    <Button size="xl" className="rounded-xl px-12 h-14 md:h-16 bg-primary text-white font-black text-[10px] shadow-2xl border-none">
                      Persönliche Beratung erhalten <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </main>

        </div>
      </section>
    </div>
  );
}
