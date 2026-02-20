
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  ChevronRight,
  Sparkles,
  MessageSquare,
  Download
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const faqCategories = [
  {
    title: "Reisevorbereitung für Tansania",
    questions: [
      {
        q: "Wie reise ich am besten nach Tansania?",
        a: "Die bequemste Anreise erfolgt per Direktflug über Drehkreuze wie Frankfurt, Amsterdam oder Doha nach Dar es Salaam, Kilimanjaro oder Sansibar. Tickets können Sie online über Fluggesellschaften oder bei uns als Teil Ihres Reisepakets buchen. Wir senden Ihnen alle Dokumente rechtzeitig per E-Mail und unterstützen Sie bei der Flugauswahl."
      },
      {
        q: "Brauche ich ein Visum für Tansania?",
        a: "Ja, ein Visum ist für die Einreise erforderlich. Beantragen Sie ein eVisa über die offizielle tansanische Website oder nutzen Sie das Visa-on-Arrival bei der Einreise. Sie benötigen einen Reisepass (mindestens 6 Monate gültig), ein Passfoto und Ihre Reiseunterlagen. Das eVisa dauert etwa 7–10 Tage, während Visa-on-Arrival je nach Andrang variieren kann."
      },
      {
        q: "Welche Impfungen sind notwendig?",
        a: "Keine Impfungen sind verpflichtend, außer Gelbfieber bei Einreise aus einem Risikogebiet. Empfohlen werden Hepatitis A/B, Typhus, Tollwut, Meningokokken und aktuelle Standardimpfungen (z. B. Tetanus, Polio). Konsultieren Sie frühzeitig einen Tropenmediziner. Wir stellen bei Bedarf Nachweise für Gelbfieber-Befreiungen bereit."
      },
      {
        q: "Wie sicher ist Tansania für Reisende?",
        a: "Tansania ist ein relativ sicheres Reiseziel, besonders in touristischen Regionen. Unsere Partner vor Ort sind zertifiziert, und wir empfehlen, grundlegende Sicherheitsmaßnahmen wie das Vermeiden von auffälligen Wertsachen einzuhalten."
      },
      {
        q: "Welche Währung wird verwendet?",
        a: "Die offizielle Währung ist der Tansanische Schilling (TZS), aber US-Dollar sind in touristischen Gebieten weit akzeptiert. Kreditkarten (Visa/Mastercard) funktionieren in Hotels und Lodges, für lokale Märkte empfiehlt sich Bargeld in TZS. Geldautomaten sind in Städten verfügbar."
      }
    ]
  },
  {
    title: "Safari-Abenteuer in Tansania",
    questions: [
      {
        q: "Wie kann ich eine Safari buchen?",
        a: "Buchen Sie Ihre Safari direkt auf unserer Website oder lassen Sie sich ein individuelles Angebot erstellen. Unser Team berät Sie zu Routen, Unterkünften und Reisezeiten für ein maßgeschneidertes Erlebnis."
      },
      {
        q: "Was kostet eine Safari?",
        a: "Die Kosten variieren je nach Dauer, Saison, Unterkunftstyp und Gruppengröße. Unsere Angebote sind transparent und beinhalten Transfers, Unterkünfte, Verpflegung und Parkgebühren. Kontaktieren Sie uns für ein detailliertes Angebot."
      },
      {
        q: "Wann ist die beste Safari-Zeit?",
        a: "Die Trockenzeiten von Juni bis Oktober und Dezember bis Februar sind ideal. Tiere sammeln sich an Wasserstellen, und die Sicht ist klar, perfekt für Tierbeobachtungen."
      }
    ]
  },
  {
    title: "Kilimandscharo-Trekking",
    questions: [
      {
        q: "Welche Fitness ist für den Kilimandscharo nötig?",
        a: "Eine solide Kondition, Wandererfahrung und mentale Stärke sind wichtig. Wir empfehlen ein gezieltes Training (Ausdauer, Kraft) und bieten Beratung zu Akklimatisationstagen, um Ihre Gipfelchancen zu maximieren."
      },
      {
        q: "Welche Route ist empfehlenswert?",
        a: "Die Machame-Route (scenisch), Lemosho-Route (ruhiger, gute Akklimatisation) und Marangu-Route (einfacher, mit Hütten) sind beliebt. Wir helfen Ihnen, die beste Route für Ihre Ziele zu finden."
      }
    ]
  },
  {
    title: "Strandurlaub auf Sansibar",
    questions: [
      {
        q: "Wie reise ich nach Sansibar?",
        a: "Tägliche Inlandsflüge verbinden Arusha oder Dar es Salaam mit Sansibar, oder Sie nutzen die Fähre von Dar es Salaam. Tickets organisieren wir für Sie, digital oder vor Ort."
      },
      {
        q: "Welche Strände und Highlights gibt es?",
        a: "Nungwi und Kendwa im Norden bieten weiße Strände und klares Wasser, Paje im Osten ist ideal für Kitesurfen. Kulturelle Highlights sind Stone Town, der Jozani-Wald und Gewürzplantagen-Touren."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Hilfe & Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Fragen & <span className="text-primary italic">Antworten</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light max-w-2xl mx-auto"
          >
            Alles, was Sie wissen müssen, bevor Sie in Ihr persönliches Abenteuer Afrika starten.
          </motion.p>
        </div>

        {/* Search Bar - Visual only for now */}
        <div className="max-w-2xl mx-auto mb-20 relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Suchen Sie nach einem Thema..." 
            className="h-16 pl-16 pr-8 rounded-2xl border-none shadow-xl bg-white focus:ring-2 focus:ring-primary/20 text-lg"
          />
        </div>

        {/* FAQ Content */}
        <div className="space-y-16">
          {faqCategories.map((category, catIdx) => (
            <section key={catIdx} className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-secondary">{category.title}</h2>
                <div className="h-px flex-grow bg-muted" />
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem 
                    key={qIdx} 
                    value={`cat-${catIdx}-q-${qIdx}`}
                    className="border-none bg-white rounded-2xl px-6 md:px-10 shadow-sm hover:shadow-md transition-all group"
                  >
                    <AccordionTrigger className="text-left font-bold text-base md:text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed font-light pb-8 pr-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        {/* Guide Download CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-16 rounded-[3rem] bg-secondary text-white relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="relative z-10 space-y-8">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
              Unser kostenloser <br /><span className="text-primary italic">Reiseratgeber</span>
            </h3>
            <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
              Holen Sie sich alle Insider-Tipps kompakt in einem PDF. Perfekt für Ihre Reiseplanung am Wochenende.
            </p>
            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all hover:scale-105">
              Jetzt herunterladen
            </Button>
          </div>
        </motion.div>

        {/* Support Section */}
        <section className="mt-24 pt-24 border-t border-muted text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Noch Fragen offen?</span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-12">Kontaktieren Sie <span className="text-primary italic">unsere Experten</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Rufen Sie an</p>
                <a href="tel:+493022608080" className="font-bold text-sm">+49 30 22 60 80 80</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Schreiben Sie</p>
                <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-sm">info@tansania-reiseabenteuer.de</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Wir sind da</p>
                <p className="font-bold text-sm">Mo. - Fr. 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
