import { motion } from 'framer-motion';
import { Bell, Building2, LogOut, Menu, UserCircle2, Settings } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const cpNavItems = [
  { name: 'Dashboard', to: '/cp' },
  { name: 'Book Session', to: '/cp/book' },
  { name: 'My Bookings', to: '/cp/bookings' },
  { name: 'Notifications', to: '/cp/notifications' },
  { name: 'Profile', to: '/cp/profile' },
];

const adminNavItems = [
  { name: 'Dashboard', to: '/admin' },
  { name: 'CP Management', to: '/admin/cp-management' },
  { name: 'Buildings & Rooms', to: '/admin/rooms' },
  { name: 'Bookings', to: '/admin/bookings' },
  { name: 'Reports', to: '/admin/reports' },
  { name: 'Settings', to: '/admin/settings' },
];

export default function Layout({ user, title }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isAdmin = user.role === 'admin';
  
  const handleLogout = () => {
    navigate('/login');
  };
  const navItems = isAdmin ? adminNavItems : cpNavItems;

  return (
    <div className="min-h-screen">
      <div className="bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
          <aside className="hidden w-72 flex-col justify-between border-r border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur lg:flex">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-2xl bg-[#003366] p-3 text-white">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">University of Rwanda</p>
                  <p className="text-xs text-slate-500">{isAdmin ? 'Admin Portal' : 'CP Booking'}</p>
                </div>
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-[#003366] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100">
              <LogOut size={18} />
              Logout
            </button>
          </aside>

          <div className="flex-1">
            <header className="border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button className="rounded-xl border border-slate-200 p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    <Menu size={18} />
                  </button>
                  <div>
                    <p className="text-sm text-slate-500">{title}</p>
                    <h1 className="text-lg font-semibold">University Portal</h1>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="relative rounded-full border border-slate-200 p-2">
                    <Bell size={16} />
                    <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                  </button>
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                    <img src={user.photo} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
                    <div className="hidden text-left sm:block">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-slate-500">{isAdmin ? 'Administrator' : 'CP'}</p>
                    </div>
                  </div>
                </div>
              </div>
              {mobileOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-3 lg:hidden">
                  {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600" onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </NavLink>
                  ))}
                  <button 
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600">
                    <LogOut size={16} />
                    Logout
                  </button>
                </motion.div>
              )}
            </header>

            <main className="p-4 sm:p-6 lg:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
