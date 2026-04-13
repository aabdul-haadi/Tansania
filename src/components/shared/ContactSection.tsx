"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
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
  const [formHeight, setFormHeight] = useState(600);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsMounted(true);

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
    { icon: Mail, label: "Ihre Vision", sub: "Anfrage senden" },
    { icon: Compass, label: "Experten Design", sub: "Route entwerfen" },
    { icon: Zap, label: "Ihr Abenteuer", sub: "Safari starten" }
  ];

  const trustBadges = [
    { icon: CheckCircle2, full: "DSGVO konform", short: "DSGVO" },
    { icon: ShieldCheck, full: "SSL verschlüsselt", short: "SSL" },
    { icon: Globe, full: "Offizielle Registry", short: "Registry" }
  ];

  return (
    <section id="inquiry" className="py-6 md:py-10 bg-[#fdfcfb] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C 100 80, 300 150, 400 100 S 700 50, 800 100" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 300 C 100 350, 400 250, 500 300 S 700 350, 800 300" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-normal text-center"
          >
            Ihre Expedition beginnt hier
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-normal text-sm md:text-base max-xl mx-auto opacity-80 text-center"
          >
            Vom ersten Gedanken bis zum ersten Schritt in der Savanne – unsere Spezialisten begleiten Sie persönlich.
          </motion.p>
        </div>

        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-border/40 overflow-hidden flex flex-col lg:flex-row min-h-[550px] md:min-h-[600px] relative transition-all duration-500 hover:shadow-xl">
          
          <div className="w-full lg:w-[35%] bg-[#FDF7F2] p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/40 text-left">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-secondary tracking-tight whitespace-nowrap">
                  Premium Beratung
                </h3>
                <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase leading-none">Berlin Head Office • Safari Ops</p>
              </div>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#F0EBE0] flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary transition-all duration-500">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold text-secondary">{step.label}</p>
                      <p className="text-[10px] font-medium text-muted-foreground/60">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#F0EBE0] group-hover:bg-primary group-hover:border-primary transition-all shadow-sm">
                  <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground leading-none">Hotline</p>
                  <p className="text-sm font-bold text-secondary tracking-tight">+49 30 22608080</p>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#F0EBE0] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-secondary">DRSF Schutz</span>
                </div>
                <p className="text-[10px] font-medium text-muted-foreground leading-relaxed">
                  Ihre Reise ist durch den Deutschen Reisesicherungsfonds abgesichert.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white flex flex-col">
            <div className="p-5 md:p-6 border-b border-border/40 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold text-secondary">Registry active</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold text-muted-foreground">Antwort in 24h</span>
              </div>
            </div>

            <div 
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{ height: `${formHeight}px` }}
            >
              {isMounted ? (
                <iframe
                  ref={iframeRef}
                  src="https://app.tansania-reiseabenteuer.de/forms/embed/d54e9b2ee319416a81cf32551a1bc3d3"
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  title="Contact Registry Form"
                  loading="lazy"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-muted/5 animate-pulse">
                  <p className="text-xs font-bold text-muted-foreground">Initializing manifest...</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#fdfcfb] border-t border-border/40 flex flex-row items-center justify-center gap-4 md:gap-12">
              {trustBadges.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[9px] font-bold text-muted-foreground/60 whitespace-nowrap">
                  <item.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary/40 shrink-0" />
                  <span className="hidden sm:inline">{item.full}</span>
                  <span className="sm:hidden">{item.short}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}