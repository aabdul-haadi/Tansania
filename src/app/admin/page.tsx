"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  CalendarCheck, 
  Eye, 
  TrendingUp,
  Users,
  Database,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useFirestore, useUser } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const stats = [
    { label: 'Total Bookings', value: '48', icon: CalendarCheck, trend: '+12% this month' },
    { label: 'New Inquiries', value: '15', icon: MessageSquare, trend: '5 pending' },
    { label: 'Blog Posts', value: '32', icon: FileText, trend: '4 published recently' },
    { label: 'Active Users', value: '1,240', icon: Users, trend: '+8% vs last week' },
  ];

  const handleSeedData = async () => {
    if (!firestore || !user) {
      toast({ variant: "destructive", title: "Error", description: "You must be signed in to seed data." });
      return;
    }
    setLoading(true);
    try {
      // 1. Ensure user has admin role in roles_admin
      await setDoc(doc(firestore, 'roles_admin', user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      // 2. Seed Home Page
      await setDoc(doc(firestore, 'pages', 'home'), {
        id: 'home',
        key: 'home',
        path: '/',
        title: 'Home Page',
        status: 'PUBLISHED',
        updatedAt: new Date().toISOString(),
        updatedBy: user.uid,
        seo: { title: 'Serengeti Dreams | Luxury Tanzania Safaris', description: 'Expert Egypt-based travel agency specializing in premium Tanzania safari packages.' },
        sections: [
          {
            type: 'hero',
            data: {
              heading: 'The Soul of the Serengeti',
              subheading: "Egypt's premier gateway to the Great Migration. Bespoke safari adventures crafted with local expertise.",
              backgroundImage: 'https://picsum.photos/seed/serengeti-hero/1920/1080'
            }
          }
        ]
      });

      toast({ title: "Success", description: "Admin access granted and sample content seeded!" });
    } catch (error: any) {
      console.error(error);
      toast({ variant: "destructive", title: "Seeding Failed", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your safari agency performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleSeedData} 
            disabled={loading} 
            variant="secondary" 
            className="gap-2 rounded-full"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
            Seed Sample Data
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-full">
            <Link href="/" target="_blank">
              <Eye className="w-4 h-4" /> View Site
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" /> {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest bookings and content updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                      <p className="font-medium text-sm">New booking for "Luxury Serengeti Migration"</p>
                      <p className="text-xs text-muted-foreground">Ahmed Mansour • 2 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Confirmed</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" /> Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <Link href="/admin/pages/home">Edit Home Page</Link>
            </Button>
            <Button asChild className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <Link href="/admin/blog/new">Write New Blog Post</Link>
            </Button>
            <Button asChild className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <Link href="/admin/inquiries">Review Inquiries</Link>
            </Button>
            <div className="pt-4 border-t mt-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3">Admin Setup</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                If the site is empty, use <strong>Seed Sample Data</strong> above to initialize the home page and grant your account admin permissions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}