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

    toast({ title: "Sync Initiated", description: "Expedition data synchronization started." });
    setLoading(false);
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-secondary uppercase">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">Digital Operations Control</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSeedData} disabled={loading} variant="outline" className="gap-2 rounded-xl h-10 px-4 font-bold uppercase tracking-widest text-[9px] border-primary/20 text-primary hover:bg-primary/5">
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            Initialize CMS
          </Button>
          <Button asChild className="gap-2 rounded-xl h-10 px-4 font-bold uppercase tracking-widest text-[9px] shadow-lg">
            <Link href="/" target="_blank"><Eye className="w-3.5 h-3.5" /> View Live Site</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
              <CardTitle className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="w-3.5 h-3.5 text-primary" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl md:text-2xl font-bold text-secondary tracking-tighter">{stat.value}</div>
              <p className="text-[7px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-[1.5rem] border-none shadow-sm bg-white p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-secondary uppercase">Recent Journal Posts</h3>
            <Link href="/admin/blog" className="text-[8px] font-bold uppercase tracking-widest text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-2">
            {blogs?.slice(0, 4).map((blog: any) => (
              <div key={blog.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/20 border border-transparent hover:border-primary/10 transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={blog.coverImage || 'https://picsum.photos/seed/admin-blog/100/100'} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[11px] text-secondary uppercase truncate">{blog.title}</p>
                    <p className="text-[7px] font-bold uppercase text-muted-foreground tracking-widest">{blog.category}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-lg h-7 w-7 text-muted-foreground group-hover:text-primary shrink-0" asChild>
                  <Link href={`/admin/blog/${blog.id}/edit`}><ArrowRight className="w-3 h-3" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[1.5rem] border-none shadow-sm bg-white p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-secondary uppercase">New Lead Inquiries</h3>
            <Link href="/admin/inquiries" className="text-[8px] font-bold uppercase tracking-widest text-primary hover:underline">View CRM</Link>
          </div>
          <div className="space-y-2">
            {inquiries?.slice(0, 4).map((lead: any) => (
              <div key={lead.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/20 border border-transparent hover:border-primary/10 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] uppercase shrink-0">
                    {lead.name?.[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[11px] text-secondary uppercase">{lead.name}</p>
                    <p className="text-[7px] font-bold uppercase text-muted-foreground tracking-widest">{lead.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                   <span className="text-[7px] font-bold uppercase text-muted-foreground tracking-widest">New</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
