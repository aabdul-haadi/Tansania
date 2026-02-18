"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Eye, 
  ExternalLink
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, orderBy, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function PagesRegistry() {
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newPage, setNewPage] = useState({ title: '', key: '', path: '' });

  const pagesQuery = React.useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'pages'), orderBy('updatedAt', 'desc'));
  }, [firestore]);

  const { data: pages, isLoading } = useCollection(pagesQuery);

  const handleCreatePage = async () => {
    if (!firestore || !newPage.key) return;
    try {
      const docRef = doc(firestore, 'pages', newPage.key);
      await setDoc(docRef, {
        ...newPage,
        status: 'DRAFT',
        updatedAt: new Date().toISOString(),
        sections: [],
        seo: { title: newPage.title, description: '' }
      });
      setIsCreateOpen(false);
      toast({ title: "Page Created", description: "Taking you to the editor..." });
      router.push(`/admin/pages/${newPage.key}`);
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Could not create page." });
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Page Registry</h1>
          <p className="text-muted-foreground mt-1">Manage dynamic content and SEO for every route.</p>
        </div>
        
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 rounded-full">
              <Plus className="w-4 h-4" /> Create New Page
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Page</DialogTitle>
              <DialogDescription>
                Define the key and path for your new content page.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Page Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g. About Us" 
                  value={newPage.title}
                  onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="key">Unique Key (Doc ID)</Label>
                <Input 
                  id="key" 
                  placeholder="e.g. about" 
                  value={newPage.key}
                  onChange={(e) => setNewPage({ ...newPage, key: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="path">URL Path</Label>
                <Input 
                  id="path" 
                  placeholder="e.g. /about" 
                  value={newPage.path}
                  onChange={(e) => setNewPage({ ...newPage, path: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
              <Button onClick={handleCreatePage} disabled={!newPage.key || !newPage.title}>Create Page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search pages by title or path..." className="pl-10 h-12 rounded-xl" />
        </div>
        <Button variant="outline" className="h-12 rounded-xl">Filters</Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 border-b">
                <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">Page Title &amp; Path</th>
                <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">Key</th>
                <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">Status</th>
                <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">Last Updated</th>
                <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading ? (
                <tr><td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">Loading pages...</td></tr>
              ) : pages?.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">No pages found. Create your first page!</td></tr>
              ) : pages?.map((page: any) => (
                <tr key={page.id} className="hover:bg-muted/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{page.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          {page.path} <ExternalLink className="w-3 h-3" />
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{page.key}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      page.status === 'PUBLISHED' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-muted-foreground">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" asChild>
                        <Link href={`/admin/pages/${page.key}`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <Link href={page.path || '/'} target="_blank">
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
