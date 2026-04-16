
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Clock, 
  Camera, 
  ArrowRight,
  ShieldCheck,
  TreePine,
  Wind
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { ReviewVideos } from '@/components/sections/ReviewVideos';
import { OtherParks } from '@/components/sections/OtherParks';

const registryCards = [
  {
    title: "Elefantenparadies am Fluss",
    desc: "In der Trockenzeit versammeln sich bis zu 2.000 Elefanten entlang des Tarangire-Flusses. Es ist eine der höchsten Konzentrationen an Dickhäutern weltweit.",
    icon: Camera
  },
  {
    title: "Die Giganten der Flora",
    desc: "Uralte Affenbrotbäume (Baobabs) prägen das Landschaftsbild. Diese jahrtausendealten Riesen dienen als natürliche Wasserspeicher und Schattenspender.",
    icon: TreePine
  },
  {
    title: "Vielfältige Raubtierpräsenz",
    desc: "Neben den großen Herden beheimatet der Park Löwen, Leoparden und seltene afrikanische Wildhunde, die in den Akazienwäldern auf Jagd gehen.",
    icon: Wind
  },
  {
    title: "Expeditions-Saisonalität",
    desc: "Die Monate Juni bis Oktober bieten spektakuläre Sichtungen an den Wasserstellen. Wir planen Ihre Safari so, dass Sie die Wanderbewegungen optimal nutzen.",
    icon: Clock
  }
];

export default function TarangirePage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: The Giant's Realm */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920" 
          alt="Tarangire Elefanten Herde" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="elephants savannah"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-12 md:pb-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white text-[11px] font-bold tracking-widest drop-shadow-lg">
              Das Reich der sanften Riesen und uralten Bäume
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Tarangire Nationalpark
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context: Baobab-Landschaft */}
      <section className="py-10 md:py-16 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="text-primary font-bold text-[11px] block tracking-normal">
                  Ein Refugium der Stille und Größe
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Elefantenparadies mit <br /> Baobab-Landschaft
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Tarangire-Nationalpark liegt südlich des Manyara-Sees und ist ein echter Geheimtipp für Naturfotografen. Die Landschaft aus goldgelben Ebenen, weiten Palmenhainen und uralten Affenbrotbäumen macht jede Safari hier zu einem ästhetischen Erlebnis der Extraklasse.
                </p>
                <p>
                  In der Trockenzeit von Juni bis Oktober wird der Tarangire-Fluss zum einzigen dauerhaften Wasserspeicher der Region. Dies führt zu einer Tierkonzentration, die der Serengeti in nichts nachsteht. Besonders die Begegnungen mit den riesigen Elefantenfamilien, die oft in unmittelbarer Nähe zum Fahrzeug verweilen, bleiben unvergesslich.
                </p>
              </div>
            </motion.div>

            <div className="pt-4 text-left">
              <Button onClick={() => {
                const el = document.getElementById('inquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="rounded-xl px-10 h-14 font-bold text-[11px] tracking-widest shadow-xl border-none">
                Tarangire Safari planen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Tarangire Baobab Loop" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="baobab tree"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[11px] font-bold tracking-widest">Wahrzeichen Tansanias</p>
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

      {/* 04 Strategy CTA */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative z-10 lg:w-[60%] space-y-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="font-headline text-lg sm:text-2xl md:text-5xl font-bold tracking-tighter leading-tight whitespace-nowrap">
                  Planen Sie Ihre perfekte Tarangire Safari
                </h2>
              </div>
              
              <p className="text-white/80 font-bold text-[11px] md:text-base tracking-widest leading-relaxed max-w-2xl">
                Erleben Sie die Giganten der Savanne in ihrer natürlichen Umgebung. Wir gestalten Ihre Route für maximale Tiersichtungen und exklusiven Komfort.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col gap-3 shrink-0">
              <Button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="w-full lg:w-[280px] h-14 md:h-16 rounded-xl bg-white text-primary hover:bg-secondary hover:text-white font-bold text-[11px] tracking-widest shadow-xl border-none transition-all group">
                Kostenloses Angebot <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ReviewVideos />
      <OtherParks excludeId="tarangire" />

      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
