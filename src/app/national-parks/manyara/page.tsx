
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Clock, 
  Zap, 
  Camera, 
  ArrowRight,
  Bird,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

const registryCards = [
  {
    title: "Baumkletternde Löwen",
    desc: "Weltberühmt für seine Löwen, die sich tagsüber in die Äste der Akazien zurückziehen. Ein seltenes Verhalten, das in Manyara besonders häufig zu beobachten ist.",
    icon: Camera
  },
  {
    title: "Vogelparadies am See",
    desc: "Über 400 Vogelarten sind hier heimisch. Tausende Flamingos färben die Ufer des alkalischen Sees oft in ein leuchtendes Rosa.",
    icon: Bird
  },
  {
    title: "Tropischer Grundwasserwald",
    desc: "Gespeist von unterirdischen Quellen, bietet dieser üppig grüne Dschungel einen starken Kontrast zu den trockenen Savannen der Region.",
    icon: Zap
  },
  {
    title: "UNESCO Biosphärenreservat",
    desc: "Seit 1981 geschützt, bewahrt der Park eine unglaubliche Vielfalt an Lebensräumen auf kleinstem Raum – vom Wald bis zur Grassavanne.",
    icon: Compass
  }
];

export default function ManyaraPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: The Emerald Hub */}
      <section className="relative h-[55vh] md:h-[75vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1920" 
          alt="Lake Manyara Flamingos" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="lake manyara flamingos"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-end text-center pb-16 md:pb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white text-[11px] font-bold tracking-normal drop-shadow-lg">
              Das grüne Juwel am Afrikanischen Grabenbruch
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Lake Manyara Nationalpark
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context: Kontrastreiche Wildnis */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl">
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
                  Kompakte Vielfalt auf engstem Raum
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Vom Urwald bis zum See
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-justify opacity-90">
                <p>
                  Obwohl Lake Manyara einer der kleineren Parks Tansanias ist, beeindruckt er durch seine landschaftliche Abwechslung. Direkt hinter dem Eingangsbereich durchfahren Sie einen dichten Grundwasserwald, in dem Paviane und Diademmeerkatzen in den Wipfeln spielen.
                </p>
                <p>
                  Wenn sich der Wald lichtet, öffnet sich der Blick auf den alkalischen Manyara-See, der oft von tausenden Flamingos gesäumt wird. Hier, am Fuße des dramatischen Escarpments des Grabenbruchs, erleben Sie eine Safari, die besonders durch ihre Farbenpracht und die Nähe zur Tierwelt besticht.
                </p>
              </div>
            </motion.div>

            <div className="pt-4">
              <Button onClick={() => {
                const el = document.getElementById('inquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="rounded-xl px-10 h-14 font-bold text-[11px] tracking-widest shadow-xl border-none">
                Reise individuell planen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-border/40 bg-muted"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Manyara Wildlife" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="safari manyara"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[11px] font-bold tracking-normal">Signature Safari Ansicht</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 03 Information Matrix: Registry Grid */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
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
                  <CardContent className="p-8 md:p-12 flex items-start gap-6 md:gap-8">
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
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-4xl text-center space-y-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-border shadow-xl mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
            Ihre Expedition beginnt in Berlin
          </h2>
          <p className="text-muted-foreground font-bold text-[14px] md:text-lg tracking-normal leading-relaxed max-w-2xl mx-auto">
            Wir planen Ihre private Safari so, dass Sie die Highlights von Lake Manyara optimal mit den großen Parks des Nordens verbinden können.
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

      <ContactSection />
    </div>
  );
}
