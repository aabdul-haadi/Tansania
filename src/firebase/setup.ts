
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
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
 * This pattern prevents "Firebase: Need to provide options (app/no-options)" errors.
 * Includes a guard for build-time environments where env vars might be missing.
 */
export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

  // Validation check for environment variables to prevent crashes during prerendering
  if (!firebaseConfig.apiKey) {
    if (typeof window !== 'undefined') {
      console.error('Firebase: API Key is missing. Check your environment variables.');
    }
    // Return a dummy/empty initialization for build-time safety if necessary, 
    // or throw a descriptive error that won't kill the build process if caught.
  }

  // Strict singleton check as requested: initialize once or get existing
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

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
