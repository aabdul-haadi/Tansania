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
  
  // Faster tracking: we adjust the scroll offset to trigger the animation more quickly as it enters view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"]
  });

  // Snappier spring for "fast tracking" feel
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
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
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-1 block">Our Signature Route</span>
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

          {/* Map Visualization - Advanced Modern SVG */}
          <div className="relative w-28 md:w-[35%] shrink-0 flex items-center">
            <svg 
              viewBox="0 0 200 300" 
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Advanced Grid Pattern */}
                <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                </pattern>
                {/* Glow Filter for the Path */}
                <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                {/* Gradient for the path */}
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#mapGrid)" rx="20" />

              {/* Topographic and Mapping lines */}
              <g className="opacity-10">
                <circle cx="100" cy="150" r="140" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                <path d="M0 80 Q100 60 200 100" stroke="white" strokeWidth="0.3" />
                <path d="M0 160 Q100 140 200 180" stroke="white" strokeWidth="0.3" />
                <path d="M0 240 Q100 220 200 260" stroke="white" strokeWidth="0.3" />
              </g>

              {/* Background trace of the path */}
              <path 
                d={journeyPath} 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Active Animated Path */}
              <motion.path 
                d={journeyPath} 
                stroke="url(#pathGradient)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ pathLength }} 
                filter="url(#pathGlow)"
              />

              {/* Destination Nodes */}
              {destinations.map((dest, i) => (
                <g key={dest.id}>
                  <motion.circle 
                    cx={dest.x} 
                    cy={dest.y} 
                    r="4" 
                    className="fill-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  />
                  <circle 
                    cx={dest.x} 
                    cy={dest.y} 
                    r="8" 
                    className="stroke-primary/30 fill-none animate-ping" 
                    style={{ animationDuration: '3s' }}
                  />
                  <motion.text
                    x={dest.x + 10}
                    y={dest.y + 4}
                    className="fill-white/40 text-[8px] font-bold uppercase tracking-[0.2em] hidden md:block pointer-events-none font-sans"
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
