
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Map as MapIcon,
  Zap,
  Sparkles,
  MapPin,
  Clock,
  Users,
  Camera,
  Bird,
  Sun,
  Wind,
  Phone,
  Plus,
  ChevronRight,
  History,
  Mountain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';

const regions = [
  {
    id: 'crater',
    badge: 'Krater',
    badgeColor: 'bg-secondary',
    title: 'Ngorongoro Krater',
    desc: 'Die größte intakte vulkanische Caldera der Welt (20 km Durchmesser), UNESCO-Welterbe und geschlossenes Ökosystem mit ganzjährigem Wildreichtum.',
    tags: ['Lake Magadi', 'Lerai Forest', 'Ngoitokitok'],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=600',
    hint: 'ngorongoro crater'
  },
  {
    id: 'highlands',
    badge: 'Hochland',
    badgeColor: 'bg-primary',
    title: 'Ngorongoro Conservation Area',
    desc: 'Einzigartiges Modell des Zusammenlebens von Mensch und Tier. Maasai leben hier seit Generationen im Einklang mit der Natur.',
    tags: ['Maasai-Dörfer', 'Olmoti Crater', 'Empakaai Crater'],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    hint: 'maasai village'
  },
  {
    id: 'olduvai',
    badge: 'Olduvai',
    badgeColor: 'bg-orange-700',
    title: 'Olduvai-Schlucht',
    desc: 'Die "Wiege der Menschheit" - Hier wurden die ältesten menschlichen Fossilien gefunden. Besucherzentrum zeigt die Evolution des Menschen.',
    tags: ['Fossilien-Stätten', 'Museum', 'Laetoli Fußspuren'],
    img: 'https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=600',
    hint: 'olduvai gorge'
  }
];

const timeline = [
  {
    dates: "6:00 Uhr",
    title: "Frühstart vom Kraterrand",
    desc: "Abholung von Ihrer Lodge. Möglicher Nebel am Kraterrand schafft mystische Atmosphäre. Temperatur: 10-15°C - warmer Pullover empfohlen.",
    side: "left"
  },
  {
    dates: "7:00 Uhr",
    title: "Abfahrt in den Krater",
    desc: "Fahrt auf steiler Serpentinenstraße 600 m in die Caldera hinab. Erste Tierbeobachtungen schon während der Abfahrt.",
    side: "right"
  },
  {
    dates: "8:00-12:00",
    title: "Morgendliche Tieraktivität",
    desc: "Beste Zeit für Tierbeobachtungen! Löwen auf Jagd, Nashörner bei der Futtersuche, Elefanten am Lerai Forest. Fernglas & Teleobjektiv im Einsatz.",
    side: "left"
  },
  {
    dates: "12:00-13:00",
    title: "Picknick am See",
    desc: "Mittagspause am Lake Magadi mit Blick auf Flamingos. Nachhaltiges Picknick mit lokal produzierten Speisen.",
    side: "right"
  },
  {
    dates: "13:00-16:00",
    title: "Nachmittagssafari & Rückkehr",
    desc: "Weitere Tierbeobachtungen, Fokus auf Raubtiere. Ab 16:00 Uhr beginnt die Rückfahrt aus dem Krater (gesetzliche Maximalzeit: 6 Stunden).",
    side: "left"
  }
];

const activities = [
  {
    id: 'crater-safari',
    label: 'Krater-Safari',
    icon: Camera,
    title: 'Klassische Krater-Safari: Big Five an einem Tag',
    duration: '6 Std',
    people: 'Max. 6',
    frequency: '25.000+',
    desc: 'Erleben Sie das größte geschlossene Ökosystem der Welt! Der Ngorongoro-Krater bietet die einmalige Chance, alle Big Five an einem Tag zu sehen. Mit über 25.000 Großtieren und der höchsten Raubtierdichte Afrikas.',
    features: [
      'Frühstart um 6:00 Uhr für beste Tieraktivität',
      'Picknick am Lake Magadi mit Flamingos',
      'Seltene Spitzmaulnashörner im Lerai Forest'
    ],
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800',
    level: 'Sehr leicht'
  },
  {
    id: 'maasai-culture',
    label: 'Maasai-Kultur',
    icon: Users,
    title: 'Authentische Maasai Begegnungen',
    duration: '2-3 Std',
    people: 'Individuell',
    frequency: 'Täglich',
    desc: 'Besuchen Sie ein traditionelles Maasai-Boma in der Conservation Area. Lernen Sie die Lebensweise, Tänze und das Handwerk dieses stolzen Hirtenvolkes im Einklang mit der Natur kennen.',
    features: [
      'Besuch eines authentischen Dorfes',
      'Einblicke in traditionelle Medizin',
      'Unterstützung lokaler Gemeinschaften'
    ],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    level: 'Leicht'
  },
  {
    id: 'olduvai-tour',
    label: 'Olduvai-Tour',
    icon: History,
    title: 'Olduvai-Schlucht: Wiege der Menschheit',
    duration: '2 Std',
    people: 'Max. 12',
    frequency: 'Ganzjährig',
    desc: 'Besuchen Sie eine der wichtigsten paläoanthropologischen Stätten der Welt. Entdecken Sie, wo unsere Vorfahren vor Millionen von Jahren lebten und sich entwickelten.',
    features: [
      'Geführter Rundgang im Museum',
      'Blick in die Ausgrabungsstätten',
      'Präsentation der Laetoli-Fußspuren'
    ],
    img: 'https://images.unsplash.com/photo-1568322422676-955d548565b3?q=80&w=800',
    level: 'Sehr leicht'
  }
];

