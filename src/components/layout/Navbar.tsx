
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight,
  Compass, 
  Instagram,
  Facebook
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
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
          "flex items-center justify-between transition-all duration-500 px-6 md:px-8 h-14 md:h-16 rounded-full",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md text-secondary shadow-2xl border border-border" 
            : "bg-transparent text-white border border-transparent",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          {/* Logo Registry Hub */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm shrink-0",
              isScrolled ? "bg-primary" : "bg-white/10 backdrop-blur-md border border-white/20"
            )}>
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={cn(
                "font-headline font-black uppercase tracking-tighter whitespace-nowrap transition-all duration-500",
                "text-base sm:text-lg md:text-2xl"
              )}>
                Tansania
              </span>
              <span className={cn(
                "font-headline font-black uppercase tracking-tighter whitespace-nowrap transition-all duration-500",
                "hidden sm:inline-block",
                "text-base sm:text-lg md:text-2xl",
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
                <span>Registry</span>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Menu className="w-4 h-4" />
                </div>
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:max-w-[450px] p-0 bg-black/95 text-white border-none flex flex-col shadow-2xl font-bold">
              <div className="px-8 py-8 flex items-center justify-between shrink-0">
                <Link href="/" className="flex items-center gap-2">
                  <Compass className="w-6 h-6 text-primary" />
                  <span className="font-black text-[10px] uppercase tracking-[0.4em] text-white">SDL Official</span>
                </Link>
                <SheetClose asChild>
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>
              </div>

              <ScrollArea className="flex-grow">
                <div className="px-10 py-6 flex flex-col gap-10">
                  <nav className="flex flex-col gap-6">
                    {primaryLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors leading-none"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="w-full h-px bg-white/10" />

                  <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Portfolio</p>
                      <div className="flex flex-col gap-3">
                        <Link href="/safaris" className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-widest">Safari Catalog</Link>
                        <Link href="/destinations/egypt" className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-widest">Egypt Specialist</Link>
                        <Link href="/destinations/tanzania" className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-widest">Tanzania Master</Link>
                        <Link href="/destinations/zanzibar" className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-widest">Sansibar Paradise</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-10 border-t border-white/5 bg-black/50 backdrop-blur-md flex flex-col gap-10 items-center shrink-0">
                <div className="flex gap-8">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
                
                <Button asChild className="w-full h-16 rounded-xl bg-primary text-white font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform border-none">
                  <Link href="/trip-planner">JETZT ANFRAGEN <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                
                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">
                  Berlin • SDL Official Registry 2026
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
