"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  Waves, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Wine,
  ShieldCheck,
  MapPin,
  ChevronRight
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
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Re-Engineered Hero to Match Screenshot Specification */}
      <section className="bg-white pt-24 md:pt-32">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top Registry Labels: High-Contrast Flex Protocol */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-secondary">
              Luxus Safari für Paare in Tansania
            </span>
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-primary">
              Love on Safari
            </span>
          </div>

          {/* Centered Narrative Protocol */}
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-3xl md:text-5xl lg:text-6xl font-normal text-secondary leading-tight"
            >
              Abenteuer und Romantik im Herzen Tansanias
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-3xl mx-auto font-normal opacity-90"
            >
              Erleben Sie die Weite der Serengeti, die besondere Atmosphäre des Ngorongoro-Kraters und im Anschluss Sansibar mit seinem warmen, türkisfarbenen Meer. Privat geplant und mit ausreichend Zeit für Sie als Paar.
            </motion.p>
          </div>
        </div>

        {/* Full-Width Cinematic Visual Hub */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full aspect-[21/9] min-h-[400px] md:min-h-[650px]">
            <Image 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
              alt="Abenteuer und Romantik in Tansania" 
              fill 
              priority
              className="object-cover brightness-95"
              data-ai-hint="safari couple"
            />
            {/* Subtle Gradient Shadow Base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Center-Aligned Trigger Box: Same as SS */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
            <Button 
              onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-secondary border border-border/60 hover:bg-secondary hover:text-white px-8 md:px-12 h-12 md:h-14 font-bold text-[10px] uppercase tracking-widest shadow-2xl transition-all duration-500 rounded-none border-b-2 border-b-primary/40"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* 02 Narrative Logic Section */}
      <section className="py-16 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest block">Das Versprechen</span>
              <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary leading-tight">
                Ein Abenteuer für <br /><span className="text-primary">zwei Herzen</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-normal text-[14px] leading-[22px] md:text-lg md:leading-[28px] opacity-90">
              <p>
                Es gibt Momente im Leben, die einen festen Rahmen verdienen. Eine Safari durch die unendlichen Weiten Tansanias, kombiniert mit der tropischen Stille Sansibars, ist das ultimative Symbol für einen neuen gemeinsamen Lebensabschnitt.
              </p>
              <p>
                Wir bei Tansania Reiseabenteuer verstehen, dass Luxus nicht nur goldene Armaturen bedeutet, sondern absolute Privatsphäre, ungestörte Ausblicke und die Freiheit, den eigenen Rhythmus zu bestimmen.
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
               <div className="flex flex-col">
                 <span className="text-2xl font-headline font-bold text-secondary">100%</span>
                 <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Privat geführt</span>
               </div>
               <div className="w-px h-10 bg-border" />
               <div className="flex flex-col">
                 <span className="text-2xl font-headline font-bold text-secondary">Bespoke</span>
                 <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Planning</span>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-muted border border-border/40">
              <Image 
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1200" 
                alt="Romantische Lodge" 
                fill 
                className="object-cover"
                data-ai-hint="luxury safari lodge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-xl">
                  <Heart className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest">Honeymoon Signature</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Private Sanctuaries Registry - Horizontal Cards */}
      <section className="py-16 md:py-32 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary">Private Refugien</h2>
            <p className="text-muted-foreground font-normal text-sm md:text-lg max-w-2xl mx-auto opacity-70">
              Erlebnisse, die wir exklusiv für Paare kuratiert haben.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-2xl border border-border/40 shadow-sm overflow-hidden bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[45%] relative aspect-video lg:aspect-auto min-h-[300px] overflow-hidden">
                      <Image 
                        src={exp.img} 
                        alt={exp.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        data-ai-hint={exp.hint}
                      />
                    </div>
                    <CardContent className="flex-1 p-8 md:p-12 flex flex-col justify-center text-left">
                      <div className="space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-headline text-2xl md:text-4xl font-normal text-secondary tracking-tight">{exp.title}</h3>
                          <p className="text-muted-foreground font-normal text-[14px] leading-[22px] md:text-base opacity-80 max-w-md">
                            {exp.desc}
                          </p>
                        </div>
                        <div className="pt-4 flex items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Inklusive Service</span>
                          <div className="h-px w-8 bg-primary/30" />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Expert Quote Section */}
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
               <p className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Samson Kyashama</p>
               <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Founder & Africa Expert</p>
            </div>
            <div className="w-12 h-px bg-primary/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 05 Authority Registry */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, t: "Gesicherte Träume", d: "Durch die DRSF-Mitgliedschaft sind Ihre Anzahlungen und die Reise zu 100% abgesichert." },
              { icon: Compass, t: "Eigene Guides", d: "Keine Subunternehmer. Unsere Guides sind Teil der Familie und kennen jeden geheimen Spot." },
              { icon: MapPin, t: "Direktkontakt", d: "Ein fester Ansprechpartner in Berlin begleitet Sie von der ersten Idee bis zur Rückkehr." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center mx-auto text-primary shadow-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-headline text-xl md:text-2xl font-normal text-secondary uppercase tracking-tight">{item.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal opacity-70 px-4">{item.d}</p>
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
