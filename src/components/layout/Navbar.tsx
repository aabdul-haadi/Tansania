"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronRight, Phone, Mail, Instagram, Facebook, X, Compass, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const destinations = [
  { name: 'Safari Expeditionen', href: '/safaris', desc: 'Serengeti & Ngorongoro' },
  { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', desc: 'Das Dach Afrikas' },
  { name: 'Sansibar Archipel', href: '/destinations/zanzibar', desc: 'Tropisches Paradies' },
];

const secondaryLinks = [
  { name: 'Über uns', href: '/about' },
  { name: 'Unser Magazin', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/contact' },
];

const serviceLinks = [
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
        'fixed top-0 w-full z-50 transition-all duration-700 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 transition-transform duration-500 hover:scale-105 active:scale-95">
          <Image 
            src="https://storage.googleapis.com/firejet-30da1.appspot.com/users/clvlyszhf0000la086mjha62f/projects/clvlyszhf0000la086mjha62f/1740484124411-logo.png"
            alt="Tansania Reiseabenteuer"
            width={240}
            height={65}
            className={cn(
              "h-10 md:h-12 w-auto object-contain transition-all duration-700",
              !isScrolled && "brightness-0 invert" 
            )}
            priority
          />
        </Link>

        {/* Action Bar */}
        <div className="flex items-center gap-4">
          <Link href="/trip-planner" className="hidden sm:block">
            <Button 
              className="rounded-full px-8 font-bold text-[10px] uppercase tracking-[0.2em] h-11"
            >
              JETZT ANFRAGEN
            </Button>
          </Link>

          {/* Static Hamburger Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "group relative flex items-center gap-3 p-1.5 pl-5 rounded-full transition-all duration-500 border overflow-hidden",
                  isScrolled 
                    ? "bg-background border-border text-foreground hover:border-primary/50" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] hidden md:block transition-colors group-hover:text-primary">
                  Entdecken
                </span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl transition-transform duration-500">
                  <Menu className="w-5 h-5" />
                </div>
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-none bg-[#0a0a0a] text-white overflow-hidden shadow-2xl">
              <div className="relative h-full flex flex-col">
                
                {/* Static Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Header */}
                <div className="relative z-10 p-8 flex justify-between items-center border-b border-white/5 bg-black/20">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-primary" />
                    <span className="font-headline text-xl font-bold tracking-tight text-white">Menü</span>
                  </div>
                  <SheetClose className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-6 h-6 text-white" />
                  </SheetClose>
                </div>

                {/* Static Content Area */}
                <div className="relative z-10 flex-grow overflow-y-auto p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Primary Navigation Column */}
                    <div className="space-y-12">
                      <section>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                          <Globe className="w-3 h-3" /> Reiseziele
                        </p>
                        <div className="grid grid-cols-1 gap-6">
                          {destinations.map((item) => (
                            <div key={item.name}>
                              <Link href={item.href} className="group block">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-2xl md:text-3xl font-headline font-bold hover:text-primary transition-colors duration-300">
                                    {item.name}
                                  </span>
                                  <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </div>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                                  {item.desc}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="pt-4">
                        <div className="grid grid-cols-1 gap-4">
                          {secondaryLinks.map((item) => (
                            <div key={item.name}>
                              <Link 
                                href={item.href}
                                className="text-lg md:text-xl font-bold text-white/70 hover:text-white hover:translate-x-2 transition-all inline-block"
                              >
                                {item.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    {/* Secondary/Services Column */}
                    <div className="space-y-12">
                      <section>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                          <Sparkles className="w-3 h-3" /> Dienstleistungen
                        </p>
                        <div className="grid grid-cols-1 gap-5">
                          {serviceLinks.map((item) => (
                            <div key={item.name}>
                              <Link 
                                href={item.href}
                                className="text-sm md:text-base font-bold text-white/50 hover:text-primary transition-colors flex items-center gap-3 group"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
                                {item.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Static Highlight Card */}
                      <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 italic">Highlight 2026</p>
                        <h4 className="font-headline text-xl font-bold mb-4 text-white">Große Migration</h4>
                        <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                          Sichern Sie sich jetzt die besten Plätze für das Naturschauspiel 2026 in der Serengeti.
                        </p>
                        <Link href="/safaris" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                          Expeditionen ansehen <ChevronRight className="w-4 h-4" />
                        </Link>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Footer Section inside Drawer */}
                <div className="relative z-10 p-8 md:p-12 border-t border-white/5 bg-black/40">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                      <a href="tel:+201234567890" className="flex items-center gap-4 text-sm font-bold text-white/60 hover:text-white transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        +20 123 456 7890
                      </a>
                      <a href="mailto:concierge@serengetidreams.com" className="flex items-center gap-4 text-sm font-bold text-white/60 hover:text-white transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="truncate">concierge@serengetidreams.com</span>
                      </a>
                    </div>

                    <div className="flex gap-4">
                      {[Instagram, Facebook].map((Icon, i) => (
                        <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all border border-white/10">
                          <Icon className="w-5 h-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <Link href="/trip-planner">
                      <Button className="w-full h-16 rounded-[1.5rem] text-lg font-bold shadow-2xl">
                        REISE JETZT PLANEN
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}