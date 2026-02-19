
"use client";

import React, { useEffect, useState } from 'react';
import { useDoc, useFirestore, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import { doc, serverTimestamp } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

interface EditableContentProps {
  pageKey: string;
  sectionId: string;
  type?: 'text' | 'markdown' | 'image' | 'hero';
  defaultContent?: any;
  children?: React.ReactNode;
}

/**
 * A component that makes its children editable from the Admin Panel.
 * Adding this component to any page automatically registers that page in the database.
 */
export function EditableContent({ 
  pageKey, 
  sectionId, 
  type = 'text', 
  defaultContent, 
  children 
}: EditableContentProps) {
  const firestore = useFirestore();
  const [mounted, setMounted] = useState(false);

  // Reference to the page document
  const docRef = useMemoFirebase(() => (firestore ? doc(firestore, 'pages', pageKey) : null), [firestore, pageKey]);
  const { data: pageData, isLoading } = useDoc(docRef);

  useEffect(() => {
    setMounted(true);
    
    // Auto-registration logic: 
    // If the component is in the code, ensure the page exists in the registry
    if (firestore && docRef && !isLoading && !pageData) {
      setDocumentNonBlocking(docRef, {
        id: pageKey,
        key: pageKey,
        title: pageKey.charAt(0).toUpperCase() + pageKey.slice(1) + ' Page',
        status: 'DRAFT',
        path: `/${pageKey === 'home' ? '' : pageKey}`,
        updatedAt: serverTimestamp(),
        sections: {
          [sectionId]: {
            type,
            data: defaultContent || {}
          }
        },
        isRegistered: true // Master toggle for admin visibility
      }, { merge: true });
    }
  }, [firestore, docRef, isLoading, pageData, pageKey, sectionId, type, defaultContent]);

  // If page data exists, try to get the specific section content
  const sectionData = pageData?.sections?.[sectionId]?.data;

  // Hydration safety: Return children initially to avoid mismatch
  if (!mounted) return <>{children}</>;

  if (isLoading) return <Skeleton className="w-full h-20 rounded-xl" />;

  // Render logic based on type and database presence
  if (sectionData) {
    if (type === 'hero') {
      // For hero, we assume the children is a function or handles its own internal data
      // This is a simplified example; real logic would depend on how the hero receives props
      return <>{children}</>;
    }
    
    if (type === 'text' && typeof sectionData === 'string') {
      return <>{sectionData}</>;
    }

    if (type === 'markdown' && sectionData.bodyMarkdown) {
      // In a real scenario, you'd pass this to a Markdown renderer
      return <div className="whitespace-pre-wrap">{sectionData.bodyMarkdown}</div>;
    }
  }

  // Fallback to source code content
  return <>{children}</>;
}
