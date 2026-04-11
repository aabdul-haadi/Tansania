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
 * Uses global H3 and P tags for strict design consistency.
 * Recalibrated overlay for visual clarity.
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
          className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.9]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Content Protocol */}
      <div className="p-5 md:p-7 flex flex-col flex-grow text-left">
        <div className="space-y-3 flex-grow">
          {/* Headline Spec: Uses global H3 registry */}
          <Link href={packageLink} className="block group/title">
            <h3 className="group-hover/title:text-primary transition-colors tracking-normal">
              {pkg.title}
            </h3>
          </Link>
          
          {/* Narrative Spec: Uses global P registry */}
          <p className="line-clamp-2 tracking-normal">
            {pkg.excerpt}
          </p>

          {/* Technical Metadata Row */}
          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground tracking-normal">
              <Clock className="w-3 text-primary" /> 
              {pkg.durationDays} Tage
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground tracking-normal">
              <Users className="w-3 text-primary" /> 
              {pkg.groupSize || 'Privat'}
            </div>
          </div>

          {/* Tag Cloud Registry */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {(pkg.highlights || []).slice(0, 3).map((h, i) => (
              <span key={i} className="text-[9px] font-bold tracking-normal text-primary px-2.5 py-1 rounded-md bg-primary/5 border border-primary/10">
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Conversion Footer - Compact Protocol */}
        <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-4">
          <Link href={packageLink} className="flex flex-col group/price">
            <span className="text-[9px] font-bold text-muted-foreground tracking-normal leading-none mb-1">Ab Preis</span>
            <span className="text-xl md:text-2xl font-bold text-secondary leading-none tracking-tighter group-hover/price:text-primary transition-colors">
              €{pkg.startingPrice?.toLocaleString('de-DE')}
            </span>
          </Link>
          
          <Link href={packageLink}>
            <Button variant="outline" size="sm" className="h-10 px-5 rounded-lg text-[11px] font-bold border-border/60 hover:border-primary/40 transition-all flex items-center gap-2 tracking-normal">
              Details <ArrowRight className="w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}