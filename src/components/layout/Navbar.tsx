"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight,
  Compass, 
  Sparkles,
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
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
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
          "fixed top-0 w-full z-[100] transition-all duration-700 ease-prestige",
          !isVisible && !isOpen ? "-translate-y-full" : "translate-y-0",
          isScrolled ? "py-3" : "py-6 md:py-8"
        )}
      >
        <nav className="container mx-auto px-4">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-8 h-14 md:h-20",
            isScrolled ? "bg-white/80 backdrop-blur-2xl shadow-2xl border border-white/20" : "bg-transparent"
          )}>
            <Link href="/" className="flex items-center gap-3 group relative z-[110]">
              <img src="/logo/logo1.png" alt="Logo" className="h-8 md:h-12 w-auto rounded-lg shadow-lg" />
              <div className="flex flex-col">
                <span className={cn(
                  "font-headline font-bold text-xs md:text-lg leading-none uppercase tracking-tighter transition-colors",
                  !isScrolled && !isOpen ? "text-white" : "text-secondary"
                )}>
                  Tansania
                </span>
                <span className="text-primary font-headline font-bold text-xs md:text-lg leading-none uppercase tracking-tighter">
                  Reiseabenteuer
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4 relative z-[110]">
              <Link href="/trip-planner" className="hidden lg:block">
                <Button variant="ghost" className={cn(
                  "rounded-full px-6 font-bold text-[10px] uppercase tracking-[0.2em] transition-all",
                  !isScrolled && !isOpen ? "text-white hover:bg-white/10" : "text-secondary hover:bg-muted"
                )}>
                  Anfrage
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "flex items-center gap-3 pl-4 pr-1 h-10 md:h-12 rounded-full transition-all duration-500 border border-transparent group shadow-xl",
                  isOpen 
                    ? "bg-primary text-white" 
                    : isScrolled 
                      ? "bg-secondary text-white" 
                      : "bg-white/10 backdrop-blur-md text-white border-white/10"
                )}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] ml-2 hidden md:block">
                  {isOpen ? "Schliessen" : "Menu"}
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-primary transition-colors">
                  {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[90] bg-secondary flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 h-full flex flex-col pt-32 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <nav className="space-y-4 md:space-y-8">
                    {[
                      { name: 'Safaris', href: '/safaris', icon: Compass, sub: 'Die endlose Weite erleben' },
                      { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', icon: Mountain, sub: 'Das Dach Afrikas besteigen' },
                      { name: 'Sansibar', href: '/destinations/zanzibar', icon: Waves, sub: 'Tropisches Inselparadies' },
                      { name: 'Nationalparks', href: '/national-parks', icon: Globe, sub: 'Unberührte Wildnis' },
                    ].map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.8 }}
                      >
                        <Link 
                          href={link.href}
                          className="group flex items-center gap-6 md:gap-10 hover:translate-x-4 transition-transform duration-700"
                        >
                          <span className="font-headline text-4xl md:text-8xl lg:text-9xl font-bold text-white/10 group-hover:text-primary transition-colors leading-none">
                            0{idx + 1}
                          </span>
                          <div>
                            <h2 className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                              {link.name}
                            </h2>
                            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/30 mt-2">
                              {link.sub}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Afrika Portfolio</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Kenia', 'Botswana', 'Ägypten', 'Südafrika', 'Uganda', 'Ruanda'].map((dest, i) => (
                        <Link 
                          key={dest} 
                          href={`/destinations/${dest.toLowerCase().replace('ä', 'ae')}`}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-white/50 uppercase tracking-widest text-center hover:bg-primary/10 hover:text-white transition-all"
                        >
                          {dest}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Agentur</p>
                      <div className="flex flex-col gap-3">
                        <Link href="/about" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Über uns</Link>
                        <Link href="/services/agency-services" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Expertise</Link>
                        <Link href="/karriere" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Karriere</Link>
                        <Link href="/faq" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">FAQ</Link>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Support</p>
                      <div className="flex flex-col gap-3">
                        <Link href="/services/guest-protection" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Versicherung</Link>
                        <Link href="/partner" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Partner</Link>
                        <Link href="/fam-trip" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Fam-Trip</Link>
                        <Link href="/contact" className="text-sm font-bold text-white/60 hover:text-primary transition-colors uppercase tracking-widest">Kontakt</Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-[2.5rem] p-8 border border-primary/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <Zap className="w-16 h-16 text-primary" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">Live Update</span>
                    <h4 className="font-headline text-2xl font-bold text-white uppercase mb-2">Expeditionen 2026</h4>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed mb-6">
                      Sichern Sie sich exklusive Frühbucher-Vorteile für die kommende Wanderungssaison.
                    </p>
                    <Link href="/safaris" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-white transition-all">
                      Termine prüfen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Berlin HQ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Certified Agency</span>
                  </div>
                </div>
                <Link href="/trip-planner" className="w-full md:w-auto">
                  <Button className="w-full h-16 px-12 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all active:scale-95">
                    JETZT REISE PLANEN <ArrowRight className="w-5 h-5 ml-3" />
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
