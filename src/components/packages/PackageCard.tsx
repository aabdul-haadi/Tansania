
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Coffee,
  Users,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  pkg: {
    id: string;
    title: string;
    slug: string;
    tag?: string;
    category: string;
    durationDays: number;
    accommodation?: string;
    groupSize?: string;
    startingPrice: number;
    highlights: string[];
    imageUrl?: string;
    rating?: number;
  };
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group h-full", className)}
    >
      <div className="relative h-full flex flex-col">
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl z-0 shrink-0">
          <Image 
            src={pkg.imageUrl || 'https://picsum.photos/seed/safari/800/1000'} 
            alt={pkg.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80" />
          
          <div className="absolute top-6 left-6 flex flex-col gap-1.5 items-start">
            {pkg.tag && (
              <Badge className="bg-primary text-white border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                {pkg.tag}
              </Badge>
            )}
            <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
              {pkg.category}
            </Badge>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <Link href={`/safaris/${pkg.slug}`}>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors leading-tight mb-6 line-clamp-2 cursor-pointer">
                {pkg.title}
              </h3>
            </Link>
            
            <div className="space-y-3 mb-8">
              {pkg.highlights.slice(0, 3).map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl flex flex-col items-start min-w-[110px]">
                <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Ab</p>
                <p className="text-xl md:text-2xl font-bold text-secondary">
                  {pkg.startingPrice.toLocaleString()} €
                </p>
              </div>
              <Link href={`/safaris/${pkg.slug}`}>
                <Button size="icon" className="w-14 h-14 rounded-2xl bg-primary text-white hover:bg-white hover:text-black hover:border-primary shadow-xl transition-all hover:scale-110">
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 px-2 space-y-4 flex-grow">
          <div className="grid grid-cols-2 gap-4 border-b border-muted pb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                {pkg.durationDays} Tage
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground truncate">
                {pkg.accommodation || 'Premium Lodges'}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
            <span>{pkg.groupSize || 'Max. 8 Teilnehmer'}</span>
            <div className="flex items-center gap-1 text-primary">
              <Star className="w-3 h-3 fill-current" />
              <span>{pkg.rating || '4.9'}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
