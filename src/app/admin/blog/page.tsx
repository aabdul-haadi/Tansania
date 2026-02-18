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
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function BlogList() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const blogQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'blogPosts'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: posts, isLoading } = useCollection(blogQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Are you sure you want to delete this post?')) return;
    try {
      await deleteDoc(doc(firestore, 'blogPosts', id));
      toast({ title: "Post Deleted", description: "The article has been removed from the savannah." });
    } catch (error) {
      toast({ variant: "destructive", title: "Delete Failed", description: "Check permissions or contact your system admin." });
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-muted-foreground mt-2 text-lg">Curating safari stories and expert travel advice.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild className="gap-2 rounded-2xl h-12 px-6">
            <Link href="/admin/ai-planner"><Sparkles className="w-4 h-4 text-primary" /> SEO Insights</Link>
          </Button>
          <Button asChild className="gap-2 rounded-2xl h-12 px-6 shadow-lg shadow-primary/20">
            <Link href="/admin/blog/new"><Plus className="w-5 h-5" /> New Article</Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search articles by title or category..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background" />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 flex gap-2 border-none shadow-sm bg-background">
          <Filter className="w-4 h-4" /> All Categories
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-xs uppercase tracking-widest">
            Syncing content library...
          </div>
        ) : posts?.length === 0 ? (
          <Card className="p-24 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <FileText className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2">The library is empty</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto">Start sharing your safari expertise and travel tips with the world.</p>
            <Button asChild className="rounded-2xl h-12 px-8">
              <Link href="/admin/blog/new">Create First Post</Link>
            </Button>
          </Card>
        ) : (
          posts?.map((post: any) => (
            <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-[2rem] bg-background">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-64 h-48 md:h-auto bg-muted relative overflow-hidden shrink-0">
                  <img 
                    src={post.coverImage || 'https://picsum.photos/seed/blog-fallback/600/600'} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-none shadow-md ${
                      post.status === 'PUBLISHED' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {post.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex-grow p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary border-none">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Button size="icon" variant="ghost" asChild className="rounded-xl h-10 w-10">
                          <Link href={`/admin/blog/${post.id}/edit`}><Edit className="w-4 h-4" /></Link>
                        </Button>
                        <Button size="icon" variant="ghost" asChild className="rounded-xl h-10 w-10">
                          <Link href={`/blog/${post.slug}`} target="_blank"><ExternalLink className="w-4 h-4" /></Link>
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => handleDelete(post.id)} className="rounded-xl h-10 w-10 text-destructive hover:bg-destructive/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 mb-6 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-muted">
                    <div className="flex items-center gap-8 text-[11px] text-muted-foreground font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" /> 
                        {isMounted ? new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '...'}
                      </span>
                      <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> {post.authorName}</span>
                    </div>
                    <Link href={`/admin/blog/${post.id}/edit`} className="flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors">
                      Edit Draft <ChevronRight className="w-4 h-4" />
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
