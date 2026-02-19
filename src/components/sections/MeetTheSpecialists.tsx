"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const specialists = [
  { name: "Anna", role: "Safari Planning", img: "https://picsum.photos/seed/anna/400/500" },
  { name: "Maria", role: "Zanzibar Expert", img: "https://picsum.photos/seed/maria/400/500" },
  { name: "Sophie", role: "Adventure Logistics", img: "https://picsum.photos/seed/sophie/400/500" }
];

export function MeetTheSpecialists() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Human Touch</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-6">
                We Know Africa — <br />
                <span className="text-primary italic">We’ve Been There</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
                Whether you're dreaming of an exclusive safari, a beach holiday, or a bespoke dream trip, we take the time to understand your wishes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/50">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">E-mail</p>
                  <a href="mailto:info@tansania-reiseabenteuer.de" className="font-bold text-sm hover:text-primary transition-colors">info@tansania-reiseabenteuer.de</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/50">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Phone</p>
                  <a href="tel:+493022608080" className="font-bold text-sm hover:text-primary transition-colors">+49 30 22608080</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/50">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Opening Hours</p>
                  <p className="font-bold text-sm">Mon – Thurs: 10:00 – 16:00</p>
                  <p className="text-xs text-muted-foreground">Fri: 10:00 – 14:00</p>
                </div>
              </div>
            </div>

            <Link href="/trip-planner">
              <Button size="lg" className="w-full rounded-2xl h-14 font-bold shadow-xl group">
                Request a Quote <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right: Specialist Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialists.map((specialist, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl bg-white"
                >
                  <img 
                    src={specialist.img} 
                    alt={specialist.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Travel Specialist</p>
                    <h4 className="text-xl font-headline font-bold">{specialist.name}</h4>
                    <p className="text-[10px] text-white/60 uppercase font-medium">{specialist.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white/50 backdrop-blur rounded-[2rem] border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Personal. Competent. Passionate.</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Trust in our years of experience and genuine expertise in tailor-made African journeys. Every experience is crafted with meticulous attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
