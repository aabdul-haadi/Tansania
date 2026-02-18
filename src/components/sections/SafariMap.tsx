"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass } from 'lucide-react';

const destinations = [
  { id: 'cairo', name: 'Cairo, Egypt', x: 100, y: 40, desc: 'The Gateway to the Nile' },
  { id: 'serengeti', name: 'Serengeti', x: 80, y: 160, desc: 'Endless Plains' },
  { id: 'ngorongoro', name: 'Ngorongoro', x: 100, y: 190, desc: 'The Great Crater' },
  { id: 'zanzibar', name: 'Zanzibar', x: 140, y: 230, desc: 'Spice Island Shores' },
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

  // SVG Path for the journey - shorter gaps
  const journeyPath = "M 100 40 L 80 160 L 100 190 L 140 230";

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-secondary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Map Textual Content */}
          <div className="max-w-xl order-2 lg:order-1">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Signature Route</span>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              A Journey Across <br className="hidden sm:block"/> the <span className="text-primary italic">Cradle of Life</span>
            </h2>
            <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed mb-8 lg:mb-12">
              From our headquarters in Cairo to the untamed wild of the Serengeti, we bridge the gap between ancient civilizations and raw majesty.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:space-y-8">
              {destinations.map((dest, i) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors border border-white/5">
                    <span className="text-[10px] lg:text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm lg:text-lg mb-0.5 lg:mb-1 group-hover:text-primary transition-colors">{dest.name}</h4>
                    <p className="text-[10px] lg:text-sm text-white/40">{dest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative aspect-[4/5] w-full max-w-[320px] lg:max-w-md mx-auto order-1 lg:order-2">
            <svg 
              viewBox="0 0 200 300" 
              className="w-full h-full drop-shadow-2xl"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mapping Area Lines (Background Grid/Lines) */}
              <defs>
                <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />

              {/* Stylized Outlines with "Mapping Lines" */}
              <g className="opacity-40">
                {/* Egypt Area */}
                <motion.path
                  d="M80 15 Q120 5 145 35 L155 75 Q115 85 75 65 Z"
                  className="fill-white/5 stroke-white/20"
                  strokeWidth="0.5"
                />
                <path d="M85 25 L140 25 M90 35 L145 35 M95 45 L150 45" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" />
                
                {/* Tanzania Area */}
                <motion.path
                  d="M65 140 Q105 130 155 160 L165 220 Q115 260 65 230 Z"
                  className="fill-white/5 stroke-white/20"
                  strokeWidth="0.5"
                />
                <path d="M75 155 L145 155 M80 175 L150 175 M85 195 L155 195 M90 215 L160 215" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" />
              </g>

              {/* Connecting Journey Line */}
              <motion.path
                d={journeyPath}
                stroke="rgba(181, 142, 69, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <motion.path
                d={journeyPath}
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                style={{ pathLength }}
              />

              {/* Destination Markers */}
              {destinations.map((dest, i) => (
                <g key={dest.id}>
                  <motion.circle
                    cx={dest.x}
                    cy={dest.y}
                    r="6"
                    className="fill-primary/20"
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  />
                  <circle
                    cx={dest.x}
                    cy={dest.y}
                    r="3"
                    className="fill-primary"
                  />
                  <motion.text
                    x={dest.x + 8}
                    y={dest.y + 3}
                    className="fill-white/60 text-[6px] font-bold uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {dest.name.split(',')[0]}
                  </motion.text>
                </g>
              ))}
            </svg>
            
            {/* Background Texture Element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none rounded-full blur-3xl opacity-50" />
          </div>

        </div>
      </div>
      
      {/* Decorative Compass Icon */}
      <div className="absolute bottom-8 right-8 opacity-5 hidden lg:block">
        <Compass className="w-24 h-24 animate-spin-slow" />
      </div>
    </section>
  );
}
