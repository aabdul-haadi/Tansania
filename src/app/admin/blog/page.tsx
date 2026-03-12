"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Filter,
  Calendar,
  User,
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
    if (!firestore || !confirm('Are you sure you want to delete this post?')) return;
    deleteDocumentNonBlocking(doc(firestore, 'blogPosts', id));
    toast({ title: "Post Deleted", description: "The article has been removed from the savannah." });
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 md:space-y-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">Blog Management</h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-lg font-bold">Curating safari stories and expert travel advice.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" asChild className="flex-1 md:flex-none gap-2 rounded-2xl h-12 px-6 font-bold uppercase tracking-widest text-[10px]">
            <Link href="/admin/ai-planner"><Sparkles className="w-4 h-4 text-primary" /> SEO Insights</Link>
          </Button>
          <Button asChild className="flex-1 md:flex-none gap-2 rounded-2xl h-12 px-6 shadow-lg shadow-primary/20 font-bold uppercase tracking-widest text-[10px]">
            <Link href="/admin/blog/new"><Plus className="w-5 h-5" /> New Article</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-grow w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background font-bold text-[11px]" />
        </div>
        <Button variant="outline" className="w-full md:w-auto h-14 rounded-2xl px-6 flex gap-2 border-none shadow-sm bg-background font-bold uppercase tracking-widest text-[10px]">
          <Filter className="w-4 h-4" /> All Categories
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-[10px] uppercase tracking-widest">
            Syncing content library...
          </div>
        ) : !adminRole ? (
          <div className="py-20 text-center text-muted-foreground font-bold uppercase tracking-widest text-[10px] animate-pulse">Verifying admin access...</div>
        ) : posts?.length === 0 ? (
          <Card className="p-16 md:p-24 text-center border-dashed border-2 bg-muted/20 rounded-[2rem] md:rounded-[3rem]">
            <FileText className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase">The library is empty</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto font-bold text-xs">Start sharing your safari expertise and travel tips with the world.</p>
            <Button asChild className="rounded-2xl h-12 px-8 font-bold uppercase tracking-widest text-[10px]">
              <Link href="/admin/blog/new">Create First Post</Link>
            </Button>
          </Card>
        ) : (
          posts?.map((post: any) => (
            <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-64 h-40 md:h-auto bg-muted relative overflow-hidden shrink-0">
                  <img 
                    src={post.coverImage || 'https://picsum.photos/seed/blog-fallback/600/600'} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`px-3 py-1 text-[8px] font-bold uppercase tracking-widest border-none shadow-md ${
                      post.status === 'PUBLISHED' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {post.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex-grow p-6 md:p-8 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="px-3 py-1 text-[8px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary border-none">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Button size="icon" variant="ghost" asChild className="rounded-xl h-9 w-9">
                          <Link href={`/admin/blog/${post.id}/edit`}><Edit className="w-3.5 h-3.5" /></Link>
                        </Button>
                        <Button size="icon" variant="ghost" asChild className="rounded-xl h-9 w-9">
                          <Link href={`/blog/${post.slug}`} target="_blank"><ExternalLink className="w-3.5 h-3.5" /></Link>
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => handleDelete(post.id)} className="rounded-xl h-9 w-9 text-destructive hover:bg-destructive/10">
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight uppercase truncate">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 mb-6 font-bold text-[11px] md:text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <div className="flex items-center gap-4 md:gap-8 text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" /> 
                        {isMounted ? new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '...'}
                      </span>
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3 md:w-3.5 md:h-3.5" /> {post.authorName}</span>
                    </div>
                    <Link href={`/admin/blog/${post.id}/edit`} className="flex items-center gap-1 text-[9px] font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest">
                      Edit Draft <ChevronRight className="w-3.5 h-3.5" />
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
