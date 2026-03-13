"use client";

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Mail, 
  Calendar,
  Trash2,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function InquiriesManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const canFetch = !!firestore && !!user;

  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const inquiriesQuery = useMemoFirebase(() => {
    if (!canFetch || !adminRole) return null;
    return query(collection(firestore, 'inquiries'), orderBy('createdAt', 'desc'));
  }, [firestore, adminRole, canFetch]);

  const { data: inquiries, isLoading } = useCollection(inquiriesQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Permanently remove lead?')) return;
    deleteDocumentNonBlocking(doc(firestore, 'inquiries', id));
    toast({ title: "Lead Deleted", description: "CRM record removed." });
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-secondary uppercase">Lead Inquiries</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">Nile to Savannah Pipeline</p>
        </div>
      </div>

      <div className="relative group max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search name or email..." className="h-11 pl-11 rounded-xl border-none bg-white shadow-sm font-bold text-[10px] uppercase tracking-widest" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-[9px] uppercase tracking-widest">Syncing pipeline...</div>
        ) : inquiries?.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-muted">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-5" />
            <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">No Active Leads</h3>
            <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-widest mt-2">New requests will appear here.</p>
          </div>
        ) : (
          inquiries?.map((inquiry: any) => (
            <Card key={inquiry.id} className="border-none shadow-sm hover:shadow-md transition-all group rounded-xl bg-white">
              <CardContent className="p-4 md:p-5">
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
                  <div className="flex gap-4 min-w-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-sm shrink-0 uppercase shadow-sm">
                      {inquiry.name?.[0]}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xs md:text-sm text-secondary uppercase truncate max-w-[150px]">{inquiry.name}</h3>
                        <Badge className={cn(
                          "px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest border-none shadow-sm",
                          inquiry.type === 'TRIP_PLANNER' ? "bg-primary text-white" : "bg-blue-500 text-white"
                        )}>
                          {inquiry.type === 'TRIP_PLANNER' ? 'Planner' : 'Contact'}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-[8px] font-bold text-muted-foreground uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary" /> {inquiry.email}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-primary" /> {isMounted ? new Date(inquiry.createdAt).toLocaleDateString() : '...'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 w-full md:w-auto justify-end">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-destructive hover:bg-destructive/5" onClick={() => handleDelete(inquiry.id)}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="outline" className="rounded-lg h-8 px-3 gap-1.5 font-bold uppercase tracking-widest text-[8px] border-muted">
                      Review <ArrowUpRight className="w-3 h-3" />
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
