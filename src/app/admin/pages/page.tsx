
"use client";

import React from 'react';
import { 
  Search, 
  ExternalLink,
  Globe,
  Layout,
  MapPin,
  ShieldCheck,
  Plane,
  FileText,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Site Registry</h1>
          <p className="text-muted-foreground mt-2 text-lg">Tracking all registered routes and pages on Serengeti Dreams.</p>
        </div>
        <Badge variant="outline" className="h-10 px-4 rounded-xl font-bold text-xs uppercase tracking-widest border-primary/20 text-primary">
          Live Production Environment
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteRegistry.map((group, idx) => (
          <Card key={idx} className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-background">
            <CardHeader className="p-8 border-b border-muted bg-muted/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <group.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{group.category}</CardTitle>
                  <CardDescription>{group.pages.length} pages identified</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-1">
                {group.pages.map((page, pIdx) => (
                  <div 
                    key={pIdx}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                      <div>
                        <p className="font-bold text-sm text-foreground">{page.title}</p>
                        <p className="text-[10px] text-muted-foreground font-mono">{page.path}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" asChild className="rounded-xl h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={page.path} target="_blank">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
