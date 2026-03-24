"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight,
  Compass, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        isScrolled ? "py-3" : "py-6 md:py-10"
      )}
    >
      <nav className="container mx-auto px-4 max-w-7xl font-bold">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 px-6 md:px-10 h-14 md:h-18 rounded-full border border-transparent",
          isScrolled 
            ? "bg-white text-secondary shadow-2xl border-border" 
            : "bg-transparent text-white",
          isOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
        )}>
          <Link href="/" className="flex items-center gap-3 group relative z-[110]">
            <div className={cn(
              "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm",
              isScrolled ? "bg-primary shadow-primary/20" : "bg-white/10 backdrop-blur-md border border-white/20"
            )}>
              <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-[10px] md:text-sm leading-none uppercase tracking-tighter">
                Tansania
              </span>
              <span className={cn(
                "font-headline font-bold text-[10px] md:text-sm leading-none uppercase tracking-tighter transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                Reiseabenteuer
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 relative z-[110]">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  suppressHydrationWarning
                  className={cn(
                    "flex items-center gap-3 pl-4 pr-2 h-10 md:h-12 rounded-full transition-all duration-500 border group font-bold text-[10px] uppercase tracking-[0.2em]",
                    isScrolled 
                      ? "bg-secondary text-white border-secondary hover:bg-primary shadow-lg" 
                      : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-secondary shadow-xl"
                  )}
                >
                  <span className="ml-1 hidden md:block">Site Registry</span>
                  <div className={cn(
                    "w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors",
                    isScrolled ? "bg-white/10" : "bg-white/20"
                  )}>
                    <Menu className="w-4 h-4" />
                  </div>
                </button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-full sm:max-w-[550px] p-0 bg-secondary border-none flex flex-col shadow-2xl overflow-hidden font-bold">
                {/* Modern Sheet Header */}
                <div className="bg-white px-6 md:px-10 py-4 flex items-center justify-between shrink-0 rounded-b-[2.5rem] md:rounded-b-[3.5rem] shadow-xl relative z-20">
                  <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                      <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline font-bold text-[10px] md:text-sm leading-none uppercase tracking-tighter text-secondary">Tansania</span>
                      <span className="font-headline font-bold text-[10px] md:text-sm leading-none uppercase tracking-tighter text-primary">Reiseabenteuer</span>
                    </div>
                  </Link>
                  <SheetClose asChild>
                    <button suppressHydrationWarning className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all shadow-lg group">
                      <X className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                    </button>
                  </SheetClose>
                </div>

                <ScrollArea className="flex-grow">
                  <div className="p-8 md:p-16 space-y-12">
                    {/* Primary Links Registry */}
                    <nav className="flex flex-col gap-6 md:gap-8">
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
                          className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-all duration-300"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="h-px bg-white/10 w-full" />

                    {/* Sub-Registries Accordion */}
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      <AccordionItem value="destinations" className="border-none">
                        <AccordionTrigger className="text-xl md:text-2xl font-black uppercase tracking-widest text-primary py-0 hover:no-underline [&>svg]:hidden flex justify-between items-center group">
                          <span>REISEZIELE</span>
                          <ChevronDown className="w-6 h-6 text-white/20 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-all" />
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 pt-6 pb-2">
                          {[
                            { name: 'SAFARI', href: '/safaris' },
                            { name: 'KILIMANDSCHARO', href: '/destinations/kilimanjaro' },
                            { name: 'SANSIBAR', href: '/destinations/zanzibar' },
                          ].map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              className="text-lg md:text-xl font-bold text-white/60 hover:text-white transition-colors pl-6 border-l-2 border-white/5 hover:border-primary"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="services" className="border-none">
                        <AccordionTrigger className="text-xl md:text-2xl font-black uppercase tracking-widest text-primary py-0 hover:no-underline [&>svg]:hidden flex justify-between items-center group">
                          <span>DIENSTLEISTUNGEN</span>
                          <ChevronDown className="w-6 h-6 text-white/20 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-all" />
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 pt-6 pb-2">
                          {[
                            { name: 'REISEVERSICHERUNG', href: '/services/guest-protection' },
                            { name: 'REISE-STORE', href: '/reise-shop' },
                            { name: 'PARTNER PROGRAMM', href: '/partner' },
                          ].map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              className="text-lg md:text-xl font-bold text-white/60 hover:text-white transition-colors pl-6 border-l-2 border-white/5 hover:border-primary"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="reisen2026" className="border-none">
                        <AccordionTrigger className="text-xl md:text-2xl font-black uppercase tracking-widest text-primary py-0 hover:no-underline [&>svg]:hidden flex justify-between items-center group">
                          <span>REISEN 2026</span>
                          <ChevronDown className="w-6 h-6 text-white/20 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-all" />
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 pt-6 pb-2">
                          {[
                            { name: 'GROSSE MIGRATION 2026', href: '/safaris' },
                            { name: 'FAM TRIP 2026', href: '/fam-trip' },
                            { name: 'EXKLUSIV-ITINERARIES', href: '/itinerary-builder' },
                          ].map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              className="text-lg md:text-xl font-bold text-white/60 hover:text-white transition-colors pl-6 border-l-2 border-white/5 hover:border-primary"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </ScrollArea>

                {/* Fixed CTA Registry Footer */}
                <div className="p-6 md:p-10 border-t border-white/5 bg-secondary relative z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                  <Button asChild className="w-full h-14 md:h-20 rounded-2xl bg-primary text-white font-black text-[10px] md:text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform border-none" suppressHydrationWarning>
                    <Link href="/trip-planner">JETZT ANFRAGEN <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <div className="mt-6 flex justify-center items-center gap-4 text-white/20 text-[8px] font-black uppercase tracking-widest">
                    <span>Registry 2026</span>
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span>Berlin • Kairo</span>
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
