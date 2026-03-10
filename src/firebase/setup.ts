'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

/**
 * Singleton structure for Firebase services.
 */
interface FirebaseServices {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

let cachedServices: FirebaseServices | null = null;

/**
 * Initializes Firebase using environment variables and ensures a single instance exists.
 * Added protection for build-time environments (like Vercel CI) where keys are missing.
 */
export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

  // CRITICAL: Validation check for environment variables to prevent crashes during SSG/Build
  // Check for both undefined value and "undefined" string (common in some CI environments)
  const isConfigValid = firebaseConfig.apiKey && 
                        firebaseConfig.apiKey !== "undefined" && 
                        firebaseConfig.projectId && 
                        firebaseConfig.projectId !== "undefined";

  if (!isConfigValid) {
    // Return null services during build to prevent auth/invalid-api-key errors
    return {
      firebaseApp: null,
      auth: null,
      firestore: null
    };
  }

  try {
    // Strict singleton check: initialize once or get existing
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

    cachedServices = {
      firebaseApp: app,
      auth: getAuth(app),
      firestore: getFirestore(app)
    };

    return cachedServices;
  } catch (error) {
    console.error('Firebase Initialization Error:', error);
    return {
      firebaseApp: null,
      auth: null,
      firestore: null
    };
  }
}

/**
 * Utility to get SDKs if already initialized or initialize them.
 */
export function getSdks() {
  return initializeFirebase();
}
