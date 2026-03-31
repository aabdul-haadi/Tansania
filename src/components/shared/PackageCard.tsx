
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
 * Precise vertical stack architecture as per screenshot.
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
          {/* Headline */}
          <h3 className="font-headline text-xl md:text-2xl font-normal text-[#3A3634] leading-tight">
            {pkg.title}
          </h3>
          
          {/* Narrative */}
          <p className="text-[13px] text-[#8A8581] font-normal leading-relaxed line-clamp-2">
            {pkg.excerpt}
          </p>

          {/* Technical Metadata Row */}
          <div className="flex items-center gap-5 pt-1">
            <div className="flex items-center gap-2 text-[11px] font-normal text-[#8A8581]">
              <Clock className="w-3.5 h-3.5 text-primary" /> 
              {pkg.durationDays} Tage
            </div>
            <div className="flex items-center gap-2 text-[11px] font-normal text-[#8A8581]">
              <Users className="w-3.5 h-3.5 text-primary" /> 
              {pkg.groupSize}
            </div>
          </div>

          {/* Tag Cloud Registry */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(pkg.highlights || []).map((h, i) => (
              <span key={i} className="text-[9px] font-bold uppercase tracking-tight text-primary px-3 py-1.5 rounded-full bg-[#fdf7f2]">
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Conversion Footer */}
        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-[12px] font-normal text-[#3A3634]">ab</span>
            <span className="text-lg font-bold text-[#3A3634]">
              €{pkg.startingPrice?.toLocaleString('de-DE')}
            </span>
          </div>
          
          <Link href={`/safaris/${pkg.slug}`} className="group/btn inline-flex items-center gap-2 text-[11px] font-bold text-[#3A3634] hover:text-primary transition-colors">
            Anfrage stellen <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
