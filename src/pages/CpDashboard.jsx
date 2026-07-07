import { motion } from 'framer-motion';
import { BookMarked, CalendarDays, Building2, BellRing, CheckCircle2, Clock3 } from 'lucide-react';
import { sampleBookings, sampleNotifications, sampleRoom, sampleUser } from '../data/sampleData';

export default function CpDashboard() {
  const pendingBookings = sampleBookings.filter((booking) => booking.status === 'Pending').length;
  const upcomingBooking = sampleBookings.find((booking) => booking.status === 'Approved') ?? sampleBookings[0];

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
                <p className="text-sm lg:text-base font-bold text-black">Current Status</p>
                <p className="mt-1 font-bold text-blue-900 text-lg lg:text-xl">Available</p>
              </div>
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
      </div>
    </div>
  );
}
