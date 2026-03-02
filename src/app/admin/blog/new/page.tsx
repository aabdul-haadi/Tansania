"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function NewBlogPost() {
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleSave = async (data: any) => {
    if (!firestore) return;
    
    // CRITICAL: Initiating non-blocking document creation as per guidelines
    addDocumentNonBlocking(collection(firestore, 'blogPosts'), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    
    toast({ title: "Article Created", description: "Your article has been saved to the savannah." });
    router.push('/admin/blog');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-tight">New Blog Post</h1>
        <p className="text-muted-foreground mt-1 font-bold">Draft a new safari story or travel guide.</p>
      </div>
      <BlogEditor onSave={handleSave} />
    </div>
  );
}
