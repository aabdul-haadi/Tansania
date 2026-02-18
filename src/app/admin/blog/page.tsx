"use client";

import React from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Filter,
  Calendar,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function BlogList() {
  const firestore = useFirestore();
  const blogQuery = React.useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'blogPosts'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: posts, isLoading } = useCollection(blogQuery);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground mt-1">Create and publish safari stories and tips.</p>
        </div>
        <Button asChild className="gap-2 rounded-full">
          <Link href="/admin/blog/new"><Plus className="w-4 h-4" /> New Article</Link>
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10 h-12 rounded-xl" />
        </div>
        <Button variant="outline" className="h-12 rounded-xl flex gap-2">
          <Filter className="w-4 h-4" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <p className="text-center py-12 text-muted-foreground">Fetching articles...</p>
        ) : posts?.length === 0 ? (
          <Card className="p-20 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="text-lg font-bold">No articles yet</p>
            <p className="text-muted-foreground mb-6">Start sharing your safari expertise with the world.</p>
            <Button asChild className="rounded-full">
              <Link href="/admin/blog/new">Create First Post</Link>
            </Button>
          </Card>
        ) : posts?.map((post: any) => (
          <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className="w-full md:w-48 h-48 md:h-auto bg-muted relative overflow-hidden">
                <img 
                  src={post.coverImage || 'https://picsum.photos/seed/blog/400/400'} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-grow p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                      post.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" asChild>
                      <Link href={`/admin/blog/${post.id}/edit`}><Edit className="w-4 h-4" /></Link>
                    </Button>
                    <Button size="icon" variant="ghost" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.createdAt).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.authorName}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}