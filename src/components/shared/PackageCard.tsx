"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, 
  Users,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
  };
  className?: string;
}

/**
 * Optimized Signature Card.
 * Compacted for better responsiveness and vertical density.
 * Ensures Image, Title, Price, and Button are all linked to the destination.
 */
export function PackageCard({ pkg, className }: PackageCardProps) {
  const packageLink = `/safaris/${pkg.slug}`;

  return (
    <div className={cn("bg-white rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden shadow-sm border border-border/40 hover:shadow-md transition-all duration-500 flex flex-col h-full group", className)}>
      {/* Top Visual Hub - Linked */}
      <Link href={packageLink} className="relative aspect-[16/10] overflow-hidden shrink-0 block">
        <Image 
          src={pkg.imageUrl || 'https://picsum.photos/seed/safari/800/600'} 
          alt={pkg.title} 
          fill 
          unoptimized
          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
      </Link>

      {/* Content Protocol */}
      <div className="p-5 md:p-7 flex flex-col flex-grow">
        <div className="space-y-3 flex-grow">
          {/* Headline - Linked - Cormorant Garamond 500 */}
          <Link href={packageLink} className="block group/title">
            <h3 className="font-headline text-xl md:text-2xl font-medium text-[#3A3634] leading-tight tracking-tight group-hover/title:text-primary transition-colors">
              {pkg.title}
            </h3>
          </Link>
          
          {/* Narrative - Inter - Compacted for high density */}
          <p className="text-xs md:text-sm text-[#4A4543] font-normal leading-relaxed line-clamp-2 opacity-80 tracking-widest">
            {pkg.excerpt}
          </p>

          {/* Technical Metadata Row */}
          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#8A8581] tracking-widest">
              <Clock className="w-3 h-3 text-[#C9A876]" /> 
              {pkg.durationDays} Tage
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#8A8581] tracking-widest">
              <Users className="w-3 h-3 text-[#C9A876]" /> 
              {pkg.groupSize || 'Privat'}
            </div>
          </div>

          {/* Tag Cloud Registry */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {(pkg.highlights || []).slice(0, 3).map((h, i) => (
              <span key={i} className="text-[8px] font-bold tracking-widest text-[#C9A876] px-2.5 py-1 rounded-md bg-[#C9A876]/5 border border-[#C9A876]/10">
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Conversion Footer - Compact Protocol */}
        <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-4">
          <Link href={packageLink} className="flex flex-col group/price">
            <span className="text-[8px] font-bold text-[#8A8581] tracking-[0.2em] leading-none mb-1">Ab Preis</span>
            <span className="text-base md:text-xl font-bold text-[#3A3634] leading-none tracking-tighter group-hover/price:text-primary transition-colors">
              €{pkg.startingPrice?.toLocaleString('de-DE')}
            </span>
          </Link>
          
          <Link href={packageLink}>
            <Button variant="outline" size="sm" className="h-9 px-4 rounded-lg text-[9px] font-bold border-border/60 hover:border-primary/40 hover:text-primary transition-all flex items-center gap-2">
              Details <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
