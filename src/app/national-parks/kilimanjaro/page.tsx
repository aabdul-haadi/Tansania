"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Clock, 
  Mountain, 
  Camera, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Snowflake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';

const registryCards = [
  {
    title: "5.895 Meter Gipfelglück",
    desc: "Der Kilimandscharo (Kibo) ist der höchste Berg Afrikas und der höchste freistehende Berg der Welt. Ein Sehnsuchtsziel für Bergsteiger aus aller Welt.",
    icon: Mountain
  },
  {
    title: "Schnee am Äquator",
    desc: "Einzigartige Gletscher und Eisfelder thronen über der tropischen Savanne. Ein faszinierendes Naturphänomen, das wir auf unseren Expeditionen hautnah erleben.",
    icon: Snowflake
  },
  {
    title: "Vielschichtige Ökozonen",
    desc: "Vom dichten Regenwald am Fuß über alpine Hochmoor-Zonen bis zur Steinwüste am Gipfel – Sie durchlaufen fast alle Klimastufen der Erde an einem einzigen Berg.",
    icon: Zap
  },
  {
    title: "Expeditions-Routen",
    desc: "Ob die klassische Marangu-Route, die malerische Machame-Route oder die exklusive Lemosho-Route – wir planen Ihren Aufstieg mit optimaler Akklimatisierung.",
    icon: Clock
  }
];

export default function KilimanjaroParkPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: The Roof of Africa */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920" 
          alt="Mount Kilimanjaro Summit" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="mount kilimanjaro"
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
              Das Dach Afrikas über den Wolken Tansanias
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Kilimandscharo Nationalpark
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context: Die Thronende Majestät */}
      <section className="py-10 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="text-primary font-bold text-[11px] block tracking-normal">
                  Nationalpark Registry seit 1973
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Uhuru Peak – Das Ziel Ihrer Träume
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Kilimandscharo ist weit mehr als nur ein Berg. Er ist ein Symbol für Freiheit, Ausdauer und die unbändige Kraft der Natur. Seit seiner Ernennung zum Nationalpark im Jahr 1973 und zum Unesco-Weltnaturerbe im Jahr 1987 schützt das Gebiet eines der faszinierendsten Bergmassive der Welt.
                </p>
                <p>
                  Ein Aufstieg zum Uhuru Peak ist eine Reise durch alle Klimazonen unserer Erde. Sie beginnen im üppigen Regenwald, wandern durch neblige Heidemoor-Landschaften und erreichen schließlich die karge, eisige Steinwüste der Gipfelregion. Es ist eine physische und mentale Herausforderung, die mit dem wohl spektakulärsten Sonnenaufgang Ihres Lebens belohnt wird.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200" 
                alt="Trekking at Kilimanjaro" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="mount meru tanzania"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[11px] font-bold tracking-normal">Uhuru Peak Protocol</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 03 Information Matrix: Registry Grid */}
      <section className="py-10 md:py-16 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {registryCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm bg-[#fdfcfb] rounded-[1.5rem] md:rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group border border-border/20">
                  <CardContent className="p-8 md:p-12 flex items-start gap-6 md:gap-8 text-left">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary transition-colors border border-border/40">
                      <card.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-headline text-xl md:text-[28px] font-normal text-secondary tracking-tight group-hover:text-primary transition-colors leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-[14px] leading-[20px] text-muted-foreground font-normal tracking-normal leading-relaxed opacity-80">
                        {card.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="kilimanjaro" />

      {/* 04 Strategy CTA */}
      <section className="py-10 md:py-16 container mx-auto px-4 max-w-4xl text-center space-y-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-border shadow-xl mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
            Ihre Expedition zum Gipfel
          </h2>
          <p className="text-muted-foreground font-bold text-[14px] md:text-lg tracking-normal leading-relaxed max-w-2xl mx-auto">
            Wir planen Ihre Kilimandscharo-Besteigung mit der Präzision und dem Sicherheitsfokus, den dieser majestätische Berg erfordert. Lassen Sie uns gemeinsam Ihren Weg zum Gipfel gestalten.
          </p>
        </div>
        <div className="pt-10">
          <Button onClick={() => {
            const el = document.getElementById('inquiry');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} size="lg" className="rounded-xl px-12 h-14 md:h-16 font-bold text-[11px] tracking-widest shadow-2xl hover:scale-105 transition-transform border-none">
            Gipfel-Tour planen <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}