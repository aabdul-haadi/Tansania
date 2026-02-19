
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
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Compass className={cn("w-8 h-8 transition-transform group-hover:rotate-45", isScrolled ? "text-secondary" : "text-white lg:text-secondary")} />
            <div className="absolute inset-0 bg-secondary/20 blur-lg rounded-full animate-pulse" />
          </div>
          <span className={cn("font-headline text-2xl font-bold tracking-tight", isScrolled ? "text-foreground" : "text-white lg:text-foreground")}>
            Serengeti<span className="text-secondary">Dreams</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center gap-1 font-medium transition-colors hover:text-secondary", isScrolled ? "text-foreground" : "text-white")}>
              Destinations <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2">
              {destinations.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} className="cursor-pointer">{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center gap-1 font-medium transition-colors hover:text-secondary", isScrolled ? "text-foreground" : "text-white")}>
              Safaris <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2">
              {safaris.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} className="cursor-pointer">{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-secondary',
                pathname === link.href ? 'text-secondary' : (isScrolled ? 'text-foreground' : 'text-white')
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/trip-planner">
            <Button variant={isScrolled ? "outline" : "secondary"} className="rounded-full px-6">
              Plan My Trip
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="ghost" size="icon" className={cn("rounded-full", isScrolled ? "text-foreground" : "text-white")}>
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2", isScrolled ? "text-foreground" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t absolute top-full left-0 w-full p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <div className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Destinations</div>
          {destinations.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
              {item.name}
            </Link>
          ))}
          <div className="font-bold text-sm text-muted-foreground uppercase tracking-wider mt-4">Safaris</div>
          {safaris.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
              {item.name}
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
              {link.name}
            </Link>
          ))}
          <Link href="/trip-planner" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-secondary text-white rounded-full mt-4">Plan My Trip</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
