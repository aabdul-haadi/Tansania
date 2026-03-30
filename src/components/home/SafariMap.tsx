
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";

const destinations = [
  { id: 'cairo', name: 'Kairo Registry', x: 100, y: 40, desc: 'Berlin-Kairo-Achse' },
  { id: 'serengeti', name: 'Serengeti Hub', x: 80, y: 120, desc: 'Expeditions-Zentrum' },
  { id: 'ngorongoro', name: 'Krater Logistik', x: 100, y: 160, desc: 'Wildlife Monitoring' },
  { id: 'zanzibar', name: 'Sansibar Port', x: 140, y: 200, desc: 'Finaler Relax-Punkt' },
];

export function SafariMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 30%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 35,
    restDelta: 0.001
  });

  const journeyPath = "M 100 40 L 80 120 L 100 160 L 140 200";

  return (
    <section 
      ref={containerRef} 
      className="py-10 md:py-20 bg-[#0a0a0a] text-white overflow-hidden relative border-y border-white/5"
      style={{
        backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Left: Journey Timeline */}
          <div className="flex-1 min-w-0 z-10">
            <div className="mb-8 md:mb-12">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">
                Expeditionslogistik
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-white uppercase tracking-tight">
                Von Kairo in die <span className="text-primary">Savanne</span>
              </h2>
            </div>
            
            <div className="space-y-6 md:space-y-8 max-w-md">
              {destinations.map((dest, i) => (
                <div 
                  key={dest.id}
                  className="flex items-center gap-5 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                      <span className="text-xs md:text-base font-bold font-mono text-white">{i + 1}</span>
                    </div>
                    {i < destinations.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-6 md:h-10 bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg md:text-2xl text-white group-hover:text-primary transition-colors leading-tight uppercase">{dest.name}</h4>
                    <p className="text-[9px] md:text-sm text-white/40 font-bold uppercase tracking-[0.2em] mt-0.5">{dest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SVG Navigator */}
          {!isMobile && (
            <div className="relative w-full md:w-[45%] shrink-0 items-center justify-center hidden md:flex">
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
              
              <svg 
                viewBox="0 0 200 240" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
                
                <g className="opacity-[0.05] stroke-white">
                  <circle cx="100" cy="120" r="100" strokeWidth="0.5" strokeDasharray="2 4" />
                </g>

                <path 
                  d={journeyPath} 
                  stroke="rgba(255,255,255,0.08)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                <motion.path 
                  d={journeyPath} 
                  stroke="url(#glowGradient)" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ pathLength }} 
                  filter="url(#glow)"
                />

                {destinations.map((dest) => (
                  <circle 
                    key={dest.id}
                    cx={dest.x} 
                    cy={dest.y} 
                    r="5" 
                    className="fill-primary"
                  />
                ))}
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
