"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const magazinePosts = [
  {
    id: 1,
    title: "Die schönsten Safari-Lodges in der Serengeti",
    category: "Unterkünfte",
    date: "15. März 2026",
    excerpt: "Entdecken Sie unsere handverlesene Auswahl der luxuriösesten und authentischsten Unterkünfte im Herzen der Serengeti.",
    img: "/assets/images/home/Magazin-1.webp",
    hint: "safari lodge"
  },
  {
    id: 2,
    title: "Sansibar: Geheimtipps abseits der Touristenpfade",
    category: "Reiseziele",
    date: "8. März 2026",
    excerpt: "Erleben Sie die authentische Seite Sansibars – von versteckten Stränden bis zu lokalen Gewürzmärkten.",
    img: "/assets/images/home/Magazin-2.webp",
    hint: "zanzibar beach"
  },
  {
    id: 3,
    title: "Optimal vorbereitet: Checkliste für Ihre Safari",
    category: "Reisetipps",
    date: "1. März 2026",
    excerpt: "Von der richtigen Kleidung bis zur Kameraausrüstung – alles, was Sie für Ihre perfekte Safari wissen müssen.",
    img: "/assets/images/home/magzine-3.png",
    hint: "safari gear"
  }
];

export function MagazinInspiration() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Protocol */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-5xl font-normal text-[#3A3634]"
            >
              Magazin & Inspiration
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#8A8581] font-medium text-xs md:text-sm uppercase tracking-widest opacity-80"
            >
              Expertenwissen und Reisetipps aus erster Hand
            </motion.p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-[11px] font-bold text-[#3A3634] uppercase tracking-widest hover:text-[#C9A876] transition-colors group">
            Alle Artikel <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {magazinePosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <MagazineCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Modern Slider */}
        <div className="md:hidden -mx-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {magazinePosts.map((post, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-[88%]">
                  <MagazineCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-10 flex justify-center">
            <Link href="/blog" className="flex items-center gap-2 text-[10px] font-bold text-[#3A3634] uppercase tracking-widest">
              Alle Artikel <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MagazineCard({ post }: { post: any }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border/40 hover:shadow-md transition-all duration-500 group">
      {/* Visual Anchor */}
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <Image 
          src={post.img} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          data-ai-hint={post.hint}
        />
      </div>

      {/* Content Protocol */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A876] px-3 py-1.5 rounded-full bg-[#C9A876]/10">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#8A8581] uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-[#C9A876]/60" />
            {post.date}
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <h3 className="font-headline text-xl md:text-[24px] leading-[32px] font-medium text-[#3A3634] leading-tight group-hover:text-[#C9A876] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm md:text-base text-[#4A4543] font-normal leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <Link href={`/blog`} className="inline-flex items-center gap-2 text-[11px] font-bold text-[#3A3634] hover:text-[#C9A876] transition-colors group/link">
            Weiterlesen <ArrowRight className="w-3 h-3 transition-transform group/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}