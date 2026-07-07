import { motion } from 'framer-motion';
import { BookMarked, CalendarDays, Building2, BellRing, CheckCircle2, Clock3, ToggleRight, ToggleLeft } from 'lucide-react';
import { useState } from 'react';
import { sampleBookings, sampleNotifications, sampleRoom, sampleUser } from '../data/sampleData';

export default function CpDashboard() {
  const [roomAvailable, setRoomAvailable] = useState(sampleRoom.isAvailable);
  const [showMessage, setShowMessage] = useState(false);
  
  const pendingBookings = sampleBookings.filter((booking) => booking.status === 'Pending').length;
  const upcomingBooking = sampleBookings.find((booking) => booking.status === 'Approved') ?? sampleBookings[0];

  const toggleRoomAvailability = () => {
    setRoomAvailable(!roomAvailable);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
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

      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm lg:text-base font-bold text-black">Assigned Room</p>
                <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-black">{sampleRoom.building}</h2>
                <p className="text-black font-semibold">Room {sampleRoom.roomNumber}</p>
              </div>
              <div className="rounded-full bg-blue-900 px-3 py-1 text-sm lg:text-base font-bold text-white">{sampleRoom.status}</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                <p className="text-sm lg:text-base font-bold text-black">Capacity</p>
                <p className="mt-1 font-bold text-black text-lg lg:text-xl">{sampleRoom.capacity} Students</p>
              </div>
              <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                <p className="text-sm lg:text-base font-bold text-black">Facilities</p>
                <p className="mt-1 font-bold text-black text-lg lg:text-xl">{sampleRoom.facilities.join(', ')}</p>
              </div>
              <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                <p className="text-sm lg:text-base font-bold text-black">Room Status</p>
                <p className={`mt-1 font-bold text-lg lg:text-xl ${roomAvailable ? 'text-green-600' : 'text-red-600'}`}>
                  {roomAvailable ? '✓ Available' : '✗ Unavailable'}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
              <div>
                <p className="text-sm lg:text-base font-bold text-black">Make Room Available for Others</p>
                <p className="text-xs lg:text-sm font-semibold text-black mt-1">Mark as unavailable when you're using it</p>
              </div>
              <button
                onClick={toggleRoomAvailability}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-500 bg-transparent hover:bg-blue-50 transition-colors"
              >
                {roomAvailable ? (
                  <>
                    <ToggleRight size={24} className="text-green-600" />
                    <span className="font-bold text-black text-sm">On</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft size={24} className="text-red-600" />
                    <span className="font-bold text-black text-sm">Off</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-transparent border-2 border-blue-500 p-3 text-blue-600">
                <CalendarDays size={20} className="lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-bold text-black">Upcoming Booking</p>
                <p className="text-sm lg:text-base font-semibold text-black">{upcomingBooking?.date}</p>
              </div>
            </div>
            <div className="mt-6 rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
              <p className="font-bold text-black text-lg lg:text-xl">{upcomingBooking?.course}</p>
              <p className="mt-2 text-sm lg:text-base font-semibold text-black">{upcomingBooking?.lecturer} • {upcomingBooking?.startTime} - {upcomingBooking?.endTime}</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm lg:text-base font-semibold text-black">
              <CheckCircle2 size={18} className="text-blue-900 lg:w-5 lg:h-5" />
              Booking status: {upcomingBooking?.status}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm lg:text-base font-bold text-black">Booking Status</p>
              <Clock3 size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            </div>
            <p className="mt-3 text-3xl lg:text-4xl font-bold text-black">{pendingBookings}</p>
            <p className="text-sm lg:text-base font-semibold text-black">Pending requests</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm lg:text-base font-bold text-black">Notifications</p>
              <BellRing size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            </div>
            <p className="mt-3 text-3xl lg:text-4xl font-bold text-black">{sampleNotifications.filter((item) => !item.read).length}</p>
            <p className="text-sm lg:text-base font-semibold text-black">Unread updates</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-blue-500 bg-transparent p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm lg:text-base font-bold text-black">Assigned CP</p>
              <BookMarked size={20} className="text-blue-600 lg:w-6 lg:h-6" />
            </div>
            <p className="mt-3 text-3xl lg:text-4xl font-bold text-black">{sampleUser.name}</p>
            <p className="text-sm lg:text-base font-semibold text-black">{sampleUser.class}</p>
          </motion.div>
        </div>

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-4 right-4 rounded-lg border-2 p-4 lg:p-5 ${
              roomAvailable
                ? 'border-green-500 bg-transparent text-green-700'
                : 'border-red-500 bg-transparent text-red-700'
            }`}
          >
            <p className="font-bold text-sm lg:text-base">
              {roomAvailable ? '✓ Room is now AVAILABLE for bookings' : '✗ Room is now UNAVAILABLE for bookings'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
