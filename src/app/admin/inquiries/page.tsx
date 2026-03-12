"use client";

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Mail, 
  Phone, 
  Calendar,
  ArrowRight,
  Trash2,
  Database,
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
    if (!firestore || !confirm('Permanently remove this lead?')) return;
    deleteDocumentNonBlocking(doc(firestore, 'inquiries', id));
    toast({ title: "Lead Deleted", description: "Record removed from CRM." });
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-secondary uppercase">Lead Inquiries</h1>
          <p className="text-muted-foreground mt-1 text-sm font-bold uppercase tracking-widest">Nile to Savannah Pipeline</p>
        </div>
      </div>

      <div className="relative group max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search by name or email..." className="h-12 pl-12 rounded-xl border-none bg-white shadow-sm font-bold text-xs uppercase tracking-widest" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-[10px] uppercase tracking-widest">Syncing sales pipeline...</div>
        ) : inquiries?.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-[2rem] md:rounded-[2.5rem] border-2 border-dashed border-muted">
            <MessageSquare className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-xl font-bold text-secondary uppercase">No leads in pipeline</h3>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-2">New requests from the website will appear here.</p>
          </div>
        ) : (
          inquiries?.map((inquiry: any) => (
            <Card key={inquiry.id} className="border-none shadow-sm hover:shadow-md transition-all group rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                  <div className="flex gap-4 md:gap-5 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-base md:text-lg shrink-0 uppercase shadow-sm">
                      {inquiry.name?.[0]}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-sm md:text-base text-secondary uppercase tracking-tight truncate">{inquiry.name}</h3>
                        <Badge className={cn(
                          "px-2 py-0.5 text-[7px] md:text-[8px] font-bold uppercase tracking-widest border-none",
                          inquiry.type === 'TRIP_PLANNER' ? "bg-primary text-white" : "bg-blue-500 text-white"
                        )}>
                          {inquiry.type === 'TRIP_PLANNER' ? 'Planner' : 'Contact'}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[8px] md:text-[9px] text-muted-foreground font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 md:w-3.5 md:h-3.5" /> {inquiry.email}</span>
                        {inquiry.phone && <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 md:w-3.5 md:h-3.5" /> {inquiry.phone}</span>}
                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" /> {isMounted ? new Date(inquiry.createdAt).toLocaleDateString() : '...'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg text-destructive hover:bg-destructive/5" onClick={() => handleDelete(inquiry.id)}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="outline" className="rounded-xl h-9 px-4 gap-2 font-bold uppercase tracking-widest text-[8px] border-muted">
                      Review Lead <ArrowUpRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-muted">
                  <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-relaxed line-clamp-2">
                    {inquiry.message || inquiry.preferences?.message || 'No additional notes provided.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
