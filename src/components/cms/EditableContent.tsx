"use client";

import React, { useEffect, useState } from 'react';
import { useDoc, useFirestore, useMemoFirebase, setDocumentNonBlocking, useUser } from '@/firebase';
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
 * Handles hydration safety to prevent Internal Server Errors during SSR.
 */
export function EditableContent({ 
  pageKey, 
  sectionId, 
  type = 'text', 
  defaultContent, 
  children 
}: EditableContentProps) {
  const firestore = useFirestore();
  const { user } = useUser();
  const [mounted, setMounted] = useState(false);

  // Check if current user is an admin to allow registration
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole } = useDoc(adminDocRef);

  // Reference to the page document
  const docRef = useMemoFirebase(() => (firestore ? doc(firestore, 'pages', pageKey) : null), [firestore, pageKey]);
  const { data: pageData, isLoading: isPageLoading } = useDoc(docRef);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Auto-registration logic: 
    // ONLY attempt registration if we are an authenticated admin and the page doesn't exist yet
    if (mounted && firestore && docRef && !isPageLoading && !pageData && adminRole) {
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
        isRegistered: true
      }, { merge: true });
    }
  }, [mounted, firestore, docRef, isPageLoading, pageData, pageKey, sectionId, type, defaultContent, adminRole]);

  // CRITICAL: Hydration safety. 
  // We MUST render the same initial structure on server and client to prevent 500 errors.
  // Delaying dynamic content logic until after mount.
  if (!mounted) {
    return <>{children}</>;
  }

  // If we are on the client and data is still loading, show skeleton only if we intend to replace content
  if (isPageLoading && !pageData) {
    return <Skeleton className="w-full h-8 rounded-lg opacity-20" />;
  }

  const sectionData = pageData?.sections?.[sectionId]?.data;

  if (sectionData) {
    try {
      if (type === 'hero') {
        return <>{children}</>;
      }
      
      if (type === 'text' && typeof sectionData === 'string') {
        return <>{sectionData}</>;
      }

      if (type === 'markdown' && sectionData.bodyMarkdown) {
        return <div className="whitespace-pre-wrap">{sectionData.bodyMarkdown}</div>;
      }
    } catch (e) {
      console.error("CMS Content Render Error:", e);
      return <>{children}</>;
    }
  }

  return <>{children}</>;
}
