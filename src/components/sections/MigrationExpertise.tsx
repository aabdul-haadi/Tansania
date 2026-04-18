
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const expertiseItems = [
  {
    title: "15+ Jahre lokale Erfahrung",
    desc: "Wir kennen die Nationalparks, Lodges und besten Beobachtungspunkte aus erster Hand."
  },
  {
    title: "Starkes Netzwerk in Arusha",
    desc: "Unser eigenes Team vor Ort sorgt für perfekte Abläufe und unmittelbare Unterstützung."
  },
  {
    title: "Handverlesene Luxus-Lodges",
    desc: "Exklusive Safari-Camps in den besten Lagen – sorgfältig ausgewählt für Ihren Komfort."
  },
  {
    title: "Individuelle Safari-Abenteuer",
    desc: "Ihre Reise wird persönlich geplant – perfekt abgestimmt auf die aktuelle Migration."
  }
];

export function MigrationExpertise() {
  return (
    <section className="pt-8 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                alt="Migration Safari" 
                fill 
                className="object-cover"
                data-ai-hint="zebra migration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-[2rem] shadow-2xl hidden md:block border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Geprüfte Sicherheit</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-normal">Drsf abgesichert</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight">
                Ihre Safari durch Tansania – individuell geplant
              </h2>
              <p className="text-muted-foreground font-normal text-[14px] leading-[20px] max-w-xl opacity-80">
                Wir sind Ihr Partner für außergewöhnliche Erlebnisse. Als spezialisierte Agentur entwerfen wir Routen, die den natürlichen Rhythmus der Tierwelt respektieren und Ihnen unvergessliche Momente garantieren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseItems.map((item, i) => (
                <div key={i} className="space-y-3 group text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                      <Check className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-base text-secondary group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[14px] leading-[20px] text-muted-foreground opacity-70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 text-left">
              <Link href="/trip-planner">
                <Button size="lg" className="rounded-xl px-8 h-14 font-bold text-xs shadow-xl border-none group">
                  Beratung anfragen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
