import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.2),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/assets/iconlogo.jpg"
                alt="Tansania Reiseabenteuer Icon"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105 rounded-lg brightness-110 shadow-lg"
              />
              <span className="font-headline font-bold text-xl text-primary tracking-wider uppercase leading-tight">
                Tansania <br /> Reiseabenteuer
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-light text-sm max-w-xs">
              Ihr Experte für exklusive Safari-Erlebnisse und Traumurlaube in Tansania und Sansibar. Wir verbinden den Nil mit der Savanne.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all border border-white/10 group">
                  <Icon className="w-4 h-4 text-white group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-8 block">Entdecken</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              <li><Link href="/safaris" className="text-white/50 hover:text-white transition-colors">Safari-Pakete</Link></li>
              <li><Link href="/destinations" className="text-white/50 hover:text-white transition-colors">Reiseziele</Link></li>
              <li><Link href="/blog" className="text-white/50 hover:text-white transition-colors">Expeditions-Journal</Link></li>
              <li><Link href="/trip-planner" className="text-white/50 hover:text-white transition-colors">Reiseplaner</Link></li>
              <li><Link href="/trip-advisor" className="text-primary hover:text-primary/80 transition-colors">AI Trip Advisor</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-8 block">Rechtliches</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              <li><Link href="/legal/imprint" className="text-white/50 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/legal/terms" className="text-white/50 hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="/legal/privacy" className="text-white/50 hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/legal/directive" className="text-white/50 hover:text-white transition-colors">Pauschalreiserichtlinie</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block font-headline">Kontakt Berlin SDL</h4>
              <ul className="flex flex-col gap-5 text-sm">
                <li className="flex items-start gap-4 text-white/70">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Bayerischer Pl. 7,<br />10779 Berlin, Germany</span>
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-bold">+49 30 22608080</span>
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="truncate">info@tansania-reiseabenteuer.de</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Servicezeiten</p>
                  <p className="text-white font-bold">Montag – Freitag</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} Tansania Reiseabenteuer SDL. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <span>Berlin Headquarters</span>
            <span>Est. 2014</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
