"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Compass,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

export default function ContactPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Cinematic Hero: Contact HQ */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Kontakt Berlin" 
            fill 
            priority 
            className="object-cover brightness-[0.4] scale-105"
            data-ai-hint="serengeti savannah"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-white text-[11px] font-bold border border-primary/30 backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-primary" /> Registry hq
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="font-headline text-4xl md:text-7xl lg:text-8xl font-normal text-white tracking-tighter leading-none"
          >
            Kontakt Berlin
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-white/60 font-bold text-[14px] leading-[20px] max-w-xl mx-auto"
          >
            Ihre Verbindung zwischen Spree und Serengeti. Unsere Spezialisten beraten Sie persönlich und individuell.
          </motion.p>
        </div>
      </section>

      {/* 02 Registry Info Grid: Natural Theme */}
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
          {/* Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="rounded-[2rem] border-none shadow-sm bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 border border-border/40">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center text-primary shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-primary mb-1">Hauptsitz</p>
                    <h3 className="text-base font-bold text-secondary">Bayerischer Platz 7</h3>
                    <p className="text-[14px] text-muted-foreground leading-[20px]">10779 Berlin, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-primary mb-1">Hotline</p>
                    <h3 className="text-base font-bold text-secondary">+49 30 22608080</h3>
                    <p className="text-[14px] text-muted-foreground leading-[20px]">Mo – Fr | 10:00 – 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-secondary shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-primary mb-1">Support</p>
                    <h3 className="text-base font-bold text-secondary truncate max-w-[200px]">info@tansania-reiseabenteuer.de</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000">
                <ShieldCheck className="w-32 h-32 text-secondary" />
              </div>
              <div className="relative z-10 space-y-4 text-center">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-2" />
                <h4 className="font-headline text-2xl font-normal text-secondary">Sicher buchen</h4>
                <p className="text-[14px] leading-[20px] text-muted-foreground opacity-80">
                  Ihre Reise ist durch den DRSF (Deutscher Reisesicherungsfonds) komplett abgesichert.
                </p>
              </div>
            </div>
          </div>

          {/* Map Dashboard */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-border/50 overflow-hidden relative aspect-video lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.324541234567!2d13.3389!3d52.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI5JzIwLjAiTiAxM8KwMjAnMjAuMCJF!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.2]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-secondary">Büro aktiv</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Protocol */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-6xl font-normal text-secondary tracking-tighter">Unverbindliche Anfrage</h2>
            <p className="text-muted-foreground text-sm md:text-lg mt-4 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre individuelle Traumreise gestalten. Unsere Experten beraten Sie persönlich.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
