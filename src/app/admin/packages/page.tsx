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
  ArrowRight,
  Globe
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
    toast({ title: "Price Updated", description: "The new price is now synced across all site cards." });
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">Safari Catalog</h1>
          </div>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
            Global Master Pricing & Expedition Registry
          </p>
        </div>
        <Button className="rounded-xl h-14 px-8 font-bold uppercase tracking-widest text-[10px] shadow-xl">
          <Plus className="w-4 h-4 mr-2" /> New Expedition
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative group flex-grow">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input 
            placeholder="Search catalog by title or category..." 
            className="h-14 pl-14 rounded-2xl border-none bg-muted/20 shadow-inner font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex items-center gap-3 px-6 h-14 bg-muted/10 rounded-2xl border border-border">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Global Card Sync Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {isLoading ? (
          <div className="col-span-full py-20 text-center text-muted-foreground animate-pulse font-bold text-[9px] uppercase tracking-widest">
            Syncing catalog...
          </div>
        ) : packages?.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-muted">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-5" />
            <h3 className="text-2xl font-bold text-secondary uppercase tracking-tight">Catalog Empty</h3>
            <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-widest mt-2">Create expeditions to populate the master registry.</p>
          </div>
        ) : (
          packages?.map((pkg: any) => (
            <Card key={pkg.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-[2.5rem] bg-white flex flex-col border border-border/50">
              <div className="relative aspect-video overflow-hidden shrink-0">
                <img 
                  src={pkg.imageUrl || 'https://picsum.photos/seed/admin-pkg/600/400'} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <Badge className={cn(
                    "px-3 py-1 text-[8px] font-bold uppercase tracking-widest border-none shadow-md",
                    pkg.isPublished ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                  )}>
                    {pkg.isPublished ? 'Live' : 'Draft'}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-primary">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-bold">{pkg.rating || 4.9}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-destructive hover:bg-destructive/5 opacity-0 group-hover:opacity-100 transition-all" onClick={() => handleDelete(pkg.id)}><Trash2 className="w-4 h-4" /></Button>
                  </div>
                  <h3 className="font-headline text-lg md:text-xl font-bold text-secondary uppercase leading-tight line-clamp-2">{pkg.title}</h3>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase flex items-center gap-1.5"><Clock className="w-3 h-3" /> {pkg.durationDays} Tage</span>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">{pkg.category}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-muted flex items-center justify-between">
                  {editingId === pkg.id ? (
                    <div className="flex items-center gap-2 w-full">
                      <div className="relative flex-grow">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input 
                          type="number" 
                          className="h-10 pl-8 rounded-xl bg-muted/20 border-none font-bold text-sm" 
                          value={newPrice} 
                          onChange={(e) => setNewPrice(Number(e.target.value))}
                        />
                      </div>
                      <Button size="icon" className="h-10 w-10 rounded-xl shrink-0" onClick={() => handleUpdatePrice(pkg.id)}><Save className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl shrink-0" onClick={() => setEditingId(null)}><X className="w-4 h-4" /></Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col">
                        <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Master Price</p>
                        <p className="text-xl font-bold text-secondary tracking-tighter">€{pkg.startingPrice?.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 border-muted hover:border-primary/20 hover:text-primary transition-all" onClick={() => { setEditingId(pkg.id); setNewPrice(pkg.startingPrice); }}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="icon" className="rounded-xl h-10 w-10 shadow-lg" asChild>
                          <Link href={`/safaris/${pkg.slug}`} target="_blank"><ArrowRight className="w-4 h-4" /></Link>
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
