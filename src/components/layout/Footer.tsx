import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-secondary text-white pt-16 pb-8 overflow-hidden">
      {/* Safari Touch Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
        <Image 
          src="https://picsum.photos/seed/safari-footer/1920/600" 
          alt="Safari Background" 
          fill 
          className="object-cover grayscale"
          data-ai-hint="acacia silhouette"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-primary" />
              <span className="font-headline text-2xl font-bold tracking-tight">
                Serengeti<span className="text-primary">Dreams</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-light text-sm">
              Egypt-based experts crafting bespoke Tanzania safari experiences. From the Serengeti plains to Zanzibar beaches, we bridge the cultures of the Nile and the Savannah with local Cairo-based support.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors border border-white/10">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors border border-white/10">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors border border-white/10">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-lg font-bold mb-6 text-primary italic">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/safaris" className="text-white/60 hover:text-primary transition-colors">All Safari Packages</Link></li>
              <li><Link href="/destinations" className="text-white/60 hover:text-primary transition-colors">Regional Destinations</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-primary transition-colors">Safari Stories & Tips</Link></li>
              <li><Link href="/reviews" className="text-white/60 hover:text-primary transition-colors">Guest Testimonials</Link></li>
              <li><Link href="/trip-planner" className="text-white/60 hover:text-primary transition-colors">Custom Trip Planner</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline text-lg font-bold mb-6 text-primary italic">Cairo Office</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60">123 Zamalek St, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/60">+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/60">concierge@serengetidreams.com</span>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-headline text-lg font-bold mb-6 text-primary italic">Expertise</h4>
            <div className="space-y-4">
              <p className="text-xs text-white/40 leading-relaxed font-light">
                Registered in Egypt as a premium Safari operator specializing in Tanzania expeditions.
              </p>
              <ul className="flex flex-col gap-3 text-xs uppercase tracking-widest font-bold">
                <li><Link href="/policies/privacy" className="text-white/40 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/policies/terms" className="text-white/40 hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/policies/cancellation" className="text-white/40 hover:text-white transition-colors">Cancellations</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} Serengeti Dreams. Crafted for the Explorer.</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Licensed Egypt Agency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>IATA Certified Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
