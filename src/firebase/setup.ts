import { firebaseConfig } from '@/firebase/config';
<<<<<<< HEAD
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
 * This function works on both client and server (Next.js 15).
 */
function isConfigValid(): boolean {
  const requiredKeys = ['apiKey', 'projectId', 'appId'] as const;
  const isValid = requiredKeys.every(key => {
    const value = firebaseConfig[key as keyof typeof firebaseConfig];
    return value && value !== "undefined" && value.trim() !== "";
  });
  
  if (!isValid) {
    console.warn("Firebase configuration is incomplete or missing. Registry handshake pending.");
  }
  
  return isValid;
}

=======
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
>>>>>>> e402125 (Fix the Firebase initialization and environment variable configuration i)
export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

<<<<<<< HEAD
  if (!isConfigValid()) {
    return { firebaseApp: null, auth: null, firestore: null };
  }

  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    cachedServices = {
      firebaseApp: app,
      auth,
      firestore
    };

    return cachedServices;
  } catch (error) {
    console.error("Firebase initialization failed in registry:", error);
    return { firebaseApp: null, auth: null, firestore: null };
  }
}

=======
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
>>>>>>> e402125 (Fix the Firebase initialization and environment variable configuration i)
export function getSdks() {
  return initializeFirebase();
}
