// Shared Firebase web config for the maintenance scripts in this folder.
// Values are read from .env.local, or from variables already exported in the
// environment (useful in CI). Keep .env.local out of version control.

const path = require('path');

try {
  // Node >= 20.12 can load a dotenv-style file without extra dependencies.
  process.loadEnvFile(path.join(__dirname, '..', '.env.local'));
} catch {
  // .env.local is optional when the variables are already exported.
}

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env.local and fill in the values.`
    );
  }
  return value;
}

const firebaseConfig = {
  apiKey: required('NEXT_PUBLIC_FIREBASE_API_KEY'),
  authDomain: required('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId: required('NEXT_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket: required('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: required('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId: required('NEXT_PUBLIC_FIREBASE_APP_ID'),
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || undefined,
  databaseURL: required('NEXT_PUBLIC_FIREBASE_DATABASE_URL'),
};

module.exports = { firebaseConfig };
