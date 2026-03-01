"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Map, 
  Camera, 
  Bird, 
  Sun, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  TreePine,
  Wind,
  Mountain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/sections/ContactSection';

const parks = [
  {
    id: 'serengeti',
    name: 'Serengeti Nationalpark',
    tagline: 'Die Bühne der Großen Tierwanderung',
    desc: 'Erleben Sie die endlose Weite und das größte Naturschauspiel der Welt – die Wanderung von Millionen Gnus und Zebras.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
    hint: 'serengeti wildlife'
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro Krater',
    tagline: 'Das achte Weltwunder',
    desc: 'Ein natürliches Amphitheater in einem schlafenden Vulkan, Heimat der höchsten Raubtierdichte Afrikas.',
    img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=1200',
    hint: 'ngorongoro crater'
  },
  {
    id: 'tarangire',
    name: 'Tarangire Nationalpark',
    tagline: 'Das Reich der Giganten',
    desc: 'Berühmt für seine riesigen Affenbrotbäume und massiven Elefantenherden, die am Tarangire-Fluss zusammenkommen.',
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1200',
    hint: 'tarangire elephants'
  },
  {
    id: 'manyara',
    name: 'Lake Manyara Nationalpark',
    tagline: 'Heimat der baumkletternden Löwen',
    desc: 'Ein Juwel unter den ostafrikanischen Parks, bekannt für seine vielfältige Vogelwelt und einzigartige Waldlandschaften.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200',
    hint: 'lake manyara lions'
  }
];

const wildlife = [
  { name: 'Löwe', desc: 'Der König der Savanne', img: 'https://picsum.photos/seed/lion/600/400' },
  { name: 'Leopard', desc: 'Meister der Tarnung', img: 'https://picsum.photos/seed/leopard/600/400' },
  { name: 'Elefant', desc: 'Die sanften Giganten', img: 'https://picsum.photos/seed/elephant/600/400' },
  { name: 'Nashorn', desc: 'Seltene Wächter des Kraters', img: 'https://picsum.photos/seed/rhino/600/400' },
  { name: 'Büffel', desc: 'Kraftvolle Wildnis', img: 'https://picsum.photos/seed/buffalo/600/400' },
];

