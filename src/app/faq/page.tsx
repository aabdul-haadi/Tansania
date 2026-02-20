"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';

const faqCategories = [
  {
    title: "Reisevorbereitung für Tansania",
    questions: [
      { q: "Wie reise ich am besten nach Tansania?", a: "Die bequemste Anreise erfolgt per Direktflug über Drehkreuze wie Frankfurt, Amsterdam oder Doha nach Dar es Salaam, Kilimanjaro oder Sansibar. Tickets können Sie online über Fluggesellschaften oder bei uns als Teil Ihres Reisepakets buchen." },
      { q: "Brauche ich ein Visum für Tansania?", a: "Ja, ein Visum ist für die Einreise erforderlich. Beantragen Sie ein eVisa über die offizielle Website oder nutzen Sie das Visa-on-Arrival." },
      { q: "Welche Impfungen sind notwendig?", a: "Keine Impfungen sind verpflichtend, außer Gelbfieber bei Einreise aus einem Risikogebiet. Wir empfehlen eine Beratung durch einen Tropenmediziner." }
    ]
  },
  {
    title: "Safari-Abenteuer",
    questions: [
      { q: "Wie kann ich eine Safari buchen?", a: "Buchen Sie direkt auf unserer Website oder lassen Sie sich ein individuelles Angebot von unseren Experten erstellen." },
      { q: "Wann ist die beste Safari-Zeit?", a: "Die Trockenzeiten von Juni bis Oktober und Dezember bis Februar sind ideal für spektakuläre Tierbeobachtungen." }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Top Header Section - Dark Background to work with transparent navbar */}
      <section className="bg-[#0a0a0a] pt-32 pb-24 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 border border-primary/20"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Hilfe & Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Fragen & <span className="text-primary italic">Antworten</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-light max-w-2xl mx-auto"
          >
            Alles, was Sie wissen müssen, bevor Sie in Ihr persönliches Abenteuer Afrika starten.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-20 relative group -mt-32 z-10">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Suchen Sie nach einem Thema..." 
            className="h-16 pl-16 pr-8 rounded-2xl border-none shadow-2xl bg-white focus:ring-2 focus:ring-primary/20 text-lg"
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
      </div>
    </div>
  );
}