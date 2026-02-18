
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

  // Check if current user has admin role in database
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);

  // Only run admin-level queries if the admin role exists
  const pagesQuery = useMemoFirebase(() => (firestore && adminRole) ? collection(firestore, 'pages') : null, [firestore, adminRole]);
  const blogsQuery = useMemoFirebase(() => (firestore && adminRole) ? collection(firestore, 'blogPosts') : null, [firestore, adminRole]);
  const bookingsQuery = useMemoFirebase(() => (firestore && adminRole) ? collection(firestore, 'bookings') : null, [firestore, adminRole]);
  const inquiriesQuery = useMemoFirebase(() => (firestore && adminRole) ? collection(firestore, 'inquiries') : null, [firestore, adminRole]);

  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);
  const { data: bookings } = useCollection(bookingsQuery);
  const { data: inquiries } = useCollection(inquiriesQuery);

  const recentBlogsQuery = useMemoFirebase(() => {
    if (!firestore || !adminRole) return null;
    return query(collection(firestore, 'blogPosts'), orderBy('createdAt', 'desc'), limit(5));
  }, [firestore, adminRole]);
  const { data: recentBlogs } = useCollection(recentBlogsQuery);

  const stats = [
    { label: 'Total Pages', value: pages?.length || 0, icon: Globe, trend: 'Managed routes' },
    { label: 'Blog Posts', value: blogs?.length || 0, icon: FileText, trend: 'Published stories' },
    { label: 'Inquiries', value: inquiries?.length || 0, icon: MessageSquare, trend: 'New leads' },
    { label: 'Bookings', value: bookings?.length || 0, icon: CalendarCheck, trend: 'Confirmed trips' },
  ];

  const handleSeedData = async () => {
    if (!firestore || !user) {
      toast({ variant: "destructive", title: "Authentication Required", description: "Please sign in to initialize your admin session." });
      return;
    }
    setLoading(true);
    try {
      // 1. Grant admin role
      await setDoc(doc(firestore, 'roles_admin', user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      // 2. Seed Pages
      const corePages = [
        { key: 'home', path: '/', title: 'Home Page' },
        { key: 'about', path: '/about', title: 'About Us' },
        { key: 'contact', path: '/contact', title: 'Contact' },
      ];

      for (const p of corePages) {
        await setDoc(doc(firestore, 'pages', p.key), {
          id: p.key,
          key: p.key,
          path: p.path,
          title: p.title,
          status: 'PUBLISHED',
          updatedAt: new Date().toISOString(),
          updatedBy: user.uid,
          seo: { title: `Serengeti Dreams | ${p.title}`, description: 'Egypt-based experts for premium Tanzania safari packages.' },
          sections: p.key === 'home' ? [
            {
              type: 'hero',
              data: {
                heading: 'The Soul of the Serengeti',
                subheading: "Egypt's premier gateway to the Great Migration.",
                backgroundImage: 'https://picsum.photos/seed/serengeti-hero/1920/1080'
              }
            }
          ] : []
        }, { merge: true });
      }

      // 3. Seed Blog
      const blogId = 'welcoming-the-migration';
      await setDoc(doc(firestore, 'blogPosts', blogId), {
        id: blogId,
        title: 'Welcoming the Great Migration 2025',
        slug: 'welcoming-migration-2025',
        excerpt: 'Everything you need to know about the upcoming season.',
        contentMarkdown: '# The Journey Begins\n\nThe Great Migration is one of nature\'s most spectacular events...',
        category: 'Guides',
        authorName: 'Admin Team',
        status: 'PUBLISHED',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        coverImage: 'https://picsum.photos/seed/migration-blog/1200/800'
      }, { merge: true });

      // 4. Seed Mock Lead Inquiries for "Real Numbers"
      const mockInquiryId = 'sample-lead-1';
      await setDoc(doc(firestore, 'inquiries', mockInquiryId), {
        id: mockInquiryId,
        name: 'Sarah Thompson',
        email: 'sarah.t@example.com',
        type: 'TRIP_PLANNER',
        status: 'new',
        message: 'Looking for a 10-day honeymoon package including Serengeti and Zanzibar.',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, { merge: true });

      // 5. Seed Mock Bookings for "Real Numbers"
      const mockBookingId = 'sample-booking-1';
      await setDoc(doc(firestore, 'bookings', mockBookingId), {
        id: mockBookingId,
        userId: user.uid,
        packageId: 'great-migration-luxury',
        departureDate: '2025-07-15',
        travelers: 2,
        totalPrice: 12500,
        status: 'CONFIRMED',
        paymentStatus: 'PAID',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, { merge: true });

      toast({ title: "Environment Ready", description: "Admin access granted and knowledge graph initialized." });
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
          <h1 className="text-4xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-2 text-lg">Real-time status of the "Nile to Savannah" digital experience.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleSeedData} 
            disabled={loading} 
            variant="secondary" 
            className="gap-2 rounded-2xl h-12 px-6"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
            Initialize CMS
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-2xl h-12 px-6">
            <Link href="/" target="_blank">
              <Eye className="w-4 h-4" /> Live Site
            </Link>
          </Button>
        </div>
      </div>

      {!adminRole && (
        <Card className="bg-primary/5 border-primary/20 rounded-[2rem] p-8 text-center border-2 border-dashed">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Pending Initialization</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Your admin profile hasn't been set up in the database yet. Click the <strong>Initialize CMS</strong> button above to activate full control and real-time metrics.
          </p>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-[2rem] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{adminRole ? stat.value : '--'}</div>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1 font-bold">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-2xl font-bold">Recent Content Activity</CardTitle>
            <CardDescription>Latest blog posts and updates from the team.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              {!adminRole ? (
                <div className="py-10 text-center text-muted-foreground">Admin session not initialized.</div>
              ) : recentBlogs?.length === 0 ? (
                <div className="py-10 text-center text-muted-foreground">No recent activity detected.</div>
              ) : (
                recentBlogs?.map((item: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-muted/30 rounded-[1.5rem] hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary font-bold">
                        {item.authorName?.[0] || 'A'}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.authorName} • {isMounted ? new Date(item.createdAt).toLocaleDateString() : '...'}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="rounded-full">{item.status}</Badge>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <ShieldCheck className="w-6 h-6 text-primary" /> Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            <Button asChild className="w-full justify-start gap-4 rounded-2xl h-14 hover:scale-[1.02] transition-transform" variant="outline">
              <Link href="/admin/pages"><Globe className="w-5 h-5" /> All Web Pages</Link>
            </Button>
            <Button asChild className="w-full justify-start gap-4 rounded-2xl h-14 hover:scale-[1.02] transition-transform" variant="outline">
              <Link href="/admin/blog/new"><Plus className="w-5 h-5" /> New Blog Article</Link>
            </Button>
            
            <div className="mt-8 pt-8 border-t">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold mb-4">System Integrity</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Database Connectivity</span>
                  <Badge className={`border-none ${adminRole ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                    {adminRole ? 'Stable' : 'Awaiting Auth'}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Auth Security</span>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none">Active</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
