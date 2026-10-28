const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get } = require('firebase/database');

// Firebase configuration (loaded from .env.local)
const { firebaseConfig } = require('./_firebase-config');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app.name);

// Initialize Database with explicit URL
const db = getDatabase(app, "https://digitgenie-f2162-default-rtdb.firebaseio.com/");
console.log('Database initialized with URL');

// Test connection
async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Try to write a test value
    const testRef = ref(db, 'test_connection');
    console.log('Test ref created');
    
    await set(testRef, {
      timestamp: new Date().toISOString(),
      message: 'Connection test'
    });
    console.log('Test data written successfully');
    
    // Try to read the test value
    const snapshot = await get(testRef);
    if (snapshot.exists()) {
      console.log('Test data read successfully:', snapshot.val());
    } else {
      console.log('No test data found');
    }
    
    console.log('Database connection test completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Database connection test failed:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    process.exit(1);
  }
}

testConnection();