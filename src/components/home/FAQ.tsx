"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Warum bei einer Berliner Agentur buchen?",
    answer: "Tansania Reiseabenteuer SDL verbindet lokale Expertise vor Ort mit deutscher Sicherheit und Rechtssicherheit. Wir bieten persönliche Beratung in unserem Berliner Büro und sind 24/7 für Sie erreichbar."
  },
  {
    question: "Wann findet die Große Tierwanderung statt?",
    answer: "Die Migration ist ein ganzjähriger Kreislauf. Besonders spektakulär sind die Flussüberquerungen im Norden der Serengeti von Juli bis Oktober sowie die Kalbungszeit im Süden von Januar bis März."
  },
  {
    question: "Kann ich Safari mit Strandurlaub kombinieren?",
    answer: "Absolut. Unsere 'Bush & Beach' Pakete sind unsere Spezialität. Wir organisieren nahtlose Transfers von den Nationalparks direkt zu den exklusivsten Resorts auf Sansibar."
  },
  {
    question: "Sind die Touren privat oder in Gruppen?",
    answer: "Wir spezialisieren uns auf private, maßgeschneiderte Expeditionen. Sie reisen in Ihrem eigenen Tempo mit einem privaten Guide und Fahrzeug, ohne Kompromisse bei der Exklusivität."
  }
];

export function FAQ() {
  return (
    <section className="py-10 md:py-16 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] text-primary mb-2 block">
            Technical Registry
          </span>
          <h2 className="font-headline text-xl md:text-3xl font-bold mb-3 uppercase tracking-tighter text-secondary">
            ALLES <span className="text-primary">WISSENSWERTE</span>
          </h2>
          <p className="text-muted-foreground text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60">
            Häufig gestellte Fragen zu Ihrer nächsten Expedition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border/50 rounded-xl md:rounded-[1.5rem] px-5 md:px-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20 overflow-hidden group"
              >
                <AccordionTrigger className="font-bold text-[11px] md:text-sm py-5 md:py-6 hover:no-underline text-left uppercase tracking-tight text-secondary group-data-[state=open]:text-primary transition-colors [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span>{faq.question}</span>
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Plus className="w-3.5 h-3.5 text-secondary group-data-[state=open]:rotate-45 group-data-[state=open]:text-primary transition-all duration-300" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[9px] md:text-[10px] leading-relaxed pb-6 font-bold uppercase tracking-widest opacity-80 max-w-[95%]">
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
