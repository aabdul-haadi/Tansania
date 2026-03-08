"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight,
  Compass, 
  Zap,
  Globe,
  MapPin,
  Mountain,
  Waves,
  ShieldCheck,
  Plane,
  Heart,
  Calendar,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

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
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 ease-prestige",
        !isVisible && !isOpen ? "-translate-y-full" : "translate-y-0",
        isScrolled ? "py-2" : "py-4 md:py-6"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 h-12 md:h-14 bg-white text-secondary shadow-xl border border-border"
        )}>
          <Link href="/" className="flex items-center gap-2 group relative z-[110]">
            <img src="/logo/logo1.png" alt="Logo" className="h-7 md:h-9 w-auto rounded shadow-sm" />
            <div className="flex flex-col">
              <span className="font-headline font-bold text-[9px] md:text-xs leading-none uppercase tracking-tighter">
                Tansania
              </span>
              <span className="text-primary font-headline font-bold text-[9px] md:text-xs leading-none uppercase tracking-tighter">
                Reiseabenteuer
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 relative z-[110]">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-2 pl-3 pr-1.5 h-8 md:h-10 rounded-full transition-all duration-500 border border-border group bg-muted/50 hover:bg-primary hover:text-white hover:border-primary",
                    isOpen && "bg-primary text-white border-primary"
                  )}
                >
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] ml-1 hidden md:block">
                    {isOpen ? "Schließen" : "Menü"}
                  </span>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                    {isOpen ? <X className="w-3 h-3" /> : <Menu className="w-3 h-3" />}
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] md:w-[450px] p-0 bg-white border-l border-border flex flex-col">
                <div className="p-6 md:p-8 border-b border-border flex items-center justify-between shrink-0 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Compass className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-secondary uppercase leading-none">Register</h4>
                      <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mt-1">Expeditions-Kommando</p>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-grow">
                  <div className="p-6 md:p-8 space-y-10">
                    <div className="space-y-4">
                      <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">01. Expeditionen</p>
                      <nav className="flex flex-col gap-2">
                        {[
                          { name: 'Safari', href: '/safaris', icon: Compass, sub: 'Endlose Weiten' },
                          { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', icon: Mountain, sub: 'Uhuru Peak' },
                          { name: 'Sansibar', href: '/destinations/zanzibar', icon: Waves, sub: 'Swahili Küste' },
                          { name: 'Nationalparks', href: '/national-parks', icon: Globe, sub: 'Unberührte Parks' },
                        ].map((link) => (
                          <Link key={link.name} href={link.href} className="group flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-transparent hover:border-primary/20 hover:bg-white transition-all shadow-sm">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:bg-primary transition-colors border border-border">
                                <link.icon className="w-5 h-5 text-secondary group-hover:text-white" />
                              </div>
                              <div>
                                <h3 className="font-headline text-xl font-bold text-secondary uppercase leading-none">{link.name}</h3>
                                <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mt-1">{link.sub}</p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </Link>
                        ))}
                      </nav>
                    </div>

                    <div className="space-y-4">
                      <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">02. Top Reiseziele</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['Kenia', 'Botswana', 'Ägypten', 'Südafrika', 'Uganda', 'Ruanda', 'Namibia', 'Äthiopien'].map((dest) => (
                          <Link 
                            key={dest} 
                            href={`/destinations/${dest.toLowerCase().replace('ä', 'ae')}`}
                            className="px-4 py-3 rounded-xl bg-muted/30 border border-border text-[9px] font-bold text-secondary uppercase tracking-widest hover:bg-primary hover:text-white transition-all text-center"
                          >
                            {dest}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">03. Themen</p>
                        <nav className="flex flex-col gap-3">
                          {['Flitterwochen', 'Familienreisen', 'Luxusreisen', 'Safari & Sansibar'].map(t => (
                            <Link key={t} href="/safaris" className="text-[10px] font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest">{t}</Link>
                          ))}
                        </nav>
                      </div>
                      <div className="space-y-4">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">04. Agentur</p>
                        <nav className="flex flex-col gap-3">
                          {['Über uns', 'FAQ', 'Blog', 'Kontakt'].map(s => (
                            <Link key={s} href={s === 'Über uns' ? '/about' : `/${s.toLowerCase().replace('ü', 'ue')}`} className="text-[10px] font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest">{s}</Link>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-6 border border-border relative overflow-hidden group">
                      <Zap className="absolute -top-2 -right-2 w-12 h-12 text-primary opacity-10" />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Buchungs-Impuls</span>
                      <h4 className="font-headline text-lg font-bold text-secondary uppercase mb-1">Reisen 2026</h4>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                        Frühbucher-Vorteile für die Great Migration Saison sind jetzt aktiv.
                      </p>
                    </div>
                  </div>
                </ScrollArea>

                <div className="p-6 md:p-8 border-t border-border bg-white relative z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                  <Link href="/trip-planner" className="block">
                    <Button className="w-full h-14 md:h-16 rounded-2xl bg-primary text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-transform">
                      JETZT REISE PLANEN <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">DRSF Zertifiziert</span>
                    </div>
                    <Link href="/auth/login" className="text-[8px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Staff Login</Link>
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
