"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  Waves, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Wine,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

const experiences = [
  {
    title: "Dinner unter den Sternen",
    desc: "Ein exklusives Fünf-Gänge-Menü mitten in der Savanne, nur von Kerzen und dem Kreuz des Südens beleuchtet.",
    icon: Wine,
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "safari dinner"
  },
  {
    title: "Private Beach Sanctuary",
    desc: "Ihre eigene Villa auf Sansibar mit direktem Zugang zum Ozean und ungestörter Privatsphäre.",
    icon: Waves,
    img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
    hint: "zanzibar villa"
  },
  {
    title: "Morgendliche Ballon-Safari",
    desc: "Gleiten Sie schweigend über die Serengeti, während die Sonne aufgeht und die Natur unter Ihnen erwacht.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    hint: "safari balloon"
  }
];

export default function LoveOnSafariPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 HIGH-PRESTIGE HERO: COMPACTED NARRATIVE HUB */}
      <section className="bg-white pt-24 md:pt-28">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Top Registry Labels - Centered on Mobile, Split on Desktop */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 mb-4">
            <span className="text-secondary font-bold text-[10px] md:text-[12px] tracking-[0.3em] text-center md:text-left">
              Luxus Safari für Paare in Tansania
            </span>
            <span className="text-primary font-bold text-[10px] md:text-[12px] tracking-[0.3em] text-center md:text-right">
              Love on Safari
            </span>
          </div>

          {/* Centered Narrative Block - Compacted Layout */}
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-10 md:mb-14">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-2xl md:text-4xl font-bold text-secondary leading-tight tracking-tight"
            >
              Abenteuer und Romantik im Herzen Tansanias
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-4xl mx-auto font-normal uppercase tracking-widest"
            >
              Erleben Sie die Weite der Serengeti, die besondere Atmosphäre des Ngorongoro-Kraters und im Anschluss Sansibar mit seinem warmen, türkisfarbenen Meer. Privat geplant und mit ausreichend Zeit für Sie als Paar.
            </motion.p>
          </div>
        </div>

        {/* Visual Hub: Full-Width Cinematic Frame */}
        <div className="relative w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[21/9] min-h-[350px] overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
              alt="Love on Safari Experience" 
              fill 
              priority
              className="object-cover brightness-[0.85]"
              data-ai-hint="safari couple"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Centered Overlapping Action Protocol */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
            <Button 
              onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-secondary hover:bg-secondary hover:text-white px-8 md:px-14 h-12 md:h-16 font-bold text-[9px] md:text-[10px] tracking-[0.2em] shadow-2xl transition-all duration-500 rounded-none border border-secondary"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* 02 INTRO SECTION: REPLICA OF PROVIDED REFERENCE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-5xl font-bold text-secondary tracking-tight"
            >
              Wenn nur noch das Wir zählt.
            </motion.h2>
            <div className="w-16 h-0.5 bg-primary mx-auto opacity-40" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal max-w-3xl mx-auto"
          >
            Es gibt Reisen, die man sieht, und solche, die man spürt. Wenn Sie morgens ganz entspannt zur Safari aufbrechen, 
            ohne Eile, ohne Ablenkung, zählt nur dieser Moment: Ihre gemeinsame Zeit. Die Natur übernimmt den Rest – und 
            macht daraus Erinnerungen, die bleiben.
          </motion.p>

          <div className="relative pt-10 group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#FDFCFB]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
                alt="Romantic Safari Moment" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="safari couple sunset"
              />
            </motion.div>
            
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 w-[90%] sm:w-auto">
              <Button 
                onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-secondary text-white w-full sm:px-12 h-12 md:h-14 font-bold text-[10px] uppercase tracking-widest border-none shadow-2xl transition-all"
              >
                JETZT REISE ANFRAGEN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 03 PRIVATE SANCTUARIES: IMAGE CARD SECTION */}
      <section className="py-16 md:py-24 bg-[#FDFCFB] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">Private Refugien</h2>
            <p className="text-muted-foreground font-normal text-xs md:text-sm uppercase tracking-widest opacity-60">
              Exklusiv für Paare kuratierte Erlebnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-[1.5rem] border border-border/40 shadow-sm overflow-hidden bg-white hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image 
                      src={exp.img} 
                      alt={exp.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={exp.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow text-left space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary tracking-tight">{exp.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-[14px] leading-[22px] font-normal opacity-80 flex-grow">
                      {exp.desc}
                    </p>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-[9px] font-black tracking-widest text-primary uppercase">Inklusive Service</span>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 EXPERT QUOTE SECTION */}
      <section className="py-24 md:py-40 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-12 h-px bg-primary/40 mx-auto" />
            <h2 className="font-headline text-3xl md:text-6xl font-normal leading-tight italic">
              „Die Savanne flüstert ihre Geschichten nur denen zu, die sich Zeit für die Stille nehmen.“
            </h2>
            <div className="flex flex-col items-center gap-4">
               <p className="text-primary font-bold text-xs tracking-[0.4em]">Samson Kyashama</p>
               <p className="text-white/40 text-[10px] font-bold tracking-widest">Founder & Africa Expert</p>
            </div>
            <div className="w-12 h-px bg-primary/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 05 AUTHORITY REGISTRY */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, t: "Gesicherte Träume", d: "Durch die DRSF-Mitgliedschaft sind Ihre Anzahlungen und die Reise zu 100% abgesichert." },
              { icon: Compass, t: "Eigene Guides", d: "Keine Subunternehmer. Unsere Guides sind Teil der Familie und kennen jeden geheimen Spot." },
              { icon: MapPin, t: "Direktkontakt", d: "Ein fester Ansprechpartner in Berlin begleitet Sie von der ersten Idee bis zur Rückkehr." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center mx-auto text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-xl md:text-2xl font-normal text-secondary tracking-tight">{item.t}</h4>
                  <p className="text-[14px] leading-[22px] text-muted-foreground font-normal opacity-70 px-4">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Inquiry Protocol */}
      <section id="inquiry" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
