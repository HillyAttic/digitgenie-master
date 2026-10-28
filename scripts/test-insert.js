const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push } = require('firebase/database');

// Firebase configuration (loaded from .env.local)
const { firebaseConfig } = require('./_firebase-config');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Test data
const testWebsite = {
  title: "Test Website",
  description: "This is a test website inserted via script",
  image_url: "https://via.placeholder.com/400x240?text=Test+Image",
  preview_url: "https://example.com",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

// Insert test data
async function insertTestWebsite() {
  try {
    const newItemRef = push(ref(db, 'websites'), testWebsite);
    console.log('Test website inserted with ID:', newItemRef.key);
    console.log('Check your Firebase Realtime Database at:');
    console.log('https://digitgenie-f2162-default-rtdb.firebaseio.com/websites');
  } catch (error) {
    console.error('Error inserting test website:', error);
  }
}

insertTestWebsite();