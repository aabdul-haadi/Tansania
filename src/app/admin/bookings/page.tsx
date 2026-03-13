"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  ArrowRight,
  Database
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';

export default function BookingsManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const canFetch = !!firestore && !!user;

  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);

  const bookingsQuery = useMemoFirebase(() => {
    if (!canFetch || !adminRole) return null;
    return query(collection(firestore, 'bookings'), orderBy('createdAt', 'desc'));
  }, [firestore, adminRole, canFetch]);

  const { data: bookings, isLoading } = useCollection(bookingsQuery);

  const getStatusBadge = (status: string) => {
    const s = status.toUpperCase();
    switch (s) {
      case 'CONFIRMED': return <Badge className="bg-green-500 text-white border-none px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest shadow-sm">Confirmed</Badge>;
      case 'PENDING': return <Badge className="bg-yellow-500 text-white border-none px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest shadow-sm">Pending</Badge>;
      case 'CANCELLED': return <Badge className="bg-red-500 text-white border-none px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest shadow-sm">Cancelled</Badge>;
      default: return <Badge variant="outline" className="text-[7px] font-bold uppercase tracking-widest px-2 py-0.5">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-secondary uppercase">Expedition Registry</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">Active Bookings Database</p>
        </div>
        <Button variant="outline" className="rounded-xl h-10 px-5 font-bold uppercase tracking-widest text-[9px] border-muted">Export Manifest</Button>
      </div>

      <div className="relative group max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Filter by ID or Traveler..." className="h-11 pl-11 rounded-xl border-none bg-white shadow-sm font-bold text-[10px] uppercase tracking-widest" />
      </div>

      <Card className="border-none shadow-sm rounded-2xl bg-white overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/10">
              <TableRow className="hover:bg-transparent border-border">
                <TableHead className="font-bold py-4 px-6 text-[8px] uppercase tracking-widest">Reference</TableHead>
                <TableHead className="font-bold text-[8px] uppercase tracking-widest">Travelers</TableHead>
                <TableHead className="font-bold text-[8px] uppercase tracking-widest">Departure</TableHead>
                <TableHead className="font-bold text-[8px] uppercase tracking-widest">Value</TableHead>
                <TableHead className="font-bold text-[8px] uppercase tracking-widest">Status</TableHead>
                <TableHead className="text-right px-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-20 text-center text-muted-foreground animate-pulse font-bold text-[9px] uppercase tracking-widest">Syncing registry...</TableCell>
                </TableRow>
              ) : bookings?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-20 text-center">
                    <Database className="w-10 h-10 mx-auto mb-4 opacity-5" />
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Registry empty.</p>
                  </TableCell>
                </TableRow>
              ) : (
                bookings?.map((booking: any) => (
                  <TableRow key={booking.id} className="border-border hover:bg-muted/5 transition-colors">
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                          <User className="w-3 h-3" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[10px] uppercase tracking-tight truncate">#{booking.id.slice(-6).toUpperCase()}</p>
                          <p className="text-[7px] text-muted-foreground font-bold uppercase tracking-widest truncate max-w-[60px]">{booking.userId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-[10px] uppercase tracking-widest">{booking.travelers} Pers</TableCell>
                    <TableCell className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                      {isMounted ? new Date(booking.departureDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : '...'}
                    </TableCell>
                    <TableCell className="font-bold text-[11px] text-secondary tracking-tighter whitespace-nowrap">€{booking.totalPrice.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right px-6">
                      <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8"><ArrowRight className="w-3.5 h-3.5" /></Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
