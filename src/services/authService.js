import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { auth, database } from '../config/firebaseConfig';
import { ref, set, get, child } from 'firebase/database';

// Note: Registration is disabled in-app. Accounts (CP and Admin) must be created by an administrator
// directly in Firebase Console. The methods below reflect that policy.

// Enable persistence
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.log('Error enabling persistence:', error);
});

export const authService = {
  // Registration is intentionally disabled: return instruction to contact admin
  registerCP: async () => {
    return { success: false, error: 'Registration disabled. Accounts are assigned by an administrator.' };
  },

  registerAdmin: async () => {
    return { success: false, error: 'Admin accounts must be created in Firebase Console by the system owner.' };
  },

  // Login user
  login: async (email, password) => {
      // Wrap login flow with a timeout so it doesn't hang indefinitely
      const timeoutMs = 15000;
      const loginPromise = (async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // Attempt to read user role from database (non-blocking if missing)
          let userRole = 'cp';
          try {
            const userSnapshot = await get(child(ref(database), `users/${user.uid}`));
            if (userSnapshot.exists()) {
              userRole = userSnapshot.val().role || 'cp';
            }
          } catch (dbErr) {
            // If DB read fails, log and continue with default role
            console.error('Error reading user role from database:', dbErr);
          }

          return { success: true, user, role: userRole };
        } catch (error) {
          // Map Firebase error codes to sanitized client codes
          const code = (error && error.code) ? error.code : null;
          if (code === 'auth/wrong-password' || code === 'auth/user-not-found' || code === 'auth/invalid-email') {
            return { success: false, code: 'INVALID_CREDENTIALS' };
          }
          if (code === 'auth/network-request-failed') {
            return { success: false, code: 'NETWORK' };
          }
          // Generic failure (do not expose error.message to client)
          return { success: false, code: 'FAILED' };
        }
      })();

      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => resolve({ success: false, code: 'NETWORK' }), timeoutMs);
      });

      return Promise.race([loginPromise, timeoutPromise]);
  },

  // Logout user
  logout: async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get current user
  getCurrentUser: () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        unsubscribe();
        if (user) {
          const userSnapshot = await get(child(ref(database), `users/${user.uid}`));
          const userData = userSnapshot.exists() ? userSnapshot.val() : { role: 'cp' };
          resolve({ user, role: userData.role });
        } else {
          resolve(null);
        }
      }, reject);
    });
  },

  // Check if email is admin (no client-side admin whitelist)
  isAdminEmail: () => false,

  // Get user data from database
  getUserData: async (uid) => {
    try {
      const snapshot = await get(child(ref(database), `users/${uid}`));
      return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  },

  // Update user data
  updateUserData: async (uid, data) => {
    try {
      await set(ref(database, `users/${uid}`), data, { merge: true });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

export default authService;
