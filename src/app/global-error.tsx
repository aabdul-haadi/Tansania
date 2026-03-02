
"use client";

import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-secondary p-6 text-white text-center">
          <div className="max-w-sm space-y-6">
            <ShieldAlert className="w-16 h-16 text-primary mx-auto" />
            <h1 className="text-2xl font-bold uppercase tracking-widest">Kritischer Fehler</h1>
            <p className="text-white/60 text-sm leading-relaxed">
              Ein globaler Systemfehler ist aufgetreten. Bitte laden Sie die App vollständig neu.
            </p>
            <button 
              onClick={() => reset()}
              className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl"
            >
              System Reset
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
