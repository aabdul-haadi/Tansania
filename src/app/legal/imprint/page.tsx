
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
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ImpressumPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Dark Header for Navbar Contrast */}
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Rechtliches
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

      <div className="container mx-auto px-4 max-w-5xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-12">
            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-border/50 space-y-10">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-secondary">
                  <Scale className="w-6 h-6 text-primary" />
                  <h2 className="font-headline text-2xl font-bold">Unternehmensangaben</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Unternehmen</p>
                    <p className="font-bold text-secondary">Tansania Reiseabenteuer SDL GmbH</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Vertreten durch</p>
                    <p className="font-bold text-secondary">Geschäftsführer Samson Kyashama</p>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-primary" /> Adresse
                    </p>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Bayerischer Platz 7<br />
                      10779 Berlin
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-muted" />

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone className="w-6 h-6 text-primary" />
                  <h2 className="font-headline text-2xl font-bold">Kontakt</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefon</p>
                    <a href="tel:+03022608080" className="font-bold text-secondary hover:text-primary transition-colors">
                      +030 22608080
                    </a>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-Mail</p>
                    <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-secondary hover:text-primary transition-colors truncate block">
                      info@tansania-reiseabenteuer.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-muted" />

              {/* Register Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-secondary">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="font-headline text-2xl font-bold">Register & Steuern</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
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
            </section>

            {/* Dispute Resolution */}
            <section className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-primary/10 space-y-6">
              <div className="flex items-center gap-3 text-secondary">
                <Info className="w-6 h-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold">Streitbeilegung</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen Online-Streitbeilegungs-Plattform hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden kann, ohne dass ein Gericht eingeschaltet werden muss. Für die Einrichtung der Plattform ist die Europäische Kommission zuständig. Die Europäische Online-Streitbeilegungs-Plattform ist hier zu finden: <a href="http://ec.europa.eu/odr" target="_blank" className="text-primary font-bold hover:underline">http://ec.europa.eu/odr</a>
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                Wir weisen darauf hin, dass wir nicht bereit sind, uns am Streitbeilegungsverfahren im Rahmen der Europäischen Online-Streitbeilegungs-Plattform zu beteiligen. Nutzen Sie zur Kontaktaufnahme bitte unsere obige E-Mail und Telefonnummer.
              </p>
            </section>
          </main>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-secondary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden sticky top-24">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-6">
                <h3 className="font-headline text-3xl font-bold leading-tight">Planen Sie Ihre <span className="text-primary italic">Traumreise</span></h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Lassen Sie sich von unseren Experten zu unvergesslichen Safaris und Kilimandscharo-Besteigungen beraten.
                </p>
                <Link href="/trip-planner" className="block">
                  <Button className="w-full h-14 rounded-xl font-bold bg-primary text-white hover:bg-white hover:text-black border-none shadow-xl transition-all">
                    Anfrage senden <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Schnellzugriff</p>
                  <ul className="space-y-2 text-xs font-bold">
                    <li><Link href="/" className="text-white/40 hover:text-white transition-colors">Startseite</Link></li>
                    <li><Link href="/blog" className="text-white/40 hover:text-white transition-colors">Reiseblog</Link></li>
                    <li><Link href="/contact" className="text-white/40 hover:text-white transition-colors">Kontaktformular</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
