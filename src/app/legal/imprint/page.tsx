
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
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ImpressumPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* Compact Dark Hero Section */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Herausgeber & Kontakt
            </span>
            <h1 className="text-white uppercase tracking-tighter leading-none">
              Impressum
            </h1>
            <p className="text-white/60 text-sm md:text-lg font-bold uppercase tracking-widest mt-6">
              Rechtliche Informationen und Kontaktdaten von Tansania Reiseabenteuer SDL.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <main className="lg:col-span-8 space-y-10">
            <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white border border-border/40">
              <CardContent className="p-8 md:p-12 space-y-12">
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-secondary uppercase tracking-tight leading-none">Unternehmensangaben</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Unternehmen</p>
                      <p className="font-bold text-secondary text-sm md:text-lg uppercase">Tansania Reiseabenteuer SDL GmbH</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Vertreten durch</p>
                      <p className="font-bold text-secondary text-sm md:text-lg uppercase">Samson Kyashama</p>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Geschäftsführer</p>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary" /> Sitz der Gesellschaft
                      </p>
                      <p className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed opacity-80">
                        Bayerischer Platz 7, 10779 Berlin, Germany
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-secondary uppercase tracking-tight leading-none">Kontakt</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefon</p>
                      <a href="tel:+493022608080" className="font-bold text-secondary hover:text-primary transition-colors text-sm md:text-lg uppercase tracking-tight">
                        +49 30 22608080
                      </a>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-Mail</p>
                      <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-secondary hover:text-primary transition-colors truncate block text-sm md:text-lg uppercase tracking-tight">
                        info@tansania-reiseabenteuer.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-secondary uppercase tracking-tight leading-none">Register & Steuern</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Registereintrag</p>
                      <p className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed opacity-80">
                        Handelsregister Neuruppin<br />
                        Registernummer: HRB 12250 NP
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Umsatzsteuer-ID</p>
                      <p className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed opacity-80">
                        DE319944951<br />
                        Gemäß §27a UStG
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-[2.5rem] bg-[#FDF7F2] border border-[#F0EBE0] overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-primary" />
                  <h3 className="text-secondary uppercase tracking-tight leading-none">Streitbeilegung</h3>
                </div>
                <div className="space-y-4 text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
                  <p>
                    Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen Online-Streitbeilegungs-Plattform hinzuweisen.
                  </p>
                  <div className="flex items-center gap-2 py-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <a href="http://ec.europa.eu/odr" target="_blank" className="text-secondary hover:text-primary flex items-center gap-1.5 transition-colors font-black">
                      Plattform besuchen <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <div className="bg-secondary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white uppercase leading-none tracking-tighter">Planen Sie Ihre <span className="text-primary">Traumreise</span></h3>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    Lassen Sie sich von unseren Experten in Berlin zu unvergesslichen Safaris beraten.
                  </p>
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-11 md:h-14 rounded-xl font-bold uppercase tracking-widest text-[9px] bg-primary text-white border-none shadow-xl transition-all group">
                      Anfrage senden <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
