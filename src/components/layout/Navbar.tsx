"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
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

const secondaryLinks = [
  { name: 'AI Advisor', href: '/trip-advisor', highlight: true },
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
        <Link href="/" className="relative z-50 transition-transform duration-500 hover:scale-105 active:scale-95">
          <img 
            src="/assets/iconlogo.jpg"
            alt="Tansania Reiseabenteuer"
            className={cn(
              "h-10 md:h-14 w-auto object-contain transition-all duration-500 rounded-lg shadow-sm",
              !isScrolled && "brightness-110" 
            )}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                const text = document.createElement('span');
                text.innerText = 'TANSANIA REISEABENTEUER';
                text.className = 'font-headline font-bold text-lg text-primary tracking-widest';
                parent.appendChild(text);
              }
            }}
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/trip-advisor" className="hidden lg:block">
            <Button variant="ghost" className={cn(
              "rounded-full gap-2 text-[10px] font-bold uppercase tracking-widest border",
              isScrolled ? "border-primary/20 text-secondary" : "border-white/20 text-white"
            )}>
              <Sparkles className="w-3.5 h-3.5 text-primary" /> AI Advisor
            </Button>
          </Link>

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
                <div className="p-8 flex justify-between items-center border-b border-white/5 sticky top-0 bg-[#0a0a0a] z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigationszentrum</span>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                <div className="p-8 space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Hauptziele</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {mainNavLinks.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href}
                          className="text-2xl font-headline font-bold text-white hover:text-primary transition-colors flex items-center justify-between group"
                        >
                          {link.name}
                          <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

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

                  <div className="pt-10 border-t border-white/5 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {secondaryLinks.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className={cn(
                            "text-xs font-bold uppercase tracking-widest transition-colors",
                            item.highlight ? "text-primary flex items-center gap-2" : "text-white/40 hover:text-white"
                          )}
                        >
                          {item.highlight && <Sparkles className="w-3 h-3" />}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-8 border-t border-white/5 bg-black/20">
                  <Link href="/trip-planner">
                    <Button className="w-full h-16 rounded-2xl text-lg font-bold text-white">
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