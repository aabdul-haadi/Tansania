
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mountain, 
  Waves, 
  MapPin, 
  Compass, 
  Camera, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  Map as MapIcon,
  CheckCircle2,
  TreePine,
  Zap,
  CloudSun,
  Timer,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const pointsOfInterest = [
  { 
    id: 'momella', 
    name: 'Momella Seen', 
    desc: 'Ein Paradies für Flamingos und Wasservögel.', 
    details: 'Die sieben flachen Seen sind alkalisch und bieten Nahrung für Tausende von Flamingos. Ein Muss für Vogelliebhaber.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
  },
  { 
    id: 'meru', 
    name: 'Mount Meru', 
    desc: 'Tansanias zweithöchster Gipfel (4.566m).', 
    details: 'Perfekt zur Akklimatisierung für den Kilimandscharo oder als eigenständige, anspruchsvolle Trekking-Tour durch diverse Klimazonen.',
    img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800'
  },
  { 
    id: 'ngurdoto', 
    name: 'Ngurdoto Krater', 
    desc: 'Der „Kleine Ngorongoro“ des Arusha Parks.', 
    details: 'Ein drei Kilometer breiter Krater, dessen Boden von Sumpf und Regenwald bedeckt ist – ein Rückzugsort für Büffel und Elefanten.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  }
];

const activities = [
  { 
    title: 'Geführtes Hiking', 
    icon: Mountain, 
    level: 'Anspruchsvoll', 
    time: '3-4 Tage', 
    desc: 'Besteigen Sie den Mount Meru mit unseren erfahrenen Bergführern.' 
  },
  { 
    title: 'Kanu-Safari', 
    icon: Waves, 
    level: 'Entspannt', 
    time: '2-3 Stunden', 
    desc: 'Gleiten Sie lautlos über die Momella-Seen und beobachten Sie Büffel aus nächster Nähe.' 
  },
  { 
    title: 'Wildlife Drive', 
    icon: Camera, 
    level: 'Familienfreundlich', 
    time: 'Halbtags', 
    desc: 'Entdecken Sie Giraffen, Zebras und die seltenen Schwarz-Weißen Stummelaffen.' 
  }
];

const wildlifeHighlights = [
  { name: "Stummelaffe", sub: "Schwarz-Weiß", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=600" },
  { name: "Flamingos", sub: "Momella Seen", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=600" },
  { name: "Giraffen", sub: "Maasai-Giraffe", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" },
];

export default function ArushaParkPage() {
  const [activePoi, setActivePoi] = useState(pointsOfInterest[0]);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 1) COMPACT HERO SECTION */}
      <section className="relative h-[50vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920"
            alt="Arusha National Park Tanzania"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter uppercase">
              Arusha <br /><span className="text-primary">Nationalpark</span>
            </h1>
            <p className="max-w-xl mx-auto text-[10px] md:text-lg text-white/80 font-bold uppercase tracking-[0.4em] leading-relaxed">
              Geheimtipp zwischen Vulkanen & Seen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2) INTERACTIVE MAP & LOGISTICS ADVANATAGE */}
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Lage & Logistik</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase leading-none tracking-tighter">
                Der Perfekte <br /><span className="text-primary">Prolog</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
                Nur 45 Minuten vom Kilimanjaro Airport entfernt, ist Arusha der ideale Park für den ersten oder letzten Tag Ihrer Reise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Plane, t: "Nah am Airport", d: "Nur 35km bis JRO" },
                { icon: Timer, t: "Kurze Wege", d: "Optimal für Anreisetage" },
                { icon: Zap, t: "Intensiv", d: "Hohe Vielfalt auf kleinem Raum" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-border/50 group hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-secondary uppercase">{item.t}</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="relative aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.43452414112!2d36.7541611!3d-3.2441611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837699999999999%3A0x123456789abcdef!2sArusha%20National%20Park!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.2]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-6 left-6 z-10 hidden md:block">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-primary/10 max-w-[280px] space-y-3">
                  <h4 className="font-headline text-xl font-bold text-secondary uppercase leading-none">Navigator</h4>
                  <div className="space-y-2">
                    {pointsOfInterest.map(p => (
                      <button key={p.id} onClick={() => setActivePoi(p)} className={cn("w-full text-left text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg transition-all", activePoi.id === p.id ? "bg-primary text-white" : "hover:bg-muted")}>
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) FLORA & FAUNA SPOTLIGHT - CREATIVE GRID */}
      <section className="py-16 md:py-24 bg-white border-y border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Bio-Diversität</span>
              <h2 className="font-headline text-4xl md:text-7xl font-bold text-secondary uppercase leading-none tracking-tighter">
                Flora & <span className="text-primary">Fauna</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm font-light max-w-xs border-l-2 border-primary/20 pl-6">
              Von Nebelwäldern bis hin zu flachen Salzseen – Arusha bietet Lebensraum für Spezialisten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wildlifeHighlights.map((animal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl"
              >
                <Image src={animal.img} alt={animal.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{animal.sub}</p>
                  <h4 className="font-headline text-3xl font-bold uppercase">{animal.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) ACTIVITIES BENTO - REDUCED PADDING */}
      <section className="py-16 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-7xl font-bold uppercase text-secondary tracking-tighter">Erlebnisse</h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((act, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-border/50 flex flex-col justify-between h-full group"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <act.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest border-primary/20 text-primary">{act.level}</Badge>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{act.time}</span>
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-secondary uppercase mb-4">{act.title}</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{act.desc}</p>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-muted">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:translate-x-2 transition-transform">
                    Details anfragen <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) CLIMATE & SEASONS - CREATIVE VISUALIZER */}
      <section className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Wann Reisen?</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase leading-none tracking-tighter">Beste <br /><span className="text-primary">Reisezeit</span></h2>
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                Der Park ist ganzjährig ein Erlebnis, doch jede Jahreszeit hat ihren eigenen Zauber.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <CloudSun className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-sm uppercase">Juni – Oktober (Trockenzeit)</p>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Beste Wildlife-Sichtungen</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Waves className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-sm uppercase">November – Mai (Grüne Saison)</p>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Ideal für Vogelliebhaber & Flora</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative">
                <Image src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000" alt="Mount Meru Cloud" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-[3rem] shadow-2xl hidden lg:block">
                <Sparkles className="w-10 h-10 text-white mb-4" />
                <p className="text-white font-bold text-xl uppercase leading-tight">Expertentipp:</p>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-2">Früher Start für Meru-Blick!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) FAQ & CTA */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold uppercase text-secondary tracking-tighter">Park <span className="text-primary">Guide</span></h2>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-2">Alles was Sie wissen müssen</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "Was macht Arusha einzigartig?", a: "Die Vielfalt auf kleinem Raum: Von den Momella Seen über dichten Bergregenwald bis hin zum Mount Meru. Zudem ist es die Heimat der seltenen Schwarz-Weißen Stummelaffen." },
            { q: "Wie sicher ist die Mount Meru Besteigung?", a: "Sicherheit steht an erster Stelle. Alle Touren werden von staatlich geprüften Rangern und Guides begleitet. Die Besteigung gilt als technisch anspruchsvoller als der Kilimandscharo." },
            { q: "Kann man den Park an einem Tag besuchen?", a: "Absolut! Durch die Nähe zu Arusha-Stadt eignet sich der Park perfekt für einen Tagesausflug oder als entspannter Start Ihrer Safari." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-all border border-border/50">
              <AccordionTrigger className="text-left font-headline text-xl font-bold py-8 hover:no-underline hover:text-primary text-secondary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed pb-8 pt-2 border-t border-muted/10">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-24 p-10 md:p-20 bg-primary rounded-[3rem] md:rounded-[5rem] text-center space-y-8 shadow-2xl relative overflow-hidden group border-none">
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
          <div className="relative z-10">
            <h3 className="font-headline text-4xl md:text-8xl font-bold text-white uppercase leading-none tracking-tighter">
              Starten Sie Ihr <br /><span className="text-secondary">Abenteuer</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-secondary hover:bg-secondary hover:text-white rounded-[2rem] px-12 h-16 md:h-20 font-bold text-xs uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-105 border-none">
                  Reise Planen
                </Button>
              </Link>
              <Link href="/contact" className="text-white font-bold text-xs uppercase tracking-[0.4em] hover:text-secondary transition-colors px-8 py-4">
                Kontakt Aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 flex justify-center border-t border-border/50">
        <img src="/iconlogo.jpg" alt="Logo" className="h-10 w-auto grayscale opacity-20" />
      </div>
    </div>
  );
}
