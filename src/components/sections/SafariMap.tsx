"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const destinations = [
  { id: 'cairo', name: 'Cairo', x: 100, y: 40, desc: 'The Nile Gateway' },
  { id: 'serengeti', name: 'Serengeti', x: 80, y: 160, desc: 'Heart of the Wild' },
  { id: 'ngorongoro', name: 'Crater', x: 100, y: 190, desc: 'Volcanic Garden' },
  { id: 'zanzibar', name: 'Zanzibar', x: 140, y: 230, desc: 'Spice Shores' },
];

export function SafariMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Fast tracking: the animation triggers early and completes quickly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 20%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const journeyPath = "M 100 40 L 80 160 L 100 190 L 140 230";

  return (
    <section ref={containerRef} className="py-2 md:py-4 bg-secondary text-white overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-row items-center justify-between gap-2 md:gap-16">
          
          {/* Left: Journey Timeline */}
          <div className="flex-1 min-w-0 z-10">
            <div className="mb-2 md:mb-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-1 block"
              >
                Expedition Logistics
              </motion.span>
              <h2 className="font-headline text-lg md:text-5xl font-bold leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                Cairo to <span className="text-primary italic">Savannah</span>
              </h2>
            </div>
            
            <div className="space-y-2 md:space-y-6 max-w-xs md:max-w-md">
              {destinations.map((dest, i) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 md:gap-5 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                      <span className="text-[9px] md:text-sm font-bold font-mono">{i + 1}</span>
                    </div>
                    {i < destinations.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-2 md:h-6 bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[10px] md:text-xl group-hover:text-primary transition-colors leading-tight truncate">{dest.name}</h4>
                    <p className="text-[7px] md:text-[11px] text-white/30 truncate font-light uppercase tracking-widest leading-none mt-0.5">{dest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Modern SVG Navigator */}
          <div className="relative w-24 md:w-[45%] shrink-0 flex items-center justify-end">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <svg 
              viewBox="0 0 200 300" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="navigatorGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                </pattern>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#navigatorGrid)" rx="30" />

              {/* Topographic Accents */}
              <g className="opacity-[0.05] stroke-white">
                <circle cx="100" cy="150" r="120" strokeWidth="0.5" strokeDasharray="4 8" />
                <path d="M0 100 C 50 80, 150 120, 200 90" strokeWidth="0.5" />
                <path d="M0 200 C 50 220, 150 180, 200 210" strokeWidth="0.5" />
              </g>

              {/* Journey Trace Background */}
              <path 
                d={journeyPath} 
                stroke="rgba(255,255,255,0.08)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Active Animated Path */}
              <motion.path 
                d={journeyPath} 
                stroke="url(#glowGradient)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ pathLength }} 
                filter="url(#glow)"
              />

              {/* Dynamic Destination Nodes */}
              {destinations.map((dest, i) => (
                <g key={dest.id}>
                  {/* Outer Pulsing Ring */}
                  <circle 
                    cx={dest.x} 
                    cy={dest.y} 
                    r="8" 
                    className="stroke-primary/20 fill-none animate-[ping_3s_infinite]" 
                  />
                  {/* Main Node */}
                  <motion.circle 
                    cx={dest.x} 
                    cy={dest.y} 
                    r="4.5" 
                    className="fill-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  />
                  {/* Labels for Tablet/Desktop */}
                  <motion.text
                    x={dest.x + 12}
                    y={dest.y + 4}
                    className="fill-white/20 text-[7px] font-bold uppercase tracking-[0.2em] hidden md:block pointer-events-none"
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
