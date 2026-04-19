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
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ImpressumPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: Official Entry */}
      <section className="bg-secondary pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold text-[10px] block tracking-normal">
              Rechtliche Informationen
            </span>
            <h1 className="font-headline text-white text-4xl md:text-7xl leading-none tracking-tight">
              Impressum
            </h1>
            <p className="text-white/60 text-sm md:text-lg font-normal leading-relaxed mt-6 max-w-2xl">
              Gesetzliche Anbieterkennung und rechtliche Informationen von Tansania Reiseabenteuer SDL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Content Registry: Natural Theme */}
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          <main className="lg:col-span-8 space-y-8">
            <Card className="border border-border/40 shadow-sm rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12 space-y-12">
                
                {/* Corporate Data */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Unternehmensangaben</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary mb-1">Firma</p>
                      <p className="font-bold text-secondary text-sm md:text-lg">Tansania Reiseabenteuer SDL GmbH</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary mb-1">Vertretungsberechtigt</p>
                      <p className="font-bold text-secondary text-sm md:text-lg">Samson Kyashama</p>
                      <p className="text-[11px] text-muted-foreground font-bold">Geschäftsführer</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <p className="text-[10px] font-bold text-primary flex items-center gap-2 mb-1">
                        <MapPin className="w-3.5 h-3.5" /> Sitz der Gesellschaft
                      </p>
                      <p className="text-secondary font-bold text-[14px] leading-[20px]">
                        Bayerischer Platz 7, 10779 Berlin, Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Contact Registry */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Direktkontakt</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary mb-1">Telefon Berlin</p>
                      <a href="tel:+493022608080" className="font-bold text-secondary hover:text-primary transition-colors text-sm md:text-lg">
                        +49 30 22608080
                      </a>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary mb-1">Offizielles E-Mail</p>
                      <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-secondary hover:text-primary transition-colors truncate block text-sm md:text-lg">
                        info@tansania-reiseabenteuer.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Registration Info */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Register & Steuern</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary mb-1">Registereintrag</p>
                      <p className="text-secondary font-bold text-[14px] leading-[20px]">
                        Handelsregister Neuruppin<br />
                        Nummer: HRB 12250 NP
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-primary mb-1">Umsatzsteuer-ID</p>
                      <p className="text-secondary font-bold text-[14px] leading-[20px]">
                        DE319944951<br />
                        Gemäß §27a UStG
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ODR Notice */}
            <Card className="border border-border/40 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl text-secondary">Online-Streitbeilegung</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground font-normal text-[14px] leading-[22px]">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter http://ec.europa.eu/consumers/odr/ finden. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                  <div className="flex items-center gap-2 py-2">
                    <a 
                      href="http://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      className="text-secondary hover:text-primary flex items-center gap-2 transition-colors font-bold text-xs border-b border-primary/20 pb-1"
                    >
                      OS-Plattform öffnen <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar Architecture */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                  <Compass className="w-48 h-48 text-secondary" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                    <Compass className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-4 text-left">
                    <h3 className="font-headline text-2xl md:text-3xl text-secondary leading-tight">Ihre Reise <br /><span className="text-primary">nach Maß</span></h3>
                    <p className="text-muted-foreground text-[14px] leading-[20px] font-normal">
                      Lassen Sie sich von unseren Experten in Berlin persönlich zu Ihrem Afrika-Abenteuer beraten.
                    </p>
                  </div>
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-12 md:h-14 rounded-xl font-bold text-[11px] bg-secondary text-white hover:bg-primary border-none shadow-xl transition-all group">
                      Anfrage starten <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
