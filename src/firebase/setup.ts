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
 * This pattern prevents "Firebase: Need to provide options (app/no-options)" errors.
 */
export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

  // Validation check for environment variables
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn('Firebase: Missing configuration options. Check your environment variables.');
  }

  // Strict singleton check as requested
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

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