export default function NgorongoroPage() {
  const [activeActivity, setActiveActivity] = useState(activities[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="/assets/images/national-parks/ngorongoro-card.webp" 
          alt="Ngorongoro Krater Panorama" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white text-[11px] font-bold tracking-normal drop-shadow-lg">
              UNESCO-Welterbe & Größte Caldera der Welt
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Ngorongoro-Krater
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context */}
      <section className="py-8 md:py-12 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-primary font-bold text-[10px] md:text-[11px] block tracking-normal">
                    Ein einzigartiges Naturwunder Afrikas
                  </span>
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Das achte Weltwunder am Nil-Savannen-Korridor
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Ngorongoro-Krater gilt als eine der spektakulärsten Naturlandschaften Afrikas. Als größte intakte vulkanische Caldera der Welt, Teil des UNESCO-Welterbes und Herzstück der Ngorongoro Conservation Area beeindruckt er durch seine außergewöhnliche Kombination aus Naturvielfalt, Kulturgeschichte und dem harmonischen Zusammenleben von Mensch und Tier.
                </p>
                <p>
                  Vor 2–3 Millionen Jahren brach ein gigantischer Vulkan zusammen und schuf die 20 km breite Caldera. Heute ist sie ein geschlossenes Ökosystem mit ganzjährig Wasser und Nahrung – Grund für die unglaubliche Tierdichte.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200" 
                alt="Panoramablick über den Ngorongoro-Krater" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          {[
            {
              title: "Die Maasai – Herzstück der Region",
              desc: "Seit über 200 Jahren leben die Maasai im Gebiet und sind integraler Bestandteil der Kulturlandschaft. Sie praktizieren Viehzucht im Einklang mit Wildtieren und erhalten faire Einnahmen aus Tourismus."
            },
            {
              title: "Beste Reisezeit",
              desc: "Juni–Oktober & Dezember–März: Beste Sicht, niedrige Vegetation, perfekte Fotos. November, April–Mai: Grüne Landschaft, weniger Touristen. Starke Regen April–Mai: rutschige Straßen."
            },
            {
              title: "Perfekte Krater-Safari",
              desc: "Frühstart um 6 Uhr für beste Tieraktivität. Ganztagestour mit Picknick im Krater. Max. 6 Std. Aufenthalt (gesetzlich). Fernglas & Teleobjektiv inklusive. Nachhaltige Lodge mit Solarstrom."
            },
            {
              title: "Geschlossenes Ökosystem",
              desc: "Durch die 600 m hohen Kraterwände entstand ein autarkes Biotop. Tiere wandern nicht ab – ideale Bedingungen für dauerhafte Beobachtung aller Big Five an einem Tag."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm bg-white rounded-2xl md:rounded-[2.5rem] hover:shadow-md transition-all duration-500 border border-border/40">
                <CardContent className="p-8 md:p-10 space-y-3 text-left">
                  <h4 className="font-headline text-lg md:text-2xl font-bold text-secondary tracking-tight leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-normal leading-relaxed opacity-80">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03 Geography Section */}
      <section className="py-8 md:py-12 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-6">
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] block">
              Ngorongoro Geografie
            </span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
              Entdecken Sie den Ngorongoro-Krater <span className="text-primary">auf der Karte</span>
            </h2>
          </div>

          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50 aspect-video md:aspect-[21/9] mb-10 md:mb-16 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127605.741275386!2d35.51866455!3d-3.17641215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d2703816694e9f%3A0xe9f75354e38e6e5a!2sNgorongoro%20Crater!5e0!3m2!1sen!2stz!4v1711234567890!5m2!1sen!2stz"
              className="absolute inset-0 w-full h-full border-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
            
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20 w-64 md:w-80 hidden md:block text-left">
              <Card className="bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-headline text-xl font-bold text-secondary">Ngorongoro Highlights</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { t: "Ngorongoro Krater", d: "Größte intakte Caldera (20 km)" },
                      { t: "Lake Magadi", d: "Flamingosee im Krater" },
                      { t: "Olduvai-Schlucht", d: "Wiege der Menschheit" },
                      { t: "Lerai Forest", d: "Akazienwald & Elefanten" }
                    ].map((h, i) => (
                      <div key={i} className="flex flex-col border-b border-border/40 pb-3 last:border-none">
                        <span className="text-[11px] font-bold text-secondary tracking-tight leading-none mb-1">{h.t}</span>
                        <span className="text-[9px] font-bold text-muted-foreground tracking-widest">{h.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {regions.map((region, idx) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col space-y-6"
              >
                <div className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl group border border-border/40 bg-muted">
                  <Image src={region.img} alt={region.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <Badge className={cn("text-white border-none font-bold text-[8px] px-3 py-1 tracking-widest", region.badgeColor)}>
                      {region.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4 px-1 text-left">
                  <h3 className="font-headline text-xl md:text-2xl font-normal text-secondary tracking-tight">{region.title}</h3>
                  <p className="text-[13px] leading-[20px] text-muted-foreground font-normal opacity-80">{region.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {region.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted/20 border border-border rounded-full text-[9px] font-bold text-secondary/60 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Daily Timeline Section */}
      <section className="py-8 md:py-12 bg-[#FDFCFB] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Ihre perfekte Ngorongoro Krater Safari
            </h2>
            <p className="text-muted-foreground font-bold text-[10px] md:text-sm tracking-widest max-w-xl mx-auto">
              Optimale Tagesplanung für ein unvergessliches Erlebnis im Krater
            </p>
          </div>

          <div className="relative space-y-12 md:space-y-16">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-primary/20 z-0 hidden md:block" />
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12",
                  item.side === 'right' ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <div className={cn(
                    "p-6 md:p-8 bg-white rounded-2xl border border-border/40 shadow-sm w-full transition-all hover:shadow-md",
                    item.side === 'right' ? "md:text-left" : "md:text-right"
                  )}>
                    <div className={cn(
                      "flex items-center gap-4 mb-3",
                      item.side === 'right' ? "flex-row-reverse" : "flex-row justify-end"
                    )}>
                      <h4 className="font-headline text-lg md:text-xl font-bold text-secondary leading-none">{item.title}</h4>
                      <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold tracking-widest">{item.dates}</Badge>
                    </div>
                    <p className="text-[11px] md:text-xs text-muted-foreground font-bold tracking-widest leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full bg-primary border-4 border-white shadow-xl items-center justify-center shrink-0" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Activity Hub Section */}
      <section className="py-8 md:py-12 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px]">Aktivitäten & Erlebnisse</span>
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">
              Unvergessliche <span className="text-primary">Aktivitäten</span> im Ngorongoro-Krater
            </h2>
            <p className="text-muted-foreground text-sm font-bold max-w-2xl mx-auto leading-relaxed">
              Erleben Sie das achte Weltwunder Afrikas auf einzigartige Weise – von spektakulären Krater-Safaris über Maasai-Kultur-Erlebnisse bis hin zu archäologischen Entdeckungen in der Olduvai-Schlucht.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            {activities.map((act) => (
              <button
                key={act.id}
                onClick={() => setActiveActivity(act)}
                className={cn(
                  "px-6 py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest transition-all border flex items-center gap-3",
                  activeActivity.id === act.id 
                    ? "bg-secondary text-white border-secondary shadow-xl scale-105" 
                    : "bg-white text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                <act.icon className={cn("w-4 h-4", activeActivity.id === act.id ? "text-primary" : "text-muted-foreground")} />
                {act.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeActivity.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-[2rem] md:rounded-[3rem] border border-border/40 overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row">
                <div className="w-full lg:w-[45%] relative aspect-[16/9] lg:aspect-auto min-h-[300px] md:min-h-[350px]">
                  <Image src={activeActivity.img} alt={activeActivity.title} fill className="object-cover" />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold">{activeActivity.duration}</Badge>
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[8px] font-bold">{activeActivity.level}</Badge>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-12 lg:p-16 space-y-8 flex flex-col justify-center text-left">
                  <div className="space-y-6">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-secondary tracking-tight">{activeActivity.title}</h3>
                    
                    <div className="grid grid-cols-3 gap-4 pb-6 border-b border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Clock className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Dauer</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Users className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Personen</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.people}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Zap className="w-4 h-4" />
                          <span className="text-[9px] font-bold tracking-widest">Fokus</span>
                        </div>
                        <p className="text-xs font-bold text-secondary">{activeActivity.frequency}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base font-bold leading-relaxed tracking-tight opacity-70">
                      {activeActivity.desc}
                    </p>

                    <div className="space-y-3">
                      {activeActivity.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-secondary tracking-widest">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-xl px-10 h-14 bg-primary text-white font-bold text-[10px] tracking-widest shadow-xl border-none">
                      Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 06 Action Banner */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-get-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative z-10 lg:w-[60%] space-y-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-lg sm:text-2xl md:text-5xl font-bold tracking-tighter leading-tight whitespace-nowrap">
                  Planen Sie Ihre perfekte Ngorongoro Safari
                </h2>
              </div>
              
              <p className="text-white/80 font-bold text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">
                Unsere Safari-Experten helfen Ihnen, die idealen Aktivitäten für Ihre Reisezeit und Interessen zu kombinieren. Erleben Sie Big Five, Maasai-Kultur und archäologische Wunder.
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {["Kostenlose Beratung", "Optimale Krater-Zeitplanung", "Beste Preisgarantie"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] md:text-[11px] font-bold tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">
                Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:+493022608080" className="block">
                <Button variant="outline" className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-transparent border-white/40 text-white hover:bg-white/10 font-bold text-[10px] tracking-widest transition-all">
                  +49 30 22608080 anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="ngorongoro" />

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
