
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  { name: 'Neujahrsreisen 2026', href: '/safaris?season=new-year' },
  { name: 'Sommerreisen 2026', href: '/safaris?season=summer' },
  { name: 'Weihnachten 2026', href: '/safaris?season=christmas' },
  { name: 'Ostern 2026', href: '/safaris?season=easter' },
];

const services = [
  { name: 'Unsere Services', href: '/services/agency-services' },
  { name: 'Unterkünfte', href: '/services/accommodation' },
  { name: 'Aktivitäten', href: '/services/activities' },
];

const secondaryLinks = [
  { name: 'Über uns', href: '/about' },
  { name: 'Reisetipps', href: '/blog' },
  { name: 'Unser Magazin', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Reiseblog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
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
            src="https://storage.googleapis.com/firejet-30da1.appspot.com/users/clvlyszhf0000la086mjha62f/projects/clvlyszhf0000la086mjha62f/1740484124411-logo.png"
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
          <Link href="/trip-planner" className="hidden sm:block">
            <Button className="rounded-full px-8 h-11 text-[10px] tracking-[0.2em] font-bold">
              JETZT ANFRAGEN
            </Button>
          </Link>

          {/* Universal Hamburger Trigger */}
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Menü</span>
                  <SheetClose className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Navigation Content */}
                <div className="p-8 space-y-10">
                  {/* Primary Accordion Navigation */}
                  <Accordion type="multiple" className="w-full space-y-4">
                    <AccordionItem value="reiseziele" className="border-white/5">
                      <AccordionTrigger className="text-2xl font-headline font-bold hover:no-underline hover:text-primary py-4">
                        REISEZIELE
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-3 pl-4 pt-2">
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Top Reiseziele</p>
                          {reiseziele.map((item) => (
                            <Link key={item.name} href={item.href} className="text-lg text-white/60 hover:text-white transition-colors py-1 block">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="reisen2026" className="border-white/5">
                      <AccordionTrigger className="text-2xl font-headline font-bold hover:no-underline hover:text-primary py-4">
                        REISEN 2026
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-3 pl-4 pt-2">
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Saisonale Reisen</p>
                          {reisen2026.map((item) => (
                            <Link key={item.name} href={item.href} className="text-lg text-white/60 hover:text-white transition-colors py-1 block">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="services" className="border-white/5">
                      <AccordionTrigger className="text-2xl font-headline font-bold hover:no-underline hover:text-primary py-4">
                        DIENSTLEISTUNGEN
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-3 pl-4 pt-2">
                          {services.map((item) => (
                            <Link key={item.name} href={item.href} className="text-lg text-white/60 hover:text-white transition-colors py-1 block">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Secondary Static Links */}
                  <div className="grid grid-cols-1 gap-6 pt-10 border-t border-white/5">
                    {secondaryLinks.map((item) => (
                      <Link key={item.name} href={item.href} className="text-xl font-bold text-white/60 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    ))}
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
