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
 * 100% High-Fidelity Clone of the Signature Card.
 * Updated accent color to #C9A876 as requested.
 * Readability enhanced with larger text and better weights.
 */
export function PackageCard({ pkg, className }: PackageCardProps) {
  return (
    <div className={cn("bg-white rounded-[1rem] overflow-hidden shadow-sm border border-border/40 hover:shadow-md transition-all duration-500 flex flex-col h-full group", className)}>
      {/* Top Visual Hub */}
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <Image 
          src={pkg.imageUrl || 'https://picsum.photos/seed/safari/800/600'} 
          alt={pkg.title} 
          fill 
          unoptimized
          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
      </div>

      {/* Content Protocol */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="space-y-4 flex-grow">
          {/* Headline - Cormorant Garamond 500 */}
          <h3 className="font-headline text-2xl md:text-3xl font-medium text-[#3A3634] leading-tight">
            {pkg.title}
          </h3>
          
          {/* Narrative - Inter - Readability Improved */}
          <p className="text-sm md:text-base text-[#4A4543] font-normal leading-relaxed line-clamp-3">
            {pkg.excerpt}
          </p>

          {/* Technical Metadata Row */}
          <div className="flex items-center gap-5 pt-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A8581] uppercase tracking-widest">
              <Clock className="w-4 h-4 text-[#C9A876]" /> 
              {pkg.durationDays} Tage
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A8581] uppercase tracking-widest">
              <Users className="w-4 h-4 text-[#C9A876]" /> 
              {pkg.groupSize}
            </div>
          </div>

          {/* Tag Cloud Registry - Updated to #C9A876 */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(pkg.highlights || []).map((h, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-[#C9A876] px-3.5 py-1.5 rounded-full bg-[#C9A876]/10">
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Conversion Footer */}
        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-medium text-[#8A8581] uppercase tracking-widest">ab</span>
            <span className="text-xl font-bold text-[#3A3634]">
              €{pkg.startingPrice?.toLocaleString('de-DE')}
            </span>
          </div>
          
          <Link href={`/safaris/${pkg.slug}`} className="group/btn inline-flex items-center gap-2 text-xs font-bold text-[#3A3634] hover:text-[#C9A876] transition-colors uppercase tracking-widest">
            Anfrage stellen <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
