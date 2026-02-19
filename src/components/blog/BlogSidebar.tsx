
"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Mail, Instagram, ArrowRight, Compass } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function BlogSidebar({ recentPosts }: { recentPosts: any[] }) {
  return (
    <aside className="space-y-10 sticky top-24">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search the journal..." 
          className="pl-12 h-14 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Newsletter */}
      <Card className="rounded-[2rem] border-none bg-secondary text-white overflow-hidden">
        <CardContent className="p-8">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-headline text-2xl font-bold mb-2">The Savannah Scout</h4>
          <p className="text-white/60 text-xs font-light leading-relaxed mb-6">
            Monthly stories, migration updates, and exclusive Cairo-based travel offers.
          </p>
          <div className="space-y-3">
            <Input placeholder="Email Address" className="bg-white/5 border-white/10 text-white rounded-xl h-12 text-sm" />
            <Button className="w-full rounded-xl h-12 bg-primary text-secondary font-bold text-xs uppercase tracking-widest">
              Join the Expedition
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Recent Expeditions</h4>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 relative bg-muted">
                  <img src={post.coverImage || 'https://picsum.photos/seed/recent/200/200'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">{post.category}</p>
                  <h5 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Instagram Hook */}
      <div className="p-8 rounded-[2rem] border border-dashed border-border bg-muted/20 flex flex-col items-center text-center">
        <Instagram className="w-8 h-8 text-muted-foreground mb-4 opacity-40" />
        <p className="text-xs text-muted-foreground font-light mb-4">Follow our journeys in real-time on Instagram.</p>
        <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
          @serengeti_dreams
        </Link>
      </div>
    </aside>
  );
}
