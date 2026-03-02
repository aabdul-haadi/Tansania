"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleFormMessage(e: MessageEvent) {
      if (e.data && typeof e.data === 'object') {
        if (e.data.formSubmitted === true || e.data.event === 'formSubmitted' || e.data.type === 'formSubmissionSuccess') {
          setIsSubmitted(true);
        }
      }
    }

    window.addEventListener('message', handleFormMessage);
    return () => window.removeEventListener('message', handleFormMessage);
  }, []);

  return (
    <section id="contact-form" className="py-8 md:py-12 bg-[#fdfcfb] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-xl overflow-hidden border border-border/50 min-h-[650px]">
          
          {/* Form Side */}
          <div className="w-full lg:w-[60%] relative bg-white min-h-[650px]">
            <iframe
              ref={iframeRef}
              src="https://app.tansania-reiseabenteuer.de/forms/embed/d54e9b2ee319416a81cf32551a1bc3d3"
              className="w-full h-full min-h-[650px] border-none overflow-hidden"
              scrolling="no"
              title="Anfrageformular"
              loading="lazy"
              allowTransparency
            />
          </div>

          {/* Expert Info Side */}
          <div className="w-full lg:w-[40%] bg-secondary text-white relative flex flex-col items-center justify-center p-8 hidden lg:flex">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center rotate-3 shadow-xl border border-primary/20">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-3 text-white uppercase">Ihre Experten <br /><span className="text-primary">für Tansania</span></h3>
                    <p className="text-white/60 font-bold leading-relaxed text-[10px] uppercase tracking-widest">
                      Persönlich. Kompetent. Leidenschaftlich.
                    </p>
                  </div>
                  <div className="space-y-3 w-full">
                    {[
                      "Maßgeschneiderte Reiseplanung",
                      "Lokaler Support & Expertise",
                      "Privat-Safaris mit Top-Guides",
                      "Sicher & stressfrei buchen"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-widest text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center shadow-2xl border border-green-500/30 text-green-500">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-headline text-3xl font-bold mb-3 text-white uppercase">Anfrage <br /><span className="text-green-500">gesendet!</span></h3>
                    <p className="text-white/60 font-bold text-sm leading-relaxed uppercase tracking-widest">
                      Vielen Dank für Ihr Vertrauen.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}