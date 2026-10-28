const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

// Firebase configuration (loaded from .env.local)
const { firebaseConfig } = require('./_firebase-config');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Admin user credentials (set ADMIN_EMAIL / ADMIN_PASSWORD in .env.local)
if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error('Missing ADMIN_EMAIL or ADMIN_PASSWORD. Add them to .env.local.');
}

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

// Create the admin user
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Admin user created successfully!');
    console.log('User UID:', user.uid);
    console.log('User Email:', user.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error creating admin user:', errorMessage);
    
    // If user already exists, that's fine
    if (errorCode === 'auth/email-already-in-use') {
      console.log('Admin user already exists, which is fine.');
    }
  });