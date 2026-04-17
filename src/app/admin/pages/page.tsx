"use client";

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink,
  MapPin,
  Globe,
  Layers,
  Calendar,
  ChevronRight
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
      { title: "Homepage", path: "/", status: "Live", sub: "Primary entry" },
      { title: "Safari Catalog", path: "/safaris", status: "Live", sub: "Master hub" },
      { title: "Activities Registry", path: "/activities", status: "Live", sub: "Adventure hub" },
      { title: "Accommodations", path: "/unterkuenfte", status: "Live", sub: "Hotel hub" },
      { title: "Journal Registry", path: "/blog", status: "Live", sub: "Content engine" },
      { title: "National Parks", path: "/national-parks", status: "Live", sub: "Conservation hub" },
      { title: "Migration Tracker", path: "/migration", status: "Live", sub: "Wildlife ops" },
      { title: "Trip Planner", path: "/trip-planner", status: "Live", sub: "Lead gen" },
      { title: "AI Trip Advisor", path: "/trip-advisor", status: "Live", sub: "Intelligence" },
      { title: "About Us", path: "/about", status: "Live", sub: "Brand identity" },
    ]
  },
  {
    category: "02. Seasonal Campaigns (2026/27)",
    id: "seasonal",
    icon: Calendar,
    routes: [
      { title: "Neujahr 2026/27", path: "/neujahrsreisen-tansania-2026", status: "Live", sub: "Campaign" },
      { title: "Sommer 2026", path: "/sommerreisen-abenteuer-und-erholung-2026", status: "Live", sub: "Campaign" },
      { title: "Weihnachten 2026/27", path: "/weihnachten-reisen-tansania-2026", status: "Live", sub: "Campaign" },
      { title: "Ostern 2026", path: "/ostern-safari-urlaub-2026", status: "Live", sub: "Campaign" },
    ]
  },
  {
    category: "03. Regional Portfolio (8+ Countries)",
    id: "regional",
    icon: MapPin,
    routes: [
      { title: "Tanzania Master", path: "/destinations/tanzania", status: "Live", sub: "Country hub" },
      { title: "Zanzibar Paradise", path: "/destinations/zanzibar", status: "Live", sub: "Island hub" },
      { title: "Kilimanjaro Summit", path: "/destinations/kilimanjaro", status: "Live", sub: "Peak hub" },
      { title: "Egypt Specialist", path: "/destinations/egypt", status: "Live", sub: "Cairo office" },
      { title: "Kenya Safari", path: "/destinations/kenya", status: "Live", sub: "Expansion" },
      { title: "South Africa", path: "/destinations/south-africa", status: "Live", sub: "Portfolio" },
      { title: "Namibia Dunes", path: "/destinations/namibia", status: "Live", sub: "Portfolio" },
      { title: "Botswana Wild", path: "/destinations/botswana", status: "Live", sub: "Portfolio" },
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
        (r.sub && r.sub.toLowerCase().includes(lowerSearch))
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
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h1 className="font-headline text-2xl md:text-5xl font-normal text-secondary leading-none uppercase">Infrastructure Registry</h1>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold tracking-normal pl-1">
              Scale control • 500+ path real-time monitoring
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="h-10 md:h-12 px-4 md:px-6 rounded-2xl font-bold text-[10px] bg-secondary text-white border-none shadow-xl">
              {totalRoutes}+ active templates
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-12">
        <div className="relative group max-w-2xl">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Filter 500+ path directory..." 
            className="h-14 md:h-16 pl-16 rounded-2xl border-none bg-muted/20 shadow-inner font-bold text-xs focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 pb-32">
          {filteredRegistry.map((group) => (
            <div key={group.id} className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-4 md:gap-6 px-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shadow-md shrink-0">
                  <group.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <h2 className="font-headline text-lg md:text-2xl font-normal text-secondary leading-none uppercase">{group.category}</h2>
                  <p className="text-[8px] font-bold text-muted-foreground tracking-normal mt-1.5 opacity-60">Registry cluster: {group.id}</p>
                </div>
                <div className="h-px flex-grow bg-muted" />
              </div>
              
              <div className="flex flex-col bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-border overflow-hidden shadow-sm">
                {group.routes.map((route, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between gap-4 md:gap-6 px-6 md:px-8 py-4 md:py-5 hover:bg-muted/30 transition-all group border-b last:border-none">
                    <div className="flex items-center gap-4 md:gap-6 min-w-0 flex-grow text-left">
                      <div className={cn(
                        "w-2 md:w-2.5 h-2 md:h-2.5 rounded-full shadow-lg shrink-0",
                        route.status === 'Live' ? "bg-green-500" : "bg-yellow-500"
                      )} />
                      <div className="flex flex-col min-w-0">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3">
                          <p className="font-bold text-sm md:text-base text-secondary truncate leading-none uppercase">
                            {route.title}
                          </p>
                          <Badge variant="outline" className="text-[7px] font-bold text-primary tracking-normal px-2 py-0.5 border-primary/20 bg-primary/5 rounded">
                            {route.sub}
                          </Badge>
                        </div>
                        <p className="text-[8px] md:text-[9px] font-bold text-muted-foreground tracking-normal mt-1 md:mt-1.5 font-mono truncate">
                          {route.path}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="rounded-xl h-9 w-9 md:h-10 md:w-10 border-muted hover:border-primary/20 hover:text-primary transition-all" asChild>
                        <Link href={route.path} target="_blank">
                          <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
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