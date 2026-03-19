"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function BlogContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exact implementation of the requested script logic
    const container = containerRef.current;
    if (!container) return;

    const formId = '2ae0ba858441471281c76f26f53702ae';
    const iframe = document.createElement('iframe');
    iframe.src = `https://app.tansania-reiseabenteuer.de/forms/embed/${formId}`;
    iframe.style.cssText = 'width: 100%; border: none; min-height: 600px; transition: height 0.3s ease;';
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    
    container.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.formHeight) {
        iframe.style.height = e.data.formHeight + 'px';
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-border/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" /> Exklusive Planung
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">
            Planen Sie Ihre <span className="text-primary">Migration-Safari</span>
          </h2>
          <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-xl mx-auto">
            Hinterlassen Sie uns Ihre Details, und unsere Experten in Berlin melden sich in Kürze bei Ihnen.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden relative min-h-[600px]">
          <div ref={containerRef} id="tansania-form-2ae0ba85" className="w-full" />
        </div>
      </div>
    </section>
  );
}
