'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseServices {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

let cachedServices: FirebaseServices | null = null;

/**
 * Validates that the necessary Firebase configuration values are present.
 * Handles both actual undefined and the string "undefined".
 */
function isConfigValid(): boolean {
  const requiredKeys = ['apiKey', 'projectId', 'appId'] as const;
  const isValid = requiredKeys.every(key => {
    const value = firebaseConfig[key as keyof typeof firebaseConfig];
    return value && value !== "undefined" && value.trim() !== "";
  });
  
  if (!isValid) {
    console.warn("Firebase configuration is incomplete or missing. Environment Variables check required.");
  }
  
  return isValid;
}

export function initializeFirebase(): FirebaseServices {
  // If we already have cached services, return them immediately
  if (cachedServices) {
    return cachedServices;
  }

  // Check if configuration is missing or invalid
  if (!isConfigValid()) {
    return { firebaseApp: null, auth: null, firestore: null };
  }

  try {
    // Initialize or retrieve the Firebase app
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    
    // Create service instances
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    // Cache the services for subsequent calls
    cachedServices = {
      firebaseApp: app,
      auth,
      firestore
    };

    return cachedServices;
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    return { firebaseApp: null, auth: null, firestore: null };
  }
}

export function getSdks() {
  return initializeFirebase();
}
