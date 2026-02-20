"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const destinations = [
  { name: 'SAFARI', href: '/safaris' },
  { name: 'KILIMANDSCHARO', href: '/destinations/kilimanjaro' },
  { name: 'SANSIBAR', href: '/destinations/zanzibar' },
];

const secondaryLinks = [
  { name: 'Über uns', href: '/about' },
  { name: 'Reisetipps', href: '/blog' },
  { name: 'Unser Magazin', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Reiseblog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
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
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - No extra text needed */}
        <Link href="/" className="relative z-50 transition-transform duration-500 hover:scale-105 active:scale-95">
          <Image 
            src="https://storage.googleapis.com/firejet-30da1.appspot.com/users/clvlyszhf0000la086mjha62f/projects/clvlyszhf0000la086mjha62f/1740484124411-logo.png"
            alt="Tansania Reiseabenteuer"
            width={200}
            height={50}
            className={cn(
              "h-10 md:h-12 w-auto object-contain transition-all duration-500",
              !isScrolled && "brightness-0 invert" 
            )}
            priority
          />
        </Link>

        {/* Action Bar */}
        <div className="flex items-center gap-4">
          <Link href="/trip-planner" className="hidden sm:block">
            <Button className="rounded-full px-8 h-11">
              JETZT ANFRAGEN
            </Button>
          </Link>

          {/* Universal Hamburger Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "group flex items-center gap-3 p-1.5 pl-5 rounded-full transition-all duration-500 border",
                  isScrolled 
                    ? "bg-background border-border text-foreground hover:border-primary/50" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] hidden md:block">
                  Menü
                </span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                  <Menu className="w-5 h-5" />
                </div>
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-none bg-[#0a0a0a] text-white overflow-hidden shadow-2xl">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-8 flex justify-between items-center border-b border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Tansania Entdecken</span>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Static Content Area */}
                <div className="flex-grow p-8 md:p-12">
                  <div className="space-y-12">
                    {/* Destinations Section */}
                    <section>
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">REISEZIELE</p>
                      <div className="grid grid-cols-1 gap-4">
                        {destinations.map((item) => (
                          <Link key={item.name} href={item.href} className="group flex items-center justify-between">
                            <span className="text-3xl md:text-4xl font-headline font-bold hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <ChevronRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </section>

                    {/* Links Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-12">
                      <div className="space-y-4">
                        {secondaryLinks.slice(0, 3).map((item) => (
                          <Link key={item.name} href={item.href} className="block text-lg font-bold text-white/60 hover:text-white transition-colors">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {secondaryLinks.slice(3).map((item) => (
                          <Link key={item.name} href={item.href} className="block text-lg font-bold text-white/60 hover:text-white transition-colors">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </section>

                    {/* Services */}
                    <section className="border-t border-white/5 pt-12">
                      <div className="flex flex-wrap gap-4">
                        <Link href="/services/agency-services" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                          DIENSTLEISTUNGEN
                        </Link>
                        <Link href="/safaris" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                          REISEN 2026
                        </Link>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Footer Drawer */}
                <div className="p-8 md:p-12 border-t border-white/5 bg-black/40">
                  <Link href="/trip-planner">
                    <Button className="w-full h-16 rounded-2xl text-lg font-bold">
                      JETZT REISE PLANEN
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
