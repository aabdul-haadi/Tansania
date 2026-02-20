
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
import { useFirestore, useUser, useCollection, useMemoFirebase } from '@/firebase';
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const canFetch = !!firestore && !!user;

  // Real-time queries for dashboard stats
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

  const handleSeedData = async () => {
    if (!firestore || !user) return;
    setLoading(true);
    try {
      const allPackages = [
        // SAFARIS
        { id: '15-day-safari-zanzibar', title: '15 Tage Safari & Sansibar Komplett', slug: '15-day-safari-zanzibar', category: 'SAFARI & SANSIBAR', tag: 'Meistverkauft', durationDays: 15, startingPrice: 5399, highlights: ['Top Nationalparks Safari', 'Massai Dorfbesuch', 'Sansibar Strände & Tauchen'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
        { id: '13-day-safari-zanzibar', title: '13 Tage Safari & Sansibar Erlebnis', slug: '13-day-safari-zanzibar', category: 'SAFARI & SANSIBAR', durationDays: 13, startingPrice: 3699, highlights: ['Big Five Pirschfahrten', 'UNESCO Krater', 'Stone Town Stadttour'], imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
        { id: '11-day-safari-zanzibar', title: '11 Tage Safari & Sansibar Kurztrip', slug: '11-day-safari-zanzibar', category: 'SAFARI & SANSIBAR', tag: 'Kurztrip', durationDays: 11, startingPrice: 2999, highlights: ['Elefanten im Tarangire', 'Serengeti Migration', 'Sansibar Strände'], imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
        { id: '13-day-honeymoon', title: '13 Tage Flitterwochen Premium', slug: '13-day-honeymoon', category: 'FLITTERWOCHEN', tag: 'Romantik', durationDays: 13, startingPrice: 3899, highlights: ['Champagner Sunset', 'Private Pirschfahrten', 'Heißluftballon Serengeti'], imageUrl: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
        { id: '12-day-family', title: '12 Tage Familien-Safari Abenteuer', slug: '12-day-family', category: 'FAMILIENSAFARI', tag: 'Familien', durationDays: 12, startingPrice: 3499, highlights: ['Big Five Pirschfahrten', 'Massai Kultur', 'Kinderfreundliche Lodges'], imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' },
        { id: '13-day-kili-safari', title: '13 Tage Kombi Safari Komplett', slug: '13-day-kili-safari', category: 'KILIMANDSCHARO SAFARI', tag: 'Kombi', durationDays: 13, startingPrice: 4699, highlights: ['Kili hautnah', 'Big Five Safari', 'Sansibar Strand'], imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
        
        // KILIMANJARO
        { id: '13-day-kili-kombi', title: '13 Tage Kilimandscharo & Safari Kombi', slug: '13-day-kili-kombi', category: 'KILIMANDSCHARO KOMBI', tag: 'Meistverkauft', durationDays: 13, startingPrice: 5299, highlights: ['Afrikas Dach erklimmen', 'Big Five hautnah', 'Sansibars Strände'], imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
        { id: '8-day-marangu', title: '8 Tage Marangu: Komfortabel zum Gipfel', slug: '8-day-marangu', category: 'KILIMANDSCHARO', tag: 'Hüttenroute', durationDays: 8, startingPrice: 3199, highlights: ['Hütten statt Zelte', 'Coca-Cola Route', 'Uhuru Peak Erfolg'], imageUrl: 'https://images.unsplash.com/photo-1650361109293-909990990901?q=80&w=800' },
        { id: '9-day-machame', title: '9 Tage Machame: Der Abenteuer-Weg', slug: '9-day-machame', category: 'KILIMANDSCHARO', tag: 'Whiskey-Route', durationDays: 9, startingPrice: 2499, highlights: ['Uhuru Peak Aufstieg', 'Zeltcamp Erlebnis', 'Spektakuläre Ausblicke'], imageUrl: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
        { id: '10-day-lemosho', title: '10 Tage Lemosho: Unberührte Wege', slug: '10-day-lemosho', category: 'KILIMANDSCHARO', tag: 'Premium Route', durationDays: 10, startingPrice: 3599, highlights: ['Höchste Erfolgsquote', 'Wenig begangene Route', 'Premium Ausrüstung'], imageUrl: 'https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?q=80&w=800' },
        { id: '8-day-rongai', title: '8 Tage Rongai: Dein stiller Weg', slug: '8-day-rongai', category: 'KILIMANDSCHARO', tag: 'Ruhige Route', durationDays: 8, startingPrice: 2999, highlights: ['Nordseite Panorama', 'Abgeschieden & ruhig', 'Tierbeobachtungen'], imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
        { id: '5-day-mount-meru', title: '5 Tage Mount Meru Besteigung', slug: '5-day-mount-meru', category: 'MOUNT MERU', tag: 'Einstiegsroute', durationDays: 5, startingPrice: 2699, highlights: ['Afrikas 2. höchster Gipfel', 'Perfekte Vorbereitung', 'Wildtiere hautnah'], imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' },
      ];

      for (const pkg of allPackages) {
        await setDoc(doc(firestore, 'packages', pkg.id), {
          ...pkg,
          isPublished: true,
          rating: 4.9,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      toast({ title: "Global Registry Updated", description: "All 12 packages have been synchronized." });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Setup Failed", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-secondary">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-lg">Digital operations for Serengeti Dreams.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleSeedData} 
            disabled={loading} 
            variant="secondary" 
            className="gap-2 rounded-2xl h-12 px-6"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Initialize CMS Data
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
    </div>
  );
}
