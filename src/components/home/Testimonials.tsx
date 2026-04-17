"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote: "Eine unvergessliche reise für die ganze familie! Die planung war perfekt auf unsere bedürfnisse mit zwei kindern abgestimmt. Besonders die kinderfreundlichen lodges und die flexible gestaltung haben uns begeistert.",
    author: "Familie Schmidt",
    category: "Familiensafari Tansania"
  },
  {
    quote: "Unsere flitterwochen waren ein absoluter traum. Von der ersten beratung bis zur rückkehr fühlten wir uns bestens betreut. Die kombination aus safari und strand war perfekt – und die ausgewählten unterkünfte einfach traumhaft.",
    author: "Julia & Thomas M.",
    category: "Safari & Sansibar Honeymoon"
  },
  {
    quote: "Als anspruchsvolle reisende waren wir von der qualität und dem service absolut begeistert. Jedes detail stimmte, die lodges waren erstklassig und die persönliche betreuung vor Ort außergewöhnlich.",
    author: "Dr. Petra Müller",
    category: "Exklusive Luxury Safari"
  }
];

export function Testimonials() {
  return (
    <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary mb-4"
          >
            Was unsere gäste sagen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[11px] md:text-sm tracking-widest opacity-80"
          >
            Authentische erfahrungen von zufriedenen reisenden
          </motion.p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((item, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-[88%]">
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/40 h-full flex flex-col transition-all duration-500 hover:shadow-md text-left">
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
        ))}
      </div>

      <div className="flex-grow mb-6">
        <p className="text-[14px] leading-[20px] text-muted-foreground font-normal">
          "{item.quote}"
        </p>
      </div>

      <Separator className="bg-border/40 mb-5" />

      <div className="space-y-1">
        <p className="text-[13px] font-bold text-secondary tracking-tight">
          {item.author}
        </p>
        <p className="text-[10px] font-normal text-muted-foreground tracking-widest opacity-70">
          {item.category}
        </p>
      </div>
    </div>
  );
}
