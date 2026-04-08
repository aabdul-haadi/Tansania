"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
  const linkClass = "font-sans text-[14px] leading-[20px] font-normal text-[#FDFCFB]/80 hover:text-white transition-colors duration-300";
  const labelClass = "font-headline text-[18px] font-medium text-white mb-6 block tracking-tight";

  return (
    <footer className="relative bg-[#3A3634] text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <img src="/iconlogo.jpg" alt="Tansania Reiseabenteuer" className="h-10 w-auto rounded-lg shadow-xl" />
              <div className="flex flex-col">
                <span className="font-headline font-bold text-sm leading-none tracking-tighter">Tansania</span>
                <span className="font-headline font-bold text-sm text-primary leading-none tracking-tighter">Reiseabenteuer</span>
              </div>
            </Link>
            <p className="font-sans text-[14px] leading-[22.75px] font-normal text-[#FDFCFB]/80 max-w-xs">
              Ihr Spezialist für maßgeschneiderte Premium-Safaris und individuelle Luxusreisen nach Tansania und Sansibar.
            </p>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className={labelClass}>Über uns</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/about" className={linkClass}>Unsere Geschichte</Link></li>
              <li><Link href="/services/guest-protection" className={linkClass}>Reiseversicherung</Link></li>
              <li><Link href="/reise-shop" className={linkClass}>Reise-Store</Link></li>
              <li><Link href="/partner" className={linkClass}>Partnernetzwerk</Link></li>
              <li><Link href="/karriere" className={linkClass}>Karriere</Link></li>
              <li><Link href="/auth/login" className={linkClass}>Mitarbeiter-Portal</Link></li>
            </ul>
          </div>

          {/* Registry Column */}
          <div>
            <h4 className={labelClass}>Entdecken & Recht</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/safaris" className={linkClass}>Safari-Pakete</Link></li>
              <li><Link href="/national-parks" className={linkClass}>Nationalparks</Link></li>
              <li><Link href="/blog" className={linkClass}>Expeditions-Journal</Link></li>
              <li><Link href="/legal/imprint" className={linkClass}>Impressum</Link></li>
              <li><Link href="/legal/terms" className={linkClass}>AGB</Link></li>
              <li><Link href="/legal/privacy" className={linkClass}>Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className={labelClass}>Kontakt Berlin</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-sans text-[14px] leading-[20px] font-normal text-[#FDFCFB]/80">Bayerischer Platz 7, 10779 Berlin, Germany</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+493022608080" className={linkClass}>+49 30 22608080</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@tansania-reiseabenteuer.de" className={cn(linkClass, "truncate")}>info@tansania-reiseabenteuer.de</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[12px] font-normal text-[#FDFCFB]/40">
            © {new Date().getFullYear()} Tansania Reiseabenteuer SDL GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-headline text-[12px] font-normal text-[#FDFCFB]/40 tracking-widest">Est. 2014</span>
            <div className="flex gap-4 opacity-40 grayscale filter">
              <span className="text-[10px] font-black border border-white px-2 py-0.5 rounded">DRSF</span>
              <span className="text-[10px] font-black border border-white px-2 py-0.5 rounded">TATO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Registry Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    </footer>
  );
}