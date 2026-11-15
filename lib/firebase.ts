import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Web config comes from NEXT_PUBLIC_* variables in .env.local (see .env.example).
// These values are inlined into the client bundle at build time, so they are
// configuration rather than secrets - keep the rules in the Firebase console tight.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

// Fail fast with an actionable message instead of a cryptic Firebase init error.
const missingKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key)

// Vercel previews build without NEXT_PUBLIC_* values until Firebase is connected.
// Throw at import time and page-data collection fails, so fall back to a
// placeholder app: the UI builds and renders, reads/writes just fail until the
// real environment variables are set.
const config = missingKeys.length
  ? {
      apiKey: 'demo-api-key',
      authDomain: 'demo-digitgenie.firebaseapp.com',
      projectId: 'demo-digitgenie',
      storageBucket: 'demo-digitgenie.appspot.com',
      messagingSenderId: '000000000000',
      appId: '1:000000000000:web:0000000000000000000000',
      measurementId: 'G-0000000000',
      databaseURL: 'https://demo-digitgenie-default-rtdb.firebaseio.com',
    }
  : firebaseConfig

if (missingKeys.length > 0) {
  console.warn(
    `Missing Firebase configuration: ${missingKeys.join(', ')}. ` +
      'Running with placeholder config - set the NEXT_PUBLIC_* values to connect Firebase.'
  )
}

export const firebaseConfigured = missingKeys.length === 0

// Initialize Firebase
const app = initializeApp(config)

// Initialize Firebase services
export const db = getDatabase(app, config.databaseURL as string)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app