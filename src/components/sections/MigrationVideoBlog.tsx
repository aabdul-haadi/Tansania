"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const migrationBlogPosts = [
  {
    id: 1,
    title: "Wildebeest Migration Insights: Tipps für deine Safari",
    date: "26. August, 2024",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    hint: "migration landscape"
  },
  {
    id: 2,
    title: "Kalbung in Ndutu: Einmaliges Naturerlebnis",
    date: "26. August, 2024",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800",
    hint: "safari jeep"
  },
  {
    id: 3,
    title: "Mara River Crossing: Spannung pur hautnah",
    date: "26. August, 2024",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800",
    hint: "river crossing"
  }
];

export function MigrationVideoBlog() {
  return (
    <div className="bg-white space-y-24 md:space-y-32 py-16 md:py-32 overflow-hidden">
      
      {/* Section 1: Cinematic Video Discovery */}
      <section className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-secondary group cursor-pointer"
        >
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Migration Discovery Video" 
            fill 
            className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
            data-ai-hint="migration zebras"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 space-y-6 md:space-y-8">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-10 md:h-10 text-primary fill-current ml-1" />
            </div>
            <div className="max-w-2xl space-y-4">
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none">
                AUF VIDEO ENTDECKEN
              </h2>
              <p className="text-white/80 font-bold text-[10px] md:text-sm uppercase tracking-widest leading-relaxed">
                Willkommen im Herzen Afrikas – dort, wo die Savanne niemals schläft.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Reiseblog (Travel Blog) */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary uppercase tracking-tighter">
            Reiseblog
          </h2>
          <p className="text-muted-foreground font-bold text-[8px] md:text-[10px] uppercase tracking-widest max-w-xl mx-auto opacity-60">
            Erfahrungen und wertvolle Einblicke aus Jahren der Reiseexpertise
          </p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {migrationBlogPosts.map((post) => (
            <MigrationBlogStaticCard key={post.id} post={post} />
          ))}
        </div>

        <div className="md:hidden -mx-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2">
              {migrationBlogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-2 basis-[85%]">
                  <MigrationBlogStaticCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

function MigrationBlogStaticCard({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-border/50 flex flex-col group hover:shadow-xl transition-all duration-500 h-full">
      <div className="relative aspect-square overflow-hidden">
        <Image 
          src={post.img} 
          alt={post.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
          data-ai-hint={post.hint}
        />
        <div className="absolute bottom-4 right-4">
          <Badge className="bg-primary text-white border-none font-bold text-[8px] uppercase px-3 py-1 shadow-lg">
            Migration
          </Badge>
        </div>
      </div>
      
      <div className="p-8 flex flex-col justify-between flex-grow gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
          </div>
          <h3 className="font-headline text-lg md:text-xl font-bold text-secondary uppercase leading-tight line-clamp-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </div>

        <div className="pt-6 border-t border-muted flex items-center gap-2 text-secondary group-hover:text-primary transition-colors cursor-pointer">
          <span className="text-[10px] font-black uppercase tracking-widest">Mehr lesen</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
