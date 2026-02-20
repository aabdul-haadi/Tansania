
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
  LifeBuoy
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function DirectivePage() {
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
              Verbraucherschutz
            </span>
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white leading-tight">
              Pauschalreise-<br /><span className="text-primary italic">Richtlinie</span>
            </h1>
            <p className="text-white/60 text-lg font-light max-w-2xl mt-6">
              Informationen nach der Richtlinie (EU) 2015/2302.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        <div className="space-y-16">
          
          {/* Main Form Blatt */}
          <Card className="bg-white rounded-[3rem] border-none shadow-sm overflow-hidden">
            <CardContent className="p-8 md:p-16 space-y-10">
              <div className="flex items-start gap-6 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                <ClipboardList className="w-10 h-10 text-primary shrink-0" />
                <p className="text-muted-foreground font-light leading-relaxed text-lg italic">
                  "Die Kombination von Reiseleistungen, die Ihnen angeboten wird, ist eine Pauschalreise im Sinne der Richtlinie (EU) 2015/2302."
                </p>
              </div>

              <section className="space-y-8">
                <h2 className="font-headline text-3xl font-bold text-secondary flex items-center gap-3">
                  <Scale className="w-8 h-8 text-primary" /> Wichtigste Rechte
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "Reisende erhalten alle wesentlichen Informationen vor Abschluss des Vertrags.",
                    "Es haftet immer mindestens ein Unternehmer für die ordnungsgemäße Erbringung aller Leistungen.",
                    "Reisende erhalten eine Notrufnummer oder Kontaktstelle zum Reiseveranstalter.",
                    "Die Pauschalreise kann auf eine andere Person übertragen werden.",
                    "Preisänderungen sind nur bei Kostensteigerungen (z.B. Treibstoff) bis 20 Tage vor Beginn zulässig.",
                    "Rücktritt ohne Gebühr bei erheblichen Änderungen der Reiseleistungen möglich."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 items-start group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-primary">
                        <CheckCircle2 className="w-4 h-4 text-primary transition-colors group-hover:text-white" />
                      </div>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Insolvency Protection */}
              <section className="bg-secondary text-white p-8 md:p-12 rounded-[2.5rem] space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold flex items-center gap-3 mb-6">
                    <ShieldAlert className="w-6 h-6 text-primary" /> Insolvenzschutz
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-8">
                    Tansania Reiseabenteuer SDL GmbH hat eine Insolvenzabsicherung mit Deutscher Reisesicherungsfonds GmbH abgeschlossen. Reisende können diese Einrichtung kontaktieren, wenn ihnen Leistungen verweigert werden.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Anschrift</p>
                      <p className="text-xs font-bold">Raiffeisenplatz 1, 65189 Wiesbaden</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Kontakt</p>
                      <p className="text-xs font-bold">+49 611 533-5859</p>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          {/* Mobility Notice */}
          <Card className="bg-white rounded-[3rem] border-none shadow-sm overflow-hidden">
            <CardContent className="p-8 md:p-16 space-y-10">
              <div className="flex items-center gap-3">
                <Footprints className="w-8 h-8 text-primary" />
                <h2 className="font-headline text-3xl font-bold text-secondary">Mobilitätshinweis</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                <p>
                  Auf unseren Reisen werden diverse Transportmittel wie Busse oder Geländewagen genutzt. Um alle Besichtigungen in vollem Umfang miterleben zu können, sollten Sie <span className="font-bold text-secondary">„gut zu Fuß“</span> sein.
                </p>
                <p>
                  Durch unterschiedlichste Standards in über 53 Reiseländern können wir keine durchgängige Barrierefreiheit garantieren. Unsere Reisen sind für Menschen mit eingeschränkter Mobilität im Allgemeinen <span className="font-bold text-secondary">nicht geeignet</span>.
                </p>
                <div className="p-8 bg-muted/20 rounded-[2rem] space-y-4">
                  <h4 className="font-bold text-secondary flex items-center gap-2">
                    <LifeBuoy className="w-5 h-5 text-primary" /> Individuelle Prüfung
                  </h4>
                  <p className="text-xs md:text-sm">
                    Je nach Umfang Ihrer Einschränkung prüfen wir gern vorab für Sie, ob eine Teilnahme möglich ist. In Begleitung einer Person, die Sie unterstützt, sind einzelne Reisen durchaus realisierbar.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-8 border-t">
                <p className="text-sm font-bold text-secondary">Haben Sie Fragen zur Barrierefreiheit?</p>
                <Button className="rounded-full px-10 h-14 font-bold bg-primary text-white border-none group">
                  Experten fragen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
