"use client";

import React, { useState, useEffect } from 'react';
import { 
  CalendarCheck, 
  Search, 
  Filter, 
  MoreHorizontal,
  User,
  CheckCircle2,
  Clock,
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
import { cn } from '@/lib/utils';

export default function BookingsManagement() {
  const { user } = useUser();
  const firestore = useFirestore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);

  const bookingsQuery = useMemoFirebase(() => {
    if (!firestore || !adminRole) return null;
    return query(collection(firestore, 'bookings'), orderBy('createdAt', 'desc'));
  }, [firestore, adminRole]);

  const { data: bookings, isLoading } = useCollection(bookingsQuery);

  const getStatusBadge = (status: string) => {
    const s = status.toUpperCase();
    switch (s) {
      case 'CONFIRMED': return <Badge className="bg-green-500 text-white border-none px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-widest shadow-sm">Confirmed</Badge>;
      case 'PENDING': return <Badge className="bg-yellow-500 text-white border-none px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-widest shadow-sm">Pending</Badge>;
      case 'CANCELLED': return <Badge className="bg-red-500 text-white border-none px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-widest shadow-sm">Cancelled</Badge>;
      default: return <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-secondary uppercase">Expedition Bookings</h1>
          <p className="text-muted-foreground mt-1 text-sm font-bold uppercase tracking-widest">Active Journeys Registry</p>
        </div>
        <Button variant="outline" className="rounded-xl h-12 px-6 font-bold uppercase tracking-widest text-[10px] border-muted">Export CSV</Button>
      </div>

      <div className="flex items-center gap-4 max-w-2xl">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Find booking by ID or user..." className="h-12 pl-12 rounded-xl border-none bg-white shadow-sm font-bold text-xs uppercase tracking-widest" />
        </div>
        <Button variant="outline" className="h-12 rounded-xl px-6 border-none bg-white shadow-sm font-bold uppercase tracking-widest text-[10px]">Filters</Button>
      </div>

      <Card className="border-none shadow-sm rounded-[2rem] bg-white overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/10 border-b border-border">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="font-bold py-5 px-8 text-[9px] uppercase tracking-widest">Booking ID</TableHead>
                <TableHead className="font-bold text-[9px] uppercase tracking-widest">Travelers</TableHead>
                <TableHead className="font-bold text-[9px] uppercase tracking-widest">Departure</TableHead>
                <TableHead className="font-bold text-[9px] uppercase tracking-widest">Investment</TableHead>
                <TableHead className="font-bold text-[9px] uppercase tracking-widest">Status</TableHead>
                <TableHead className="text-right px-8"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-20 text-center text-muted-foreground animate-pulse font-bold text-[10px] uppercase tracking-widest">Synchronizing records...</TableCell>
                </TableRow>
              ) : bookings?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-24 text-center">
                    <Database className="w-12 h-12 mx-auto mb-4 opacity-5" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">No bookings found in registry.</p>
                  </TableCell>
                </TableRow>
              ) : (
                bookings?.map((booking: any) => (
                  <TableRow key={booking.id} className="border-border hover:bg-muted/10 transition-colors">
                    <TableCell className="py-5 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-xs uppercase tracking-tight">#{booking.id.slice(-6).toUpperCase()}</p>
                          <p className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest truncate max-w-[100px]">{booking.userId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-xs uppercase tracking-widest">{booking.travelers} Persons</TableCell>
                    <TableCell className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {isMounted ? new Date(booking.departureDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '...'}
                    </TableCell>
                    <TableCell className="font-bold text-sm text-secondary tracking-tighter">€{booking.totalPrice.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right px-8">
                      <Button variant="ghost" size="icon" className="rounded-lg h-9 w-9"><ArrowRight className="w-4 h-4 text-muted-foreground" /></Button>
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
