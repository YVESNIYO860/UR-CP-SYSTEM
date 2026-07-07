# Deployment Guide - University of Rwanda CP Room Booking System

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Firebase project created and configured
- [ ] Security rules tested
- [ ] Dark mode verified across all pages
- [ ] Mobile responsiveness tested on multiple devices
- [ ] Performance optimizations completed
- [ ] Error handling in place
- [ ] Backup and recovery plan ready

## Environment Setup

### 1. Create `.env.local` file

```bash
# Copy from .env.example
cp .env.example .env.local
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Add Web app to your project
4. Copy config to `.env.local`:

```
VITE_FIREBASE_API_KEY=xxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxx
VITE_FIREBASE_APP_ID=xxxxxxxxxxxx
```

### 3. Firebase Security Rules

Set up Firestore security rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - only own user can read/write
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
      allow read: if request.auth.token.role == 'admin';
    }

    // Rooms collection - admins full access, CPs can read
    match /rooms/{roomId} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.role == 'admin';
    }

    // Bookings collection
    match /bookings/{bookingId} {
      allow read: if request.auth != null;
      allow create: if request.auth.uid == request.resource.data.userId;
      allow update: if request.auth.uid == resource.data.userId || request.auth.token.role == 'admin';
    }

    // Notifications collection
    match /notifications/{notificationId} {
      allow read: if request.auth.uid == resource.data.userId;
    }
  }
}
```

## Deployment Options

### Option 1: Firebase Hosting (Recommended)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build production version
npm run build

# Deploy
firebase deploy --only hosting
```

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Build Optimization

### 1. Minification

Already handled by Vite in production build.

### 2. Code Splitting

Add dynamic imports for route-based splitting:

```javascript
import { lazy, Suspense } from 'react';

const ReportsPage = lazy(() => import('./pages/ReportsPage'));

// In routes:
<Suspense fallback={<LoadingSpinner />}>
  <Route path="reports" element={<ReportsPage />} />
</Suspense>
```

### 3. Image Optimization

- Use WebP format for images
- Compress PNG/JPG to <100KB each
- Use responsive images with srcset

## Performance Monitoring

### Firebase Analytics

```javascript
import { getAnalytics, logEvent } from "firebase/analytics";

const analytics = getAnalytics(app);
logEvent(analytics, 'select_content', {
  content_type: 'booking',
  content_id: 'booking_123'
});
```

### Error Tracking with Sentry

```bash
npm install @sentry/react @sentry/tracing
```

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  tracesSampleRate: 1.0,
});
```

## SSL/HTTPS Certificate

- Firebase Hosting: Automatic
- Vercel: Automatic
- Netlify: Automatic
- Custom domain: Use Let's Encrypt

## Database Backup

### Automatic Backups
Firestore provides daily automated backups.

### Manual Backup Command

```bash
gcloud firestore export gs://your-bucket/backups/backup-name
```

## Monitoring & Alerts

### Firebase Console Monitoring

1. Go to Performance tab
2. Set up alerts for:
   - Page load time > 3s
   - Request failures > 5%
   - Real-time database lag

### Email Alerts

Configure in Firebase Console:
- Billing alerts
- Error rate alerts
- Performance degradation alerts

## Post-Deployment Testing

### 1. Smoke Tests

```bash
# Test critical paths
npm run test:e2e

# Test performance
npm run test:performance
```

### 2. User Testing

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on multiple devices (iPhone, iPad, Android)
- Test on slow networks (3G throttling)

### 3. Security Testing

- Test authentication flows
- Test authorization (CP vs Admin)
- Test CORS settings
- Test input validation

## Scaling Considerations

### For 1,000+ Concurrent Users

1. Enable read replicas for Firestore
2. Implement caching layer (Redis)
3. Use CDN for static assets
4. Implement rate limiting

### Firestore Scaling

```javascript
// Add indexes for common queries
// Admin → Firestore → Indexes → Create Index
```

## Troubleshooting

### Deploy Fails

```bash
# Clear cache
rm -rf dist node_modules
npm install
npm run build
```

### Slow Performance

```bash
# Check bundle size
npm run build -- --report

# Optimize large chunks
# Use dynamic imports for routes
```

### CORS Errors

Update Firebase config:
```javascript
// firestore.rules
match /{document=**} {
  allow read, write: if request.auth != null;
}
```

## Rollback Procedure

### Firebase Hosting
```bash
firebase hosting:disable
```

### Vercel
```bash
vercel rollback
```

### Netlify
Deploy previous build via UI

## Maintenance

### Weekly
- Check error logs
- Monitor performance metrics
- Review security alerts

### Monthly
- Review user analytics
- Update dependencies
- Test disaster recovery

### Quarterly
- Comprehensive security audit
- Performance optimization review
- Capacity planning

## Support Contacts

- Firebase Support: https://firebase.google.com/support
- Vercel Support: support@vercel.com
- Netlify Support: support@netlify.com

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/deployment.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Web Vitals](https://web.dev/vitals/)
