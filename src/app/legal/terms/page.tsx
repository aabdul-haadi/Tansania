
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  ShieldCheck, 
  HelpCircle, 
  Info,
  Clock,
  ArrowRight,
  BookOpen,
  Scale
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function AGBPage() {
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
              Vertragsgrundlagen
            </span>
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight">
              Allgemeine <br /><span className="text-primary italic">Geschäftsbedingungen</span>
            </h1>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Stand: Dezember 2022</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Rechtswirksam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        {/* Intro Disclaimer Card */}
        <Card className="bg-white rounded-[3rem] border-none shadow-sm mb-16 overflow-hidden">
          <CardContent className="p-8 md:p-16 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-secondary">Sehr geehrter Kunde</h2>
                <p className="text-muted-foreground leading-relaxed font-light text-lg italic">
                  "ab dem 01.07.2018 müssen wir Sie vor Abschluss eines Pauschalreisevertrages sowohl über Einzelheiten zu Ihrer Pauschalreise, die erheblich sind, als auch über Ihre Rechte nach der EU-Richtlinie 2015/2302 unterrichten."
                </p>
              </div>
            </div>
            <div className="text-muted-foreground leading-relaxed font-light space-y-6 border-t pt-8 text-sm md:text-base">
              <p>
                Die nachfolgenden Bestimmungen werden, soweit wirksam vereinbart, Inhalt des zwischen Ihnen und uns der Tansania-Reiseabenteuer SDL GmbH (im Folgenden TANSANIA-REISEABENTEUER genannt), als verantwortlichem Reiseveranstalter zu Stande kommenden Pauschalreisevertrages.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex gap-4 items-start">
                <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-sm font-bold text-secondary">
                  Wir empfehlen jedem Reisenden unbedingt den Abschluss einer Reiserücktrittskosten-, Reiseabbruch- sowie einer Reisekrankenversicherung mit Übernahme der Rücktransportkosten eines Krankentransportes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Terms Sections */}
        <main className="space-y-24">
          
          {/* Section 1: Anmeldung */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">1</div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary">Anmeldung und Bestätigung</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Mit Ihrer Anmeldung bieten Sie TANSANIA-REISEABENTEUER den Abschluss des Pauschalreisevertrages verbindlich an. Die Anmeldung ist über die Website, telefonisch oder schriftlich per E-Mail möglich. Der Vertrag kommt mit der Annahme durch TANSANIA-REISEABENTEUER zustande, die durch Übersendung einer schriftlichen Reisebestätigung erfolgt.
              </p>
              <p>
                Weicht der Inhalt der Reisebestätigung vom Inhalt der Reiseanmeldung ab, so liegt ein neues Angebot vor. Sie haben dann das Recht, innerhalb von 7 Tagen das Angebot anzunehmen.
              </p>
            </div>
          </section>

          {/* Section 2: Bezahlung */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">2</div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary">Bezahlung & Sicherungsschein</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Nach Erhalt der Reisebestätigung ist eine Anzahlung in Höhe von <span className="font-bold text-secondary">35% des Reisepreises</span> sofort fällig. Die Restzahlung wird sechs Wochen vor Reiseantritt ohne weitere Aufforderung fällig.
              </p>
              <div className="bg-secondary text-white p-8 md:p-12 rounded-[2.5rem] space-y-6 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <h4 className="font-headline text-2xl font-bold flex items-center gap-3 relative z-10">
                  <ShieldCheck className="w-6 h-6 text-primary" /> Insolvenzabsicherung
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-light relative z-10">
                  TANSANIA-REISEABENTEUER hat eine Insolvenzversicherung bei der R+V Allgemeine Versicherung AG abgeschlossen. Mit der Reisebestätigung erhalten Sie den gesetzlich vorgeschriebenen Sicherungsschein.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Programm */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">3</div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary">Reiseprogramm und Reisepreis</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Der Umfang der Leistung ergibt sich aus der Beschreibung auf der Website. Eintrittspreise oder kulturelle Veranstaltungen sind in der Regel nicht im Reisepreis eingeschlossen, es sei denn, sie sind ausdrücklich vermerkt. Visa-Kosten gehen zu Ihren Lasten.
              </p>
            </div>
          </section>

          {/* Section 4: Rücktritt */}
          <section className="bg-white p-8 md:p-16 rounded-[3rem] border border-border/50 shadow-sm space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">4</div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary">Rücktritt durch den Reisenden</h2>
            </div>
            <div className="space-y-8">
              <p className="text-muted-foreground font-light leading-relaxed">Sie können jederzeit vor Reisebeginn von der Reise zurücktreten. Die Rücktrittspauschalen betragen pro Person:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Bis 90. Tag vor Reiseantritt", p: "50%" },
                  { t: "Ab 89. Tag vor Reiseantritt", p: "60%" },
                  { t: "Ab 21. Tag vor Reiseantritt", p: "80%" },
                  { t: "Ab 2. Tag / Nichtantritt", p: "95%" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-background rounded-2xl border border-border group hover:border-primary transition-colors">
                    <span className="font-bold text-secondary text-sm">{item.t}</span>
                    <span className="font-bold text-primary text-lg">{item.p}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">* Abweichende Bedingungen gelten bei außergewöhnlichen Umständen am Bestimmungsort.</p>
            </div>
          </section>

          {/* Section 5: Gewährleistung */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">5</div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary">Gewährleistung & Mängel</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Wird die Reise nicht vertragsmäßig erbracht, haben Sie den Mangel unverzüglich anzuzeigen. Unterlassen Sie dies schuldhaft, sind Sie nicht mehr berechtigt, Rechte auf Minderung oder Schadensersatz geltend zu machen.
              </p>
              <Card className="p-8 border-l-4 border-l-primary bg-muted/20 border-none rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Mängelanzeige direkt an:</p>
                <p className="font-bold text-secondary">TANSANIA-REISEABENTEUER SDL GmbH</p>
                <p className="text-sm">Bayerischer Platz 7, 10779 Berlin</p>
              </Card>
            </div>
          </section>

          {/* Footer Info */}
          <section className="pt-16 border-t border-muted text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-secondary text-white shadow-xl mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-secondary">Tansania Reiseabenteuer SDL GmbH</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-md mx-auto font-light">
              Amtsgericht Oranienburg, HRB NR. 12250 NP<br />
              Geschäftsführer: Samson Kyashama<br />
              www.tansania-reiseabenteuer.de
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
