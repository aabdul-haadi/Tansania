
"use client";

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink,
  MapPin,
  ShieldCheck,
  Sparkles,
  FileCode,
  ArrowRight,
  Globe,
  Zap,
  Lock,
  ChevronRight,
  Monitor,
  Activity,
  CheckCircle2,
  AlertCircle,
  Layers,
  Database
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Scalable Registry Schema for 500+ Path Monitoring
const siteRegistry = [
  {
    category: "01. Core Infrastructure",
    id: "core",
    icon: Layers,
    routes: [
      { title: "Homepage", path: "/", status: "LIVE", type: "RSC", sub: "Primary Entry" },
      { title: "Safari Catalog", path: "/safaris", status: "LIVE", type: "ISR", sub: "Master Registry" },
      { title: "Trip Planner", path: "/trip-planner", status: "LIVE", type: "CLIENT", sub: "Lead Gen" },
      { title: "AI Trip Advisor", path: "/trip-advisor", status: "LIVE", type: "CLIENT", sub: "Intelligence" },
      { title: "Expedition Journal", path: "/blog", status: "LIVE", type: "ISR", sub: "Content Engine" },
      { title: "About Serengeti Dreams", path: "/about", status: "LIVE", type: "STATIC", sub: "Brand Narrative" },
      { title: "Contact Hub", path: "/contact", status: "LIVE", type: "STATIC", sub: "Direct Comms" },
    ]
  },
  {
    category: "02. Regional Expedition Hubs",
    id: "regional",
    icon: MapPin,
    routes: [
      { title: "Ägypten Landing", path: "/destinations/egypt", status: "LIVE", type: "ISR", sub: "Regional" },
      { title: "Serengeti Nationalpark", path: "/national-parks/serengeti", status: "LIVE", type: "ISR", sub: "Destinations" },
      { title: "Kilimandscharo", path: "/destinations/kilimanjaro", status: "LIVE", type: "ISR", sub: "Adventure" },
      { title: "Sansibar Paradise", path: "/destinations/zanzibar", status: "LIVE", type: "ISR", sub: "Coast" },
      { title: "Tarangire Nationalpark", path: "/national-parks/tarangire", status: "LIVE", type: "ISR", sub: "Destinations" },
      { title: "Arusha Nationalpark", path: "/national-parks/arusha", status: "LIVE", type: "ISR", sub: "Destinations" },
      { title: "Great Migration", path: "/migration", status: "LIVE", type: "STATIC", sub: "Special" },
    ]
  },
  {
    category: "03. Expedition Journal Archive",
    id: "journal",
    icon: Activity,
    routes: [
      { title: "Great Migration 2026", path: "/blog/great-migration-2026", status: "LIVE", type: "ISR", sub: "Archive" },
      { title: "Zanzibar Packing Guide", path: "/blog/zanzibar-packing", status: "LIVE", type: "ISR", sub: "Guide" },
    ]
  },
  {
    category: "04. Strategic Client Services",
    id: "services",
    icon: Zap,
    routes: [
      { title: "Guest Protection", path: "/services/guest-protection", status: "LIVE", type: "STATIC", sub: "Insurance" },
      { title: "Partner Program", path: "/partner", status: "LIVE", type: "STATIC", sub: "B2B" },
      { title: "FAM Trip Portfolio", path: "/fam-trip", status: "LIVE", type: "STATIC", sub: "B2B" },
      { title: "Careers", path: "/karriere", status: "LIVE", type: "STATIC", sub: "HR" },
    ]
  },
  {
    category: "05. Operational Systems",
    id: "ops",
    icon: Lock,
    routes: [
      { title: "Admin Dashboard", path: "/admin", status: "SECURE", type: "ADMIN", sub: "Command" },
      { title: "Site Planner AI", path: "/admin/ai-planner", status: "SECURE", type: "ADMIN", sub: "Strategy" },
      { title: "Safari Catalog", path: "/admin/blog", status: "SECURE", type: "ADMIN", sub: "Editorial" },
    ]
  }
];

export default function SiteRegistry() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRegistry = useMemo(() => {
    if (!searchTerm) return siteRegistry;
    const lowerSearch = searchTerm.toLowerCase();
    return siteRegistry.map(group => ({
      ...group,
      routes: group.routes.filter(r => 
        r.title.toLowerCase().includes(lowerSearch) || 
        r.path.toLowerCase().includes(lowerSearch) ||
        r.sub.toLowerCase().includes(lowerSearch)
      )
    })).filter(group => group.routes.length > 0);
  }, [searchTerm]);

  const totalRoutes = useMemo(() => {
    return siteRegistry.reduce((acc, group) => acc + group.routes.length, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-6 md:p-10 border-b border-border bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">Site Registry</h1>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
              Infrastructure Protocol • Large-Scale Monitoring
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="h-12 px-6 rounded-xl font-bold text-[10px] uppercase tracking-widest bg-secondary text-white border-none shadow-xl">
              {totalRoutes} Paths Registered
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-10">
        <div className="relative group max-w-2xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Filter infrastructure directory..." 
            className="h-14 pl-14 rounded-2xl border-none bg-muted/20 shadow-inner font-bold text-xs uppercase tracking-widest"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-12 pb-32">
          {filteredRegistry.map((group) => (
            <div key={group.id} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 px-2">
                <div className="w-8 h-8 rounded-lg bg-secondary text-primary flex items-center justify-center">
                  <group.icon className="w-4 h-4" />
                </div>
                <h2 className="font-bold text-[11px] uppercase tracking-[0.5em] text-secondary">{group.category}</h2>
                <div className="h-px flex-grow bg-muted" />
              </div>
              
              <div className="flex flex-col bg-white rounded-3xl border border-border overflow-hidden">
                {group.routes.map((route, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between gap-6 p-4 md:px-8 md:py-4 hover:bg-muted/30 transition-colors group border-b last:border-none">
                    <div className="flex items-center gap-6 min-w-0 flex-grow">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-xs md:text-sm text-secondary uppercase truncate leading-none">
                            {route.title}
                          </p>
                          <span className="text-[7px] font-black uppercase text-primary tracking-widest px-1.5 py-0.5 bg-primary/5 rounded">
                            {route.sub}
                          </span>
                        </div>
                        <p className="text-[8px] font-bold text-muted-foreground tracking-[0.2em] uppercase mt-1.5 font-mono">
                          {route.path}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10 text-muted-foreground hover:text-primary" asChild>
                      <Link href={route.path} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
