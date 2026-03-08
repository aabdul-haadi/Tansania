"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  MapPin, 
  Compass, 
  Sparkles,
  Plane,
  ShieldCheck,
  Zap,
  Globe,
  MessageSquare,
  HelpCircle,
  Users,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const utilityLinks = [
  { name: 'Über uns', href: '/about', icon: Info },
  { name: 'Reisetipps', href: '/blog', icon: Sparkles },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Kontakt', href: '/contact', icon: MessageSquare },
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

  const shouldShowGlass = !mounted || !isHeroPage || isScrolled;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out">
      <nav className={cn(
        'transition-all duration-500 ease-in-out',
        shouldShowGlass
          ? 'bg-background/90 backdrop-blur-2xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group shrink-0">
            <img 
              src="/logo/logo1.png"
              alt="Logo"
              className="h-9 md:h-12 w-auto rounded-lg"
            />
            <div className="flex flex-col">
              <span className={cn(
                "font-headline font-bold text-xs md:text-lg tracking-tight uppercase leading-none transition-colors",
                shouldShowGlass ? "text-secondary" : "text-white"
              )}>
                Tansania
              </span>
              <span className="text-primary font-headline font-bold text-xs md:text-lg tracking-tight uppercase leading-none">
                Reiseabenteuer
              </span>
            </div>
          </Link>

          {/* Minimalist Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/trip-planner" className="hidden sm:block">
              <Button size="sm" className={cn(
                "rounded-full h-10 px-6 font-bold text-[10px] uppercase tracking-widest transition-all shadow-xl",
                !shouldShowGlass && "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md"
              )}>
                Anfragen
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "group flex items-center gap-3 p-1 rounded-full transition-all duration-500 border shadow-2xl",
                    shouldShowGlass 
                      ? "bg-secondary border-secondary text-white hover:bg-primary" 
                      : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  )}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-primary text-white shadow-xl">
                    <Menu className="w-5 h-5" />
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-none bg-secondary text-white flex flex-col overflow-hidden">
                {/* Compact Sidebar Header */}
                <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-black/20 shrink-0">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Explorer Hub</span>
                    <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest mt-1">Navigation System v2.0</span>
                  </div>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* High-Density Navigation Content */}
                <div className="flex-grow overflow-y-auto no-scrollbar scroll-smooth">
                  <div className="p-6 md:p-10 space-y-10">
                    
                    {/* Primary Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Erlebnisse</p>
                        <div className="flex flex-col gap-3">
                          <Link href="/safaris" className="text-2xl md:text-3xl font-headline font-bold hover:text-primary transition-all flex justify-between items-center group uppercase">
                            Safaris <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-1" />
                          </Link>
                          <Link href="/destinations/kilimanjaro" className="text-2xl md:text-3xl font-headline font-bold hover:text-primary transition-all flex justify-between items-center group uppercase">
                            Bergtouren <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-1" />
                          </Link>
                          <Link href="/destinations/zanzibar" className="text-2xl md:text-3xl font-headline font-bold hover:text-primary transition-all flex justify-between items-center group uppercase">
                            Strände <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Zusatz-Services</p>
                        <div className="grid grid-cols-1 gap-2.5">
                          {dienstleistungen.map((service) => (
                            <Link 
                              key={service.name} 
                              href={service.href} 
                              className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary" />
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Regional Grid - Compacted */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Afrika Portfolio</p>
                        <div className="h-px flex-grow ml-6 bg-white/10" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {reisezieleTop.map(dest => (
                          <Link 
                            key={dest.name} 
                            href={dest.href} 
                            className="text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all py-2.5 px-3 rounded-xl border border-white/5 text-center"
                          >
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Footer Utility Tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                      <div className="space-y-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Support & News</p>
                        <div className="grid grid-cols-2 gap-3">
                          {utilityLinks.map(link => (
                            <Link key={link.name} href={link.href} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                              <link.icon className="w-3 h-3 text-primary/40" />
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-2xl p-5 relative overflow-hidden group hover:bg-white/10 transition-all border border-white/5">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                          <Zap className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mb-2">Expedition 2026</p>
                        <h4 className="font-headline font-bold text-base mb-2 uppercase">Migration Saisons</h4>
                        <Link href="/safaris" className="text-[8px] font-bold uppercase text-white/40 group-hover:text-primary flex items-center gap-1.5 transition-colors">
                          Kontingente <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 md:p-8 bg-black/40 border-t border-white/5 space-y-4 shrink-0">
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-14 md:h-16 rounded-xl text-sm md:text-base font-bold shadow-2xl shadow-primary/20 bg-primary text-white border-none transition-all active:scale-[0.98] uppercase tracking-[0.2em]">
                      JETZT REISE PLANEN
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-4 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-primary/40" /> 
                      <span>Berlin HQ</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-primary/40" /> 
                      <span>Gesichert</span>
                    </div>
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
