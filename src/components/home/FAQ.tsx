"use client";

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
    question: "Warum bei einer Berliner Agentur buchen?",
    answer: "Lokale Expertise gepaart mit deutscher Sicherheit. Wir bieten persönliche Beratung in Berlin und sichere Buchungsabwicklung nach EU-Recht."
  },
  {
    question: "Wann findet die Große Tierwanderung statt?",
    answer: "Das ganze Jahr über. Von Juli bis Oktober für die Flussüberquerungen, von Dezember bis März für die Geburtenzeit."
  },
  {
    question: "Kann ich Safari mit Strandurlaub kombinieren?",
    answer: "Absolut. Unsere 'Bush & Beach' Pakete beginnen in der wilden Serengeti und enden zur Entspannung an den Stränden von Sansibar."
  },
  {
    question: "Sind die Touren privat oder in Gruppen?",
    answer: "Wir spezialisieren uns auf private, maßgeschneiderte Expeditionen mit eigenen Fahrzeugen und professionellen Guides."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">
            Häufige Fragen
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
            Alles Wissenswerte <span className="text-primary">für Ihre Reise</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border/50 rounded-xl px-4 py-1 shadow-sm transition-all"
              >
                <AccordionTrigger className="font-bold text-base hover:no-underline hover:text-primary transition-colors text-left uppercase tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-1 pb-3 font-bold uppercase tracking-widest">
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
