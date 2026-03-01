"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Heart, 
  ShieldCheck, 
  Leaf, 
  Users, 
  Star, 
  ArrowRight, 
  Sparkles,
  MapPin,
  Quote,
  CheckCircle2,
  Award,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  { name: "Samson Kyashama", role: "Gründer & Safari-Experte", img: "https://picsum.photos/seed/samson/400/400" },
  { name: "Manuela Jungas", role: "Operations Management", img: "https://picsum.photos/seed/manuela/400/400" },
  { name: "Susanne Stefaniack", role: "Reiseberatung", img: "https://picsum.photos/seed/susanne/400/400" },
  { name: "Petra Schönberger", role: "Gästebetreuung", img: "https://picsum.photos/seed/petra/400/400" },
  { name: "Klaus Jungas", role: "Logistik-Spezialist", img: "https://picsum.photos/seed/klaus/400/400" },
];

const guides = [
  { name: "Joachim Hugo", role: "Senior Safari Guide", img: "https://picsum.photos/seed/joachim/400/400" },
  { name: "Emmanuel Mkama", role: "Wildtier-Spezialist", img: "https://picsum.photos/seed/emmanuel/400/400" },
  { name: "Osbet Kihomwe", role: "Kultur-Botschafter", img: "https://picsum.photos/seed/osbet/400/400" },
  { name: "Salim Zawadi", role: "Vogel-Experte", img: "https://picsum.photos/seed/salim/400/400" },
  { name: "Iddi", role: "Fährtenleser", img: "https://picsum.photos/seed/iddi/400/400" },
  { name: "James Martin", role: "Fotografie-Guide", img: "https://picsum.photos/seed/james/400/400" },
];

const trustBadges = [
  { name: "Relais & Châteaux", icon: Award },
  { name: "DRV Mitglied", icon: ShieldCheck },
  { name: "TripAdvisor Excellence", icon: Star },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Cinematic Hero */}
      <header className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="Afrikanische Savanne"
          fill
          priority
          className="object-cover"
          data-ai-hint="serengeti savannah"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
              Exklusive Lodges & Luxus-Resorts
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Ihr Schlüssel zum <br />
              <span className="text-primary">Herzen Afrikas</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-light leading-relaxed px-4">
              Wir verbinden den Nil mit der Savanne – durch authentische, maßgeschneiderte Abenteuer, die weit über gewöhnliche Reisen hinausgehen.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
              <Compass className="w-4 h-4" /> Unsere Vision
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Mehr als nur ein <br /><span className="text-primary">Urlaub</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg">
              <p>
                "Träumen Sie von einer Reise, die tiefer geht? Eine Reise, die Sie in die Seele eines Kontinents eintauchen lässt, reich an unberührter Natur und pulsierenden Kulturen?"
              </p>
              <p className="text-foreground font-medium">
                Wir sind Ihre Brücke zu unvergesslichen Erlebnissen in Tansania, Kenia, Ruanda und Südafrika. Unser Herz schlägt für Afrika.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{badge.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" 
                alt="Luxus Lodge" 
                fill 
                className="object-cover"
                data-ai-hint="safari lodge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs">
              <p className="text-white font-bold text-lg leading-tight mb-4">"Unsere Herzen schlagen für Afrika."</p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight - Reduced Green */}
      <section className="py-20 bg-background text-foreground relative overflow-hidden border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/founder/800/800" 
                  alt="Samson Kyashama" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center rotate-12 shadow-2xl">
                <Quote className="w-10 h-10 text-white fill-current" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Der Visionär</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-foreground">
                  Maßgeschneidert von <br /><span className="text-primary">Samson Kyashama</span>
                </h2>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Geleitet von einem gebürtigen Tansanier und erfahrenen Safari-Experten, entwerfen wir Reisen, die Ihre kühnsten Träume übertreffen. Jede Safari und jede kulturelle Begegnung wird sorgfältig ausgewählt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-foreground">Lokale Expertise</p>
                    <p className="text-xs text-muted-foreground font-light">Tief verwurzelte Verbindung zum Land und seinen Menschen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-foreground">Individuelles Design</p>
                    <p className="text-xs text-muted-foreground font-light">Ihre Wünsche sind unser Bauplan für die Reise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] text-white relative overflow-hidden mx-4 md:mx-10 rounded-[3rem] md:rounded-[5rem] mb-12 shadow-2xl text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-3xl mx-auto relative z-10 px-4">
          <h2 className="font-headline text-4xl md:text-8xl font-bold mb-8 leading-tight">
            Bereit für das <br /><span className="text-primary">Abenteuer?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-2xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Willkommen im Herzen Afrikas – wo die Savanne niemals schläft und jeder Horizont ein Versprechen ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold">
                Geschichte beginnen <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors">
              Experten sprechen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}