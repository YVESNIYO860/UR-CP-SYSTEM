export const sampleUser = {
  uid: 'cp-001',
  name: 'Alice Mukamana',
  email: 'alice.mukamana@ur.ac.rw',
  role: 'cp',
  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  phone: '+250 788 123 456',
  college: 'College of Business and Economics',
  school: 'School of Finance and Banking',
  department: 'Accounting',
  programme: 'BBA',
  academicYear: 'Year 3',
  class: 'BBA 3',
  assignedRoomId: 'room-1',
};

export const sampleRoom = {
  roomId: 'room-1',
  building: 'Business Block',
  roomNumber: 'B201',
  capacity: 80,
  facilities: ['Projector', 'Whiteboard', 'Air Conditioning'],
  status: 'Available',
  assignedCP: 'cp-001',
};

export const sampleBookings = [
  {
    bookingId: 'b1',
    userId: 'cp-001',
    roomId: 'room-1',
    date: '2026-07-08',
    startTime: '09:00',
    endTime: '11:00',
    course: 'Financial Management',
    lecturer: 'Dr. Niyonzima',
    reason: 'Lecture session',
    status: 'Approved',
    createdAt: '2026-07-05',
  },
  {
    bookingId: 'b2',
    userId: 'cp-001',
    roomId: 'room-1',
    date: '2026-07-10',
    startTime: '13:00',
    endTime: '15:00',
    course: 'Business Strategy',
    lecturer: 'Prof. Uwase',
    reason: 'Guest lecture',
    status: 'Pending',
    createdAt: '2026-07-06',
  },
];

export const sampleNotifications = [
  {
    notificationId: 'n1',
    userId: 'cp-001',
    title: 'Booking Approved',
    message: 'Your upcoming session for B201 has been approved.',
    read: false,
    createdAt: '2026-07-06',
  },
  {
    notificationId: 'n2',
    userId: 'cp-001',
    title: 'Upcoming Class Reminder',
    message: 'Your session starts tomorrow at 09:00.',
    read: true,
    createdAt: '2026-07-05',
  },
];

export const sampleAdminUsers = [
  {
    uid: 'admin-001',
    name: 'Dr. Eric Nsanzimana',
    email: 'eric.nsanzimana@ur.ac.rw',
    role: 'admin',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    phone: '+250 788 654 321',
  },
];
