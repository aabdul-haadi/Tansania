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
  Coffee
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

/**
 * MASTER GLOBAL PACKAGE CARD
 * 
 * Every safari listing on the site (Homepage, Destinations, Safaris) 
 * uses this definitive component. Update once, sync everywhere.
 * Strictly BOLD and NON-ITALIC.
 */

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
      <div className="relative h-full flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
        
        {/* Visual Anchor */}
        <div className="relative aspect-[4/5] overflow-hidden shrink-0">
          <Image 
            src={pkg.imageUrl || 'https://picsum.photos/seed/safari/800/1000'} 
            alt={pkg.title} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          
          {/* Metadata Badges */}
          <div className="absolute top-6 left-6 flex flex-col gap-1.5 items-start">
            {pkg.tag && (
              <Badge className="bg-primary text-white border-none px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                {pkg.tag}
              </Badge>
            )}
            <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
              {pkg.category}
            </Badge>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <Link href={`/safaris/${pkg.slug}`}>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors leading-tight mb-6 line-clamp-2 uppercase">
                {pkg.title}
              </h3>
            </Link>
            
            <div className="space-y-2.5 mb-8">
              {(pkg.highlights || []).slice(0, 3).map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl flex flex-col items-start min-w-[110px]">
                <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Prestige ab</p>
                <p className="text-xl md:text-2xl font-bold text-secondary">
                  €{pkg.startingPrice?.toLocaleString()}
                </p>
              </div>
              <Link href={`/safaris/${pkg.slug}`}>
                <Button size="icon" className="w-14 h-14 rounded-2xl bg-primary text-white hover:bg-secondary shadow-xl transition-all hover:scale-110">
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Registry Bottom */}
        <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-4 border-b border-muted pb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                {pkg.durationDays} Tage
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground truncate">
                {pkg.accommodation || 'Premium'}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            <span>{pkg.groupSize || 'Privat-Expedition'}</span>
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
