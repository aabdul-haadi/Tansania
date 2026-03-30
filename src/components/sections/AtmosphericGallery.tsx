
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", hint: "serengeti herds", size: "large" },
  { src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800", hint: "safari jeep", size: "small" },
  { src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800", hint: "elephant savannah", size: "mid" },
  { src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", hint: "zanzibar water", size: "large" }
];

export function AtmosphericGallery() {
  return (
    <section className="py-16 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Visual Journal</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter">
            DIE WILDNIS <span className="text-primary">SPÜREN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] md:h-[800px]">
          <div className="md:col-span-4 relative rounded-[2rem] overflow-hidden group">
            <Image src={images[0].src} alt="Safari" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="md:col-span-8 grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[2rem] overflow-hidden group">
                <Image src={images[1].src} alt="Safari" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="relative rounded-[2rem] overflow-hidden group">
                <Image src={images[2].src} alt="Safari" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden group">
              <Image src={images[3].src} alt="Safari" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
