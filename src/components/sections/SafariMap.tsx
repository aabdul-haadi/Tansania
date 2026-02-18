"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const destinations = [
  { id: 'cairo', name: 'Cairo', x: 100, y: 40, desc: 'Nile Gateway' },
  { id: 'serengeti', name: 'Serengeti', x: 80, y: 160, desc: 'Wild Plains' },
  { id: 'ngorongoro', name: 'Crater', x: 100, y: 190, desc: 'Great Crater' },
  { id: 'zanzibar', name: 'Zanzibar', x: 140, y: 230, desc: 'Spice Shores' },
];

export function SafariMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const journeyPath = "M 100 40 L 80 160 L 100 190 L 140 230";

  return (
    <section ref={containerRef} className="py-4 md:py-8 bg-secondary text-white overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-12">
          
          {/* Map Textual Content - Left Aligned */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <div className="mb-3 md:mb-6">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-1 block">Our Route</span>
              <h2 className="font-headline text-xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                Cairo to <span className="text-primary italic">Savannah</span>
              </h2>
            </div>
            
            <div className="space-y-2.5 md:space-y-5 max-w-xs md:max-w-md">
              {destinations.map((dest, i) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2.5 md:gap-4 group"
                >
                  <div className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all border border-white/10 shadow-lg">
                    <span className="text-[9px] md:text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[11px] md:text-lg mb-0 group-hover:text-primary transition-colors leading-tight truncate">{dest.name}</h4>
                    <p className="text-[8px] md:text-[10px] text-white/40 leading-none mt-0.5 truncate font-light uppercase tracking-widest">{dest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Visualization - Side-by-side layout preserved on all screens */}
          <div className="relative w-28 md:w-[35%] shrink-0 flex items-center">
            <svg 
              viewBox="0 0 200 300" 
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                </pattern>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />

              {/* Topographic hint lines */}
              <g className="opacity-15">
                <path d="M50 100 Q100 80 150 120 T180 200" stroke="white" strokeWidth="0.2" fill="none" />
                <path d="M30 150 Q80 130 130 170 T160 250" stroke="white" strokeWidth="0.2" fill="none" />
              </g>

              <motion.path d={journeyPath} stroke="rgba(181, 142, 69, 0.15)" strokeWidth="1.2" strokeDasharray="3 3" />
              <motion.path d={journeyPath} stroke="hsl(var(--primary))" strokeWidth="2.5" style={{ pathLength }} filter="url(#glow)" />

              {destinations.map((dest, i) => (
                <g key={dest.id}>
                  <circle cx={dest.x} cy={dest.y} r="3" className="fill-primary" />
                  <circle cx={dest.x} cy={dest.y} r="6" className="stroke-primary/20 fill-none animate-pulse" />
                  <motion.text
                    x={dest.x + 8}
                    y={dest.y + 3}
                    className="fill-white/60 text-[7px] font-bold uppercase tracking-[0.2em] hidden md:block pointer-events-none"
                  >
                    {dest.name}
                  </motion.text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
