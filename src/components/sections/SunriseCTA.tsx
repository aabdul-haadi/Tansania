"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SunriseCTA() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* CSS-Only Animation Styles */}
      <style jsx>{`
        @keyframes sunrise {
          0% { transform: translate(-50%, 80%); opacity: 0.3; }
          50% { transform: translate(-50%, 20%); opacity: 0.8; }
          100% { transform: translate(-50%, 80%); opacity: 0.3; }
        }
        @keyframes skyWarm {
          0% { background-color: #0a0a0a; }
          50% { background-color: #1a1a1a; }
          100% { background-color: #0a0a0a; }
        }
        @keyframes breathingGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(227, 81, 13, 0); transform: scale(1); }
          50% { box-shadow: 0 0 30px rgba(227, 81, 13, 0.4); transform: scale(1.02); }
        }
        .animate-sunrise {
          animation: sunrise 8s ease-in-out infinite;
        }
        .animate-sky {
          animation: skyWarm 8s ease-in-out infinite;
        }
        .animate-breathe {
          animation: breathingGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Sky Background Layer */}
      <div className="absolute inset-0 animate-sky z-0" />

      {/* Rising Sun Layer */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full animate-sunrise z-10"
        style={{
          background: 'radial-gradient(circle, rgba(227, 81, 13, 0.4) 0%, rgba(227, 81, 13, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Content Layer */}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="font-headline text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Your Story <span className="text-primary italic">Begins Here.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <Link href="/trip-planner">
              <Button 
                size="lg" 
                className="animate-breathe rounded-full px-12 h-16 text-lg font-bold bg-primary text-white hover:bg-white hover:text-black hover:border-primary shadow-2xl group transition-all"
              >
                Start Planning Your Safari
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold">
              Bespoke Tanzania Expeditions
            </p>
          </div>
        </motion.div>
      </div>

      {/* Horizon Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10 z-20" />
    </section>
  );
}