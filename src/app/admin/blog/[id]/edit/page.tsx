"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { useDoc, useFirestore, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function EditBlogPost() {
  const { id } = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();
  
  const docRef = useMemoFirebase(() => (firestore && id ? doc(firestore, 'blogPosts', id as string) : null), [firestore, id]);
  const { data: post, isLoading } = useDoc(docRef);

  const handleSave = async (data: any) => {
    if (!docRef) return;
    updateDocumentNonBlocking(docRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
    toast({ title: "Article Updated", description: "Changes saved successfully." });
    router.push('/admin/blog');
  };

  if (isLoading) return <div className="p-12 text-center">Loading article...</div>;
  if (!post) return <div className="p-12 text-center">Article not found.</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <p className="text-muted-foreground mt-1">Refine your content and SEO settings.</p>
      </div>
      <BlogEditor initialData={post} onSave={handleSave} />
    </div>
  );
}
