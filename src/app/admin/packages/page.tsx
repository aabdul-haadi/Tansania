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
  RefreshCw
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc, updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function PackagesManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState<number>(0);

  // Guard: Only fetch if authenticated and admin role is confirmed
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const packagesQuery = useMemoFirebase(() => {
    if (!firestore || !adminRole) return null;
    return query(collection(firestore, 'packages'), orderBy('updatedAt', 'desc'));
  }, [firestore, adminRole]);

  const { data: packages, isLoading } = useCollection(packagesQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Permanently remove this package from the catalog?')) return;
    
    // CRITICAL: Non-blocking delete as per guidelines
    deleteDocumentNonBlocking(doc(firestore, 'packages', id));
    toast({ title: "Package Removed", description: "The safari has been archived." });
  };

  const handleUpdatePrice = async (id: string) => {
    if (!firestore || !newPrice) return;
    
    // CRITICAL: Non-blocking update as per guidelines
    updateDocumentNonBlocking(doc(firestore, 'packages', id), {
      startingPrice: Number(newPrice),
      updatedAt: serverTimestamp()
    });
    
    setEditingId(null);
    toast({ title: "Price Updated", description: "The new price is now live across the website." });
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight uppercase">Safari Catalog</h1>
          <p className="text-muted-foreground mt-2 text-lg font-bold">Manage expeditions and global pricing.</p>
        </div>
        <Button className="gap-2 rounded-2xl h-12 px-6 shadow-lg shadow-primary/20 font-bold uppercase tracking-widest">
          <Plus className="w-5 h-5" /> New Expedition
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search packages..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background font-bold" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-xs tracking-widest uppercase">Fetching expeditions...</div>
        ) : !adminRole ? (
          <div className="py-20 text-center text-muted-foreground font-bold uppercase text-xs tracking-widest">Verifying admin access...</div>
        ) : packages?.length === 0 ? (
          <Card className="p-24 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <Package className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2 uppercase">No packages registered</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto font-bold">Click "Initialize CMS" on the dashboard to seed global packages.</p>
          </Card>
        ) : (
          packages?.map((pkg: any) => (
            <Card key={pkg.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden rounded-[2rem] bg-background">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-64 h-48 md:h-auto bg-muted relative overflow-hidden shrink-0">
                  <img 
                    src={pkg.imageUrl || 'https://picsum.photos/seed/pkg/600/400'} 
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
                          {pkg.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-xs font-bold">{pkg.rating || 4.9}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 md:opacity-0 group-hover:opacity-100 transition-all">
                        <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(pkg.id)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight uppercase">{pkg.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-6 mt-4">
                       <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-bold uppercase tracking-widest">
                         <Clock className="w-4 h-4" /> {pkg.durationDays} Days
                       </div>
                       
                       {editingId === pkg.id ? (
                         <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-xl">
                           <DollarSign className="w-4 h-4 text-primary" />
                           <Input 
                             type="number" 
                             className="w-24 h-8 bg-transparent border-none font-bold" 
                             value={newPrice} 
                             onChange={(e) => setNewPrice(Number(e.target.value))}
                           />
                           <Button size="icon" className="h-8 w-8 rounded-lg" onClick={() => handleUpdatePrice(pkg.id)}><Save className="w-3 h-3" /></Button>
                           <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg" onClick={() => setEditingId(null)}><X className="w-3 h-3" /></Button>
                         </div>
                       ) : (
                         <button 
                           onClick={() => { setEditingId(pkg.id); setNewPrice(pkg.startingPrice); }}
                           className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all group/price"
                         >
                           <DollarSign className="w-4 h-4" />
                           <span className="font-bold">€{pkg.startingPrice.toLocaleString()}</span>
                           <Edit className="w-3 h-3 opacity-0 group-hover/price:opacity-100 transition-opacity" />
                         </button>
                       )}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-muted mt-6">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global Sync ID: {pkg.slug}</p>
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
