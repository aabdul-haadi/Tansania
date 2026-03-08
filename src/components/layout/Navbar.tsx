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
            "flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 h-12 md:h-16",
            isScrolled ? "bg-white/90 backdrop-blur-xl shadow-xl border border-white/20" : "bg-transparent"
          )}>
            <Link href="/" className="flex items-center gap-2 group relative z-[110]">
              <img src="/logo/logo1.png" alt="Logo" className="h-8 md:h-10 w-auto rounded shadow-sm" />
              <div className="flex flex-col">
                <span className={cn(
                  "font-headline font-bold text-[10px] md:text-sm leading-none uppercase tracking-tighter transition-colors",
                  !isScrolled && !isOpen ? "text-white" : "text-secondary"
                )}>
                  Tansania
                </span>
                <span className="text-primary font-headline font-bold text-[10px] md:text-sm leading-none uppercase tracking-tighter">
                  Reiseabenteuer
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-3 relative z-[110]">
              <Link href="/trip-planner" className="hidden sm:block">
                <Button variant="ghost" className={cn(
                  "rounded-full px-4 h-9 font-bold text-[9px] uppercase tracking-widest transition-all",
                  !isScrolled && !isOpen ? "text-white hover:bg-white/10" : "text-secondary hover:bg-muted"
                )}>
                  Anfrage
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "flex items-center gap-2 pl-3 pr-1 h-9 md:h-11 rounded-full transition-all duration-500 border border-transparent group shadow-lg",
                  isOpen 
                    ? "bg-primary text-white" 
                    : isScrolled 
                      ? "bg-secondary text-white" 
                      : "bg-white/10 backdrop-blur-md text-white border-white/10"
                )}
              >
                <span className="text-[9px] font-black uppercase tracking-widest ml-1 hidden md:block">
                  {isOpen ? "Close" : "Menu"}
                </span>
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-primary transition-colors">
                  {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
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
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[90] bg-secondary flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 h-full flex flex-col pt-24 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 flex-grow">
                <div className="lg:col-span-7 flex flex-col justify-center overflow-y-auto no-scrollbar">
                  <nav className="space-y-2 md:space-y-4">
                    {[
                      { name: 'Safaris', href: '/safaris', icon: Compass, sub: 'Explore the infinite plains' },
                      { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', icon: Mountain, sub: 'Climb the roof of Africa' },
                      { name: 'Sansibar', href: '/destinations/zanzibar', icon: Waves, sub: 'Tropical island paradise' },
                      { name: 'Nationalparks', href: '/national-parks', icon: Globe, sub: 'Untouched wilderness' },
                    ].map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.6 }}
                      >
                        <Link 
                          href={link.href}
                          className="group flex items-center gap-4 md:gap-8 hover:translate-x-2 transition-transform duration-500"
                        >
                          <span className="font-headline text-3xl md:text-7xl font-bold text-white/5 group-hover:text-primary transition-colors leading-none">
                            0{idx + 1}
                          </span>
                          <div>
                            <h2 className="font-headline text-2xl md:text-5xl lg:text-6xl font-bold text-white uppercase group-hover:text-primary transition-colors leading-tight">
                              {link.name}
                            </h2>
                            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mt-1">
                              {link.sub}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                  <div className="space-y-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Afrika Portfolio</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {['Kenia', 'Botswana', 'Ägypten', 'Südafrika', 'Uganda', 'Ruanda'].map((dest) => (
                        <Link 
                          key={dest} 
                          href={`/destinations/${dest.toLowerCase().replace('ä', 'ae')}`}
                          className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest text-center hover:bg-primary/10 hover:text-white transition-all"
                        >
                          {dest}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Agency</p>
                      <div className="flex flex-col gap-2">
                        <Link href="/about" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">About us</Link>
                        <Link href="/karriere" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Careers</Link>
                        <Link href="/blog" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Journal</Link>
                        <Link href="/faq" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">FAQ</Link>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Support</p>
                      <div className="flex flex-col gap-2">
                        <Link href="/services/guest-protection" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Insurance</Link>
                        <Link href="/partner" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Partner</Link>
                        <Link href="/fam-trip" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Fam-Trip</Link>
                        <Link href="/contact" className="text-[11px] font-bold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Contact</Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-[2rem] p-6 border border-primary/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Zap className="w-12 h-12 text-primary" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Live Update</span>
                    <h4 className="font-headline text-xl font-bold text-white uppercase mb-1">Expeditions 2026</h4>
                    <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest leading-relaxed mb-4">
                      Early booking advantages for the next migration season are now active.
                    </p>
                    <Link href="/safaris" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all">
                      Check availability <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Berlin HQ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Certified Agency</span>
                  </div>
                </div>
                <Link href="/trip-planner" className="w-full md:w-auto">
                  <Button className="w-full h-12 md:h-14 px-8 rounded-xl bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl transition-all">
                    JETZT REISE PLANEN <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}