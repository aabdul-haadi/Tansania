
"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Mail, Instagram, ArrowRight, Compass, Sparkles, Zap, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, limit } from 'firebase/firestore';

export function BlogSidebar() {
  const firestore = useFirestore();

  const recentQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'blogPosts'),
      where('status', '==', 'PUBLISHED'),
      orderBy('createdAt', 'desc'),
      limit(4)
    );
  }, [firestore]);

  const { data: recentPosts, isLoading } = useCollection(recentQuery);

  return (
    <aside className="space-y-12 sticky top-24">
      {/* Dynamic Search */}
      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
        <Input 
          placeholder="Journal durchsuchen..." 
          className="pl-14 h-16 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary/20 text-[10px] font-bold uppercase tracking-widest"
          suppressHydrationWarning
        />
      </div>

      {/* Flagship CTA */}
      <Card className="rounded-[2.5rem] border-none bg-secondary text-white overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <Compass className="w-24 h-24 rotate-12" />
        </div>
        <CardContent className="p-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[8px] font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3 fill-primary" /> Exklusive Planung
          </div>
          <h4 className="font-headline text-3xl font-bold mb-4 leading-tight uppercase tracking-tight">Expedition 2026 Planen</h4>
          <p className="text-white/40 text-[10px] font-bold uppercase leading-relaxed tracking-widest mb-8">
            Unsere Spezialisten in Berlin finalisieren gerade die Routen für die kommende Migration. Sichern Sie sich Ihren Platz.
          </p>
          <Link href="/trip-planner">
            <Button className="w-full rounded-xl h-14 bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-transform border-none">
              REISE DESIGNEN
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Automatic Recent Posts */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Neueste Berichte</h4>
          <div className="h-px flex-grow ml-4 bg-muted" />
        </div>
        <div className="space-y-6">
          {isLoading ? (
            <div className="py-4 text-center"><Loader2 className="w-4 h-4 animate-spin mx-auto text-primary" /></div>
          ) : (recentPosts || []).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="flex gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 relative bg-muted shadow-sm">
                  <img src={post.coverImage || 'https://picsum.photos/seed/recent/200/200'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center py-1">
                  <div className="flex items-center gap-2 text-[8px] font-bold text-primary uppercase tracking-widest mb-1.5">
                    <Zap className="w-2.5 h-2.5 fill-primary" />
                    {post.category}
                  </div>
                  <h5 className="font-headline font-bold text-xs leading-snug line-clamp-2 group-hover:text-primary transition-colors uppercase">
                    {post.title}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Social Pulse */}
      <div className="p-10 rounded-[2.5rem] bg-white border border-border/50 flex flex-col items-center text-center shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-secondary mb-6 shadow-lg border border-border">
          <Instagram className="w-6 h-6" />
        </div>
        <h5 className="font-headline font-bold text-lg mb-2 uppercase tracking-tight">Visual Journal</h5>
        <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mb-6 leading-relaxed">Tägliche Einblicke unserer Guides aus der Serengeti und von Sansibar.</p>
        <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-colors px-6 py-2 rounded-full border border-border hover:border-primary/30">
          @tansania_reiseabenteuer
        </Link>
      </div>
    </aside>
  );
}
