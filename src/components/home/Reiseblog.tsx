"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: "Wildebeest Migration Insights Tipps für deine Safari",
    slug: "wildebeest-migration-insights",
    date: "26 August, 2024",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    tag: "Migration",
    hint: "migration herds"
  },
  {
    id: 2,
    title: "Kalbung in Ndutu Einmaliges Naturerlebnis",
    slug: "kalbung-in-ndutu",
    date: "26 August, 2024",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    tag: "Nationalparks",
    hint: "safari jeep"
  },
  {
    id: 3,
    title: "Mara River Crossing: Spannung pur hautnah",
    slug: "mara-river-crossing",
    date: "26 August, 2024",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800",
    tag: "Wildnis",
    hint: "river crossing"
  }
];

export function Reiseblog() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary uppercase tracking-tighter leading-none">
            Reiseblog
          </h2>
          <p className="text-muted-foreground font-bold text-[8px] md:text-[10px] uppercase tracking-widest max-w-xl mx-auto opacity-60">
            Erfahrungen und wertvolle Einblicke aus Jahren der Reiseexpertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
                <Image 
                  src={post.img} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  data-ai-hint={post.hint}
                />
              </div>

              <div className="relative -mt-24 md:-mt-32 mx-3 md:mx-4 mb-4 bg-white rounded-[1rem] md:rounded-[1.5rem] p-5 md:p-8 shadow-2xl border border-border/50 z-10 flex flex-col justify-between flex-grow min-h-[180px]">
                <div className="absolute -top-4 right-6">
                  <Badge className="bg-primary text-white border-none font-black text-[7px] md:text-[8px] uppercase px-4 py-1.5 shadow-lg rounded-full tracking-widest">
                    {post.tag}
                  </Badge>
                </div>

                <div className="space-y-4 md:space-y-5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-secondary opacity-40" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                  </div>
                  <h3 className="font-headline text-xs md:text-base font-bold text-secondary uppercase leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>

                <Link href={`/blog/${post.slug}`} className="pt-6 mt-auto flex items-center gap-2 text-secondary group-hover:text-primary transition-colors cursor-pointer">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Mehr lesen</span>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
