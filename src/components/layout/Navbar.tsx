"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  ArrowRight,
  Instagram,
  Facebook,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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

  const primaryLinks = [
    { name: 'Über uns', href: '/about' },
    { name: 'Reisetipps', href: '/blog?category=Tipps' },
    { name: 'Unser Magazin', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Reiseblog', href: '/blog' },
    { name: 'Kontakt', href: '/contact' },
  ];

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
          "flex items-center justify-between transition-all duration-500 px-4 md:px-8 h-14 md:h-16 rounded-full",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md text-secondary shadow-2xl border border-border" 
            : "bg-transparent text-white border border-transparent",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          {/* Logo Registry Hub - Official Icon Asset */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <img 
              src="/iconlogo.jpg" 
              alt="Tansania Reiseabenteuer" 
              className={cn(
                "h-8 md:h-10 w-auto transition-all duration-500 shrink-0",
                !isScrolled && "brightness-110"
              )} 
            />
            <div className="hidden sm:flex items-baseline gap-1 md:gap-1.5">
              <span className="font-headline font-black uppercase tracking-tighter whitespace-nowrap text-sm sm:text-lg md:text-2xl">
                Tansania
              </span>
              <span className={cn(
                "font-headline font-black uppercase tracking-tighter whitespace-nowrap text-sm sm:text-lg md:text-2xl transition-colors duration-500",
                isScrolled ? "text-primary" : "text-white"
              )}>
                Reiseabenteuer
              </span>
            </div>
          </Link>

          {/* Simple Creative Hamburger Trigger */}
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
            
            <SheetContent side="right" className="w-full sm:max-w-[450px] p-0 bg-white text-secondary border-none flex flex-col shadow-2xl font-bold">
              {/* Header inside menu - BRAND NAME REPLACED SDL OFFICIAL */}
              <div className="px-8 py-10 flex items-center border-b border-border/50 shrink-0">
                <Link href="/" className="flex items-center gap-3">
                  <img src="/iconlogo.jpg" alt="SDL" className="h-10 w-auto" />
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline font-black uppercase tracking-tighter text-lg">Tansania</span>
                    <span className="font-headline font-black uppercase tracking-tighter text-lg text-primary">Reiseabenteuer</span>
                  </div>
                </Link>
              </div>

              <ScrollArea className="flex-grow">
                <div className="px-10 py-12 flex flex-col gap-12">
                  <nav className="flex flex-col gap-8">
                    {primaryLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="text-3xl md:text-4xl font-headline font-black uppercase tracking-tighter hover:text-primary transition-colors leading-none"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="w-full h-px bg-border/50" />

                  <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 flex items-center gap-2">
                        <Globe className="w-3" /> Core Portfolio
                      </p>
                      <div className="flex flex-col gap-5">
                        {[
                          { name: 'Safari Catalog', href: '/safaris' },
                          { name: 'Egypt Specialist', href: '/destinations/egypt' },
                          { name: 'Tanzania Master', href: '/destinations/tanzania' },
                          { name: 'Zanzibar Paradise', href: '/destinations/zanzibar' }
                        ].map((p) => (
                          <Link 
                            key={p.name} 
                            href={p.href} 
                            className="text-sm font-black text-secondary/70 hover:text-primary uppercase tracking-widest transition-colors"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-10 border-t border-border bg-[#fdfcfb] flex flex-col gap-10 items-center shrink-0">
                <div className="flex gap-8">
                  <a href="#" className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                    <Facebook className="w-5 h-5 text-secondary group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                    <Instagram className="w-5 h-5 text-secondary group-hover:text-white" />
                  </a>
                </div>
                
                <Button asChild className="w-full h-16 rounded-2xl bg-secondary text-white font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-primary transition-all border-none">
                  <Link href="/trip-planner" className="flex items-center justify-center gap-3">
                    JETZT ANFRAGEN <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                
                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
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
