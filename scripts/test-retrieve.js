const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get } = require('firebase/database');

// Firebase configuration (loaded from .env.local)
const { firebaseConfig } = require('./_firebase-config');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Retrieve data
async function retrieveWebsites() {
  try {
    const snapshot = await get(ref(db, 'websites'));
    if (snapshot.exists()) {
      console.log('Websites data:');
      console.log(snapshot.val());
    } else {
      console.log('No websites found in database');
    }
  } catch (error) {
    console.error('Error retrieving websites:', error);
  }
}

retrieveWebsites();