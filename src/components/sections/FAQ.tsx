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
    question: "Why book with an Egypt-based agency for a Tanzania safari?",
    answer: "Serengeti Dreams bridges the gap between Cairo and the Savannah. We offer local expertise, secure booking from Egypt, and a deep understanding of the travel requirements for North African and international travelers looking to explore the heart of Tanzania."
  },
  {
    question: "When is the best time to witness the Great Migration?",
    answer: "The migration is a year-round event. Typically, the herds are in the Serengeti from July to October for the dramatic river crossings, and from December to March for the calving season in the southern plains. We tailor your itinerary based on the movement of the wildlife."
  },
  {
    question: "Is it possible to combine a safari with a beach stay?",
    answer: "Absolutely. Our signature 'Bush & Beach' packages are designed specifically for this. We usually recommend starting with the high-energy safari in the Serengeti or Ngorongoro and concluding with a tranquil escape to the turquoise shores of Zanzibar."
  },
  {
    question: "Are your safari tours private or in groups?",
    answer: "We specialize in private, bespoke expeditions. This ensures you have a dedicated vehicle and guide, allowing for a flexible pace and a more intimate connection with nature. We can also arrange small-group tours upon request."
  },
  {
    question: "What is included in the package price?",
    answer: "Our premium packages typically include all boutique accommodations, professional guide services, park entrance fees, internal transfers (including bush flights), and most meals. International flights and personal insurance are usually handled separately, though we provide full guidance."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
            Common Inquiries
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
            Everything You Need <br /> <span className="text-primary italic">to Know</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Preparing for a journey to the wild requires clarity. Here are the answers to our most frequent guest questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border/50 rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="font-bold text-lg hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
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
