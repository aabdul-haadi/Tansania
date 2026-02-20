
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Calendar,
  Camera,
  Bird,
  Leaf,
  Coffee,
  Heart,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const packages = [
  {
    id: '15-day-safari-zanzibar',
    tag: 'Meistverkauft',
    cat: 'SAFARI & SANSIBAR',
    title: '15 Tage Safari und Sansibar Komplettpaket',
    duration: '15 Tage Rundreise',
    accommodation: 'Premium Lodges & Hotels',
    groupSize: 'Max. 8 Teilnehmer',
    season: '2026-2027',
    price: '5.399',
    highlights: [
      'Top Nationalparks Safari',
      'Massai Dorfbesuch',
      'Familienfreundliche Unterkünfte',
      'Sansibar Strände & Tauchen',
      'Gewürztour & Stone Town'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: '13-day-safari-zanzibar',
    tag: 'All-Inclusive',
    cat: 'SAFARI & SANSIBAR',
    title: '13 Tage Safari & Sansibar Erlebnis',
    duration: '13 Tage All-Inclusive',
    accommodation: 'Komfort Lodges & Resorts',
    groupSize: 'Max. 10 Teilnehmer',
    season: '2026-2027',
    price: '3.699',
    highlights: [
      'Big Five Pirschfahrten',
      'Massai Dorfbesuch',
      'Ngorongoro UNESCO Krater',
      'Sansibar Strände & Tauchen',
      'Stone Town Stadttour'
    ],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
  },
  {
    id: '11-day-safari-kurz',
    tag: 'Kurztrip',
    cat: 'SAFARI & SANSIBAR',
    title: '11 Tage Safari und Sansibar Kurztrip',
    duration: '11 Tage Komplett-Paket',
    accommodation: 'Lodges & Strandhotels',
    groupSize: 'Max. 8 Teilnehmer',
    season: '2026-2027',
    price: '2.999',
    highlights: [
      'Elefanten im Tarangire',
      'Massai Kultur erleben',
      'Serengeti Tiermigration',
      'Ngorongoro Kraterfahrt',
      'Sansibar Strände & Touren'
    ],
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  {
    id: '13-day-honeymoon',
    tag: 'Romantik',
    cat: 'FLITTERWOCHEN',
    title: '13 Tage Flitterwochen Rundreise Premium',
    duration: '13 Tage Luxus-Paket',
    accommodation: 'Premium Lodges & Villen',
    groupSize: 'Max. 6 Teilnehmer',
    season: '2026-2027',
    price: '3.899',
    highlights: [
      'Champagner bei Sonnenuntergang',
      'Private Pirschfahrten',
      'Luxuslodges & Villen',
      'Sansibar Stranddinner',
      'Heißluftballon Serengeti'
    ],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
  },
  {
    id: '12-day-family',
    tag: 'Familien',
    cat: 'FAMILIENSAFARI',
    title: '12 Tage Familien-Safari Abenteuer',
    duration: '12 Tage All-Inclusive',
    accommodation: 'Familien Lodges & Camps',
    groupSize: 'Max. 8 Teilnehmer',
    season: '2026-2027',
    price: '3.499',
    highlights: [
      'Big Five Pirschfahrten',
      'Massai Dorfbesuch',
      'Schulbesuch in Karatu',
      'Lake Manyara Safari',
      'Kinderfreundliche Lodges'
    ],
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800'
  },
  {
    id: '13-day-kili-safari',
    tag: 'Kombi',
    cat: 'KILIMANDSCHARO SAFARI',
    title: '13 Tage Rundreise Safari Komplett',
    duration: '13 Tage Rundum-Sorglos',
    accommodation: 'Lodges & Strandresorts',
    groupSize: 'Max. 8 Teilnehmer',
    season: '2026-2027',
    price: '4.699',
    highlights: [
      'Safari in Top-Nationalparks',
      'Kilimandscharo hautnah',
      'Big Five & atemberaubende Natur',
      'Sansibar: Strand & Kultur',
      'Perfekt für Abenteuer & Erholung'
    ],
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  }
];

const testimonials = [
  { name: "Johanna K.", quote: "Perfekte Safari! Die Lodges waren luxuriös und das Personal sehr freundlich. Besonders beeindruckend war die Begegnung mit den Löwen in der Serengeti. Wir fühlten uns rundum gut betreut." },
  { name: "Martin L.", quote: "Tansania Reiseabenteuer hat unsere Erwartungen übertroffen. Unsere maßgeschneiderte Safari war perfekt organisiert, mit fantastischen Guides und luxuriösen Lodges. Die Tiere waren beeindruckend." },
  { name: "Sarah und Max B.", quote: "Tansania war magisch! Die Tierwelt und Landschaften sind einzigartig. Die Lodges waren komfortabel und das Essen gut. Einzig längere Fahrtzeiten waren anstrengend, aber das Erlebnis entschädigte dafür." },
  { name: "Michael T.", quote: "Unvergessliche Safari! Die Tiere und Landschaften waren überwältigend. Besonders die Gnu-Migration war ein Highlight. Sehr empfehlenswert für alle, die eine echte Tansania Safari urlaub erleben wollen." },
  { name: "Clara P.", quote: "Tolle Safari! Die Unterkünfte waren luxuriös, aber ein wenig mehr Vielfalt bei den Mahlzeiten hätte es noch besser gemacht. Insgesamt aber eine großartige Erfahrung." },
  { name: "David und Elena R.", quote: "Wunderbare Familien-Safari! Die Guides waren informativ, und die Lodges waren fantastisch. Unsere Kinder liebten es. Wir kommen wieder!" }
];

export default function SafarisPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Hero" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
              Dein Abenteuer im Herzen Afrikas
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Erlebe das ultimative <br />
              <span className="text-primary italic">Safari-Abenteuer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-light leading-relaxed px-4">
              Tansania Safari Buchen – wo wilde Natur, beeindruckende Tierbeobachtungen und atemberaubende Landschaften auf dich warten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Listing */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Expeditions-Katalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Wählen Sie Ihre <br /><span className="text-primary italic">Afrikanische Odyssee</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4">
            Ob auf einer Solo-Safari, Familienreise oder romantischen Flitterwochen – Tansania bietet die perfekte Gelegenheit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl z-0">
                  <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-1.5 items-start">
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                      {pkg.tag}
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                      {pkg.cat}
                    </Badge>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-white leading-tight mb-6 line-clamp-2">{pkg.title}</h3>
                    <div className="space-y-3 mb-8">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-[10px] uppercase font-bold tracking-widest">{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl flex flex-col items-start min-w-[110px]">
                        <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Ab</p>
                        <p className="text-xl md:text-2xl font-bold text-secondary">{pkg.price} €</p>
                      </div>
                      <Link href={`/trip-planner?package=${pkg.id}`}>
                        <Button size="icon" className="w-14 h-14 rounded-2xl bg-primary text-white hover:bg-white hover:text-black hover:border-primary shadow-xl transition-all hover:scale-110">
                          <ArrowRight className="w-6 h-6" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6 px-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b border-muted pb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground truncate">{pkg.accommodation}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    <span>{pkg.groupSize}</span>
                    <span>Reisezeit: {pkg.season}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <ShieldCheck className="w-4 h-4" /> Lokale Expertise
              </div>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">
                Tansania Safari <br /><span className="text-primary italic">Deutschsprachig</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt reibungslos wird.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Große Migration</p>
                    <p className="text-xs text-white/40 font-light mt-1">Spüre das Zittern des Bodens, wenn Millionen Tiere ziehen.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur">
                  <Star className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Bestbewertet</p>
                    <p className="text-xs text-white/40 font-light mt-1">Über 10 Jahre Erfahrung in maßgeschneiderten Safaris.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200" alt="Safari Jeep" fill className="object-cover" data-ai-hint="safari jeep" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 p-8 bg-white text-secondary rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Signature Experience</p>
                <h4 className="text-2xl font-headline font-bold">Das ultimative Abenteuer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Lodges Section */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Wohnen im Paradies</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Luxuriöse <span className="text-primary italic">Safari Unterkünfte</span></h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Übernachten Sie in exklusiven Lodges mit Vollpension, die höchsten Komfort und atemberaubende Ausblicke auf die Wildnis bieten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1200" alt="Luxus Lodge" fill className="object-cover group-hover:scale-105 transition-transform duration-700" data-ai-hint="luxury lodge" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h4 className="text-2xl font-headline font-bold mb-2">5-Sterne Komfort</h4>
              <p className="text-white/70 text-xs uppercase font-bold tracking-widest">Inmitten der Nationalparks</p>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" alt="Safari Camp" fill className="object-cover group-hover:scale-105 transition-transform duration-700" data-ai-hint="safari camp" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h4 className="text-2xl font-headline font-bold mb-2">Authentische Wildnis</h4>
              <p className="text-white/70 text-xs uppercase font-bold tracking-widest">Bush-Feeling ohne Kompromisse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bush & Beach Section */}
      <section className="py-20 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Die perfekte Kombination</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-foreground">Safari & <span className="text-primary italic">Erholung</span></h2>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-lg italic">
                "Erlebe das Beste aus beiden Welten mit einer Tansania Safari und Baden Sansibar. Beginne dein Abenteuer in der Serengeti und ende an den weißen Stränden der Insel."
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                    <Image 
                      src={`https://picsum.photos/seed/zanzibar-${i}/400/400`} 
                      alt="Sansibar Strand" 
                      width={400} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200" alt="Sansibar Strand" fill className="object-cover" data-ai-hint="zanzibar beach" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl rotate-12 hidden lg:flex">
                <p className="font-bold text-sm leading-tight uppercase tracking-widest">Abenteuer & Erholung vereint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Time Grid */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Planungshilfe</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold">Beste <span className="text-primary italic">Reisezeit</span></h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Wähle den perfekten Zeitraum für dein Erlebnis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Große Migration", time: "Juli - Oktober", icon: Leaf, desc: "Millionen Gnus ziehen durch die Serengeti – dramatische Flussüberquerungen." },
            { title: "Tierbeobachtungen", time: "Juni - Oktober", icon: MapPin, desc: "Trockenzeit sorgt für weniger Vegetation und Tiere sammeln sich an Wasserlöchern." },
            { title: "Fotografie", time: "Dezember - März", icon: Camera, desc: "Grüne Landschaften nach kurzem Regen und unzählige neugeborene Tiere." },
            { title: "Vogelbeobachtungen", time: "November - April", icon: Bird, desc: "Zugvögel aus Europa und Asien, darunter tausende Flamingos." },
            { title: "Ruhige Safari", time: "März - Mai", icon: Coffee, desc: "Regenzeit bietet üppige Natur und ein exklusives, ruhiges Erlebnis ohne Massen." },
            { title: "Familien-Safari", time: "Juni - September", icon: Heart, desc: "Mildes Wetter und beste Sichtbarkeit für unvergessliche Erlebnisse mit Kindern." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-white" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-1">{item.title}</h4>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">{item.time}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Experience Slider */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Erfahrungsberichte</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Was unsere <span className="text-primary italic">Gäste sagen</span></h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex gap-1 text-primary">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-lg md:text-xl font-light italic leading-relaxed text-white/80">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="pt-8 border-t border-white/10 mt-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <p className="font-bold text-sm uppercase tracking-widest">{t.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 border-white/10 text-white rounded-full hover:bg-primary transition-colors" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 border-white/10 text-white rounded-full hover:bg-primary transition-colors" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Häufig gestellte <span className="text-primary italic">Fragen</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Tansania Safari Urlaub – Wissenswertes</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Was sollte ich bei einem Tansania Safari Urlaub beachten?", a: "Einreisevisum, Gesundheitsvorsorge (Gelbfieber-Nachweis bei Einreise aus Risikogebieten) und passende Kleidung sind essenziell." },
            { q: "Wie viel kostet ein Tansania Safari Urlaub?", a: "Die Kosten hängen stark von Reisedauer und Komfort ab. Unsere Pakete starten ab ca. 2.999 € pro Person inkl. Flügen." },
            { q: "Was sollte ich für meinen Tansania Safari Urlaub einpacken?", a: "Leichte Kleidung in Naturfarben, ein warmes Fleece für kühle Morgenstunden, festes Schuhwerk und Sonnenschutz." },
            { q: "Wie kann ich eine Tansania Safari günstig buchen?", a: "Frühbucherrabatte und Reisen in der Nebensaison (März-Mai) bieten oft deutliche Preisvorteile." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-all group">
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

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden mx-4 md:mx-10 rounded-[3rem] md:rounded-[5rem] mb-12 shadow-2xl text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-3xl mx-auto relative z-10 px-4">
          <h2 className="font-headline text-4xl md:text-8xl font-bold mb-8 leading-tight">
            Bereit für dein <br /><span className="text-primary italic">Abenteuer?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-2xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Kontaktiere unsere Experten und lass uns gemeinsam deine Traumreise gestalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold">
                Jetzt Anfragen <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors">
              Beratungsgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
