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
                shouldShowGlass ? "text-secondary" : "text-white"
              )}>
                Tansania
              </span>
              <span className="text-primary font-headline font-bold text-sm md:text-lg tracking-tight uppercase leading-none">
                Reiseabenteuer
              </span>
            </div>
          </Link>

          {/* Minimalist Trigger - All content inside Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/trip-planner" className="hidden sm:block">
              <Button size="sm" className={cn(
                "rounded-full h-10 px-6 font-bold text-[10px] uppercase tracking-widest transition-all",
                !shouldShowGlass && "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md"
              )}>
                Jetzt Anfragen
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "group flex items-center gap-3 p-1.5 pl-5 rounded-full transition-all duration-500 border shadow-2xl",
                    shouldShowGlass 
                      ? "bg-secondary border-secondary text-white hover:bg-primary hover:border-primary" 
                      : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  )}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] hidden md:block">Entdecken</span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-colors",
                    shouldShowGlass ? "bg-primary text-white" : "bg-primary text-white"
                  )}>
                    <Menu className="w-5 h-5" />
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-none bg-secondary text-white flex flex-col">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20 shrink-0">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Navigationszentrum</span>
                    <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest mt-1">Est. 2014 • Berlin Office</span>
                  </div>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                <div className="flex-grow overflow-y-auto no-scrollbar">
                  <div className="p-8 md:p-12 space-y-12">
                    
                    {/* Primary Navigation Hub */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Hauptnavigation</p>
                        <div className="grid grid-cols-1 gap-4">
                          <Link href="/safaris" className="text-2xl md:text-4xl font-headline font-bold hover:text-primary transition-colors flex justify-between items-center group">
                            SAFARI <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                          <Link href="/destinations/kilimanjaro" className="text-2xl md:text-4xl font-headline font-bold hover:text-primary transition-colors flex justify-between items-center group">
                            KILIMANDSCHARO <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                          <Link href="/destinations/zanzibar" className="text-2xl md:text-4xl font-headline font-bold hover:text-primary transition-colors flex justify-between items-center group">
                            SANSIBAR <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Services</p>
                        <div className="grid grid-cols-1 gap-3">
                          {dienstleistungen.map((service) => (
                            <Link 
                              key={service.name} 
                              href={service.href} 
                              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary" />
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Regions Grid */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Top Reiseziele</p>
                        <div className="h-px flex-grow ml-6 bg-white/10" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {reisezieleTop.map(dest => (
                          <Link 
                            key={dest.name} 
                            href={dest.href} 
                            className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-xl border border-white/5 text-center"
                          >
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Utility & 2026 Planning */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
                      <div className="space-y-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Support & Info</p>
                        <div className="grid grid-cols-2 gap-4">
                          {utilityLinks.map(link => (
                            <Link key={link.name} href={link.href} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                              <link.icon className="w-3.5 h-3.5 text-primary/40" />
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-3xl p-6 relative overflow-hidden group hover:bg-white/10 transition-all border border-white/5">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Zap className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-3">Saison 2026</p>
                        <h4 className="font-headline font-bold text-lg mb-2">Große Migration 2026</h4>
                        <Link href="/safaris" className="text-[9px] font-bold uppercase text-white/40 group-hover:text-primary flex items-center gap-2 transition-colors">
                          Kontingente prüfen <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Fixed Action Footer */}
                <div className="p-8 md:p-12 bg-black/40 border-t border-white/5 space-y-6 shrink-0">
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-16 md:h-20 rounded-2xl text-lg md:text-xl font-bold shadow-2xl shadow-primary/20 bg-primary text-white border-none transition-transform active:scale-95">
                      JETZT REISE PLANEN
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary/40" /> 
                      <span>Berlin Office</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary/40" /> 
                      <span>Insolvenzgeschützt</span>
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