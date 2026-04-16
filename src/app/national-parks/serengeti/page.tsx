"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Map as MapIcon,
  Zap,
  Sparkles,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const regions = [
  {
    id: 'south-central',
    badge: 'Süden & Zentrum',
    badgeColor: 'bg-green-600',
    title: 'Südliche & Zentrale Serengeti',
    desc: 'Das Herz der Serengeti mit klassischen Savannen, Akazienbäumen und der höchsten Raubtierdichte Afrikas.',
    tags: ['Seronera Valley', 'Ndutu Gebiet'],
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    hint: 'serengeti balloon'
  },
  {
    id: 'western',
    badge: 'Westlicher Korridor',
    badgeColor: 'bg-orange-600',
    title: 'Westlicher Korridor',
    desc: 'Geprägt vom Grumeti-Fluss mit dichterem Buschland, Wäldern und spektakulären Flussüberquerungen im Juni/Juli.',
    tags: ['Grumeti River', 'Kirawira', 'Nyasirori'],
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=600',
    hint: 'migration crossing'
  },
  {
    id: 'north',
    badge: 'Norden',
    badgeColor: 'bg-blue-700',
    title: 'Nördliche Serengeti',
    desc: 'Wild, unberührt und zerklüftet mit dramatischen Mara-Flussüberquerungen und Grenze zum Masai Mara Reservat.',
    tags: ['Mara River', 'Lobo Gebiet', 'Kogatende'],
    img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=600',
    hint: 'northern serengeti'
  }
];

export default function SerengetiPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero */}
      <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Serengeti Migration" 
          fill 
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="migration herds"
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
              Das größte Naturschauspiel der Erde
            </p>
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Serengeti Nationalpark
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 Narrative Context */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
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
                    Unesco-Weltnaturerbe seit 1952
                  </span>
                </div>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-tight">
                  Die endlose Ebene voller Leben
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[20px] text-left opacity-90">
                <p>
                  Der Serengeti Nationalpark, 1952 gegründet und Unesco-Weltnaturerbe, ist eines der ältesten und bekanntesten Ökosysteme der Erde. Sein Name stammt aus der Massai-Sprache "Siringitu", was "endloses Land" bedeutet – eine perfekte Beschreibung für die weiten Savannen, die sich über fast 30.000 Quadratkilometer erstrecken.
                </p>
                <p>
                  Mit dieser beeindruckenden Fläche ist die Serengeti das größte und artenreichste Schutzgebiet Tansanias und beherbergt die höchste Konzentration an Wildtieren in Afrika. Hier spielt sich jedes Jahr das größte Tierwanderungsspektakel unseres Planeten ab.
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
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200" 
                alt="Serengeti Sunset Tree" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                data-ai-hint="savannah tree"
              />
            </motion.div>
          </div>
        </div>

        {/* 03 High-Density Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
          {[
            {
              title: "Big Five & Raubtiere",
              desc: "Die Serengeti beherbergt Afrikas höchste Löwenpopulation (über 3.000 Tiere), Leoparden, Geparden, Elefanten, Giraffen, Büffel und das seltene Spitzmaulnashorn."
            },
            {
              title: "Vogelparadies & Kleintiere",
              desc: "Mit über 500 Vogelarten, darunter Sekretärvögel, Flamingos, Geier und Strauße, sowie Reptilien, Insekten und Käfern ist die Serengeti ein komplettes Ökosystem."
            },
            {
              title: "Vegetationswandel",
              desc: "Trockenzeit: trockene, endlos weite goldschimmernde Ebene. Regenzeit: grünes, mit Wildblumen übersätes Meer – zwei völlig verschiedene Gesichter."
            },
            {
              title: "Beste Reisezeit & Unterkünfte",
              desc: "Mitte Dezember-Mitte März & Juni-Ende Oktober (afrikanischer Winter). Von Luxuslodges bis mobilen Camps, die der Migration folgen – für jeden Reisestil."
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
                <CardContent className="p-8 md:p-10 space-y-3">
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

      {/* 04 GEOGRAPHY SECTION - NEW AS PER SS */}
      <section className="py-16 md:py-32 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold text-[10px] tracking-[0.2em] block"
            >
              Serengeti Geografie
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight"
            >
              Entdecken Sie die Serengeti <span className="text-primary">auf der Karte</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Die Serengeti erstreckt sich über 30.000 km² von Nordtansania bis zur kenianischen Grenze. Entdecken Sie die drei Hauptregionen und folgen Sie der Route der Großen Migration.
            </motion.p>
          </div>

          {/* Interactive Map Wrapper */}
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-muted border border-border/50 aspect-video md:aspect-[21/9] mb-12 md:mb-20 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021272.775330386!2d34.33120155!3d-2.333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ca71a684365773%3A0x67396c9c9b45660b!2sSerengeti%20National%20Park!5e0!3m2!1sen!2stz!4v1711234567890!5m2!1sen!2stz"
              className="absolute inset-0 w-full h-full border-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
            
            {/* Floating Info Card */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20 w-64 md:w-80 hidden md:block">
              <Card className="bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-headline text-xl font-bold text-secondary">Serengeti Highlights</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { t: "Seronera Valley", d: "Zentrale Savanne & Raubtiere" },
                      { t: "Grumeti River", d: "Westlicher Korridor & Flussüberquerungen" },
                      { t: "Mara River", d: "Nördliche Grenze zu Kenia" },
                      { t: "Ndutu Area", d: "Südliche Kalbungsregion" }
                    ].map((h, i) => (
                      <div key={i} className="flex flex-col border-b border-border/40 pb-3 last:border-none">
                        <span className="text-[11px] font-bold text-secondary uppercase tracking-tight leading-none mb-1">{h.t}</span>
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{h.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Region Registry Grid */}
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
                  <Image src={region.img} alt={region.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" data-ai-hint={region.hint} />
                  <div className="absolute top-4 left-4">
                    <Badge className={cn("text-white border-none font-bold text-[8px] px-3 py-1 uppercase tracking-widest", region.badgeColor)}>
                      {region.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4 px-1">
                  <h3 className="font-headline text-xl md:text-2xl font-normal text-secondary tracking-tight">{region.title}</h3>
                  <p className="text-[13px] leading-[20px] text-muted-foreground font-normal opacity-80">{region.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {region.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted/20 border border-border rounded-full text-[9px] font-bold text-secondary/60 uppercase tracking-widest">
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

      {/* 05 Strategy CTA */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-4xl text-center space-y-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-border shadow-xl mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tight">
            Planen Sie Ihr Serengeti Abenteuer
          </h2>
          <p className="text-muted-foreground font-bold text-[14px] md:text-lg tracking-normal leading-relaxed max-w-2xl mx-auto">
            Unsere Spezialisten in Berlin kennen die besten Zeiten und Orte für die Migration. Lassen Sie uns gemeinsam Ihre individuelle Traumreise gestalten.
          </p>
        </div>
        <div className="pt-10">
          <Button onClick={() => {
            const el = document.getElementById('inquiry');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} size="lg" className="rounded-xl px-12 h-14 md:h-16 font-bold text-[11px] tracking-widest shadow-2xl hover:scale-105 transition-transform border-none">
            Reise individuell gestalten <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
