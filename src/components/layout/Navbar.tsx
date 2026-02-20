
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronRight, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const destinations = [
  { name: 'SAFARI', href: '/safaris' },
  { name: 'KILIMANDSCHARO', href: '/destinations/kilimanjaro' },
  { name: 'SANSIBAR', href: '/destinations/zanzibar' },
];

const services = [
  { name: 'Agenturleistungen', href: '/services/agency-services' },
  { name: 'Abenteuer-App', href: '/services/adventure-app' },
  { name: 'Reiseschutz', href: '/services/guest-protection' },
  { name: 'Visum & Reisepass', href: '/services/passport-visa' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Text removed as it's part of the image */}
        <Link href="/" className="relative z-50 transition-transform hover:scale-105 active:scale-95">
          <Image 
            src="https://storage.googleapis.com/firejet-30da1.appspot.com/users/clvlyszhf0000la086mjha62f/projects/clvlyszhf0000la086mjha62f/1740484124411-logo.png"
            alt="Tansania Reiseabenteuer"
            width={220}
            height={60}
            className={cn(
              "h-10 md:h-12 w-auto object-contain transition-all",
              !isScrolled && "brightness-0 invert" // White version for transparent header
            )}
            priority
          />
        </Link>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-4">
          <Link href="/trip-planner" className="hidden sm:block">
            <Button 
              className="rounded-full px-8 font-bold text-[10px] uppercase tracking-widest shadow-xl h-11 bg-primary text-white hover:bg-primary/90"
            >
              JETZT ANFRAGEN
            </Button>
          </Link>

          {/* Unified Hamburger Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "group flex items-center gap-3 p-2 pl-4 rounded-full transition-all border",
                  isScrolled 
                    ? "bg-background border-border text-foreground hover:border-primary/50" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Menu</span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Menu className="w-5 h-5" />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none bg-secondary text-white overflow-y-auto">
              <div className="flex flex-col min-h-screen">
                <div className="p-8 flex justify-between items-center border-b border-white/5">
                  <span className="font-headline text-xl font-bold">Menu</span>
                </div>

                <div className="p-8 space-y-12">
                  <nav className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6">Reiseziele</p>
                      <div className="grid grid-cols-1 gap-4">
                        {destinations.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            className="group flex items-center justify-between text-2xl font-headline font-bold hover:text-primary transition-colors"
                          >
                            {item.name}
                            <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6">Dienstleistungen</p>
                      <div className="grid grid-cols-1 gap-4">
                        {services.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            className="text-lg font-bold text-white/60 hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>

                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <Link href="/about" className="block text-xl font-bold hover:text-primary transition-colors">Über uns</Link>
                    <Link href="/blog" className="block text-xl font-bold hover:text-primary transition-colors">Unser Magazin</Link>
                    <Link href="/blog" className="block text-xl font-bold hover:text-primary transition-colors">Reiseblog</Link>
                    <Link href="/services/travel-shop" className="block text-xl font-bold hover:text-primary transition-colors">Reisetipps</Link>
                    <Link href="/safaris?year=2026" className="block text-xl font-bold text-primary italic">REISEN 2026</Link>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10 border-t border-white/5 text-xs font-bold uppercase tracking-widest text-white/40">
                    <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link>
                    <Link href="/legal/imprint" className="hover:text-white transition-colors">Impressum</Link>
                  </div>

                  <div className="pt-10 space-y-4">
                    <a href="tel:+201234567890" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-all">
                      <Phone className="w-4 h-4 text-primary" /> +20 123 456 7890
                    </a>
                    <a href="mailto:concierge@serengetidreams.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-all">
                      <Mail className="w-4 h-4 text-primary" /> concierge@serengetidreams.com
                    </a>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                      <Instagram className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                      <Facebook className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-auto p-8">
                  <Link href="/trip-planner">
                    <Button className="w-full h-16 rounded-2xl text-lg font-bold bg-primary text-white shadow-2xl">
                      JETZT ANFRAGEN
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
