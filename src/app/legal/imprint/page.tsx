
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
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
    <div className="bg-background min-h-screen">
      {/* Cinematic Dark Header */}
      <section className="bg-secondary pt-32 pb-20 relative overflow-hidden">
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
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight">
              Impressum
            </h1>
            <p className="text-white/60 text-lg font-light max-w-2xl">
              Rechtliche Informationen und Kontaktdaten von Tansania Reiseabenteuer.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Legal Content */}
          <main className="lg:col-span-8 space-y-10">
            <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12 space-y-12">
                
                {/* Section: Company */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-secondary">Unternehmensangaben</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Unternehmen</p>
                      <p className="font-bold text-secondary text-lg">Tansania Reiseabenteuer SDL GmbH</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Vertreten durch</p>
                      <p className="font-bold text-secondary text-lg">Samson Kyashama</p>
                      <p className="text-xs text-muted-foreground">Geschäftsführer</p>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary" /> Sitz der Gesellschaft
                      </p>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Bayerischer Platz 7, 10779 Berlin
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-muted" />

                {/* Section: Contact */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-secondary">Kontakt</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefon</p>
                      <a href="tel:+03022608080" className="font-bold text-secondary hover:text-primary transition-colors text-lg">
                        +030 22608080
                      </a>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-Mail</p>
                      <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-secondary hover:text-primary transition-colors truncate block text-lg">
                        info@tansania-reiseabenteuer.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-muted" />

                {/* Section: Registers */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-secondary">Register & Steuern</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Registereintrag</p>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Handelsregister Neuruppin<br />
                        Registernummer: HRB 12250 NP
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Umsatzsteuer-ID</p>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        DE319944951<br />
                        Gemäß §27a UStG
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ODR Notice */}
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-primary/5 border border-primary/10 overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-primary" />
                  <h3 className="font-headline text-2xl font-bold text-secondary">Streitbeilegung</h3>
                </div>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  <p>
                    Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen Online-Streitbeilegungs-Plattform hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden kann, ohne dass ein Gericht eingeschaltet werden muss.
                  </p>
                  <div className="flex items-center gap-2 py-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <a href="http://ec.europa.eu/odr" target="_blank" className="font-bold text-secondary hover:text-primary flex items-center gap-1.5 transition-colors">
                      Plattform besuchen <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="italic">
                    Hinweis: Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Trip Planner CTA */}
              <div className="bg-secondary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-6">
                  <h3 className="font-headline text-3xl font-bold leading-tight">Planen Sie Ihre <span className="text-primary italic">Traumreise</span></h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    Lassen Sie sich von unseren Experten zu unvergesslichen Safaris und Kilimandscharo-Besteigungen beraten.
                  </p>
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-14 rounded-xl font-bold bg-primary text-white border-none shadow-xl transition-all group">
                      Jetzt Anfrage senden <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="border-none shadow-sm rounded-[2.5rem] p-8">
                <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Schnellzugriff</h4>
                <ul className="space-y-4">
                  {[
                    { label: 'Startseite', href: '/' },
                    { label: 'Kontaktformular', href: '/contact' },
                    { label: 'Reiseblog', href: '/blog' }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="group flex items-center justify-between text-sm font-bold text-secondary hover:text-primary transition-colors">
                        {link.label}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
