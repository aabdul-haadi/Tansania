
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Quote,
  Award,
  Sparkles,
  ArrowRight,
  Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const team = [
  { name: "Manuela Jungas", role: "Team Mitglied", img: "https://picsum.photos/seed/manuela/400/400" },
  { name: "Susanne Stefaniack", role: "Team Mitglied", img: "https://picsum.photos/seed/susanne/400/400" },
  { name: "Petra Schönberger", role: "Team Mitglied", img: "https://picsum.photos/seed/petra/400/400" },
  { name: "Samson Kyashama", role: "Gründer & Experte", img: "https://picsum.photos/seed/samson/400/400" },
  { name: "Klaus Jungas", role: "Team Mitglied", img: "https://picsum.photos/seed/klaus/400/400" },
];

const guides = [
  { name: "Joachim Hugo", role: "Safari Guide", img: "https://picsum.photos/seed/joachim/400/400" },
  { name: "Emmanuel Mkama", role: "Safari Guide", img: "https://picsum.photos/seed/emmanuel/400/400" },
  { name: "Osbet Kihomwe", role: "Safari Guide", img: "https://picsum.photos/seed/osbet/400/400" },
  { name: "Salim Zawadi", role: "Safari Guide", img: "https://picsum.photos/seed/salim/400/400" },
  { name: "Iddi", role: "Safari Guide", img: "https://picsum.photos/seed/iddi/400/400" },
  { name: "James Martin", role: "Safari Guide", img: "https://picsum.photos/seed/james/400/400" },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* COMPACT DARK HERO */}
      <header className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920"
          alt="Afrikanische Savanne"
          fill
          priority
          className="object-cover opacity-30 brightness-50 scale-105"
          data-ai-hint="serengeti savannah"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-white mb-2">
              Ihr Schlüssel zum <br />
              <span className="text-primary">Herzen Afrikas</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 font-bold uppercase tracking-widest px-4 text-[10px] md:text-xs">
              Wir verbinden den Nil mit der Savanne – durch Abenteuer, die weit über das Gewöhnliche hinausgehen.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Intro Narrative */}
      <section className="py-12 md:py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Unsere Vision</span>
              <h2 className="text-secondary uppercase">
                Mehr als nur ein <br /><span className="text-primary">Urlaub</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-medium leading-relaxed uppercase tracking-widest text-xs md:text-sm">
              <p>
                Träumen Sie von einer Reise, die tiefer geht? Eine Reise, die Sie in die Seele eines Kontinents eintauchen lässt, reich an unberührter Natur, pulsierenden Kulturen und atemberaubenden Abenteuern?
              </p>
              <p className="text-secondary font-bold">
                Dann sind Sie bei Tansania Reiseabenteuer genau richtig! Wir sind nicht einfach nur ein Reiseveranstalter; wir sind Ihre Brücke zu authentischen Erlebnissen in Tansania, Kenia, Ruanda, Botswana, Namibia, Südafrika und an den Victoriafällen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Tansania", "Kenia", "Ruanda", "Botswana", "Namibia", "Südafrika"].map((dest, i) => (
                <div key={i} className="px-4 py-2 bg-white rounded-full border border-border shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{dest}</span>
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
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800" 
                alt="Luxus Safari Lodge" 
                fill 
                className="object-cover"
                data-ai-hint="safari lodge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs">
              <Quote className="w-8 h-8 text-white/20 mb-4" />
              <p className="text-white font-bold text-sm md:text-lg leading-tight mb-4 uppercase tracking-tight">"Unser Herz schlägt für Afrika – mit uns erleben Sie den Kontinent hautnah."</p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 md:py-24 bg-[#FDF7F2] text-secondary relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/samson-kyashama/800/800" 
                  alt="Samson Kyashama" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-2xl flex items-center justify-center rotate-12 shadow-2xl border border-white/10">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-10">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-3 block">Der Visionär</span>
                <h2 className="text-secondary uppercase">
                  Maßgeschneidert von <br /><span className="text-primary">Samson Kyashama</span>
                </h2>
              </div>
              <p className="text-secondary/80 font-medium leading-relaxed text-xs md:text-sm uppercase tracking-widest">
                Unter der Führung von Samson Kyashama, einem gebürtigen Tansanier und erfahrenen Safari-Experten, entwerfen wir Reisen, die Ihre kühnsten Träume übertreffen. Jede Safari, jede Besteigung und jedes kulturelle Erlebnis wird persönlich abgestimmt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-[10px] text-secondary uppercase tracking-widest">Lokale Expertise</p>
                    <p className="text-[10px] text-secondary/60 font-medium uppercase mt-1">Tief verwurzelt in Tansania.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-[10px] text-secondary uppercase tracking-widest">Einzigartige Erlebnisse</p>
                    <p className="text-[10px] text-secondary/60 font-medium uppercase mt-1">Abenteuer so individuell wie Sie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Hinter den Kulissen</span>
              <h2 className="text-secondary uppercase">Unser <span className="text-primary">Team</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
              Die Spezialisten in Berlin, die Ihre Träume in detaillierte Pläne verwandeln.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative aspect-square w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 shadow-lg border border-border/50">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
                </div>
                <h4 className="text-secondary uppercase leading-none mb-1 md:mb-2 text-xl">{member.name}</h4>
                <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-3 md:mb-4">{member.role}</p>
                <Button variant="link" className="h-auto p-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Mehr erfahren</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Die Experten im Busch</span>
              <h2 className="text-secondary uppercase">Unsere <span className="text-primary">Safari Guides</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
              Staatlich geprüfte Guides mit jahrelanger Erfahrung in der Wildnis Tansanias.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
            {guides.map((guide, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 md:mb-6 border-2 border-muted group-hover:border-primary/20 transition-colors shadow-inner">
                  <Image src={guide.img} alt={guide.name} fill className="object-cover" />
                </div>
                <h4 className="text-xs md:text-sm text-secondary uppercase leading-tight mb-1">{guide.name}</h4>
                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3">{guide.role}</p>
                <Button variant="ghost" size="sm" className="rounded-full text-[8px] font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">Details</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL LIGHT CTA */}
      <section className="py-16 md:py-32 bg-[#FDF7F2] relative overflow-hidden mx-4 md:mx-10 rounded-[2rem] md:rounded-[5rem] mb-12 shadow-2xl border border-border/50">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8 md:space-y-12"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Bereit für das Abenteuer?</span>
              <h2 className="text-secondary uppercase leading-none">
                Willkommen im <br /><span className="text-primary">Herzen Afrikas</span>
              </h2>
              <p className="text-secondary/60 text-xs md:text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">
                Dort, wo die Savanne niemals schläft und Ihre Träume Wirklichkeit werden.
              </p>
            </div>

            <a href="https://youtu.be/uVilAKUc8zE?si=7BCNh94EgfEfQtMc" target="_blank" rel="noopener noreferrer" className="block w-full max-w-3xl mx-auto group">
              <div className="relative aspect-video w-full rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden bg-muted border border-border shadow-2xl cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200" 
                  alt="Kilimandscharo Aufstieg" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint="mount kilimanjaro"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white drop-shadow-md">Kilimandscharo Video</p>
                </div>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-xl px-12 h-11 md:h-14 font-bold text-[10px] uppercase tracking-[0.3em] shadow-2xl group border-none">
                  Reise Planen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/60 hover:text-primary transition-colors py-4">
                Experten sprechen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
