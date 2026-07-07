import { motion } from 'framer-motion';
import { Building2, CalendarRange, ClipboardList, DoorOpen, UserRound, Users } from 'lucide-react';

const summary = [
  { label: 'Total CPs', value: '24', icon: Users },
  { label: 'Total Rooms', value: '36', icon: DoorOpen },
  { label: 'Pending Bookings', value: '8', icon: ClipboardList },
  { label: 'Approved Bookings', value: '17', icon: CalendarRange },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summary.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">{item.label}</p>
                <div className="rounded-2xl bg-[#003366]/10 p-2 text-[#003366]">
                  <Icon size={18} />
                </div>
              </div>
              <p className="mt-4 text-3xl font-semibold">{item.value}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#003366]">Booking Management</p>
            <h2 className="text-2xl font-semibold">Approve, reject, cancel, and review requests</h2>
          </div>
          <button className="rounded-full bg-[#003366] px-4 py-2 text-sm font-semibold text-white">New Report</button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left">CP</th>
                <th className="px-4 py-3 text-left">Room</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {[{ name: 'Alice Mukamana', room: 'B201', date: '2026-07-08', status: 'Pending' }, { name: 'Jean de Dieu', room: 'C304', date: '2026-07-09', status: 'Approved' }].map((entry) => (
                <tr key={entry.name}>
                  <td className="px-4 py-3">{entry.name}</td>
                  <td className="px-4 py-3">{entry.room}</td>
                  <td className="px-4 py-3">{entry.date}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{entry.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
