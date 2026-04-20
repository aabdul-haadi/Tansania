
import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore, initializeFirestore } from 'firebase/firestore';

interface FirebaseServices {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

let cachedServices: FirebaseServices | null = null;

/**
 * Validates that the necessary Firebase configuration values are present.
 * Works on both client and server (Next.js 15).
 */
function isConfigValid(): boolean {
  const requiredKeys = ['apiKey', 'projectId', 'appId'] as const;

  const isValid = requiredKeys.every((key) => {
    const value = firebaseConfig[key as keyof typeof firebaseConfig];
    return value && value !== "undefined" && value.trim() !== "";
  });

  if (!isValid) {
    console.warn("Firebase configuration is incomplete or missing. Services will initialize as null.");
  }

  return isValid;
}

/**
 * Initializes Firebase using environment variables and ensures a single instance exists.
 * Implements high-resiliency protocols for specialized workstation environments.
 */
export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

  if (!isConfigValid()) {
    return { firebaseApp: null, auth: null, firestore: null };
  }

  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    
    // CRITICAL: Resolve Firestore timeout issues by enabling the long-polling protocol.
    // This bypasses WebSocket restrictions often found in workstation/port-forwarded environments.
    const firestore = initializeFirestore(app, {
      experimentalForceLongPolling: true,
    });

    cachedServices = {
      firebaseApp: app,
      auth,
      firestore
    };

    return cachedServices;

  } catch (error) {
    console.error("Firebase initialization failed:", error);

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
