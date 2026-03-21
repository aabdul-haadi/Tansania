"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/components/shared/ContactSection';

export default function ContactPage() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] border border-primary/20">
            <Globe className="w-3.5 h-3.5" /> Registry HQ
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-headline text-4xl md:text-8xl font-black text-secondary uppercase tracking-tighter leading-none">
            KONTAKT <br /><span className="text-primary">BERLIN</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto opacity-60">
            Ihre Verbindung zwischen Spree und Serengeti. Unsere Spezialisten beraten Sie persönlich.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
          {/* Official Registry Data */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="rounded-[2rem] border-none shadow-sm bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">Headquarters</p>
                    <h3 className="text-sm font-bold uppercase text-secondary">Bayerischer Platz 7</h3>
                    <p className="text-xs font-bold text-secondary/60 uppercase">10779 Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">Hotline</p>
                    <h3 className="text-sm font-bold uppercase text-secondary">+49 30 22608080</h3>
                    <p className="text-xs font-bold text-secondary/60 uppercase">Mo – Fr | 10:00 – 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-secondary shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">Support</p>
                    <h3 className="text-xs font-bold uppercase text-secondary truncate max-w-[180px]">info@tansania-reiseabenteuer.de</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-4 text-center">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-2" />
                <h4 className="text-lg font-headline font-bold uppercase">Sicher Buchen</h4>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">
                  Ihre Reise ist durch die DRSF (Deutscher Reisesicherungsfonds) komplett abgesichert.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map Dashboard */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden relative aspect-video lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.324541234567!2d13.3389!3d52.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI5JzIwLjAiTiAxM8KwMjAnMjAuMCJF!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.2]"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-secondary">Office Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Inquiry Protocol */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">UNVERBINDLICHE <span className="text-primary">ANFRAGE</span></h2>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
