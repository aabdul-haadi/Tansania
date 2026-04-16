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
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';

const registryCards = [
  {
    title: "Mount Meru Trekking",
    desc: "Tansanias zweithöchster Vulkan (4.566 m) bietet anspruchsvolle Wanderungen und dient oft als ideale Akklimatisierungstour für den Kilimandscharo.",
    icon: Mountain
  },
  {
    title: "Die Momella Seen",
    desc: "Eine Gruppe flacher alkalischer Seen, die tausende Flamingos anziehen. Kanutouren ermöglichen lautlose Begegnungen mit Wasserbüffeln am Ufer.",
    icon: Waves
  },
  {
    title: "Ngurdoto Krater",
    desc: "Ein unberührter, versunkener Krater mit 3 km Durchmesser, der wie ein Mini-Ngorongoro wirkt und eine hohe Dichte an Waldtieren beheimatet.",
    icon: Compass
  },
  {
    title: "Vielseitige Safari-Logistik",
    desc: "Nur 45 Minuten von Arusha entfernt, bietet der Park eine perfekte Kombination aus Bergwald, Kraterlandschaft und offener Savanne.",
    icon: Clock
  }
];

export default function ArushaParkPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: The Volcanic Peak */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1920" 
          alt="Mount Meru View" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="mount meru tanzania"
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
              Das Tor zur Wildnis vor den Toren Arushas
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Arusha Nationalpark & Mount Meru
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context: Mystische Bergwälder */}
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
                  Vielschichtige Ökosysteme
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Vom Regenwald bis zum Gipfel
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Arusha Nationalpark ist Tansanias vielseitigstes Schutzgebiet. Hier finden Sie keine endlosen Ebenen, sondern mystische Bergregenwälder, in denen die schwarz-weißen Colobusaffen durch die Äste schwingen, und kristallklare Seen voller Flamingos.
                </p>
                <p>
                  Dominierend über allem thront der majestätische Mount Meru. Eine Besteigung dieses erloschenen Vulkans führt Sie durch dramatische Landschaften bis zum Kraterrand, von wo aus Sie bei Sonnenaufgang den besten Blick auf den fernen Kilimandscharo genießen können. Es ist der ideale Ort für Wander-Safaris und echte Naturbegegnungen abseits der Jeeps.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200" 
                alt="Colobus Monkey" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="colobus monkey"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[11px] font-bold tracking-normal">Boutique Safari Experience</p>
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
      <OtherParks excludeId="arusha" />

      {/* 04 Strategy CTA */}
      <section className="py-10 md:py-16 container mx-auto px-4 max-w-4xl text-center space-y-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-border shadow-xl mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
            Ihre Expedition beginnt hier
          </h2>
          <p className="text-muted-foreground font-bold text-[14px] md:text-lg tracking-normal leading-relaxed max-w-2xl mx-auto">
            Ob Tagesausflug oder mehrtägiges Trekking – Arusha Nationalpark ist der perfekte Startpunkt für Ihre Tansania-Reise. Lassen Sie sich persönlich beraten.
          </p>
        </div>
        <div className="pt-10">
          <Button onClick={() => {
            const el = document.getElementById('inquiry');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} size="lg" className="rounded-xl px-12 h-14 md:h-16 font-bold text-[11px] tracking-widest shadow-2xl hover:scale-105 transition-transform border-none">
            Anfrage senden <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}