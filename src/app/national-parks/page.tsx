
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
  CloudSun,
  Plus
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ContactSection } from '@/components/shared/ContactSection';

const pillarData = [
  { 
    id: 'serengeti',
    title: "Serengeti", 
    sub: "Endlose Savannen", 
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800" 
  },
  { 
    id: 'ngorongoro',
    title: "Ngorongoro", 
    sub: "Afrikas Garten Eden", 
    img: "https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800" 
  },
  { 
    id: 'kilimanjaro',
    title: "Kilimanjaro", 
    sub: "Dach Afrikas", 
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800" 
  }
];

const parksData = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    fullName: 'Serengeti-Nationalpark: UNESCO-Weltnaturerbe & Große Migration',
    tagline: 'Der Serengeti-Nationalpark (ca. 14.763 km²) ist weltberühmt für seine endlosen Graslandschaften und die legendäre Große Tierwanderung.',
    desc: 'Jährlich ziehen hier über eine Million Gnus, Zebras und Gazellen durch die Savanne – eines der beeindruckendsten Naturschauspiele der Welt – dicht gefolgt von Löwen, Geparden und Hyänen. Die Serengeti beherbergt dadurch eine der artenreichsten Raubtier- und Huftiergemeinschaften Afrikas. Dank dieser einzigartigen Tierkonzentration steht der Park seit 1981 unter UNESCO-Welterbe-Schutz.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
    facts: [
      { t: "Tiermigration", v: "Über 1 Mio. Gnus, Zebras und Gazellen wandern jährlich mit den Regenzeiten durch die Serengeti. Dieses Schauspiel der Massenwanderung ist weltweit einmalig." },
      { t: "Reiche Raubtierwelt", v: "Rund 3.000 Löwen leben hier – zudem viele Leoparden, Geparden und Schakale sowie große Clans von Hyänen. Nirgendwo sonst finden sich so viele große Raubtiere auf einem Fleck." },
      { t: "UNESCO-Welterbe", v: "Die Serengeti wurde 1981 wegen ihrer enormen Biodiversität und des intakten Ökosystems als Weltnaturerbe ausgezeichnet." }
    ],
    ctaLabel: 'Serengeti Balloon Safari erleben'
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro',
    fullName: 'Ngorongoro-Krater: Größte intakte Vulkankaldera der Erde',
    tagline: 'Der Ngorongoro-Krater ist mit etwa 19 km Durchmesser die größte intakte Vulkankaldera der Erde.',
    desc: 'Auf dem Kraterboden (ca. 260 km²) leben unzählige Wildtiere dicht gedrängt – von Gnus und Zebras bis zu einer ungewöhnlich hohen Anzahl an Löwen und sogar einigen seltenen Spitzmaulnashörnern. Dieses „ursprüngliche Eden" wirkt wie ein natürlicher Zoo.',
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200',
    facts: [
      { t: "Riesige Caldera", v: "Ngorongoro ist die größte unversehrte Vulkankrater-Landschaft der Welt (Ø ~19 km). Die Sicht vom Kraterrand hinab auf die Ebene ist spektakulär." },
      { t: "Hohe Wildtierdichte", v: "Im Kraterinneren konzentrieren sich nahezu alle ostafrikanischen Großsäuger auf kleinem Raum – eine einzigartige Dichte." },
      { t: "Teil der Wanderung", v: "Alljährlich ziehen ca. 2 Mio. Gnus und Zebras durch die Ngorongoro Conservation Area." }
    ],
    ctaLabel: 'Vogelbeobachtung im Ngorongoro'
  },
  {
    id: 'tarangire',
    name: 'Tarangire',
    fullName: 'Tarangire-Nationalpark: Elefantenparadies mit Baobab-Landschaft',
    tagline: 'Der Tarangire-Nationalpark liegt südlich des Manyara-Sees und ist bekannt für seine riesigen Elefantenherden.',
    desc: 'In der Trockenzeit (Juni–Oktober) versammeln sich hier bis zu 2.000 Elefanten entlang des Tarangire-Flusses. Die Landschaft aus goldgelben Ebenen und uralten Affenbrotbäumen macht jede Safari im Tarangire zu einem besonderen Erlebnis.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200',
    facts: [
      { t: "Elefantenparadies", v: "Eine der größten Elefantenpopulationen Tansanias lebt hier – in der Trockenzeit werden bis zu ~2.000 Tiere gleichzeitig am Fluss gezählt." },
      { t: "Baobab-Landschaft", v: "Zahlreiche uralte Riesen-Baobabs prägen den Horizont – sie bieten spektakuläre Fotomotive und Schatten." },
      { t: "Vielfältige Tierwelt", v: "Auch Büffel, Giraffen und Raubkatzen sind anzutreffen. Besonders in der Trockenzeit an den Wasserstellen." }
    ],
    ctaLabel: 'Baobab Safari in Tarangire'
  },
  {
    id: 'manyara',
    name: 'Lake Manyara',
    fullName: 'Lake-Manyara-Nationalpark: Baumkletternde Löwen & Vogelparadies',
    tagline: 'Ein üppig grünes Juwel am Fuß des Ostafrikanischen Grabenbruchs.',
    desc: 'Berühmt ist Manyara für seine baumkletternden Löwen, die sich tagsüber gern in die Äste der Akazien zurückziehen. Der Park umfasst auch den flachen Manyara-See.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200',
    facts: [
      { t: "Grundwasserwald", v: "Ständig sprudelnde Quellen nähren einen dichten Urwald am Rand des Sees. Biosphärenreservat der UNESCO." },
      { t: "Löwen im Geäst", v: "In Manyara kann man mit etwas Glück Löwen in Bäumen dösen sehen – ein ungewöhnliches Verhalten." },
      { t: "Vogelparadies", v: "Über 400 Vogelarten wurden gezählt. Besonders eindrucksvoll sind Tausende Flamingos und Pelikane." }
    ],
    ctaLabel: 'Baumlöwen in Manyara erleben'
  },
  {
    id: 'kilimanjaro',
    name: 'Kilimandscharo',
    fullName: 'Kilimandscharo-Nationalpark: Dach Afrikas mit Schneefeldern',
    tagline: 'Der Kilimandscharo ist mit 5.895 m der höchste Berg Afrikas und der höchste freistehende Berg der Welt.',
    desc: 'Sein schneebedeckter Kibo-Gipfel thront majestätisch über der Savanne Nordtansanias. Vom dichten Regenwald bis zur kargen alpinen Wüste durchläuft man alle Klimastufen.',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200',
    facts: [
      { t: "5895 m Gipfel", v: "Der Kilimandscharo (Kibo) ist ein begehrtes Trekking-Ziel. Mehrere Routen führen zum Uhuru Peak." },
      { t: "Schnee am Äquator", v: "Einziger Ort Afrikas, der ganzjährig Schnee und Eis trägt – ein faszinierendes Phänomen." },
      { t: "Ökozonen", v: "Vom Regenwald bis zum ewigen Eis – ein kompletter Querschnitt durch die Vegetationszonen der Erde." }
    ],
    ctaLabel: 'Kilimandscharo Gipfel besteigen'
  },
  {
    id: 'arusha',
    name: 'Mount Meru',
    fullName: 'Mount Meru (Arusha-Nationalpark): Zweithöchster Berg Tansanias',
    tagline: 'Der Mount Meru (4.566 m) ist Tansanias zweithöchster Berg und ein erloschener Vulkan.',
    desc: 'Er erhebt sich im Arusha-Nationalpark. Ideal als Akklimatisierungstour oder eigenständiges Abenteuer mit Blick auf den Kilimandscharo.',
    img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200',
    facts: [
      { t: "4566 m Vulkan", v: "Der Aufstieg auf den Meru (meist 3–4 Tage) ist anspruchsvoll, aber lohnend. Blick ins Innere des Vulkans." },
      { t: "Vielfältige Tierwelt", v: "Heimat seltener Bergwaldbewohner wie Colobusaffen. Auf den offenen Grasflächen sieht man oft Giraffen." },
      { t: "Zentrumsnah", v: "Direkt bei Arusha gelegen und somit leicht erreichbar – ideal für einen Tagesausflug." }
    ],
    ctaLabel: 'Arusha National Park entdecken'
  },
  {
    id: 'saadani',
    name: 'Saadani',
    fullName: 'Saadani-Nationalpark: Safari am Strand - Einzigartige Kombination',
    tagline: 'Der Saadani-Nationalpark ist eine echte Safari-Kuriosität: Hier trifft Wildnis auf das Meer.',
    desc: 'Als einziger Küsten-Nationalpark Tansanias umfasst Saadani etwa 1.100 km² Savanne, Küstenwald und einen unberührten Strand am Indischen Ozean.',
    img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200',
    facts: [
      { t: "Safari am Strand", v: "Endlose einsame Strände mit palmengesäumten Buchten grenzen direkt an wildes Buschland." },
      { t: "Kleine Serengeti", v: "Die Tierwelt Saadanis steht den bekannten Parks kaum nach: Löwen und Büffel durchstreifen die Dünen." },
      { t: "Wasser-Paradies", v: "Flusspferde und sogar Meeresschildkröten, die an Saadanis Stränden ihre Eier ablegen." }
    ],
    ctaLabel: 'Safari & Strand in Saadani'
  }
];

