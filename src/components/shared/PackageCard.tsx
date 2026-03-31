"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users,
  ArrowRight
} from 'lucide-react';
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
  };
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn("group h-full", className)}
    >
      <div className="relative h-full flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image Hub */}
        <div className="relative aspect-[16/10] overflow-hidden shrink-0">
          <Image 
            src={pkg.imageUrl || 'https://picsum.photos/seed/safari/800/600'} 
            alt={pkg.title} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
        </div>

        {/* Content Protocol */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <Link href={`/safaris/${pkg.slug}`}>
            <h3 className="font-headline text-lg md:text-2xl font-bold text-secondary hover:text-primary transition-colors leading-tight mb-4 uppercase tracking-tight">
              {pkg.title}
            </h3>
          </Link>
          
          <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed line-clamp-2 mb-6 opacity-70">
            {pkg.excerpt || 'Sorgfältig geplante Route durch die spektakulärsten Gebiete Tansanias.'}
          </p>

          {/* Technical Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
            <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>{pkg.durationDays} Tage</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span>{pkg.groupSize || '2-6 Personen'}</span>
            </div>
          </div>

          {/* Attributes Matrix */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(pkg.highlights || []).slice(0, 3).map((h, i) => (
              <Badge key={i} variant="outline" className="bg-muted/30 border-muted text-[7px] md:text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-sm">
                {h}
              </Badge>
            ))}
          </div>

          {/* Conversion Footer */}
          <div className="mt-auto pt-6 border-t border-muted flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[11px] md:text-sm font-black text-secondary uppercase tracking-tight">
                ab €{pkg.startingPrice?.toLocaleString('de-DE')}
              </p>
            </div>
            <Link href={`/safaris/${pkg.slug}`} className="flex items-center gap-2 text-secondary hover:text-primary transition-all group/btn">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Anfrage stellen</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
