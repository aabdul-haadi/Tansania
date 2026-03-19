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
  Mountain,
  Waves,
  ShieldCheck,
  ChevronRight,
  Globe,
  MessageSquare,
  Tag,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

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
              
              <SheetContent side="right" className="w-full sm:max-w-[500px] p-0 bg-secondary border-none flex flex-col shadow-2xl overflow-hidden font-bold">
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
                  <div className="p-6 md:p-10 space-y-12">
                    <div className="space-y-4">
                      <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">01. Master Expeditions</p>
                      <nav className="grid grid-cols-1 gap-3">
                        {[
                          { name: 'Safari Catalog', href: '/safaris', icon: Compass, desc: 'Wildlife Master Hub' },
                          { name: 'National Parks', href: '/national-parks', icon: Globe, desc: 'Biodiversity Registry' },
                          { name: 'Expedition Journal', href: '/blog', icon: Activity, desc: 'Latest Reports & Stories' },
                        ].map((link) => (
                          <Link key={link.name} href={link.href} className="group flex items-center justify-between p-5 rounded-[1.5rem] bg-white/5 border border-transparent hover:border-primary/20 hover:bg-white/10 transition-all duration-500 shadow-sm hover:shadow-lg">
                            <div className="flex items-center gap-5">
                              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors border border-white/5 shadow-sm">
                                <link.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-headline text-lg font-bold text-white uppercase leading-none">{link.name}</h3>
                                <p className="text-[8px] font-black text-white/40 uppercase tracking-widest mt-1.5">{link.desc}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </nav>
                    </div>

                    <div className="space-y-4">
                      <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">02. Regional Portfolio (8 Countries)</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Ägypten', 'Tansania', 'Kenia', 'Botswana', 'Südafrika', 'Namibia', 'Uganda', 'Ruanda'].map((dest) => (
                          <Link 
                            key={dest} 
                            href={`/destinations/${dest === 'Ägypten' ? 'egypt' : dest.toLowerCase()}`}
                            className="px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-white/60 uppercase tracking-widest hover:border-primary hover:text-white transition-all text-center shadow-sm"
                          >
                            {dest}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">03. Themed Collection</p>
                        <nav className="flex flex-col gap-3">
                          {['Flitterwochen', 'Familien-Safari', 'Luxus-Expedition', 'Camping Abenteuer', 'Migration Specialist'].map(t => (
                            <Link key={t} href="/safaris" className="text-[10px] font-black text-white/60 hover:text-primary transition-colors uppercase tracking-widest border-l-2 border-white/5 pl-3 hover:border-primary">
                              {t}
                            </Link>
                          ))}
                        </nav>
                      </div>
                      <div className="space-y-4">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">04. Offer Documents</p>
                        <nav className="flex flex-col gap-3">
                          {['Last Minute 2026', 'Early Bird 2027', 'Special Itineraries', 'Group Deals'].map(s => (
                            <Link key={s} href="/offers" className="text-[10px] font-black text-white/60 hover:text-primary transition-colors uppercase tracking-widest border-l-2 border-white/5 pl-3 hover:border-primary">
                              {s}
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 relative overflow-hidden group shadow-2xl">
                      <Zap className="absolute -top-4 -right-4 w-20 h-20 text-primary opacity-10" />
                      <div className="relative z-10 text-white">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">Bespoke Planning</span>
                        <h4 className="font-headline text-2xl font-bold uppercase mb-2 tracking-tighter">AI Expedition Planner</h4>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed mb-6">Create your own 15-day luxury itinerary in real-time with our smart engine.</p>
                        <Button asChild size="sm" className="w-full rounded-xl bg-primary text-white font-black text-[9px] uppercase tracking-widest h-11 border-none shadow-xl" suppressHydrationWarning>
                          <Link href="/itinerary-builder">Start Building Now <Sparkles className="w-3.5 h-3.5 ml-2" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                <div className="p-6 md:p-8 border-t border-white/5 bg-secondary relative z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                  <Button asChild className="w-full h-14 md:h-16 rounded-2xl bg-primary text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform border-none" suppressHydrationWarning>
                    <Link href="/trip-planner">JETZT REISE PLANEN <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-white/40">DRSF Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Registry Sync Online</span>
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
