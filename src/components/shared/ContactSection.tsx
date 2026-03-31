"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  Globe, 
  Compass, 
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';

export function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [formHeight, setFormHeight] = useState(600); // Sensible default
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsMounted(true);

    // Listen for form height messages from the embedded iframe
    function handleFormMessage(e: MessageEvent) {
      if (e.data && typeof e.data === 'object') {
        if (e.data.formHeight) {
          setFormHeight(e.data.formHeight);
        }
      }
    }

    window.addEventListener('message', handleFormMessage);
    return () => window.removeEventListener('message', handleFormMessage);
  }, []);

  const steps = [
    { icon: Mail, label: "Anfrage", sub: "Senden" },
    { icon: Compass, label: "Analyse", sub: "Durch Experten" },
    { icon: Zap, label: "Abenteuer", sub: "Starten" }
  ];

  return (
    <section id="inquiry" className="py-8 md:py-16 bg-[#fdfcfb] relative overflow-hidden font-bold">
      {/* Topographic Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C 100 80, 300 150, 400 100 S 700 50, 800 100" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 200 C 150 180, 250 250, 400 200 S 650 150, 800 200" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 300 C 100 350, 400 250, 500 300 S 700 350, 800 300" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5" /> Registry Protocol
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-2xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-none"
          >
            Ihre Expedition <br /><span className="text-primary">Beginnt Hier</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-black text-[10px] md:text-sm uppercase tracking-widest max-w-2xl leading-relaxed opacity-60"
          >
            Vom ersten Gedanken bis zum ersten Schritt in der Savanne – unsere Spezialisten begleiten Sie persönlich.
          </motion.p>
        </div>

        {/* The Manifest Frame */}
        <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden border border-border/50 relative">
          
          {/* Left: Expertise Hub */}
          <div className="w-full lg:w-[38%] bg-secondary text-white relative flex flex-col p-10 md:p-16 justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center rotate-3 shadow-xl shadow-primary/20">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-4">
                    Expertise <br /><span className="text-primary">Registry</span>
                  </h3>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">
                    Berlin Head Office • Kairo Branch • Safari Ops
                  </p>
                </div>
              </div>

              {/* Steps Protocol */}
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:border-primary">
                      <step.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none mb-1">{step.label}</p>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-12 border-t border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase text-white/40 mb-0.5">Hotline Berlin</p>
                  <p className="text-sm font-black uppercase">+49 30 22608080</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <p className="text-[8px] font-black uppercase tracking-widest leading-tight text-white/80">
                  Volle Absicherung durch den <br /><span className="text-white">Deutschen Reisesicherungsfonds</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Embedded Manifest (Form) */}
          <div className="w-full lg:w-[62%] relative bg-white flex flex-col">
            {/* Form Header Overlay */}
            <div className="p-6 md:p-8 border-b border-border/50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-secondary">Berlin Office Active</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-muted-foreground">Antwort in 24h</span>
              </div>
            </div>

            <div 
              className="relative overflow-hidden transition-all duration-300 ease-in-out"
              style={{ height: `${formHeight}px` }}
            >
              {isMounted ? (
                <iframe
                  ref={iframeRef}
                  src="https://app.tansania-reiseabenteuer.de/forms/embed/d54e9b2ee319416a81cf32551a1bc3d3"
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  title="Expedition Inquiry Form"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/5 animate-pulse">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Initializing Manifest...</p>
                </div>
              )}
            </div>

            {/* Form Footer Trust Strip */}
            <div className="p-6 bg-muted/10 border-t border-border/50 flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">
                <CheckCircle2 className="w-3 h-3 text-primary" /> DSGVO Konform
              </div>
              <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">
                <CheckCircle2 className="w-3 h-3 text-primary" /> SSL Verschlüsselt
              </div>
              <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">
                <CheckCircle2 className="w-3 h-3 text-primary" /> Ohne Verpflichtung
              </div>
            </div>
          </div>
        </div>

        {/* Support Registry Bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-6 bg-white rounded-2xl border border-border/50 shadow-sm flex items-center gap-5 group hover:border-primary/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[8px] font-black uppercase text-muted-foreground mb-0.5">Offiziell</p>
              <p className="text-[10px] font-black uppercase tracking-tight truncate">info@tansania-reiseabenteuer.de</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-border/50 shadow-sm flex items-center gap-5 group hover:border-primary/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[8px] font-black uppercase text-muted-foreground mb-0.5">Zentrale</p>
              <p className="text-[10px] font-black uppercase tracking-tight">+49 30 22608080</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-border/50 shadow-sm flex items-center gap-5 group hover:border-primary/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[8px] font-black uppercase text-muted-foreground mb-0.5">Absicherung</p>
              <p className="text-[10px] font-black uppercase tracking-tight">DRSF Mitglied 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
