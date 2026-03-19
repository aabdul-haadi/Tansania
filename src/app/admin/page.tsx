"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Database,
  RefreshCw,
  Globe,
  Eye,
  Sparkles,
  ArrowRight,
  Brain
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useFirestore, useUser, useCollection, useMemoFirebase, useDoc, setDocumentNonBlocking } from '@/firebase';
import { doc, collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const canFetch = !!firestore && !!user;

  // CRITICAL: Ensure we have the admin role record before querying protected collections
  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);

  // Protected Queries: Removed blogPosts query as per user request to stop permission errors
  const pagesQuery = useMemoFirebase(() => (canFetch && adminRole) ? collection(firestore, 'pages') : null, [canFetch, firestore, adminRole]);
  const packagesQuery = useMemoFirebase(() => (canFetch && adminRole) ? collection(firestore, 'packages') : null, [canFetch, firestore, adminRole]);

  const { data: pages } = useCollection(pagesQuery);
  const { data: packages } = useCollection(packagesQuery);

  const stats = [
    { label: 'Site Registry', value: pages?.length || 0, icon: Globe, trend: 'Managed routes' },
    { label: 'Safari Catalog', value: packages?.length || 0, icon: Database, trend: 'Synced packages' },
    { label: 'System Logs', value: 'Active', icon: FileText, trend: 'Real-time sync' },
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
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-6 md:space-y-10 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 md:pb-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">Command Center</h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
            Operational Overview • Registry Status
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <Button onClick={handleSeedData} disabled={loading} variant="outline" className="flex-1 md:flex-none gap-2 rounded-xl h-11 px-5 font-bold uppercase tracking-widest text-[9px] border-primary/20 text-primary hover:bg-primary/5">
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            Registry Sync
          </Button>
          <Button asChild className="flex-1 md:flex-none gap-2 rounded-xl h-11 px-5 shadow-xl font-bold uppercase tracking-widest text-[9px]">
            <Link href="/" target="_blank"><Eye className="w-3.5 h-3.5" /> Live Preview</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-2xl overflow-hidden bg-white border border-border/50 hover:shadow-md transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 p-5">
              <CardTitle className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</CardTitle>
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <div className="text-2xl md:text-3xl font-bold text-secondary tracking-tighter">{stat.value}</div>
              <p className="text-[8px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
        <div className="lg:col-span-8 space-y-6 md:space-y-10">
          <Card className="rounded-[2.5rem] border-none shadow-sm bg-white border border-border/50 p-6 md:p-10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase tracking-tight">Expedition Journal</h3>
              <Link href="/blog" className="text-[9px] font-bold uppercase tracking-widest text-primary hover:underline">View Public Journal</Link>
            </div>
            <div className="py-12 text-center bg-muted/10 rounded-3xl border border-dashed border-muted">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-10" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Manage Journal Entries via Cloud Storage Registry</p>
            </div>
          </Card>

          <Card className="rounded-[2.5rem] border-none shadow-sm bg-white border border-border/50 p-6 md:p-10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase tracking-tight">Safari Catalog</h3>
              <Link href="/admin/packages" className="text-[9px] font-bold uppercase tracking-widest text-primary hover:underline">Manage Pricing</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packages?.slice(0, 4).map((pkg: any) => (
                <div key={pkg.id} className="flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-transparent hover:border-primary/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-[11px] uppercase shrink-0">
                      {pkg.durationDays}d
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[11px] text-secondary uppercase truncate">{pkg.title}</p>
                      <p className="text-[9px] font-bold uppercase text-primary tracking-widest">€{pkg.startingPrice?.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full shrink-0 ${pkg.isPublished ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-yellow-500'}`} />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-6 md:top-10 space-y-6">
            <Card className="rounded-[2.5rem] border-none bg-secondary text-white p-8 md:p-10 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold uppercase leading-none tracking-tight">AI Planner</h3>
                    <p className="text-[8px] font-bold text-primary uppercase tracking-[0.3em] mt-2">Intelligence Registry</p>
                  </div>
                </div>
                <p className="text-[10px] text-white/40 font-bold uppercase leading-relaxed tracking-widest">
                  Analyze site structure, audit SEO metadata, and generate high-impact content strategy guides powered by real data.
                </p>
                <div className="pt-2">
                  <Link href="/admin/ai-planner" className="block">
                    <Button className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-[10px] uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                      Run Site Analysis <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="rounded-[2.5rem] border-none bg-muted/10 border border-border p-8 text-center space-y-4">
              <Globe className="w-8 h-8 text-muted-foreground/20 mx-auto" />
              <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] text-secondary">Registry Status</h4>
              <div className="flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-xl border border-border inline-flex">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Protocol Active</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}