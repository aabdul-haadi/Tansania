"use client";

import React from 'react';
import { 
  FileText, 
  Plus, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogList() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-border pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter uppercase text-secondary leading-none">Journal Registry</h1>
          <p className="text-muted-foreground mt-2 text-[10px] font-bold uppercase tracking-[0.4em]">Editorial & Narrative Management</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" asChild className="flex-1 md:flex-none h-12 px-6 font-bold uppercase tracking-widest text-[10px] rounded-xl">
            <Link href="/admin/ai-planner"><Sparkles className="w-4 h-4 mr-2 text-primary" /> SEO Audit</Link>
          </Button>
          <Button asChild className="flex-1 md:flex-none h-12 px-8 shadow-xl font-bold uppercase tracking-widest text-[10px] rounded-xl border-none">
            <Link href="/admin/blog/new"><Plus className="w-4 h-4 mr-2" /> New Entry</Link>
          </Button>
        </div>
      </div>

      <div className="py-24 text-center bg-muted/5 rounded-[3rem] border-2 border-dashed border-muted/50 flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border border-border">
          <FileText className="w-10 h-10 text-primary opacity-20" />
        </div>
        <h3 className="text-2xl font-headline font-bold text-secondary uppercase tracking-tight mb-4">Registry Interface Offline</h3>
        <p className="text-muted-foreground font-bold text-[10px] md:text-sm uppercase tracking-widest max-w-md mx-auto leading-relaxed mb-10">
          Journal listing is handled via the primary Content Management System. Please use the "New Entry" trigger to draft new safari stories.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="rounded-xl h-14 px-10 font-bold uppercase tracking-widest text-[10px] border-none shadow-2xl">
            <Link href="/blog" target="_blank">View Live Journal <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}