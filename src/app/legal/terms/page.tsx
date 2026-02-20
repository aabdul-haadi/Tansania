
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  ShieldCheck, 
  HelpCircle, 
  Info,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AGBPage() {
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
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">EU-Richtlinie 2015/2302</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        {/* Intro Card */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-border/50 mb-16 space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-secondary">Sehr geehrter Kunde</h2>
              <p className="text-muted-foreground leading-relaxed font-light text-lg italic">
                "ab dem 01.07.2018 müssen wir Sie vor Abschluss eines Pauschalreisevertrages sowohl über Einzelheiten zu Ihrer Pauschalreise, die erheblich sind, als auch über Ihre Rechte nach der EU-Richtlinie 2015/2302 unterrichten."
              </p>
            </div>
          </div>
          <div className="text-muted-foreground leading-relaxed font-light space-y-6 border-t pt-8">
            <p>
              Die nachfolgenden Bestimmungen werden, soweit wirksam vereinbart, Inhalt des zwischen Ihnen und uns der Tansania-Reiseabenteuer SDL GmbH (im Folgenden TANSANIA-REISEABENTEUER genannt), als verantwortlichem Reiseveranstalter zu Stande kommenden Pauschalreisevertrages.
            </p>
            <div className="p-6 bg-muted/30 rounded-2xl border border-muted flex gap-4 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
              <p className="text-sm font-bold text-secondary">
                Wir empfehlen jedem Reisenden unbedingt den Abschluss einer Reiserücktrittskosten-, Reiseabbruch- sowie einer Reisekrankenversicherung mit Übernahme der Rücktransportkosten eines Krankentransportes.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <main className="space-y-20">
          {/* Section 1 */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm border-none shadow-lg">1</Badge>
              <h2 className="font-headline text-3xl font-bold text-secondary">Anmeldung und Bestätigung</h2>
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

          {/* Section 2 */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm border-none shadow-lg">2</Badge>
              <h2 className="font-headline text-3xl font-bold text-secondary">Bezahlung & Sicherungsschein</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Nach Erhalt der Reisebestätigung ist eine Anzahlung in Höhe von <span className="font-bold text-secondary">35% des Reisepreises</span> sofort fällig. Die Restzahlung wird sechs Wochen vor Reiseantritt ohne weitere Aufforderung fällig.
              </p>
              <div className="bg-secondary text-white p-8 rounded-3xl space-y-4">
                <h4 className="font-bold flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Insolvenzabsicherung</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  TANSANIA-REISEABENTEUER hat eine Insolvenzversicherung bei der R+V Allgemeine Versicherung AG abgeschlossen. Mit der Reisebestätigung erhalten Sie den gesetzlich vorgeschriebenen Sicherungsschein.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm border-none shadow-lg">3</Badge>
              <h2 className="font-headline text-3xl font-bold text-secondary">Reiseprogramm und Reisepreis</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Der Umfang der Leistung ergibt sich aus der Beschreibung auf der Website. Eintrittspreise oder kulturelle Veranstaltungen sind in der Regel nicht im Reisepreis eingeschlossen, es sei denn, sie sind ausdrücklich vermerkt. Visa-Kosten gehen zu Ihren Lasten.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm border-none shadow-lg">4</Badge>
              <h2 className="font-headline text-3xl font-bold text-secondary">Programmänderungen</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Änderungen des Reiseverlaufs sind jederzeit möglich, z. B. aufgrund von Behördenverordnungen, medizinischen Notfällen oder Witterungsgründen. Über notwendige Änderungen der Route oder Fahrtzeit entscheidet allein TANSANIA-REISEABENTEUER im Interesse der Sicherheit.
              </p>
            </div>
          </section>

          {/* Section 5 - Storno (Crucial) */}
          <section className="bg-white p-8 md:p-12 rounded-[3rem] border border-border shadow-sm space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm border-none shadow-lg">5</Badge>
              <h2 className="font-headline text-3xl font-bold text-secondary">Rücktritt durch den Reisenden</h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-light text-sm md:text-base">
              <p>Sie können jederzeit vor Reisebeginn von der Reise zurücktreten. Die Rücktrittspauschalen betragen pro Person:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Bis 90. Tag vor Reiseantritt", p: "50%" },
                  { t: "Ab 89. Tag vor Reiseantritt", p: "60%" },
                  { t: "Ab 21. Tag vor Reiseantritt", p: "80%" },
                  { t: "Ab 2. Tag / Nichtantritt", p: "95%" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-muted/20 rounded-xl">
                    <span className="font-medium text-secondary">{item.t}</span>
                    <span className="font-bold text-primary">{item.p}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs italic">* Abweichende Bedingungen gelten bei außergewöhnlichen Umständen am Bestimmungsort.</p>
            </div>
          </section>

          {/* Section 6 - Support */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm border-none shadow-lg">6</Badge>
              <h2 className="font-headline text-3xl font-bold text-secondary">Gewährleistung & Mängel</h2>
            </div>
            <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Wird die Reise nicht vertragsmäßig erbracht, haben Sie den Mangel unverzüglich anzuzeigen. Unterlassen Sie dies schuldhaft, sind Sie nicht mehr berechtigt, Rechte auf Minderung oder Schadensersatz geltend zu machen.
              </p>
              <div className="p-6 border-l-4 border-primary bg-muted/10">
                <p className="text-sm font-bold text-secondary">Mängelanzeige direkt an:</p>
                <p className="text-sm">TANSANIA-REISEABENTEUER SDL GmbH, Bayerischer Platz 7, 10779 Berlin</p>
              </div>
            </div>
          </section>

          {/* Footer of Terms */}
          <section className="pt-12 border-t border-muted text-center space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Reiseveranstalter</p>
            <p className="font-headline text-xl font-bold text-secondary">Tansania Reiseabenteuer SDL GmbH</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
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
