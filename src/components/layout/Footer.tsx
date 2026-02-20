import React from 'react';
import Link from 'next/link';
import { Compass, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-20 pb-8 overflow-hidden">
      {/* Procedural Safari Touch - CSS Pattern & Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.2),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* CSS Silhouette Motif */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[500px] opacity-10">
          <svg viewBox="0 0 200 100" className="w-full h-full fill-white">
            <path d="M20,90 Q40,70 60,85 T100,80 T140,85 T180,75 L180,100 L20,100 Z" />
            <path d="M140,85 L145,60 Q150,55 160,58 Q170,62 165,75 L160,85 Z" opacity="0.5" />
            <path d="M50,85 L52,70 Q55,65 65,68 Q75,72 70,85 Z" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <Compass className="w-8 h-8 text-primary transition-transform group-hover:rotate-45" />
              <span className="font-headline text-2xl font-bold tracking-tight">
                Serengeti<span className="text-primary">Dreams</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-light text-xs max-w-xs">
              Egypt-based experts crafting bespoke Tanzania safari experiences. Bridging the Nile and the Savannah with local Cairo-based support and 10+ years of expertise.
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
          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Explore</h4>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li><Link href="/safaris" className="text-white/40 hover:text-white transition-colors">Safari Packages</Link></li>
              <li><Link href="/destinations" className="text-white/40 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/blog" className="text-white/40 hover:text-white transition-colors">Safari Blog</Link></li>
              <li><Link href="/trip-planner" className="text-white/40 hover:text-white transition-colors">Trip Planner</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Legal</h4>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li><Link href="/legal/imprint" className="text-white/40 hover:text-white transition-colors">Imprint</Link></li>
              <li><Link href="/legal/terms" className="text-white/40 hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/legal/privacy" className="text-white/40 hover:text-white transition-colors">Data Protection</Link></li>
              <li><Link href="/legal/directive" className="text-white/40 hover:text-white transition-colors">Package Travel Directive</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Services</h4>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li><Link href="/services/agency-services" className="text-white/40 hover:text-white transition-colors">Agency services</Link></li>
              <li><Link href="/services/adventure-app" className="text-white/40 hover:text-white transition-colors">Adventure app</Link></li>
              <li><Link href="/services/guest-protection" className="text-white/40 hover:text-white transition-colors">Protection Program</Link></li>
              <li><Link href="/services/passport-visa" className="text-white/40 hover:text-white transition-colors">Passport & Visa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Cairo Office</h4>
            <ul className="flex flex-col gap-4 text-xs">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="leading-relaxed">123 Zamalek St,<br />Cairo, Egypt</span>
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
          <p>© {new Date().getFullYear()} Serengeti Dreams. Experience Africa Differently.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">General Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}