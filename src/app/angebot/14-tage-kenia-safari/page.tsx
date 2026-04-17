"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Send, 
  Search, 
  Gift, 
  CheckCircle2, 
  MapPin, 
  Home, 
  Heart, 
  Star, 
  ArrowRight,
  Compass,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function KeniaLeadPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-4xl space-y-16">
        
        {/* Header Section */}
        <header className="text-center space-y-6">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-headline font-bold text-[10px] uppercase tracking-tighter text-secondary">Tansania</span>
                <span className="font-headline font-bold text-[10px] uppercase tracking-tighter text-primary">Reiseabenteuer</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              <span className="text-primary">Persönlich geplant.</span> <span className="text-primary">Sorgfältig</span> umgesetzt.
            </p>
            <h1 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tight leading-tight">
              14 Tage Kenia Safari & Diani Beach
            </h1>
            <p className="text-muted-foreground text-xs md:text-base font-normal tracking-widest max-w-2xl mx-auto opacity-80">
              Erlebe die Big Five, handverlesene Lodges und entspannte Tage am Diani Beach. Fragt jetzt unverbindlich euer persönliches Reiseangebot an.
            </p>
          </div>
        </header>

        {/* Form & Trust Section */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-sm md:text-lg font-bold text-secondary">
              Jetzt persönliches Angebot für eure Kenia Safari & Diani Beach Reise anfragen
            </h3>
            <p className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Unverbindlich, persönlich und auf eure Wünsche abgestimmt.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-border/50 relative">
            <iframe
              src="https://app.tansania-reiseabenteuer.de/forms/embed/d54e9b2ee319416a81cf32551a1bc3d3"
              className="w-full min-h-[600px] border-none"
              scrolling="no"
              title="Kenia Safari Anfrage"
            />
            
            {/* Trust Footer inside Form Card */}
            <div className="p-6 md:p-8 bg-muted/5 border-t border-border/50 flex flex-col items-center gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-primary">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    1.200+ Safari-Touristen erfolgreich begleitet
                  </p>
                </div>
                <div className="h-4 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">DRSF Abgesichert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex justify-center items-center gap-8 opacity-40 grayscale filter">
            <div className="text-[10px] font-black border border-secondary px-3 py-1 rounded">DRV</div>
            <div className="text-[10px] font-black border border-secondary px-3 py-1 rounded">HANSE</div>
            <div className="text-[10px] font-black border border-secondary px-3 py-1 rounded">DRSF</div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 space-y-12 text-center">
          <h2 className="font-headline text-xl md:text-2xl font-normal text-secondary uppercase tracking-tight">So geht es weiter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px border-t-2 border-dashed border-primary/20 -translate-y-1/2" />
            
            {[
              { icon: Send, label: "Anfrage senden" },
              { icon: Search, label: "Verfügbarkeit prüfen" },
              { icon: Gift, label: "Angebot erhalten" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                  <step.icon className="w-7 h-7" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{step.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-12 space-y-12">
          <h2 className="font-headline text-xl md:text-2xl font-normal text-secondary text-center uppercase tracking-tight">
            Warum ihr euer Angebot bei uns anfragen solltet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle2, title: "15+ Jahre Afrika-Erfahrung", desc: "Wir kennen die besten Parks, Lodges und Safari-Guides aus erster Hand." },
              { icon: MapPin, title: "Starkes Netzwerk vor Ort", desc: "Verlässliche Partner in ganz Kenia - für eure Sicherheit und beste Preise." },
              { icon: Home, title: "Ausgewählte Lodges & Camps", desc: "Von komfortabel bis luxuriös. Wir finden die perfekte Unterkunft für euch." },
              { icon: Heart, title: "Persönlich geplante Kenia-Reisen", desc: "Keine Massenabfertigung. Jedes Angebot wird individuell auf eure Wünsche zugeschnitten." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-border shadow-sm flex items-start gap-5 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-secondary uppercase leading-none">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground font-normal leading-relaxed tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Visual & CTA */}
        <section className="py-12 space-y-12 text-center">
          <h2 className="font-headline text-xl md:text-2xl font-normal text-secondary uppercase tracking-tight">
            Safari-Abenteuer und entspannte Tage am Diani Beach
          </h2>
          
          <div className="relative aspect-square md:aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
            <Image 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
              alt="Löwenbaby Kenia" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              data-ai-hint="lion cub"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground text-xs md:text-sm font-normal tracking-widest max-w-xl mx-auto leading-relaxed opacity-80">
              Von beeindruckenden Tierbeobachtungen bis zu entspannten Tagen am Diani Beach verbindet diese Reise Abenteuer, Komfort und Erholung auf besondere Weise.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Button size="xl" className="rounded-xl px-12 h-16 bg-primary text-white font-bold text-xs md:text-sm uppercase tracking-[0.3em] shadow-2xl group transition-all border-none">
                Unverbindliches Angebot anfragen <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                Unverbindlich anfragen. Persönlich beraten. Individuell geplant.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
