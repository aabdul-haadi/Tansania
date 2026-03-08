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
  Info,
  Heart,
  Mountain,
  Waves,
  Briefcase,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const destinations = [
  { name: 'Kenia', href: '/destinations/kenia' },
  { name: 'Botswana', href: '/destinations/botswana' },
  { name: 'Ägypten', href: '/destinations/egypt' },
  { name: 'Südafrika', href: '/destinations/south-africa' },
  { name: 'Uganda', href: '/destinations/uganda' },
  { name: 'Ruanda', href: '/destinations/rwanda' },
  { name: 'Namibia', href: '/destinations/namibia' },
  { name: 'Äthiopien', href: '/destinations/ethiopia' },
];

const themes = [
  { name: 'Safari & Sansibar', href: '/safaris', icon: Sparkles },
  { name: 'Flitterwochen', href: '/safaris', icon: Heart },
  { name: 'Familienreisen', href: '/safaris', icon: Users },
  { name: 'Luxusreisen', href: '/safaris', icon: Star },
];

const services = [
  { name: 'Agentur Expertise', href: '/services/agency-services' },
  { name: 'Reiseversicherung', href: '/services/guest-protection' },
  { name: 'Partnerprogramm', href: '/partner' },
  { name: 'Fam-Trip', href: '/fam-trip' },
  { name: 'Karriere', href: '/karriere' },
];

const utility = [
  { name: 'Über uns', href: '/about', icon: Info },
  { name: 'Reisetipps', href: '/blog', icon: MessageSquare },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Kontakt', href: '/contact', icon: MapPin },
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
                {/* Redesigned Sidebar Header */}
                <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-black/40 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                      <Compass className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Command Center</span>
                      <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest mt-1">Digitaler Reiseplaner</span>
                    </div>
                  </div>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Main Content Area - High Density & Visibility */}
                <div className="flex-grow overflow-y-auto no-scrollbar scroll-smooth">
                  <div className="p-6 md:p-10 space-y-12">
                    
                    {/* Primary Pillars */}
                    <div className="space-y-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-2">Expeditionen</p>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { name: 'Safaris', href: '/safaris', icon: Compass },
                          { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', icon: Mountain },
                          { name: 'Sansibar Strände', href: '/destinations/zanzibar', icon: Waves },
                        ].map((link) => (
                          <Link 
                            key={link.name} 
                            href={link.href} 
                            className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <link.icon className="w-6 h-6 text-primary" />
                              <span className="text-xl md:text-2xl font-headline font-bold uppercase tracking-tight">{link.name}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Destination Grid */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Afrika Portfolio</p>
                        <div className="h-px flex-grow ml-6 bg-white/10" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {destinations.map(dest => (
                          <Link 
                            key={dest.name} 
                            href={dest.href} 
                            className="text-[9px] font-bold uppercase tracking-widest text-white/50 hover:text-white hover:bg-primary hover:border-primary transition-all py-3 px-2 rounded-xl border border-white/5 text-center bg-white/5"
                          >
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Themed Collections & Services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-5">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Themen</p>
                        <div className="flex flex-col gap-4">
                          {themes.map((theme) => (
                            <Link key={theme.name} href={theme.href} className="flex items-center gap-3 group">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <theme.icon className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">{theme.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-5">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Services</p>
                        <div className="flex flex-col gap-4">
                          {services.map((service) => (
                            <Link key={service.name} href={service.href} className="flex items-center gap-3 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                              <span className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Resources & Information */}
                    <div className="pt-8 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-6">
                        {utility.map(link => (
                          <Link key={link.name} href={link.href} className="flex items-center gap-3 group">
                            <link.icon className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Reisen 2026 Spotlight */}
                    <div className="bg-primary/5 rounded-[2rem] p-6 border border-primary/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Zap className="w-12 h-12 text-primary" />
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary mb-2 block">Exklusiv</span>
                      <h4 className="font-headline text-lg font-bold text-white uppercase mb-2">Expeditionen 2026</h4>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed mb-4">
                        Jetzt Frühbucher-Vorteile für die Migration-Saison sichern.
                      </p>
                      <Link href="/safaris" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                        Termine prüfen <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>
                </div>

                {/* Bottom Fixed Action Footer */}
                <div className="p-6 md:p-8 bg-black/60 border-t border-white/5 space-y-4 shrink-0">
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-14 md:h-16 rounded-xl text-xs md:text-sm font-black shadow-2xl shadow-primary/40 bg-primary text-white border-none transition-all active:scale-[0.98] uppercase tracking-[0.2em]">
                      JETZT REISE PLANEN <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <div className="flex items-center justify-between gap-4 px-2">
                    <div className="flex items-center gap-2 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                      <Globe className="w-3 h-3" /> 
                      <span>Berlin HQ</span>
                    </div>
                    <div className="flex items-center gap-2 text-[8px] font-bold text-white/20 uppercase tracking-widest">
                      <ShieldCheck className="w-3 h-3" /> 
                      <span>100% Sicher</span>
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
