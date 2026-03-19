'use client';

import { useState, useEffect } from 'react';
import {
  Query,
  onSnapshot,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
  CollectionReference,
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { isMemoized } from '@/firebase/provider';

export type WithId<T> = T & { id: string };

export interface UseCollectionResult<T> {
  data: WithId<T>[] | null;
  isLoading: boolean;
  error: FirestoreError | Error | null;
}

/**
 * Subscribe to a Firestore collection or query in real-time.
 * 
 * CRITICAL: The input reference/query MUST be memoized using useMemoFirebase
 * or a stable component reference to avoid infinite render loops.
 */
export function useCollection<T = any>(
    targetRefOrQuery: (CollectionReference<DocumentData> | Query<DocumentData>) | null | undefined,
): UseCollectionResult<T> {
  const [data, setData] = useState<WithId<T>[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<FirestoreError | Error | null>(null);

  useEffect(() => {
    if (!targetRefOrQuery) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    const unsubscribe = onSnapshot(
      targetRefOrQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const results: WithId<T>[] = [];
        for (const doc of snapshot.docs) {
          results.push({ ...(doc.data() as T), id: doc.id });
        }
        setData(results);
        setError(null);
        setIsLoading(false);
      },
      (serverError: FirestoreError) => {
        // Advanced path resolution for clearer technical error context in the registry.
        let path = 'unknown/collection';
        if ((targetRefOrQuery as any).path) {
          path = (targetRefOrQuery as any).path;
        } else {
          // If it's a Query, try to reconstruct path from segments or private properties
          try {
            const internalQuery = (targetRefOrQuery as any)._query || (targetRefOrQuery as any).query;
            if (internalQuery?.path?.segments) {
              path = internalQuery.path.segments.join('/');
            }
          } catch (e) {
            // Fallback to unknown if internal structures are inaccessible
          }
        }

        const contextualError = new FirestorePermissionError({
          operation: 'list',
          path,
        })

        setError(contextualError)
        setData(null)
        setIsLoading(false)
        errorEmitter.emit('permission-error', contextualError);
      }
    );

    return () => unsubscribe();
  }, [targetRefOrQuery]);

  // Enforce developer safety: ensure the reference is memoized to prevent savannnah loops.
  if(targetRefOrQuery && !isMemoized(targetRefOrQuery)) {
    throw new Error('Firestore Reference/Query was not properly memoized using useMemoFirebase. This can cause infinite render loops.');
  }

  return { data, isLoading, error };
}
