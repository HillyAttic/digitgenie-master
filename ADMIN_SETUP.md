# Admin Panel Setup with Clerk Authentication

This project now includes a comprehensive admin panel with Clerk authentication for managing websites.

## 🔧 What's Been Added

### Authentication Setup
- **Clerk Integration**: Added `@clerk/nextjs` for secure admin authentication
- **Middleware**: Created `middleware.ts` to protect routes
- **Environment Variables**: Added Clerk keys to `.env.local`

### Admin Panel Features
- **Admin Login**: `/admin/login` - Secure login using Clerk
- **Admin Dashboard**: `/admin/dashboard` - Full CRUD operations for websites
- **Protected Routes**: Admin routes require authentication

### Database Schema
- **Websites Table**: Added to Supabase with fields:
  - `id` (UUID, primary key)
  - `title` (text)
  - `description` (text) 
  - `image_url` (text)
  - `preview_url` (text)
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

### Frontend Integration
- **WebsiteGrid Component**: Displays websites from database on homepage
- **Real-time Updates**: Frontend automatically shows admin-added websites

## 🚀 Setup Instructions

### 1. Configure Clerk
1. Create a Clerk account at [clerk.dev](https://clerk.dev)
2. Create a new application
3. Get your API keys from the Clerk Dashboard
4. Update `.env.local` with your actual keys:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### 2. Set Up Database Table
In your Supabase dashboard, create the `websites` table:

```sql
CREATE TABLE websites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  preview_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_websites_updated_at
  BEFORE UPDATE ON websites
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### 3. Configure Row Level Security (Optional but Recommended)
```sql
-- Enable RLS
ALTER TABLE websites ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON websites
  FOR SELECT
  TO public
  USING (true);

-- For admin operations, you may want to add policies based on your needs
```

## 📱 How to Use

### Admin Access
1. Visit `/admin/login`
2. Sign in with Clerk (create account if needed)
3. Access the dashboard at `/admin/dashboard`

### Admin Dashboard Features
- **Add Website**: Click "Add New Website" button
- **Edit Website**: Click "Edit" button on any website
- **Delete Website**: Click "Delete" button (with confirmation)
- **View Preview**: Click preview links to test URLs

### Frontend Display
- Websites added by admin automatically appear on the homepage
- Responsive grid layout
- Live preview links
- Error handling for broken images

## 🔗 File Structure

```
app/
├── admin/
│   ├── layout.tsx          # Protected admin layout
│   ├── login/
│   │   └── page.tsx        # Clerk sign-in page
│   └── dashboard/
│       └── page.tsx        # Admin CRUD interface
├── layout.tsx              # Root layout with ClerkProvider
└── page.tsx                # Homepage with WebsiteGrid

components/
└── WebsiteGrid.tsx         # Frontend website display

lib/
├── supabase.ts             # Updated with websites schema
└── supabase-helpers.ts     # Database operations

middleware.ts               # Clerk route protection
```

## 🛡️ Security Features

- **Authentication Required**: Admin routes protected by Clerk
- **Middleware Protection**: Automatic redirect for unauthenticated users
- **Input Validation**: Form validation on client and database level
- **Error Handling**: Comprehensive error handling and user feedback

## 🎨 UI/UX Features

- **Responsive Design**: Works on all device sizes
- **Modal Forms**: Clean popup forms for add/edit operations
- **Loading States**: Proper loading indicators
- **Toast Notifications**: Success/error feedback
- **Image Fallbacks**: Graceful handling of broken images

## 🔄 Next Steps

1. **Set up your Clerk account** and update environment variables
2. **Create the database table** in Supabase
3. **Test the admin panel** by adding sample websites
4. **Customize the design** to match your brand
5. **Add additional features** as needed (categories, tags, etc.)

Your admin panel is now ready to manage websites with a professional interface! 🎉