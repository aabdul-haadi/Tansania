
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Clock } from 'lucide-react';

export default function DatenschutzPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Dark Header for Navbar Contrast */}
      <section className="bg-[#0a0a0a] pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
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
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit mt-6">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">DSGVO Konform</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-border/50">
          <div className="prose prose-neutral max-w-none space-y-12">
            
            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-secondary border-b pb-4">1. Überblick</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Wir freuen uns über Ihren Besuch auf unserer Webseite. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche Daten wir während Ihres Besuchs auf unserer Webseite erfassen und wie diese genutzt werden.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-secondary border-b pb-4">2. Datenerfassung</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Personenbezogene Daten werden nur dann erhoben, wenn Sie uns diese von sich aus mitteilen, beispielsweise im Rahmen einer Anfrage über unser Trip-Planner-Formular oder per E-Mail. Wir verwenden die von Ihnen mitgeteilten Daten ohne Ihre gesonderte Einwilligung ausschließlich zur Erfüllung und Abwicklung Ihrer Anfrage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 p-6 bg-muted/20 rounded-2xl">
                  <Database className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm font-bold text-secondary leading-tight">Sichere Speicherung auf deutschen Servern</p>
                </div>
                <div className="flex gap-4 p-6 bg-muted/20 rounded-2xl">
                  <Lock className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm font-bold text-secondary leading-tight">Keine Weitergabe an unbefugte Dritte</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-secondary border-b pb-4">3. Ihre Rechte</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
            </section>

            <section className="bg-secondary text-white p-8 md:p-12 rounded-[2.5rem] mt-12">
              <h3 className="font-headline text-2xl font-bold mb-4">Fragen zum Datenschutz?</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte direkt an uns.
              </p>
              <p className="font-bold text-primary">info@tansania-reiseabenteuer.de</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
