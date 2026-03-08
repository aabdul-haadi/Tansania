"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Users, 
  Leaf, 
  ArrowRight, 
  Sparkles,
  Quote,
  Award,
  Globe,
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
    <div className="bg-[#fdfcfb] min-h-screen font-body">
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
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-xl">
              Authentisch. Unvergesslich. Exklusiv.
            </Badge>
            <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl uppercase tracking-tighter">
              Ihr Schlüssel zum <br />
              <span className="text-primary">Herzen Afrikas</span>
            </h1>
            <p className="max-w-2xl mx-auto text-[10px] md:text-xl text-white/80 font-black uppercase tracking-widest leading-relaxed px-4">
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
            className="space-y-6 md:space-y-8"
          >
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Unsere Vision</span>
              <h2 className="font-headline text-2xl md:text-5xl font-bold leading-tight text-foreground uppercase tracking-tight">
                Mehr als nur ein <br /><span className="text-primary">Urlaub</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-bold leading-relaxed text-sm md:text-lg">
              <p>
                Träumen Sie von einer Reise, die tiefer geht? Eine Reise, die Sie in die Seele eines Kontinents eintauchen lässt, reich an unberührter Natur, pulsierenden Kulturen und atemberaubenden Abenteuern?
              </p>
              <p className="text-foreground">
                Dann sind Sie bei Tansania Reiseabenteuer genau richtig! Wir sind nicht einfach nur ein Reiseveranstalter; wir sind Ihre Brücke zu authentischen Erlebnissen in Tansania, Kenia, Ruanda, Botswana, Namibia, Südafrika und an den Victoriafällen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Tansania", "Kenia", "Ruanda", "Botswana", "Namibia", "Südafrika"].map((dest, i) => (
                <div key={i} className="px-4 py-2 bg-white rounded-full border border-border shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{dest}</span>
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
              <p className="text-white font-black text-sm md:text-lg leading-tight mb-4 uppercase tracking-tight">"Unser Herz schlägt für Afrika – mit uns erleben Sie den Kontinent hautnah."</p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/samson-kyashama/800/800" 
                  alt="Samson Kyashama" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-2xl flex items-center justify-center rotate-12 shadow-2xl border border-white/10">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-10">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Der Visionär</span>
                <h2 className="font-headline text-3xl md:text-6xl font-bold leading-none text-white uppercase tracking-tighter">
                  Maßgeschneidert von <br /><span className="text-primary">Samson Kyashama</span>
                </h2>
              </div>
              <p className="text-white font-bold leading-relaxed text-sm md:text-xl opacity-90">
                Unter der Führung von Samson Kyashama, einem gebürtigen Tansanier und erfahrenen Safari-Experten, entwerfen wir Reisen, die Ihre kühnsten Träume übertreffen. Jede Safari, jede Besteigung und jedes kulturelle Erlebnis wird persönlich abgestimmt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-[10px] md:text-xs text-white uppercase tracking-widest">Lokale Expertise</p>
                    <p className="text-[10px] md:text-sm text-white/60 font-bold uppercase mt-1">Tief verwurzelt in Tansania.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-[10px] md:text-xs text-white uppercase tracking-widest">Einzigartige Erlebnisse</p>
                    <p className="text-[10px] md:text-sm text-white/60 font-bold uppercase mt-1">Abenteuer so individuell wie Sie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Why Us */}
      <section className="py-16 md:py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 block">Unser Versprechen</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Warum Tansania <br /><span className="text-primary">Reiseabenteuer?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                icon: Globe, 
                title: "Persönliche Erfahrung", 
                desc: "Unser Team besteht aus leidenschaftlichen Afrika-Kennern und in Tansania geborenen Experten." 
              },
              { 
                icon: Compass, 
                title: "Maßgeschneidert", 
                desc: "Von luxuriösen Safaris bis zu Selbstfahrertouren – wir gestalten ihre Traumreise nach Maß." 
              },
              { 
                icon: Users, 
                title: "Authentizität", 
                desc: "Erleben Sie echte Begegnungen weit entfernt vom Massentourismus." 
              },
              { 
                icon: Leaf, 
                title: "Nachhaltigkeit", 
                desc: "Reisen Sie verantwortungsbewusst und unterstützen Sie lokale Gemeinschaften." 
              }
            ].map((value, i) => (
              <div key={i} className="p-8 md:p-10 bg-white rounded-[2rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <value.icon className="w-6 h-6 text-muted-foreground group-hover:text-white" />
                </div>
                <h4 className="font-headline text-lg md:text-xl font-bold text-secondary mb-4 uppercase leading-tight">{value.title}</h4>
                <p className="text-[10px] md:text-xs text-muted-foreground font-black uppercase tracking-widest leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Hinter den Kulissen</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Unser <span className="text-primary">Team</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-sm font-black uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
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
                  <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity" />
                </div>
                <h4 className="font-headline text-sm md:text-xl font-bold text-secondary uppercase leading-none mb-1 md:mb-2">{member.name}</h4>
                <p className="text-[7px] md:text-9px font-black text-primary uppercase tracking-widest mb-3 md:mb-4">{member.role}</p>
                <Button variant="link" className="h-auto p-0 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Mehr erfahren</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Die Experten im Busch</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary uppercase tracking-tighter">Unsere <span className="text-primary">Safari Guides</span></h2>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-sm font-black uppercase tracking-widest max-w-xs border-l-2 border-primary/20 pl-6 hidden md:block">
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
                  <Image src={guide.img} alt={guide.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="font-headline text-xs md:text-sm font-bold text-secondary uppercase leading-tight mb-1">{guide.name}</h4>
                <p className="text-[6px] md:text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-3">{guide.role}</p>
                <Button variant="ghost" className="h-6 md:h-8 px-3 rounded-full text-[6px] md:text-[8px] font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">Details</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / Final CTA */}
      <section className="py-16 md:py-32 bg-secondary relative overflow-hidden mx-4 md:mx-10 rounded-[2rem] md:rounded-[5rem] mb-12 shadow-2xl">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8 md:space-y-12"
          >
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Bereit für das Abenteuer?</span>
              <h2 className="font-headline text-3xl md:text-7xl font-bold text-white uppercase leading-none tracking-tighter">
                Willkommen im <br /><span className="text-primary">Herzen Afrikas</span>
              </h2>
              <p className="text-white/80 text-[10px] md:text-xl font-black uppercase tracking-widest max-w-2xl mx-auto">
                Dort, wo die Savanne niemals schläft und Ihre Träume Wirklichkeit werden.
              </p>
            </div>

            {/* Video Placeholder Style Card */}
            <div className="relative aspect-video w-full rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden bg-black/40 border border-white/10 shadow-2xl group cursor-pointer">
              <Image 
                src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200" 
                alt="Kilimandscharo Aufstieg" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="mount kilimanjaro"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
                </div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white">Kilimandscharo Video</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/trip-planner" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-12 h-14 md:h-16 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl group">
                  Reise Planen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/80 hover:text-primary transition-colors py-4">
                Experten sprechen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
