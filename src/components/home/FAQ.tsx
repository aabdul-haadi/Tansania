"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    answer: "Absolut. Wir planen spezielle Familiensafaris mit kürzeren Fahrtzeiten und familienfreundlichen Lodges, die über Pools und spezielle Aktivitäten für Kinder verfügen."
  }
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Protocol */}
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-4"
          >
            Häufig gestellte Fragen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[14px] leading-[20px] tracking-wide"
          >
            Alles, was Sie über Ihre Tansania-Reise wissen müssen
          </motion.p>
        </div>

        {/* Accordion Registry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border/60 rounded-lg md:rounded-xl shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="font-normal text-base md:text-xl py-5 px-6 md:px-8 hover:no-underline text-left text-secondary transition-colors tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] px-6 md:px-8 pb-6 font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA Protocol */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center space-y-6"
        >
          <p className="text-muted-foreground text-[14px] leading-[20px] font-normal">
            Weitere Fragen? Wir sind für Sie da.
          </p>
          <Link href="/contact" className="inline-block">
            <Button className="rounded-lg px-8 h-14 bg-secondary text-white hover:bg-primary transition-all duration-500 font-bold text-[11px] uppercase tracking-widest border-none shadow-lg">
              Jetzt Kontakt aufnehmen
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}