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
    <section className="pt-4 md:pt-8 pb-12 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary"
          >
            Was unsere Gäste sagen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-[11px] md:text-sm tracking-widest opacity-80"
          >
            Authentische Erfahrungen von zufriedenen Reisenden
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
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/40 h-full flex flex-col transition-all duration-500 hover:shadow-md">
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

      <div className="space-y-1 text-left">
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