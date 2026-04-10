"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  ChevronRight, 
  Mail, 
  Scale,
  Lock,
  Database,
  UserCheck,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const privacyRights = [
  "Auskunftsrecht gemäß Art. 15 DSGVO",
  "Berichtigungsrecht gemäß Art. 16 DSGVO",
  "Löschungsrecht gemäß Art. 17 DSGVO",
  "Einschränkung der Verarbeitung (Art. 18)",
  "Datenübertragbarkeit gemäß Art. 20",
  "Widerspruchsrecht gemäß Art. 21 DSGVO"
];

export default function DatenschutzPage() {
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
              Security Protocol
            </span>
            <h1 className="text-white tracking-tighter leading-none">
              Datenschutzerklärung
            </h1>
            <p className="text-white/60 text-sm md:text-lg font-bold uppercase tracking-widest mt-6 max-w-2xl">
              Informationen zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten gemäß der DSGVO.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <main className="lg:col-span-8 space-y-12 md:space-y-16">
            
            {/* Intro Narrative */}
            <section className="space-y-6">
              <h2 className="text-secondary uppercase tracking-tight leading-none text-2xl md:text-4xl">Grundlagen</h2>
              <p className="text-muted-foreground font-normal text-[14px] leading-[22px] uppercase tracking-widest opacity-80">
                Der Schutz Ihrer Privatsphäre bei der Nutzung unserer Webseite ist uns ein wichtiges Anliegen. Wir halten uns strikt an die gesetzlichen Bestimmungen der Datenschutzgrundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Nachfolgend informieren wir Sie über die Art, den Umfang und den Zweck der Erhebung und Verwendung Ihrer Daten.
              </p>
            </section>

            {/* Technical Blocks */}
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-border/40 space-y-6 group hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                    <Eye className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-secondary uppercase tracking-tight text-xl md:text-2xl">Cookies & Tracking</h3>
                </div>
                <p className="text-muted-foreground font-normal text-[13px] leading-[20px] uppercase tracking-widest opacity-70">
                  Unsere Webseite verwendet technische Cookies, die für den Betrieb und die Sicherheit der Seite notwendig sind. Analyse-Tools werden nur mit Ihrer ausdrücklichen Einwilligung zur Optimierung unseres Angebots eingesetzt.
                </p>
              </Card>

              <Card className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-border/40 space-y-6 group hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                    <Lock className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-secondary uppercase tracking-tight text-xl md:text-2xl">SSL-Verschlüsselung</h3>
                </div>
                <p className="text-muted-foreground font-normal text-[13px] leading-[20px] uppercase tracking-widest opacity-70">
                  Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z.B. SSL/TLS) über HTTPS.
                </p>
              </Card>
            </div>

            {/* Rights Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-secondary uppercase tracking-tight leading-none text-2xl md:text-3xl">Ihre Betroffenenrechte</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {privacyRights.map((recht, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border/40 group hover:border-primary transition-all shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    <span className="font-bold text-secondary text-[10px] md:text-xs uppercase tracking-widest leading-tight">{recht}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Contact Node */}
            <section className="p-8 md:p-12 bg-muted/20 rounded-[2.5rem] border border-border/50">
              <div className="flex items-start gap-6">
                <Mail className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-secondary uppercase tracking-tight text-xl">Fragen zum Datenschutz?</h3>
                  <p className="text-muted-foreground font-normal text-[13px] leading-[20px] uppercase tracking-widest opacity-80">
                    Sollten Sie Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten haben, wenden Sie sich bitte direkt an unseren Datenschutzverantwortlichen unter der im Impressum angegebenen Adresse.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Responsible Body Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <Card className="border-none shadow-2xl rounded-[2.5rem] bg-secondary text-white p-8 md:p-10 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/20 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-white uppercase leading-none tracking-tight text-xl font-headline">Verantwortliche Stelle</h3>
                    
                    <div className="space-y-4 text-[10px] font-bold text-white/60 uppercase tracking-widest leading-relaxed">
                      <p className="text-white font-black text-sm">Tansania Reiseabenteuer SDL GmbH</p>
                      <p>Bayerischer Platz 7<br />10779 Berlin, Deutschland</p>
                      
                      <div className="pt-6 border-t border-white/10 space-y-4">
                        <div className="flex items-center gap-3 text-white">
                          <Mail className="w-4 h-4 text-primary" /> 
                          <span className="truncate text-[11px] font-black">info@tansania-reiseabenteuer.de</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Globe className="w-4 h-4 text-primary" /> 
                          <span className="text-[11px] font-black">tansania-reiseabenteuer.de</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-[8px] font-black uppercase text-white/30 tracking-[0.4em]">Registry ID: SDL-PRIVACY-2026</p>
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
