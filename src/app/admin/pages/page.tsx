
"use client";

import React from 'react';
import { 
  Search, 
  Edit, 
  ExternalLink,
  Globe,
  RefreshCw,
  Layout
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query } from 'firebase/firestore';

export default function PagesRegistry() {
  const { user } = useUser();
  const firestore = useFirestore();

  // Simplified query to avoid index issues during dev
  const pagesQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(collection(firestore, 'pages'));
  }, [firestore, user]);

  const { data: pages, isLoading } = useCollection(pagesQuery);

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Content Registry</h1>
          <p className="text-muted-foreground mt-2 text-lg">Dynamic pages registered via the EditableContent component.</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-2xl h-12 px-6" onClick={() => window.location.reload()}>
          <RefreshCw className="w-4 h-4" /> Sync Code
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Filter registered pages..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-xs uppercase tracking-widest">Scanning codebase...</div>
        ) : pages?.length === 0 ? (
          <Card className="p-24 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <Layout className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2">No sections registered yet</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto">Add an <code>&lt;EditableContent /&gt;</code> component to any page.</p>
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
                      <span className="flex items-center gap-1.5"><Layout className="w-3.5 h-3.5" /> {Object.keys(page.sections || {}).length} Editable Regions</span>
                      <span className="flex items-center gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> {page.path}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
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
