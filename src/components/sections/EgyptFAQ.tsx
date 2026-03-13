"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const faqs = [
  { q: "Benötige ich ein Visum für Tansania und wo beantrage ich es?", a: "Ja, für die Einreise nach Tansania benötigen deutsche Staatsangehörige ein Visum. Dieses kann bequem online als e-Visum oder bei der Ankunft am Flughafen beantragt werden." },
  { q: "Welche Arten von Visa gibt es für Sansibar?", a: "Es gibt Touristenvisa (Single Entry), Business-Visa und Multiple Entry Visa für Langzeitreisende." },
  { q: "Wie funktioniert das e-Visum für Sansibar?", a: "Sie füllen ein Online-Formular auf der offiziellen Regierungsseite aus, laden Dokumente hoch und zahlen die Gebühr. Die Bearbeitung dauert meist 48-72 Stunden." },
  { q: "Kann ich das Visum für Sansibar online beantragen? Welche Dokumente brauche ich?", a: "Ja, online ist empfohlen. Sie benötigen einen Reisepass (min. 6 Monate gültig), ein Passfoto und ein Rückflugticket." },
  { q: "Gibt es ein Visum bei Ankunft für Sansibar?", a: "Ja, an den internationalen Flughäfen von Sansibar und Tansania Festland kann ein 'Visa on Arrival' erworben werden." },
  { q: "Gilt das Sansibar-Visum auch für das tansanische Festland?", a: "Ja, das Visum für die Vereinigte Republik Tansania gilt sowohl für das Festland als auch für die Insel Sansibar." },
  { q: "Wann ist die beste Zeit für eine Tansania-Safari?", a: "Die Trockenzeiten von Juni bis Oktober und Januar bis Februar gelten als ideal für Tierbeobachtungen." },
  { q: "Wie viel kostet eine 7-tägige Safari in Tansania?", a: "Die Kosten variieren je nach Komfortklasse (Budget, Mid-Range, Luxury), liegen aber meist zwischen 2.500 € und 4.500 € pro Person." },
  { q: "Ist eine Familien-Safari in Tansania sicher für Kinder?", a: "Absolut. Wir bieten kinderfreundliche Lodges und spezielle Guides an, die auf die Bedürfnisse von Familien eingehen." },
  { q: "Welche Route ist für die Kilimandscharo-Besteigung am besten?", a: "Für Einsteiger empfehlen wir die Machame- oder Lemosho-Route aufgrund der besseren Akklimatisierung." },
  { q: "Wie kombiniere ich Safari und Strandurlaub auf Sansibar?", a: "Wir planen Ihre Reise nahtlos – nach der Safari fliegen Sie direkt vom Busch auf die Insel für pure Entspannung." },
];

export function EgyptFAQ() {
  return (
    <section className="py-16 md:py-32 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tighter">
            Häufig gestellte Fragen (FAQ)
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="border-none bg-[#f8f8f8] rounded-xl px-6 md:px-8 transition-all hover:bg-white hover:shadow-sm border border-transparent hover:border-border group"
            >
              <AccordionTrigger className="font-bold text-xs md:text-sm py-5 hover:no-underline text-left text-secondary transition-colors [&>svg]:hidden">
                <div className="flex items-center justify-between w-full gap-4">
                  <span className="uppercase tracking-tight leading-snug">{faq.q}</span>
                  <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[10px] md:text-xs leading-relaxed font-bold pb-6 uppercase tracking-widest">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
