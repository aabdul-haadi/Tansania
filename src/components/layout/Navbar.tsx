
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

const mainNavLinks = [
  { name: 'SAFARI', href: '/safaris' },
  { name: 'KILIMANDSCHARO', href: '/destinations/kilimanjaro' },
  { name: 'SANSIBAR', href: '/destinations/zanzibar' },
];

const reiseziele = [
  { name: 'Kenia', href: '/destinations/kenia' },
  { name: 'Botswana', href: '/destinations/botswana' },
  { name: 'Ägypten', href: '/destinations/egypt' },
  { name: 'Südafrika', href: '/destinations/south-africa' },
  { name: 'Uganda', href: '/destinations/uganda' },
  { name: 'Ruanda', href: '/destinations/rwanda' },
  { name: 'Namibia', href: '/destinations/namibia' },
  { name: 'Äthiopien', href: '/destinations/ethiopia' },
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
          ? 'bg-background/90 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Primary Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {mainNavLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-[11px] font-bold tracking-[0.25em] transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Bar */}
        <div className="flex items-center gap-4">
          <Link href="/trip-planner" className="hidden sm:block">
            <Button className="rounded-full px-8 h-11 text-[10px] tracking-[0.2em] font-bold">
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
            
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none bg-[#0a0a0a] text-white overflow-y-auto">
              <div className="flex flex-col min-h-full">
                {/* Header */}
                <div className="p-8 flex justify-between items-center border-b border-white/5 sticky top-0 bg-[#0a0a0a] z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Menü</span>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Navigation Content */}
                <div className="p-8 space-y-12">
                  {/* Flagship Sections - Static & Visible */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Hauptziele</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {mainNavLinks.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href}
                          className="text-2xl font-headline font-bold hover:text-primary transition-colors flex items-center justify-between group"
                        >
                          {link.name}
                          <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Destinations Grid */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Alle Reiseziele</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {reiseziele.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="text-sm font-medium text-white/60 hover:text-white transition-colors py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Links */}
                  <div className="pt-10 border-t border-white/5 space-y-4">
                    {secondaryLinks.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        className="block text-lg font-bold text-white/60 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Drawer */}
                <div className="mt-auto p-8 border-t border-white/5 bg-black/20">
                  <Link href="/trip-planner">
                    <Button className="w-full h-16 rounded-2xl text-lg font-bold">
                      JETZT REISE PLANEN
                    </Button>
                  </Link>
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] text-center mt-6">
                    © {new Date().getFullYear()} Serengeti Dreams
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
