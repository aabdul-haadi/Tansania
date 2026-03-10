
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  ChevronRight, 
  Server, 
  Fingerprint,
  Mail,
  Scale
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function DatenschutzPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-secondary pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Datenschutz
            </span>
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight uppercase">
              Datenschutz-<br /><span className="text-primary">Erklärung</span>
            </h1>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md w-fit mt-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">DSGVO Konform</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8 space-y-16">
            
            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-secondary uppercase">Einleitung</h2>
              <p className="text-muted-foreground font-bold leading-relaxed text-lg">
                Datenschutz hat einen besonders hohen Stellenwert für die Tansania Reiseabenteuer SDL GmbH. Eine Nutzung unserer Internetseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
              </p>
            </section>

            <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-border/50 space-y-8">
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold text-secondary uppercase">Cookies & Analyse</h2>
              </div>
              <p className="text-muted-foreground font-bold leading-relaxed text-sm md:text-base">
                Unsere Internetseiten verwenden Cookies. Zweck ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern und Angebote zu optimieren.
              </p>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold text-secondary uppercase">Ihre Rechte</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Recht auf Auskunft", "Recht auf Berichtigung", "Recht auf Löschung",
                  "Recht auf Datenübertragbarkeit", "Widerspruchsrecht", "Widerruf der Einwilligung"
                ].map((recht, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-border group hover:border-primary transition-colors">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="font-bold text-secondary text-sm">{recht}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-secondary text-white p-10 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="font-headline text-2xl font-bold uppercase">Verantwortliche Stelle</h3>
                  <div className="space-y-4 text-sm font-bold text-white/60">
                    <p className="font-bold text-white">Tansania Reiseabenteuer SDL GmbH</p>
                    <p>Bayerischer Platz 7<br />10779 Berlin, Germany</p>
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <p className="flex items-center gap-2 text-white"><Mail className="w-3.5 h-3.5 text-primary" /> info@tansania-reiseabenteuer.de</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
