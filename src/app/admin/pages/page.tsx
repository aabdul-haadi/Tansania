
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
  Database,
  Tag,
  Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// MASTER REGISTRY SCHEMA: Scalable for 500+ Path Monitoring
const siteRegistry = [
  {
    category: "01. Core Infrastructure",
    id: "core",
    icon: Layers,
    routes: [
      { title: "Homepage", path: "/", status: "LIVE", type: "RSC", sub: "Primary Entry" },
      { title: "Safari Catalog", path: "/safaris", status: "LIVE", type: "ISR", sub: "Master Hub" },
      { title: "Journal Registry", path: "/blog", status: "LIVE", type: "ISR", sub: "Content Engine" },
      { title: "Trip Planner", path: "/trip-planner", status: "LIVE", type: "CLIENT", sub: "Lead Gen" },
      { title: "AI Trip Advisor", path: "/trip-advisor", status: "LIVE", type: "CLIENT", sub: "Intelligence" },
      { title: "About Us", path: "/about", status: "LIVE", type: "STATIC", sub: "Brand" },
    ]
  },
  {
    category: "02. Regional Expeditions (8 Countries)",
    id: "regional",
    icon: MapPin,
    routes: [
      { title: "Tansania Master", path: "/destinations/tanzania", status: "LIVE", type: "TEMPLATE", sub: "Country Hub" },
      { title: "Ägypten Specialist", path: "/destinations/egypt", status: "LIVE", type: "STATIC", sub: "Country Hub" },
      { title: "Kenia Safari", path: "/destinations/kenya", status: "PENDING", type: "TEMPLATE", sub: "Country Hub" },
      { title: "Botswana Luxury", path: "/destinations/botswana", status: "LIVE", type: "TEMPLATE", sub: "Country Hub" },
      { title: "Namibia Desert", path: "/destinations/namibia", status: "LIVE", type: "TEMPLATE", sub: "Country Hub" },
      { title: "Südafrika Wine", path: "/destinations/south-africa", status: "LIVE", type: "TEMPLATE", sub: "Country Hub" },
      { title: "Uganda Primate", path: "/destinations/uganda", status: "LIVE", type: "TEMPLATE", sub: "Country Hub" },
      { title: "Ruanda Hills", path: "/destinations/rwanda", status: "LIVE", type: "TEMPLATE", sub: "Country Hub" },
    ]
  },
  {
    category: "03. Offers & Bespoke Itineraries",
    id: "offers",
    icon: Tag,
    routes: [
      { title: "Last Minute 2026", path: "/offers/last-minute-2026", status: "LIVE", type: "MARKETING", sub: "Limited Deal" },
      { title: "Early Bird 2027", path: "/offers/early-bird-2027", status: "DRAFT", type: "MARKETING", sub: "Campaign" },
      { title: "Honeymoon Special", path: "/offers/honeymoon-sansibar", status: "LIVE", type: "MARKETING", sub: "Niche" },
      { title: "15 Day Luxury Plan", path: "/itineraries/15-day-luxury-safari", status: "LIVE", type: "DOC", sub: "Offer Detail" },
    ]
  },
  {
    category: "04. Journal Archive (100+ Stories)",
    id: "journal",
    icon: Activity,
    routes: [
      { title: "Wildebeest Insights", path: "/blog/wildebeest-migration-insights", status: "LIVE", type: "STORY", sub: "High SEO" },
      { title: "15 Day Adventure Guide", path: "/blog/luxus-safari-tansania-15-tage", status: "LIVE", type: "STORY", sub: "High SEO" },
      { title: "Zanzibar Packing", path: "/blog/zanzibar-packing", status: "LIVE", type: "STORY", sub: "Utility" },
      { title: "Great Migration 2026", path: "/blog/great-migration-2026", status: "LIVE", type: "STORY", sub: "High SEO" },
    ]
  },
  {
    category: "05. Operational Systems",
    id: "ops",
    icon: Lock,
    routes: [
      { title: "Admin Dashboard", path: "/admin", status: "SECURE", type: "ADMIN", sub: "Command" },
      { title: "Site Planner AI", path: "/admin/ai-planner", status: "SECURE", type: "ADMIN", sub: "Strategy" },
      { title: "Master Catalog", path: "/admin/packages", status: "SECURE", type: "ADMIN", sub: "Data" },
      { title: "Site Settings", path: "/admin/settings", status: "SECURE", type: "ADMIN", sub: "Config" },
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
    <div className="flex flex-col min-h-screen bg-white font-bold">
      <header className="p-6 md:p-10 border-b border-border bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">Infrastructure Registry</h1>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
              Architecture Control • 500+ Path Real-time Monitoring
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="h-12 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest bg-secondary text-white border-none shadow-xl">
              {totalRoutes} active templates
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-10">
        <div className="relative group max-w-2xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Filter infrastructure directory by name, path or category..." 
            className="h-14 pl-14 rounded-2xl border-none bg-muted/20 shadow-inner font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            suppressHydrationWarning
          />
        </div>

        <div className="flex flex-col gap-12 pb-32">
          {filteredRegistry.map((group) => (
            <div key={group.id} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 px-2">
                <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center shadow-md">
                  <group.icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-headline text-lg font-bold uppercase tracking-tight text-secondary leading-none">{group.category}</h2>
                  <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mt-1">Registry Block ID: {group.id}</p>
                </div>
                <div className="h-px flex-grow bg-muted" />
              </div>
              
              <div className="flex flex-col bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
                {group.routes.map((route, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between gap-6 p-4 md:px-8 md:py-5 hover:bg-muted/30 transition-all group border-b last:border-none">
                    <div className="flex items-center gap-6 min-w-0 flex-grow">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        route.status === 'LIVE' ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : 
                        route.status === 'SECURE' ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-yellow-500"
                      )} />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-sm md:text-base text-secondary uppercase truncate leading-none">
                            {route.title}
                          </p>
                          <Badge variant="outline" className="text-[7px] font-black uppercase text-primary tracking-widest px-1.5 py-0.5 border-primary/20 bg-primary/5 rounded">
                            {route.sub}
                          </Badge>
                        </div>
                        <p className="text-[9px] font-bold text-muted-foreground tracking-[0.2em] uppercase mt-2 font-mono">
                          {route.path}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="hidden md:flex flex-col items-end mr-4">
                        <span className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Render Protocol</span>
                        <span className="text-[9px] font-bold text-secondary">{route.type}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all" asChild suppressHydrationWarning>
                        <Link href={route.path} target="_blank">
                          <ExternalLink className="w-4.5 h-4.5" />
                        </Link>
                      </Button>
                    </div>
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
