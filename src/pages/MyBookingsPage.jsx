import { sampleBookings } from '../data/sampleData';

const statusClasses = {
  Pending: 'bg-amber-50 text-amber-700',
  Approved: 'bg-emerald-50 text-emerald-700',
  Rejected: 'bg-rose-50 text-rose-700',
  Cancelled: 'bg-slate-100 text-slate-700',
};

export default function MyBookingsPage() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#003366]">My Bookings</p>
          <h2 className="text-2xl font-semibold">Track your class requests</h2>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Date</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Time</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Course</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Lecturer</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Status</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {sampleBookings.map((item) => (
              <tr key={item.bookingId}>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.startTime} - {item.endTime}</td>
                <td className="px-4 py-3">{item.course}</td>
                <td className="px-4 py-3">{item.lecturer}</td>
                <td className="px-4 py-3"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[item.status]}`}>{item.status}</span></td>
                <td className="px-4 py-3 text-slate-500">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
