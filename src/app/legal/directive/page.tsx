"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  CheckCircle2, 
  ShieldAlert, 
  Scale, 
  ArrowRight,
  Info,
  Footprints,
  MapPin,
  LifeBuoy,
  Compass
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DirectivePage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: Directive Header */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">
              Verbraucherschutz
            </span>
            <h1 className="text-white tracking-tighter leading-none">
              EU-Richtlinie
            </h1>
            <p className="text-white/60 text-sm md:text-lg font-bold uppercase tracking-widest mt-6 max-w-2xl">
              Formblatt zur Unterrichtung des Reisenden bei einer Pauschalreise nach § 651a BGB.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Content Registry: The Legal Ledger */}
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          <main className="lg:col-span-8 space-y-10">
            <Card className="border-none shadow-sm rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white border border-border/40">
              <CardContent className="p-8 md:p-12 space-y-12">
                
                {/* Core Declaration */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-secondary tracking-tight leading-none text-2xl md:text-4xl uppercase">Formblatt Pauschalreise</h2>
                  </div>
                  
                  <div className="bg-muted/20 p-6 md:p-10 rounded-[1.5rem] border border-border/40">
                    <p className="text-secondary font-bold text-[14px] leading-[22px] uppercase tracking-tight text-justify">
                      Bei der Ihnen angebotenen Kombination von Reiseleistungen handelt es sich um eine Pauschalreise im Sinne der Richtlinie (EU) 2015/2302. Daher können Sie alle EU-Rechte in Anspruch nehmen, die für Pauschalreisen gelten. Das Unternehmen Tansania Reiseabenteuer SDL GmbH trägt die volle Verantwortung für die ordnungsgemäße Durchführung der gesamten Pauschalreise. Zudem verfügt das Unternehmen Tansania Reiseabenteuer SDL GmbH über die gesetzlich vorgeschriebene Absicherung für die Rückzahlung Ihrer Zahlungen und, falls der Transport in der Pauschalreise inbegriffen ist, zur Sicherstellung Ihrer Rückbeförderung im Fall seiner Insolvenz.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Main Rights List */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-secondary tracking-tight leading-none text-2xl md:text-4xl uppercase">Wichtigste Rechte</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      "Die Reisenden erhalten alle wesentlichen Informationen über die Pauschalreise vor Abschluss des Pauschalreisevertrags.",
                      "Es haftet immer mindestens ein Unternehmer für die ordnungsgemäße Erbringung aller im Vertrag inbegriffenen Reiseleistungen.",
                      "Die Reisenden erhalten eine Notruftelefonnummer oder Angaben zu einer Kontaktstelle zum Reiseveranstalter.",
                      "Die Reisenden können die Pauschalreise auf eine andere Person übertragen.",
                      "Der Preis darf nur erhöht werden, wenn bestimmte Kosten steigen und spätestens 20 Tage vor Beginn.",
                      "Rücktritt ohne Gebühr bei erheblichen Änderungen der wesentlichen Bestandteile.",
                      "Anspruch auf Kostenerstattung und Entschädigung bei Absage durch den Veranstalter.",
                      "Rücktritt ohne Gebühr bei außergewöhnlichen Umständen am Bestimmungsort.",
                      "Rücktritt jederzeit gegen eine angemessene Rücktrittsgebühr möglich.",
                      "Angemessene andere Vorkehrungen bei wesentlichen Leistungsänderungen nach Beginn.",
                      "Anspruch auf Preisminderung und Schadenersatz bei mangelhafter Erbringung.",
                      "Der Reiseveranstalter leistet Beistand bei Schwierigkeiten."
                    ].map((recht, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <p className="text-muted-foreground font-normal text-[13px] leading-[20px] uppercase tracking-widest opacity-80">
                          {recht}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Insolvency Protection */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ShieldAlert className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-secondary tracking-tight leading-none text-2xl md:text-4xl uppercase">Insolvenzschutz</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-muted-foreground font-normal text-[14px] leading-[22px] uppercase tracking-widest opacity-80">
                      Im Fall der Insolvenz des Reiseveranstalters werden Zahlungen zurückerstattet. Tansania Reiseabenteuer SDL GmbH hat eine Insolvenzabsicherung mit Deutscher Reisesicherungsfonds GmbH abgeschlossen.
                    </p>
                    <div className="p-6 md:p-8 bg-[#FDF7F2] rounded-[1.5rem] border border-[#F0EBE0] grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Absicherer</p>
                        <p className="font-bold text-secondary text-sm uppercase">Deutscher Reisesicherungsfonds GmbH</p>
                        <p className="text-[10px] text-muted-foreground uppercase">Raiffeisenplatz 1, 65189 Wiesbaden</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Kontakt</p>
                        <p className="font-bold text-secondary text-sm uppercase">Tel: +49 611 533-5859</p>
                        <p className="text-[10px] text-muted-foreground uppercase truncate">schadenmeldung@reiseschaden.ruv.de</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobility Section */}
            <Card className="border-none shadow-sm rounded-[2rem] md:rounded-[2.5rem] bg-white border border-border/40 overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center">
                    <Footprints className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-secondary tracking-tight leading-none text-2xl md:text-4xl uppercase">Mobilitätshinweis</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground font-normal text-[14px] leading-[24px] uppercase tracking-widest opacity-80 text-justify">
                    Auf unseren Reisen werden diverse Transportmittel wie Busse oder Geländewagen genutzt. Um alle Besichtigungen in vollem Umfang miterleben zu können, sollten Sie zudem <strong className="text-secondary">„gut zu Fuß“</strong> sein. Übernachtet wird in verschiedenen Unterkünften vom Zelt bis zur hochwertigen Lodge.
                  </p>
                  <p className="text-muted-foreground font-normal text-[14px] leading-[24px] uppercase tracking-widest opacity-80 text-justify">
                    Bei über 53 Reiseländern treffen wir dabei auf unterschiedlichste Standards und können so keine durchgängige Barrierefreiheit garantieren. Aus diesem Grund sind unsere Reisen für Menschen mit eingeschränkter Mobilität im Allgemeinen <strong className="text-secondary">nicht geeignet</strong>.
                  </p>
                  
                  <div className="p-6 md:p-10 bg-secondary text-white rounded-[2rem] space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><LifeBuoy className="w-20 h-20 rotate-12" /></div>
                    <div className="relative z-10 space-y-4">
                      <h4 className="font-headline text-xl md:text-2xl font-bold uppercase">Individuelle Prüfung</h4>
                      <p className="text-[11px] md:text-sm text-white/60 font-bold uppercase tracking-widest leading-relaxed">
                        Je nach Umfang Ihrer Einschränkung prüfen wir gern vorab für Sie, ob eine Teilnahme möglich ist. In Begleitung einer Person, die Sie unterstützt, sind einzelne Reisen durchaus realisierbar.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar Protocol */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="bg-white p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-border/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                  <Compass className="w-48 h-48 text-secondary" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                    <Compass className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-secondary leading-none tracking-tighter text-2xl md:text-3xl uppercase">Reiseplanung <br /><span className="text-primary font-bold">nach Maß</span></h3>
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                      Sprechen Sie uns vor der Buchung an, welche Reisen sich besonders gut für Sie eignen.
                    </p>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full h-12 md:h-14 rounded-xl font-bold uppercase tracking-widest text-[9px] bg-secondary text-white border-none shadow-xl transition-all group">
                      BERATUNG ANFRAGEN <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
