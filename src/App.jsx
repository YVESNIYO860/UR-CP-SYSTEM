import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import LoginPageSimple from './pages/LoginPageSimple';
import CpDashboard from './pages/CpDashboard';
import BookSessionPage from './pages/BookSessionPage';
import MyBookingsPage from './pages/MyBookingsPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';
import CpManagementPage from './pages/CpManagementPage';
import RoomManagementPage from './pages/RoomManagementPage';
import BookingManagementPage from './pages/BookingManagementPage';
import ReportsPage from './pages/ReportsPage';
import AdminSettingsPage from './pages/AdminSettingsPage';
import { sampleUser } from './data/sampleData';

function App() {
  const adminUser = { ...sampleUser, role: 'admin', name: 'Dr. Eric Nsanzimana' };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-simple" element={<LoginPageSimple />} />
        <Route path="/cp" element={<Layout user={sampleUser} title="CP Dashboard" />}>
          <Route index element={<CpDashboard />} />
          <Route path="book" element={<BookSessionPage />} />
          <Route path="bookings" element={<MyBookingsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="/admin" element={<Layout user={adminUser} title="Admin Dashboard" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="cp-management" element={<CpManagementPage />} />
          <Route path="rooms" element={<RoomManagementPage />} />
          <Route path="bookings" element={<BookingManagementPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
