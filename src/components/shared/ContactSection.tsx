"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="inquiry" className="py-16 md:py-32 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-border/50 min-h-[700px]">
          
          <div className="w-full lg:w-[60%] relative bg-white min-h-[700px]">
            <iframe
              src="https://app.tansania-reiseabenteuer.de/forms/embed/d54e9b2ee319416a81cf32551a1bc3d3"
              className="w-full h-full border-none overflow-hidden"
              scrolling="no"
              title="Serengeti Dreams Inquiry"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-[40%] bg-secondary text-white relative flex flex-col p-12 md:p-16 justify-center">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center rotate-3 border border-primary/20 shadow-xl">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-4">
                    Ihre <span className="text-primary">Expedition</span> <br />Beginnt Hier
                  </h3>
                  <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-relaxed">
                    Unsere Spezialisten in Berlin und Kairo prüfen Ihren Plan innerhalb von 24 Stunden.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Persönliche Beratung in Berlin",
                  "Lokale Expertise vor Ort",
                  "Sicher & Transparent nach EU-Recht",
                  "Bespoke Itinerary Architect"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase text-white/40">Zentrale Berlin</p>
                    <p className="text-sm font-black">+49 30 22608080</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase text-white/40">Offizieller Kontakt</p>
                    <p className="text-sm font-black">info@tansania-reiseabenteuer.de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}