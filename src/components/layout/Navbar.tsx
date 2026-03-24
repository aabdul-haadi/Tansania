"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight,
  Compass, 
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 200 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500",
        (!isVisible && !isOpen) ? "-translate-y-full" : "translate-y-0",
        isScrolled ? "py-3" : "py-6 md:py-8"
      )}
    >
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 px-6 md:px-8 h-14 md:h-16 rounded-full border",
          isScrolled 
            ? "bg-white text-secondary shadow-2xl border-border" 
            : "bg-transparent text-white border-transparent",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm",
              isScrolled ? "bg-primary" : "bg-white/10 backdrop-blur-md border border-white/20"
            )}>
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-[10px] md:text-xs leading-none uppercase tracking-tighter">
                Tansania
              </span>
              <span className={cn(
                "font-headline font-black text-[10px] md:text-xs leading-none uppercase tracking-tighter transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                Reiseabenteuer
              </span>
            </div>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-3 pl-4 pr-2 h-10 md:h-11 rounded-full transition-all duration-500 border font-black text-[9px] uppercase tracking-[0.2em]",
                  isScrolled 
                    ? "bg-secondary text-white border-secondary" 
                    : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-secondary"
                )}
              >
                <span>Site Registry</span>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Menu className="w-4 h-4" />
                </div>
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:max-w-[400px] p-0 bg-secondary border-none flex flex-col shadow-2xl font-bold">
              {/* Compact Registry Header */}
              <div className="bg-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-border">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-primary" />
                  <span className="font-black text-[10px] uppercase tracking-widest text-secondary">Registry Hub</span>
                </div>
                <SheetClose asChild>
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all">
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>
              </div>

              <ScrollArea className="flex-grow">
                <div className="p-8 space-y-10">
                  {/* Primary Navigation Registry */}
                  <nav className="flex flex-col gap-4">
                    {[
                      { name: 'Über uns', href: '/about' },
                      { name: 'Reisetipps', href: '/blog?category=Tipps' },
                      { name: 'Unser Magazin', href: '/blog' },
                      { name: 'FAQ', href: '/faq' },
                      { name: 'Reiseblog', href: '/blog' },
                      { name: 'Kontakt', href: '/contact' },
                    ].map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="text-lg font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="h-px bg-white/5 w-full" />

                  {/* Sub-Registries Compact */}
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    <AccordionItem value="destinations" className="border-none">
                      <AccordionTrigger className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 py-2 hover:no-underline [&>svg]:hidden flex justify-between items-center group">
                        <span>REISEZIELE</span>
                        <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-all" />
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3 pt-4 pb-2">
                        {[
                          { name: 'SAFARI', href: '/safaris' },
                          { name: 'KILIMANDSCHARO', href: '/destinations/kilimanjaro' },
                          { name: 'SANSIBAR', href: '/destinations/zanzibar' },
                        ].map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="text-xs font-black text-white/40 hover:text-white transition-colors pl-4 border-l border-white/5"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 py-2 hover:no-underline [&>svg]:hidden flex justify-between items-center group">
                        <span>DIENSTLEISTUNGEN</span>
                        <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-all" />
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3 pt-4 pb-2">
                        {[
                          { name: 'REISEVERSICHERUNG', href: '/services/guest-protection' },
                          { name: 'REISE-STORE', href: '/reise-shop' },
                          { name: 'PARTNER PROGRAMM', href: '/partner' },
                        ].map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="text-xs font-black text-white/40 hover:text-white transition-colors pl-4 border-l border-white/5"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="reisen2026" className="border-none">
                      <AccordionTrigger className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 py-2 hover:no-underline [&>svg]:hidden flex justify-between items-center group">
                        <span>REISEN 2026</span>
                        <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-all" />
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3 pt-4 pb-2">
                        {[
                          { name: 'GROSSE MIGRATION 2026', href: '/safaris' },
                          { name: 'FAM TRIP 2026', href: '/fam-trip' },
                          { name: 'EXKLUSIV-ITINERARIES', href: '/itinerary-builder' },
                        ].map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="text-xs font-black text-white/40 hover:text-white transition-colors pl-4 border-l border-white/5"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </ScrollArea>

              {/* Bottom CTA Fix */}
              <div className="p-6 border-t border-white/5 bg-secondary/50 backdrop-blur-md">
                <Button asChild className="w-full h-14 rounded-xl bg-primary text-white font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] transition-transform">
                  <Link href="/trip-planner">JETZT ANFRAGEN <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <p className="mt-4 text-center text-[7px] font-black uppercase tracking-widest text-white/20">
                  Berlin HQ • Official Registry 2026
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
