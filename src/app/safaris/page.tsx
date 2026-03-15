"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, Zap, CloudSun, LayoutGrid, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { cn } from '@/lib/utils';

export default function SafarisPage() {
  const firestore = useFirestore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true), orderBy('updatedAt', 'desc'));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const filteredPackages = (packages || []).filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      <section className="bg-white pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-secondary leading-[0.9] uppercase tracking-tighter">Savannen-<br /><span className="text-primary">Kollektion</span></h1>
            <div className="w-full lg:w-96"><Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Region oder Tierart..." className="h-14 md:h-16 rounded-2xl border-none bg-muted/20" /></div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredPackages.map((pkg) => (<PackageCard key={pkg.id} pkg={pkg} />))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
