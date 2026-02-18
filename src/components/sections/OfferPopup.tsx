"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Plane, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Show offer after 5 seconds
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-secondary rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition-colors backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Column */}
            <div className="w-full lg:w-[45%] relative aspect-[4/3] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Sunset" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-6 left-6">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/90 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Only 2 Places Left
                </motion.div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 p-8 md:p-12 text-white flex flex-col justify-center">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Limited Time Offer</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
                Last-Minute <br />
                <span className="text-primary italic">Bush & Beach</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">March 15 – 29, 2026</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">14 Day Signature Combo</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Cairo Departure</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">All International Flights Included</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6 border-t border-white/10">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-xs text-white/30 line-through">€5,999</span>
                    <span className="text-[10px] font-bold text-primary">SAVE €1,000</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">€4,999</span>
                    <span className="text-xs text-white/40 font-light">/ pp</span>
                  </div>
                </div>
                <Link href="/trip-planner?offer=last-minute-2026" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full rounded-2xl px-10 h-14 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all hover:scale-105 group">
                    Claim Your Spot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
