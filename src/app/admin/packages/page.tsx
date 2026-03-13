"use client";

import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Star,
  Clock,
  DollarSign,
  Save,
  X,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc, updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PackagesManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState<number>(0);

  const canFetch = !!firestore && !!user;

  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const packagesQuery = useMemoFirebase(() => {
    if (!canFetch || !adminRole) return null;
    return query(collection(firestore, 'packages'), orderBy('updatedAt', 'desc'));
  }, [firestore, adminRole, canFetch]);

  const { data: packages, isLoading } = useCollection(packagesQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Permanently remove this package?')) return;
    deleteDocumentNonBlocking(doc(firestore, 'packages', id));
    toast({ title: "Package Removed", description: "The safari has been archived." });
  };

  const handleUpdatePrice = async (id: string) => {
    if (!firestore || !newPrice) return;
    updateDocumentNonBlocking(doc(firestore, 'packages', id), {
      startingPrice: Number(newPrice),
      updatedAt: serverTimestamp()
    });
    setEditingId(null);
    toast({ title: "Price Updated", description: "The new price is now live." });
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-secondary uppercase">Safari Catalog</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">Pricing & Expedition Registry</p>
        </div>
        <Button className="gap-2 rounded-xl h-10 px-6 font-bold uppercase tracking-widest text-[9px] shadow-lg">
          <Plus className="w-4 h-4" /> New Expedition
        </Button>
      </div>

      <div className="relative group max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search catalog..." className="h-11 pl-11 rounded-xl border-none bg-white shadow-sm font-bold uppercase tracking-widest text-[10px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full py-20 text-center text-muted-foreground animate-pulse font-bold text-[9px] uppercase tracking-widest">
            Syncing catalog...
          </div>
        ) : packages?.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-muted">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-5" />
            <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">No Expeditions Found</h3>
            <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-widest mt-2">Initialize CMS to populate catalog.</p>
          </div>
        ) : (
          packages?.map((pkg: any) => (
            <Card key={pkg.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-2xl bg-white flex flex-col">
              <div className="relative aspect-video overflow-hidden shrink-0">
                <img 
                  src={pkg.imageUrl || 'https://picsum.photos/seed/admin-pkg/600/400'} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <Badge className={cn(
                    "px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest border-none shadow-md",
                    pkg.isPublished ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                  )}>
                    {pkg.isPublished ? 'Live' : 'Draft'}
                  </Badge>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span className="text-[9px] font-bold">{pkg.rating || 4.9}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg text-destructive hover:bg-destructive/5 opacity-0 group-hover:opacity-100 transition-all" onClick={() => handleDelete(pkg.id)}><Trash2 className="w-3 h-3" /></Button>
                  </div>
                  <h3 className="font-headline text-base font-bold text-secondary uppercase leading-tight line-clamp-2">{pkg.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[8px] font-bold text-muted-foreground uppercase flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> {pkg.durationDays}d</span>
                    <span className="text-[8px] font-bold text-primary uppercase tracking-widest">{pkg.category}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-muted flex items-center justify-between">
                  {editingId === pkg.id ? (
                    <div className="flex items-center gap-1.5 w-full">
                      <div className="relative flex-grow">
                        <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-primary" />
                        <Input 
                          type="number" 
                          className="h-8 pl-6 rounded-lg bg-muted/30 border-none font-bold text-[11px]" 
                          value={newPrice} 
                          onChange={(e) => setNewPrice(Number(e.target.value))}
                        />
                      </div>
                      <Button size="icon" className="h-8 w-8 rounded-lg shrink-0" onClick={() => handleUpdatePrice(pkg.id)}><Save className="w-3.5 h-3.5" /></Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg shrink-0" onClick={() => setEditingId(null)}><X className="w-3.5 h-3.5" /></Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col">
                        <p className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest">Pricing ab</p>
                        <p className="text-lg font-bold text-secondary tracking-tighter">€{pkg.startingPrice?.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-1.5">
                        <Button variant="outline" size="icon" className="rounded-xl h-9 w-9 border-muted hover:border-primary/20 hover:text-primary transition-all" onClick={() => { setEditingId(pkg.id); setNewPrice(pkg.startingPrice); }}>
                          <Edit className="w-3.5 h-3.5" />
                        </Button>
                        <Button size="icon" className="rounded-xl h-9 w-9 shadow-lg" asChild>
                          <Link href={`/safaris/${pkg.slug}`} target="_blank"><ArrowRight className="w-3.5 h-3.5" /></Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
