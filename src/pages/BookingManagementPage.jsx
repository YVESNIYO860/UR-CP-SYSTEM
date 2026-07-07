import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import { sampleBookings } from '../data/sampleData';

export default function BookingManagementPage() {
  const [bookings, setBookings] = useState(sampleBookings);
  const [filter, setFilter] = useState('All');

  const statusClasses = {
    Pending: 'bg-amber-50 text-amber-700',
    Approved: 'bg-emerald-50 text-emerald-700',
    Rejected: 'bg-rose-50 text-rose-700',
    Cancelled: 'bg-slate-100 text-slate-700',
  };

  const filteredBookings = filter === 'All' ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#003366]">Booking Management</p>
          <h2 className="text-2xl font-semibold">Approve, reject, and manage all bookings</h2>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Pending', 'Approved', 'Rejected', 'Cancelled'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
              filter === status ? 'bg-[#003366] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="rounded-[24px] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">CP</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Room</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Date</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Time</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Course</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredBookings.map((booking) => (
              <tr key={booking.bookingId} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">Alice Mukamana</td>
                <td className="px-6 py-4">B201</td>
                <td className="px-6 py-4">{booking.date}</td>
                <td className="px-6 py-4">{booking.startTime} – {booking.endTime}</td>
                <td className="px-6 py-4">{booking.course}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[booking.status]}`}>{booking.status}</span></td>
                <td className="px-6 py-4 flex gap-2">
                  {booking.status === 'Pending' && (
                    <>
                      <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-100">
                        <CheckCircle size={14} /> Approve
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100">
                        <XCircle size={14} /> Reject
                      </button>
                    </>
                  )}
                  {booking.status === 'Approved' && (
                    <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200">
                      <Clock size={14} /> Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredBookings.length === 0 && (
        <div className="rounded-[20px] border border-slate-200 bg-white p-10 text-center">
          <p className="text-slate-500">No bookings found with status "{filter}"</p>
        </div>
      )}
    </div>
  );
}
