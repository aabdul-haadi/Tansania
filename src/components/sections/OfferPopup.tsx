"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-secondary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors backdrop-blur-md"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Column */}
            <div className="w-full lg:w-[42%] relative aspect-[16/9] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Sunset" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-destructive/90 text-white text-[9px] font-bold uppercase tracking-widest shadow-xl border border-white/10"
                >
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  Only 2 Left
                </motion.div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 p-5 md:p-10 lg:p-12 text-white flex flex-col justify-center">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-1.5 md:mb-2 block">Exclusive Expedition</span>
              <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-[1.1]">
                Last-Minute <br className="hidden md:block" />
                <span className="text-primary italic">Bush & Beach</span>
              </h2>

              <div className="space-y-2.5 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-sm font-bold leading-none">March 15 – 29, 2026</p>
                    <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1">14 Day Signature Combo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                    <Plane className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-sm font-bold leading-none">Cairo Departure</p>
                    <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1">All Flights Included</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 pt-4 md:pt-6 border-t border-white/10">
                <div className="text-center sm:text-left flex sm:flex-col gap-2 sm:gap-0 items-baseline">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] md:text-xs text-white/30 line-through">€5,999</span>
                    <span className="text-[8px] md:text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase tracking-wider">SAVE €1K</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-4xl font-bold">€4,999</span>
                    <span className="text-[9px] md:text-xs text-white/40 font-light">/ pp</span>
                  </div>
                </div>
                <Link href="/trip-planner?offer=last-minute-2026" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full rounded-xl md:rounded-2xl px-8 h-12 md:h-14 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all hover:scale-[1.02] group">
                    Claim Spot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
