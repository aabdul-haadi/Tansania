"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MessageSquare, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const specialists = [
  { name: "Anna", role: "Safari Planning", img: "https://picsum.photos/seed/anna/200/200" },
  { name: "Maria", role: "Zanzibar Expert", img: "https://picsum.photos/seed/maria/200/200" },
  { name: "Sophie", role: "Adventure Logistics", img: "https://picsum.photos/seed/sophie/200/200" }
];

export function MeetTheSpecialists() {
  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left: Contact Info & Value Prop */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Human Connection</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight mb-6">
                We Know Africa — <br />
                <span className="text-primary italic">We’re Here to Help</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-2xl">
                Whether you're dreaming of an exclusive safari or a relaxing beach holiday, our specialists craft every experience with meticulous attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-mail</span>
                </div>
                <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-sm hover:text-primary transition-colors truncate">info@tansania...</a>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary">
                  <Phone className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone</span>
                </div>
                <a href="tel:+493022608080" className="font-bold text-sm hover:text-primary transition-colors">+49 30 22608080</a>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Hours</span>
                </div>
                <p className="font-bold text-sm">Mon – Fri: 10:00 – 16:00</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trip-planner">
                <Button size="lg" className="rounded-2xl px-10 h-14 font-bold shadow-xl group">
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur rounded-2xl border border-white/20">
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  Personal. Competent. <br /><strong>Expert advice.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Compact Specialist Icons */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 mb-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Your Travel Specialists</h4>
              </div>
              {specialists.map((specialist, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 bg-muted">
                    <img 
                      src={specialist.img} 
                      alt={specialist.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-0.5">Travel Specialist</p>
                    <h4 className="text-lg font-headline font-bold leading-none">{specialist.name}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-medium mt-1">{specialist.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
