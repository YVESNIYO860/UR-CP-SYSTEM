import { motion } from 'framer-motion';
import { Building2, Users, Zap, CheckCircle2, XCircle } from 'lucide-react';
import { sampleRoom, sampleBookings } from '../data/sampleData';

export default function AvailableRoomsPage() {
  // In a real app, this would fetch from backend
  const rooms = [sampleRoom];

  // Check if room has active bookings on a specific date
  const getRoomBookingsForDate = (roomId, date) => {
    return sampleBookings.filter(
      (booking) => booking.roomId === roomId && booking.date === date && booking.status === 'Approved'
    );
  };

  const today = new Date().toISOString().split('T')[0];
  const bookingsToday = getRoomBookingsForDate(sampleRoom.roomId, today);

  return (
    <div className="relative min-h-screen py-6 px-4">
      {/* Background Image */}
      <div className="fixed inset-0 bg-cover bg-center opacity-90 -z-10"
        style={{
          backgroundImage: 'url(https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg)',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-black">Available Rooms</h1>
          <p className="mt-2 text-sm lg:text-base font-semibold text-black">
            Browse rooms available for booking. Rooms marked as available by their coordinators can be used.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid gap-6">
          {rooms.map((room) => (
            <motion.div
              key={room.roomId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
            >
              {/* Room Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border-2 border-blue-500 bg-transparent p-3 lg:p-4">
                    <Building2 size={28} className="text-blue-600 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-black">{room.building}</h2>
                    <p className="text-lg lg:text-xl font-semibold text-black">Room {room.roomNumber}</p>
                  </div>
                </div>
                <div className="text-center">
                  {room.isAvailable ? (
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 size={32} className="text-green-600 lg:w-8 lg:h-8" />
                      <p className="font-bold text-green-600 text-sm lg:text-base">Available</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <XCircle size={32} className="text-red-600 lg:w-8 lg:h-8" />
                      <p className="font-bold text-red-600 text-sm lg:text-base">Unavailable</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Room Details Grid */}
              <div className="grid gap-4 sm:grid-cols-3 mb-6">
                <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-blue-600" />
                    <p className="text-sm lg:text-base font-bold text-black">Capacity</p>
                  </div>
                  <p className="font-bold text-black text-lg lg:text-xl">{room.capacity} Students</p>
                </div>

                <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={18} className="text-blue-600" />
                    <p className="text-sm lg:text-base font-bold text-black">Facilities</p>
                  </div>
                  <p className="font-bold text-black text-lg lg:text-xl">{room.facilities.length} Available</p>
                  <p className="text-xs lg:text-sm font-semibold text-black mt-1">{room.facilities.join(', ')}</p>
                </div>

                <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                  <p className="text-sm lg:text-base font-bold text-black mb-2">Bookings Today</p>
                  <p className="font-bold text-black text-lg lg:text-xl">{bookingsToday.length}</p>
                  <p className="text-xs lg:text-sm font-semibold text-black mt-1">Active sessions</p>
                </div>
              </div>

              {/* Facilities List */}
              <div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 lg:p-5">
                <p className="text-sm lg:text-base font-bold text-black mb-3">Room Facilities:</p>
                <div className="flex flex-wrap gap-2">
                  {room.facilities.map((facility) => (
                    <span
                      key={facility}
                      className="px-3 py-1 rounded-full border-2 border-blue-500 bg-transparent text-black font-semibold text-xs lg:text-sm"
                    >
                      ✓ {facility}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Message */}
              <div className="mt-6 rounded-lg border-2 bg-transparent p-4 lg:p-5" style={{ borderColor: room.isAvailable ? '#16a34a' : '#dc2626' }}>
                <p className={`font-bold text-sm lg:text-base ${room.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                  {room.isAvailable
                    ? '✓ This room is available for booking. Coordinator can make it unavailable when in use.'
                    : '✗ This room is currently unavailable. Contact the coordinator for more information.'}
                </p>
              </div>

              {/* Action Button */}
              {room.isAvailable && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full px-6 py-3 lg:py-4 rounded-lg bg-blue-900 border-2 border-blue-900 font-bold text-white hover:bg-blue-800 transition-colors text-sm lg:text-base"
                >
                  Book This Room
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border-2 border-blue-500 bg-transparent p-6 lg:p-8"
        >
          <p className="text-sm lg:text-base font-bold text-black mb-4">Room Status Legend:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-green-600" />
              <div>
                <p className="font-bold text-black">Available</p>
                <p className="text-xs lg:text-sm font-semibold text-black">Coordinator has made this room available for booking</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <XCircle size={24} className="text-red-600" />
              <div>
                <p className="font-bold text-black">Unavailable</p>
                <p className="text-xs lg:text-sm font-semibold text-black">Coordinator is using or has marked room as unavailable</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
