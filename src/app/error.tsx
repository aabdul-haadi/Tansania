"use client";

import React, { useEffect } from 'react';
import { AlertCircle, RefreshCcw, Home, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  const handleReset = () => {
    if (typeof reset === 'function') {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcfb] px-4">
      <div className="max-w-md w-full text-center space-y-10 p-8 md:p-12 bg-white rounded-[2.5rem] shadow-2xl border border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <Compass className="w-32 h-32 text-secondary" />
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase tracking-tight">Systemausfall</h1>
            <p className="text-muted-foreground font-bold text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto uppercase tracking-wider">
              In der Savanne gab es ein technisches Gewitter. Wir versuchen, die Verbindung wiederherzustellen.
            </p>
            {error.digest && (
              <div className="pt-2">
                <p className="text-[8px] font-mono text-muted-foreground/40 uppercase tracking-widest">Trace ID: {error.digest}</p>
              </div>
            )}
          </div>

          <div className="pt-10 space-y-3">
            <Button 
              onClick={handleReset} 
              className="w-full rounded-xl h-14 gap-3 shadow-lg shadow-primary/20 font-black text-[10px] uppercase tracking-widest"
            >
              <RefreshCcw className="w-4 h-4" /> Seite neu laden
            </Button>
            <Button asChild variant="ghost" className="w-full rounded-xl h-12 text-muted-foreground font-black text-[9px] uppercase tracking-widest">
              <Link href="/">Zur Startseite</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