export default function NationalParksPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* 1) Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="Tansania Safari Wildlife Nationalparks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
              Wildnis Pur
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl uppercase">
              Entdecken Sie die <br />
              <span className="text-primary">Highlights von Tansania</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-bold leading-relaxed px-4">
              Erkunden Sie die Vielfalt und Schönheit der bekanntesten Nationalparks Afrikas. Ein Abenteuer, das Sie nie vergessen werden.
            </p>
            <div className="pt-8">
              <Link href="/safaris">
                <Button size="lg" className="rounded-full px-12 h-16 text-xs font-bold shadow-2xl transition-all hover:scale-105">
                  Jetzt Safari Erleben <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2) Interactive Park Highlights Section */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Die großen Parks</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase">Legendäre <span className="text-primary">Expeditionsziele</span></h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {parks.map((park, idx) => (
            <motion.div
              key={park.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[16/10] md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl bg-muted"
            >
              <Image 
                src={park.img} 
                alt={`${park.name} wildlife safari`} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                data-ai-hint={park.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-left">
                <h3 className="text-white font-headline text-2xl md:text-4xl font-bold mb-2 uppercase leading-none group-hover:text-primary transition-colors">
                  {park.name}
                </h3>
                <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">
                  {park.tagline}
                </p>
                <p className="text-white/70 text-xs md:text-sm font-bold leading-relaxed mb-8 max-w-sm line-clamp-3">
                  {park.desc}
                </p>
                <Link href={`/safaris?query=${park.id}`}>
                  <Button variant="outline" className="rounded-full px-8 h-12 text-[9px] font-black uppercase tracking-widest border-white/20 text-white hover:bg-primary hover:border-primary transition-all">
                    Mehr Erfahren
                  </Button>
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3) Interactive Wildlife & Safari Activities Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Wildlife & Activities</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase">Begegnungen der <span className="text-primary">besonderen Art</span></h2>
            </div>
            <p className="lg:col-span-5 text-white/40 text-sm font-bold leading-relaxed border-l-2 border-primary/20 pl-8">
              Von den legendären Big Five bis hin zu exklusiven Flugsafaris über den Kraterrand – wir bringen Sie näher an die Natur als je zuvor.
            </p>
          </div>

          {/* Wildlife Carousel */}
          <Carousel opts={{ align: "start", loop: true }} className="w-full mb-20">
            <CarouselContent className="-ml-4">
              {wildlife.map((animal, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
                    <Image src={animal.img} alt={animal.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <h4 className="text-2xl font-headline font-bold text-white uppercase">{animal.name}</h4>
                      <p className="text-primary font-bold text-[10px] uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                        {animal.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 hover:bg-primary hover:text-white transition-all rounded-full" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/5 border-white/10 hover:bg-primary hover:text-white transition-all rounded-full" />
            </div>
          </Carousel>

          {/* Activity Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Map, title: 'Game Drives', desc: 'Klassische Pirschfahrten im Geländewagen.', kw: 'Serengeti game drive' },
              { icon: TreePine, title: 'Walking Safaris', desc: 'Die Natur zu Fuß unter fachkundiger Führung erleben.', kw: 'Ngorongoro Crater walking safari' },
              { icon: Wind, title: 'Ballon Safaris', desc: 'Lautlos über die wandernden Herden schweben.' },
            ].map((act, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <act.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h4 className="font-headline text-xl font-bold mb-3 uppercase text-white">{act.title}</h4>
                <p className="text-white/40 text-sm font-bold leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Detailed Park Information Section (Expandable Panels) */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Wissenswertes</span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase">Planungshilfe für <span className="text-primary">Ihre Reise</span></h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { 
              q: "Wann ist die beste Reisezeit für die Serengeti?", 
              a: "Die beste Zeit für die große Tierwanderung (Great Migration) ist zwischen Juni und Oktober. Für Tiergeburten empfehlen wir Januar bis Februar.",
              id: "serengeti-time"
            },
            { 
              q: "Unterkünfte im Ngorongoro-Schutzgebiet", 
              a: "Von luxuriösen Lodges direkt am Kraterrand bis hin zu exklusiven Zeltcamps in der Umgebung – wir wählen nur handverlesene Partner für Sie aus.",
              id: "ngorongoro-lodging"
            },
            { 
              q: "Was sollte ich für eine Safari einpacken?", 
              a: "Leichte Kleidung in Erdtönen, feste Wanderschuhe, Sonnenschutz und ein gutes Fernglas sind essenziell. Eine detaillierte Packliste erhalten Sie nach der Buchung.",
              id: "safari-packing"
            },
            { 
              q: "Benötige ich spezielle Impfungen?", 
              a: "Tansania empfiehlt Standard-Impfungen. Eine Malariaprophylaxe wird dringend empfohlen. Bitte konsultieren Sie Ihren Tropenmediziner vor der Abreise.",
              id: "safari-health"
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={item.id} className="border-none bg-white rounded-2xl px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline hover:text-primary text-left text-secondary transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base font-bold leading-relaxed pb-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 p-10 bg-primary rounded-[2.5rem] text-center space-y-6 shadow-2xl">
          <h3 className="font-headline text-3xl font-bold text-secondary uppercase">Bereit für Ihr <br />persönliches Abenteuer?</h3>
          <p className="text-white font-bold max-w-md mx-auto text-sm leading-relaxed">
            Lassen Sie sich von unseren Experten in Berlin und Kairo einen maßgeschneiderten Plan erstellen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/trip-planner">
              <Button className="bg-secondary text-white hover:bg-white hover:text-secondary rounded-xl px-10 h-14 font-black text-xs uppercase tracking-widest">
                Reise Planen
              </Button>
            </Link>
            <Link href="/contact" className="text-secondary font-black text-[10px] uppercase tracking-[0.2em] hover:underline">
              Experten kontaktieren
            </Link>
          </div>
        </div>
      </section>

      {/* 5) Contact Section */}
      <ContactSection />
    </div>
  );
}
