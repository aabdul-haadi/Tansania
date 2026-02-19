
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
  const { data: adminRole, isLoading: isAdminRoleLoading } = useDoc(adminDocRef);

  // We allow fetching if the role doc exists OR if it's the default admin email (to handle first boot)
  const canFetch = !!firestore && (!!adminRole || (user?.email === 'admin@serengetidreams.com' && !isAdminRoleLoading));

  const pagesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'pages') : null, [canFetch, firestore]);
  const blogsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'blogPosts') : null, [canFetch, firestore]);
  const bookingsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'bookings') : null, [canFetch, firestore]);
  const inquiriesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'inquiries') : null, [canFetch, firestore]);

  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);
  const { data: bookings } = useCollection(bookingsQuery);
  const { data: inquiries } = useCollection(inquiriesQuery);

  const recentBlogsQuery = useMemoFirebase(() => {
    if (!canFetch) return null;
    return query(collection(firestore!, 'blogPosts'), orderBy('createdAt', 'desc'), limit(5));
  }, [canFetch, firestore]);
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

      // 3. Seed Blog Posts (5 Samples)
      const sampleBlogs = [
        {
          id: 'the-great-migration-2025',
          title: 'The Great Migration: A Month-by-Month Guide',
          slug: 'great-migration-guide',
          excerpt: 'Witness millions of animals crossing the Serengeti. Our guide breaks down the best times and locations for the spectacular river crossings.',
          contentMarkdown: '## The Cycle of Life in the Serengeti\n\nThe Great Migration is not a single event but a continuous journey of nearly two million wildebeest, zebras, and gazelles across the Serengeti-Mara ecosystem. \n\n### January – March: The Calving Season\nIn the Southern Serengeti, hundreds of thousands of calves are born within a few weeks. This is a time of abundance but also high predator activity.\n\n### July – October: The River Crossings\nThis is the most dramatic phase. The herds cross the Mara River, facing crocodiles and steep banks. July is peak season for this spectacle.',
          category: 'Guides',
          authorName: 'Sophie',
          status: 'PUBLISHED',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
        },
        {
          id: 'safari-packing-list',
          title: 'Essential Safari Packing List: What to Bring',
          slug: 'safari-packing-list',
          excerpt: 'Packing for a Tanzanian safari requires careful planning. From dust-proof gear to the perfect binoculars, here is what you need.',
          contentMarkdown: '## Don\'t Forget the Basics\n\n1. **Neutral Colors**: Tan, khaki, and olive help you blend into the background and don\'t attract tsetse flies.\n2. **Binoculars**: A high-quality pair makes a massive difference in spotting leopards hiding in acacia trees.\n3. **Layers**: Mornings are freezing, afternoons are hot.',
          category: 'Tips',
          authorName: 'Anna',
          status: 'PUBLISHED',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          updatedAt: new Date(Date.now() - 86400000).toISOString(),
          coverImage: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=1200'
        },
        {
          id: 'zanzibar-secrets',
          title: "Zanzibar's Best Kept Secrets: Beyond the Beach",
          slug: 'zanzibar-secrets',
          excerpt: "Stone Town is more than just a gateway. Discover the hidden spice markets and the Jozani forest's unique Red Colobus monkeys.",
          contentMarkdown: '## Stone Town after Dark\n\nThe Forodhani Gardens night market is a must-visit for local seafood. But have you explored the winding alleys of the old city at 6 AM when the bread ovens start?',
          category: 'Culture',
          authorName: 'Maria',
          status: 'PUBLISHED',
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          updatedAt: new Date(Date.now() - 172800000).toISOString(),
          coverImage: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=1200'
        },
        {
          id: 'kili-routes-comparison',
          title: 'Climbing Kilimanjaro: Machame vs Lemosho',
          slug: 'kili-routes-guide',
          excerpt: 'Choosing your route is the most important decision for a successful climb. We compare scenery, difficulty, and success rates.',
          contentMarkdown: '## Machame: The Whiskey Route\nPopular, scenic, and well-organized. Good for acclimatization due to the "climb high, sleep low" profile.\n\n## Lemosho: The Premium Path\nQuieter, longer, and with the highest success rate. Ideal for those who want a more private mountain experience.',
          category: 'Planning',
          authorName: 'Sophie',
          status: 'PUBLISHED',
          createdAt: new Date(Date.now() - 259200000).toISOString(),
          updatedAt: new Date(Date.now() - 259200000).toISOString(),
          coverImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
        },
        {
          id: 'sustainable-tourism-tanzania',
          title: 'Sustainable Tourism: Travel with a Purpose',
          slug: 'sustainable-tourism',
          excerpt: 'How your safari supports local communities and conservation projects in Tanzania’s most vulnerable ecosystems.',
          contentMarkdown: '## More than just a vacation\n\nBy choosing local guides and eco-lodges, you contribute directly to the salaries of over 500 families in the Arusha and Serengeti regions.',
          category: 'Tips',
          authorName: 'Anna',
          status: 'PUBLISHED',
          createdAt: new Date(Date.now() - 345600000).toISOString(),
          updatedAt: new Date(Date.now() - 345600000).toISOString(),
          coverImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200'
        }
      ];

      for (const b of sampleBlogs) {
        await setDoc(doc(firestore, 'blogPosts', b.id), b, { merge: true });
      }

      toast({ title: "Journal Initialized", description: "Admin access granted and 5 sample articles have been published." });
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

      {!adminRole && user?.email !== 'admin@serengetidreams.com' && (
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
              <div className="text-3xl font-bold">{canFetch ? stat.value : '--'}</div>
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
              {!canFetch ? (
                <div className="py-10 text-center text-muted-foreground">Admin session synchronizing...</div>
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
                  <Badge className={`border-none ${canFetch ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                    {canFetch ? 'Stable' : 'Connecting'}
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
