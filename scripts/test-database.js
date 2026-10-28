const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get, push } = require('firebase/database');

// Firebase configuration (loaded from .env.local)
const { firebaseConfig } = require('./_firebase-config');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Test data
const testData = {
  title: "Test Website",
  description: "This is a test website for database operations",
  image_url: "https://via.placeholder.com/400x200?text=Test+Image",
  preview_url: "https://example.com",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

async function testDatabase() {
  try {
    console.log("Testing database operations...");
    
    // Insert test data
    console.log("Inserting test data...");
    const newItemRef = push(ref(db, 'websites'));
    await set(newItemRef, testData);
    const id = newItemRef.key;
    console.log("Data inserted with ID:", id);
    
    // Retrieve the data
    console.log("Retrieving data...");
    const snapshot = await get(ref(db, `websites/${id}`));
    if (snapshot.exists()) {
      console.log("Retrieved data:", snapshot.val());
    } else {
      console.log("No data found at path");
    }
    
    // Retrieve all websites
    console.log("Retrieving all websites...");
    const allSnapshot = await get(ref(db, 'websites'));
    if (allSnapshot.exists()) {
      console.log("All websites:", allSnapshot.val());
    } else {
      console.log("No websites found");
    }
    
    console.log("Test completed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  }
}

testDatabase();