import { motion } from 'framer-motion';
import { Download, TrendingUp, Calendar, DoorOpen } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { title: 'Bookings per Month', data: [12, 19, 14, 28, 35, 42], months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] },
    { title: 'Most Used Rooms', rooms: ['B201 (45)', 'C304 (38)', 'E105 (32)'] },
    { title: 'Approval Rate', rate: '89%', approved: 45, total: 51 },
    { title: 'Daily Bookings', current: 12, change: '+8%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#003366]">Reports</p>
          <h2 className="text-2xl font-semibold">Analytics and booking insights</h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-full bg-[#003366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#002a4d]">
            <Download size={16} /> Export PDF
          </button>
          <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <Download size={16} /> Excel
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Total Bookings', value: '127', icon: Calendar, color: 'blue' },
          { label: 'Approved', value: '89', icon: TrendingUp, color: 'emerald' },
          { label: 'Pending', value: '24', icon: Calendar, color: 'amber' },
          { label: 'Active Rooms', value: '34', icon: DoorOpen, color: 'purple' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          const colors = {
            blue: 'bg-blue-50 text-blue-700',
            emerald: 'bg-emerald-50 text-emerald-700',
            amber: 'bg-amber-50 text-amber-700',
            purple: 'bg-purple-50 text-purple-700',
          };
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className={`rounded-[20px] p-5 ${colors[stat.color]}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold opacity-75">{stat.label}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon size={24} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Bookings Trend (6 Months)</h3>
          <div className="h-60 flex items-end gap-2">
            {[12, 19, 14, 28, 35, 42].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-[#003366]/20 rounded-t-lg" style={{ height: `${(value / 42) * 100}%`, minHeight: '30px' }}></div>
                <span className="text-xs text-slate-500 mt-2">{'JFMAMJ'[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Most Used Rooms</h3>
          <div className="space-y-3">
            {['B201 (45 bookings)', 'C304 (38 bookings)', 'E105 (32 bookings)'].map((room, i) => (
              <div key={i} className="flex items-center justify-between">
                <p className="text-sm">{room}</p>
                <div className="w-40 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#003366]" style={{ width: `${100 - i * 15}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold">Approval Rate</h3>
        <div className="flex items-center gap-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#003366" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 45 * 0.89} ${2 * Math.PI * 45}`} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">89%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-600">Approved Bookings</p>
            <p className="text-3xl font-bold mt-2">45 of 51</p>
            <p className="text-sm text-slate-500 mt-2">6 requests rejected or pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
