"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-12 overflow-hidden border-t border-white/5 font-bold">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo1.png" alt="Tansania Reiseabenteuer" className="h-10 md:h-12 w-auto rounded-lg shadow-xl" />
              <span className="font-headline font-bold text-base md:text-lg text-primary uppercase leading-tight whitespace-nowrap">
                Tansania Reiseabenteuer
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-bold text-sm uppercase tracking-tight">
              Ihr Experte für exklusive Safari-Erlebnisse und Traumurlaube in Tansania und Sansibar.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-8 block">Über uns</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-white/50">
              <li><Link href="/about" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link href="/services/guest-protection" className="hover:text-white transition-colors">Reiseversicherung</Link></li>
              <li><Link href="/reise-shop" className="hover:text-white transition-colors text-primary">Reise-Store</Link></li>
              <li><Link href="/partner" className="hover:text-white transition-colors">Partner</Link></li>
              <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
              <li><Link href="/auth/login" className="hover:text-white transition-colors">Staff Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-8 block">Entdecken & Recht</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-white/50">
              <li><Link href="/safaris" className="hover:text-white">Safari-Pakete</Link></li>
              <li><Link href="/national-parks" className="hover:text-white">Nationalparks</Link></li>
              <li><Link href="/blog" className="hover:text-white">Expeditions-Journal</Link></li>
              <li><Link href="/legal/imprint" className="hover:text-white">Impressum</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white">AGB</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block font-headline">Kontakt Berlin</h4>
            <ul className="flex flex-col gap-5 text-[10px] font-black uppercase tracking-widest text-white/70">
              <li className="flex items-start gap-4"><MapPin className="w-5 h-5 text-primary" /> <span>Bayerischer Pl. 7, 10779 Berlin</span></li>
              <li className="flex items-center gap-4"><Phone className="w-5 h-5 text-primary" /> <span>+49 30 22608080</span></li>
              <li className="flex items-center gap-4"><Mail className="w-5 h-5 text-primary" /> <span className="truncate">info@tansania-reiseabenteuer.de</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} Tansania Reiseabenteuer. Alle Rechte vorbehalten.</p>
          <span>Est. 2014</span>
        </div>
      </div>
    </footer>
  );
}