
"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  MessageSquare, 
  CalendarCheck, 
  Database,
  RefreshCw,
  Globe,
  Eye,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useFirestore, useUser, useCollection, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import { doc, collection } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const canFetch = !!firestore && !!user;

  const pagesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'pages') : null, [canFetch, firestore]);
  const blogsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'blogPosts') : null, [canFetch, firestore]);
  const bookingsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'bookings') : null, [canFetch, firestore]);
  const inquiriesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'inquiries') : null, [canFetch, firestore]);
  const packagesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'packages') : null, [canFetch, firestore]);

  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);
  const { data: bookings } = useCollection(bookingsQuery);
  const { data: inquiries } = useCollection(inquiriesQuery);
  const { data: packages } = useCollection(packagesQuery);

  const stats = [
    { label: 'Site Registry', value: pages?.length || 0, icon: Globe, trend: 'Managed routes' },
    { label: 'Safari Catalog', value: packages?.length || 0, icon: Database, trend: 'Synced packages' },
    { label: 'Inquiries', value: inquiries?.length || 0, icon: MessageSquare, trend: 'New leads' },
    { label: 'Bookings', value: bookings?.length || 0, icon: CalendarCheck, trend: 'Confirmed trips' },
  ];

  const handleSeedData = () => {
    if (!firestore || !user) return;
    setLoading(true);
    
    // Seed Site Settings (Non-blocking as per guidelines)
    setDocumentNonBlocking(doc(firestore, 'siteSettings', 'global'), {
      id: 'global',
      companyName: 'Tansania Reiseabenteuer SDL',
      officeLocation: 'Bayerischer Pl. 7, 10779 Berlin, Germany',
      contactEmail: 'info@tansania-reiseabenteuer.de',
      whatsappNumber: '+49 30 22608080',
      officeHours: 'Montag – Freitag',
      updatedAt: new Date().toISOString(),
      updatedBy: user.uid
    }, { merge: true });

    const allPackages = [
      { 
        id: '15-day-safari-zanzibar', 
        title: '15 Tage Safari in Tansania und Sansibar', 
        slug: '15-day-safari-zanzibar', 
        subtitle: 'Traumabenteuer in Afrika!',
        category: 'SAFARI & SANSIBAR', 
        tag: 'Meistverkauft', 
        durationDays: 15, 
        startingPrice: 5399, 
        description: "Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise.",
        highlights: ['Atemberaubende Tierbeobachtungen', 'Exklusive Lodge & Tented Camp', 'Abenteuer & Erholung'], 
        imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
      },
      { id: '13-day-honeymoon', title: '13 Tage Flitterwochen', slug: '13-day-honeymoon', tag: 'Romantik', category: 'FLITTERWOHEN', durationDays: 13, startingPrice: 3899, highlights: ['Champagner', 'Privat-Safari'], isPublished: true, rating: 5.0 },
      { id: '12-day-family-safari', title: '12 Tage Familien-Safari', slug: '12-day-family-safari', category: 'FAMILIENSAFARI', durationDays: 12, startingPrice: 3499, highlights: ['Big Five', 'Kinderfreundlich'], isPublished: true, rating: 4.9 }
    ];

    for (const pkg of allPackages) {
      setDocumentNonBlocking(doc(firestore, 'packages', pkg.slug), {
        ...pkg,
        isPublished: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    }

    toast({ title: "Sync Initiated", description: "Expedition data synchronization started in background." });
    setLoading(false);
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-secondary uppercase">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-lg font-bold">Digital operations for Tansania Reiseabenteuer SDL.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSeedData} disabled={loading} variant="secondary" className="gap-2 rounded-2xl h-12 px-6 font-bold uppercase tracking-widest">
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Initialize CMS Data
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-2xl h-12 px-6 font-bold uppercase tracking-widest">
            <Link href="/" target="_blank"><Eye className="w-4 h-4" /> View Site</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-[2rem] overflow-hidden bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stat.value}</div>
              <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
