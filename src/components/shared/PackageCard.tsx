"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users,
  ArrowRight,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  pkg: {
    id: string;
    title: string;
    slug: string;
    durationDays: number;
    groupSize?: string;
    startingPrice: number;
    highlights: string[];
    excerpt?: string;
    imageUrl?: string;
    category?: string;
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
      whileHover={{ y: -5 }}
      className={cn("group flex flex-col h-full", className)}
    >
      {/* Image Hub - Rounded Top Protocol */}
      <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm z-0 shrink-0">
        <Image 
          src={pkg.imageUrl || 'https://picsum.photos/seed/safari/800/600'} 
          alt={pkg.title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
        
        {/* Category Label */}
        <div className="absolute top-6 left-6">
          <Badge className="bg-primary/90 backdrop-blur-md text-white border-none px-4 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-xl">
            {pkg.category || 'Signature'}
          </Badge>
        </div>
      </div>

      {/* Overlapping Content Box - Architectural UI UX */}
      <div className="relative -mt-16 md:-mt-24 mx-4 md:mx-10 bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl border border-border/50 z-10 flex flex-col flex-grow transition-all duration-500 group-hover:shadow-primary/10">
        <div className="space-y-6 flex-grow flex flex-col">
          {/* Metadata Pulse */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" /> 
                {pkg.durationDays} Tage
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-primary" /> 
                {pkg.groupSize || 'Privat'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[10px] font-black">{pkg.rating || '4.9'}</span>
            </div>
          </div>

          {/* Editorial Title */}
          <Link href={`/safaris/${pkg.slug}`}>
            <h3 className="font-headline text-lg md:text-2xl font-bold text-secondary hover:text-primary transition-colors leading-tight uppercase tracking-tight line-clamp-2">
              {pkg.title}
            </h3>
          </Link>
          
          <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed line-clamp-2 opacity-70">
            {pkg.excerpt || 'Sorgfältig geplante Route durch die spektakulärsten Gebiete Tansanias.'}
          </p>

          {/* Attributes Array */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(pkg.highlights || []).slice(0, 2).map((h, i) => (
              <span key={i} className="text-[8px] font-black uppercase tracking-widest text-secondary/40 border border-border px-2.5 py-1 rounded-md bg-muted/5">
                {h}
              </span>
            ))}
          </div>

          {/* Prestige Conversion Row */}
          <div className="mt-auto pt-8 border-t border-muted flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-1">Invesition ab</span>
              <span className="text-xl md:text-2xl font-black text-secondary tracking-tighter">
                €{pkg.startingPrice?.toLocaleString('de-DE')}
              </span>
            </div>
            <Link href={`/safaris/${pkg.slug}`}>
              <Button size="icon" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary text-white hover:bg-primary transition-all shadow-xl group/btn border-none">
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
