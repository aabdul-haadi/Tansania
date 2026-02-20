
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Database, 
  Eye, 
  ChevronRight, 
  Server, 
  Globe,
  Bell,
  Fingerprint,
  Mail,
  Scale
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function DatenschutzPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Cinematic Dark Header */}
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
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight">
              Datenschutz-<br /><span className="text-primary italic">Erklärung</span>
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
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-16">
            
            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-secondary">Einleitung</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Datenschutz hat einen besonders hohen Stellenwert für die Tansania Reiseabenteuer SDL GmbH. Eine Nutzung unserer Internetseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Für besondere Services kann jedoch eine Verarbeitung erforderlich werden.
              </p>
            </section>

            {/* Quick Overview Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Lock, title: "Sicher", desc: "SSL-Verschlüsselung" },
                { icon: Server, title: "Lokal", desc: "Server in Deutschland" },
                { icon: Fingerprint, title: "Transparent", desc: "Volle Kontrolle" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl shadow-sm border border-border/50 text-center space-y-2">
                  <item.icon className="w-6 h-6 text-primary mx-auto" />
                  <p className="font-bold text-secondary text-sm">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Definitions Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-secondary">Begriffsbestimmungen</h2>
                <div className="h-px flex-grow bg-muted" />
              </div>
              <div className="space-y-6">
                {[
                  { t: "Personenbezogene Daten", d: "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z.B. Name, E-Mail, Standort)." },
                  { t: "Verarbeitung", d: "Jeder Vorgang im Zusammenhang mit Daten wie Erheben, Speichern, Anpassen, Auslesen oder Löschen." },
                  { t: "Einwilligung", d: "Freiwillige, für den bestimmten Fall in informierter Weise abgegebene Willensbekundung." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-secondary text-base mb-1">{item.t}</h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookies & Analysis */}
            <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-border/50 space-y-8">
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold text-secondary">Cookies & Analyse</h2>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                Unsere Internetseiten verwenden Cookies. Zweck ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern und Angebote zu optimieren. Wir erfassen anonyme Daten wie Browser-Typen, IP-Adressen und Zugriffszeiten zur Gefahrenabwehr und Optimierung.
              </p>
              <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Google Analytics</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Wir nutzen Google Analytics zur Webanalyse. Die IP-Anonymisierung ist auf dieser Webseite aktiviert. Sie können die Speicherung durch Browser-Einstellungen oder das <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" className="text-secondary font-bold underline">Browser-Plugin</a> verhindern.
                </p>
              </div>
            </section>

            {/* Rights Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold text-secondary">Ihre Rechte</h2>
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

            {/* Social Plugins */}
            <section className="space-y-6">
              <h2 className="font-headline text-2xl font-bold text-secondary">Social Media & Schriftarten</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "Social Media", content: "Wir integrieren Plugins von Facebook, Instagram, Pinterest und Twitter. Bitte beachten Sie deren jeweilige Datenschutzrichtlinien." },
                  { name: "Google Webfonts", content: "Um Schriften browserübergreifend korrekt darzustellen, werden diese in Ihren Browser-Cache geladen." }
                ].map((p, i) => (
                  <div key={i} className="p-6 bg-muted/20 rounded-2xl">
                    <h4 className="font-bold text-sm text-secondary mb-2">{p.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.content}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar / Responsibility */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-secondary text-white p-10 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-6">
                  <Bell className="w-8 h-8 text-primary" />
                  <h3 className="font-headline text-2xl font-bold">Verantwortliche Stelle</h3>
                  <div className="space-y-4 text-sm font-light text-white/60">
                    <p className="font-bold text-white">Tansania Reiseabenteuer SDL GmbH</p>
                    <p>Bayerischer Platz 7<br />10779 Berlin</p>
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary" /> info@tansania-reiseabenteuer.de</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-none shadow-sm rounded-[2.5rem] p-8 space-y-6">
                <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block">Status</h4>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-secondary uppercase tracking-widest">Aktiv & Geprüft</span>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Zuletzt aktualisiert am 24. Februar 2024. Wir behalten uns vor, diese Erklärung bei neuen Services anzupassen.
                </p>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
