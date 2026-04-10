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

const faqs = [
  {
    question: "Wie läuft der Planungsprozess ab?",
    answer: "Unser Prozess beginnt mit einem persönlichen Gespräch, in dem wir Ihre Wünsche aufnehmen. Daraufhin erstellen wir einen individuellen Erstentwurf, den wir gemeinsam mit Ihnen so lange verfeinern, bis er perfekt zu Ihren Vorstellungen passt."
  },
  {
    question: "Kann ich online buchen und bezahlen?",
    answer: "Ja, nach der Finalisierung Ihres Reiseplans erhalten Sie Zugang zu unserem sicheren Buchungsportal. Wir bieten verschiedene gesicherte Zahlungsmethoden an, die alle durch den Deutschen Reisesicherungsfonds abgesichert sind."
  },
  {
    question: "Wie individuell können Sie meine Reise gestalten?",
    answer: "Da wir uns auf private Safaris spezialisiert haben, sind wir zu 100% flexibel. Von der Wahl der Lodges über die tägliche Route bis hin zu speziellen kulinarischen Wünschen gestalten wir jedes Detail nach Ihren Vorgaben."
  },
  {
    question: "Wie schnell erhalte ich eine Antwort auf meine Anfrage?",
    answer: "In der Regel erhalten Sie innerhalb von 24 Stunden eine erste Rückmeldung von unseren Spezialisten in Berlin. Ein detailliertes Angebot liegt Ihnen meist nach 48 Stunden vor."
  },
  {
    question: "Was kostet eine Safari-Reise nach Tansania?",
    answer: "Die Kosten hängen stark von der Reisezeit und dem gewünschten Komfortlevel ab. Als Richtwert für eine hochwertige, private Safari inkl. Lodges sollten Sie mit einem Budget ab ca. 5.000 € pro Person planen."
  },
  {
    question: "Sprechen die Guides vor Ort Deutsch?",
    answer: "Wir verfügen über einen Pool an exzellenten, staatlich geprüften Guides, die fließend Deutsch sprechen. Bitte geben Sie uns bei der Planung Bescheid, damit wir Ihren Wunschguide frühzeitig reservieren können."
  },
  {
    question: "Welche Reisezeit ist die beste für eine Safari?",
    answer: "Tansania ist ein Ganzjahresziel. Die Trockenzeiten von Juni bis Oktober sind ideal für Tierbeobachtungen, während die Monate Januar bis März perfekt für die Kalbungszeit im Süden der Serengeti sind."
  },
  {
    question: "Sind die Reisen auch für Familien mit Kindern geeignet?",
    answer: "Absolut. Wir planen spezielle Familiensafaris mit kürzeren Fahrtzeiten und familienfreundlichen Lodges, die über Pools and spezielle Aktivitäten für Kinder verfügen."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Top Header Section */}
      <section className="bg-secondary pt-32 pb-24 text-center border-none">
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
            className="font-headline text-4xl md:text-7xl font-normal mb-6 leading-tight text-white tracking-tighter uppercase"
          >
            Fragen & <span className="text-primary">Antworten</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-light max-w-2xl mx-auto uppercase tracking-widest"
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
            className="h-16 pl-16 pr-8 rounded-2xl border-none shadow-2xl bg-white focus:ring-2 focus:ring-primary/20 text-lg font-normal uppercase"
          />
        </div>

        {/* FAQ Content */}
        <div className="space-y-16">
          <section className="space-y-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`q-${idx}`}
                  className="border-none bg-white rounded-2xl px-6 md:px-10 shadow-sm hover:shadow-md transition-all group"
                >
                  <AccordionTrigger className="text-left font-normal text-base md:text-lg py-6 hover:no-underline hover:text-primary transition-colors tracking-tight uppercase">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-8 pr-4 uppercase tracking-widest">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}
