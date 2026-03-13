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
  Compass,
  Zap,
  FolderOpen,
  Settings,
  Lock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const siteRegistry = [
  {
    category: "01. Core Experience",
    icon: Sparkles,
    pages: [
      { title: "Homepage", path: "/", status: "Live", key: "home" },
      { title: "Safari Catalog", path: "/safaris", status: "Live", key: "safaris" },
      { title: "Trip Planner", path: "/trip-planner", status: "Live", key: "trip-planner" },
      { title: "AI Trip Advisor", path: "/trip-advisor", status: "Live", key: "trip-advisor" },
      { title: "AI Itinerary Builder", path: "/itinerary-builder", status: "Live", key: "itinerary-builder" },
      { title: "Expedition Journal", path: "/blog", status: "Live", key: "blog" },
      { title: "About Serengeti Dreams", path: "/about", status: "Live", key: "about" },
      { title: "Contact Hub", path: "/contact", status: "Live", key: "contact" },
    ]
  },
  {
    category: "02. Destinations & Parks",
    icon: MapPin,
    pages: [
      { title: "Parks Overview", path: "/national-parks", status: "Live", key: "parks-index" },
      { title: "Serengeti Nationalpark", path: "/national-parks/serengeti", status: "Live", key: "serengeti" },
      { title: "Arusha Nationalpark", path: "/national-parks/arusha", status: "Live", key: "arusha" },
      { title: "Tarangire Nationalpark", path: "/national-parks/tarangire", status: "Live", key: "tarangire" },
      { title: "Kilimandscharo", path: "/destinations/kilimanjaro", status: "Live", key: "kilimanjaro" },
      { title: "Sansibar Paradise", path: "/destinations/zanzibar", status: "Live", key: "zanzibar" },
    ]
  },
  {
    category: "03. Client Services",
    icon: Zap,
    pages: [
      { title: "Guest Protection", path: "/services/guest-protection", status: "Live", key: "insurance" },
      { title: "Partner Program", path: "/partner", status: "Live", key: "partner" },
      { title: "Careers", path: "/karriere", status: "Live", key: "careers" },
      { title: "FAM Trip Portfolio", path: "/fam-trip", status: "Live", key: "fam-trip" },
      { title: "Guest Information Form", path: "/services/guest-form", status: "Live", key: "guest-form" },
      { title: "Passport & Visa Guide", path: "/services/passport-visa", status: "Live", key: "visa" },
      { title: "Travel Shop", path: "/services/travel-shop", status: "Live", key: "shop" },
    ]
  },
  {
    category: "04. Legal & Compliance",
    icon: ShieldCheck,
    pages: [
      { title: "Impressum", path: "/legal/imprint", status: "Live", key: "imprint" },
      { title: "AGB (Terms)", path: "/legal/terms", status: "Live", key: "terms" },
      { title: "Datenschutz (Privacy)", path: "/legal/privacy", status: "Live", key: "privacy" },
      { title: "Pauschalreise-Richtlinie", path: "/legal/directive", status: "Live", key: "directive" },
      { title: "FAQ Support", path: "/faq", status: "Live", key: "faq" },
    ]
  },
  {
    category: "05. System Operations",
    icon: Lock,
    pages: [
      { title: "Staff Login", path: "/auth/login", status: "Live", key: "login" },
      { title: "Admin Dashboard", path: "/admin", status: "Internal", key: "admin-root" },
      { title: "Site Planner AI", path: "/admin/ai-planner", status: "Internal", key: "ai-planner" },
      { title: "Safari Catalog CMS", path: "/admin/packages", status: "Internal", key: "pkg-cms" },
      { title: "Journal Management", path: "/admin/blog", status: "Internal", key: "blog-cms" },
    ]
  }
];

export default function SiteRegistry() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRegistry = useMemo(() => {
    if (!searchTerm) return siteRegistry;
    return siteRegistry.map(group => ({
      ...group,
      pages: group.pages.filter(page => 
        page.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        page.path.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(group => group.pages.length > 0);
  }, [searchTerm]);

  const totalPages = useMemo(() => {
    return siteRegistry.reduce((acc, group) => acc + group.pages.length, 0);
  }, []);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-secondary uppercase">Site Registry</h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em]">
            Application Directory & Route Monitoring
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="h-10 px-5 rounded-xl font-bold text-[9px] uppercase tracking-widest border-primary/20 text-primary bg-primary/5">
            {totalPages} Registered Routes
          </Badge>
        </div>
      </div>

      <div className="relative group max-w-2xl">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Filter registry by name or path..." 
          className="h-14 pl-14 rounded-2xl border-none bg-white shadow-sm font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-primary/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-12">
        {filteredRegistry.map((group, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shadow-sm">
                <group.icon className="w-4 h-4 text-primary" />
              </div>
              <h2 className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-secondary">{group.category}</h2>
              <div className="h-px flex-grow bg-muted" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {group.pages.map((page, pIdx) => (
                <Card key={pIdx} className="border-none shadow-sm rounded-xl md:rounded-2xl bg-white overflow-hidden hover:shadow-md transition-all group border border-transparent hover:border-primary/10">
                  <CardContent className="p-4 md:p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={cn(
                        "w-2 h-2 rounded-full shrink-0",
                        page.status === 'Live' ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-primary shadow-[0_0_8px_rgba(227,81,13,0.4)]"
                      )} />
                      <div className="min-w-0">
                        <p className="font-bold text-xs md:text-sm text-secondary uppercase truncate">{page.title}</p>
                        <p className="text-[8px] font-bold text-muted-foreground tracking-[0.2em] uppercase mt-1 truncate">{page.path}</p>
                      </div>
                    </div>
                    <div className="flex items-center shrink-0">
                      <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all" asChild>
                        <Link href={page.path} target="_blank" title="Verify Route">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredRegistry.length === 0 && (
        <div className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-muted shadow-inner">
          <FileCode className="w-16 h-16 mx-auto mb-6 opacity-10 text-secondary" />
          <h3 className="text-2xl font-bold text-secondary uppercase tracking-tighter">No routes match your search</h3>
          <Button variant="link" onClick={() => setSearchTerm("")} className="mt-4 text-primary font-bold uppercase tracking-[0.3em] text-[10px]">
            Reset Filter <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      )}

      <div className="pt-12 border-t border-muted">
        <div className="bg-secondary p-8 rounded-[2.5rem] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-xl font-bold uppercase tracking-tighter">Monitoring Protocol</h4>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Status green indicates route is registered in the public registry.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Public Route</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Admin Route</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
