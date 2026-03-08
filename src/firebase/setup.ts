'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

/**
 * Singleton structure for Firebase services.
 */
interface FirebaseServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

let cachedServices: FirebaseServices | null = null;

/**
 * Initializes Firebase using environment variables and ensures a single instance exists.
 */
export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

  // Safety check for critical config during build/prerender
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    if (process.env.NODE_ENV === 'production') {
      console.error('Firebase configuration is missing critical environment variables.');
    }
  }

  const existingApps = getApps();
  const app = existingApps.length === 0 ? initializeApp(firebaseConfig) : existingApps[0];

  cachedServices = {
    firebaseApp: app,
    auth: getAuth(app),
    firestore: getFirestore(app)
  };

  return cachedServices;
}

/**
 * Utility to get SDKs if already initialized or initialize them.
 */
export function getSdks() {
  return initializeFirebase();
}
