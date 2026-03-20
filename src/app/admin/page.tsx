"use client";

import React, { useState } from 'react';
import { 
  Database,
  RefreshCw,
  Globe,
  Eye,
  Sparkles,
  ArrowRight,
  Brain,
  Layers,
  Settings
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

  // Registry Guard: Ensures server-side sync is complete
  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);

  // Simplified Protected Queries - Removed blogPosts to prevent permission bottlenecks
  const packagesQuery = useMemoFirebase(() => (canFetch && adminRole) ? collection(firestore, 'packages') : null, [canFetch, firestore, adminRole]);
  const { data: packages } = useCollection(packagesQuery);

  const handleSeedData = () => {
    if (!firestore || !user) return;
    setLoading(true);
    
    setDocumentNonBlocking(doc(firestore, 'siteSettings', 'global'), {
      id: 'global',
      companyName: 'Tansania Reiseabenteuer SDL',
      officeLocation: 'Bayerischer Pl. 7, 10779 Berlin, Germany',
      updatedAt: serverTimestamp(),
      updatedBy: user.uid
    }, { merge: true });

    toast({ title: "Registry Handshake", description: "Global configuration synchronized." });
    setLoading(false);
  };

  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-6 md:space-y-10 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 md:pb-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">Command Center</h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
            Operational Overview • Infrastructure Registry
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <Button onClick={handleSeedData} disabled={loading} variant="outline" className="flex-1 md:flex-none gap-2 rounded-xl h-11 px-5 font-bold uppercase tracking-widest text-[9px] border-primary/20 text-primary hover:bg-primary/5">
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            Sync Registry
          </Button>
          <Button asChild className="flex-1 md:flex-none gap-2 rounded-xl h-11 px-5 shadow-xl font-bold uppercase tracking-widest text-[9px]">
            <Link href="/" target="_blank"><Eye className="w-3.5 h-3.5" /> Live Preview</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-[2rem] bg-secondary text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10"><Brain className="w-20 h-20 rotate-12" /></div>
          <div className="relative z-10 space-y-6">
            <h3 className="font-headline text-2xl font-bold uppercase">AI Planner</h3>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-relaxed">Analyze site connectivity and SEO across your 500+ pages.</p>
            <Button asChild className="w-full h-12 bg-primary text-white border-none text-[9px] uppercase tracking-widest rounded-xl shadow-xl">
              <Link href="/admin/ai-planner">Run Site Audit <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </Card>

        <Card className="rounded-[2rem] border border-border p-8 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.3em]">Catalog Status</span>
              <Database className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-headline text-3xl font-bold text-secondary uppercase leading-none">{packages?.length || 0}</h3>
            <p className="text-[10px] font-bold text-muted-foreground uppercase">Expeditions Live</p>
          </div>
          <Link href="/admin/packages" className="text-[9px] font-black uppercase text-primary hover:underline mt-6">Manage Catalog Registry →</Link>
        </Card>

        <Card className="rounded-[2rem] border border-border p-8 flex flex-col justify-between bg-muted/5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.3em]">Global Settings</span>
              <Settings className="w-4 h-4 text-secondary" />
            </div>
            <h3 className="font-headline text-lg font-bold text-secondary uppercase leading-tight">Registry Profile</h3>
            <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">Config active</p>
          </div>
          <Link href="/admin/settings" className="text-[9px] font-black uppercase text-secondary hover:underline mt-6">Update Site Meta →</Link>
        </Card>
      </div>

      <div className="py-12 text-center bg-muted/5 rounded-[3rem] border-2 border-dashed border-muted/50">
        <Layers className="w-12 h-12 mx-auto mb-4 opacity-10" />
        <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">Journal Archive Management</h3>
        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mt-2 max-w-xs mx-auto leading-relaxed">
          The editorial listing is currently handled via the main Content Management System. Syncing 100+ logs...
        </p>
      </div>
    </div>
  );
}
