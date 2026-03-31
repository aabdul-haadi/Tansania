
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
    quote: "Eine unvergessliche Reise für die ganze Familie! Die Planung war perfekt auf unsere Bedürfnisse mit zwei Kindern abgestimmt. Besonders die kinderfreundlichen Lodges und die flexible Gestaltung haben uns begeistert.",
    author: "Familie Schmidt",
    category: "Familiensafari Tansania"
  },
  {
    quote: "Unsere Flitterwochen waren ein absoluter Traum. Von der ersten Beratung bis zur Rückkehr fühlten wir uns bestens betreut. Die Kombination aus Safari und Strand war perfekt – und die ausgewählten Unterkünfte einfach traumhaft.",
    author: "Julia & Thomas M.",
    category: "Safari & Sansibar Honeymoon"
  },
  {
    quote: "Als anspruchsvolle Reisende waren wir von der Qualität und dem Service absolut begeistert. Jedes Detail stimmte, die Lodges waren erstklassig und die persönliche Betreuung vor Ort außergewöhnlich.",
    author: "Dr. Petra Müller",
    category: "Exklusive Luxury Safari"
  },
  {
    quote: "Die professionelle Beratung und die transparente Planung haben uns sofort überzeugt. Die Reise selbst übertraf all unsere Erwartungen – ein echtes Highlight war der Ngorongoro Krater. Wir kommen wieder!",
    author: "Andreas & Sarah K.",
    category: "Klassische Tansania Safari"
  },
  {
    quote: "Hervorragend organisierte Kilimandscharo-Tour mit exzellentem Guide-Team. Die Vorbereitung war detailliert und vor Ort lief alles reibungslos. Eine Erfahrung fürs Leben!",
    author: "Michael Wagner",
    category: "Kilimandscharo Besteigung"
  },
  {
    quote: "Vom ersten Kontakt an spürten wir, dass wir hier in guten Händen sind. Die Reise war perfekt durchdacht, alle Transfers klappten reibungslos und die Unterkünfte waren handverlesen. Absolute Empfehlung!",
    author: "Familie Hofmann",
    category: "Safari & Sansibar"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-[#3A3634] uppercase tracking-tighter"
          >
            Was unsere Gäste sagen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8581] font-normal text-xs md:text-sm uppercase tracking-widest opacity-80"
          >
            Authentische Erfahrungen von zufriedenen Reisenden
          </motion.p>
        </div>

        {/* Desktop Grid Layout */}
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

        {/* Mobile Slider Layout */}
        <div className="md:hidden -mx-4">
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
    <div className="bg-white rounded-xl p-8 shadow-sm border border-border/40 h-full flex flex-col transition-all duration-500 hover:shadow-md">
      {/* Gold Stars Protocol */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#C9A876] text-[#C9A876]" />
        ))}
      </div>

      {/* Narrative Body */}
      <div className="flex-grow mb-8">
        <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#8A8581] font-normal italic">
          "{item.quote}"
        </p>
      </div>

      <Separator className="bg-border/40 mb-6" />

      {/* Sign-off Registry */}
      <div className="space-y-1">
        <p className="text-[14px] font-bold text-[#3A3634] uppercase tracking-tight">
          {item.author}
        </p>
        <p className="text-[11px] font-normal text-[#8A8581] uppercase tracking-widest opacity-70">
          {item.category}
        </p>
      </div>
    </div>
  );
}
