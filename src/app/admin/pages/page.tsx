"use client";

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink,
  Globe,
  MapPin,
  ShieldCheck,
  Plane,
  Sparkles,
  ChevronRight,
  FileCode
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

const siteRegistry = [
  {
    category: "Core Experience",
    icon: Sparkles,
    pages: [
      { title: "Homepage", path: "/" },
      { title: "Safari Catalog", path: "/safaris" },
      { title: "Trip Planner", path: "/trip-planner" },
      { title: "Expedition Journal (Blog)", path: "/blog" },
      { title: "About Us", path: "/about" },
      { title: "FAQ", path: "/faq" },
      { title: "Contact", path: "/contact" },
    ]
  },
  {
    category: "Destinations",
    icon: MapPin,
    pages: [
      { title: "Kilimandscharo", path: "/destinations/kilimanjaro" },
      { title: "Sansibar", path: "/destinations/zanzibar" },
      { title: "Kenia", path: "/destinations/kenia" },
      { title: "Botswana", path: "/destinations/botswana" },
      { title: "Ägypten", path: "/destinations/egypt" },
      { title: "Südafrika", path: "/destinations/south-africa" },
      { title: "Uganda", path: "/destinations/uganda" },
      { title: "Ruanda", path: "/destinations/rwanda" },
      { title: "Namibia", path: "/destinations/namibia" },
      { title: "Äthiopien", path: "/destinations/ethiopia" },
    ]
  },
  {
    category: "Services & Logistics",
    icon: Plane,
    pages: [
      { title: "Agency Services", path: "/services/agency-services" },
      { title: "Adventure App", path: "/services/adventure-app" },
      { title: "Guest Protection", path: "/services/guest-protection" },
      { title: "Passport & Visa", path: "/services/passport-visa" },
      { title: "Fly With Us", path: "/services/fly-with-us" },
      { title: "Travel Shop", path: "/services/travel-shop" },
      { title: "Guest Information Form", path: "/services/guest-form" },
    ]
  },
  {
    category: "Legal & Compliance",
    icon: ShieldCheck,
    pages: [
      { title: "Impressum", path: "/legal/imprint" },
      { title: "AGB (Terms)", path: "/legal/terms" },
      { title: "Datenschutz (Privacy)", path: "/legal/privacy" },
      { title: "Pauschalreiserichtlinie", path: "/legal/directive" },
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
    <div className="p-10 max-w-5xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Site Registry</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            A comprehensive index of all registered routes on Serengeti Dreams.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="outline" className="h-10 px-4 rounded-xl font-bold text-xs uppercase tracking-widest border-primary/20 text-primary bg-primary/5">
            {totalPages} Pages Indexed
          </Badge>
          <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Live Environment</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative group max-w-2xl">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
        <Input 
          placeholder="Search by page title or URL path..." 
          className="h-16 pl-14 pr-6 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary/20 text-base font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredRegistry.length > 0 ? (
          <Accordion type="multiple" defaultValue={["Core Experience"]} className="space-y-4">
            {filteredRegistry.map((group, idx) => (
              <AccordionItem 
                key={idx} 
                value={group.category}
                className="border-none bg-white rounded-3xl shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                      <group.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{group.category}</h3>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{group.pages.length} Pages</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid grid-cols-1 gap-1">
                    {group.pages.map((page, pIdx) => (
                      <div 
                        key={pIdx}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/50 transition-all group/item"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                          <div>
                            <p className="font-bold text-sm text-foreground">{page.title}</p>
                            <p className="text-[10px] text-muted-foreground font-mono">{page.path}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                          <Button variant="ghost" size="sm" asChild className="rounded-xl h-10 gap-2 font-bold text-[10px] uppercase tracking-widest">
                            <Link href={page.path} target="_blank">
                              View Live <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-muted">
            <FileCode className="w-12 h-12 mx-auto mb-4 opacity-10 text-primary" />
            <h3 className="text-xl font-bold text-secondary">No pages match your search</h3>
            <p className="text-muted-foreground text-sm font-light mt-2">Try a different title or URL segment.</p>
            <Button variant="link" onClick={() => setSearchTerm("")} className="mt-4 text-primary font-bold uppercase tracking-widest text-xs">
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
