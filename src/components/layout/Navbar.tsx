"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  ChevronDown,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"/>
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if page has been scrolled for visual transitions
      setIsScrolled(currentScrollY > 50);
      
      // Intelligent Mobile Sticky Handling: Hide on scroll down, show on scroll up
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

  const primaryLinks = [
    { name: 'Über uns', href: '/about' },
    { name: 'Reisetipps', href: '/blog?category=Tipps' },
    { name: 'Unser Magazin', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Reiseblog', href: '/blog' },
    { name: 'Kontakt', href: '/contact' },
  ];

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

  return (
    <header 
      className={cn(
        "top-0 w-full z-[100] transition-all duration-500",
        "fixed md:absolute",
        (!isVisible && !isOpen) ? "-translate-y-full md:translate-y-0" : "translate-y-0",
        isScrolled ? "py-3" : "py-6 md:py-8"
      )}
    >
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 px-4 md:px-8 h-14 md:h-16 rounded-full",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md text-secondary shadow-2xl border border-border" 
            : "bg-transparent text-white border border-transparent",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          {/* Brand Logo - Official Registry Protocol */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <img 
              src="/iconlogo.jpg" 
              alt="Tansania Reiseabenteuer" 
              className={cn(
                "h-8 md:h-12 w-auto transition-all duration-500 shrink-0",
                !isScrolled && "brightness-110"
              )} 
            />
            {/* Brand Name Text: Visible on phone, but hidden below 330px width */}
            <div className="hidden min-[330px]:flex items-baseline gap-1.5 md:gap-2">
              <span className="font-headline font-black tracking-[0.15em] whitespace-nowrap text-sm sm:text-base md:text-2xl lg:text-3xl uppercase">
                Tansania
              </span>
              <span className={cn(
                "font-headline font-black tracking-[0.15em] whitespace-nowrap text-sm sm:text-base md:text-2xl lg:text-3xl transition-colors duration-500 uppercase",
                isScrolled ? "text-primary" : "text-white"
              )}>
                Reiseabenteuer
              </span>
            </div>
          </Link>

          {/* Minimalist Hamburger Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "flex items-center justify-center w-10 h-10 md:w-auto md:h-11 md:px-4 rounded-full transition-all duration-500 border shrink-0 group",
                  isScrolled 
                    ? "bg-secondary text-white border-secondary shadow-lg" 
                    : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-secondary"
                )}
              >
                <Menu className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[85vw] sm:max-w-[400px] p-0 bg-white text-secondary border-none flex flex-col shadow-2xl">
              {/* Menu Header Registry */}
              <div className="px-6 py-6 md:py-8 flex items-center border-b border-border/50 shrink-0">
                <Link href="/" className="flex items-center gap-3">
                  <img src="/iconlogo.jpg" alt="SDL" className="h-10 w-auto" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline font-black tracking-[0.15em] text-lg md:text-2xl uppercase">Tansania</span>
                    <span className="font-headline font-black tracking-[0.15em] text-lg md:text-2xl text-primary uppercase">Reiseabenteuer</span>
                  </div>
                </Link>
              </div>

              <ScrollArea className="flex-grow">
                <div className="px-8 py-6 md:py-10 flex flex-col gap-8 md:gap-10">
                  <nav className="flex flex-col gap-5 md:gap-6">
                    {/* Destinations Dropdown Protocol */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="destinations" className="border-none">
                        <AccordionTrigger className="text-lg md:text-xl font-headline font-black tracking-wide hover:text-primary transition-colors leading-none py-0 hover:no-underline [&>svg]:hidden">
                          <div className="flex items-center justify-between w-full">
                            <span>REISEZIELE</span>
                            <ChevronDown className="w-4 h-4 text-primary" />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 pb-2 pl-4">
                          <div className="flex flex-col gap-3 border-l-2 border-primary/20 pl-4">
                            {countries.map((country) => (
                              <Link 
                                key={country.name} 
                                href={country.href}
                                className="text-xs md:text-sm font-bold text-secondary/60 hover:text-primary tracking-widest transition-colors"
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
                        className="text-lg md:text-xl font-headline font-black tracking-wide hover:text-primary transition-colors leading-none"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="w-full h-px bg-border/50" />

                  <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                      <p className="text-[9px] font-bold tracking-[0.4em] text-primary/60 flex items-center gap-2">
                        <Globe className="w-3" /> Explore Catalog
                      </p>
                      <Link 
                        href="/safaris" 
                        className="text-[11px] font-black text-secondary/70 hover:text-primary tracking-widest transition-colors"
                      >
                        Safari-Kollektion
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Menu Footer Status */}
              <div className="p-8 border-t border-border bg-[#fdfcfb] flex flex-col gap-6 md:gap-8 items-center shrink-0">
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Youtube, href: "#" },
                    { icon: TikTokIcon, href: "#" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                      <social.icon className="w-4 h-4 text-secondary group-hover:text-white" />
                    </a>
                  ))}
                </div>
                
                <Button asChild className="w-full h-14 rounded-2xl bg-secondary text-white font-black text-[10px] tracking-[0.2em] shadow-xl hover:bg-primary transition-all border-none">
                  <Link href="/trip-planner" className="flex items-center justify-center gap-3">
                    JETZT ANFRAGEN <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                
                <p className="text-[7px] font-black tracking-[0.4em] text-muted-foreground/40">
                  Registry 2026 • Established 2014
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}