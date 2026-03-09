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
  RefreshCw,
  ArrowRight,
  Settings
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc, updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function PackagesManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState<number>(0);

  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const packagesQuery = useMemoFirebase(() => {
    if (!firestore || !adminRole) return null;
    return query(collection(firestore, 'packages'), orderBy('updatedAt', 'desc'));
  }, [firestore, adminRole]);

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
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-secondary uppercase">Safari Catalog</h1>
          <p className="text-muted-foreground mt-1 text-sm font-bold uppercase tracking-widest">Pricing & Expedition Management</p>
        </div>
        <Button className="gap-2 rounded-xl h-12 px-8 font-bold uppercase tracking-widest shadow-xl shadow-primary/20">
          <Plus className="w-5 h-5" /> New Expedition
        </Button>
      </div>

      <div className="relative group max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search packages..." className="h-12 pl-12 rounded-xl border-none bg-white shadow-sm font-bold uppercase tracking-widest text-xs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {isLoading ? (
          <div className="col-span-full py-20 text-center text-muted-foreground animate-pulse font-bold text-[10px] uppercase tracking-widest">
            Syncing Expedition Registry...
          </div>
        ) : packages?.length === 0 ? (
          <div className="col-span-full py-24 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-muted">
            <Package className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">No Expeditions Registered</h3>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-2">Initialize CMS data on the dashboard to start.</p>
          </div>
        ) : (
          packages?.map((pkg: any) => (
            <Card key={pkg.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-[2rem] bg-white flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={pkg.imageUrl || 'https://picsum.photos/seed/admin-pkg/600/400'} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <Badge className={cn(
                    "px-3 py-1 text-[8px] font-bold uppercase tracking-widest border-none shadow-lg",
                    pkg.isPublished ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                  )}>
                    {pkg.isPublished ? 'Live' : 'Draft'}
                  </Badge>
                  <Badge variant="outline" className="bg-white/90 backdrop-blur-md border-none text-secondary text-[8px] font-bold uppercase tracking-widest shadow-sm">
                    {pkg.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-bold">{pkg.rating || 4.9}</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-destructive hover:bg-destructive/5" onClick={() => handleDelete(pkg.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
                    </div>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-secondary uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">{pkg.title}</h3>
                  <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-2 flex items-center gap-2"><Clock className="w-3 h-3" /> {pkg.durationDays} Days Duration</p>
                </div>

                <div className="pt-6 border-t border-muted flex items-center justify-between">
                  {editingId === pkg.id ? (
                    <div className="flex items-center gap-2 w-full">
                      <div className="relative flex-grow">
                        <DollarSign className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary" />
                        <Input 
                          type="number" 
                          className="h-10 pl-8 rounded-lg bg-muted/30 border-none font-bold text-sm" 
                          value={newPrice} 
                          onChange={(e) => setNewPrice(Number(e.target.value))}
                        />
                      </div>
                      <Button size="icon" className="h-10 w-10 rounded-lg shrink-0" onClick={() => handleUpdatePrice(pkg.id)}><Save className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="h-10 w-10 rounded-lg shrink-0" onClick={() => setEditingId(null)}><X className="w-4 h-4" /></Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col">
                        <p className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Starting From</p>
                        <p className="text-xl font-bold text-secondary tracking-tighter">€{pkg.startingPrice?.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 border-muted hover:border-primary/20 hover:text-primary transition-all" onClick={() => { setEditingId(pkg.id); setNewPrice(pkg.startingPrice); }}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="icon" className="rounded-xl h-10 w-10 shadow-lg shadow-primary/10" asChild>
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
