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
    question: "Why book with a Cairo-based agency?",
    answer: "Local expertise, secure booking from Egypt, and deep understanding of North African travel requirements for Tanzania."
  },
  {
    question: "When is the Great Migration?",
    answer: "Year-round. July-October for river crossings, December-March for calving. We tailor dates based on wildlife movement."
  },
  {
    question: "Can I combine safari with beach?",
    answer: "Absolutely. Our 'Bush & Beach' packages start with the Serengeti and end in Zanzibar."
  },
  {
    question: "Are tours private or group?",
    answer: "We specialize in private, bespoke expeditions with dedicated vehicles and professional guides."
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
            Common Inquiries
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
            Everything You Need <span className="text-primary">to Know</span>
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
