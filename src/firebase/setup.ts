'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Initializes Firebase with App Hosting support and fallback configuration.
 */
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      // Attempt to initialize via Firebase App Hosting environment variables
      firebaseApp = initializeApp();
    } catch (e) {
      if (process.env.NODE_ENV === "production") {
        console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
      }
      if (!firebaseConfig.apiKey) {
        console.warn('Firebase API Key is missing. Using dummy config for build/SSR.');
        firebaseApp = initializeApp({
          projectId: "demo-project",
          appId: "1:1234567890:web:1234567890",
          apiKey: "AIzaSyDummyKeyForStaticBuildAndTesting",
          authDomain: "demo-project.firebaseapp.com",
          messagingSenderId: "1234567890",
          measurementId: "",
        });
      } else {
        firebaseApp = initializeApp(firebaseConfig);
      }
    }
    return getSdks(firebaseApp);
  }

  return getSdks(getApp());
}

/**
 * Returns the core Firebase SDK instances for a given app.
 */
export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}
