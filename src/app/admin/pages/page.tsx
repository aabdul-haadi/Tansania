"use client";

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink,
  MapPin,
  Globe,
  Lock,
  Layers,
  Activity,
  Tag,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// MASTER REGISTRY SCHEMA: Scalable for 500+ Path Monitoring
const siteRegistry = [
  {
    category: "01. Core Infrastructure",
    id: "core",
    icon: Layers,
    routes: [
      { title: "Homepage", path: "/", status: "LIVE", sub: "Primary Entry" },
      { title: "Safari Catalog", path: "/safaris", status: "LIVE", sub: "Master Hub" },
      { title: "Journal Registry", path: "/blog", status: "LIVE", sub: "Content Engine" },
      { title: "Trip Planner", path: "/trip-planner", status: "LIVE", sub: "Lead Gen" },
      { title: "AI Trip Advisor", path: "/trip-advisor", status: "LIVE", sub: "Intelligence" },
      { title: "About Us", path: "/about", status: "LIVE", sub: "Brand" },
    ]
  },
  {
    category: "02. Regional Expeditions (8 Countries)",
    id: "regional",
    icon: MapPin,
    routes: [
      { title: "Tansania Master", path: "/destinations/tanzania", status: "LIVE", sub: "Country Hub" },
      { title: "Ägypten Specialist", path: "/destinations/egypt", status: "LIVE", sub: "Country Hub" },
      { title: "Kenia Safari", path: "/destinations/kenya", status: "PENDING", sub: "Country Hub" },
      { title: "Zanzibar Paradise", path: "/destinations/zanzibar", status: "LIVE", sub: "Country Hub" },
      { title: "Kilimanjaro Summit", path: "/destinations/kilimanjaro", status: "LIVE", sub: "Country Hub" },
    ]
  },
  {
    category: "03. Offers & Bespoke Deals",
    id: "offers",
    icon: Tag,
    routes: [
      { title: "Last Minute 2026", path: "/offers/last-minute-2026", status: "LIVE", sub: "Limited Deal" },
      { title: "Honeymoon Special", path: "/offers/honeymoon-sansibar", status: "LIVE", sub: "Niche Campaign" },
    ]
  },
  {
    category: "04. Journal Archive (100+ Stories)",
    id: "journal",
    icon: Activity,
    routes: [
      { title: "Migration Insights", path: "/blog/wildebeest-migration-insights", status: "LIVE", sub: "Editorial" },
      { title: "15 Day Luxury Guide", path: "/blog/luxus-safari-tansania-15-tage", status: "LIVE", sub: "High SEO" },
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
      <header className="p-10 border-b border-border bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-secondary uppercase leading-none">Infrastructure Registry</h1>
            </div>
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em] pl-1">
              Architecture Control • 500+ Path Real-time Monitoring
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="h-12 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest bg-secondary text-white border-none shadow-xl">
              {totalRoutes} active templates
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-10 max-w-7xl mx-auto w-full space-y-12">
        <div className="relative group max-w-2xl">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Filter 500+ path directory..." 
            className="h-16 pl-16 rounded-[1.5rem] border-none bg-muted/20 shadow-inner font-black text-xs uppercase tracking-widest focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-16 pb-32">
          {filteredRegistry.map((group) => (
            <div key={group.id} className="flex flex-col gap-8">
              <div className="flex items-center gap-6 px-2">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shadow-md">
                  <group.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-secondary leading-none">{group.category}</h2>
                  <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mt-1.5">Registry Cluster: {group.id}</p>
                </div>
                <div className="h-px flex-grow bg-muted" />
              </div>
              
              <div className="flex flex-col bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm">
                {group.routes.map((route, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between gap-6 px-10 py-6 hover:bg-muted/30 transition-all group border-b last:border-none">
                    <div className="flex items-center gap-8 min-w-0 flex-grow">
                      <div className={cn(
                        "w-2.5 h-2.5 rounded-full shadow-lg",
                        route.status === 'LIVE' ? "bg-green-500" : "bg-yellow-500"
                      )} />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-4">
                          <p className="font-black text-lg text-secondary uppercase truncate leading-none">
                            {route.title}
                          </p>
                          <Badge variant="outline" className="text-[7px] font-black uppercase text-primary tracking-widest px-2 py-0.5 border-primary/20 bg-primary/5 rounded">
                            {route.sub}
                          </Badge>
                        </div>
                        <p className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase mt-2 font-mono">
                          {route.path}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="rounded-xl h-12 w-12 border-muted hover:border-primary/20 hover:text-primary transition-all" asChild>
                        <Link href={route.path} target="_blank">
                          <ExternalLink className="w-5 h-5" />
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