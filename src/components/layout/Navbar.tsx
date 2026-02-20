"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ChevronDown, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const destinations = [
  { name: 'Safaris', href: '/safaris' },
  { name: 'Zanzibar', href: '/destinations/zanzibar' },
  { name: 'Kilimanjaro', href: '/destinations/kilimanjaro' },
];

const safaris = [
  { name: 'Luxury Safaris', href: '/safaris?tier=luxury' },
  { name: 'Honeymoon Specials', href: '/safaris?category=honeymoon' },
  { name: 'Family Adventures', href: '/safaris?category=family' },
  { name: 'All Packages', href: '/safaris' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Compass className={cn("w-8 h-8 transition-transform group-hover:rotate-45", isScrolled ? "text-primary" : "text-white")} />
            <div className={cn("absolute inset-0 blur-lg rounded-full animate-pulse", isScrolled ? "bg-primary/20" : "bg-white/20")} />
          </div>
          <span className={cn("font-headline text-2xl font-bold tracking-tight", isScrolled ? "text-foreground" : "text-white")}>
            Serengeti<span className="text-primary">Dreams</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center gap-1 font-bold text-xs uppercase tracking-widest transition-colors hover:text-primary", isScrolled ? "text-foreground" : "text-white")}>
              Destinations <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 rounded-2xl border-none shadow-2xl bg-white/95 backdrop-blur-xl">
              {destinations.map((item) => (
                <DropdownMenuItem key={item.name} asChild className="rounded-xl focus:bg-primary/10 focus:text-primary">
                  <Link href={item.href} className="cursor-pointer font-bold text-[10px] uppercase tracking-wider">{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center gap-1 font-bold text-xs uppercase tracking-widest transition-colors hover:text-primary", isScrolled ? "text-foreground" : "text-white")}>
              Safaris <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 rounded-2xl border-none shadow-2xl bg-white/95 backdrop-blur-xl">
              {safaris.map((item) => (
                <DropdownMenuItem key={item.name} asChild className="rounded-xl focus:bg-primary/10 focus:text-primary">
                  <Link href={item.href} className="cursor-pointer font-bold text-[10px] uppercase tracking-wider">{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'font-bold text-xs uppercase tracking-widest transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : (isScrolled ? 'text-foreground' : 'text-white')
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/trip-planner">
            <Button variant={isScrolled ? "default" : "secondary"} className="rounded-full px-8 font-bold text-[10px] uppercase tracking-widest shadow-xl">
              Plan My Trip
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="ghost" size="icon" className={cn("rounded-full", isScrolled ? "text-foreground" : "text-white hover:bg-white/10")}>
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2 rounded-xl transition-colors", isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t absolute top-full left-0 w-full p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="space-y-4">
            <div className="font-bold text-[10px] text-primary uppercase tracking-[0.3em]">Destinations</div>
            <div className="grid grid-cols-2 gap-2">
              {destinations.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold p-3 bg-muted/50 rounded-xl">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-[10px] text-primary uppercase tracking-[0.3em]">Quick Links</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-headline font-bold py-1">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/trip-planner" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary text-white rounded-2xl h-14 font-bold text-base shadow-xl">Plan My Trip</Button>
          </Link>
        </div>
      )}
    </header>
  );
}