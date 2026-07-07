import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { sampleBookings, sampleRoom } from '../data/sampleData';

export default function BookSessionPage() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const onSubmit = (data) => {
    // Check if room is available
    if (!sampleRoom.isAvailable) {
      setMessageType('error');
      setMessage('This room is currently unavailable. The coordinator has marked it as unavailable. Please check available rooms.');
      return;
    }

    const overlap = sampleBookings.some((booking) => {
      if (booking.status !== 'Approved') return false;
      return booking.roomId === sampleRoom.roomId && data.date === booking.date && ((data.startTime < booking.endTime && data.endTime > booking.startTime));
    });

    if (overlap) {
      setMessageType('error');
      setMessage('This room is already booked during the selected time.');
      return;
    }

    setMessageType('success');
    setMessage('Booking created successfully. Status: Pending');
    reset();
  };

  return (
    <div className="relative min-h-screen py-6 px-4">
      {/* Background Image */}
      <div className="fixed inset-0 bg-cover bg-center opacity-90 -z-10"
        style={{
          backgroundImage: 'url(https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg)',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Room Availability Alert */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg border-2 p-4 lg:p-6 bg-transparent ${
            sampleRoom.isAvailable ? 'border-green-500' : 'border-red-500'
          }`}
        >
          <div className="flex items-start gap-3">
            {sampleRoom.isAvailable ? (
              <>
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-green-600 text-base lg:text-lg">Room Available for Booking</p>
                  <p className="text-sm lg:text-base font-semibold text-black mt-1">
                    Room {sampleRoom.roomNumber} in {sampleRoom.building} is currently available. You can proceed with booking.
                  </p>
                </div>
              </>
            ) : (
              <>
                <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-red-600 text-base lg:text-lg">Room Currently Unavailable</p>
                  <p className="text-sm lg:text-base font-semibold text-black mt-1">
                    Room {sampleRoom.roomNumber} in {sampleRoom.building} is currently unavailable. The coordinator is using it or has marked it as unavailable.
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
        >
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">Request Room Booking</h2>
            <p className="text-sm lg:text-base font-semibold text-black mt-2">
              Book your assigned room in {sampleRoom.building} (Room {sampleRoom.roomNumber})
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-bold text-black">
              Date
              <input
                type="date"
                {...register('date', { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 lg:py-4 text-black font-semibold outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm font-bold text-black">
              Start Time
              <input
                type="time"
                {...register('startTime', { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 lg:py-4 text-black font-semibold outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm font-bold text-black">
              End Time
              <input
                type="time"
                {...register('endTime', { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 lg:py-4 text-black font-semibold outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm font-bold text-black">
              Course / Module
              <input
                {...register('course', { required: true })}
                placeholder="e.g., Financial Management"
                className="mt-2 w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 lg:py-4 text-black font-semibold outline-none focus:border-blue-600 placeholder-slate-400"
              />
            </label>
            <label className="text-sm font-bold text-black">
              Lecturer Name
              <input
                {...register('lecturer', { required: true })}
                placeholder="e.g., Dr. Niyonzima"
                className="mt-2 w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 lg:py-4 text-black font-semibold outline-none focus:border-blue-600 placeholder-slate-400"
              />
            </label>
            <label className="text-sm font-bold text-black md:col-span-2">
              Reason for Booking
              <textarea
                {...register('reason', { required: true })}
                rows="4"
                placeholder="Describe the purpose of this booking..."
                className="mt-2 w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 lg:py-4 text-black font-semibold outline-none focus:border-blue-600 placeholder-slate-400 resize-none"
              />
            </label>

            <div className="md:col-span-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => reset()}
                className="rounded-lg border-2 border-blue-500 bg-transparent px-6 py-3 lg:py-4 text-sm lg:text-base font-bold text-black hover:bg-blue-50 transition-colors"
              >
                Clear Form
              </button>
              <button
                type="submit"
                disabled={!sampleRoom.isAvailable}
                className={`rounded-lg px-6 py-3 lg:py-4 text-sm lg:text-base font-bold text-white transition-colors ${
                  sampleRoom.isAvailable
                    ? 'bg-blue-900 border-2 border-blue-900 hover:bg-blue-800'
                    : 'bg-slate-400 border-2 border-slate-400 cursor-not-allowed'
                }`}
              >
                Submit Booking
              </button>
            </div>
          </form>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-lg border-2 p-4 lg:p-5 bg-transparent flex items-start gap-3 ${
                messageType === 'error'
                  ? 'border-red-500'
                  : 'border-green-500'
              }`}
            >
              {messageType === 'error' ? (
                <>
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <p className={`font-bold text-sm lg:text-base ${messageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                    {message}
                  </p>
                </>
              ) : (
                <>
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <p className="font-bold text-green-600 text-sm lg:text-base">
                    {message}
                  </p>
                </>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
