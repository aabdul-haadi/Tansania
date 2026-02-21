import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-8 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.2),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="block group">
              <img 
                src="/logo1.png"
                alt="Tansania Reiseabenteuer"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105 brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    const text = document.createElement('span');
                    text.innerText = 'SERENGETI DREAMS';
                    text.className = 'font-headline font-bold text-xl text-primary tracking-widest';
                    parent.appendChild(text);
                  }
                }}
              />
            </Link>
            <p className="text-white/60 leading-relaxed font-light text-xs max-w-xs">
              Ägyptische Experten für maßgeschneiderte Tansania-Safaris. Wir verbinden den Nil mit der Savanne – mit lokalem Support in Kairo und über 10 Jahren Erfahrung.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all border border-white/10 group">
                  <Icon className="w-4 h-4 text-white group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Entdecken</h4>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li><Link href="/safaris" className="text-white/40 hover:text-white transition-colors">Safari-Pakete</Link></li>
              <li><Link href="/destinations" className="text-white/40 hover:text-white transition-colors">Reiseziele</Link></li>
              <li><Link href="/blog" className="text-white/40 hover:text-white transition-colors">Safari Blog</Link></li>
              <li><Link href="/trip-planner" className="text-white/40 hover:text-white transition-colors">Reiseplaner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Rechtliches</h4>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li><Link href="/legal/imprint" className="text-white/40 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/legal/terms" className="text-white/40 hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="/legal/privacy" className="text-white/40 hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/legal/directive" className="text-white/40 hover:text-white transition-colors">Pauschalreiserichtlinie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Dienstleistungen</h4>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li><Link href="/services/agency-services" className="text-white/40 hover:text-white transition-colors">Agenturleistungen</Link></li>
              <li><Link href="/services/adventure-app" className="text-white/40 hover:text-white transition-colors">Abenteuer-App</Link></li>
              <li><Link href="/services/guest-protection" className="text-white/40 hover:text-white transition-colors">Reiseschutz</Link></li>
              <li><Link href="/services/passport-visa" className="text-white/40 hover:text-white transition-colors">Visum & Reisepass</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Büro Kairo</h4>
            <ul className="flex flex-col gap-4 text-xs">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="leading-relaxed">123 Zamalek St,<br />Kairo, Ägypten</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="truncate">concierge@serengetidreams.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} Tansania Reiseabenteuer. Afrika anders erleben.</p>
        </div>
      </div>
    </footer>
  );
}
