# University of Rwanda CP Room Booking System

A modern, responsive, production-quality web application for managing classroom bookings at the University of Rwanda. Designed specifically for **Class Representatives (CPs)** and **Administrators**.

## 🎯 Overview

This system provides:
- **CP Dashboard**: Manage assigned room bookings with an intuitive interface
- **Admin Dashboard**: Full control over CPs, rooms, bookings, and reporting
- **Real-time Conflict Detection**: Prevents double bookings automatically
- **Professional UI**: University-style portal with a clean, minimal design
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **PWA Support**: Installable web app with offline capabilities

## 🚀 Features

### For Class Representatives
- ✅ View assigned classroom details (capacity, facilities, status)
- ✅ Book sessions with automatic conflict detection
- ✅ Track booking status (Pending, Approved, Rejected, Cancelled)
- ✅ Receive notifications for booking updates
- ✅ Update profile information
- ✅ View booking history

### For Administrators
- ✅ Create and manage CP accounts
- ✅ Create and manage buildings and rooms
- ✅ Assign rooms to CPs (one-to-one relationship)
- ✅ Approve, reject, or cancel bookings
- ✅ Search and filter bookings
- ✅ Generate reports (PDF, Excel, CSV)
- ✅ View system analytics

## 🏗️ Project Structure

```
UR CP SYSTEM/
├── src/
│   ├── components/
│   │   └── Layout.jsx           # Main layout with sidebar & header
│   ├── pages/
│   │   ├── LandingPage.jsx      # Public landing page
│   │   ├── LoginPage.jsx        # Role-based login
│   │   ├── CpDashboard.jsx      # CP home dashboard
│   │   ├── BookSessionPage.jsx  # Room booking form
│   │   ├── MyBookingsPage.jsx   # Booking history table
│   │   ├── NotificationsPage.jsx # Notifications list
│   │   ├── ProfilePage.jsx      # User profile settings
│   │   └── AdminDashboard.jsx   # Admin home & bookings
│   ├── data/
│   │   └── sampleData.js        # Demo data & sample users
│   ├── App.jsx                  # Route configuration
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles (Tailwind)
├── public/
│   └── manifest.webmanifest     # PWA manifest
├── vite.config.js               # Vite + Tailwind config
├── package.json                 # Dependencies
└── index.html                   # HTML entry point
```

## 🎨 Design System

### Colors
- **Primary**: University Blue (`#003366`)
- **Secondary**: White
- **Accent**: Light Gray (`#F5F7FA`)
- **Status Colors**: Pending (Amber), Approved (Emerald), Rejected (Rose), Cancelled (Slate)

### Typography
- **Font**: Inter, System UI
- **Headings**: Bold 24px–56px
- **Body**: 16px–18px
- **UI**: 12px–14px

### Components
- Soft shadows on cards
- 10–12px border radius
- Smooth 200ms transitions
- Minimal, accessible animations

## 🔐 Authentication

Currently uses **demo mode** for testing:
- **CP Login**: Use any email with `@ur.ac.rw` domain
- **Admin Login**: Use any email containing `"admin"`

### Firebase Integration Ready
The app is fully prepared to connect to Firebase:
```javascript
// Replace with your Firebase config in a .env file
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

## 📱 Available Routes

### Public Routes
- `/` - Landing page
- `/login` - Login page

### CP Routes (Protected)
- `/cp` - CP Dashboard
- `/cp/book` - Book a session
- `/cp/bookings` - My bookings history
- `/cp/notifications` - Notifications
- `/cp/profile` - Profile settings

### Admin Routes (Protected)
- `/admin` - Admin dashboard (bookings overview)

## 💻 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd "c:\Users\Libraly\Desktop\UR CP SYSTEM"
npm install
```

### Development Server

```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174)

### Production Build

```bash
npm run build
npm run preview
```

## 📦 Dependencies

### Core
- **react** ^19.2.7
- **react-dom** ^19.2.7
- **react-router-dom** ^7.18.1

### Forms & Validation
- **react-hook-form** ^7.81.0

### Animations
- **framer-motion** ^12.42.2

### Icons
- **lucide-react** ^1.23.0

### Styling
- **tailwindcss** ^4.3.2
- **@tailwindcss/vite** ^4.3.2

### Backend (Ready to integrate)
- **firebase** ^12.15.0

### Dev Tools
- **vite** ^8.1.1
- **@vitejs/plugin-react** ^6.0.3
- **oxlint** ^1.71.0

## 🔄 Data Flow

### Booking Creation
1. CP fills form with date, time, course, lecturer
2. System checks Firestore for overlapping approved bookings
3. If conflict found → display error
4. If available → create booking with "Pending" status
5. Admin reviews and approves/rejects
6. CP receives notification

### Role-Based Access
- Unauthenticated → Landing/Login
- CP role → CP dashboard & routes
- Admin role → Admin dashboard & routes

## 🛠️ Configuration

### Firestore Collections Schema

```javascript
// users
{
  uid: string,
  name: string,
  email: string,
  role: "cp" | "admin",
  photo: string,
  phone: string,
  college: string,
  school: string,
  department: string,
  programme: string,
  academicYear: string,
  class: string,
  assignedRoomId: string
}

// rooms
{
  roomId: string,
  building: string,
  roomNumber: string,
  capacity: number,
  facilities: string[],
  status: "Available" | "Maintenance" | "Inactive",
  assignedCP: string
}

// bookings
{
  bookingId: string,
  userId: string,
  roomId: string,
  date: string (YYYY-MM-DD),
  startTime: string (HH:MM),
  endTime: string (HH:MM),
  course: string,
  lecturer: string,
  reason: string,
  status: "Pending" | "Approved" | "Rejected" | "Cancelled",
  createdAt: string
}

// notifications
{
  notificationId: string,
  userId: string,
  title: string,
  message: string,
  read: boolean,
  createdAt: string
}
```

## 📝 Next Steps for Production

1. **Firebase Setup**
   - Create Firebase project
   - Add Web app
   - Update config in `.env.local`

2. **Security Rules**
   - Implement Firestore security rules
   - Enable Firebase Authentication
   - Set up email verification

3. **Deployment**
   - Deploy to Firebase Hosting, Vercel, or Netlify
   - Set up custom domain
   - Configure SSL certificate

4. **Testing**
   - Unit tests with Vitest
   - E2E tests with Cypress
   - Performance testing

5. **Monitoring**
   - Firebase Analytics
   - Error tracking (Sentry)
   - Performance monitoring

## 📧 Support & Contact

For questions or issues:
- Email: support@ur.ac.rw
- Documentation: [Your docs link]
- Issue Tracker: [Your repo link]

---

**Built for University of Rwanda** | Modern, Minimal, Professional
