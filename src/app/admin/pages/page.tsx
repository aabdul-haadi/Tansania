"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Eye, 
  ExternalLink,
  RefreshCw,
  Globe,
  Settings,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
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
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function PagesRegistry() {
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newPage, setNewPage] = useState({ title: '', key: '', path: '' });

  const pagesQuery = useMemoFirebase(() => {
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
      toast({ title: "Page Registered", description: "You can now edit its dynamic sections." });
      router.push(`/admin/pages/${newPage.key}`);
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Could not register page." });
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Page Registry</h1>
          <p className="text-muted-foreground mt-2 text-lg">Manage sections and SEO for all your website routes.</p>
        </div>
        
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 rounded-2xl h-12 px-6">
              <Plus className="w-5 h-5" /> Register New Page
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[2.5rem] p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Register Content Page</DialogTitle>
              <DialogDescription className="text-base">
                Define the unique key and URL path for your new dynamic page.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="font-bold">Display Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g. About Our Agency" 
                  value={newPage.title}
                  onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="key" className="font-bold">Page Key (Doc ID)</Label>
                  <Input 
                    id="key" 
                    placeholder="e.g. about" 
                    value={newPage.key}
                    onChange={(e) => setNewPage({ ...newPage, key: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="path" className="font-bold">URL Path</Label>
                  <Input 
                    id="path" 
                    placeholder="e.g. /about" 
                    value={newPage.path}
                    onChange={(e) => setNewPage({ ...newPage, path: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setIsCreateOpen(false)} className="rounded-xl h-12 px-6">Cancel</Button>
              <Button onClick={handleCreatePage} disabled={!newPage.key || !newPage.title} className="rounded-xl h-12 px-6">Register Page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Find pages by title or route..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background" />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 border-none shadow-sm bg-background">Filters</Button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse">Syncing site map...</div>
        ) : pages?.length === 0 ? (
          <Card className="p-24 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2">Registry is empty</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto">Use the <strong>Initialize CMS</strong> button on the dashboard or register a page manually.</p>
          </Card>
        ) : (
          pages?.map((page: any) => (
            <Card key={page.id} className="border-none shadow-sm hover:shadow-md transition-all group rounded-[1.5rem] overflow-hidden">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg">{page.title}</h3>
                      <Badge className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border-none ${
                        page.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {page.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {page.sections?.length || 0} Sections</span>
                      <span className="flex items-center gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> {page.path}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right mr-4 hidden md:block">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Updated</p>
                    <p className="text-xs font-bold">{new Date(page.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                  </div>
                  <Button size="icon" variant="ghost" asChild className="rounded-xl h-12 w-12 opacity-0 group-hover:opacity-100 transition-all">
                    <Link href={page.path || '/'} target="_blank"><Eye className="w-5 h-5" /></Link>
                  </Button>
                  <Button asChild className="rounded-xl h-12 px-6 gap-2">
                    <Link href={`/admin/pages/${page.key}`}>
                      <Edit className="w-4 h-4" /> Manage Content
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
