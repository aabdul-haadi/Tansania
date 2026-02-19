
"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  MessageSquare, 
  CalendarCheck, 
  Database,
  RefreshCw,
  ShieldCheck,
  Globe,
  Plus,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useFirestore, useUser, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc, collection, query, orderBy, limit } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const canFetch = !!firestore && !!user;

  const pagesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'pages') : null, [canFetch, firestore]);
  const blogsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'blogPosts') : null, [canFetch, firestore]);
  const bookingsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'bookings') : null, [canFetch, firestore]);
  const inquiriesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'inquiries') : null, [canFetch, firestore]);

  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);
  const { data: bookings } = useCollection(bookingsQuery);
  const { data: inquiries } = useCollection(inquiriesQuery);

  const stats = [
    { label: 'Total Pages', value: pages?.length || 0, icon: Globe, trend: 'Managed routes' },
    { label: 'Blog Posts', value: blogs?.length || 0, icon: FileText, trend: 'Published stories' },
    { label: 'Inquiries', value: inquiries?.length || 0, icon: MessageSquare, trend: 'New leads' },
    { label: 'Bookings', value: bookings?.length || 0, icon: CalendarCheck, trend: 'Confirmed trips' },
  ];

  const handleSeedData = async () => {
    if (!firestore || !user) {
      toast({ variant: "destructive", title: "Authentication Required", description: "Please sign in to initialize." });
      return;
    }
    setLoading(true);
    try {
      // 1. Seed the 15-Day Dream Adventure Package
      const pkg15Id = '15-day-safari-zanzibar';
      await setDoc(doc(firestore, 'packages', pkg15Id), {
        id: pkg15Id,
        title: '15 Tage Safari in Tansania und Sansibar',
        slug: pkg15Id,
        subtitle: 'Erlebnisreise - Safari im Norden und Badeurlaub auf Sansibar',
        durationDays: 15,
        tier: 'luxury',
        startingPrice: 5399,
        isPublished: true,
        destinationIds: ['arusha', 'serengeti', 'ngorongoro', 'zanzibar'],
        categories: ['honeymoon', 'family'],
        highlights: [
          'Atemberaubende Tierbeobachtungen',
          'Exklusive Lodge & Tented Camp',
          'Abenteuer & Erholung',
          'Alles gut organisiert',
          'Inklusive Intl. Flug'
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }, { merge: true });

      toast({ title: "CMS Synchronized", description: "15-day Traumabenteuer and core structures have been updated." });
    } catch (error: any) {
      console.error(error);
      toast({ variant: "destructive", title: "Setup Failed", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-secondary">Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-lg">Digital operations for Serengeti Dreams.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleSeedData} 
            disabled={loading} 
            variant="secondary" 
            className="gap-2 rounded-2xl h-12 px-6"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
            Sync Package Database
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-2xl h-12 px-6">
            <Link href="/" target="_blank">
              <Eye className="w-4 h-4" /> View Site
            </Link>
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
              <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-2xl font-bold text-secondary">Content Management</CardTitle>
            <CardDescription>Quickly manage your pages and stories.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start gap-4 rounded-2xl h-14 bg-muted/20 border-none">
                <Link href="/admin/pages"><Globe className="w-5 h-5 text-primary" /> Manage Website Sections</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-4 rounded-2xl h-14 bg-muted/20 border-none">
                <Link href="/admin/blog"><FileText className="w-5 h-5 text-primary" /> Curate Expedition Journal</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-secondary text-white">
          <CardHeader className="p-8">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <ShieldCheck className="w-6 h-6 text-primary" /> System Access
            </CardTitle>
            <CardDescription className="text-white/40">Authorized personnel only.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Status</span>
                <Badge className="bg-primary text-secondary border-none">Active</Badge>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Role</span>
                <span className="font-bold">Administrator</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
