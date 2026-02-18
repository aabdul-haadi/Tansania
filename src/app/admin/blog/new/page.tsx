"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { useFirestore } from '@/firebase';
import { doc, setDoc, collection } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function NewBlogPost() {
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleSave = async (data: any) => {
    if (!firestore) return;
    try {
      const postsRef = collection(firestore, 'blogPosts');
      const newDocRef = doc(postsRef);
      await setDoc(newDocRef, {
        ...data,
        id: newDocRef.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      toast({ title: "Article Created", description: "Your article has been saved." });
      router.push('/admin/blog');
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to save article." });
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">New Blog Post</h1>
        <p className="text-muted-foreground mt-1">Draft a new safari story or travel guide.</p>
      </div>
      <BlogEditor onSave={handleSave} />
    </div>
  );
}
