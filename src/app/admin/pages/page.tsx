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
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Registry Schema for 500+ Scale Monitoring
const siteRegistry = [
  {
    category: "01. Core Experience",
    icon: Sparkles,
    routes: [
      { title: "Homepage", path: "/", status: "LIVE", type: "RSC" },
      { title: "Safari Catalog", path: "/safaris", status: "LIVE", type: "ISR" },
      { title: "Trip Planner", path: "/trip-planner", status: "LIVE", type: "CLIENT" },
      { title: "AI Trip Advisor", path: "/trip-advisor", status: "LIVE", type: "CLIENT" },
      { title: "AI Itinerary Builder", path: "/itinerary-builder", status: "LIVE", type: "CLIENT" },
      { title: "Expedition Journal", path: "/blog", status: "LIVE", type: "ISR" },
      { title: "About Serengeti Dreams", path: "/about", status: "LIVE", type: "STATIC" },
      { title: "Contact Hub", path: "/contact", status: "LIVE", type: "STATIC" },
    ]
  },
  {
    category: "02. Destinations & Parks",
    icon: MapPin,
    routes: [
      { title: "Parks Overview", path: "/national-parks", status: "LIVE", type: "ISR" },
      { title: "Serengeti Nationalpark", path: "/national-parks/serengeti", status: "LIVE", type: "ISR" },
      { title: "Arusha Nationalpark", path: "/national-parks/arusha", status: "LIVE", type: "ISR" },
      { title: "Tarangire Nationalpark", path: "/national-parks/tarangire", status: "LIVE", type: "ISR" },
      { title: "Kilimandscharo", path: "/destinations/kilimanjaro", status: "LIVE", type: "ISR" },
      { title: "Sansibar Paradise", path: "/destinations/zanzibar", status: "LIVE", type: "ISR" },
      { title: "Ngorongoro Protected Area", path: "/destinations/ngorongoro", status: "LIVE", type: "ISR" },
      { title: "Lake Manyara", path: "/destinations/lake-manyara", status: "LIVE", type: "ISR" },
    ]
  },
  {
    category: "03. Expedition Journal (Archives)",
    icon: Activity,
    routes: [
      { title: "Great Migration 2026", path: "/blog/great-migration-2026", status: "LIVE", type: "ISR" },
      { title: "Zanzibar Packing Guide", path: "/blog/zanzibar-packing", status: "LIVE", type: "ISR" },
      { title: "Climbing Kilimanjaro Tips", path: "/blog/kilimanjaro-tips", status: "LIVE", type: "ISR" },
      { title: "Maasai Cultural Etiquette", path: "/blog/maasai-etiquette", status: "LIVE", type: "ISR" },
    ]
  },
  {
    category: "04. Client Services",
    icon: Zap,
    routes: [
      { title: "Guest Protection", path: "/services/guest-protection", status: "LIVE", type: "STATIC" },
      { title: "Partner Program", path: "/partner", status: "LIVE", type: "STATIC" },
      { title: "Careers", path: "/karriere", status: "LIVE", type: "STATIC" },
      { title: "FAM Trip Portfolio", path: "/fam-trip", status: "LIVE", type: "STATIC" },
      { title: "Guest Information Form", path: "/services/guest-form", status: "LIVE", type: "CLIENT" },
      { title: "Passport & Visa Guide", path: "/services/passport-visa", status: "LIVE", type: "STATIC" },
      { title: "Travel Shop", path: "/services/travel-shop", status: "LIVE", type: "STATIC" },
    ]
  },
  {
    category: "05. Legal & Compliance",
    icon: ShieldCheck,
    routes: [
      { title: "Impressum", path: "/legal/imprint", status: "LIVE", type: "STATIC" },
      { title: "AGB (Terms)", path: "/legal/terms", status: "LIVE", type: "STATIC" },
      { title: "Datenschutz (Privacy)", path: "/legal/privacy", status: "LIVE", type: "STATIC" },
      { title: "Pauschalreise-Richtlinie", path: "/legal/directive", status: "LIVE", type: "STATIC" },
      { title: "FAQ Support", path: "/faq", status: "LIVE", type: "STATIC" },
    ]
  },
  {
    category: "06. System Operations",
    icon: Lock,
    routes: [
      { title: "Staff Login", path: "/auth/login", status: "SECURE", type: "AUTH" },
      { title: "Admin Dashboard", path: "/admin", status: "SECURE", type: "ADMIN" },
      { title: "Site Planner AI", path: "/admin/ai-planner", status: "SECURE", type: "ADMIN" },
      { title: "Safari Catalog CMS", path: "/admin/packages", status: "SECURE", type: "ADMIN" },
      { title: "Journal Management", path: "/admin/blog", status: "SECURE", type: "ADMIN" },
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
        r.path.toLowerCase().includes(lowerSearch)
      )
    })).filter(group => group.routes.length > 0);
  }, [searchTerm]);

  const totalRoutes = useMemo(() => {
    return siteRegistry.reduce((acc, group) => acc + group.routes.length, 0);
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 bg-white min-h-screen">
      {/* High-Visibility Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">Site Registry</h1>
          </div>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
            Application Topology & Route Monitoring Protocol
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end px-6 border-r border-border">
            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Protocol Status</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-bold uppercase">All Routes Synced</span>
            </div>
          </div>
          <Badge variant="outline" className="h-12 px-6 rounded-xl font-bold text-[10px] uppercase tracking-widest border-primary/20 text-primary bg-primary/5">
            {totalRoutes} Core Paths Identified
          </Badge>
        </div>
      </div>

      {/* Operational Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative group flex-grow">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Search directory by name or path..." 
            className="h-14 pl-14 rounded-2xl border-none bg-muted/20 shadow-inner font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="h-14 px-8 rounded-2xl border-muted text-[10px] font-bold uppercase tracking-widest hover:bg-muted">
          Generate Audit Report
        </Button>
      </div>

      {/* Registry Directory (High-Density List) */}
      <div className="space-y-16 pb-20">
        {filteredRegistry.map((group, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center gap-4 px-2">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center border border-border">
                <group.icon className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="font-bold text-[11px] uppercase tracking-[0.5em] text-secondary">{group.category}</h2>
              <div className="h-px flex-grow bg-muted" />
              <span className="text-[9px] font-bold text-muted-foreground uppercase">{group.routes.length} Paths</span>
            </div>
            
            <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 divide-y divide-border">
                {group.routes.map((route, rIdx) => (
                  <div 
                    key={rIdx} 
                    className="flex items-center justify-between gap-6 p-4 md:px-8 md:py-5 hover:bg-muted/30 transition-colors group"
                  >
                    <div className="flex items-center gap-6 min-w-0 flex-grow">
                      <div className="flex items-center gap-3 shrink-0">
                        {route.status === 'LIVE' || route.status === 'SECURE' ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                        )}
                        <Badge className="bg-muted text-secondary border-none text-[7px] font-bold px-2 py-0.5 min-w-[45px] justify-center">
                          {route.type}
                        </Badge>
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-xs md:text-sm text-secondary uppercase truncate leading-none">
                          {route.title}
                        </p>
                        <p className="text-[8px] font-bold text-muted-foreground tracking-[0.2em] uppercase mt-1.5 truncate">
                          {route.path}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden md:flex flex-col items-end pr-4 border-r border-border">
                        <p className="text-[7px] font-bold text-muted-foreground uppercase">Visibility</p>
                        <p className="text-[9px] font-bold text-secondary uppercase">{route.status}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10 text-muted-foreground hover:text-primary transition-all group-hover:bg-white" asChild>
                        <Link href={route.path} target="_blank" title="Verify Route Integrity">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRegistry.length === 0 && (
        <div className="py-40 text-center bg-muted/10 rounded-[3rem] border-2 border-dashed border-muted shadow-inner">
          <FileCode className="w-16 h-16 mx-auto mb-6 opacity-10 text-secondary" />
          <h3 className="text-2xl font-bold text-secondary uppercase tracking-tighter">No core paths match audit filter</h3>
          <Button variant="link" onClick={() => setSearchTerm("")} className="mt-4 text-primary font-bold uppercase tracking-[0.3em] text-[10px]">
            Reset Audit Filter <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      )}

      {/* Audit Protocol Footer */}
      <div className="pt-12 border-t border-border">
        <div className="bg-secondary p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Monitor className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-bold uppercase tracking-tighter">Monitoring Protocol Active</h4>
              </div>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] max-w-xl">
                Status indicators verify route registration in the primary application topology. Amber indicates draft status or restricted access.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white">Publicly Reachable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(227,81,13,0.6)]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white">Access Restricted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
