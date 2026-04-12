
"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const faqs = [
  { q: "Benötige ich ein Visum für Tansania?", a: "Ja, für deutsche Staatsangehörige ist ein Visum erforderlich. Online oder vor Ort möglich." },
  { q: "Wann ist die beste Safari-Zeit?", a: "Trockenzeiten von Juni-Oktober und Januar-Februar sind ideal." },
  { q: "Kann ich Ägypten und Tansania kombinieren?", a: "Absolut. Unsere Kairo-Serengeti-Sansibar-Verbindung ist unsere Spezialität." }
];

export function EgyptFAQ() {
  return (
    <section className="py-16 md:py-32 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tighter">Häufig gestellte Fragen (FAQ)</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-[#f8f8f8] rounded-xl px-6 md:px-8 transition-all hover:bg-white group">
              <AccordionTrigger className="font-bold text-xs md:text-sm py-5 hover:no-underline text-left text-secondary transition-colors [&>svg]:hidden">
                <div className="flex items-center justify-between w-full gap-4">
                  <span className="tracking-tight">{faq.q}</span>
                  <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[10px] md:text-xs leading-relaxed font-bold pb-6 uppercase tracking-widest">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
