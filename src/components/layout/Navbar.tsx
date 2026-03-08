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
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
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

  const mainLinks = [
    { name: 'Safari', href: '/safaris', icon: Compass },
    { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', icon: Mountain },
    { name: 'Sansibar', href: '/destinations/zanzibar', icon: Waves },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 w-full z-[100] transition-all duration-500 ease-prestige",
          !isVisible && !isOpen ? "-translate-y-full" : "translate-y-0",
          isScrolled ? "py-2" : "py-4 md:py-6"
        )}
      >
        <nav className="container mx-auto px-4">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 h-12 md:h-14",
            isScrolled || isOpen ? "bg-secondary text-white shadow-2xl border border-white/5" : "bg-white/10 backdrop-blur-md text-white border-white/10"
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

            {/* Desktop Center Ribbon - "Something Diff" */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
              {mainLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button variant="ghost" className="h-8 rounded-full px-4 text-[9px] font-black uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-all">
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 relative z-[110]">
              <Link href="/trip-planner" className="hidden sm:block">
                <Button className="rounded-full px-5 h-8 font-black text-[9px] uppercase tracking-widest bg-primary text-white border-none shadow-lg">
                  Anfrage
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "flex items-center gap-2 pl-3 pr-1 h-8 md:h-10 rounded-full transition-all duration-500 border border-transparent group",
                  isOpen 
                    ? "bg-primary text-white" 
                    : "bg-white/10 text-white border-white/10"
                )}
              >
                <span className="text-[8px] font-black uppercase tracking-[0.2em] ml-1 hidden md:block">
                  {isOpen ? "Close" : "Menu"}
                </span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-primary transition-colors">
                  {isOpen ? <X className="w-3 h-3" /> : <Menu className="w-3 h-3" />}
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-secondary flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 h-full flex flex-col pt-24 pb-8 overflow-y-auto no-scrollbar">
              {/* Desktop Grid Layout - "Diff View" */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                
                {/* Column 1: Core Expeditions */}
                <div className="space-y-8">
                  <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">01. Expeditions</p>
                  <nav className="flex flex-col gap-4">
                    {[
                      { name: 'Safari', href: '/safaris', sub: 'Infinite Plains' },
                      { name: 'Mountain', href: '/destinations/kilimanjaro', sub: 'Uhuru Peak' },
                      { name: 'Island', href: '/destinations/zanzibar', sub: 'Swahili Coast' },
                      { name: 'Wilderness', href: '/national-parks', sub: 'Untouched Parks' },
                    ].map((link) => (
                      <Link key={link.name} href={link.href} className="group">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors uppercase leading-none">{link.name}</h2>
                        <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mt-1">{link.sub}</p>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Column 2: Destinations Grid */}
                <div className="space-y-8">
                  <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">02. Regions</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Kenia', 'Botswana', 'Ägypten', 'Südafrika', 'Uganda', 'Ruanda', 'Namibia', 'Äthiopien'].map((dest) => (
                      <Link 
                        key={dest} 
                        href={`/destinations/${dest.toLowerCase().replace('ä', 'ae')}`}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest hover:bg-primary/10 hover:text-white transition-all text-center"
                      >
                        {dest}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Themed & Services */}
                <div className="space-y-8">
                  <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">03. Curated</p>
                  <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <p className="text-[8px] font-black uppercase text-white/20 tracking-widest">Collections</p>
                      {['Flitterwochen', 'Familienreisen', 'Luxusreisen'].map(t => (
                        <Link key={t} href="/safaris" className="block text-xs font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">{t}</Link>
                      ))}
                    </div>
                    <div className="space-y-2 pt-4">
                      <p className="text-[8px] font-black uppercase text-white/20 tracking-widest">Agency</p>
                      {['Über uns', 'Karriere', 'Partner', 'Versicherung'].map(s => (
                        <Link key={s} href="/about" className="block text-xs font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">{s}</Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 4: Status & Pulse */}
                <div className="space-y-8">
                  <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">04. Pulse</p>
                  <div className="space-y-4">
                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 relative overflow-hidden group">
                      <Zap className="absolute -top-2 -right-2 w-12 h-12 text-primary opacity-10 group-hover:scale-110 transition-transform" />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Booking Status</span>
                      <h4 className="font-headline text-xl font-bold text-white uppercase mb-1">Expeditions 2026</h4>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest leading-relaxed mb-4">Early bird advantages for the Great Migration season are now live.</p>
                      <Link href="/safaris" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary hover:text-white transition-all">Check Availability <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Serengeti</p>
                        <p className="text-xl font-bold text-white leading-none mt-1">28°C</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Sansibar</p>
                        <p className="text-xl font-bold text-white leading-none mt-1">31°C</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Footer Section */}
              <div className="mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Berlin HQ Hub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20">DRSF Certified</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <Link href="/faq" className="text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors px-4">Support Hub</Link>
                  <Link href="/trip-planner" className="flex-grow md:flex-grow-0">
                    <Button className="w-full md:w-auto h-12 md:h-14 px-10 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.02]">
                      JETZT REISE PLANEN <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
