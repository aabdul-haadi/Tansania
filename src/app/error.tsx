
"use client";

import React, { useEffect } from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
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
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcfb] px-4">
      <div className="max-w-md w-full text-center space-y-8 p-12 bg-white rounded-[3rem] shadow-2xl border border-border/50">
        <div className="w-20 h-20 bg-destructive/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        
        <div className="space-y-3">
          <h1 className="font-headline text-3xl font-bold text-secondary uppercase tracking-tight">Systemausfall</h1>
          <p className="text-muted-foreground font-bold text-sm leading-relaxed">
            In der Savanne gab es ein technisches Gewitter. Wir versuchen, die Verbindung wiederherzustellen.
          </p>
          {error.digest && (
            <p className="text-[10px] font-mono text-muted-foreground/50">Error ID: {error.digest}</p>
          )}
        </div>

        <div className="pt-6 space-y-3">
          <Button 
            onClick={() => reset()} 
            className="w-full rounded-2xl h-12 gap-2 shadow-lg shadow-primary/20"
          >
            <RefreshCcw className="w-4 h-4" /> Seite neu laden
          </Button>
          <Button asChild variant="ghost" className="w-full rounded-2xl h-12 text-muted-foreground font-bold">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
