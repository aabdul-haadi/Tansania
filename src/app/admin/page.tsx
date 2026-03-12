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
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useFirestore, useUser, useCollection, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import { doc, collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const canFetch = !!firestore && !!user;

  const pagesQuery = useMemoFirebase(() => canFetch ? collection(firestore, 'pages') : null, [canFetch, firestore]);
  const blogsQuery = useMemoFirebase(() => canFetch ? collection(firestore, 'blogPosts') : null, [canFetch, firestore]);
  const bookingsQuery = useMemoFirebase(() => canFetch ? collection(firestore, 'bookings') : null, [canFetch, firestore]);
  const inquiriesQuery = useMemoFirebase(() => canFetch ? collection(firestore, 'inquiries') : null, [canFetch, firestore]);
  const packagesQuery = useMemoFirebase(() => canFetch ? collection(firestore, 'packages') : null, [canFetch, firestore]);

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
    
    setDocumentNonBlocking(doc(firestore, 'siteSettings', 'global'), {
      id: 'global',
      companyName: 'Tansania Reiseabenteuer SDL',
      officeLocation: 'Bayerischer Pl. 7, 10779 Berlin, Germany',
      contactEmail: 'info@tansania-reiseabenteuer.de',
      whatsappNumber: '+49 30 22608080',
      officeHours: 'Montag – Freitag',
      updatedAt: serverTimestamp(),
      updatedBy: user.uid
    }, { merge: true });

    const allPackages = [
      { 
        id: '15-day-safari-zanzibar', 
        title: '15 Tage Safari in Tansania und Sansibar', 
        slug: '15-day-safari-zanzibar', 
        subtitle: 'Traumabenteuer in Afrika',
        category: 'SAFARI & SANSIBAR', 
        tag: 'Meistverkauft', 
        durationDays: 15, 
        startingPrice: 5399, 
        description: "Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise.",
        highlights: ['Atemberaubende Tierbeobachtungen', 'Exklusive Lodge & Tented Camp', 'Abenteuer & Erholung'], 
        imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
      },
      { id: '13-day-honeymoon', title: '13 Tage Flitterwochen', slug: '13-day-honeymoon', tag: 'Romantik', category: 'FLITTERWOCHEN', durationDays: 13, startingPrice: 3899, highlights: ['Champagner', 'Privat-Safari'], isPublished: true, rating: 5.0 },
      { id: '12-day-family-safari', title: '12 Tage Familien-Safari', slug: '12-day-family-safari', category: 'FAMILIENSAFARI', durationDays: 12, startingPrice: 3499, highlights: ['Big Five', 'Kinderfreundlich'], isPublished: true, rating: 4.9 }
    ];

    for (const pkg of allPackages) {
      setDocumentNonBlocking(doc(firestore, 'packages', pkg.slug), {
        ...pkg,
        isPublished: true,
        updatedAt: serverTimestamp()
      }, { merge: true });
    }

    toast({ title: "Sync Initiated", description: "Expedition data synchronization started." });
    setLoading(false);
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-secondary uppercase">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-[10px] md:text-xs font-bold uppercase tracking-widest">Digital Operations Control</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSeedData} disabled={loading} variant="outline" className="gap-2 rounded-xl h-10 md:h-12 px-4 md:px-6 font-bold uppercase tracking-widest text-[9px] border-primary/20 text-primary hover:bg-primary/5">
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            Initialize CMS
          </Button>
          <Button asChild className="gap-2 rounded-xl h-10 md:h-12 px-4 md:px-6 font-bold uppercase tracking-widest text-[9px] shadow-xl">
            <Link href="/" target="_blank"><Eye className="w-3.5 h-3.5" /> View Live Site</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-2xl md:rounded-3xl overflow-hidden bg-white hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2 p-4 md:p-6">
              <CardTitle className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
              <div className="text-xl md:text-3xl font-bold text-secondary tracking-tighter">{stat.value}</div>
              <p className="text-[7px] md:text-[8px] text-muted-foreground mt-1.5 md:mt-2 font-bold uppercase tracking-widest">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <Card className="rounded-[1.5rem] md:rounded-[2.5rem] border-none shadow-sm bg-white p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase">Recent Journal Posts</h3>
            <Link href="/admin/blog" className="text-[9px] font-bold uppercase tracking-widest text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {blogs?.slice(0, 3).map((blog: any) => (
              <div key={blog.id} className="flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl bg-muted/20 border border-transparent hover:border-primary/10 transition-all group">
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={blog.coverImage || 'https://picsum.photos/seed/admin-blog/100/100'} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-xs md:text-sm text-secondary uppercase truncate">{blog.title}</p>
                    <p className="text-[7px] md:text-[8px] font-bold uppercase text-muted-foreground tracking-widest">{blog.category}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8 text-muted-foreground group-hover:text-primary shrink-0" asChild>
                  <Link href={`/admin/blog/${blog.id}/edit`}><ArrowRight className="w-3.5 h-3.5" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[1.5rem] md:rounded-[2.5rem] border-none shadow-sm bg-white p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase">New Lead Inquiries</h3>
            <Link href="/admin/inquiries" className="text-[9px] font-bold uppercase tracking-widest text-primary hover:underline">View CRM</Link>
          </div>
          <div className="space-y-3">
            {inquiries?.slice(0, 3).map((lead: any) => (
              <div key={lead.id} className="flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl bg-muted/20 border border-transparent hover:border-primary/10 transition-all group">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] md:text-xs uppercase shrink-0">
                    {lead.name?.[0]}
                  </div>
                  <div>
                    <p className="font-bold text-xs md:text-sm text-secondary uppercase">{lead.name}</p>
                    <p className="text-[7px] md:text-[8px] font-bold uppercase text-muted-foreground tracking-widest">{lead.type}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest border-muted text-muted-foreground px-2 py-0.5">New</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
