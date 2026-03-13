"use client";

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink,
  MapPin,
  ShieldCheck,
  Sparkles,
  FileCode,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const siteRegistry = [
  {
    category: "Core Experience",
    icon: Sparkles,
    pages: [
      { title: "Homepage", path: "/", status: "Live", key: "home" },
      { title: "Safari Catalog", path: "/safaris", status: "Live", key: "safaris" },
      { title: "Trip Planner", path: "/trip-planner", status: "Live", key: "trip-planner" },
      { title: "Expedition Journal", path: "/blog", status: "Live", key: "blog" },
      { title: "About Serengeti Dreams", path: "/about", status: "Live", key: "about" },
      { title: "Contact Hub", path: "/contact", status: "Live", key: "contact" },
    ]
  },
  {
    category: "Flagship Destinations",
    icon: MapPin,
    pages: [
      { title: "Arusha Nationalpark", path: "/national-parks/arusha", status: "Live", key: "arusha" },
      { title: "Kilimandscharo", path: "/destinations/kilimanjaro", status: "Live", key: "kilimanjaro" },
      { title: "Sansibar Paradise", path: "/destinations/zanzibar", status: "Live", key: "zanzibar" },
      { title: "Tarangire Nationalpark", path: "/national-parks/tarangire", status: "Live", key: "tarangire" },
    ]
  },
  {
    category: "Legal & Compliance",
    icon: ShieldCheck,
    pages: [
      { title: "Impressum", path: "/legal/imprint", status: "Live", key: "imprint" },
      { title: "AGB (Terms)", path: "/legal/terms", status: "Live", key: "terms" },
      { title: "Datenschutz (Privacy)", path: "/legal/privacy", status: "Live", key: "privacy" },
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
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-secondary uppercase">Site Registry</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">
            Managed Content Regions & Routes
          </p>
        </div>
        <Badge variant="outline" className="h-9 px-4 rounded-xl font-bold text-[9px] uppercase tracking-widest border-primary/20 text-primary bg-primary/5">
          {totalPages} Registered Routes
        </Badge>
      </div>

      <div className="relative group max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search pages..." 
          className="h-12 pl-12 rounded-xl border-none bg-white shadow-sm font-bold text-xs uppercase"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredRegistry.map((group, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2 px-2">
              <group.icon className="w-3.5 h-3.5 text-primary" />
              <h2 className="font-bold text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{group.category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.pages.map((page, pIdx) => (
                <Card key={pIdx} className="border-none shadow-sm rounded-xl bg-white overflow-hidden hover:shadow-md transition-all group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        page.status === 'Live' ? "bg-green-500" : "bg-yellow-500"
                      )} />
                      <div>
                        <p className="font-bold text-xs text-secondary uppercase truncate max-w-[180px]">{page.title}</p>
                        <p className="text-[7px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">{page.path}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                        <Link href={page.path} target="_blank"><ExternalLink className="w-3.5 h-3.5" /></Link>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-lg h-8 px-3 gap-1.5 font-bold text-[8px] uppercase tracking-widest border-muted" asChild>
                        <Link href={`/admin/pages/${page.key}`}>
                          Edit <ArrowRight className="w-3 h-3" />
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
        <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-muted">
          <FileCode className="w-12 h-12 mx-auto mb-4 opacity-5" />
          <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">No matching routes</h3>
          <Button variant="link" onClick={() => setSearchTerm("")} className="mt-2 text-primary font-bold uppercase tracking-widest text-[9px]">
            Reset Search
          </Button>
        </div>
      )}
    </div>
  );
}
