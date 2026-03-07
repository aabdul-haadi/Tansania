"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  { name: 'NATIONALPARKS', href: '/national-parks' },
  { name: 'KILIMANDSCHARO', href: '/destinations/kilimanjaro' },
  { name: 'SANSIBAR', href: '/destinations/zanzibar' },
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isHeroPage = pathname === '/' || pathname === '/about' || pathname === '/national-parks' || pathname?.startsWith('/destinations/') || pathname?.startsWith('/safaris/');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowFullNav = !mounted || !isHeroPage || isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
        shouldShowFullNav
          ? 'bg-background/90 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center gap-3 transition-transform duration-500 hover:scale-105 group">
          <img 
            src="/logo/logo1.png"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain rounded-lg"
          />
          <span className={cn(
            "font-headline font-bold text-lg md:text-xl tracking-wider uppercase transition-colors",
            shouldShowFullNav ? "text-secondary" : "text-white"
          )}>
            Tansania <span className="text-primary">Reiseabenteuer</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "group flex items-center gap-3 p-1.5 pl-5 rounded-full transition-all duration-500 border",
                  shouldShowFullNav 
                    ? "bg-background border-border text-foreground hover:border-primary/50" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] hidden md:block">Menü</span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                  <Menu className="w-5 h-5" />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none bg-[#0a0a0a] text-white">
              <div className="flex flex-col h-full p-8 space-y-12">
                <div className="flex justify-between items-center border-b border-white/5 pb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigationszentrum</span>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>
                <div className="space-y-6">
                  {mainNavLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-2xl font-headline font-bold text-white hover:text-primary transition-colors flex items-center justify-between">
                      {link.name} <ChevronRight className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link href="/trip-planner">
                    <Button className="w-full h-16 rounded-2xl text-lg font-bold">JETZT REISE PLANEN</Button>
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