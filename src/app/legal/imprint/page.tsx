"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  ArrowRight,
  Info,
  ExternalLink,
  ChevronRight,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ImpressumPage() {
  return (
    <div className="bg-background min-h-screen font-normal">
      {/* Compact Cinematic Hero */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Offizielle Registry
            </span>
            <h1 className="text-white tracking-tighter leading-none">
              Impressum
            </h1>
            <p className="text-white/60 text-sm md:text-lg font-bold uppercase tracking-widest mt-6 max-w-2xl">
              Gesetzliche Anbieterkennung und rechtliche Informationen von Tansania Reiseabenteuer SDL.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          <main className="lg:col-span-8 space-y-10">
            <Card className="border-none shadow-sm rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white border border-border/40">
              <CardContent className="p-8 md:p-12 space-y-12">
                
                {/* Corporate Data */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-secondary uppercase tracking-tight leading-none text-2xl md:text-3xl">Unternehmensangaben</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Firma</p>
                      <p className="font-bold text-secondary text-sm md:text-lg uppercase">Tansania Reiseabenteuer SDL GmbH</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Vertretungsberechtigt</p>
                      <p className="font-bold text-secondary text-sm md:text-lg uppercase">Samson Kyashama</p>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Geschäftsführer</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary" /> Sitz der Gesellschaft
                      </p>
                      <p className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed opacity-80">
                        Bayerischer Platz 7, 10779 Berlin, Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Contact Registry */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-secondary uppercase tracking-tight leading-none text-2xl md:text-3xl">Direktkontakt</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefon Berlin</p>
                      <a href="tel:+493022608080" className="font-bold text-secondary hover:text-primary transition-colors text-sm md:text-lg uppercase tracking-tight">
                        +49 30 22608080
                      </a>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Offizielles E-Mail</p>
                      <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-secondary hover:text-primary transition-colors truncate block text-sm md:text-lg uppercase tracking-tight">
                        info@tansania-reiseabenteuer.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Registration Info */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-secondary uppercase tracking-tight leading-none text-2xl md:text-3xl">Register & Steuern</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Registereintrag</p>
                      <p className="text-secondary font-bold text-[14px] leading-[20px] uppercase tracking-widest opacity-80">
                        Handelsregister Neuruppin<br />
                        Nummer: HRB 12250 NP
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Umsatzsteuer-ID</p>
                      <p className="text-secondary font-bold text-[14px] leading-[20px] uppercase tracking-widest opacity-80">
                        DE319944951<br />
                        Gemäß §27a UStG
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ODR Notice */}
            <Card className="border-none shadow-sm rounded-[2rem] md:rounded-[2.5rem] bg-white border border-border/40 overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-secondary uppercase tracking-tight leading-none text-xl">Online-Streitbeilegung</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground font-normal text-[14px] leading-[20px] uppercase tracking-widest opacity-80">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter http://ec.europa.eu/consumers/odr/ finden. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                  <div className="flex items-center gap-2 py-2">
                    <a 
                      href="http://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      className="text-secondary hover:text-primary flex items-center gap-2 transition-colors font-black text-[10px] uppercase tracking-widest border-b border-secondary/20 pb-1"
                    >
                      OS-PLATTFORM ÖFFNEN <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar Protocol */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="bg-secondary text-white p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-none">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                    <Compass className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white uppercase leading-none tracking-tighter text-2xl md:text-3xl">Ihre Reise <br /><span className="text-primary font-bold">nach Maß</span></h3>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                      Lassen Sie sich von unseren Experten in Berlin persönlich zu Ihrem Afrika-Abenteuer beraten.
                    </p>
                  </div>
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-12 md:h-14 rounded-xl font-bold uppercase tracking-widest text-[9px] bg-primary text-white border-none shadow-xl transition-all group">
                      ANFRAGE STARTEN <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
