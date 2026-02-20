"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, User, MessageSquare } from 'lucide-react';

export function ContactSection() {
  useEffect(() => {
    const containerId = 'tansania-form-d54e9b2e';
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://app.tansania-reiseabenteuer.de/forms/embed/d54e9b2ee319416a81cf32551a1bc3d3';
    iframe.style.cssText = 'width: 100%; height: 100%; border: none; margin: 0; padding: 0; display: block; min-height: 650px; overflow: hidden !important;';
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('title', 'Anfrageformular');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');

    iframe.onerror = function() {
      console.error('Form iframe failed to load');
      container.innerHTML =
        '<p style="text-align: center; padding: 40px; color: #666;">Das Formular konnte nicht geladen werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.</p>';
    };

    container.appendChild(iframe);

    const desktopFormHeight = 650;

    // Helper to adjust container heights
    function adjustHeights(height: number) {
      if (!iframe || !container) return;
      iframe.style.height = height + 'px';
      container.style.height = height + 'px';

      const wrapper = document.querySelector('.tra-form-wrapper') as HTMLElement;
      if (wrapper) wrapper.style.minHeight = height + 'px';

      const leftCol = document.querySelector('.tra-form-left') as HTMLElement;
      if (leftCol) {
        leftCol.style.height = height + 'px';
        leftCol.style.minHeight = height + 'px';
      }

      const rightCol = document.querySelector('.tra-form-right') as HTMLElement;
      if (rightCol) {
        rightCol.style.height = height + 'px';
        rightCol.style.minHeight = height + 'px';
      }
    }

    function handleFormSubmission(e: MessageEvent) {
      if (e.data && typeof e.data === 'object') {
        // Submission success signals
        if (e.data.formSubmitted === true || e.data.event === 'formSubmitted' || e.data.type === 'formSubmissionSuccess') {
          const defaultContent = document.getElementById('team-content-default');
          const successContent = document.getElementById('team-content-success');
          if (defaultContent && successContent) {
            defaultContent.style.display = 'none';
            successContent.style.display = 'flex';
          }
        }

        // Dynamic height updates
        if (e.data.formHeight && !e.data.formSubmitted) {
          const newHeight = Math.max(e.data.formHeight, desktopFormHeight);
          if (window.innerWidth > 768) {
            adjustHeights(Math.min(newHeight, 750));
          } else {
            iframe.style.height = newHeight + 'px';
            container.style.height = newHeight + 'px';
          }
        }
      }
    }

    window.addEventListener('message', handleFormSubmission);
    
    // Initial responsive check
    const handleResponsive = () => {
      const isMobile = window.innerWidth <= 768;
      const rightCol = document.querySelector('.tra-form-right') as HTMLElement;
      if (isMobile) {
        if (rightCol) rightCol.style.display = 'none';
      } else {
        if (rightCol) rightCol.style.display = 'flex';
        adjustHeights(desktopFormHeight);
      }
    };

    window.addEventListener('resize', handleResponsive);
    handleResponsive();

    return () => {
      window.removeEventListener('message', handleFormSubmission);
      window.removeEventListener('resize', handleResponsive);
    };
  }, []);

  return (
    <section id="contact-form" className="py-24 bg-[#fdfcfb] overflow-hidden tra-form-section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden tra-form-wrapper min-h-[650px] border border-border/50">
          
          {/* Form Side */}
          <div className="w-full lg:w-[60%] p-2 md:p-8 tra-form-left relative bg-white">
            <div id="tansania-form-d54e9b2e" className="w-full min-h-[650px]" />
          </div>

          {/* Expert Info Side */}
          <div className="w-full lg:w-[40%] bg-secondary text-white tra-form-right relative flex-col items-center justify-center hidden lg:flex">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Default State */}
            <div id="team-content-default" className="relative z-10 p-12 flex flex-col items-center text-center space-y-8">
              <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center rotate-3 shadow-xl border border-primary/20">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-3xl font-bold mb-4">Ihre Experten <br /><span className="text-primary italic">für Tansania</span></h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">
                  Persönlich. Kompetent. Leidenschaftlich. Wir gestalten Ihr Abenteuer so individuell wie Ihre Träume.
                </p>
              </div>
              <div className="space-y-4 w-full">
                {[
                  "Maßgeschneiderte Reiseplanung",
                  "Lokales Büro & Support in Kairo",
                  "Expertenteam direkt in Tansania",
                  "Sicher & stressfrei buchen"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success State */}
            <div id="team-content-success" className="relative z-10 p-12 flex-col items-center text-center space-y-8 h-full justify-center" style={{ display: 'none' }}>
              <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center shadow-2xl border border-green-500/30">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <div>
                <h3 className="font-headline text-4xl font-bold mb-4">Anfrage <br /><span className="text-green-500 italic">gesendet!</span></h3>
                <p className="text-white/60 font-light text-lg">
                  Vielen Dank für Ihr Vertrauen. Einer unserer Spezialisten wird sich innerhalb der nächsten 24 Stunden persönlich bei Ihnen melden.
                </p>
              </div>
              <div className="w-12 h-1 bg-green-500/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}