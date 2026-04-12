
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  }
];

export function FAQ() {
  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-primary mb-1 block">
            Häufige Fragen
          </span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tighter">
            Alles Wissenswerte
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border/50 rounded-lg px-4 py-0 shadow-sm transition-all"
              >
                <AccordionTrigger className="font-bold text-xs md:text-sm py-3 hover:no-underline hover:text-primary transition-colors text-left tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[9px] md:text-[10px] leading-relaxed pt-0 pb-3 font-bold uppercase tracking-widest">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