const sidebarRegistry = [
  { id: 'intro', name: 'Nationalpark-Highlights' },
  { id: 'serengeti', name: 'Serengeti Np' },
  { id: 'ngorongoro', name: 'Ngorongoro Krater' },
  { id: 'tarangire', name: 'Tarangire Np' },
  { id: 'manyara', name: 'Lake Manyara' },
  { id: 'kilimanjaro', name: 'Kilimandscharo Np' },
  { id: 'arusha', name: 'Mount Meru' },
  { id: 'saadani', name: 'Saadani Np' },
  { id: 'wildlife', name: 'Tierwelt & Big Five' },
  { id: 'activities', name: 'Top-Aktivitäten' },
  { id: 'budget', name: 'Kosten & Budget' },
  { id: 'rules', name: 'Verhaltensregeln' }
];

export default function NationalParksPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white min-h-screen font-normal">
      {/* 01 Simple Hero Narrative */}
      <header className="pt-32 pb-12 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-7xl font-normal text-secondary tracking-tight"
          >
            Die Nationalparks in Tansania
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-xl font-normal tracking-widest opacity-60"
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
            alt="Elefanten in der Savanne"
            fill
            priority
            className="object-cover"
            data-ai-hint="elephants savannah"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <Link href="/trip-planner">
            <Button size="xl" className="rounded-xl px-12 h-14 md:h-16 bg-[#2b5a91] text-white hover:bg-secondary font-bold text-[10px] md:text-xs tracking-widest border-none shadow-2xl transition-all">
              Jetzt Safari planen
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-7xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* 03 Sticky Registry Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 hidden lg:block">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-primary font-bold text-[10px] block tracking-widest">Park-Register</span>
                <h2 className="font-headline text-3xl font-normal text-secondary">Destinationen</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {sidebarRegistry.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-left p-5 rounded-2xl border border-border/40 bg-white/50 hover:border-primary/20 text-secondary/60 hover:text-secondary hover:bg-white transition-all duration-500 flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="text-[8px] font-bold tracking-widest mb-1 text-muted-foreground">Registry Log</span>
                      <span className="font-headline text-xl font-bold tracking-tight">{item.name}</span>
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
                  <Sparkles className="w-3" /> Ki Beratung
                </div>
                <h4 className="font-headline text-2xl font-bold text-white leading-tight">Fragen Sie unseren Berater</h4>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed">
                  Unser Ki-Berater hilft Ihnen, den perfekten Park basierend auf Ihren Interessen zu finden.
                </p>
                <Link href="/trip-advisor" className="block">
                  <Button className="w-full h-12 bg-white text-secondary hover:bg-primary hover:text-white border-none text-[9px] font-black tracking-widest rounded-xl transition-all">
                    Berater starten
                  </Button>
                </Link>
              </div>
            </Card>
          </aside>

          {/* 04 Sequential Content Body */}
          <main className="lg:col-span-8 space-y-16 md:space-y-20">
            
            <section id="intro" className="space-y-12 scroll-mt-32">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">
                  Tansanias Nationalparks – Safari-Abenteuer im Tierparadies
                </h2>
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest">
                  Tansanias Nationalpark-Highlights
                </span>
              </div>

              <div className="space-y-8">
                <div className="hidden md:grid grid-cols-3 gap-4">
                  {pillarData.map((item, idx) => (
                    <Link key={idx} href={`#${item.id}`}>
                      <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group border border-border/40 bg-muted cursor-pointer">
                        <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-white border-none text-[7px] font-bold px-2 py-0.5 shadow-lg">Nationalpark Registry</Badge>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white font-headline text-2xl leading-none mb-1">{item.title}</h3>
                          <p className="text-primary font-bold text-[9px] tracking-widest">{item.sub}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="md:hidden -mx-4">
                  <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent className="-ml-4">
                      {pillarData.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-[85%]">
                          <Link href={`#${item.id}`}>
                            <div className="relative h-[350px] rounded-[2rem] overflow-hidden shadow-xl border border-border/50 bg-muted">
                              <Image src={item.img} alt={item.title} fill className="object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-white border-none text-[7px] font-bold px-2 py-0.5 shadow-lg">Nationalpark Registry</Badge>
                              </div>
                              <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-white font-headline text-xl leading-none mb-1">{item.title}</h3>
                                <p className="text-primary font-bold text-[8px]">{item.sub}</p>
                              </div>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>

              <div className="py-2">
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80 text-justify">
                  Tansania ist ein echtes Safari-Paradies – rund ein Drittel der Landesfläche steht unter Naturschutz und bietet unvergessliche Wildtier-Erlebnisse. Die bekanntesten Schutzgebiete – von der endlosen Serengeti bis zum dramatischen Ngorongoro-Krater – sind Teil eines umfassenden Nationalparksystems. In diesen Parks herrscht striktes Schutzregime: Bauen, Jagen und Landwirtschaft sind verboten. Alle menschlichen Aktivitäten dienen einzig dem Tourismus, z. B. Pirschfahrten mit dem Geländewagen. Dieser Schutz sichert die Artenvielfalt (Big Five, Flamingos, etc.) und macht Tansania zu einem erstklassigen Ziel für Naturliebhaber und Fotografen.
                </p>
              </div>
            </section>

            {parksData.map((park) => (
              <section key={park.id} id={park.id} className="space-y-8 scroll-mt-32">
                <div className="space-y-6">
                  <div className="space-y-2 text-left">
                    <Badge variant="outline" className="border-primary/20 text-primary px-4 py-1 font-bold text-[9px]">
                      Nationalpark Registry
                    </Badge>
                    <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                      {park.fullName}
                    </h2>
                  </div>
                  <p className="text-secondary font-bold text-sm md:text-lg leading-relaxed border-l-4 border-primary/20 pl-8 py-2 text-left">
                    {park.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-[14px] leading-[20px] font-normal opacity-80 text-left">
                    {park.desc}
                  </p>
                </div>

                <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40">
                  <Image src={park.img} alt={park.name} fill className="object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {park.facts.map((fact, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-border/50 shadow-sm space-y-2 group hover:border-primary/20 transition-all text-left">
                      <p className="text-[8px] font-bold text-primary tracking-widest">{fact.t}</p>
                      <p className="font-bold text-[10px] text-muted-foreground leading-relaxed">{fact.v}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-left">
                  <Link href="/contact">
                    <Button className="rounded-xl px-8 h-12 font-bold text-[10px] md:text-xs tracking-widest shadow-xl border-none">
                      {park.ctaLabel} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </section>
            ))}

            <section id="wildlife" className="space-y-12 pt-8 scroll-mt-32">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-left">Tierwelt in Tansania: Big Five & mehr</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { t: "Big Five", v: "Löwe, Elefant, Nashorn, Büffel und Leopard in fast allen großen Nationalparks." },
                  { t: "Große Migration", v: "Über 2 Millionen Gnus, Zebras und Gazellen wandern jährlich durch die Serengeti." },
                  { t: "Vogelvielfalt", v: "Mehr als 400 Vogelarten im Lake Manyara, darunter Tausende Flamingos." },
                  { t: "Seltene Arten", v: "Spitzmaulnashorn, Afrikanischer Wildhund, Baumlöwen (Manyara)." },
                  { t: "Marine Wildlife", v: "In Küstenparks wie Saadani: Meeresschildkröten, Delfine und Walhaie." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-muted/10 rounded-3xl space-y-3 text-left">
                    <h4 className="font-headline text-xl font-bold text-primary">{item.t}</h4>
                    <p className="text-xs font-bold text-muted-foreground leading-relaxed tracking-widest">{item.v}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="activities" className="space-y-12 pt-8 scroll-mt-32">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-left">Top-Aktivitäten in Tansania</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Camera, t: "Safari-Pirschfahrten" },
                  { icon: Sun, t: "Heißluftballon-Fahrten" },
                  { icon: Mountain, t: "Wander-Touren" },
                  { icon: Waves, t: "Boots-Touren" },
                  { icon: Heart, t: "Kulturelle Erlebnisse" },
                  { icon: Palmtree, t: "Strand & Tauchen" }
                ].map((act, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-border shadow-sm text-center space-y-3 group hover:bg-secondary transition-all duration-500">
                    <act.icon className="w-6 h-6 text-primary mx-auto group-hover:text-white" />
                    <p className="text-[9px] font-bold text-secondary tracking-widest group-hover:text-white">{act.t}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="budget" className="space-y-12 pt-8 scroll-mt-32">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-left">Kosten und Budget: Was kostet eine Safari?</h2>
              <Card className="rounded-[2.5rem] bg-[#fdfcfb] border border-border/50 overflow-hidden">
                <CardContent className="p-8 md:p-12 space-y-8 text-left">
                  <p className="text-muted-foreground text-sm md:text-[14px] leading-[20px]">
                    Die Safari-Preise variieren stark je nach Komfort und Reisestil. Budget-Safaris beginnen bei etwa 150–220 USD pro Tag. Privat organisierte Safaris der Mittelklasse liegen meist bei ca. 340–500 USD pro Tag.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary uppercase">Eintrittspreise Serengeti</p>
                      <p className="text-sm font-bold text-secondary">Erwachsene: ca. 82,60 USD / Tag</p>
                      <p className="text-sm font-bold text-secondary">Kinder (5-15): ca. 23,60 USD / Tag</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                      <p className="text-[10px] font-bold text-primary uppercase mb-2">Experten-Tipp</p>
                      <p className="text-xs font-bold text-secondary leading-relaxed tracking-tight">
                        Eine 7-tägige Rundreise bewegt sich typischerweise im niedrigen vierstelligen Dollarbereich.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="rules" className="space-y-12 pt-8 scroll-mt-32">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary text-left">Safari-Regeln & Verantwortung</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Im Fahrzeug bleiben (außer in Picknickbereichen)",
                  "Mindestens 20-30 Meter Abstand halten",
                  "Lärm vermeiden – kein Hupen oder Rufen",
                  "Sämtlichen Müll wieder mitnehmen",
                  "Immer den Anweisungen der Ranger folgen",
                  "Niemals Wildtiere füttern"
                ].map((rule, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-border/50 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-bold text-xs text-secondary tracking-tight">{rule}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-12 border-t border-border/50">
              <div className="bg-secondary text-white rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10"><Compass className="w-48 h-48 rotate-12" /></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="font-headline text-3xl md:text-6xl font-normal text-white leading-tight">Bereit für Ihre <br /><span className="text-primary font-bold">Traum-Safari?</span></h3>
                  <p className="text-white/60 font-bold text-[10px] md:text-sm tracking-widest max-w-xl mx-auto">
                    Wir planen Ihre Safari nach Maß – von der ersten Idee bis zum letzten Sonnenuntergang am Nil.
                  </p>
                  <Link href="/trip-planner" className="inline-block">
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

      <ContactSection />
    </div>
  );
}
