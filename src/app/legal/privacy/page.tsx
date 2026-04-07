
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  ChevronRight, 
  Mail, 
  Scale
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function DatenschutzPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* COMPACT DARK HERO - SYNCED PROTOCOL */}
      <section className="bg-secondary pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-white uppercase leading-none tracking-tighter text-3xl md:text-6xl">
              Datenschutz
            </h1>
            <p className="max-w-2xl mx-auto text-[9px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
              Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8 space-y-12 md:space-y-20">
            
            <section className="space-y-6">
              <h2 className="text-secondary uppercase tracking-tight leading-none text-2xl md:text-4xl">Einleitung</h2>
              <p className="text-muted-foreground font-bold leading-relaxed text-xs md:text-lg uppercase tracking-widest opacity-80">
                Datenschutz hat einen besonders hohen Stellenwert für die Tansania Reiseabenteuer SDL GmbH. Eine Nutzung unserer Internetseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
              </p>
            </section>

            <section className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-sm border border-border/40 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h2 className="text-secondary uppercase tracking-tight leading-none text-xl md:text-3xl">Cookies & Analyse</h2>
              </div>
              <p className="text-muted-foreground font-bold text-[10px] md:text-xs uppercase tracking-widest leading-relaxed opacity-60">
                Unsere Internetseiten verwenden Cookies. Zweck ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern und Angebote zu optimieren.
              </p>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h2 className="text-secondary uppercase tracking-tight leading-none text-xl md:text-3xl">Ihre Rechte</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Recht auf Auskunft", "Recht auf Berichtigung", "Recht auf Löschung",
                  "Recht auf Datenübertragbarkeit", "Widerspruchsrecht", "Widerruf der Einwilligung"
                ].map((recht, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl border border-border/40 group hover:border-primary transition-all shadow-sm">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-bold text-secondary text-[9px] md:text-xs uppercase tracking-widest">{recht}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <Card className="border-none shadow-xl rounded-[2rem] md:rounded-[2.5rem] bg-secondary text-white p-8 md:p-10 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-6">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  <h3 className="text-white uppercase leading-none tracking-tight text-xl font-headline">Verantwortliche Stelle</h3>
                  <div className="space-y-4 text-[9px] md:text-[10px] font-bold text-white/60 uppercase tracking-widest leading-relaxed">
                    <p className="text-white font-black">Tansania Reiseabenteuer SDL GmbH</p>
                    <p>Bayerischer Platz 7<br />10779 Berlin, Germany</p>
                    <div className="pt-6 border-t border-white/10 space-y-3">
                      <p className="flex items-center gap-2.5 text-white">
                        <Mail className="w-3.5 h-3.5 text-primary" /> 
                        <span className="truncate">info@tansania-reiseabenteuer.de</span>
                      </p>
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
