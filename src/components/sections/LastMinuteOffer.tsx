"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Plane, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function LastMinuteOffer() {
  return (
    <section className="py-16 bg-[#0a0a0a] overflow-hidden relative">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Urgency Badge */}
          <div className="absolute top-8 right-8">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-destructive text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-destructive/20 flex items-center gap-2"
            >
              <Users className="w-3 h-3" /> ONLY 2 PLACES LEFT
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Limited Opportunity</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Last-Minute <br />
                <span className="text-primary italic">Safari & Zanzibar</span>
              </h2>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-bold tracking-tight">March 15 – 29, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Plane className="w-5 h-5 text-primary" />
                  <span className="text-sm">Full international flight from Cairo included</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="space-y-1">
                  <p className="text-white/30 text-xs uppercase font-bold tracking-widest line-through">Instead of €5,999</p>
                  <p className="text-white text-4xl font-bold">€4,999 <span className="text-sm font-light text-white/40">/ person</span></p>
                </div>
                <Link href="/trip-planner?offer=last-minute-2026">
                  <Button size="lg" className="rounded-full px-10 h-14 font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 group">
                    Secure Spot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" 
                  alt="Safari Sunset" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-muted overflow-hidden">
                        <img src={`https://picsum.photos/seed/user-${i}/100/100`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Joined by 8 explorers</p>
                </div>
              </div>
              
              {/* Floating Highlight */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-secondary border border-white/10 p-6 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-white font-bold text-sm uppercase tracking-widest">Signature Combo</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed max-w-[180px]">
                  7 Days Serengeti Plains + 7 Days Zanzibar Beach Luxury.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
