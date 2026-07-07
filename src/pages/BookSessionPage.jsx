import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sampleBookings, sampleRoom } from '../data/sampleData';

export default function BookSessionPage() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    const overlap = sampleBookings.some((booking) => {
      if (booking.status !== 'Approved') return false;
      return booking.roomId === sampleRoom.roomId && data.date === booking.date && ((data.startTime < booking.endTime && data.endTime > booking.startTime));
    });

    if (overlap) {
      setMessage('This room is already booked during the selected time.');
      return;
    }

    setMessage('Booking created successfully. Status: Pending');
    reset();
  };

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-semibold text-[#003366]">Book Session</p>
        <h2 className="text-2xl font-semibold">Request a room booking for your assigned room</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Date
          <input type="date" {...register('date', { required: true })} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Start Time
          <input type="time" {...register('startTime', { required: true })} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          End Time
          <input type="time" {...register('endTime', { required: true })} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Course / Module
          <input {...register('course', { required: true })} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Lecturer Name
          <input {...register('lecturer', { required: true })} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
        </label>
        <label className="text-sm font-medium text-slate-700 md:col-span-2">
          Reason
          <textarea {...register('reason', { required: true })} rows="4" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
        </label>
        <div className="md:col-span-2 flex flex-wrap gap-3">
          <button type="button" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Cancel</button>
          <button type="submit" className="rounded-full bg-[#003366] px-5 py-3 text-sm font-semibold text-white">Submit Booking</button>
        </div>
      </form>
      {message && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 rounded-2xl p-3 text-sm ${message.includes('already booked') ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>
          {message}
        </motion.p>
      )}
    </div>
  );
}
