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
  LifeBuoy,
  Compass
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DirectivePage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 High-Prestige Hero */}
      <section className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-primary font-bold text-[10px] block tracking-normal">
              Verbraucherschutz Information
            </span>
            <h1 className="font-headline text-white text-4xl md:text-7xl leading-none tracking-tight">
              EU-Richtlinie
            </h1>
            <p className="text-white/60 text-sm md:text-lg font-normal leading-relaxed mt-6 max-w-2xl">
              Formblatt zur Unterrichtung des Reisenden bei einer Pauschalreise nach § 651a BGB.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Content Grid */}
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          <main className="lg:col-span-8 space-y-12">
            <Card className="border border-border/40 shadow-sm rounded-[2rem] overflow-hidden bg-white">
              <CardContent className="p-8 md:p-12 space-y-12">
                
                {/* Core Declaration */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Formblatt Pauschalreise</h2>
                  </div>
                  
                  <div className="bg-[#fdf7f2] p-8 rounded-[1.5rem] border border-[#f0ebe0]/50">
                    <p className="text-secondary font-medium text-[14px] leading-[24px] text-justify">
                      Bei der Ihnen angebotenen Kombination von Reiseleistungen handelt es sich um eine Pauschalreise im Sinne der Richtlinie (EU) 2015/2302. Daher können Sie alle EU-Rechte in Anspruch nehmen, die für Pauschalreisen gelten. Das Unternehmen Tansania Reiseabenteuer SDL GmbH trägt die volle Verantwortung für die ordnungsgemäße Durchführung der gesamten Pauschalreise. Zudem verfügt das Unternehmen Tansania Reiseabenteuer SDL GmbH über die gesetzlich vorgeschriebene Absicherung für die Rückzahlung Ihrer Zahlungen und, falls der Transport in der Pauschalreise inbegriffen ist, zur Sicherstellung Ihrer Rückbeförderung im Fall seiner Insolvenz.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                {/* Main Rights List */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Ihre wichtigsten Rechte</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      "Reisende erhalten alle wesentlichen Informationen vor Abschluss des Pauschalreisevertrags.",
                      "Es haftet immer mindestens ein Unternehmer für die ordnungsgemäße Erbringung aller Leistungen.",
                      "Reisende erhalten eine Notruftelefonnummer oder Angaben zu einer Kontaktstelle zum Reiseveranstalter.",
                      "Die Pauschalreise kann auf eine andere Person übertragen werden.",
                      "Der Preis darf nur bei steigenden Kosten und spätestens 20 Tage vor Beginn erhöht werden.",
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
                        <p className="text-muted-foreground font-normal text-[14px] leading-[22px]">
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
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <ShieldAlert className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Insolvenzschutz</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-muted-foreground font-normal text-[14px] leading-[22px]">
                      Im Fall der Insolvenz des Reiseveranstalters werden Zahlungen zurückerstattet. Tansania Reiseabenteuer SDL GmbH hat eine Insolvenzabsicherung mit dem Deutschen Reisesicherungsfonds abgeschlossen.
                    </p>
                    <div className="p-8 bg-[#fdf7f2] rounded-[1.5rem] border border-[#f0ebe0] grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-normal">Absicherer</p>
                        <p className="font-bold text-secondary text-sm md:text-base">Deutscher Reisesicherungsfonds GmbH</p>
                        <p className="text-xs text-muted-foreground">Raiffeisenplatz 1, 65189 Wiesbaden</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-normal">Kontakt</p>
                        <p className="font-bold text-secondary text-sm md:text-base">Tel: +49 611 533-5859</p>
                        <p className="text-xs text-muted-foreground truncate">schadenmeldung@reiseschaden.ruv.de</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobility Section */}
            <Card className="border border-border/40 shadow-sm rounded-[2rem] bg-white overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Footprints className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-headline text-2xl md:text-4xl text-secondary leading-tight">Hinweis zur Mobilität</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground font-normal text-[14px] leading-[24px] text-justify">
                    Auf unseren Reisen werden diverse Transportmittel wie Busse oder Geländewagen genutzt. Um alle Besichtigungen in vollem Umfang miterleben zu können, sollten Sie zudem <strong className="text-secondary">„gut zu Fuß“</strong> sein. Übernachtet wird in verschiedenen Unterkünften vom Zelt bis zur hochwertigen Lodge.
                  </p>
                  <p className="text-muted-foreground font-normal text-[14px] leading-[24px] text-justify">
                    Bei unseren vielfältigen Reisezielen treffen wir auf unterschiedlichste Standards und können so keine durchgängige Barrierefreiheit garantieren. Aus diesem Grund sind unsere Reisen für Menschen mit eingeschränkter Mobilität im Allgemeinen <strong className="text-secondary">nicht geeignet</strong>.
                  </p>
                  
                  <div className="p-8 md:p-12 bg-secondary text-white rounded-[2rem] space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><LifeBuoy className="w-24 h-24 rotate-12" /></div>
                    <div className="relative z-10 space-y-4">
                      <h4 className="font-headline text-xl md:text-2xl text-primary font-medium">Individuelle Prüfung</h4>
                      <p className="text-sm md:text-base text-white/70 font-normal leading-relaxed">
                        Je nach Umfang Ihrer Einschränkung prüfen wir gerne vorab für Sie, ob eine Teilnahme möglich ist. In Begleitung einer Person, die Sie unterstützt, sind einzelne Reisen oft realisierbar.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <Card className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-border/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                  <Compass className="w-48 h-48 text-secondary" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Compass className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-headline text-2xl md:text-3xl text-secondary leading-tight">Haben Sie <br /><span className="text-primary">Fragen?</span></h3>
                    <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                      Lassen Sie sich von unseren Experten in Berlin persönlich zu Ihrem Afrika-Abenteuer beraten.
                    </p>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full h-12 md:h-14 rounded-xl font-bold text-[11px] bg-secondary text-white hover:bg-primary border-none shadow-xl transition-all group">
                      Beratung anfragen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
