
"use client";

import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Star,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc } from '@/firebase';
import { collection, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function PackagesManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  // Guard: Only fetch if authenticated and admin role is confirmed
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const packagesQuery = useMemoFirebase(() => {
    if (!firestore || !adminRole) return null;
    return query(collection(firestore, 'packages'), orderBy('createdAt', 'desc'));
  }, [firestore, adminRole]);

  const { data: packages, isLoading } = useCollection(packagesQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Permanently remove this package from the catalog?')) return;
    try {
      await deleteDoc(doc(firestore, 'packages', id));
      toast({ title: "Package Removed", description: "The safari has been archived." });
    } catch (error) {
      toast({ variant: "destructive", title: "Action Failed", description: "Check permissions." });
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Safari Catalog</h1>
          <p className="text-muted-foreground mt-2 text-lg">Managing the "Nile to Savannah" expedition portfolio.</p>
        </div>
        <Button className="gap-2 rounded-2xl h-12 px-6 shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" /> Create New Package
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search packages by title or destination..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background" />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 border-none shadow-sm bg-background">Filters</Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-xs tracking-widest uppercase">Fetching expeditions...</div>
        ) : !adminRole ? (
          <div className="py-20 text-center text-muted-foreground">Verifying admin access...</div>
        ) : packages?.length === 0 ? (
          <Card className="p-24 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <Package className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2">No packages registered</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto">Click "Initialize CMS" on the dashboard to seed sample packages.</p>
          </Card>
        ) : (
          packages?.map((pkg: any) => (
            <Card key={pkg.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-[2rem] bg-background">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-64 h-48 md:h-auto bg-muted relative overflow-hidden shrink-0">
                  <img 
                    src={pkg.mediaRefs?.[0] || 'https://picsum.photos/seed/pkg/600/400'} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-none shadow-md ${
                      pkg.isPublished ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {pkg.isPublished ? 'Live' : 'Draft'}
                    </Badge>
                  </div>
                </div>
                <div className="flex-grow p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary border-none">
                          {pkg.tier}
                        </Badge>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-xs font-bold">{pkg.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 md:opacity-0 group-hover:opacity-100 transition-all">
                        <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10"><Edit className="w-4 h-4" /></Button>
                        <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(pkg.id)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{pkg.title}</h3>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                       <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {pkg.durationDays} Days</span>
                       <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> From ${pkg.startingPrice}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-muted">
                    <div className="flex gap-2">
                      {pkg.categories?.slice(0, 3).map((cat: string) => (
                        <Badge key={cat} variant="outline" className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground border-muted">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-xs font-bold text-secondary gap-2 hover:bg-secondary/5 rounded-xl h-10">
                      Edit Details <Plus className="w-3 h-3" />
                    </Button>
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
