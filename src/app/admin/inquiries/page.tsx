
"use client";

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Mail, 
  Phone, 
  Calendar,
  ArrowUpRight,
  Trash2
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc } from '@/firebase';
import { collection, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function InquiriesManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Guard: Only fetch if authenticated and admin role is confirmed
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);
  
  const inquiriesQuery = useMemoFirebase(() => {
    if (!firestore || !adminRole) return null;
    return query(collection(firestore, 'inquiries'), orderBy('createdAt', 'desc'));
  }, [firestore, adminRole]);

  const { data: inquiries, isLoading } = useCollection(inquiriesQuery);

  const handleDelete = async (id: string) => {
    if (!firestore || !confirm('Permanently remove this inquiry?')) return;
    try {
      await deleteDoc(doc(firestore, 'inquiries', id));
      toast({ title: "Inquiry Deleted", description: "Record removed from CRM." });
    } catch (error) {
      toast({ variant: "destructive", title: "Action Failed", description: "Check permissions." });
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Lead Inquiries</h1>
          <p className="text-muted-foreground mt-2 text-lg">Managing the Nile to Savannah sales pipeline.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by name or email..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background" />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 border-none shadow-sm bg-background">Unread Only</Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground animate-pulse font-bold text-xs tracking-widest uppercase">Listening for leads...</div>
        ) : !adminRole ? (
          <div className="py-20 text-center text-muted-foreground">Verifying admin access...</div>
        ) : inquiries?.length === 0 ? (
          <Card className="p-24 text-center border-dashed border-2 bg-muted/20 rounded-[3rem]">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-10" />
            <h3 className="text-2xl font-bold mb-2">No inquiries yet</h3>
            <p className="text-muted-foreground mb-8 max-w-xs mx-auto">New leads from the contact form and trip planner will appear here.</p>
          </Card>
        ) : (
          inquiries?.map((inquiry: any) => (
            <Card key={inquiry.id} className="border-none shadow-sm hover:shadow-md transition-all group rounded-[2rem] overflow-hidden bg-background">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary font-bold text-lg shrink-0">
                      {inquiry.name?.[0]?.toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg">{inquiry.name}</h3>
                        <Badge className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border-none ${
                          inquiry.type === 'TRIP_PLANNER' ? 'bg-primary/10 text-primary' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {inquiry.type === 'TRIP_PLANNER' ? 'Trip Planner' : 'Contact'}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {inquiry.email}</span>
                        {inquiry.phone && <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {inquiry.phone}</span>}
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {isMounted ? new Date(inquiry.createdAt).toLocaleDateString() : '...'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11 text-destructive hover:bg-destructive/5 opacity-0 group-hover:opacity-100 transition-all" onClick={() => handleDelete(inquiry.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <Button className="rounded-xl h-11 px-6 gap-2">
                      Review Lead <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-muted">
                  <p className="text-sm text-muted-foreground line-clamp-2 italic font-light leading-relaxed">
                    "{inquiry.message || inquiry.preferences?.message || 'No specific message provided.'}"
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
