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
    answer: "Lokale Expertise gepaart mit deutscher Sicherheit. Wir bieten persönliche Beratung in Berlin."
  },
  {
    question: "Wann findet die Große Tierwanderung statt?",
    answer: "Das ganze Jahr über. Von Juli bis Oktober für die Flussüberquerungen."
  },
  {
    question: "Kann ich Safari mit Strandurlaub kombinieren?",
    answer: "Absolut. Unsere 'Bush & Beach' Pakete verbinden Serengeti und Sansibar."
  },
  {
    question: "Sind die Touren privat oder in Gruppen?",
    answer: "Wir spezialisieren uns auf private, maßgeschneiderte Expeditionen."
  }
];

export function FAQ() {
  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-xl">
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
                <AccordionTrigger className="font-bold text-xs md:text-sm py-3 hover:no-underline hover:text-primary transition-colors text-left uppercase tracking-tight">
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