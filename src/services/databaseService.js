import { ref, set, get, child, remove, update, query, orderByChild, equalTo } from 'firebase/database';
import { database } from '../config/firebaseConfig';

export const databaseService = {
  // Room operations
  addRoom: async (roomData) => {
    try {
      const newRoomRef = ref(database, `rooms/${roomData.roomId}`);
      await set(newRoomRef, {
        ...roomData,
        createdAt: new Date().toISOString(),
      });
      return { success: true, id: roomData.roomId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateRoom: async (roomId, data) => {
    try {
      await update(ref(database, `rooms/${roomId}`), data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getRoomByID: async (roomId) => {
    try {
      const snapshot = await get(child(ref(database), `rooms/${roomId}`));
      return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
      console.error('Error fetching room:', error);
      return null;
    }
  },

  getRoomsByBuilding: async (building) => {
    try {
      const snapshot = await get(child(ref(database), 'rooms'));
      if (snapshot.exists()) {
        const rooms = Object.values(snapshot.val());
        return rooms.filter((room) => room.building === building);
      }
      return [];
    } catch (error) {
      console.error('Error fetching rooms:', error);
      return [];
    }
  },

  getAllRooms: async () => {
    try {
      const snapshot = await get(child(ref(database), 'rooms'));
      return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      console.error('Error fetching all rooms:', error);
      return [];
    }
  },

  deleteRoom: async (roomId) => {
    try {
      await remove(ref(database, `rooms/${roomId}`));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Booking operations
  addBooking: async (bookingData) => {
    try {
      const newBookingRef = ref(database, `bookings/${bookingData.bookingId}`);
      await set(newBookingRef, {
        ...bookingData,
        createdAt: new Date().toISOString(),
        status: 'Pending',
      });
      return { success: true, id: bookingData.bookingId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateBooking: async (bookingId, data) => {
    try {
      await update(ref(database, `bookings/${bookingId}`), data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getBookingsByRoom: async (roomId) => {
    try {
      const snapshot = await get(child(ref(database), 'bookings'));
      if (snapshot.exists()) {
        const bookings = Object.values(snapshot.val());
        return bookings.filter((booking) => booking.roomId === roomId);
      }
      return [];
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }
  },

  getBookingsByUser: async (userId) => {
    try {
      const snapshot = await get(child(ref(database), 'bookings'));
      if (snapshot.exists()) {
        const bookings = Object.values(snapshot.val());
        return bookings.filter((booking) => booking.userId === userId);
      }
      return [];
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      return [];
    }
  },

  getAllBookings: async () => {
    try {
      const snapshot = await get(child(ref(database), 'bookings'));
      return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      console.error('Error fetching all bookings:', error);
      return [];
    }
  },

  deleteBooking: async (bookingId) => {
    try {
      await remove(ref(database, `bookings/${bookingId}`));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // School operations
  addSchool: async (schoolData) => {
    try {
      const newSchoolRef = ref(database, `schools/${schoolData.schoolId}`);
      await set(newSchoolRef, {
        ...schoolData,
        createdAt: new Date().toISOString(),
      });
      return { success: true, id: schoolData.schoolId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateSchool: async (schoolId, data) => {
    try {
      await update(ref(database, `schools/${schoolId}`), data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getSchoolsByCollege: async (collegeId) => {
    try {
      const snapshot = await get(child(ref(database), 'schools'));
      if (snapshot.exists()) {
        const schools = Object.values(snapshot.val());
        return schools.filter((school) => school.collegeId === collegeId);
      }
      return [];
    } catch (error) {
      console.error('Error fetching schools:', error);
      return [];
    }
  },

  getAllSchools: async () => {
    try {
      const snapshot = await get(child(ref(database), 'schools'));
      return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      console.error('Error fetching all schools:', error);
      return [];
    }
  },

  deleteSchool: async (schoolId) => {
    try {
      await remove(ref(database, `schools/${schoolId}`));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Department operations
  addDepartment: async (departmentData) => {
    try {
      const newDeptRef = ref(database, `departments/${departmentData.departmentId}`);
      await set(newDeptRef, {
        ...departmentData,
        createdAt: new Date().toISOString(),
      });
      return { success: true, id: departmentData.departmentId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateDepartment: async (departmentId, data) => {
    try {
      await update(ref(database, `departments/${departmentId}`), data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getDepartmentsBySchool: async (schoolId) => {
    try {
      const snapshot = await get(child(ref(database), 'departments'));
      if (snapshot.exists()) {
        const departments = Object.values(snapshot.val());
        return departments.filter((dept) => dept.schoolId === schoolId);
      }
      return [];
    } catch (error) {
      console.error('Error fetching departments:', error);
      return [];
    }
  },

  getAllDepartments: async () => {
    try {
      const snapshot = await get(child(ref(database), 'departments'));
      return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      console.error('Error fetching all departments:', error);
      return [];
    }
  },

  deleteDepartment: async (departmentId) => {
    try {
      await remove(ref(database, `departments/${departmentId}`));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

export default databaseService;
