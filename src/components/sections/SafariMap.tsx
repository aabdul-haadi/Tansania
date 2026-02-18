"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Compass, MapPin } from 'lucide-react';

const destinations = [
  { id: 'cairo', name: 'Cairo, Egypt', x: 100, y: 50, desc: 'The Gateway to the Nile' },
  { id: 'serengeti', name: 'Serengeti', x: 80, y: 280, desc: 'Endless Plains' },
  { id: 'ngorongoro', name: 'Ngorongoro', x: 100, y: 310, desc: 'The Great Crater' },
  { id: 'zanzibar', name: 'Zanzibar', x: 140, y: 350, desc: 'Spice Island Shores' },
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

  // SVG Path for the journey
  const journeyPath = "M 100 50 L 80 280 L 100 310 L 140 350";

  return (
    <section ref={containerRef} className="py-32 bg-secondary text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Map Textual Content */}
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Signature Route</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight">
              A Journey Across <br/> the <span className="text-primary italic">Cradle of Life</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
              From our headquarters in Cairo to the untamed wild of the Serengeti, we bridge the gap between ancient civilizations and the raw majesty of nature.
            </p>
            
            <div className="space-y-8">
              {destinations.map((dest, i) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{dest.name}</h4>
                    <p className="text-sm text-white/40">{dest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <svg 
              viewBox="0 0 200 400" 
              className="w-full h-full drop-shadow-2xl"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stylized Outlines of Egypt (North) and Tanzania (South) */}
              <motion.path
                d="M80 20 Q120 10 140 40 L150 80 Q110 90 70 70 Z"
                className="fill-white/5 stroke-white/10"
                strokeWidth="1"
              />
              <motion.path
                d="M60 250 Q100 240 150 270 L160 330 Q110 370 60 340 Z"
                className="fill-white/5 stroke-white/10"
                strokeWidth="1"
              />

              {/* Connecting Journey Line */}
              <motion.path
                d={journeyPath}
                stroke="rgba(181, 142, 69, 0.3)" // Primary color desaturated
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.path
                d={journeyPath}
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                style={{ pathLength }}
              />

              {/* Destination Markers */}
              {destinations.map((dest, i) => (
                <g key={dest.id}>
                  {/* Soft Pulse Effect */}
                  <motion.circle
                    cx={dest.x}
                    cy={dest.y}
                    r="8"
                    className="fill-primary/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  />
                  {/* Marker Dot */}
                  <circle
                    cx={dest.x}
                    cy={dest.y}
                    r="4"
                    className="fill-primary"
                  />
                  {/* Floating Label */}
                  <motion.text
                    x={dest.x + 10}
                    y={dest.y + 4}
                    className="fill-white/80 text-[8px] font-bold uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {dest.name}
                  </motion.text>
                </g>
              ))}
            </svg>
            
            {/* Background Texture Element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none rounded-full blur-3xl" />
          </div>

        </div>
      </div>
      
      {/* Decorative Compass Icon */}
      <div className="absolute bottom-12 right-12 opacity-10 hidden lg:block">
        <Compass className="w-32 h-32 animate-spin-slow" />
      </div>
    </section>
  );
}
