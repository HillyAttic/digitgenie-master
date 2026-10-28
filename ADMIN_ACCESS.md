# Admin Dashboard Access

This document explains how to access the admin dashboard for development and testing purposes.

## Current Setup

The admin dashboard is protected by Clerk authentication and has an additional layer of security in the middleware that only allows a specific user ID to access it.

Current allowed user ID (in middleware.ts):
```
const ALLOWED_ADMIN_USER_ID = "user_32Z10bxshyynXV9UfP1p1ceiLXd";
```

## Setting Up Test Credentials

### Option 1: Using Clerk Dashboard (Recommended)

1. Go to your Clerk dashboard at https://dashboard.clerk.dev/
2. Navigate to "Users" section
3. Create a new test user with email: `admin@test.com`
4. Copy the User ID of this new user
5. Update the `ALLOWED_ADMIN_USER_ID` in `middleware.ts` with this new User ID

### Option 2: Temporary Development Access

For development purposes, you can temporarily allow any authenticated user to access the admin dashboard by modifying the middleware:

```typescript
// In middleware.ts, replace the current logic with:
if (isAdminRoute(req) && !req.nextUrl.pathname.includes('/admin/login')) {
  const { userId } = await auth();
  
  if (!userId) {
    // User not authenticated, redirect to login
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
  
  // For development, allow any authenticated user
  // Remove this in production!
  // if (userId !== ALLOWED_ADMIN_USER_ID) {
  //   return NextResponse.redirect(new URL('/unauthorized', req.url));
  // }
}
```

## Test Credentials

For development, you can use these test credentials:

- Email: `admin@test.com`
- Password: `Test1234!`

Note: These are just examples. You should create actual users in your Clerk dashboard.

## Security Notice

Never commit real user credentials to version control. Always use environment variables or Clerk's built-in authentication for production applications.