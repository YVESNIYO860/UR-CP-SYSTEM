import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Building2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[#003366] p-3 text-white">
            <Building2 size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">University of Rwanda</p>
            <p className="text-xs text-slate-500">CP Room Booking System</p>
          </div>
        </div>
        <Link to="/login" className="rounded-full bg-[#003366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#002a4d]">
          Login
        </Link>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-16">
        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
            <ShieldCheck size={16} className="text-[#003366]" />
            Secure university portal for CPs and administrators
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              University of Rwanda<br />
              <span className="text-[#003366]">CP Room Booking System</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Manage assigned classroom bookings with clarity, speed, and a professional portal designed for daily academic use.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/login" className="inline-flex items-center gap-2 rounded-full bg-[#003366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#002a4d]">
              Access Portal <ArrowRight size={16} />
            </Link>
            <a href="#features" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              Learn More
            </a>
          </div>
        </motion.section>

        <motion.aside initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-[#003366]/10 p-3 text-[#003366]">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="font-semibold">Fast room booking</p>
              <p className="text-sm text-slate-500">For assigned CP classrooms only</p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">CP Dashboard</p>
              <p>View assigned room, submit bookings, track approvals, and receive updates.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Admin Dashboard</p>
              <p>Create CPs, manage rooms, approve bookings, and access booking reports.</p>
            </div>
          </div>
        </motion.aside>
      </main>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Role-based access', 'Secure portals for administrators and CPs with protected routes.'],
            ['Instant booking checks', 'Avoid conflicts by preventing overlapping approved bookings.'],
            ['Professional reporting', 'Review activity, trends, and booking status with confidence.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
              <p className="text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80 py-6 text-center text-sm text-slate-500">
        <p>University of Rwanda • CP Room Booking System • contact@ur.ac.rw</p>
      </footer>
    </div>
  );
}
