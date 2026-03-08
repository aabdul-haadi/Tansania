
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  MapPin, 
  Compass, 
  Sparkles,
  Plane,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const utilityLinks = [
  { name: 'Über uns', href: '/about' },
  { name: 'Reisetipps', href: '/blog' },
  { name: 'Unser Magazin', href: '/blog?category=Magazin' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Reiseblog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
];

const reisezieleTop = [
  { name: 'Kenia', href: '/destinations/kenia' },
  { name: 'Botswana', href: '/destinations/botswana' },
  { name: 'Ägypten', href: '/destinations/egypt' },
  { name: 'Südafrika', href: '/destinations/south-africa' },
  { name: 'Uganda', href: '/destinations/uganda' },
  { name: 'Ruanda', href: '/destinations/rwanda' },
  { name: 'Namibia', href: '/destinations/namibia' },
  { name: 'Äthiopien', href: '/destinations/ethiopia' },
];

const reisezieleThemen = [
  { name: 'Safari & Sansibar', href: '/safaris?category=SAFARI+%26+SANSIBAR' },
  { name: 'Sansibar', href: '/destinations/zanzibar' },
  { name: 'Flitterwochen', href: '/safaris?category=FLITTERWOCHEN' },
  { name: 'Familienreisen', href: '/safaris?category=FAMILIENSAFARI' },
  { name: 'Luxusreisen', href: '/safaris?tier=luxury' },
  { name: 'Kilimanjaro Besteigung', href: '/destinations/kilimanjaro' },
];

const dienstleistungen = [
  { name: 'Agentur Expertise', href: '/services/agency-services' },
  { name: 'Reiseversicherung', href: '/services/guest-protection' },
  { name: 'Partnerprogramm', href: '/partner' },
  { name: 'Fam-Trip', href: '/fam-trip' },
  { name: 'Adventure App', href: '/services/adventure-app' },
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
    <header className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out">
      {/* Utility Top Bar (Desktop Only) */}
      <div className={cn(
        "hidden lg:block transition-all duration-500 border-b",
        shouldShowFullNav 
          ? "bg-secondary text-white py-2 border-white/5" 
          : "bg-black/20 backdrop-blur-sm text-white/80 py-3 border-white/10"
      )}>
        <div className="container mx-auto px-4 flex justify-end items-center gap-8">
          {utilityLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Bar */}
      <nav className={cn(
        'transition-all duration-500 ease-in-out',
        shouldShowFullNav
          ? 'bg-background/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group shrink-0">
            <img 
              src="/logo/logo1.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto rounded-lg"
            />
            <div className="flex flex-col">
              <span className={cn(
                "font-headline font-bold text-sm md:text-lg tracking-tight uppercase leading-none transition-colors",
                shouldShowFullNav ? "text-secondary" : "text-white"
              )}>
                Tansania
              </span>
              <span className="text-primary font-headline font-bold text-sm md:text-lg tracking-tight uppercase leading-none">
                Reiseabenteuer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Dropdown: REISEZIELE */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "group flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all focus:outline-none",
                shouldShowFullNav ? "text-secondary hover:bg-muted" : "text-white hover:bg-white/10"
              )}>
                Reiseziele <ChevronDown className="w-3.5 h-3.5 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[480px] p-6 rounded-[2rem] shadow-2xl border-border bg-white mt-4">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Top Reiseziele</DropdownMenuLabel>
                    <div className="grid grid-cols-1 gap-1">
                      {reisezieleTop.map((item) => (
                        <DropdownMenuItem key={item.name} asChild className="p-0">
                          <Link href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted font-bold text-xs uppercase tracking-widest transition-colors w-full">
                            <MapPin className="w-3 h-3 text-primary/40" /> {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                  <div className="border-l border-border pl-8">
                    <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Collections</DropdownMenuLabel>
                    <div className="grid grid-cols-1 gap-1">
                      {reisezieleThemen.map((item) => (
                        <DropdownMenuItem key={item.name} asChild className="p-0">
                          <Link href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/5 font-bold text-xs uppercase tracking-widest transition-colors w-full group/item">
                            <Sparkles className="w-3 h-3 text-primary/40 group-hover/item:text-primary" /> {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Static Links */}
            <Link 
              href="/safaris" 
              className={cn(
                "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all",
                shouldShowFullNav ? "text-secondary hover:bg-muted" : "text-white hover:bg-white/10"
              )}
            >
              Safari
            </Link>
            <Link 
              href="/destinations/kilimanjaro" 
              className={cn(
                "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all",
                shouldShowFullNav ? "text-secondary hover:bg-muted" : "text-white hover:bg-white/10"
              )}
            >
              Kilimandscharo
            </Link>
            <Link 
              href="/destinations/zanzibar" 
              className={cn(
                "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all",
                shouldShowFullNav ? "text-secondary hover:bg-muted" : "text-white hover:bg-white/10"
              )}
            >
              Sansibar
            </Link>

            {/* Dropdown: DIENSTLEISTUNGEN */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "group flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all focus:outline-none",
                shouldShowFullNav ? "text-secondary hover:bg-muted" : "text-white hover:bg-white/10"
              )}>
                Dienstleistungen <ChevronDown className="w-3.5 h-3.5 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-4 rounded-2xl shadow-2xl border-border bg-white mt-4">
                {dienstleistungen.map((item) => (
                  <DropdownMenuItem key={item.name} asChild className="p-0">
                    <Link href={item.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-muted font-bold text-xs uppercase tracking-widest transition-colors w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dropdown: REISEN 2026 */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "group flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all focus:outline-none",
                shouldShowFullNav ? "text-secondary hover:bg-muted" : "text-white hover:bg-white/10"
              )}>
                Reisen 2026 <ChevronDown className="w-3.5 h-3.5 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-6 rounded-3xl shadow-2xl border-border bg-white mt-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Zap className="w-16 h-16 text-primary rotate-12" />
                </div>
                <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Expeditions-Planung</DropdownMenuLabel>
                <div className="space-y-2">
                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/safaris" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-muted w-full transition-colors group/link">
                      <span className="font-bold text-xs uppercase tracking-widest text-secondary group-hover/link:text-primary">Große Migration 2026</span>
                      <span className="text-[9px] text-muted-foreground uppercase font-medium">Frühbucher-Kontingente</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/itinerary-builder" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-muted w-full transition-colors group/link">
                      <span className="font-bold text-xs uppercase tracking-widest text-secondary group-hover/link:text-primary">AI Itinerary Builder</span>
                      <span className="text-[9px] text-muted-foreground uppercase font-medium">Bespoke 2026 Planning</span>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/trip-planner" className="hidden xl:block">
              <Button size="sm" className="rounded-full h-10 px-6 font-bold text-[10px] uppercase tracking-widest shadow-xl">
                Jetzt Anfragen
              </Button>
            </Link>

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
              <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none bg-secondary text-white flex flex-col">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Navigationszentrum</span>
                    <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest mt-1">Est. 2014</span>
                  </div>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                <div className="flex-grow overflow-y-auto no-scrollbar p-8">
                  <div className="space-y-10">
                    {/* Primary Groups */}
                    <div className="space-y-6">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Hauptnavigation</p>
                      <div className="grid grid-cols-1 gap-4">
                        <Link href="/safaris" className="text-2xl font-headline font-bold hover:text-primary transition-colors flex justify-between items-center group">
                          SAFARI <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary" />
                        </Link>
                        <Link href="/destinations/kilimanjaro" className="text-2xl font-headline font-bold hover:text-primary transition-colors flex justify-between items-center group">
                          KILIMANDSCHARO <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary" />
                        </Link>
                        <Link href="/destinations/zanzibar" className="text-2xl font-headline font-bold hover:text-primary transition-colors flex justify-between items-center group">
                          SANSIBAR <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>

                    {/* Regional Dropdown (Expanded for Mobile) */}
                    <div className="space-y-6">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Regionen</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {reisezieleTop.map(dest => (
                          <Link key={dest.name} href={dest.href} className="text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors py-2 px-4 rounded-xl bg-white/5">
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Utility Section */}
                    <div className="space-y-6 pt-10 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-4">
                        {utilityLinks.map(link => (
                          <Link key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-black/40 border-t border-white/5 space-y-4">
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-16 rounded-2xl text-lg font-bold shadow-2xl">JETZT REISE PLANEN</Button>
                  </Link>
                  <div className="flex items-center justify-center gap-4 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Berlin Office</span>
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Live Support</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
