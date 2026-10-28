// Script to add template data to Firebase
// Run this with: node scripts/add-templates.js

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const { firebaseConfig } = require('./_firebase-config');
//testing
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const templates = [
  {
    title: 'AI Agent Landing Page',
    description: 'Modern AI agent landing page template with clean design and responsive layout perfect for AI startups and tech companies.',
    image_url: '/images/aiagent2d00.png',
    preview_url: 'https://digitgenie.com/templates/ai-agent',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: 'Startup Landing Page',
    description: 'Perfect for startups and new businesses looking to make a strong first impression with modern design elements.',
    image_url: '/images/startup-tailwindc83a.jpeg',
    preview_url: 'https://digitgenie.com/templates/startup-tailwind',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: 'SaaS Landing Page',
    description: 'Professional SaaS product landing page with conversion-focused design and modern UI components.',
    image_url: '/images/saaspal47e9.jpeg',
    preview_url: 'https://digitgenie.com/templates/saaspal',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: 'App Landing Page',
    description: 'Mobile app showcase landing page designed to highlight your app features and drive downloads.',
    image_url: '/images/appvillafa88.jpeg',
    preview_url: 'https://digitgenie.com/templates/appvilla',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: 'Crypto Trading Platform',
    description: 'Cryptocurrency and blockchain landing page with modern design perfect for fintech and crypto projects.',
    image_url: '/images/crypto-tailwind9068.jpeg',
    preview_url: 'https://digitgenie.com/templates/crypto-tailwind',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: 'Portfolio Template',
    description: 'Creative portfolio and personal website template perfect for designers, developers, and creative professionals.',
    image_url: '/images/go-tailwind65b5.jpeg',
    preview_url: 'https://digitgenie.com/templates/go-tailwind',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

async function addTemplates() {
  try {
    console.log('Adding templates to Firebase...');
    
    for (const template of templates) {
      const docRef = await addDoc(collection(db, 'websites'), template);
      console.log(`✅ Added template: ${template.title} (ID: ${docRef.id})`);
    }
    
    console.log('🎉 All templates added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding templates:', error);
    process.exit(1);
  }
}

addTemplates();