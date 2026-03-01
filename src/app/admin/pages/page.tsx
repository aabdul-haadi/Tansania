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
  FileCode,
  Layout,
  Compass,
  CreditCard,
  Heart,
  Info,
  ShoppingBag,
  Ticket
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
      { title: "Homepage", path: "/", status: "Live" },
      { title: "Safari Catalog", path: "/safaris", status: "Live" },
      { title: "Trip Planner", path: "/trip-planner", status: "Live" },
      { title: "Expedition Journal", path: "/blog", status: "Live" },
      { title: "About Serengeti Dreams", path: "/about", status: "Live" },
      { title: "FAQ & Support", path: "/faq", status: "Live" },
      { title: "Contact Hub", path: "/contact", status: "Live" },
      { title: "Nationalparks Highlights", path: "/national-parks", status: "Live" },
    ]
  },
  {
    category: "Flagship Destinations",
    icon: MapPin,
    pages: [
      { title: "Kilimandscharo", path: "/destinations/kilimanjaro", status: "Live" },
      { title: "Sansibar Paradise", path: "/destinations/zanzibar", status: "Live" },
      { title: "Kenia", path: "/destinations/kenia", status: "Stub" },
      { title: "Botswana", path: "/destinations/botswana", status: "Stub" },
      { title: "Ägypten (Cairo Hub)", path: "/destinations/egypt", status: "Stub" },
      { title: "Südafrika", path: "/destinations/south-africa", status: "Stub" },
      { title: "Uganda", path: "/destinations/uganda", status: "Stub" },
      { title: "Ruanda", path: "/destinations/rwanda", status: "Stub" },
      { title: "Namibia", path: "/destinations/namibia", status: "Stub" },
      { title: "Äthiopien", path: "/destinations/ethiopia", status: "Stub" },
    ]
  },
  {
    category: "Services & Logistics",
    icon: Plane,
    pages: [
      { title: "Agency Expertise", path: "/services/agency-services", status: "Live" },
      { title: "Adventure App", path: "/services/adventure-app", status: "Live" },
      { title: "Guest Protection", path: "/services/guest-protection", status: "Live" },
      { title: "Passport & Visa", path: "/services/passport-visa", status: "Live" },
      { title: "Fly With Us", path: "/services/fly-with-us", status: "Live" },
      { title: "Travel Shop", path: "/services/travel-shop", status: "Live" },
      { title: "Guest Information Form", path: "/services/guest-form", status: "Live" },
    ]
  },
  {
    category: "Legal & Compliance",
    icon: ShieldCheck,
    pages: [
      { title: "Impressum", path: "/legal/imprint", status: "Live" },
      { title: "AGB (Terms)", path: "/legal/terms", status: "Live" },
      { title: "Datenschutz (Privacy)", path: "/legal/privacy", status: "Live" },
      { title: "EU Richtlinie", path: "/legal/directive", status: "Live" },
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
    <div className="p-10 max-w-6xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Site Registry</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Complete index of all registered routes and content hubs on Serengeti Dreams.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="outline" className="h-10 px-4 rounded-xl font-bold text-xs uppercase tracking-widest border-primary/20 text-primary bg-primary/5">
            {totalPages} Managed Routes
          </Badge>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Environment: Live</span>
          </div>
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

      <div className="space-y-6">
        {filteredRegistry.length > 0 ? (
          <Accordion type="multiple" defaultValue={["Core Experience", "Flagship Destinations"]} className="space-y-6">
            {filteredRegistry.map((group, idx) => ( group.pages.length > 0 && (
              <AccordionItem 
                key={idx} 
                value={group.category}
                className="border-none bg-white rounded-3xl shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center transition-all group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                      <group.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{group.category}</h3>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{group.pages.length} Pages Indexed</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  {/* Flex-Grid Layout for items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.pages.map((page, pIdx) => (
                      <div 
                        key={pIdx}
                        className="flex items-center justify-between p-5 rounded-2xl bg-muted/20 hover:bg-primary/5 transition-all group/item border border-transparent hover:border-primary/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)] ${page.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                          <div>
                            <p className="font-bold text-sm text-foreground">{page.title}</p>
                            <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{page.path}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-all translate-x-2 group-hover/item:translate-x-0">
                          <Button variant="ghost" size="sm" asChild className="rounded-xl h-10 gap-2 font-bold text-[10px] uppercase tracking-widest bg-white shadow-sm">
                            <Link href={page.path} target="_blank">
                              Live <ExternalLink className="w-3 h-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )))}
          </Accordion>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-muted">
            <FileCode className="w-16 h-16 mx-auto mb-6 opacity-10 text-primary" />
            <h3 className="text-2xl font-bold text-secondary">No matching routes</h3>
            <p className="text-muted-foreground text-sm font-light mt-2 max-w-xs mx-auto">Try searching for a different segment or category.</p>
            <Button variant="link" onClick={() => setSearchTerm("")} className="mt-6 text-primary font-bold uppercase tracking-widest text-xs">
              Reset Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
