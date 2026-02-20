
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronRight, Phone, Mail, Instagram, Facebook, X, Compass, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const destinations = [
  { name: 'Safari Expeditionen', href: '/safaris', desc: 'Serengeti & Ngorongoro' },
  { name: 'Kilimandscharo', href: '/destinations/kilimanjaro', desc: 'Das Dach Afrikas' },
  { name: 'Sansibar Archipel', href: '/destinations/zanzibar', desc: 'Tropisches Paradies' },
];

const secondaryLinks = [
  { name: 'Über uns', href: '/about' },
  { name: 'Unser Magazin', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/contact' },
];

const serviceLinks = [
  { name: 'Agenturleistungen', href: '/services/agency-services' },
  { name: 'Abenteuer-App', href: '/services/adventure-app' },
  { name: 'Reiseschutz', href: '/services/guest-protection' },
  { name: 'Visum & Reisepass', href: '/services/passport-visa' },
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
        'fixed top-0 w-full z-50 transition-all duration-700 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 transition-transform duration-500 hover:scale-105 active:scale-95">
          <Image 
            src="https://storage.googleapis.com/firejet-30da1.appspot.com/users/clvlyszhf0000la086mjha62f/projects/clvlyszhf0000la086mjha62f/1740484124411-logo.png"
            alt="Tansania Reiseabenteuer"
            width={240}
            height={65}
            className={cn(
              "h-10 md:h-12 w-auto object-contain transition-all duration-700",
              !isScrolled && "brightness-0 invert" 
            )}
            priority
          />
        </Link>

        {/* Action Bar */}
        <div className="flex items-center gap-4">
          <Link href="/trip-planner" className="hidden sm:block">
            <Button 
              className="rounded-full px-8 font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xl h-11"
            >
              JETZT ANFRAGEN
            </Button>
          </Link>

          {/* Creative Hamburger Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "group relative flex items-center gap-3 p-1.5 pl-5 rounded-full transition-all duration-500 border overflow-hidden",
                  isScrolled 
                    ? "bg-background border-border text-foreground hover:border-primary/50" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] hidden md:block relative z-10 transition-colors group-hover:text-primary">
                  Entdecken
                </span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl group-hover:rotate-90 transition-transform duration-500 relative z-10">
                  <Menu className="w-5 h-5" />
                </div>
                {/* Hover Background Pulse */}
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-none bg-[#0a0a0a] text-white overflow-hidden">
              <div className="relative h-full flex flex-col">
                
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                  <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
                  <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-white/10 blur-[80px] rounded-full" />
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Header */}
                <div className="relative z-10 p-8 flex justify-between items-center border-b border-white/5 bg-black/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-primary animate-pulse" />
                    <span className="font-headline text-xl font-bold tracking-tight text-white">Menü</span>
                  </div>
                  <SheetClose className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                  </SheetClose>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex-grow overflow-y-auto custom-scrollbar p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Primary Navigation Column */}
                    <div className="space-y-12">
                      <section>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                          <Globe className="w-3 h-3" /> Reiseziele
                        </p>
                        <div className="grid grid-cols-1 gap-6">
                          {destinations.map((item, i) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Link 
                                href={item.href}
                                className="group block"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-2xl md:text-3xl font-headline font-bold hover:text-primary transition-colors duration-300">
                                    {item.name}
                                  </span>
                                  <ChevronRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                                </div>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                                  {item.desc}
                                </p>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </section>

                      <section className="pt-4">
                        <div className="grid grid-cols-1 gap-4">
                          {secondaryLinks.map((item, i) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (destinations.length + i) * 0.1 }}
                            >
                              <Link 
                                href={item.href}
                                className="text-lg md:text-xl font-bold text-white/70 hover:text-white hover:translate-x-2 transition-all inline-block"
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </section>
                    </div>

                    {/* Secondary/Services Column */}
                    <div className="space-y-12">
                      <section>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                          <Sparkles className="w-3 h-3" /> Dienstleistungen
                        </p>
                        <div className="grid grid-cols-1 gap-5">
                          {serviceLinks.map((item, i) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (destinations.length + secondaryLinks.length + i) * 0.1 }}
                            >
                              <Link 
                                href={item.href}
                                className="text-sm md:text-base font-bold text-white/50 hover:text-primary transition-colors flex items-center gap-3 group"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </section>

                      {/* Creative Promo Card inside Menu */}
                      <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Sparkles className="w-12 h-12" />
                        </div>
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 italic">Highlight 2026</p>
                        <h4 className="font-headline text-xl font-bold mb-4">Große Migration</h4>
                        <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                          Sichern Sie sich jetzt die besten Plätze für das Naturschauspiel 2026 in der Serengeti.
                        </p>
                        <Link href="/safaris?year=2026" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                          Expeditionen ansehen <ChevronRight className="w-4 h-4" />
                        </Link>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Footer Section inside Drawer */}
                <div className="relative z-10 p-8 md:p-12 border-t border-white/5 bg-black/20 backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                      <a href="tel:+201234567890" className="flex items-center gap-4 text-sm font-bold text-white/60 hover:text-white transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        +20 123 456 7890
                      </a>
                      <a href="mailto:concierge@serengetidreams.com" className="flex items-center gap-4 text-sm font-bold text-white/60 hover:text-white transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="truncate">concierge@serengetidreams.com</span>
                      </a>
                    </div>

                    <div className="flex gap-4">
                      {[Instagram, Facebook].map((Icon, i) => (
                        <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all border border-white/10">
                          <Icon className="w-5 h-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <Link href="/trip-planner">
                      <Button className="w-full h-16 rounded-[1.5rem] text-lg font-bold shadow-2xl hover:scale-[1.02] transition-transform">
                        REISE JETZT PLANEN
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
