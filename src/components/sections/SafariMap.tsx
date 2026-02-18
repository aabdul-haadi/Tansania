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
    <section ref={containerRef} className="py-4 lg:py-8 bg-secondary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-12">
          
          {/* Map Textual Content */}
          <div className="flex-1 max-w-md">
            <span className="text-primary font-bold uppercase tracking-widest text-[9px] mb-0.5 block">Our Route</span>
            <h2 className="font-headline text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Cairo to <span className="text-primary italic">Savannah</span>
            </h2>
            
            <div className="space-y-1.5 md:space-y-3">
              {destinations.map((dest, i) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors border border-white/5">
                    <span className="text-[8px] font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] md:text-sm mb-0 group-hover:text-primary transition-colors leading-none">{dest.name}</h4>
                    <p className="text-[8px] md:text-[10px] text-white/40 leading-none">{dest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Visualization - Compacted for side-by-side on mobile */}
          <div className="relative aspect-[4/5] w-32 md:w-64 lg:w-80 shrink-0">
            <svg 
              viewBox="0 0 200 300" 
              className="w-full h-full drop-shadow-xl"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="mapGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />

              <g className="opacity-30">
                <path d="M80 15 Q120 5 145 35 L155 75 Q115 85 75 65 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <path d="M65 140 Q105 130 155 160 L165 220 Q115 260 65 230 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              </g>

              <motion.path d={journeyPath} stroke="rgba(181, 142, 69, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
              <motion.path d={journeyPath} stroke="hsl(var(--primary))" strokeWidth="2" style={{ pathLength }} />

              {destinations.map((dest, i) => (
                <g key={dest.id}>
                  <circle cx={dest.x} cy={dest.y} r="2.5" className="fill-primary" />
                  <motion.text
                    x={dest.x + 6}
                    y={dest.y + 2}
                    className="fill-white/40 text-[6px] font-bold uppercase tracking-widest hidden md:block"
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
