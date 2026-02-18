"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useIsMobile } from '@/hooks/use-mobile';

const scenes = [
  {
    id: 'desert-dunes',
    title: 'Ride Across the Golden Sands',
    imgId: 'desert-dunes',
  },
  {
    id: 'serengeti-wildlife',
    title: 'Witness the Untamed',
    imgId: 'serengeti-wildlife',
  },
  {
    id: 'zanzibar-coast',
    title: 'Rest Where the Ocean Breathes',
    imgId: 'zanzibar-coast',
  }
];

export function ImmersiveReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {scenes.map((scene, index) => {
          const start = index / scenes.length;
          const end = (index + 1) / scenes.length;
          
          // Crossfade logic
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, index === scenes.length - 1 ? 1 : 0]
          );

          // Subtle zoom logic (disabled on mobile)
          const scale = useTransform(
            scrollYProgress,
            [start, end],
            isMobile === true ? [1, 1] : [1, 1.05]
          );

          const imgData = PlaceHolderImages.find(img => img.id === scene.imgId);

          return (
            <motion.div
              key={scene.id}
              style={{ opacity, zIndex: scenes.length - index }}
              className="absolute inset-0"
            >
              <motion.div style={{ scale }} className="relative w-full h-full">
                <Image
                  src={imgData?.imageUrl || 'https://picsum.photos/seed/fallback/1920/1080'}
                  alt={scene.title}
                  fill
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  data-ai-hint={imgData?.imageHint}
                />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <h2 className="font-headline text-4xl md:text-7xl font-bold text-white max-w-5xl leading-tight">
                    {scene.title}
                  </h2>
                  <div className="mt-8 flex justify-center">
                    <div className="w-12 h-1 bg-primary rounded-full" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}