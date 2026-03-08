"use client";

import React from 'react';
import { ShieldAlert, RefreshCcw, Compass } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const handleReset = () => {
    if (typeof reset === 'function') {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <html lang="de">
      <body className="antialiased">
        <div className="min-h-screen flex items-center justify-center bg-secondary p-6 text-white text-center font-body">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          
          <div className="max-w-sm w-full space-y-10 relative z-10">
            <div className="w-20 h-20 bg-primary/20 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl border border-primary/20">
              <ShieldAlert className="w-10 h-10 text-primary" />
            </div>
            
            <div className="space-y-4">
              <h1 className="font-headline text-3xl font-bold uppercase tracking-tighter">Kritischer <span className="text-primary">Fehler</span></h1>
              <p className="text-white/60 text-[10px] md:text-xs font-bold leading-relaxed uppercase tracking-[0.2em]">
                Ein globaler Systemfehler ist aufgetreten. Bitte laden Sie die App vollständig neu, um die Verbindung zur Savanne wiederherzustellen.
              </p>
            </div>

            <div className="pt-6">
              <button 
                onClick={handleReset}
                className="w-full bg-primary text-white h-14 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <RefreshCcw className="w-4 h-4" /> System Reset
              </button>
              <div className="mt-8 flex justify-center opacity-20">
                <Compass className="w-8 h-8 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
