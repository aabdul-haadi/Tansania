
import React from 'react';
import Link from 'next/link';
import { Compass, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-primary" />
              <span className="font-headline text-2xl font-bold tracking-tight">
                Serengeti<span className="text-primary">Dreams</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Egypt-based experts crafting bespoke Tanzania safari experiences. From the Serengeti plains to Zanzibar beaches, we bridge the cultures of the Nile and the Savannah.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-xl font-semibold mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/safaris" className="text-muted-foreground hover:text-primary transition-colors">All Safaris</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Travel Blog</Link></li>
              <li><Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Guest Reviews</Link></li>
              <li><Link href="/trip-planner" className="text-muted-foreground hover:text-primary transition-colors">Custom Planning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">Cairo Office: 123 Zamalek St, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">hello@serengetidreams.com</span>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-headline text-xl font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/policies/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policies/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/policies/cancellation" className="text-muted-foreground hover:text-primary transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Serengeti Dreams. All rights reserved.</p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Egypt Licensed Operator</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
