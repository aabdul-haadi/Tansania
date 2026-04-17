"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  ArrowRight,
  ChevronDown,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const countries = [
    { name: 'Tansania', href: '/destinations/tanzania' },
    { name: 'Sansibar', href: '/destinations/zanzibar' },
    { name: 'Kenia', href: '/destinations/kenya' },
    { name: 'Ägypten', href: '/destinations/egypt' },
    { name: 'Südafrika', href: '/destinations/south-africa' },
    { name: 'Namibia', href: '/destinations/namibia' },
    { name: 'Botswana', href: '/destinations/botswana' },
    { name: 'Uganda', href: '/destinations/uganda' },
  ];

  const seasonalReisen = [
    { name: 'Neujahrsreisen 2026/27', href: '/neujahrsreisen-tansania-2026' },
    { name: 'Sommerreisen 2026', href: '/sommerreisen-abenteuer-und-erholung-2026' },
    { name: 'Weihnachten 2026/27', href: '/weihnachten-reisen-tansania-2026' },
    { name: 'Ostern 2026', href: '/ostern-safari-urlaub-2026' },
  ];

  const primaryLinks = [
    { name: 'Über uns', href: '/about' },
    { name: 'Reisetipps', href: '/blog?category=Tipps' },
    { name: 'Unser Magazin', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 w-full z-[100] bg-transparent py-6 md:py-8">
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 h-14 md:h-16 w-full",
          "text-white",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <img 
              src="/iconlogo.jpg" 
              alt="Tansania Reiseabenteuer" 
              className="h-8 md:h-12 w-auto brightness-110 shrink-0" 
            />
            <div className="hidden min-[340px]:flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2">
              <span className="font-headline font-semibold whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight normal-case">
                Tansania Reiseabenteuer
              </span>
            </div>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 md:w-auto md:h-11 md:px-4 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-secondary transition-all shrink-0 group">
                <Menu className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[85vw] sm:max-w-[400px] p-0 bg-white text-secondary border-none flex flex-col shadow-2xl">
              <div className="sr-only">
                <SheetTitle>Menü</SheetTitle>
                <SheetDescription>Hauptnavigation der Tansania Reiseabenteuer Website</SheetDescription>
              </div>

              <div className="px-6 py-6 flex items-center border-b border-border/50 shrink-0">
                <Link href="/" className="flex items-center gap-3">
                  <img src="/iconlogo.jpg" alt="SDL" className="h-8 md:h-10 w-auto" />
                  <div className="flex flex-col text-left">
                    <span className="font-headline font-black text-sm md:text-xl tracking-normal leading-[1.1] uppercase">Tansania</span>
                    <span className="font-headline font-black text-sm md:text-xl text-primary tracking-normal leading-[1.1] uppercase">Reiseabenteuer</span>
                  </div>
                </Link>
              </div>

              <ScrollArea className="flex-grow">
                <div className="px-8 py-6 md:py-10 flex flex-col gap-8 md:gap-10">
                  <nav className="flex flex-col gap-5 md:gap-6 text-left">
                    <div className="flex flex-col gap-4 mb-4">
                      <Link href="/reiseangebote" className="text-xl md:text-2xl font-headline font-black text-secondary hover:text-primary transition-colors leading-none">
                        Reiseangebote
                      </Link>
                      <Link href="/destinations/kilimanjaro" className="text-xl md:text-2xl font-headline font-black text-secondary hover:text-primary transition-colors leading-none">
                        Kilimandscharo
                      </Link>
                      <Link href="/destinations/zanzibar" className="text-xl md:text-2xl font-headline font-black text-secondary hover:text-primary transition-colors leading-none">
                        Sansibar
                      </Link>
                    </div>

                    <div className="w-full h-px bg-border/50" />

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="reisen2026" className="border-none mb-4">
                        <AccordionTrigger className="text-lg md:text-xl font-headline font-black tracking-normal hover:text-primary transition-colors leading-none py-0 hover:no-underline [&>svg]:hidden justify-start gap-4">
                          <span>Reisen 2026/27</span>
                          <ChevronDown className="w-4 h-4 text-primary" />
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-2 pl-4">
                          <div className="flex flex-col gap-3 border-l-2 border-primary/20 pl-4 text-left">
                            {seasonalReisen.map((link) => (
                              <Link 
                                key={link.name} 
                                href={link.href}
                                className="text-xs md:text-sm font-bold text-secondary/60 hover:text-primary tracking-normal transition-colors"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="destinations" className="border-none">
                        <AccordionTrigger className="text-lg md:text-xl font-headline font-black tracking-normal hover:text-primary transition-colors leading-none py-0 hover:no-underline [&>svg]:hidden justify-start gap-4">
                          <span>Alle Reiseziele</span>
                          <ChevronDown className="w-4 h-4 text-primary" />
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-2 pl-4">
                          <div className="flex flex-col gap-3 border-l-2 border-primary/20 pl-4 text-left">
                            {countries.map((country) => (
                              <Link 
                                key={country.name} 
                                href={country.href}
                                className="text-xs md:text-sm font-bold text-secondary/60 hover:text-primary tracking-normal transition-colors"
                              >
                                {country.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {primaryLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="text-lg md:text-xl font-headline font-black tracking-normal hover:text-primary transition-colors leading-none text-left"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="w-full h-px bg-border/50" />

                  <div className="flex flex-col gap-6 text-left">
                    <div className="space-y-4">
                      <p className="text-[9px] font-bold tracking-widest text-primary/60 flex items-center gap-2">
                        <Globe className="w-3" /> Explore Catalog
                      </p>
                      <Link 
                        href="/reiseangebote" 
                        className="text-[11px] font-black text-secondary/70 hover:text-primary tracking-normal transition-colors"
                      >
                        Alle Reiseangebote ansehen
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-8 border-t border-border bg-[#fdfcfb] flex flex-col gap-6 md:gap-8 items-center shrink-0">
                <Button asChild className="w-full h-14 rounded-2xl bg-secondary text-white font-black text-[10px] tracking-widest shadow-xl hover:bg-primary transition-all border-none">
                  <Link href="/reiseangebote" className="flex items-center justify-center gap-3">
                    Angebote ansehen <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                
                <p className="text-[7px] font-black tracking-widest text-muted-foreground/40">
                  Established 2014 • Registry 2026/27
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
