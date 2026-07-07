# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- Git (optional)

### Step 1: Install Dependencies
```bash
cd "c:\Users\Libraly\Desktop\UR CP SYSTEM"
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

### Step 3: Login with Demo Credentials

**For CP Dashboard:**
- Email: `alice@ur.ac.rw`
- Password: anything

**For Admin Dashboard:**
- Email: `admin@ur.ac.rw`
- Password: anything

## 📂 Project Structure

```
src/
├── components/
│   └── Layout.jsx              # Shared layout with sidebar
├── pages/
│   ├── LandingPage.jsx         # Public homepage
│   ├── LoginPage.jsx           # Role-based login
│   ├── CpDashboard.jsx         # CP home
│   ├── BookSessionPage.jsx     # Create bookings
│   ├── MyBookingsPage.jsx      # View bookings
│   ├── NotificationsPage.jsx   # Notifications
│   ├── ProfilePage.jsx         # User profile
│   ├── AdminDashboard.jsx      # Admin home
│   ├── CpManagementPage.jsx    # Manage CPs
│   ├── RoomManagementPage.jsx  # Manage rooms
│   ├── BookingManagementPage.jsx # Manage bookings
│   └── ReportsPage.jsx         # Analytics
├── data/
│   └── sampleData.js           # Demo data
├── App.jsx                     # Routes
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🔄 Common Tasks

### Add a New Page
1. Create file in `src/pages/NewPage.jsx`
2. Import in `App.jsx`
3. Add route:
```jsx
<Route path="/new" element={<NewPage />} />
```

### Add a New Component
1. Create file in `src/components/NewComponent.jsx`
2. Export component
3. Import and use in pages

### Modify Styles
- Edit `src/index.css` for globals
- Use inline Tailwind classes in JSX
- Tailwind config in `tailwind.config.js` (ready to create)

### Build for Production
```bash
npm run build
npm run preview  # Test production build
```

## 🐛 Debugging

### Check Console Errors
Open browser DevTools (F12) → Console tab

### React DevTools
[Install React DevTools browser extension](https://react-devtools-tutorial.vercel.app/)

### Performance Profiling
1. Open DevTools → Performance tab
2. Click record
3. Interact with app
4. Click stop

## 📦 Adding Libraries

```bash
npm install package-name
```

Common commands:
```bash
npm install axios                  # HTTP requests
npm install clsx                   # Class utilities
npm install date-fns              # Date handling
npm install zustand               # State management
```

## 🎨 Tailwind CSS Classes

Quick reference:
```jsx
// Colors
className="text-[#003366]"        // University blue
className="bg-slate-50"           // Light background
className="text-emerald-600"      // Success green

// Spacing
className="p-6"                   // Padding
className="mb-4"                  // Margin bottom
className="gap-3"                 // Gap between items

// Layout
className="grid gap-4 md:grid-cols-2"  // Responsive grid
className="flex items-center justify-between"  // Flex

// Utilities
className="rounded-xl"            // Border radius
className="shadow-sm"             // Soft shadow
className="transition"            // Smooth animation
className="hover:bg-slate-50"     // Hover state
```

## 🔐 Environment Variables

Create `.env.local` with Firebase config:
```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
...
```

## 🧪 Testing Features

### Test CP Flow
1. Go to `/login`
2. Enter email with `@ur.ac.rw`
3. Click dashboard link → see assigned room
4. Try booking a session
5. View bookings table
6. Check notifications

### Test Admin Flow
1. Go to `/login`
2. Enter email with `admin` keyword
3. Click admin link
4. Try each admin page
5. Try approving/rejecting bookings

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Framer Motion Examples](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev)

## 💾 Save Your Work

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

## 🆘 Troubleshooting

**Port 5174 already in use?**
```bash
# Kill the process
# On Windows:
netstat -ano | findstr :5174
taskkill /PID <PID> /F
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
```

**Styles not updating?**
```bash
# Clear Vite cache
rm -r .vite
npm run dev
```

## ✅ Pre-Deployment Checklist

- [ ] All pages tested on mobile
- [ ] No console errors
- [ ] Dark mode works
- [ ] Forms validate correctly
- [ ] Images load properly
- [ ] Build completes without errors
- [ ] Environment variables set

## 📞 Getting Help

1. Check the [README.md](README.md) for overview
2. Review [FEATURES.md](FEATURES.md) for capabilities
3. Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment
4. Review component code for examples

---

**Happy coding!** 🎉
