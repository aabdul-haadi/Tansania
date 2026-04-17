"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"/>
  </svg>
);

export function Footer() {
  const textColor = "text-[rgba(253,252,250,0.80)]";
  const linkClass = cn("font-sans text-[14px] leading-[20px] font-normal hover:text-white transition-colors duration-300", textColor);
  const labelClass = "font-headline text-[20px] font-medium text-white mb-6 block tracking-wide";

  return (
    <footer className="relative bg-[#3A3634] text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 md:gap-4 group w-fit">
                <img src="/iconlogo.jpg" alt="Tansania Reiseabenteuer" className="h-10 md:h-14 w-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="font-headline font-black text-base sm:text-lg md:text-xl leading-tight tracking-normal uppercase">Tansania</span>
                  <span className="font-headline font-black text-base sm:text-lg md:text-xl text-primary leading-tight tracking-normal uppercase">Reiseabenteuer</span>
                </div>
              </Link>
              <p className={cn("font-sans text-[14px] leading-[22.75px] font-normal max-w-xs", textColor)}>
                Ihr Spezialist für maßgeschneiderte Premium-Safaris und individuelle Luxusreisen nach Tansania und Sansibar.
              </p>
            </div>

            {/* Social Registry */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: TikTokIcon, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FDFCFB]/60 hover:text-primary hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Seasonal Journeys Column */}
          <div>
            <h4 className={labelClass}>Reisen 2026/27</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/neujahrsreisen-tansania-2026" className={linkClass}>Neujahrsreisen 26/27</Link></li>
              <li><Link href="/sommerreisen-abenteuer-und-erholung-2026" className={linkClass}>Sommerreisen 2026</Link></li>
              <li><Link href="/weihnachten-reisen-tansania-2026" className={linkClass}>Weihnachtsreisen 26/27</Link></li>
              <li><Link href="/ostern-safari-urlaub-2026" className={linkClass}>Ostern 2026</Link></li>
              <li><Link href="/migration" className={linkClass}>Migration Tracker</Link></li>
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
              <li><Link href="/legal/directive" className={linkClass}>EU-Richtlinie</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className={labelClass}>Kontakt Berlin</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className={cn("font-sans text-[14px] leading-[20px] font-normal", textColor)}>Bayerischer Platz 7, 10779 Berlin, Germany</span>
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
            © 2026/27 Tansania Reiseabenteuer SDL GmbH. Alle Rechte vorbehalten.
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

      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    </footer>
  );
}