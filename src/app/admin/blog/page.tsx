"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function BlogList() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const canFetch = !!firestore && !!user;

  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const blogQuery = useMemoFirebase(() => {
    if (!canFetch || !adminRole) return null;
    return query(collection(firestore, 'blogPosts'), orderBy('createdAt', 'desc'));
  }, [firestore, adminRole, canFetch]);

  const { data: posts, isLoading } = useCollection(blogQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Permanently remove article?')) return;
    deleteDocumentNonBlocking(doc(firestore, 'blogPosts', id));
    toast({ title: "Post Deleted", description: "Journal record removed." });
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">Expedition Journal</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">Editorial & Content Management</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" asChild className="flex-1 md:flex-none h-10 px-5 font-bold uppercase tracking-widest text-[9px] border-muted">
            <Link href="/admin/ai-planner"><Sparkles className="w-3.5 h-3.5 mr-2 text-primary" /> SEO Audit</Link>
          </Button>
          <Button asChild className="flex-1 md:flex-none h-10 px-5 shadow-lg font-bold uppercase tracking-widest text-[9px]">
            <Link href="/admin/blog/new"><Plus className="w-4 h-4 mr-2" /> New Entry</Link>
          </Button>
        </div>
      </div>

      <div className="relative group max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search article titles..." className="h-11 pl-11 rounded-xl border-none bg-white shadow-sm font-bold text-[10px] uppercase tracking-widest" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-[9px] uppercase tracking-widest">
            Accessing library...
          </div>
        ) : posts?.length === 0 ? (
          <Card className="py-20 text-center border-dashed border-2 bg-muted/10 rounded-3xl">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-5" />
            <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">Library Empty</h3>
            <p className="text-muted-foreground mb-6 text-[9px] font-bold uppercase tracking-widest">Start recording your savannah stories.</p>
            <Button asChild className="h-10 px-6 font-bold uppercase tracking-widest text-[9px]">
              <Link href="/admin/blog/new">Draft First Post</Link>
            </Button>
          </Card>
        ) : (
          posts?.map((post: any) => (
            <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-xl bg-white">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-48 h-32 md:h-auto shrink-0 relative overflow-hidden">
                  <img 
                    src={post.coverImage || 'https://picsum.photos/seed/blog-fallback/400/400'} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={`px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest border-none shadow-md ${
                      post.status === 'PUBLISHED' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {post.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex-grow p-4 md:p-6 flex flex-col justify-between min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="min-w-0">
                      <span className="text-[8px] font-bold text-primary uppercase tracking-widest block mb-1">{post.category}</span>
                      <h3 className="text-base font-bold text-secondary uppercase leading-tight truncate">{post.title}</h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button size="icon" variant="ghost" asChild className="rounded-lg h-8 w-8"><Link href={`/admin/blog/${post.id}/edit`}><Edit className="w-3.5 h-3.5" /></Link></Button>
                      <Button size="icon" variant="ghost" asChild className="rounded-lg h-8 w-8"><Link href={`/blog/${post.slug}`} target="_blank"><ExternalLink className="w-3.5 h-3.5" /></Link></Button>
                      <Button size="icon" variant="ghost" onClick={() => handleDelete(post.id)} className="rounded-lg h-8 w-8 text-destructive hover:bg-destructive/5"><Trash2 className="w-3.5 h-3.5" /></Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-muted mt-2">
                    <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      {isMounted ? new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '...'} • {post.authorName}
                    </p>
                    <Link href={`/admin/blog/${post.id}/edit`} className="flex items-center gap-1 text-[8px] font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest">
                      Edit Content <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
