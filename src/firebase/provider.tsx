'use client';

import React, { DependencyList, createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth, User, onAuthStateChanged } from 'firebase/auth';
import { FirebaseErrorListener } from '@/components/shared/FirebaseErrorListener';

interface FirebaseProviderProps {
  children: ReactNode;
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
}

interface UserAuthState {
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export interface FirebaseContextState {
  areServicesAvailable: boolean;
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export const FirebaseContext = createContext<FirebaseContextState | undefined>(undefined);

const memoizedObjects = new WeakSet<any>();

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  children,
  firebaseApp,
  firestore,
  auth,
}) => {
  const [mounted, setMounted] = useState(false);
  const [userAuthState, setUserAuthState] = useState<UserAuthState>({
    user: null,
    isUserLoading: !!auth,
    userError: null,
  });

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !auth) {
      if (mounted && !auth) setUserAuthState({ user: null, isUserLoading: false, userError: null });
      return;
    }
    setUserAuthState({ user: null, isUserLoading: true, userError: null });
    const unsubscribe = onAuthStateChanged(auth, (u) => setUserAuthState({ user: u, isUserLoading: false, userError: null }));
    return () => unsubscribe();
  }, [auth, mounted]);

  const contextValue = useMemo((): FirebaseContextState => {
    const servicesAvailable = !!(firebaseApp && firestore && auth);
    return {
      areServicesAvailable: servicesAvailable,
      firebaseApp: servicesAvailable ? firebaseApp : null,
      firestore: servicesAvailable ? firestore : null,
      auth: servicesAvailable ? auth : null,
      user: userAuthState.user,
      isUserLoading: userAuthState.isUserLoading,
      userError: userAuthState.userError,
    };
  }, [firebaseApp, firestore, auth, userAuthState]);

  return (
    <FirebaseContext.Provider value={contextValue}>
      <FirebaseErrorListener />
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) throw new Error('useFirebase must be used within a FirebaseProvider.');
  return context;
};

export const useAuth = () => useContext(FirebaseContext)?.auth || null;
export const useFirestore = () => useContext(FirebaseContext)?.firestore || null;
export const useUser = () => {
  const context = useContext(FirebaseContext);
  if (!context) return { user: null, isUserLoading: true, userError: null };
  return { user: context.user, isUserLoading: context.isUserLoading, userError: context.userError };
};

export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): T {
  const memoized = useMemo(factory, deps);
  if(typeof memoized === 'object' && memoized !== null) {
    try { memoizedObjects.add(memoized); } catch (e) {}
  }
  return memoized;
}

export function isMemoized(obj: any): boolean {
  if (obj === null || typeof obj !== 'object') return true;
  return memoizedObjects.has(obj);
}
