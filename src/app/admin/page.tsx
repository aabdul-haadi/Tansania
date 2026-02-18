"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  CalendarCheck, 
  Eye, 
  TrendingUp,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Bookings', value: '48', icon: CalendarCheck, trend: '+12% this month' },
    { label: 'New Inquiries', value: '15', icon: MessageSquare, trend: '5 pending' },
    { label: 'Blog Posts', value: '32', icon: FileText, trend: '4 published recently' },
    { label: 'Active Users', value: '1,240', icon: Users, trend: '+8% vs last week' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your safari agency performance.</p>
        </div>
        <Button asChild variant="outline" className="gap-2">
          <Link href="/" target="_blank">
            <Eye className="w-4 h-4" /> View Site
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" /> {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest bookings and content updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                      <p className="font-medium text-sm">New booking for "Luxury Serengeti Migration"</p>
                      <p className="text-xs text-muted-foreground">Ahmed Mansour • 2 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Confirmed</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start gap-3" variant="outline">
              <Link href="/admin/pages/home">Edit Home Page</Link>
            </Button>
            <Button asChild className="w-full justify-start gap-3" variant="outline">
              <Link href="/admin/blog/new">Write New Blog Post</Link>
            </Button>
            <Button asChild className="w-full justify-start gap-3" variant="outline">
              <Link href="/admin/inquiries">Review Inquiries</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: string }) {
  return (
    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
      variant === "outline" ? "border border-muted text-muted-foreground" : "bg-primary text-primary-foreground"
    }`}>
      {children}
    </span>
  );
}