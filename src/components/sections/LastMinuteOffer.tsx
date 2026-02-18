"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Plane, ArrowRight, Sparkles, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function LastMinuteOffer() {
  return (
    <section className="py-8 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative flex flex-col lg:flex-row items-center">
          
          {/* Visual Anchor - Takes priority on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] relative z-0"
          >
            <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                alt="Safari Sunset" 
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Mobile-only Price Tag */}
            <div className="absolute top-4 right-4 lg:hidden">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl shadow-xl font-bold">
                €4,999
              </div>
            </div>
          </motion.div>

          {/* Floating Content Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-[92%] -mt-16 lg:mt-0 lg:w-[45%] lg:-ml-32 relative z-10"
          >
            <div className="bg-secondary text-white p-6 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] border border-white/5 backdrop-blur-xl">
              
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-6 md:mb-10">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 border border-destructive/30 text-destructive text-[10px] font-bold uppercase tracking-widest"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                  Only 2 Places Left
                </motion.div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-secondary bg-muted overflow-hidden">
                      <img src={`https://picsum.photos/seed/explorer-${i}/50/50`} alt="Explorer" />
                    </div>
                  ))}
                </div>
              </div>

              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] md:text-xs mb-2 block">Exclusive Expedition</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
                Last-Minute <br />
                <span className="text-primary italic">Bush & Beach</span>
              </h2>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">March 15 – 29, 2026</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">14 Day Signature Combo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">All-Inclusive Logistics</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Full Flight from Cairo Included</p>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-white/30 line-through">€5,999</span>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">SAVE €1,000</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">€4,999</span>
                    <span className="text-xs text-white/40 font-light">/ pp</span>
                  </div>
                </div>
                <Link href="/trip-planner?offer=last-minute-2026" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-2xl px-8 h-14 font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 group">
                    Secure Spot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
