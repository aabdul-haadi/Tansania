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

export function initializeFirebase(): FirebaseServices {
  if (cachedServices) {
    return cachedServices;
  }

  const isConfigValid = !!(
    firebaseConfig.apiKey && 
    firebaseConfig.apiKey !== "undefined" && 
    firebaseConfig.projectId && 
    firebaseConfig.projectId !== "undefined"
  );

  if (!isConfigValid) {
    return { firebaseApp: null, auth: null, firestore: null };
  }

  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    cachedServices = {
      firebaseApp: app,
      auth: getAuth(app),
      firestore: getFirestore(app)
    };
    return cachedServices;
  } catch (error) {
    return { firebaseApp: null, auth: null, firestore: null };
  }
}

export function getSdks() {
  return initializeFirebase();
}
