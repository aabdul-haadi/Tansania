'use client';

/**
 * Central barrel file for Firebase integration.
 * Components should generally import from here.
 */

export * from './setup';
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
