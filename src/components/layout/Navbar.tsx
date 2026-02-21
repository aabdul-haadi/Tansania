"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const reisen2026 = [
  { name: 'Neujahrsreisen 2026', href: '/safaris?tag=new-year' },
  { name: 'Sommerreisen 2026', href: '/safaris?tag=summer' },
  { name: 'Weihnachten 2026', href: '/safaris?tag=christmas' },
  { name: 'Ostern 2026', href: '/safaris?tag=easter' },
];

const dienstleistungen = [
  { name: 'Unsere Services', href: '/services/agency-services' },
  { name: 'Unterkünfte', href: '/safaris' },
  { name: 'Aktivitäten', href: '/services/adventure-app' },
];

const secondaryLinks = [
  { name: 'Über uns', href: '/about' },
  { name: 'Reisetipps', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            src="/logo1.png"
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigationszentrum</span>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Navigation Content - Flat Hierarchy */}
                <div className="p-8 space-y-12">
                  {/* Hauptziele */}
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

                  {/* Top Reiseziele (Grid) */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">REISEZIELE</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {reiseziele.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary/40" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Reisen 2026 */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">REISEN 2026</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {reisen2026.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="text-base font-bold text-white/60 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Dienstleistungen */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">DIENSTLEISTUNGEN</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {dienstleistungen.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="text-base font-bold text-white/60 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Links */}
                  <div className="pt-10 border-t border-white/5 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {secondaryLinks.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="text-xs font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
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
