"use client";

import React from 'react';
import { 
  CalendarCheck, 
  Search, 
  Filter, 
  MoreHorizontal,
  User,
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function BookingsManagement() {
  const firestore = useFirestore();
  const bookingsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'bookings'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: bookings, isLoading } = useCollection(bookingsQuery);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'CONFIRMED': return <Badge className="bg-green-100 text-green-700 border-none px-3">Confirmed</Badge>;
      case 'PENDING': return <Badge className="bg-yellow-100 text-yellow-700 border-none px-3">Pending</Badge>;
      case 'CANCELLED': return <Badge className="bg-red-100 text-red-700 border-none px-3">Cancelled</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Expedition Bookings</h1>
          <p className="text-muted-foreground mt-2 text-lg">Tracking active journeys and confirmed travelers.</p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="rounded-2xl h-12 px-6">Export CSV</Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Find booking by ID or user name..." className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-background" />
        </div>
        <Button variant="outline" className="h-14 rounded-2xl px-6 border-none shadow-sm bg-background">All Statuses</Button>
      </div>

      <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="hover:bg-transparent border-muted">
                <TableHead className="font-bold py-6 px-8">Booking Details</TableHead>
                <TableHead className="font-bold">Travelers</TableHead>
                <TableHead className="font-bold">Departure</TableHead>
                <TableHead className="font-bold">Total Price</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="text-right px-8"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-20 text-center text-muted-foreground animate-pulse font-bold text-xs uppercase tracking-widest">Synchronizing records...</TableCell>
                </TableRow>
              ) : bookings?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-20 text-center text-muted-foreground">No bookings found in the database.</TableCell>
                </TableRow>
              ) : (
                bookings?.map((booking: any) => (
                  <TableRow key={booking.id} className="border-muted hover:bg-muted/10 transition-colors">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Booking #{booking.id.slice(-6).toUpperCase()}</p>
                          <p className="text-xs text-muted-foreground font-medium">{booking.userId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-sm">{booking.travelers} Persons</TableCell>
                    <TableCell className="text-sm font-medium">
                      {new Date(booking.departureDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </TableCell>
                    <TableCell className="font-bold text-sm text-secondary">${booking.totalPrice.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right px-8">
                      <Button variant="ghost" size="icon" className="rounded-xl"><MoreHorizontal className="w-4 h-4" /></Button>
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
